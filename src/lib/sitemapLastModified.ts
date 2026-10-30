import { execFileSync } from "node:child_process";
import { existsSync, statSync } from "node:fs";
import path from "node:path";

const gitDateCache = new Map<string, string | null>();

export function routeToAppFile(route: string): string {
  const page = route === "/" ? "/page.tsx" : `${route}/page.tsx`;
  const candidates = [
    `src/app${page}`,
    `src/app/(site)${page}`,
    `src/app/(de)${page}`,
  ];

  for (const candidate of candidates) {
    if (existsSync(path.join(process.cwd(), candidate))) {
      return candidate;
    }
  }

  return candidates[1];
}

export function getFileLastModifiedIso(relativeFilePath: string): string | null {
  const gitIso = getGitLastModifiedIso(relativeFilePath);
  if (gitIso) return gitIso;

  const absolutePath = path.join(process.cwd(), relativeFilePath.replace(/\\/g, "/"));
  if (!existsSync(absolutePath)) return null;
  return statSync(absolutePath).mtime.toISOString();
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
