import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "AI Chat Platform Draft | TheDateCompass",
  },
  description:
    "Draft AI chat platform page. Prefer /category/ai-girlfriend and /offers/dreamz-ai for current AI companion listings.",
  alternates: {
    canonical: "https://www.thedatecompass.com/category/ai-chat-platform",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AiChatPlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
