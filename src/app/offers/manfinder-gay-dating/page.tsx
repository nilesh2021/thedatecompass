import type { Metadata } from "next";
import ManFinderGayDatingLanding from "@/components/landing/ManFinderGayDatingLanding";

const PAGE_URL =
  "https://www.thedatecompass.com/offers/manfinder-gay-dating";

const TITLE = "Gay Dating Sites for Men | ManFinder | TheDateCompass";
const DESCRIPTION =
  "Explore gay dating sites and online gay dating with ManFinder — a platform for gay singles to meet gay men, from conversation to casual gay dating. Adults 18+.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "gay dating sites",
    "gay dating",
    "dating sites for gay men",
    "gay men dating",
    "meet gay men",
    "online gay dating",
    "casual gay dating",
    "gay singles",
    "ManFinder",
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

export default function ManFinderGayDatingPage() {
  return <ManFinderGayDatingLanding />;
}
