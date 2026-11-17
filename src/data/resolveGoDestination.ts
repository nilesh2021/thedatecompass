import { fuckFinderCountryDestinations } from "@/data/fuckFinderCountryPages";
import { manfinderCountryDestinations } from "@/data/manfinderCountryPages";
import { fetishPartnerCountryDestinations } from "@/data/fetishPartnerCountryPages";
import { australiaGoDestinations } from "@/data/countries/australia";
import { canadaGoDestinations } from "@/data/countries/canada";
import { denmarkGoDestinations } from "@/data/countries/denmark";
import { franceGoDestinations } from "@/data/countries/france";
import { ukGoDestinations } from "@/data/countries/uk";
import { germanyGoDestinations } from "@/data/germanyOffers";
import { beijosquentesGoDestinations } from "@/data/beijosquentesOffers";
import { sinpartyGoDestinations } from "@/data/sinpartyOffers";
import { singleflirtGoDestinations } from "@/data/singleflirtOffers";
import { usaGoDestinations } from "@/data/usaOffers";
import { extraGoDestinations } from "@/data/extraGoDestinations";

const GO_DESTINATION_MAPS: readonly Record<string, string>[] = [
  extraGoDestinations,
  beijosquentesGoDestinations,
  sinpartyGoDestinations,
  singleflirtGoDestinations,
  usaGoDestinations,
  germanyGoDestinations,
  franceGoDestinations,
  canadaGoDestinations,
  australiaGoDestinations,
  ukGoDestinations,
  denmarkGoDestinations,
  fetishPartnerCountryDestinations,
  fuckFinderCountryDestinations,
  manfinderCountryDestinations,
];

/** Lowercase slug → outbound affiliate URL, or undefined if not registered. */
export function lookupGoDestination(slug: string): string | undefined {
  const key = slug.toLowerCase();
  for (const map of GO_DESTINATION_MAPS) {
    const value = map[key];
    if (value) return value;
  }
  return undefined;
}

/** All slugs that resolve via lookupGoDestination (for audits). */
export function listRegisteredGoSlugs(): string[] {
  const slugs = new Set<string>();
  for (const map of GO_DESTINATION_MAPS) {
    for (const key of Object.keys(map)) {
      slugs.add(key);
    }
  }
  return Array.from(slugs).sort();
}