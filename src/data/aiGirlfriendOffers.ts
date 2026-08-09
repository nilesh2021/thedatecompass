export interface AiGirlfriendOffer {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  badge: string;
  bestFor: string;
  description: string;
  highlights: string[];
  url: string;
  logo: string;
  featured?: boolean;
  promo?: string;
}

export const aiGirlfriendOffers: AiGirlfriendOffer[] = [
  {
    id: "dreamz",
    name: "Dreamz.ai",
    rating: 4.9,
    reviews: 312,
    badge: "Editor's Choice",
    bestFor: "Custom companions & roleplay",
    description:
      "Create a personalized AI companion with natural conversation, immersive roleplay, and private chats — ready in minutes.",
    highlights: [
      "Custom personalities",
      "AI roleplay",
      "Private chat",
      "Mobile friendly",
    ],
    url: "https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN",
    logo: "https://api.dicebear.com/9.x/shapes/svg?seed=Dreamz",
    featured: true,
    promo: "Free to start",
  },
  {
    id: "soulchat",
    name: "SoulChat AI",
    rating: 4.7,
    reviews: 198,
    badge: "Trending",
    bestFor: "Emotional companionship",
    description:
      "Built for adults who want deeper, context-aware conversations with an AI companion that remembers your preferences.",
    highlights: [
      "Memory-aware chat",
      "Voice messages",
      "Mood matching",
      "Quick signup",
    ],
    url: "https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN",
    logo: "https://api.dicebear.com/9.x/shapes/svg?seed=SoulChat",
    promo: "7-day trial",
  },
  {
    id: "novaflame",
    name: "NovaFlame",
    rating: 4.6,
    reviews: 164,
    badge: "Popular",
    bestFor: "Flirty AI conversations",
    description:
      "A playful AI girlfriend platform with instant messaging, customizable looks, and late-night conversation modes.",
    highlights: [
      "Instant messaging",
      "Custom looks",
      "Adult-friendly",
      "Works on mobile",
    ],
    url: "https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN",
    logo: "https://api.dicebear.com/9.x/shapes/svg?seed=NovaFlame",
    promo: "Limited offer",
  },
];

export const aiGirlfriendFaqs = [
  {
    question: "What is an AI girlfriend platform?",
    answer:
      "An AI girlfriend platform lets adults chat with customizable virtual companions powered by artificial intelligence — for conversation, companionship, and roleplay.",
  },
  {
    question: "Are these platforms free to try?",
    answer:
      "Most platforms offer free registration with optional premium upgrades. You can usually start chatting before committing to a paid plan.",
  },
  {
    question: "Is my chat private?",
    answer:
      "Reputable platforms encrypt conversations and keep chats on their secure servers. Always review each provider's privacy policy before signing up.",
  },
  {
    question: "Who is this for?",
    answer:
      "These platforms are intended for adults aged 18 and older seeking virtual companionship, conversation, or AI roleplay experiences.",
  },
];
