import type { Metadata } from "next";

const PAGE_URL = "https://www.thedatecompass.com/offers/gonaughty-australia";

export const metadata: Metadata = {
  title: {
    absolute: "GoNaughty Australia | Online & Casual Dating",
  },
  description:
    "GoNaughty is an adult dating option for online dating Australia. Compare Australian dating sites, casual dating Australia, and meet singles in Australia. Adults 18+.",
  keywords: [
    "dating sites Australia",
    "Australian dating sites",
    "online dating Australia",
    "casual dating Australia",
    "adult dating Australia",
    "meet singles in Australia",
    "GoNaughty",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "GoNaughty Australia | Online & Casual Dating",
    description:
      "Meet singles in Australia with GoNaughty — online dating and casual dating for Australian adults 18+.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoNaughty Australia | Online & Casual Dating",
    description:
      "Adult dating Australia with GoNaughty. Explore casual dating and Australian dating sites. Adults 18+.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GoNaughtyAustraliaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
