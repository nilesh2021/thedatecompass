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
  readPlacementFromRequest,
  withAffiliatePlacement,
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

  // Placement (hero, card, lp_end, …) is recorded on aff_sub4.
  // aff_sub is only attached later, and only when a paid click_id is present.
  const located = withAffiliatePlacement(
    destination,
    readPlacementFromRequest(request)
  );

  redirect(buildTrackedAffiliateUrl(located, readClickIdFromRequest(request)));
}
