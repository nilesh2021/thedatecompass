import type { Metadata } from "next";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import FreeGayDatingSitesLanding from "@/components/landing/FreeGayDatingSitesLanding";

const PAGE_URL = "https://www.thedatecompass.com/free-gay-dating-sites";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  title: {
    absolute: "Free Gay Dating Sites | Explore Free Gay Dating",
  },
  description:
    "Explore free gay dating sites and free-to-join options for gay singles. Compare online gay dating platforms for men, then visit a listed partner to connect.",
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
    title: "Free Gay Dating Sites | Explore Free Gay Dating",
    description:
      "Discover gay dating platforms with free-to-join and free-to-explore options. Compare listings for gay singles, then visit a partner site.",
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
    title: "Free Gay Dating Sites | Explore Free Gay Dating",
    description:
      "Discover gay dating platforms with free-to-join and free-to-explore options for gay singles.",
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
