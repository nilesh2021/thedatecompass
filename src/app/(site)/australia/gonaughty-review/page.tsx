import { notFound } from "next/navigation";
import {
  buildAustraliaReviewFaqs,
  AustraliaReviewDocument,
  australiaReviewMetadata,
  getAustraliaReviewOffer,
} from "@/components/country/australia/australiaReviewShared";

const SLUG = "gonaughty";
const offer = getAustraliaReviewOffer(SLUG);

export const metadata = australiaReviewMetadata(SLUG, "GoNaughty");

export default function GoNaughtyAustraliaReviewPage() {
  if (!offer) {
    notFound();
  }

  return <AustraliaReviewDocument offer={offer} faqs={buildAustraliaReviewFaqs(offer)} />;
}
