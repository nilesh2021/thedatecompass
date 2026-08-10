import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import CheekyCrushLanding from "./CheekyCrushLanding";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CheekyCrush — Casual Dating for Adults",
  description:
    "Join CheekyCrush for fast signup, flirty chats, and private messaging. Adult casual dating built for people who don’t want the long wait. 18+.",
  keywords: [
    "CheekyCrush",
    "casual dating",
    "adult dating",
    "flirty chat",
    "hookup site",
  ],
  alternates: {
    canonical: "https://www.thedatecompass.com/offers/cheekycrush",
  },
  openGraph: {
    title: "CheekyCrush — Casual Dating for Adults",
    description:
      "Fast signup, flirty chats, and private messaging on CheekyCrush. Adults 18+.",
    url: "https://www.thedatecompass.com/offers/cheekycrush",
    type: "website",
  },
};

export default function CheekyCrushOfferPage() {
  return (
    <div className={`${bricolage.variable} ${jakarta.variable}`}>
      <CheekyCrushLanding />
    </div>
  );
}
