import { notFound } from "next/navigation";
import {
  buildCanadaReviewFaqs,
  CanadaReviewDocument,
  canadaReviewMetadata,
  getCanadaReviewOffer,
} from "@/components/country/canada/canadaReviewShared";

const SLUG = "grannyhunter";
const offer = getCanadaReviewOffer(SLUG);

export const metadata = canadaReviewMetadata(SLUG, "Grannyhunter");

export default function GrannyhunterCanadaReviewPage() {
  if (!offer) {
    notFound();
  }

  return <CanadaReviewDocument offer={offer} faqs={buildCanadaReviewFaqs(offer)} />;
}
