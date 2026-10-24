import { notFound } from "next/navigation";
import {
  buildFranceReviewFaqs,
  FranceReviewDocument,
  franceReviewMetadata,
  getFranceReviewOffer,
} from "@/components/country/france/franceReviewShared";

const SLUG = "grannyhunter";
const offer = getFranceReviewOffer(SLUG);

export const metadata = franceReviewMetadata(SLUG, "Grannyhunter");

export default function GrannyhunterFranceReviewPage() {
  if (!offer) {
    notFound();
  }

  return <FranceReviewDocument offer={offer} faqs={buildFranceReviewFaqs(offer)} />;
}
