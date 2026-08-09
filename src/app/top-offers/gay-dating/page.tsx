import GayDatingLanding from "@/components/landing/GayDatingLanding";
import { Inter, Instrument_Serif } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
});

export const metadata = {
  title: "Best Gay Dating Sites & Apps in 2026",
  description:
    "Discover top-rated gay dating platforms with verified profiles, inclusive communities, and smart matching for men seeking real connections.",
  keywords: [
    "gay dating sites",
    "gay dating apps",
    "best gay dating",
    "LGBTQ dating",
    "gay men dating",
    "gay hookup apps",
  ],
};

export default function GayDatingPage() {
  return (
    <div className={`${inter.variable} ${instrumentSerif.variable} font-sans`}>
      <GayDatingLanding />
    </div>
  );
}
