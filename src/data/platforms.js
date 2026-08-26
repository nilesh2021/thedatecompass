const platforms = [
 {
  id: 1,
  slug: "cheekycrush",
  name: "CheekyCrush",

  featured: true,
  editorChoice: true,

  badge: "Editor's Choice",

  rating: 4.9,
  reviews: 245,

  bestFor: "Casual Dating",

  category: "Casual Dating",

  country: ["US"],

  logo: "https://api.dicebear.com/9.x/shapes/svg?seed=CheekyCrush",

  description:
    "Casual dating platform designed for adults looking to meet new people, start conversations ",

  features: [
    "Quick Registration",
    "Verified Members",
    "Private Messaging",
    "Mobile Friendly",
  ],

  affiliateLink:
    "https://t.datsk11.com/358917/10377/0?po=6456&aff_sub5=SF_006OG000004lmDN",
},

 {
  id: 2,
  slug: "gaybloom",
  name: "GayBloom",

  featured: true,

  badge: "Top Rated",

  rating: 4.8,
  reviews: 182,

  bestFor: "LGBTQ+ Dating",

  category: "LGBTQ+ Dating",

  country: ["US"],

  logo: "https://api.dicebear.com/9.x/shapes/svg?seed=GayBloom",

  description:
    "GayBloom is a dating platform designed for men in the LGBTQ+ community who want to meet, chat, and explore new connections online.",

  features: [
    "LGBTQ+ Community",
    "Private Messaging",
    "Verified Profiles",
    "Mobile Friendly",
  ],

  affiliateLink:
    "https://t.aslr1.com/358917/10378/0?po=6456&aff_sub5=SF_006OG000004lmDN",
},

  {
  id: 3,
  slug: "litlatinz",
  name: "LitLatinz",

  featured: true,

  badge: "Popular",

  rating: 4.7,
  reviews: 161,

  bestFor: "Latino Casual Dating",

  category: "Casual Dating",

  country: ["US", "CA"],

  logo: "https://api.dicebear.com/9.x/shapes/svg?seed=LitLatinz",

  description:
    "LitLatinz is a casual dating platform designed for users seeking flirty conversations and passionate encounters within the Latino community.",

  features: [
    "Latino Community",
    "Casual Dating",
    "Private Messaging",
    "Mobile Friendly",
  ],

  affiliateLink:
    "https://t.datsk11.com/358917/7410?aff_sub5=SF_006OG000004lmDN",
},

  {
  id: 4,
  slug: "naughtycharm",
  name: "NaughtyCharm",

  featured: true,

  badge: "Trending",

  rating: 4.7,
  reviews: 195,

  bestFor: "US Casual Dating",

  category: "Casual Dating",

  country: ["US"],

  logo: "https://api.dicebear.com/9.x/shapes/svg?seed=NaughtyCharm",

  description:
    "NaughtyCharm.com is a US casual dating platform where adults can connect, chat, and explore exciting online encounters in a fun and discreet environment.",

  features: [
    "US Members",
    "Casual Dating",
    "Private Messaging",
    "Mobile Friendly",
  ],

  affiliateLink:
    "https://t.datsk11.com/358917/10376/0?po=6456&aff_sub5=SF_006OG000004lmDN",
},
  {
  id: 5,
  slug: "pridepair",
  name: "PridePair",

  featured: true,

  badge: "Inclusive",

  rating: 4.8,
  reviews: 170,

  bestFor: "LGBTQ+ Dating",

  category: "LGBTQ+ Dating",

  country: ["US"],

  logo: "https://api.dicebear.com/9.x/shapes/svg?seed=PridePair",

  description:
    "PridePair is an inclusive LGBTQ+ dating platform where users can match, chat, and connect with like-minded people.",

  features: [
    "LGBTQ+ Community",
    "Smart Matching",
    "Private Messaging",
    "Mobile Friendly",
  ],

  affiliateLink:
    "https://t.datsk11.com/358917/10379/0?po=6456&aff_sub5=SF_006OG000004lmDN",
},

  {
    id: 6,
    slug: "dirtydating",
    name: "DirtyDating",
    featured: false,
    badge: "New",
    rating: 4.6,
    reviews: 150,
    bestFor: "Adult Dating",
    category: "Adult Dating",
    country: ["US"],
    logo: "https://api.dicebear.com/9.x/shapes/svg?seed=DirtyDating",
    description:
      "Find like-minded adults interested in casual connections.",
    features: [
      "Quick Signup",
      "Chat",
      "Verified Members",
      "Responsive",
    ],
    affiliateLink: "#",
  },

  {
    id: 7,
    slug: "realsexclub",
    name: "RealSexClub",
    featured: false,
    badge: "Popular",
    rating: 4.7,
    reviews: 220,
    bestFor: "Adult Community",
    category: "Adult Dating",
    country: ["US"],
    logo: "https://api.dicebear.com/9.x/shapes/svg?seed=RealSexClub",
    description:
      "Large community for adults seeking exciting new connections.",
    features: [
      "Large Community",
      "Messaging",
      "Profiles",
      "Responsive",
    ],
    affiliateLink: "#",
  },

  {
    id: 8,
    slug: "milffinder",
    name: "MilfFinder",
    featured: false,
    badge: "Hot",
    rating: 4.5,
    reviews: 132,
    bestFor: "Mature Dating",
    category: "Mature Dating",
    country: ["US"],
    logo: "https://api.dicebear.com/9.x/shapes/svg?seed=MilfFinder",
    description:
      "Discover mature singles looking for genuine conversations.",
    features: [
      "Verified",
      "Messaging",
      "Profiles",
      "Secure",
    ],
    affiliateLink: "#",
  },

  {
    id: 9,
    slug: "transdate",
    name: "TransDate",
    featured: false,
    badge: "Inclusive",
    rating: 4.8,
    reviews: 165,
    bestFor: "Trans Dating",
    category: "LGBTQ",
    country: ["US", "CA"],
    logo: "https://api.dicebear.com/9.x/shapes/svg?seed=TransDate",
    description:
      "Inclusive platform built for transgender dating and connections.",
    features: [
      "Inclusive",
      "Profiles",
      "Messaging",
      "Safe Community",
    ],
    affiliateLink: "#",
  },

  {
    id: 10,
    slug: "sexyfans",
    name: "SexyFans",
    featured: false,
    badge: "Trending",
    rating: 4.7,
    reviews: 144,
    bestFor: "Premium Content",
    category: "Adult Content",
    country: ["US", "CA"],
    logo: "https://api.dicebear.com/9.x/shapes/svg?seed=SexyFans",
    description:
      "Explore premium creator content and exclusive interactions.",
    features: [
      "Premium Content",
      "Private Chat",
      "Verified",
      "Mobile Friendly",
    ],
    affiliateLink: "#",
  },
];

module.exports = platforms;