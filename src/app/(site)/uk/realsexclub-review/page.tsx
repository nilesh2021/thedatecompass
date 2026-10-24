import { notFound } from "next/navigation";
import {
  buildUkReviewFaqs,
  UkReviewDocument,
  ukReviewMetadata,
  getUkReviewOffer,
} from "@/components/country/uk/ukReviewShared";

const SLUG = "realsexclub";
const offer = getUkReviewOffer(SLUG);

export const metadata = ukReviewMetadata(SLUG, "RealSexClub");

export default function RealSexClubUkReviewPage() {
  if (!offer) {
    notFound();
  }

  return <UkReviewDocument offer={offer} faqs={buildUkReviewFaqs(offer)} />;
}
