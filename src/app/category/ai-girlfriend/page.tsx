import AiGirlfriendLanding from "@/components/landing/AiGirlfriendLanding";
import type { Metadata } from "next";
import { aiGirlfriendFaqs } from "@/data/aiGirlfriendOffers";

export const metadata: Metadata = {
  title: "Best AI Girlfriend Platforms & Offers 2026 | TheDateCompass",
  description:
    "Compare top AI girlfriend platforms with current promotional offers. Private chat, custom companions, and instant access — ranked for 2026.",
  keywords: [
    "AI girlfriend",
    "AI companion",
    "virtual girlfriend",
    "AI girlfriend offers",
    "best AI girlfriend 2026",
    "AI chat companion",
  ],
  alternates: {
    canonical: "https://www.thedatecompass.com/category/ai-girlfriend",
  },
};

export default function AIGirlfriendPage() {
  return (
    <div className="font-sans">
      <AiGirlfriendLanding />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.thedatecompass.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "AI Girlfriend",
                item: "https://www.thedatecompass.com/category/ai-girlfriend",
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: aiGirlfriendFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
