import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";

const gitDateCache = new Map<string, string | null>();

export function routeToAppFile(route: string): string {
  if (route === "/") {
    return "src/app/page.tsx";
  }
  return `src/app${route}/page.tsx`;
}

export function getGitLastModifiedIso(relativeFilePath: string): string | null {
  const normalized = relativeFilePath.replace(/\\/g, "/");
  if (gitDateCache.has(normalized)) {
    return gitDateCache.get(normalized) ?? null;
  }

  const absolutePath = path.join(process.cwd(), normalized);
  if (!existsSync(absolutePath)) {
    gitDateCache.set(normalized, null);
    return null;
  }

  try {
    const iso = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", normalized],
      {
        encoding: "utf8",
        cwd: process.cwd(),
        stdio: ["ignore", "pipe", "ignore"],
      },
    ).trim();
    const value = iso || null;
    gitDateCache.set(normalized, value);
    return value;
  } catch {
    gitDateCache.set(normalized, null);
    return null;
  }
}
