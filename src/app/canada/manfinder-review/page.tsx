import { notFound } from "next/navigation";
import {
  buildCanadaReviewFaqs,
  CanadaReviewDocument,
  canadaReviewMetadata,
  getCanadaReviewOffer,
} from "@/components/country/canada/canadaReviewShared";

const SLUG = "manfinder";
const offer = getCanadaReviewOffer(SLUG);

export const metadata = canadaReviewMetadata(SLUG, "Manfinder");

export default function ManfinderCanadaReviewPage() {
  if (!offer) {
    notFound();
  }

  return <CanadaReviewDocument offer={offer} faqs={buildCanadaReviewFaqs(offer)} />;
}
