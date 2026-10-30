import type { Metadata } from "next";
import GayDatingUsaLanding from "@/components/landing/GayDatingUsaLanding";
import { getBrandSeo } from "@/lib/pageSeo";

const seo = getBrandSeo("/offers/gay-dating-usa")!;

const PAGE_URL = "https://www.thedatecompass.com/offers/gay-dating-usa";
const TITLE = seo.title;
const DESCRIPTION = seo.description;

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
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function GayDatingUsaPage() {
  return <GayDatingUsaLanding />;
}
