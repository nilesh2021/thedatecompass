import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import AdultOffersBs5Landing from "./AdultOffersBs5Landing";

const syne = Syne({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Top Adult Dating Offers 2026",
  description:
    "Compare top adult dating platforms for 2026. Fast signup, verified members, and discreet connections.",
  keywords: [
    "adult dating",
    "adult dating sites",
    "adult dating offers",
    "casual adult dating",
    "hookup sites",
  ],
};

export default function AdultOffersPage() {
  return (
    <div className={`${syne.variable} ${manrope.variable}`}>
      <AdultOffersBs5Landing />
    </div>
  );
}
