import { australiaGoDestinations } from "@/data/countries/australia";
import { canadaGoDestinations } from "@/data/countries/canada";
import { denmarkGoDestinations } from "@/data/countries/denmark";
import { franceGoDestinations } from "@/data/countries/france";
import { ukGoDestinations } from "@/data/countries/uk";
import { germanyGoDestinations } from "@/data/germanyOffers";
import { usaGoDestinations } from "@/data/usaOffers";
import {
  appendPlacementAsAffSub4,
  buildTrackedAffiliateUrl,
  readClickIdFromRequest,
  readPlacementFromSearch,
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

  const tracked = buildTrackedAffiliateUrl(
    destination,
    readClickIdFromRequest(request)
  );
  const placement = readPlacementFromSearch(new URL(request.url).search);
  redirect(appendPlacementAsAffSub4(tracked, placement));
}
