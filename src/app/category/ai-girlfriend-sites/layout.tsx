import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "AI Girlfriend Platform Draft | TheDateCompass",
  },
  description:
    "Draft AI girlfriend landing page. Prefer the main AI companion category and Dreamz.ai offer pages for current comparisons.",
  alternates: {
    canonical: "https://www.thedatecompass.com/category/ai-girlfriend-sites",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AiGirlfriendSitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
