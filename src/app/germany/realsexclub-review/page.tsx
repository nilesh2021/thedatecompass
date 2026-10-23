import { notFound } from "next/navigation";
import {
  buildGermanyReviewFaqs,
  GermanyReviewDocument,
  getGermanyReviewOffer,
  germanyReviewMetadata,
} from "@/components/country/germany/germanyReviewShared";

const SLUG = "realsexclub";
const offer = getGermanyReviewOffer(SLUG);

export const metadata = germanyReviewMetadata(SLUG, "RealSexClub");

export default function RealSexClubGermanyReviewPage() {
  if (!offer) {
    notFound();
  }

  return <GermanyReviewDocument offer={offer} faqs={buildGermanyReviewFaqs(offer)} />;
}
