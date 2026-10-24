import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "AI Companion Platform Draft | TheDateCompass",
  },
  description:
    "Draft AI companion landing page. Prefer /category/ai-girlfriend and /offers/dreamz-ai for current comparisons.",
  keywords: [
    "AI companion",
    "AI girlfriend",
    "virtual girlfriend",
    "AI chat",
  ],
  alternates: {
    canonical: "https://www.thedatecompass.com/category/ai-girlfriend-v2",
  },
  openGraph: {
    title: "AI Companion Platform Draft | TheDateCompass",
    description:
      "Draft AI companion landing. See the main AI girlfriend category for current listings.",
    url: "https://www.thedatecompass.com/category/ai-girlfriend-v2",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AiGirlfriendV2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
