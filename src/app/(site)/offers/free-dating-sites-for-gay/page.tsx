import type { Metadata } from "next";
import FreeDatingSitesForGayLanding from "@/components/landing/FreeDatingSitesForGayLanding";

const PAGE_URL =
  "https://www.thedatecompass.com/offers/free-dating-sites-for-gay";
const TITLE = "Free Dating Sites for Gay | ManFinder | TheDateCompass";
const DESCRIPTION =
  "ManFinder is a well-established gay dating brand focused on connecting men seeking casual encounters and real connections. Free dating sites for gay men. Adults 18+.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "free dating sites for gay",
    "free gay dating sites",
    "ManFinder",
    "men seeking men",
    "casual gay dating",
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

export default function FreeDatingSitesForGayPage() {
  return <FreeDatingSitesForGayLanding />;
}
