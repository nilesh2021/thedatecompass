import type { Metadata } from "next";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import FeaturedOffers from "@/components/Home/FeaturedOffers";
import CountriesGate from "@/components/Home/CountriesGate";
import { CountriesOpenProvider } from "@/components/Home/CountriesOpen";
import FAQ from "@/components/Home/FAQ";
import NoiseOverlay from "@/components/theme/NoiseOverlay";
import GermanySponsoredStrip from "@/components/country/germany/GermanySponsoredStrip";
import { topicSeo } from "@/lib/pageSeo";

const seo = topicSeo(
  "Dating Sites & AI Companion Platforms by Country | TheDateCompass",
  "Compare dating websites, adult dating platforms, and AI companion services by country on this independent directory.",
);

export const metadata: Metadata = {
  title: {
    absolute: seo.title,
  },
  description: seo.description,
  keywords: [
    "dating sites",
    "adult dating sites",
    "dating by country",
    "AI girlfriend",
    "AI companion",
    "casual dating",
    "gay dating",
    "dating site comparison",
    "TheDateCompass",
  ],
  alternates: {
    canonical: "https://www.thedatecompass.com",
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "https://www.thedatecompass.com",
    siteName: "TheDateCompass",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.thedatecompass.com/images/extra/2.jpg",
        width: 1200,
        height: 630,
        alt: "TheDateCompass dating comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [
      "https://www.thedatecompass.com/images/extra/2.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "Dating Directory",
  verification: {
    other: {
      "impact-site-verification": "bbf507ac-9ef6-4fce-8439-fcd5938f83cf",
      "msvalidate.01": "557CEBF872EEAF8421A01C88070C224C",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "TheDateCompass",
      url: "https://www.thedatecompass.com",
      logo: "https://www.thedatecompass.com/icon.svg",
    },
    {
      "@type": "WebSite",
      name: "TheDateCompass",
      url: "https://www.thedatecompass.com",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Header tone="home" />
      <div className="relative bg-[#0c1230]">
        <NoiseOverlay />
        <Hero />
        <CountriesOpenProvider>
          <FeaturedOffers />
          <GermanySponsoredStrip />
          <CountriesGate />
        </CountriesOpenProvider>
        <FAQ />
      </div>
      <Footer tone="home" />
    </>
  );
}
