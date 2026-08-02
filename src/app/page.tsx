import type { Metadata } from "next";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";

import Hero from "@/components/Home/Hero";
import FeaturedOffers from "@/components/Home/FeaturedOffers";
import Countries from "@/components/Home/Countries";
import Categories from "@/components/Home/Categories";
import WhyChoose from "@/components/Home/WhyChoose";
import HowItWorks from "@/components/Home/HowItWorks";
import TrustSection from "@/components/Home/TrustSection";
import FAQ from "@/components/Home/FAQ";
import CTA from "@/components/Home/CTA";
import FeaturedPlatforms from "@/components/FeaturedPlatforms/FeaturedPlatforms";

export const metadata: Metadata = {
  title:
    "Best Dating Sites & AI Girlfriend Platforms by Country | TheDateCompass",

  description:
    "Discover and compare dating websites, AI girlfriend platforms, and adult social services available in your country. Browse trusted providers and explore country-specific offers.",

  keywords: [
    "dating sites",
    "adult dating sites",
    "AI girlfriend",
    "AI companion",
    "AI dating",
    "online dating",
    "dating websites",
    "casual dating",
    "LGBTQ dating",
    "dating by country",
    "USA dating sites",
    "Germany dating sites",
    "Dreamz AI",
    "TheDateCompass",
  ],

  alternates: {
    canonical: "https://www.thedatecompass.com",
  },

  openGraph: {
    title:
      "Best Dating Sites & AI Girlfriend Platforms | TheDateCompass",

    description:
      "Compare dating platforms, AI girlfriend websites, and adult social services available in your country.",

    url: "https://www.thedatecompass.com",

    siteName: "TheDateCompass",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "https://www.thedatecompass.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TheDateCompass",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Best Dating Sites & AI Girlfriend Platforms | TheDateCompass",

    description:
      "Compare dating platforms and AI companion websites available in your country.",

    images: [
      "https://www.thedatecompass.com/og-image.jpg",
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
};

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <FeaturedOffers />
<FeaturedPlatforms />
 
      <Categories />

      <WhyChoose />

      <Countries />

      <HowItWorks />

      <TrustSection />

      <FAQ />

      <CTA />

      <Footer />
    </>
  );
}