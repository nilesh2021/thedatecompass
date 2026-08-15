import type { Metadata } from "next";
import OfferLandingPage from "@/components/landing/OfferLandingPage";
import { getOfferPageData } from "@/data/offerLandingData";

const SLUG = "transdate";

const data = getOfferPageData(SLUG);

export const metadata: Metadata = {
  title: "TransDate | TheDateCompass",
  description: "Placeholder page for TransDate.",
};

export default function TransDatePage() {
  if (!data) return null;
  return <div className="pb-24 font-sans lg:pb-0"><OfferLandingPage data={data} /></div>;
}
