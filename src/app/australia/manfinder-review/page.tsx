import { notFound } from "next/navigation";
import {
  buildAustraliaReviewFaqs,
  AustraliaReviewDocument,
  australiaReviewMetadata,
  getAustraliaReviewOffer,
} from "@/components/country/australia/australiaReviewShared";

const SLUG = "manfinder";
const offer = getAustraliaReviewOffer(SLUG);

export const metadata = australiaReviewMetadata(SLUG, "Manfinder");

export default function ManfinderAustraliaReviewPage() {
  if (!offer) {
    notFound();
  }

  return <AustraliaReviewDocument offer={offer} faqs={buildAustraliaReviewFaqs(offer)} />;
}
