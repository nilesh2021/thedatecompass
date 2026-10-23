import { notFound } from "next/navigation";
import {
  buildFranceReviewFaqs,
  FranceReviewDocument,
  franceReviewMetadata,
  getFranceReviewOffer,
} from "@/components/country/france/franceReviewShared";

const SLUG = "realsexclub";
const offer = getFranceReviewOffer(SLUG);

export const metadata = franceReviewMetadata(SLUG, "RealSexClub");

export default function RealSexClubFranceReviewPage() {
  if (!offer) {
    notFound();
  }

  return <FranceReviewDocument offer={offer} faqs={buildFranceReviewFaqs(offer)} />;
}
