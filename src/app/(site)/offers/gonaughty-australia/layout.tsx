import type { Metadata } from "next";
import { getBrandSeo } from "@/lib/pageSeo";

const PAGE_URL = "https://www.thedatecompass.com/offers/gonaughty-australia";
const seo = getBrandSeo("/offers/gonaughty-australia")!;

export const metadata: Metadata = {
  title: {
    absolute: seo.title,
  },
  description: seo.description,
  keywords: [
    "dating sites Australia",
    "Australian dating sites",
    "online dating Australia",
    "casual dating Australia",
    "adult dating Australia",
    "meet singles in Australia",
    "GoNaughty",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: PAGE_URL,
    locale: seo.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GoNaughtyAustraliaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
