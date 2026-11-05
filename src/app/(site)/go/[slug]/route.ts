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
import {
  buildTrackedAffiliateUrl,
  readClickIdFromRequest,
  readCountryFromRequest,
  readPlacementFromRequest,
  resolveAffiliateCountryFromRequest,
  withAffiliateSourceTags,
} from "@/lib/affiliateUrl";
import { notFound, redirect } from "next/navigation";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

/** Direct SOI links for DACH — avoids offer-group fallback when Singleflirt geo rules miss. */
const DACH_COUNTRIES = new Set(["de", "at"]);

function resolveGoDestination(
  slug: string,
  destination: string,
  country: string | null
): string {
  if (slug !== "singleflirt" || !country || !DACH_COUNTRIES.has(country)) {
    return destination;
  }
  return germanyGoDestinations.fremdgehen69 ?? destination;
}

export async function GET(request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const key = slug.toLowerCase();
  const affiliateCountry = resolveAffiliateCountryFromRequest(request);
  const destination =
    beijosquentesGoDestinations[key] ??
    sinpartyGoDestinations[key] ??
    singleflirtGoDestinations[key] ??
    usaGoDestinations[key] ??
    germanyGoDestinations[key] ??
    franceGoDestinations[key] ??
    canadaGoDestinations[key] ??
    australiaGoDestinations[key] ??
    ukGoDestinations[key] ??
    denmarkGoDestinations[key] ??
    fetishPartnerCountryDestinations[key] ??
    fuckFinderCountryDestinations[key] ??
    manfinderCountryDestinations[key];

  if (!destination) {
    notFound();
  }

  const outbound = resolveGoDestination(key, destination, affiliateCountry);

  // aff_sub2 is always thedatecompass. aff_sub3 is ?country=, including global.
  // Visitor geo fills aff_sub3 only when country is omitted. aff_sub is attached later for a paid click_id.
  const located = withAffiliateSourceTags(outbound, {
    country: readCountryFromRequest(request) ?? affiliateCountry,
    placement: readPlacementFromRequest(request),
  });

  redirect(buildTrackedAffiliateUrl(located, readClickIdFromRequest(request)));
}
