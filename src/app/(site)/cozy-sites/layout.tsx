import type { Metadata } from "next";
import { topicSeo } from "@/lib/pageSeo";

const PAGE_URL = "https://www.thedatecompass.com/cozy-sites";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80";
const seo = topicSeo(
  "Cozy & Niche Dating Sites | TheDateCompass",
  "Browse cozy and niche adult dating listings, including alternative and adult social platforms, on this independent directory.",
);

export const metadata: Metadata = {
  title: {
    absolute: seo.title,
  },
  description: seo.description,
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: PAGE_URL,
    siteName: "TheDateCompass",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Cozy dating sites" }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function CozySitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
