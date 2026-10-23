import { notFound } from "next/navigation";
import {
  buildGermanyReviewFaqs,
  GermanyReviewDocument,
  getGermanyReviewOffer,
  germanyReviewMetadata,
} from "@/components/country/germany/germanyReviewShared";

const SLUG = "fuckfinder";
const offer = getGermanyReviewOffer(SLUG);

export const metadata = germanyReviewMetadata(SLUG, "FuckFinder");

export default function FuckFinderGermanyReviewPage() {
  if (!offer) {
    notFound();
  }

  // TODO: Fill verified FuckFinder pricing, rating, member-count, and privacy-feature copy. Do not invent statistics.
  // TODO: Replace placeholder comparison notes once a real review source is available.

  return <GermanyReviewDocument offer={offer} faqs={buildGermanyReviewFaqs(offer)} />;
}
