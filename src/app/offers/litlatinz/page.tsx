import type { Metadata } from "next";
import OfferLandingPage from "@/components/landing/OfferLandingPage";
import { getOfferPageData } from "@/data/offerLandingData";

const SLUG = "litlatinz";

const data = getOfferPageData(SLUG);

export const metadata: Metadata = {
  title: "LitLatinz | TheDateCompass",
  description: "Placeholder page for LitLatinz.",
};

export default function LitLatinzPage() {
  if (!data) return null;
  return <div className="pb-24 font-sans lg:pb-0"><OfferLandingPage data={data} /></div>;
}
