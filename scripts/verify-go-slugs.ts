import fs from "node:fs";
import path from "node:path";

import {
  listRegisteredGoSlugs,
  lookupGoDestination,
} from "../src/data/resolveGoDestination";

const SRC_ROOT = path.join(process.cwd(), "src");
const GO_HREF = /\/go\/([a-z0-9][a-z0-9-]*)/gi;

/** Doc placeholders like `/go/slug` — not real slugs. */
/** Doc placeholders and retired slugs (handled via next.config redirects). */
const IGNORED_SLUGS = new Set([
  "slug",
  "dreamz",
  "sex-emulator",
  "litlatinz",
  "pridepair",
]);

function walk(dir: string, files: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      walk(full, files);
    } else if (/\.(tsx?|jsx?|mjs)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function referencedGoSlugs(): Set<string> {
  const slugs = new Set<string>();
  for (const file of walk(SRC_ROOT)) {
    const text = fs.readFileSync(file, "utf8");
    for (const match of text.matchAll(GO_HREF)) {
      const slug = match[1]!.toLowerCase();
      if (!IGNORED_SLUGS.has(slug)) {
        slugs.add(slug);
      }
    }
  }
  return slugs;
}

const registered = new Set(listRegisteredGoSlugs());
const referenced = referencedGoSlugs();
const missing: string[] = [];

for (const slug of referenced) {
  if (!lookupGoDestination(slug)) {
    missing.push(slug);
  }
}

const unused = [...registered].filter((slug) => !referenced.has(slug));

console.log(`Registered /go slugs: ${registered.size}`);
console.log(`Referenced in src:    ${referenced.size}`);

if (missing.length) {
  console.error("\nMissing destinations (will 404):");
  for (const slug of missing.sort()) {
    console.error(`  - ${slug}`);
  }
  process.exit(1);
}

if (unused.length) {
  console.log("\nRegistered but not referenced in src (ok):");
  for (const slug of unused) {
    console.log(`  - ${slug}`);
  }
}

console.log("\nAll referenced /go/ slugs resolve.");