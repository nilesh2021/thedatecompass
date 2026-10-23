import { notFound } from "next/navigation";
import {
  buildDenmarkReviewFaqs,
  DenmarkReviewDocument,
  denmarkReviewMetadata,
  getDenmarkReviewOffer,
} from "@/components/country/denmark/denmarkReviewShared";

const SLUG = "dirtydating";
const offer = getDenmarkReviewOffer(SLUG);

export const metadata = denmarkReviewMetadata(SLUG, "DirtyDating");

export default function DirtyDatingDenmarkReviewPage() {
  if (!offer) {
    notFound();
  }

  return <DenmarkReviewDocument offer={offer} faqs={buildDenmarkReviewFaqs(offer)} />;
}
