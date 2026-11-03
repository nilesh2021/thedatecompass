/**
 * BeijosQuentes landing — /offers/beijosquentes
 * Public CTAs use /go/beijosquentes. The tracking URL stays in the go map.
 */

export const BEIJOSQUENTES_AFFILIATE_URL = "/go/beijosquentes";

export const beijosquentesGoDestinations: Record<string, string> = {
  beijosquentes:
    "https://t.datsk3.com/358917/10495/0?po=6456&aff_sub5=SF_006OG000004lmDN",
};

export const beijosquentesOffer = {
  name: "BeijosQuentes",
  badge: "A warmer hello",
  bestFor: "Romantic dates",
  category: "Romantic dating",
  availability: "Phone, tablet, and desktop",
  url: BEIJOSQUENTES_AFFILIATE_URL,
  ctaLabel: "Meet someone",
  description:
    "BeijosQuentes is for adults who want the conversation to feel like a date. Make a profile, send a message with some warmth, and see if it turns into a real kiss.",
  highlights: ["Romantic dates", "Private chat", "Fast signup", "Adults 18+"],
  promo: "Free to start",
} as const;

export const beijosquentesVisuals = {
  hero: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1800&q=80",
  portrait:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&h=1200&q=80",
  wide: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&h=900&q=80",
} as const;

export const beijosquentesSteps = [
  {
    step: "01",
    title: "Show your warmer side",
    text: "Create a profile in a few minutes. A clear photo and a line about what you are hoping for is enough to begin.",
  },
  {
    step: "02",
    title: "Write like you would in person",
    text: "Find someone who catches your eye and send a message that sounds like you, not a copied opener.",
  },
  {
    step: "03",
    title: "Make the date",
    text: "When the chat has a spark, suggest meeting. The kiss only happens when you both want it.",
  },
] as const;

export const beijosquentesSparks = [
  {
    title: "Chemistry you can feel",
    text: "Look for a conversation that has warmth, not another chat that goes nowhere.",
  },
  {
    title: "Messages that stay private",
    text: "Talk one to one until you both decide the next step belongs offline.",
  },
  {
    title: "A date you can actually make",
    text: "BeijosQuentes is for adults who want the hello to become a real plan.",
  },
] as const;

export const beijosquentesFeatures = [
  {
    title: "A softer first hello",
    text: "Skip the long questionnaire. Get a profile live and start looking for someone who fits.",
  },
  {
    title: "Chat with intention",
    text: "Message people you actually want to meet, and let the conversation show you if the feeling is mutual.",
  },
  {
    title: "You set the pace",
    text: "Flirt, take it slow, or ask for the date. Nothing leaves the chat until you both say yes.",
  },
  {
    title: "Any age from 18 up",
    text: "Members range from new adults to 50 and older. You choose who you talk to.",
  },
  {
    title: "Phone or desktop",
    text: "Open it on the couch or on the way home. A good hello still counts.",
  },
] as const;

export const beijosquentesFaqs = [
  {
    question: "What is BeijosQuentes?",
    answer:
      "BeijosQuentes is an online dating site for adults who want a romantic connection. You create a profile, browse people, and message the ones you want to meet. TheDateCompass does not run BeijosQuentes.",
  },
  {
    question: "Who can join?",
    answer:
      "Adults 18 and over. It suits people looking for a date, a relationship, or a new romantic connection.",
  },
  {
    question: "How do you actually meet someone?",
    answer:
      "Make a profile, find someone you like, and start a conversation. If you both want to, arrange a meetup. The date only happens when you both say yes.",
  },
  {
    question: "Can I use BeijosQuentes on my phone?",
    answer:
      "Yes. BeijosQuentes works on a phone, tablet, or desktop, so you can browse and message wherever you are.",
  },
  {
    question: "What does BeijosQuentes cost?",
    answer:
      "You can create a profile and start browsing. Paid features may be offered on BeijosQuentes. Check the current terms and prices on the site before you sign up.",
  },
  {
    question: "Is this the official BeijosQuentes site?",
    answer:
      "No. This is an independent overview from TheDateCompass. The button takes you to BeijosQuentes. If you continue through the link, we may earn a commission at no extra cost to you.",
  },
] as const;
