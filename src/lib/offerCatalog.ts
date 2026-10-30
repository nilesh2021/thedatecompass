import { availableCountries } from "@/data/countries";
import { australiaOffers } from "@/data/countries/australia";
import { canadaOffers } from "@/data/countries/canada";
import { denmarkOffers } from "@/data/countries/denmark";
import { franceOffers } from "@/data/countries/france";
import { ukOffers } from "@/data/countries/uk";
import { germanyOffers } from "@/data/germanyOffers";
import { dreamzOffer } from "@/data/aiGirlfriendOffers";
import { USA_REVIEW_SLUGS, usaOffers } from "@/data/usaOffers";

export type CatalogOffer = {
  name: string;
  category: string;
  country?: string;
  countrySlug?: string;
  href: string;
  path: string;
};

type OfferLike = {
  name: string;
  slug?: string;
  category: string;
  country?: string;
  reviewReady?: boolean;
  guideHref?: string;
};

const HUB_BY_COUNTRY: Record<string, string> = {
  USA: "usa",
  "United States": "usa",
  UK: "uk",
  "United Kingdom": "uk",
  Australia: "australia",
  Canada: "canada",
  Germany: "germany",
  France: "france",
  Denmark: "denmark",
};

const LANDING_BY_SLUG: Record<string, string> = {
  grannyhunter: "/offers/grannyhunter",
  manfinder: "/offers/manfinder",
  milffinder: "/offers/milf-dating",
  fuckfinder: "/offers/casual-dating",
  transdate: "/offers/transdate-dating",
  realsexclub: "/offers/realsexclub",
  gonaughty: "/offers/gonaughty-australia",
  gaybloom: "/usa/gaybloom",
  dreamz: "/offers/dreamz-ai",
};

const BLOCKED_HREFS = new Set([
  "/offers/dreamz-ai-companion",
  "/offers/manfinder-gay-dating",
  "/offers/free-dating-sites-for-gay",
  "/offers/gay-dating-usa",
]);

function countrySlug(country?: string): string | undefined {
  if (!country) return undefined;
  return HUB_BY_COUNTRY[country];
}

function reviewPath(offer: OfferLike, hub: string): string | null {
  if (!offer.slug) return null;
  if (hub === "usa" && USA_REVIEW_SLUGS.includes(offer.slug)) {
    return `/usa/${offer.slug}-review`;
  }
  if (offer.reviewReady) return `/${hub}/${offer.slug}-review`;
  return null;
}

function publicHref(offer: OfferLike, hub: string): string | null {
  const review = reviewPath(offer, hub);
  if (review) return review;
  if (hub === "denmark" && offer.slug === "realsexclub") {
    return "/offers/realsexclub-denmark";
  }
  if (offer.guideHref && !offer.guideHref.endsWith("-review") && !BLOCKED_HREFS.has(offer.guideHref)) {
    return offer.guideHref;
  }
  if (offer.slug && LANDING_BY_SLUG[offer.slug]) {
    return LANDING_BY_SLUG[offer.slug];
  }
  return null;
}

function fromCountry(offers: OfferLike[], hub: string): CatalogOffer[] {
  return offers.flatMap((offer) => {
    const href = publicHref(offer, hub);
    if (!href || BLOCKED_HREFS.has(href)) return [];
    const path = reviewPath(offer, hub) ?? href;
    return [
      {
        name: offer.name,
        category: offer.category,
        country: offer.country,
        countrySlug: countrySlug(offer.country) ?? hub,
        href,
        path,
      },
    ];
  });
}

const extras: CatalogOffer[] = [
  {
    name: dreamzOffer.name,
    category: dreamzOffer.badge,
    href: "/offers/dreamz-ai",
    path: "/offers/dreamz-ai",
  },
  {
    name: "TransDate",
    category: "Trans dating",
    country: "Norway",
    href: "/offers/transdate-dating-sites",
    path: "/offers/transdate-dating-sites",
  },
  {
    name: "Gay dating sites",
    category: "Gay dating",
    href: "/offers/gay-dating-sites",
    path: "/offers/gay-dating-sites",
  },
  {
    name: "Virtual Experience",
    category: "Adult dating",
    href: "/offers/sex-emulator",
    path: "/offers/sex-emulator",
  },
  {
    name: "GayBloom",
    category: "Gay Dating",
    country: "USA",
    countrySlug: "usa",
    href: "/usa/gaybloom",
    path: "/usa/gaybloom",
  },
];

export const catalogOffers: CatalogOffer[] = [
  ...fromCountry(usaOffers, "usa"),
  ...fromCountry(germanyOffers, "germany"),
  ...fromCountry(franceOffers, "france"),
  ...fromCountry(canadaOffers, "canada"),
  ...fromCountry(australiaOffers, "australia"),
  ...fromCountry(ukOffers, "uk"),
  ...fromCountry(denmarkOffers, "denmark"),
  ...extras,
];

export function getRelatedOffers(currentPath: string): {
  items: CatalogOffer[];
  moreReviews: { name: string; href: string } | null;
} {
  const current =
    catalogOffers.find((item) => item.path === currentPath) ??
    catalogOffers.find((item) => item.href === currentPath);

  const picked: CatalogOffer[] = [];
  const seen = new Set<string>();

  const sameText = (left?: string, right?: string) =>
    Boolean(left && right && left.toLowerCase() === right.toLowerCase());

  const extraMatch = extras.find(
    (item) =>
      item.href !== currentPath &&
      item.path !== currentPath &&
      (sameText(item.category, current?.category) || sameText(item.name, current?.name)),
  );

  const ranked = [
    ...catalogOffers.filter((item) => current?.country && item.country === current.country),
    ...catalogOffers.filter((item) => sameText(item.category, current?.category)),
    ...catalogOffers,
  ];

  const limit = extraMatch ? 4 : 5;

  for (const item of ranked) {
    if (item.href === currentPath || item.path === currentPath) continue;
    if (seen.has(item.href)) continue;
    seen.add(item.href);
    picked.push(item);
    if (picked.length === limit) break;
  }

  if (extraMatch && !seen.has(extraMatch.href)) {
    picked.push(extraMatch);
  }

  const slug = current?.countrySlug;
  const hub = slug ? availableCountries.find((country) => country.slug === slug) : undefined;
  const moreReviews =
    hub && `/${hub.slug}` !== currentPath
      ? { name: hub.name, href: `/${hub.slug}` }
      : null;

  return { items: picked, moreReviews };
}
