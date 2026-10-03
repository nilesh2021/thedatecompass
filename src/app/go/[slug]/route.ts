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
  const destination = usaGoDestinations[slug.toLowerCase()];

  if (!destination) {
    notFound();
  }

  redirect(buildTrackedAffiliateUrl(destination, readClickIdFromRequest(request)));
}
