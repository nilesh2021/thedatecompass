import { notFound } from "next/navigation";
import {
  buildDenmarkReviewFaqs,
  DenmarkReviewDocument,
  denmarkReviewMetadata,
  getDenmarkReviewOffer,
} from "@/components/country/denmark/denmarkReviewShared";

const SLUG = "transdate";
const offer = getDenmarkReviewOffer(SLUG);

export const metadata = denmarkReviewMetadata(SLUG, "TransDate");

export default function TransDateDenmarkReviewPage() {
  if (!offer) {
    notFound();
  }

  return <DenmarkReviewDocument offer={offer} faqs={buildDenmarkReviewFaqs(offer)} />;
}
