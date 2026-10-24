import { notFound } from "next/navigation";
import {
  buildAustraliaReviewFaqs,
  AustraliaReviewDocument,
  australiaReviewMetadata,
  getAustraliaReviewOffer,
} from "@/components/country/australia/australiaReviewShared";

const SLUG = "fuckfinder";
const offer = getAustraliaReviewOffer(SLUG);

export const metadata = australiaReviewMetadata(SLUG, "FuckFinder");

export default function FuckFinderAustraliaReviewPage() {
  if (!offer) {
    notFound();
  }

  return <AustraliaReviewDocument offer={offer} faqs={buildAustraliaReviewFaqs(offer)} />;
}
