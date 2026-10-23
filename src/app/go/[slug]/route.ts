import { germanyGoDestinations } from "@/data/germanyOffers";
import { usaGoDestinations } from "@/data/usaOffers";
import {
  buildTrackedAffiliateUrl,
  readClickIdFromRequest,
} from "@/lib/affiliateUrl";
import { notFound, redirect } from "next/navigation";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const key = slug.toLowerCase();
  const destination = usaGoDestinations[key] ?? germanyGoDestinations[key];

  if (!destination) {
    notFound();
  }

  redirect(buildTrackedAffiliateUrl(destination, readClickIdFromRequest(request)));
}
