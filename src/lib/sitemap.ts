import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";
import { countries } from "@/data/countries";

export const SITE_URL = "https://www.thedatecompass.com";

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
  pagePath: string;
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

/** Routes that must not appear in the sitemap (noindex drafts or redirects). */
const SITEMAP_EXCLUDED_ROUTES = new Set([
  "/category/ai-girlfriend-sites",
  "/category/ai-girlfriend-v2",
  "/category/ai-chat-platform",
  "/top-offers/gay-dating",
]);

const SKIP_DIRS = new Set(["api"]);
const PAGE_FILES = new Set(["page.tsx", "page.ts", "page.jsx", "page.js"]);

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

/**
 * Walk src/app and collect every route backed by a page file.
 * New pages are included automatically — no manual URL list needed.
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

export function discoverAppRoutes(): DiscoveredRoute[] {
  const appDir = path.join(process.cwd(), "src", "app");
  return dedupeRoutes(collectAppRoutes(appDir));
}

export function buildSitemapEntries(): MetadataRoute.Sitemap {
  const routes = discoverAppRoutes().filter(
    ({ route }) =>
      isIndexableCountryRoute(route) && !SITEMAP_EXCLUDED_ROUTES.has(route)
  );

  return routes.map(({ route, pagePath }) => {
    const meta = getRouteMeta(route);
    const lastModified = fs.statSync(pagePath).mtime;

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
