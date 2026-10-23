import { notFound } from "next/navigation";
import {
  buildGermanyReviewFaqs,
  GermanyReviewDocument,
  getGermanyReviewOffer,
  germanyReviewMetadata,
} from "@/components/country/germany/germanyReviewShared";

const SLUG = "transdate";
const offer = getGermanyReviewOffer(SLUG);

export const metadata = germanyReviewMetadata(SLUG, "TransDate");

export default function TransDateGermanyReviewPage() {
  if (!offer) {
    notFound();
  }

  return <GermanyReviewDocument offer={offer} faqs={buildGermanyReviewFaqs(offer)} />;
}
