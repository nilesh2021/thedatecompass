import { notFound } from "next/navigation";
import {
  buildAustraliaReviewFaqs,
  AustraliaReviewDocument,
  australiaReviewMetadata,
  getAustraliaReviewOffer,
} from "@/components/country/australia/australiaReviewShared";

const SLUG = "grannyhunter";
const offer = getAustraliaReviewOffer(SLUG);

export const metadata = australiaReviewMetadata(SLUG, "Grannyhunter");

export default function GrannyhunterAustraliaReviewPage() {
  if (!offer) {
    notFound();
  }

  return <AustraliaReviewDocument offer={offer} faqs={buildAustraliaReviewFaqs(offer)} />;
}
