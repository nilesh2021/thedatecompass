import type { Metadata } from "next";
import ManFinderLandingV2 from "@/components/landing/ManFinderLandingV2";

export const metadata: Metadata = {
  title: "ManFinder | Gay Dating for Men | TheDateCompass",
  description:
    "Meet men looking for men. Discover ManFinder, a gay dating platform for men seeking connections, conversations, and casual dating.",
  keywords: [
    "ManFinder",
    "gay dating",
    "gay dating sites",
    "dating for men",
    "men seeking men",
    "gay dating platform",
    "gay singles",
  ],
  alternates: {
    canonical: "https://www.thedatecompass.com/offers/manfinder-v2",
  },
  openGraph: {
    title: "ManFinder | Gay Dating for Men",
    description:
      "Meet men looking for men. Explore ManFinder and discover new connections.",
    url: "https://www.thedatecompass.com/offers/manfinder-v2",
    siteName: "TheDateCompass",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ManFinderV2Page() {
  return <ManFinderLandingV2 />;
}