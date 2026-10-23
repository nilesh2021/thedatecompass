import { notFound } from "next/navigation";
import {
  buildGermanyReviewFaqs,
  GermanyReviewDocument,
  getGermanyReviewOffer,
  germanyReviewMetadata,
} from "@/components/country/germany/germanyReviewShared";

const SLUG = "manfinder";
const offer = getGermanyReviewOffer(SLUG);

export const metadata = germanyReviewMetadata(SLUG, "Manfinder");

export default function ManfinderGermanyReviewPage() {
  if (!offer) {
    notFound();
  }

  return <GermanyReviewDocument offer={offer} faqs={buildGermanyReviewFaqs(offer)} />;
}
