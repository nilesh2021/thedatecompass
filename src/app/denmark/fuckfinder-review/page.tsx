import { notFound } from "next/navigation";
import {
  buildDenmarkReviewFaqs,
  DenmarkReviewDocument,
  denmarkReviewMetadata,
  getDenmarkReviewOffer,
} from "@/components/country/denmark/denmarkReviewShared";

const SLUG = "fuckfinder";
const offer = getDenmarkReviewOffer(SLUG);

export const metadata = denmarkReviewMetadata(SLUG, "FuckFinder");

export default function FuckFinderDenmarkReviewPage() {
  if (!offer) {
    notFound();
  }

  return <DenmarkReviewDocument offer={offer} faqs={buildDenmarkReviewFaqs(offer)} />;
}
