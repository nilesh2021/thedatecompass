import { notFound } from "next/navigation";
import {
  buildUkReviewFaqs,
  UkReviewDocument,
  ukReviewMetadata,
  getUkReviewOffer,
} from "@/components/country/uk/ukReviewShared";

const SLUG = "litlatinz";
const offer = getUkReviewOffer(SLUG);

export const metadata = ukReviewMetadata(SLUG, "LitLatinz");

export default function LitLatinzUkReviewPage() {
  if (!offer) {
    notFound();
  }

  return <UkReviewDocument offer={offer} faqs={buildUkReviewFaqs(offer)} />;
}
