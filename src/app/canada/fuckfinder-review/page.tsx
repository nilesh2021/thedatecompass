import { notFound } from "next/navigation";
import {
  buildCanadaReviewFaqs,
  CanadaReviewDocument,
  canadaReviewMetadata,
  getCanadaReviewOffer,
} from "@/components/country/canada/canadaReviewShared";

const SLUG = "fuckfinder";
const offer = getCanadaReviewOffer(SLUG);

export const metadata = canadaReviewMetadata(SLUG, "FuckFinder");

export default function FuckFinderCanadaReviewPage() {
  if (!offer) {
    notFound();
  }

  return <CanadaReviewDocument offer={offer} faqs={buildCanadaReviewFaqs(offer)} />;
}
