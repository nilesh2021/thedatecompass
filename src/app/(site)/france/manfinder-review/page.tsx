import { notFound } from "next/navigation";
import {
  buildFranceReviewFaqs,
  FranceReviewDocument,
  franceReviewMetadata,
  getFranceReviewOffer,
} from "@/components/country/france/franceReviewShared";

const SLUG = "manfinder";
const offer = getFranceReviewOffer(SLUG);

export const metadata = franceReviewMetadata(SLUG, "Manfinder");

export default function ManfinderFranceReviewPage() {
  if (!offer) {
    notFound();
  }

  return <FranceReviewDocument offer={offer} faqs={buildFranceReviewFaqs(offer)} />;
}
