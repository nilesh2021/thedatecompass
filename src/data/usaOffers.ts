export type UsaOffer = {
  name: string;
  category: string;
  featured?: boolean;
  description: string;
  badge: string;
  mark: string;
  accent: string;
  image: string;
  href: string;
  tags: string[];
  rating?: number;
  country?: string;
};

/**
 * USA inventory ordered by Offer Master priority.
 * SexyFans / WannaHookup omitted — no real affiliate URL exists in project data.
 */
export const usaOffers: UsaOffer[] = [
  {
    name: "Grannyhunter",
    category: "Mature dating",
    description:
      "An adult dating option focused on mature connections and age-specific preferences.",
    badge: "USA available",
    mark: "G",
    accent: "from-[#A34B68] via-[#E83E9B] to-[#F58BC5]",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/7570?aff_sub5=SF_006OG000004lmDN",
    tags: ["Mature", "Adults 18+", "USA"],
    rating: 4.5,
    country: "USA",
  },
  {
    name: "LitLatinz",
    category: "Adult dating",
    featured: true,
    description:
      "An adult dating option focused on Latino community connections in the United States.",
    badge: "USA available",
    mark: "L",
    accent: "from-[#6138A8] via-[#9C5CDB] to-[#E83E9B]",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/7410?aff_sub5=SF_006OG000004lmDN",
    tags: ["Adult", "Adults 18+", "USA"],
    rating: 4.7,
    country: "USA",
  },
  {
    name: "Manfinder",
    category: "Gay Dating",
    featured: false,
    description:
      "A dating and social platform for men looking to meet and connect with other men.",
    badge: "Gay dating",
    mark: "M",
    accent: "from-[#E83E9B] via-[#C026D3] to-[#6366F1]",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/6488?aff_sub5=SF_006OG000004lmDN",
    tags: ["Gay dating", "USA"],
    rating: 4.6,
    country: "USA",
  },
  {
    name: "RealSexClub",
    category: "Adult dating",
    description:
      "An adult social and dating option for people looking for direct connections.",
    badge: "USA available",
    mark: "R",
    accent: "from-[#E83E9B] via-[#C8326D] to-[#8C1D4D]",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/7964?aff_sub5=SF_006OG000004lmDN",
    tags: ["Adult", "Adults 18+", "USA"],
    rating: 4.6,
    country: "USA",
  },
  {
    name: "TransDate",
    category: "Trans dating",
    description:
      "A dating option for people interested in transgender and inclusive connections.",
    badge: "USA available",
    mark: "T",
    accent: "from-[#9B3CE8] via-[#E83E9B] to-[#F58BC5]",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/6497?aff_sub5=SF_006OG000004lmDN",
    tags: ["Trans", "Adults 18+", "USA"],
    rating: 4.6,
    country: "USA",
  },
  {
    name: "MilfFinder",
    category: "Mature dating",
    description:
      "An adult dating option for mature singles interested in genuine conversations and chemistry.",
    badge: "USA available",
    mark: "M",
    accent: "from-[#A34B68] via-[#E83E9B] to-[#F58BC5]",
    image:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/4999?aff_sub5=SF_006OG000004lmDN",
    tags: ["Mature", "Adults 18+", "USA"],
    rating: 4.5,
    country: "USA",
  },
  {
    name: "CheekyCrush",
    category: "Casual dating",
    featured: true,
    description:
      "A casual adult dating option for people looking to explore new connections.",
    badge: "USA available",
    mark: "C",
    accent: "from-[#E83E9B] via-[#F15BAF] to-[#F58BC5]",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/10377/0?po=6456&aff_sub5=SF_006OG000004lmDN",
    tags: ["Casual", "USA"],
    rating: 4.9,
    country: "USA",
  },
  {
    name: "GayBloom",
    category: "Gay Dating",
    featured: true,
    description:
      "An inclusive adult dating option for gay singles and communities in the USA.",
    badge: "USA available",
    mark: "G",
    accent: "from-[#9B3CE8] via-[#D45CF1] to-[#F58BC5]",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/10378/0?po=6456&aff_sub5=SF_006OG000004lmDN",
    tags: ["Gay Dating", "Adults 18+", "USA"],
    rating: 4.8,
    country: "USA",
  },



  {
    name: "Manfinder",
    category: "Gay Dating",
    featured: true,
    description:
      "ManFinder is a well-established gay dating brand focused on connecting men seeking casual encounters and real connections. .",
    badge: "USA available",
    mark: "G",
    accent: "from-[#9B3CE8] via-[#D45CF1] to-[#F58BC5]",
    image:
      "https://images.unsplash.com/photo-1579650382425-256093056bca?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "https://t.datsk9.com/358917/6488?aff_sub5=SF_006OG000004lmDN",
    tags: ["Gay dating", "USA"],
    rating: 4.8,
    country: "USA",
  },
  {     
    name: "PridePair",
    category: "Gay Dating",
    featured: false,
    description:
      "An inclusive gay dating platform where users can match, chat, and connect with like-minded people.",
    badge: "USA available",
    mark: "P",
    accent: "from-[#E83E9B] via-[#C026D3] to-[#6366F1]",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/10379/0?po=6456&aff_sub5=SF_006OG000004lmDN",
    tags: ["Gay Dating", "USA"],
    rating: 4.8,
    country: "USA",
  },
];

export const featuredUsaOffers = usaOffers.filter((offer) => offer.featured);

export const usaCategories = [
  {
    title: "Casual Dating",
    slug: "casual",
    hash: "offers-casual",
    description:
      "Low-pressure dating offers for USA users looking for fun, relaxed connections.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/10377/0?po=6456&aff_sub5=SF_006OG000004lmDN",
    offerName: "CheekyCrush",
    color: "from-pink-500 to-rose-400",
  },
  {
    title: "Gay Dating",
    slug: "gay-dating",
    hash: "offers-gay",
    description:
      "Gay dating offers for USA users seeking inclusive communities and real connections.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/10378/0?po=6456&aff_sub5=SF_006OG000004lmDN",
    offerName: "GayBloom",
    color: "from-violet-500 to-pink-500",
  },
  {
    title: "Mature Dating",
    slug: "mature",
    hash: "offers-mature",
    description:
      "Mature dating offers for experienced USA adults who want meaningful conversations.",
    image:
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/7570?aff_sub5=SF_006OG000004lmDN",
    offerName: "Grannyhunter",
    color: "from-amber-400 to-orange-400",
  },
  {
    title: "Adult Dating",
    slug: "adult",
    hash: "offers-adult",
    description:
      "Adult dating offers for USA users who want direct, open-minded connections.",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/7410?aff_sub5=SF_006OG000004lmDN",
    offerName: "LitLatinz",
    color: "from-rose-600 to-pink-500",
  },
  {
    title: "Trans Dating",
    slug: "trans",
    hash: "offers-trans",
    description:
      "Trans dating offers for USA users seeking inclusive communities and connections.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/6497?aff_sub5=SF_006OG000004lmDN",
    offerName: "TransDate",
    color: "from-teal-500 to-cyan-400",
  },
] as const;
