export interface DatingOffer {
  id: string;
  name: string;
  slug: string;
  /** Short, non-ranking label (category/audience focus). */
  badge: string;
  /** Audience focus line — not a ranking claim. */
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
    seoTitle: "Casual Dating Sites for Adults in 2026",
    seoDescription:
      "Compare casual dating platforms for adults. Review signup flow, messaging, and listed features before visiting a third-party provider.",
    seoIntro:
      "Casual dating platforms help adults meet new people without pressure. Compare signup speed, member activity, messaging tools, and privacy features across the listed services.",
    offers: [
      {
        id: "cheekycrush",
        name: "CheekyCrush",
        slug: "cheekycrush",
        badge: "Featured",
        bestFor: "Quick matches & flirty chats",
        description:
          "CheekyCrush is built for adults who want fast registration, active members, and private messaging without a complicated onboarding flow.",
        highlights: [
          "Quick registration",
          "Verified members",
          "Private messaging",
          "Mobile friendly",
        ],
        url: "https://t.datsk11.com/358917/10377/0?po=6456&aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=CheekyCrush",
        featured: true,
      },
      {
        id: "naughtycharm",
        name: "NaughtyCharm",
        slug: "naughtycharm",
        badge: "Casual dating",
        bestFor: "US casual encounters",
        description:
          "NaughtyCharm focuses on discreet, fun connections for US adults with a large member base and straightforward profile setup.",
        highlights: [
          "US members",
          "Casual dating",
          "Private messaging",
          "Discreet profiles",
        ],
        url: "https://t.datsk11.com/358917/10376/0?po=6456&aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=NaughtyCharm",
      },
      {
        id: "litlatinz",
        name: "LitLatinz",
        slug: "litlatinz",
        badge: "Latino community",
        bestFor: "Latino community dating",
        description:
          "LitLatinz connects users seeking flirty conversations and passionate encounters within the Latino community across the US and Canada.",
        highlights: [
          "Latino community",
          "Casual dating",
          "Active chat",
          "Mobile friendly",
        ],
        url: "https://t.datsk11.com/358917/7410?aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=LitLatinz",
      },
    ],
  },
  {
    id: "lgbtq",
    route: "gay-dating",
    label: "Gay Dating",
    seoTitle: "Gay Dating Sites & Apps in 2026",
    seoDescription:
      "Compare gay dating platforms with community-focused listings and messaging options for LGBTQ+ adults.",
    seoIntro:
      "Inclusive dating sites should offer clear communities, matching tools, and respectful profiles. Compare the gay dating listings below before visiting a third-party provider.",
    offers: [
      {
        id: "gaybloom",
        name: "GayBloom",
        slug: "gaybloom",
        badge: "Featured",
        bestFor: "Gay men seeking connections",
        description:
          "GayBloom is designed for men in the LGBTQ+ community who want to meet, chat, and explore new connections in a focused environment.",
        highlights: [
          "LGBTQ+ community",
          "Verified profiles",
          "Private messaging",
          "Mobile friendly",
        ],
        url: "https://t.datsk11.com/358917/10378/0?po=6456&aff_sub5=SF_006OG000004lmDN",
        logo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
        featured: true,
      },
      {
        id: "pridepair",
        name: "PridePair",
        slug: "pridepair",
        badge: "Inclusive",
        bestFor: "Broad LGBTQ+ matching",
        description:
          "PridePair helps LGBTQ+ singles match, chat, and connect with like-minded people through an inclusive, easy-to-use interface.",
        highlights: [
          "Inclusive matching",
          "Smart filters",
          "Private messaging",
          "Safe community",
        ],
        url: "https://t.datsk11.com/358917/10379/0?po=6456&aff_sub5=SF_006OG000004lmDN",
        logo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "manfinder",
        name: "Manfinder",
        slug: "manfinder",
        badge: "Men seeking men",
        bestFor: "Gay dating for men",
        description:
          "Manfinder is a dating and social platform for men looking to meet and connect with other men — chat, browse, and start conversations fast.",
        highlights: [
          "Men seeking men",
          "Dating + social",
          "Quick signup",
          "Private messaging",
        ],
        url: "https://t.datsk9.com/358917/6488?aff_sub5=SF_006OG000004lmDN",
        logo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      },
      {
        id: "transdate",
        name: "TransDate",
        slug: "transdate",
        badge: "Inclusive",
        bestFor: "Transgender dating",
        description:
          "TransDate is an inclusive platform built for transgender dating and meaningful connections with respectful community standards.",
        highlights: [
          "Trans-inclusive",
          "Profile verification",
          "Secure messaging",
          "Supportive community",
        ],
        url: "https://t.datsk9.com/358917/6497?aff_sub5=SF_006OG000004lmDN",
        logo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    id: "mature",
    route: "mature",
    label: "Mature Dating",
    seoTitle: "Mature Dating Sites for Adults Over 40",
    seoDescription:
      "Compare mature dating platforms for experienced singles who prefer conversation-focused listings.",
    seoIntro:
      "Mature dating platforms cater to experienced singles who value conversation quality over swipe volume. Compare profile focus, messaging, and privacy options on the listings below.",
    offers: [
      {
        id: "milffinder",
        name: "MilfFinder",
        slug: "milffinder",
        badge: "Featured",
        bestFor: "Mature singles & conversations",
        description:
          "MilfFinder helps adults discover mature singles looking for genuine conversations, chemistry, and low-pressure dating experiences.",
        highlights: [
          "Mature audience",
          "Verified profiles",
          "Secure messaging",
          "Easy signup",
        ],
        url: "https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=MilfFinder",
        featured: true,
      },
      {
        id: "realsexclub",
        name: "RealSexClub",
        slug: "realsexclub",
        badge: "Adult community",
        bestFor: "Active adult community",
        description:
          "RealSexClub offers a large member base for adults seeking exciting new connections with robust messaging and profile tools.",
        highlights: [
          "Large community",
          "Active members",
          "Messaging tools",
          "Mobile access",
        ],
        url: "https://t.crdtg2.com/358917/7964?aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=RealSexClub",
      },
    ],
  },
  {
    id: "adult",
    route: "adult",
    label: "Adult Dating",
    seoTitle: "Adult Dating Platforms Comparison 2026",
    seoDescription:
      "Compare adult dating services by category focus, niche targeting, and signup experience.",
    seoIntro:
      "Adult dating services vary widely in member focus, niche targeting, and signup flows. Compare the listed options below before visiting a third-party provider.",
    offers: [
      {
        id: "dirtydating",
        name: "DirtyDating",
        slug: "dirtydating",
        badge: "Featured",
        bestFor: "Adult casual connections",
        description:
          "DirtyDating connects like-minded adults interested in casual connections with quick signup and straightforward profile browsing.",
        highlights: [
          "Quick signup",
          "Adult profiles",
          "Private chat",
          "Responsive design",
        ],
        url: "https://t.crdtg2.com/358917/5421?aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=DirtyDating",
        featured: true,
      },
      {
        id: "fuckfinder",
        name: "FuckFinder",
        slug: "fuckfinder",
        badge: "Casual adult",
        bestFor: "Casual adult encounters",
        description:
          "FuckFinder targets adults seeking casual encounters and intimate connections with strong engagement and niche audience targeting.",
        highlights: [
          "Niche targeting",
          "Active messaging",
          "Fast registration",
          "Mobile friendly",
        ],
        url: "https://t.crdtg2.com/358917/7346?aff_sub5=SF_006OG000004lmDN",
        logo: "https://api.dicebear.com/9.x/shapes/svg?seed=FuckFinder",
      },
      {
        id: "fetishpartner",
        name: "FetishPartner",
        slug: "fetishpartner",
        badge: "Alternative dating",
        bestFor: "Alternative & fetish dating",
        description:
          "FetishPartner serves adults interested in alternative dating with strong niche targeting and an engaged community.",
        highlights: [
          "Niche community",
          "Profile filters",
          "Private messaging",
          "Verified members",
        ],
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
    question: "How should I choose a casual dating site?",
    answer:
      "Start with the category that matches your intention, then compare signup flow, messaging options, and privacy settings on each listing. Confirm current details on the destination site before you register.",
  },
  {
    question: "Are these dating platforms free to join?",
    answer:
      "Signup rules and pricing are set by each third-party platform and can change. Check the destination site for current free or paid features before creating an account.",
  },
  {
    question: "How are dating offers listed on this page?",
    answer:
      "Listings are grouped by category so you can compare options side by side. TheDateCompass is an independent comparison site and does not operate the third-party platforms.",
  },
  {
    question: "Is online dating safe for adults?",
    answer:
      "Use platform privacy and reporting tools, keep early conversations on-platform, and avoid sharing sensitive personal or financial details with people you have not met. Adults 18+ only.",
  },
  {
    question: "Which listings focus on LGBTQ+ dating?",
    answer:
      "Gay dating listings such as GayBloom and PridePair are grouped for visitors comparing LGBTQ+ community-focused options. Compare their categories and descriptions before visiting a provider site.",
  },
];
