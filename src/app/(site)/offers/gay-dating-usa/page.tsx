import type { Metadata } from "next";
import GayDatingUsaLanding from "@/components/landing/GayDatingUsaLanding";

const PAGE_URL = "https://www.thedatecompass.com/offers/gay-dating-usa";
const TITLE = "Gay Dating Sites in the USA | ManFinder | TheDateCompass";
const DESCRIPTION =
  "ManFinder is a well-established gay dating brand focused on connecting men seeking casual encounters and real connections. Built for high-intent users in the USA. Adults 18+.";

export const metadata: Metadata = {
  title: {
    absolute: TITLE,
  },
  description: DESCRIPTION,
  keywords: [
    "gay dating sites USA",
    "gay dating sites",
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

export default function GayDatingUsaPage() {
  return <GayDatingUsaLanding />;
}
