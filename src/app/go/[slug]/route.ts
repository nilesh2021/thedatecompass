import { usaGoDestinations } from "@/data/usaOffers";
import { notFound, redirect } from "next/navigation";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { slug } = await context.params;
  const destination = usaGoDestinations[slug.toLowerCase()];

  if (!destination) {
    notFound();
  }

  redirect(destination);
}
