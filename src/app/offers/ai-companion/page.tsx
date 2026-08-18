import AiCompanionLanding from "@/components/landing/AiCompanionLanding";
import FixedOfferCta from "@/components/landing/FixedOfferCta";
import TrafficStarsTracker from "@/components/common/TrafficStarsTracker";
import type { Metadata } from "next";
import { aiGirlfriendFaqs, dreamzOffer } from "@/data/aiGirlfriendOffers";

const PAGE_URL = "https://www.thedatecompass.com/offers/ai-companion";

export const metadata: Metadata = {
  title: {
    absolute: "AI Companion | Meet Your Virtual AI Companion",
  },
  description:
    "Meet your AI companion on Dreamz.ai — personalized personalities, private conversations, immersive roleplay, and virtual companionship. Adults 18+.",
  keywords: [
    "AI companion",
    "virtual AI companion",
    "AI girlfriend",
    "Dreamz.ai",
    "AI chat",
    "AI roleplay",
    "virtual girlfriend",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "AI Companion | Meet Your Virtual AI Companion",
    description:
      "Meet your AI companion — personalized personalities, private chat, and immersive roleplay on Dreamz.ai.",
    url: PAGE_URL,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Companion | Meet Your Virtual AI Companion",
    description:
      "Meet your AI companion — personalized personalities, private chat, and immersive roleplay on Dreamz.ai.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AiCompanionPage() {
  return (
    <div className="pb-24 font-sans lg:pb-0">
      <TrafficStarsTracker />

      <AiCompanionLanding />

      <FixedOfferCta offer={dreamzOffer} placement="dreamz_fixed_cta" />

      {/* Breadcrumb Schema */}
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
              {
                "@type": "ListItem",
                position: 3,
                name: "AI Companion",
                item: PAGE_URL,
              },
            ],
          }),
        }}
      />

      {/* FAQ Schema */}
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
