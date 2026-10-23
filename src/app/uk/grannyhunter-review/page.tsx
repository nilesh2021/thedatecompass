import { notFound } from "next/navigation";
import {
  buildUkReviewFaqs,
  UkReviewDocument,
  ukReviewMetadata,
  getUkReviewOffer,
} from "@/components/country/uk/ukReviewShared";

const SLUG = "grannyhunter";
const offer = getUkReviewOffer(SLUG);

export const metadata = ukReviewMetadata(SLUG, "Grannyhunter");

export default function GrannyhunterUkReviewPage() {
  if (!offer) {
    notFound();
  }

  return <UkReviewDocument offer={offer} faqs={buildUkReviewFaqs(offer)} />;
}
