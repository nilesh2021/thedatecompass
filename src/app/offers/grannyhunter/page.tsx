import type { Metadata } from "next";
import OfferLandingPage from "@/components/landing/OfferLandingPage";
import { getOfferPageData } from "@/data/offerLandingData";

const SLUG = "grannyhunter";

const data = getOfferPageData(SLUG);

export const metadata: Metadata = {
  title: "GrannyHunter | TheDateCompass",
  description: "Placeholder page for GrannyHunter.",
};

export default function GrannyHunterPage() {
  if (!data) return null;
  return <div className="pb-24 font-sans lg:pb-0"><OfferLandingPage data={data} /></div>;
}
