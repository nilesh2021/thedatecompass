import type { Metadata } from "next";
import GayDatingUsaLanding from "@/components/landing/GayDatingUsaLanding";

const PAGE_URL = "https://www.thedatecompass.com/offers/gay-dating-usa";
const TITLE = "Gay Adult Dating Sites in the USA | TheDateCompass";
const DESCRIPTION =
  "Gay adult dating sites in the USA: Manfinder lists profiles and direct messages for men. Adults 18+ only. Prices are on the provider site.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "gay adult dating sites in USA",
    "gay adult dating sites",
    "gay dating sites USA",
    "Manfinder",
    "men seeking men",
    "18+",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "TheDateCompass",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GayDatingUsaPage() {
  return <GayDatingUsaLanding />;
}
