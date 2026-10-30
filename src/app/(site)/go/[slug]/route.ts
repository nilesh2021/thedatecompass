import { australiaGoDestinations } from "@/data/countries/australia";
import { canadaGoDestinations } from "@/data/countries/canada";
import { denmarkGoDestinations } from "@/data/countries/denmark";
import { franceGoDestinations } from "@/data/countries/france";
import { ukGoDestinations } from "@/data/countries/uk";
import { germanyGoDestinations } from "@/data/germanyOffers";
import { usaGoDestinations } from "@/data/usaOffers";
import {
  buildTrackedAffiliateUrl,
  readClickIdFromRequest,
  readCountryFromRequest,
  readPlacementFromRequest,
  withAffiliateSourceTags,
} from "@/lib/affiliateUrl";
import { notFound, redirect } from "next/navigation";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const key = slug.toLowerCase();
  const destination =
    usaGoDestinations[key] ??
    germanyGoDestinations[key] ??
    franceGoDestinations[key] ??
    canadaGoDestinations[key] ??
    australiaGoDestinations[key] ??
    ukGoDestinations[key] ??
    denmarkGoDestinations[key];

  if (!destination) {
    notFound();
  }

  // aff_sub2 is always thedatecompass. Country and placement are optional labels.
  // aff_sub is only attached later, and only when a paid click_id is present.
  const located = withAffiliateSourceTags(destination, {
    country: readCountryFromRequest(request),
    placement: readPlacementFromRequest(request),
  });

  redirect(buildTrackedAffiliateUrl(located, readClickIdFromRequest(request)));
}
