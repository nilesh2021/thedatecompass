import type { Metadata } from "next";
import FreeDatingSitesForGayLanding from "@/components/landing/FreeDatingSitesForGayLanding";
import { getBrandSeo } from "@/lib/pageSeo";

const seo = getBrandSeo("/offers/free-dating-sites-for-gay")!;

const PAGE_URL =
  "https://www.thedatecompass.com/offers/free-dating-sites-for-gay";
const TITLE = seo.title;
const DESCRIPTION = seo.description;

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
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function FreeDatingSitesForGayPage() {
  return <FreeDatingSitesForGayLanding />;
}
