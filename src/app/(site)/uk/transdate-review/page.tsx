import { notFound } from "next/navigation";
import {
  buildUkReviewFaqs,
  UkReviewDocument,
  ukReviewMetadata,
  getUkReviewOffer,
} from "@/components/country/uk/ukReviewShared";

const SLUG = "transdate";
const offer = getUkReviewOffer(SLUG);

export const metadata = ukReviewMetadata(SLUG, "TransDate");

export default function TransDateUkReviewPage() {
  if (!offer) {
    notFound();
  }

  return <UkReviewDocument offer={offer} faqs={buildUkReviewFaqs(offer)} />;
}
