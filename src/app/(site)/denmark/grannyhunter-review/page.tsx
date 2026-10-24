import { notFound } from "next/navigation";
import {
  buildDenmarkReviewFaqs,
  DenmarkReviewDocument,
  denmarkReviewMetadata,
  getDenmarkReviewOffer,
} from "@/components/country/denmark/denmarkReviewShared";

const SLUG = "grannyhunter";
const offer = getDenmarkReviewOffer(SLUG);

export const metadata = denmarkReviewMetadata(SLUG, "Grannyhunter");

export default function GrannyhunterDenmarkReviewPage() {
  if (!offer) {
    notFound();
  }

  return <DenmarkReviewDocument offer={offer} faqs={buildDenmarkReviewFaqs(offer)} />;
}
