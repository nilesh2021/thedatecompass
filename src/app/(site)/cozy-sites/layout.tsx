import type { Metadata } from "next";

const PAGE_URL = "https://www.thedatecompass.com/cozy-sites";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  title: {
    absolute: "Cozy & Niche Dating Sites | TheDateCompass",
  },
  description:
    "Browse cozy and niche adult dating listings on TheDateCompass, including alternative and adult social platforms. Adults 18+. Affiliate links may apply.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Cozy & Niche Dating Sites | TheDateCompass",
    description:
      "Compare cozy and niche adult dating listings, including alternative and adult social platforms.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Cozy dating sites" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cozy & Niche Dating Sites | TheDateCompass",
    description:
      "Compare cozy and niche adult dating listings, including alternative and adult social platforms.",
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
