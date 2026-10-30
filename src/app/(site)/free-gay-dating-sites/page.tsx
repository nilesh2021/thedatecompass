import type { Metadata } from "next";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import FreeGayDatingSitesLanding from "@/components/landing/FreeGayDatingSitesLanding";
import { topicSeo } from "@/lib/pageSeo";

const PAGE_URL = "https://www.thedatecompass.com/free-gay-dating-sites";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1568590320589-8a16645ec483?auto=format&fit=crop&w=1200&q=80";
const seo = topicSeo(
  "Free Gay Dating Sites | TheDateCompass",
  "Explore free gay dating sites and free-to-join options for gay singles. Compare listed platforms before you visit a provider.",
);

export const metadata: Metadata = {
  title: {
    absolute: seo.title,
  },
  description: seo.description,
  keywords: [
    "free gay dating sites",
    "free gay dating",
    "free gay dating sites for men",
    "online gay dating",
    "free online gay dating",
    "gay dating sites",
    "gay singles",
    "gay men dating",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: PAGE_URL,
    siteName: "TheDateCompass",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Free gay dating sites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FreeGayDatingSitesPage() {
  return (
    <>
      <Header />
      <main>
        <FreeGayDatingSitesLanding />
      </main>
      <Footer />
    </>
  );
}
