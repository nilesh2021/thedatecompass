import { notFound } from "next/navigation";
import {
  buildDenmarkReviewFaqs,
  DenmarkReviewDocument,
  denmarkReviewMetadata,
  getDenmarkReviewOffer,
} from "@/components/country/denmark/denmarkReviewShared";

const SLUG = "manfinder";
const offer = getDenmarkReviewOffer(SLUG);

export const metadata = denmarkReviewMetadata(SLUG, "Manfinder");

export default function ManfinderDenmarkReviewPage() {
  if (!offer) {
    notFound();
  }

  return <DenmarkReviewDocument offer={offer} faqs={buildDenmarkReviewFaqs(offer)} />;
}
