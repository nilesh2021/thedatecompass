import type { Metadata } from "next";

const PAGE_URL = "https://www.thedatecompass.com/offers/sex-emulator";

export const metadata: Metadata = {
  title: {
    absolute: "Virtual Experience | Interactive Adult Gaming",
  },
  description:
    "Explore an interactive virtual world — create, customize, and discover a premium adult gaming experience. Adults 18+ only.",
  keywords: [
    "virtual experience",
    "adult gaming",
    "interactive virtual world",
    "virtual world",
    "adults 18+",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Explore a New Virtual Experience",
    description:
      "Create, customize and explore an interactive virtual world. Adults 18+ only.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Explore a New Virtual Experience",
    description:
      "Create, customize and explore an interactive virtual world. Adults 18+ only.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SexEmulatorOfferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
