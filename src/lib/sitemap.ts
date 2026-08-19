import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { countries } from "@/data/countries";

export const SITE_URL = "https://thedatecompass.com";

/** Country landing paths keyed by `/slug` from countries.ts */
const COUNTRY_ROUTE_AVAILABILITY = new Map<string, boolean>(
  countries.map((country) => [`/${country.slug}`, country.isAvailable])
);

function isIndexableCountryRoute(route: string): boolean {
  if (!COUNTRY_ROUTE_AVAILABILITY.has(route)) {
    return true;
  }

  return COUNTRY_ROUTE_AVAILABILITY.get(route) === true;
}

type RouteMeta = {
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
};

type DiscoveredRoute = {
  route: string;
  pagePath: string | null;
};

const ROUTE_META: Record<string, RouteMeta> = {
  "/": { priority: 1, changeFrequency: "weekly" },
  "/category/ai-girlfriend": { priority: 0.9, changeFrequency: "weekly" },
  "/offers/dreamz-ai": { priority: 0.9, changeFrequency: "weekly" },
  "/offers/realsexclub": { priority: 0.9, changeFrequency: "weekly" },
  "/gay-dating": { priority: 0.85, changeFrequency: "weekly" },
  "/cozy-sites": { priority: 0.8, changeFrequency: "weekly" },
  "/usa": { priority: 0.85, changeFrequency: "weekly" },
  "/germany": { priority: 0.85, changeFrequency: "weekly" },
  "/france": { priority: 0.85, changeFrequency: "weekly" },
  "/canada": { priority: 0.85, changeFrequency: "weekly" },
  "/australia": { priority: 0.85, changeFrequency: "weekly" },
  "/uk": { priority: 0.85, changeFrequency: "weekly" },
  "/privacy-policy": { priority: 0.3, changeFrequency: "yearly" },
  "/terms-and-conditions": { priority: 0.3, changeFrequency: "yearly" },
  "/cookie-policy": { priority: 0.3, changeFrequency: "yearly" },
  "/disclaimer": { priority: 0.3, changeFrequency: "yearly" },
  "/affiliate-disclosure": { priority: 0.3, changeFrequency: "yearly" },
};

/** Noindex drafts, redirects, and duplicate/test landings. */
const SITEMAP_EXCLUDED_ROUTES = new Set([
  "/category/ai-girlfriend-sites",
  "/category/ai-girlfriend-v2",
  "/category/ai-chat-platform",
  "/top-offers/gay-dating",
]);

const SKIP_DIRS = new Set(["api", "private", "test", "tests"]);
const PAGE_FILES = new Set(["page.tsx", "page.ts", "page.jsx", "page.js"]);
const SKIP_ROUTE_SEGMENTS = new Set(["api", "private", "test", "tests"]);

function getRouteMeta(route: string): RouteMeta {
  if (ROUTE_META[route]) {
    return ROUTE_META[route];
  }

  if (route.startsWith("/category/")) {
    return { priority: 0.85, changeFrequency: "weekly" };
  }

  if (route.startsWith("/top-offers")) {
    return { priority: 0.8, changeFrequency: "weekly" };
  }

  if (route.startsWith("/offers/")) {
    return { priority: 0.85, changeFrequency: "weekly" };
  }

  return { priority: 0.7, changeFrequency: "monthly" };
}

function isSkippedRoute(route: string): boolean {
  const segments = route.split("/").filter(Boolean);
  return segments.some((segment) => SKIP_ROUTE_SEGMENTS.has(segment));
}

/**
 * Walk src/app and collect every route backed by a page file.
 * New pages are included automatically when this runs at build time.
 */
function collectAppRoutes(dir: string, routePrefix = ""): DiscoveredRoute[] {
  if (!fs.existsSync(dir)) {
    return [];
  }

  const routes: DiscoveredRoute[] = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const name = entry.name;

    if (SKIP_DIRS.has(name) || name.startsWith("_")) {
      continue;
    }

    const fullPath = path.join(dir, name);

    if (entry.isDirectory()) {
      if (name.startsWith("(") && name.endsWith(")")) {
        routes.push(...collectAppRoutes(fullPath, routePrefix));
        continue;
      }

      if (name.startsWith("[")) {
        continue;
      }

      const nextPrefix = routePrefix ? `${routePrefix}/${name}` : `/${name}`;
      routes.push(...collectAppRoutes(fullPath, nextPrefix));
      continue;
    }

    if (PAGE_FILES.has(name)) {
      routes.push({
        route: routePrefix || "/",
        pagePath: fullPath,
      });
    }
  }

  return routes;
}

function toAbsoluteUrl(route: string): string {
  return route === "/" ? SITE_URL : `${SITE_URL}${route}`;
}

function sortRoutes(a: DiscoveredRoute, b: DiscoveredRoute): number {
  if (a.route === "/") return -1;
  if (b.route === "/") return 1;
  return a.route.localeCompare(b.route);
}

function dedupeRoutes(routes: DiscoveredRoute[]): DiscoveredRoute[] {
  const byRoute = new Map<string, DiscoveredRoute>();

  for (const item of routes) {
    if (!byRoute.has(item.route)) {
      byRoute.set(item.route, item);
    }
  }

  return Array.from(byRoute.values()).sort(sortRoutes);
}

function resolveAppDir(): string | null {
  const candidates = [
    path.join(process.cwd(), "src", "app"),
    path.join(process.cwd(), "app"),
  ];

  return candidates.find((dir) => fs.existsSync(dir)) ?? null;
}

export function discoverAppRoutes(): DiscoveredRoute[] {
  const appDir = resolveAppDir();
  if (!appDir) {
    return [];
  }

  return dedupeRoutes(collectAppRoutes(appDir));
}

function isPublicSitemapRoute(route: string): boolean {
  return (
    !isSkippedRoute(route) &&
    isIndexableCountryRoute(route) &&
    !SITEMAP_EXCLUDED_ROUTES.has(route)
  );
}

/**
 * Public indexable routes (34 pages). Used when src/app is not on the server.
 * Keep in sync with src/app page.tsx files; exclude API, private, test, noindex, and duplicates.
 */
const PUBLIC_ROUTES: string[] = [
  "/",
  "/affiliate-disclosure",
  "/australia",
  "/canada",
  "/category/ai-girlfriend",
  "/cookie-policy",
  "/cozy-sites",
  "/disclaimer",
  "/france",
  "/gay-dating",
  "/germany",
  "/offers/ai-companion",
  "/offers/casual-dating",
  "/offers/dreamz-ai",
  "/offers/dreamz-ai-companion",
  "/offers/fetishpartner",
  "/offers/gay-dating-sites",
  "/offers/grannyhunter",
  "/offers/grannyhunter-v2",
  "/offers/litlatinz",
  "/offers/manfinder",
  "/offers/manfinder-v2",
  "/offers/milf-dating",
  "/offers/milffinder",
  "/offers/realsexclub",
  "/offers/transdate",
  "/offers/transdate-dating",
  "/privacy-policy",
  "/terms-and-conditions",
  "/top-offers",
  "/top-offers/adult",
  "/top-offers/mature",
  "/uk",
  "/usa",
];

export function buildSitemapEntries(): MetadataRoute.Sitemap {
  const byRoute = new Map<string, DiscoveredRoute>();

  for (const route of PUBLIC_ROUTES) {
    byRoute.set(route, { route, pagePath: null });
  }

  for (const item of discoverAppRoutes()) {
    if (!isPublicSitemapRoute(item.route)) {
      continue;
    }
    byRoute.set(item.route, item);
  }

  const routes = Array.from(byRoute.values()).sort(sortRoutes);

  return routes.map(({ route, pagePath }) => {
    const meta = getRouteMeta(route);
    const lastModified =
      pagePath && fs.existsSync(pagePath)
        ? fs.statSync(pagePath).mtime
        : new Date();

    return {
      url: toAbsoluteUrl(route),
      lastModified,
      changeFrequency: meta.changeFrequency ?? "monthly",
      priority: meta.priority ?? 0.7,
    };
  });
}

/** Route paths only — useful for debugging */
export function getDiscoveredRoutes(): string[] {
  return discoverAppRoutes().map((item) => item.route);
}
