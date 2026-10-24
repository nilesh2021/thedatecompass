import { notFound } from "next/navigation";
import {
  buildFranceReviewFaqs,
  FranceReviewDocument,
  franceReviewMetadata,
  getFranceReviewOffer,
} from "@/components/country/france/franceReviewShared";

const SLUG = "fetishpartner";
const offer = getFranceReviewOffer(SLUG);

export const metadata = franceReviewMetadata(SLUG, "FetishPartner");

export default function FetishPartnerFranceReviewPage() {
  if (!offer) {
    notFound();
  }

  return <FranceReviewDocument offer={offer} faqs={buildFranceReviewFaqs(offer)} />;
}