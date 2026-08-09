export interface DatingOffer {
  id: string;
  name: string;
  slug: string;
  rating: number;
  reviews: number;
  badge: string;
  bestFor: string;
  description: string;
  highlights: string[];
  url: string;
  logo: string;
  featured?: boolean;
}

export interface OfferTab {
  id: string;
  route: string;
  label: string;
  seoTitle: string;
  seoDescription: string;
  seoIntro: string;
  offers: DatingOffer[];
}

export const datingOfferTabs: OfferTab[] = [
  {
    id: "casual",
    route: "casual",
    label: "Casual Dating",
    seoTitle: "Best Casual Dating Sites for Adults in 2026",
    seoDescription:
      "Compare the best casual dating platforms for adults. Fast signup, verified members, and private messaging.",
    seoIntro:
      "Casual dating platforms help adults meet new people without pressure. We compared signup speed, member activity, messaging tools, and privacy features across the most visited services.",
    offers: [
      {
        id: "cheekycrush",
        name: "CheekyCrush",
        slug: "cheekycrush",
        rating: 4.9,
        reviews: 245,
        badge: "Editor's Choice",
        bestFor: "Quick matches & flirty chats",
        description:
          "CheekyCrush is built for adults who want fast registration, active members, and private messaging without a complicated onboarding flow.",
        highlights: ["Quick registration", "Verified members", "Private messaging", "Mobile friendly"],
        url: "https://t.datsk11.com/358917/10377/0?po=6456&aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=CheekyCrush",
        featured: true,
      },
      {
        id: "naughtycharm",
        name: "NaughtyCharm",
        slug: "naughtycharm",
        rating: 4.7,
        reviews: 195,
        badge: "Trending",
        bestFor: "US casual encounters",
        description:
          "NaughtyCharm focuses on discreet, fun connections for US adults with a large member base and straightforward profile setup.",
        highlights: ["US members", "Casual dating", "Private messaging", "Discreet profiles"],
        url: "https://t.datsk11.com/358917/10376/0?po=6456&aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=NaughtyCharm",
      },
      {
        id: "litlatinz",
        name: "LitLatinz",
        slug: "litlatinz",
        rating: 4.7,
        reviews: 161,
        badge: "Popular",
        bestFor: "Latino community dating",
        description:
          "LitLatinz connects users seeking flirty conversations and passionate encounters within the Latino community across the US and Canada.",
        highlights: ["Latino community", "Casual dating", "Active chat", "Mobile friendly"],
        url: "https://t.datsk11.com/358917/7410?aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=LitLatinz",
      },
    ],
  },
  {
    id: "lgbtq",
    route: "gay-dating",
    label: "Gay Dating",
    seoTitle: "Best Gay Dating Sites & Apps in 2026",
    seoDescription:
      "Discover top-rated gay dating platforms with verified profiles, inclusive communities, and smart matching for men seeking real connections.",
    seoIntro:
      "Inclusive dating sites should offer safe communities, smart matching, and respectful profiles. These platforms rank highest for engagement among LGBTQ+ singles in 2026.",
    offers: [
      {
        id: "gaybloom",
        name: "GayBloom",
        slug: "gaybloom",
        rating: 4.8,
        reviews: 182,
        badge: "Top Rated",
        bestFor: "Gay men seeking connections",
        description:
          "GayBloom is designed for men in the LGBTQ+ community who want to meet, chat, and explore new connections in a focused environment.",
        highlights: ["LGBTQ+ community", "Verified profiles", "Private messaging", "Mobile friendly"],
        url: "https://t.datsk11.com/358917/10378/0?po=6456&aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=GayBloom",
        featured: true,
      },
      {
        id: "pridepair",
        name: "PridePair",
        slug: "pridepair",
        rating: 4.8,
        reviews: 170,
        badge: "Inclusive",
        bestFor: "Broad LGBTQ+ matching",
        description:
          "PridePair helps LGBTQ+ singles match, chat, and connect with like-minded people through an inclusive, easy-to-use interface.",
        highlights: ["Inclusive matching", "Smart filters", "Private messaging", "Safe community"],
        url: "https://t.datsk11.com/358917/10379/0?po=6456&aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=PridePair",
      },
      {
        id: "transdate",
        name: "TransDate",
        slug: "transdate",
        rating: 4.8,
        reviews: 165,
        badge: "Inclusive",
        bestFor: "Transgender dating",
        description:
          "TransDate is an inclusive platform built for transgender dating and meaningful connections with respectful community standards.",
        highlights: ["Trans-inclusive", "Profile verification", "Secure messaging", "Supportive community"],
        url: "https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=TransDate",
      },
    ],
  },
  {
    id: "mature",
    route: "mature",
    label: "Mature Dating",
    seoTitle: "Best Mature Dating Sites for Adults Over 40",
    seoDescription:
      "Find mature dating platforms for experienced singles who value conversation quality over swipe volume.",
    seoIntro:
      "Mature dating platforms cater to experienced singles who value conversation quality over swipe volume. We evaluated profile depth, response rates, and privacy controls.",
    offers: [
      {
        id: "milffinder",
        name: "MilfFinder",
        slug: "milffinder",
        rating: 4.5,
        reviews: 132,
        badge: "Recommended",
        bestFor: "Mature singles & conversations",
        description:
          "MilfFinder helps adults discover mature singles looking for genuine conversations, chemistry, and low-pressure dating experiences.",
        highlights: ["Mature audience", "Verified profiles", "Secure messaging", "Easy signup"],
        url: "https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=MilfFinder",
        featured: true,
      },
      {
        id: "realsexclub",
        name: "RealSexClub",
        slug: "realsexclub",
        rating: 4.7,
        reviews: 220,
        badge: "Large community",
        bestFor: "Active adult community",
        description:
          "RealSexClub offers a large member base for adults seeking exciting new connections with robust messaging and profile tools.",
        highlights: ["Large community", "Active members", "Messaging tools", "Mobile access"],
        url: "https://t.crdtg2.com/358917/7964?aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=RealSexClub",
      },
    ],
  },
  {
    id: "adult",
    route: "adult",
    label: "Adult Dating",
    seoTitle: "Adult Dating Platforms — Expert Comparison 2026",
    seoDescription:
      "Compare adult dating services by member quality, niche targeting, and signup experience for US and international users.",
    seoIntro:
      "Adult dating services vary widely in member quality, niche targeting, and conversion-friendly signup flows. These picks perform consistently for US and international traffic.",
    offers: [
      {
        id: "dirtydating",
        name: "DirtyDating",
        slug: "dirtydating",
        rating: 4.6,
        reviews: 150,
        badge: "New",
        bestFor: "Adult casual connections",
        description:
          "DirtyDating connects like-minded adults interested in casual connections with quick signup and straightforward profile browsing.",
        highlights: ["Quick signup", "Adult profiles", "Private chat", "Responsive design"],
        url: "https://t.crdtg2.com/358917/5421?aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=DirtyDating",
        featured: true,
      },
      {
        id: "fuckfinder",
        name: "FuckFinder",
        slug: "fuckfinder",
        rating: 4.7,
        reviews: 188,
        badge: "High engagement",
        bestFor: "Casual adult encounters",
        description:
          "FuckFinder targets adults seeking casual encounters and intimate connections with strong engagement and niche audience targeting.",
        highlights: ["Niche targeting", "High engagement", "Fast registration", "Mobile friendly"],
        url: "https://t.crdtg2.com/358917/7346?aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=FuckFinder",
      },
      {
        id: "fetishpartner",
        name: "FetishPartner",
        slug: "fetishpartner",
        rating: 4.6,
        reviews: 142,
        badge: "Niche pick",
        bestFor: "Alternative & fetish dating",
        description:
          "FetishPartner serves adults interested in alternative dating with strong niche targeting and an engaged community.",
        highlights: ["Niche community", "Profile filters", "Private messaging", "Verified members"],
        url: "https://t.crdtg2.com/358917/5055?aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=FetishPartner",
      },
    ],
  },
];

export const offerTabRoutes = datingOfferTabs.map((tab) => tab.route);

export function getOfferTabByRoute(route: string): OfferTab | undefined {
  return datingOfferTabs.find((tab) => tab.route === route);
}

export const seoFaqs = [
  {
    question: "What is the best casual dating site in 2026?",
    answer:
      "CheekyCrush ranks highest in our comparison for quick registration, verified members, and active messaging. It suits adults who want low-friction signup and immediate access to profiles.",
  },
  {
    question: "Are these dating platforms free to join?",
    answer:
      "Most platforms offer free registration with optional premium upgrades. You can create a profile, browse members, and explore features before committing to a paid plan.",
  },
  {
    question: "How do we rank dating offers on this page?",
    answer:
      "We evaluate user experience, signup speed, member activity, privacy controls, mobile performance, and overall value. Rankings are updated regularly to reflect current platform quality.",
  },
  {
    question: "Is online dating safe for adults?",
    answer:
      "Reputable platforms use profile verification, secure messaging, and privacy settings. Always use platform tools to report suspicious accounts and avoid sharing personal details too early.",
  },
  {
    question: "Which dating site is best for LGBTQ+ singles?",
    answer:
      "GayBloom and PridePair lead our LGBTQ+ category for community focus, inclusive matching, and engagement among gay, lesbian, and queer users.",
  },
];
