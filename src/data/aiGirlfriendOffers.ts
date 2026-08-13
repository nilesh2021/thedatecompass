export interface AiGirlfriendOffer {
  name: string;
  
  badge: string;
  bestFor: string;
  description: string;
  highlights: string[];
  url: string;
  promo: string;
}

export const dreamzOffer: AiGirlfriendOffer = {
  name: "Dreamz.ai",
  badge: "AI companion",
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
  promo: "Free to start",
};
export const aiGirlfriendOffers: AiGirlfriendOffer[] = [
  dreamzOffer,
];
export type DreamzCompanion = {
  name: string;
  age: number;
  likes: string;
  pace: "FAST" | "FAST-BURN" | "EVEN PACED";
  bio: string;
  image: string;
  imageAlt?: string;
  video?: string;
  featured?: boolean;
};

export const dreamzCompanions: DreamzCompanion[] = [
  {
    name: "Ari",
    age: 21,
    likes: "1.9k",
    pace: "FAST",
    bio: "Soft-spoken companion who loves late-night talks and playful roleplay.",
    image: "/images/dreamz/companion-1.webp",
    video: "/images/dreamz/companion-video.mp4",
    featured: true,
  },
  {
    name: "Ella",
    age: 23,
    likes: "2.4k",
    pace: "FAST-BURN",
    bio: "Confident, flirty, and always ready for an immersive story with you.",
    image: "/images/dreamz/companion-2.webp",
  },
  {
    name: "Maya",
    age: 22,
    likes: "3.1k",
    pace: "EVEN PACED",
    bio: "Warm and thoughtful — perfect if you want deeper emotional companionship.",
    image: "/images/dreamz/companion-3.webp",
  },
  {
    name: "Luna",
    age: 24,
    likes: "1.6k",
    pace: "FAST",
    bio: "Creative muse energy. Chat, flirt, or build a whole fantasy world together.",
    image: "/images/dreamz/companion-4.webp",
  },
  {
    name: "Nina",
    age: 22,
    likes: "2.8k",
    pace: "FAST-BURN",
    bio: "Fitness-focused companion with playful energy and conversations that keep pace with you.",
    image: "/images/dreamz/companion-5.webp",
  },
  {
    name: "Zoe",
    age: 23,
    likes: "2.1k",
    pace: "EVEN PACED",
    bio: "Golden-hour vibes and easygoing chats that feel natural from the first message.",
    image: "/images/dreamz/companion-6.webp",
  },
  {
    name: "Ivy",
    age: 21,
    likes: "1.8k",
    pace: "FAST",
    bio: "Bright smile, casual style, and a companion who always has something fun to say.",
    image: "/images/dreamz/companion-7.webp",
  },
  {
    name: "Sienna",
    age: 24,
    likes: "3.4k",
    pace: "FAST-BURN",
    bio: "Beach-day energy and endless summer vibes — always ready to splash into a new chat.",
    image: "/images/dreamz/companion-8.png",
  },
];

export const aiGirlfriendFaqs = [
  {
    question: "What is Dreamz.ai?",
    answer:
      "Dreamz.ai is an AI companion platform where adults can create a personalized virtual girlfriend for conversation, companionship, and roleplay.",
  },
  {
    question: "Is Dreamz.ai free to try?",
    answer:
      "Yes — you can create an account and start chatting for free. Premium features are available if you want to unlock more.",
  },
  {
    question: "Is my chat private?",
    answer:
      "Conversations stay on the provider's servers. Review Dreamz.ai's privacy policy before signing up, and never share sensitive personal information.",
  },
  {
    question: "Who is this for?",
    answer:
      "Dreamz.ai is intended for adults aged 18 and older seeking virtual companionship, conversation, or AI roleplay.",
  },
];
