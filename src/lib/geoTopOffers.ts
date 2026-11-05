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
  sponsored?: boolean;
};

export type GeoTopOffer = {
  name: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

/** Existing country inventories, in Offer Master order. */
const INVENTORY_BY_COUNTRY: Record<string, readonly InventoryOffer[]> = {
  us: usaOffers,
  gb: ukOffers,
  ca: canadaOffers,
  au: australiaOffers,
  de: germanyOffers,
  fr: franceOffers,
  dk: denmarkOffers,
};

/** Country-page slug such as fuckfinder-dk; plain slug when that destination is not registered. */
function geoGoSlug(slug: string, suffix: string | null): string {
  if (!suffix) return slug;
  const specific = `${slug}-${suffix}`;
  return COUNTRY_GO_SLUGS.has(specific) ? specific : slug;
}

function takeOffers(
  offers: readonly InventoryOffer[],
  page: VisitorPageCountry,
): GeoTopOffer[] {
  const picked: GeoTopOffer[] = [];

  for (const offer of offers) {
    if (offer.sponsored || !offer.slug) continue;
    const slug = geoGoSlug(offer.slug, page.goSlugSuffix);
    picked.push({
      name: offer.name,
      slug,
      category: offer.category,
      description: offer.description,
      image: offer.image,
      href: getGoHref(slug, { country: page.country, placement: GEO_TOP_PLACEMENT }),
    });
    if (picked.length === GEO_TOP_COUNT) break;
  }

  return picked;
}

/**
 * First offers in the matching inventory. Unmapped countries, `global`,
 * and an empty match use the homepage list. country= is the country-page token, or global.
 */
export function selectGeoTopOffers(country: string): GeoTopOffer[] {
  const code = country.trim().toLowerCase();
  const page = visitorPageCountry(code);
  const inventory = INVENTORY_BY_COUNTRY[code];
  if (!inventory) return takeOffers(usaOffers, page);

  const matched = takeOffers(inventory, page);
  return matched.length > 0 ? matched : takeOffers(usaOffers, page);
}
