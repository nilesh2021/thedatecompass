/**
 * Singleflirt landing — /offers/singleflirt
 * Public CTAs use /go/singleflirt. The tracking URL stays in the go map.
 */

export const SINGLEFLIRT_AFFILIATE_URL = "/go/singleflirt";

export const singleflirtGoDestinations: Record<string, string> = {
  singleflirt:
    "https://t.datsk3.com/358917/5528?aff_sub5=SF_006OG000004lmDN",
};

export const singleflirtOffer = {
  name: "Singleflirt",
  badge: "Say hi tonight",
  bestFor: "Local dates",
  category: "Online dating",
  availability: "Phone, tablet, and desktop",
  url: SINGLEFLIRT_AFFILIATE_URL,
  ctaLabel: "Start flirting",
  description:
    "Singleflirt is where a boring scroll turns into a real hello. Make a profile, message singles nearby, and take the spark from chat to a date.",
  highlights: ["Nearby singles", "Private messages", "Fast signup", "Real dates"],
  promo: "Free to start",
} as const;

export const singleflirtVisuals = {
  hero: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=80",
  portrait:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&h=1200&q=80",
  wide: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1800&h=900&q=80",
  side: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&h=1200&q=80",
} as const;

export const singleflirtSteps = [
  {
    step: "01",
    title: "Show up",
    text: "Create a profile in a few minutes. A clear photo and a short line about what you want is enough to start.",
  },
  {
    step: "02",
    title: "Say something worth answering",
    text: "Browse singles nearby and send a message that sounds like you, not a copy-paste opener.",
  },
  {
    step: "03",
    title: "Make the plan",
    text: "When the chat has a spark, suggest a meetup. You both decide if it leaves the screen.",
  },
] as const;

export const singleflirtSparks = [
  {
    title: "Close enough to meet",
    text: "Look for people around you, whether you are in a city or a smaller town.",
  },
  {
    title: "Chat with a pulse",
    text: "Message in private and see if the chemistry survives the first few lines.",
  },
  {
    title: "A date, not a pen pal",
    text: "Singleflirt is for adults who want the conversation to become a real plan.",
  },
] as const;

export const singleflirtFeatures = [
  {
    title: "Built for a first hello",
    text: "Skip the endless questionnaire. Get a profile live and start looking.",
  },
  {
    title: "Local singles",
    text: "Browse people who are close enough that a good chat can turn into a meetup.",
  },
  {
    title: "Private messaging",
    text: "Conversations stay on Singleflirt until you both want to take the next step.",
  },
  {
    title: "Any age from 18 up",
    text: "Members range from new adults to 50 and older. You choose who you talk to.",
  },
  {
    title: "Phone or desktop",
    text: "Open it on the train, on the couch, or at your desk. The hello still counts.",
  },
] as const;

export const singleflirtPlaces = {
  eyebrow: "Nearby, in your country",
  titleLead: "Singles near you,",
  titleAccent: "wherever you are",
  paragraphs: [
    "People open Singleflirt to meet someone close enough for a real date. That includes singles in Norway, Sweden, Denmark, and Finland, and across the Netherlands, Ireland, Austria, Germany, the United Kingdom, Switzerland, Belgium, Luxembourg, and Liechtenstein.",
    "The same idea holds in France, Italy, Spain, Portugal, Greece, Cyprus, and Malta, and through Czechia, Slovakia, Poland, Hungary, Estonia, Latvia, Lithuania, Slovenia, Croatia, Bulgaria, Iceland, and Serbia.",
    "It is also used in the United States, Canada, Puerto Rico, Australia, New Zealand, Israel, Singapore, and South Korea. You still browse people around you. The country only tells the site where that nearby is.",
  ],
} as const;

export const singleflirtFaqs = [
  {
    question: "What is Singleflirt?",
    answer:
      "Singleflirt is an online dating site for adults who want to meet singles nearby. You create a profile, browse people in your area, and message the ones you want to meet. TheDateCompass does not run Singleflirt.",
  },
  {
    question: "Who can join?",
    answer:
      "Adults 18 and over. It suits people looking for a date, a relationship, or a new connection, from 18 to 50 and older.",
  },
  {
    question: "How do you actually meet someone?",
    answer:
      "Make a profile, find someone nearby, and start a conversation. If you both want to, arrange a meetup. The date only happens when you both say yes.",
  },
  {
    question: "Where can I meet singles on Singleflirt?",
    answer:
      "Adults use it in Norway, Sweden, Denmark, Finland, the Netherlands, Ireland, Germany, the United Kingdom, France, Italy, Spain, the United States, Canada, Australia, and the other countries named above. You look for people near you, then message the ones you want to meet.",
  },
  {
    question: "Can I use Singleflirt on my phone?",
    answer:
      "Yes. Singleflirt works on a phone, tablet, or desktop, so you can browse and message wherever you are.",
  },
  {
    question: "What does Singleflirt cost?",
    answer:
      "You can create a profile and start browsing. Paid features may be offered on Singleflirt. Check the current terms and prices on the site before you sign up.",
  },
  {
    question: "Is this the official Singleflirt site?",
    answer:
      "No. This is an independent overview from TheDateCompass. The button takes you to Singleflirt. If you continue through the link, we may earn a commission at no extra cost to you.",
  },
] as const;
