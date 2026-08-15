import type { Metadata } from "next";
import OfferLandingPage from "@/components/landing/OfferLandingPage";
import { getOfferPageData } from "@/data/offerLandingData";

const SLUG = "manfinder";

const data = getOfferPageData(SLUG);

export const metadata: Metadata = {
  title: "ManFinder | TheDateCompass",
  description: "Placeholder page for ManFinder.",
};

export default function ManFinderPage() {
  if (!data) return null;
  return <div className="pb-24 font-sans lg:pb-0"><OfferLandingPage data={data} /></div>;
}
