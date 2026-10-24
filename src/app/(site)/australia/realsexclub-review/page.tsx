import { notFound } from "next/navigation";
import {
  buildAustraliaReviewFaqs,
  AustraliaReviewDocument,
  australiaReviewMetadata,
  getAustraliaReviewOffer,
} from "@/components/country/australia/australiaReviewShared";

const SLUG = "realsexclub";
const offer = getAustraliaReviewOffer(SLUG);

export const metadata = australiaReviewMetadata(SLUG, "RealSexClub");

export default function RealSexClubAustraliaReviewPage() {
  if (!offer) {
    notFound();
  }

  return <AustraliaReviewDocument offer={offer} faqs={buildAustraliaReviewFaqs(offer)} />;
}
