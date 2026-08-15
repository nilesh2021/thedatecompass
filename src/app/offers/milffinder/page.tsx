import type { Metadata } from "next";
import OfferLandingPage from "@/components/landing/OfferLandingPage";
import { getOfferPageData } from "@/data/offerLandingData";

const SLUG = "milffinder";

const data = getOfferPageData(SLUG);

export const metadata: Metadata = {
  title: "MilfFinder | TheDateCompass",
  description: "Placeholder page for MilfFinder.",
};

export default function MilfFinderPage() {
  if (!data) return null;
  return <div className="pb-24 font-sans lg:pb-0"><OfferLandingPage data={data} /></div>;
}
