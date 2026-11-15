import { australiaGoDestinations, australiaOffers } from "@/data/countries/australia";
import { canadaGoDestinations, canadaOffers } from "@/data/countries/canada";
import { denmarkGoDestinations, denmarkOffers } from "@/data/countries/denmark";
import { franceGoDestinations, franceOffers } from "@/data/countries/france";
import { ukGoDestinations, ukOffers } from "@/data/countries/uk";
import { fetishPartnerCountryDestinations } from "@/data/fetishPartnerCountryPages";
import { fuckFinderCountryDestinations } from "@/data/fuckFinderCountryPages";
import { germanyGoDestinations, germanyOffers } from "@/data/germanyOffers";
import { manfinderCountryDestinations } from "@/data/manfinderCountryPages";
import { usaGoDestinations, usaOffers } from "@/data/usaOffers";
import { getGoHref } from "@/lib/affiliateUrl";
import { visitorPageCountry, type VisitorPageCountry } from "@/lib/visitorCountry";

const GEO_TOP_PLACEMENT = "geo_top";
const GEO_TOP_COUNT = 3;
const FEATURED_COUNT = 6;

const COUNTRY_GO_SLUGS = new Set<string>([
  ...Object.keys(usaGoDestinations),
  ...Object.keys(ukGoDestinations),
  ...Object.keys(canadaGoDestinations),
  ...Object.keys(australiaGoDestinations),
  ...Object.keys(germanyGoDestinations),
  ...Object.keys(franceGoDestinations),
  ...Object.keys(denmarkGoDestinations),
  ...Object.keys(fuckFinderCountryDestinations),
  ...Object.keys(manfinderCountryDestinations),
  ...Object.keys(fetishPartnerCountryDestinations),
]);

type InventoryOffer = {
  name: string;
  slug?: string;
  category: string;
  description: string;
  image: string;
  featured?: boolean;
  sponsored?: boolean;
  country?: string;
};

export type GeoTopOffer = {
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

export type FeaturedOfferCard = {
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  href: string;
  featured?: boolean;
  /** Shown on the card when the visitor has a mapped country inventory. */
  countryLabel?: string;
};

/** Existing country inventories, in Offer Master order. AT uses the DE lineup. */
const INVENTORY_BY_COUNTRY: Record<string, readonly InventoryOffer[]> = {
  us: usaOffers,
  gb: ukOffers,
  ca: canadaOffers,
  au: australiaOffers,
  de: germanyOffers,
  at: germanyOffers,
  fr: franceOffers,
  dk: denmarkOffers,
};

/** Country-page slug such as fuckfinder-dk; plain slug when that destination is not registered. */
function geoGoSlug(slug: string, suffix: string | null): string {
  if (!suffix) return slug;
  const specific = `${slug}-${suffix}`;
  return COUNTRY_GO_SLUGS.has(specific) ? specific : slug;
}

function goParams(
  page: VisitorPageCountry,
  placement: string,
): { country?: string; placement: string } {
  // Mapped countries keep the page token. Unmapped omit country so /go/ uses edge geo.
  if (page.country === "global") return { placement };
  return { country: page.country, placement };
}

function takeOffers(
  offers: readonly InventoryOffer[],
  page: VisitorPageCountry,
  placement: string,
  limit: number,
  options?: { includeCountryLabel?: boolean },
): FeaturedOfferCard[] {
  const picked: FeaturedOfferCard[] = [];
  const params = goParams(page, placement);

  for (const offer of offers) {
    if (offer.sponsored || !offer.slug) continue;
    const slug = geoGoSlug(offer.slug, page.goSlugSuffix);
    picked.push({
      name: offer.name,
      slug,
      category: offer.category,
      description: offer.description,
      image: offer.image,
      featured: offer.featured,
      href: getGoHref(slug, params),
      countryLabel: options?.includeCountryLabel
        ? offer.country?.trim() || undefined
        : undefined,
    });
    if (picked.length === limit) break;
  }

  return picked;
}

function asGeoTop(offers: FeaturedOfferCard[]): GeoTopOffer[] {
  return offers.map(({ name, slug, category, description, image, href }) => ({
    name,
    slug,
    category,
    description,
    image,
    href,
  }));
}

function resolveInventory(code: string): {
  inventory: readonly InventoryOffer[];
  page: VisitorPageCountry;
  mapped: boolean;
} {
  const page = visitorPageCountry(code);
  const inventory = INVENTORY_BY_COUNTRY[code];
  if (inventory) return { inventory, page, mapped: true };
  return { inventory: usaOffers, page, mapped: false };
}

/**
 * First offers in the matching inventory. Unmapped countries, `global`,
 * and an empty match use the homepage list without a hardcoded country=.
 */
export function selectGeoTopOffers(country: string): GeoTopOffer[] {
  const code = country.trim().toLowerCase();
  const { inventory, page, mapped } = resolveInventory(code);
  const matched = takeOffers(inventory, page, GEO_TOP_PLACEMENT, GEO_TOP_COUNT);
  if (matched.length > 0) return asGeoTop(matched);
  if (mapped) {
    return asGeoTop(takeOffers(usaOffers, page, GEO_TOP_PLACEMENT, GEO_TOP_COUNT));
  }
  return asGeoTop(matched);
}

/** Homepage discovery cards for the visitor country. Unmapped visitors get global links. */
export function selectFeaturedOffers(country: string): FeaturedOfferCard[] {
  const code = country.trim().toLowerCase();
  const { inventory, page, mapped } = resolveInventory(code);
  const unique = inventory.filter(
    (offer, index, list) =>
      Boolean(offer.slug) &&
      !offer.sponsored &&
      list.findIndex((item) => item.slug === offer.slug) === index,
  );
  const matched = takeOffers(unique, page, "card", FEATURED_COUNT, {
    includeCountryLabel: mapped,
  });
  if (matched.length > 0) return matched;
  return takeOffers(usaOffers, visitorPageCountry("global"), "card", FEATURED_COUNT);
}

/** DE/AT homepage sponsored strip only. */
export function showGermanySponsoredStrip(country: string): boolean {
  const code = country.trim().toLowerCase();
  return code === "de" || code === "at";
}
