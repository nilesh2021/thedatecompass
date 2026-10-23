import { notFound } from "next/navigation";
import {
  buildUkReviewFaqs,
  UkReviewDocument,
  ukReviewMetadata,
  getUkReviewOffer,
} from "@/components/country/uk/ukReviewShared";

const SLUG = "milffinder";
const offer = getUkReviewOffer(SLUG);

export const metadata = ukReviewMetadata(SLUG, "MilfFinder");

export default function MilfFinderUkReviewPage() {
  if (!offer) {
    notFound();
  }

  return <UkReviewDocument offer={offer} faqs={buildUkReviewFaqs(offer)} />;
}
