import type { Metadata } from "next";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import GayDatingLanding from "@/components/landing/GayDatingLanding";

const PAGE_URL = "https://www.thedatecompass.com/gay-dating";
const OG_IMAGE =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  title: {
    absolute: "Gay Dating Sites & Apps 2026 | TheDateCompass",
  },
  description:
    "Compare gay dating and LGBTQ+ dating app listings on TheDateCompass. Browse GayBloom, PridePair, Manfinder, and TransDate offers for adults 18+.",
  keywords: [
    "gay dating sites",
    "gay dating apps",
    "LGBTQ dating",
    "gay men dating",
    "gay dating offers",
    "Manfinder",
    "GayBloom",
    "PridePair",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Gay Dating Sites & Apps 2026 | TheDateCompass",
    description:
      "Compare gay dating and LGBTQ+ dating listings, including GayBloom, PridePair, Manfinder, and TransDate.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Gay dating offers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gay Dating Sites & Apps 2026 | TheDateCompass",
    description:
      "Compare gay dating and LGBTQ+ dating listings, including GayBloom, PridePair, Manfinder, and TransDate.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GayDatingPage() {
  return (
    <>
      <Header />
      <main>
        <GayDatingLanding />
      </main>
      <Footer />
    </>
  );
}
