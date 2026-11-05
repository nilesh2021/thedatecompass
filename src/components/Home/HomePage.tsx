import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import Hero from "@/components/Home/Hero";
import GeoTopOffers from "@/components/Home/GeoTopOffers";
import FeaturedOffers from "@/components/Home/FeaturedOffers";
import CountriesGate from "@/components/Home/CountriesGate";
import { CountriesOpenProvider } from "@/components/Home/CountriesOpen";
import FAQ from "@/components/Home/FAQ";
import NoiseOverlay from "@/components/theme/NoiseOverlay";
import GermanySponsoredStrip from "@/components/country/germany/GermanySponsoredStrip";

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

export default function HomePage({ country }: { country: string }) {
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
        <GeoTopOffers country={country} />
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
