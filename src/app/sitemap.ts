import type { MetadataRoute } from "next";
import {
  AUSTRALIA_PAGE_LAST_UPDATED,
  australiaOffers,
} from "@/data/countries/australia";
import {
  CANADA_PAGE_LAST_UPDATED,
  canadaOffers,
} from "@/data/countries/canada";
import {
  DENMARK_PAGE_LAST_UPDATED,
  denmarkOffers,
} from "@/data/countries/denmark";
import {
  FRANCE_PAGE_LAST_UPDATED,
  franceOffers,
} from "@/data/countries/france";
import { UK_PAGE_LAST_UPDATED, ukOffers } from "@/data/countries/uk";
import {
  GERMANY_PAGE_LAST_UPDATED,
  germanyOffers,
} from "@/data/germanyOffers";
import { USA_PAGE_LAST_UPDATED, USA_REVIEW_SLUGS } from "@/data/usaOffers";
import { SITE_URL, SITEMAP_FALLBACK_LASTMOD } from "@/lib/sitemap";
import {
  getGitLastModifiedIso,
  routeToAppFile,
} from "@/lib/sitemapLastModified";

const USA_REVIEW_ROUTES = USA_REVIEW_SLUGS.map(
  (slug) => `/usa/${slug}-review`,
);

const GERMANY_REVIEW_ROUTES = germanyOffers
  .filter((offer) => offer.reviewReady)
  .map((offer) => `/germany/${offer.slug}-review`);

const FRANCE_REVIEW_ROUTES = franceOffers
  .filter((offer) => offer.reviewReady)
  .map((offer) => `/france/${offer.slug}-review`);

const CANADA_REVIEW_ROUTES = canadaOffers
  .filter((offer) => offer.reviewReady)
  .map((offer) => `/canada/${offer.slug}-review`);

const AUSTRALIA_REVIEW_ROUTES = australiaOffers
  .filter((offer) => offer.reviewReady)
  .map((offer) => `/australia/${offer.slug}-review`);

const UK_REVIEW_ROUTES = ukOffers
  .filter((offer) => offer.reviewReady)
  .map((offer) => `/uk/${offer.slug}-review`);

const DENMARK_REVIEW_ROUTES = denmarkOffers
  .filter((offer) => offer.reviewReady)
  .map((offer) => `/denmark/${offer.slug}-review`);

type RouteMeta = {
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority?: number;
};

/**
 * Public indexable pages. Excludes API, private/test routes,
 * noindex drafts, redirected URLs, duplicate variants, and thin placeholders.
 */
const PUBLIC_ROUTES: string[] = [
  "/",
  "/affiliate-disclosure",
  "/australia",
  "/canada",
  "/category/ai-girlfriend",
  "/cookie-policy",
  "/cozy-sites",
  "/denmark",
  "/disclaimer",
  "/france",
  "/free-gay-dating-sites",
  "/free-online-dating-usa-singles",
  "/free-usa-dating-sites",
  "/gay-dating",
  "/germany",
  "/offers/casual-dating",
  "/offers/dreamz-ai",
  "/offers/dreamz-ai-companion",
  "/offers/gonaughty-australia",
  "/offers/gay-dating-sites",
  "/offers/free-dating-sites-for-gay",
  "/offers/gay-dating-usa",
  "/offers/grannyhunter",
  "/offers/manfinder",
  "/offers/manfinder-gay-dating",
  "/offers/milf-dating",
  "/offers/realsexclub",
  "/offers/realsexclub-denmark",
  "/offers/sex-emulator",
  "/offers/transdate-dating",
  "/offers/transdate-dating-sites",
  "/privacy-policy",
  "/terms-and-conditions",
  "/top-offers",
  "/top-offers/adult",
  "/top-offers/mature",
  "/uk",
  "/usa",
  "/usa/gaybloom",
  "/usa-dating-sites",
];

const ROUTE_META: Record<string, RouteMeta> = {
  "/": { priority: 1, changeFrequency: "weekly" },
  "/category/ai-girlfriend": { priority: 0.9, changeFrequency: "weekly" },
  "/offers/dreamz-ai": { priority: 0.9, changeFrequency: "weekly" },
  "/offers/realsexclub": { priority: 0.9, changeFrequency: "weekly" },
  "/offers/realsexclub-denmark": { priority: 0.9, changeFrequency: "weekly" },
  "/gay-dating": { priority: 0.85, changeFrequency: "weekly" },
  "/offers/gay-dating-usa": { priority: 0.85, changeFrequency: "weekly" },
  "/offers/free-dating-sites-for-gay": { priority: 0.85, changeFrequency: "weekly" },
  "/free-gay-dating-sites": { priority: 0.85, changeFrequency: "weekly" },
  "/free-online-dating-usa-singles": { priority: 0.85, changeFrequency: "weekly" },
  "/free-usa-dating-sites": { priority: 0.85, changeFrequency: "weekly" },
  "/usa-dating-sites": { priority: 0.85, changeFrequency: "weekly" },
  "/cozy-sites": { priority: 0.8, changeFrequency: "weekly" },
  "/usa": { priority: 0.85, changeFrequency: "weekly" },
  "/usa/gaybloom": { priority: 0.85, changeFrequency: "weekly" },
  "/germany": { priority: 0.85, changeFrequency: "weekly" },
  "/france": { priority: 0.85, changeFrequency: "weekly" },
  "/canada": { priority: 0.85, changeFrequency: "weekly" },
  "/australia": { priority: 0.85, changeFrequency: "weekly" },
  "/uk": { priority: 0.85, changeFrequency: "weekly" },
  "/denmark": { priority: 0.85, changeFrequency: "weekly" },
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

  if (route.startsWith("/usa/") && route.endsWith("-review")) {
    return { priority: 0.8, changeFrequency: "weekly" };
  }

  if (route.startsWith("/germany/") && route.endsWith("-review")) {
    return { priority: 0.8, changeFrequency: "weekly" };
  }

  if (route.startsWith("/france/") && route.endsWith("-review")) {
    return { priority: 0.8, changeFrequency: "weekly" };
  }

  if (
    (route.startsWith("/canada/") ||
      route.startsWith("/australia/") ||
      route.startsWith("/uk/") ||
      route.startsWith("/denmark/")) &&
    route.endsWith("-review")
  ) {
    return { priority: 0.8, changeFrequency: "weekly" };
  }

  return { priority: 0.7, changeFrequency: "monthly" };
}

function getRouteLastModified(route: string): Date {
  if (route === "/usa" || (route.startsWith("/usa/") && route.endsWith("-review"))) {
    return new Date(USA_PAGE_LAST_UPDATED.iso);
  }

  if (
    route === "/germany" ||
    (route.startsWith("/germany/") && route.endsWith("-review"))
  ) {
    return new Date(GERMANY_PAGE_LAST_UPDATED.iso);
  }

  if (
    route === "/france" ||
    (route.startsWith("/france/") && route.endsWith("-review"))
  ) {
    return new Date(FRANCE_PAGE_LAST_UPDATED.iso);
  }

  if (route === "/canada" || (route.startsWith("/canada/") && route.endsWith("-review"))) {
    return new Date(CANADA_PAGE_LAST_UPDATED.iso);
  }

  if (route === "/australia" || (route.startsWith("/australia/") && route.endsWith("-review"))) {
    return new Date(AUSTRALIA_PAGE_LAST_UPDATED.iso);
  }

  if (route === "/uk" || (route.startsWith("/uk/") && route.endsWith("-review"))) {
    return new Date(UK_PAGE_LAST_UPDATED.iso);
  }

  if (route === "/denmark" || (route.startsWith("/denmark/") && route.endsWith("-review"))) {
    return new Date(DENMARK_PAGE_LAST_UPDATED.iso);
  }

  const gitIso = getGitLastModifiedIso(routeToAppFile(route));
  return new Date(gitIso ?? SITEMAP_FALLBACK_LASTMOD);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...PUBLIC_ROUTES,
    ...USA_REVIEW_ROUTES,
    ...GERMANY_REVIEW_ROUTES,
    ...FRANCE_REVIEW_ROUTES,
    ...CANADA_REVIEW_ROUTES,
    ...AUSTRALIA_REVIEW_ROUTES,
    ...UK_REVIEW_ROUTES,
    ...DENMARK_REVIEW_ROUTES,
  ];

  return routes.map((route) => {
    const meta = getRouteMeta(route);

    return {
      url: route === "/" ? SITE_URL : `${SITE_URL}${route}`,
      lastModified: getRouteLastModified(route),
      changeFrequency: meta.changeFrequency ?? "monthly",
      priority: meta.priority ?? 0.7,
    };
  });
}
