import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/sitemap";

type RouteMeta = {
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
};

/**
 * Public indexable pages (34). Excludes API, private/test routes,
 * noindex drafts, and duplicate redirects such as /top-offers/gay-dating.
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
  "/free-gay-dating-sites",
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

const ROUTE_META: Record<string, RouteMeta> = {
  "/": { priority: 1, changeFrequency: "weekly" },
  "/category/ai-girlfriend": { priority: 0.9, changeFrequency: "weekly" },
  "/offers/dreamz-ai": { priority: 0.9, changeFrequency: "weekly" },
  "/offers/realsexclub": { priority: 0.9, changeFrequency: "weekly" },
  "/gay-dating": { priority: 0.85, changeFrequency: "weekly" },
  "/free-gay-dating-sites": { priority: 0.85, changeFrequency: "weekly" },
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

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PUBLIC_ROUTES.map((route) => {
    const meta = getRouteMeta(route);

    return {
      url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
      lastModified,
      changeFrequency: meta.changeFrequency ?? "monthly",
      priority: meta.priority ?? 0.7,
    };
  });
}
