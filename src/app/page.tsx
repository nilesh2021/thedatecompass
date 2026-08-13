import type { Metadata } from "next";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import FeaturedOffers from "@/components/Home/FeaturedOffers";
import Countries from "@/components/Home/Countries";
import Categories from "@/components/Home/Categories";
import WhyChoose from "@/components/Home/WhyChoose";
import HowItWorks from "@/components/Home/HowItWorks";
import FAQ from "@/components/Home/FAQ";
import NoiseOverlay from "@/components/theme/NoiseOverlay";

export const metadata: Metadata = {
  title: {
    absolute:
      "Dating Sites & AI Companion Platforms by Country | TheDateCompass",
  },
  description:
    "Compare dating websites, adult dating platforms, and AI companion services by country. Independent directory with affiliate links to third-party providers for eligible adults.",
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
    title: "Dating Sites & AI Companions by Country | TheDateCompass",
    description:
      "Compare dating platforms and AI companions by country on TheDateCompass.",
    url: "https://www.thedatecompass.com",
    siteName: "TheDateCompass",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "TheDateCompass dating comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dating Sites & AI Companions by Country | TheDateCompass",
    description:
      "Compare dating platforms and AI companions by country on TheDateCompass.",
    images: [
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
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
      <div className="relative bg-ink">
        <NoiseOverlay />
        <Hero />
        <FeaturedOffers />
        <Categories />
        <HowItWorks />
        <Countries />
        <WhyChoose />
        <FAQ />
      </div>
      <Footer />
    </>
  );
}
