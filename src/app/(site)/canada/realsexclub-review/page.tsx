import { notFound } from "next/navigation";
import {
  buildCanadaReviewFaqs,
  CanadaReviewDocument,
  canadaReviewMetadata,
  getCanadaReviewOffer,
} from "@/components/country/canada/canadaReviewShared";

const SLUG = "realsexclub";
const offer = getCanadaReviewOffer(SLUG);

export const metadata = canadaReviewMetadata(SLUG, "RealSexClub");

export default function RealSexClubCanadaReviewPage() {
  if (!offer) {
    notFound();
  }

  return <CanadaReviewDocument offer={offer} faqs={buildCanadaReviewFaqs(offer)} />;
}
