import { notFound } from "next/navigation";
import {
  buildCanadaReviewFaqs,
  CanadaReviewDocument,
  canadaReviewMetadata,
  getCanadaReviewOffer,
} from "@/components/country/canada/canadaReviewShared";

const SLUG = "litlatinz";
const offer = getCanadaReviewOffer(SLUG);

export const metadata = canadaReviewMetadata(SLUG, "LitLatinz");

export default function LitLatinzCanadaReviewPage() {
  if (!offer) {
    notFound();
  }

  return <CanadaReviewDocument offer={offer} faqs={buildCanadaReviewFaqs(offer)} />;
}
