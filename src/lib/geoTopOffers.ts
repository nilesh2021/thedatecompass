import { australiaOffers } from "@/data/countries/australia";
import { canadaOffers } from "@/data/countries/canada";
import { denmarkOffers } from "@/data/countries/denmark";
import { franceOffers } from "@/data/countries/france";
import { ukOffers } from "@/data/countries/uk";
import { germanyOffers } from "@/data/germanyOffers";
import { usaOffers } from "@/data/usaOffers";
import { getGoHref } from "@/lib/affiliateUrl";

const GEO_TOP_PLACEMENT = "geo_top";
const GEO_TOP_COUNT = 3;

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

function takeOffers(
  offers: readonly InventoryOffer[],
  country: string
): GeoTopOffer[] {
  const picked: GeoTopOffer[] = [];

  for (const offer of offers) {
    if (offer.sponsored || !offer.slug) continue;
    picked.push({
      name: offer.name,
      slug: offer.slug,
      category: offer.category,
      description: offer.description,
      image: offer.image,
      href: getGoHref(offer.slug, { country, placement: GEO_TOP_PLACEMENT }),
    });
    if (picked.length === GEO_TOP_COUNT) break;
  }

  return picked;
}

/**
 * First offers in the matching inventory. Unmapped countries, `global`,
 * and an empty match use the homepage list. Links keep the detected country.
 */
export function selectGeoTopOffers(country: string): GeoTopOffer[] {
  const inventory = INVENTORY_BY_COUNTRY[country];
  if (!inventory) return takeOffers(usaOffers, country);

  const matched = takeOffers(inventory, country);
  return matched.length > 0 ? matched : takeOffers(usaOffers, country);
}
