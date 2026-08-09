import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Image from "next/image";
import USAOffers from "@/components/USA/USAOffers";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/usa`;
const OG_IMAGE =
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  title: "Best Adult Dating Sites in the USA 2026",
  description:
    "Compare the best adult dating sites in the USA for 2026. Browse casual dating, gay dating, mature dating, and AI companion platforms available to eligible US visitors.",
  keywords: [
    "adult dating sites USA",
    "casual dating sites USA",
    "gay dating sites USA",
    "mature dating USA",
    "AI companion USA",
    "dating site comparison USA",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Best Adult Dating Sites in the USA 2026",
    description:
      "Compare casual, gay dating, mature, and AI companion platforms available to eligible visitors in the United States.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Adult dating sites available in the USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Adult Dating Sites in the USA 2026",
    description:
      "Compare casual, gay dating, mature, and AI companion platforms available to eligible visitors in the United States.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const usaOffers = [
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
  },
  {
    name: "NaughtyCharm",
    category: "Adult dating",
    description:
      "An adult-focused dating option for people who know what they are looking for.",
    badge: "USA available",
    mark: "N",
    accent: "from-[#8C1D4D] via-[#C8326D] to-[#E83E9B]",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/10376/0?po=6456&aff_sub5=SF_006OG000004lmDN",
    tags: ["Adult", "Adults 18+", "USA"],
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
  },
  {
    name: "DirtyDating",
    category: "Casual dating",
    description:
      "A casual adult dating option for people interested in meeting new connections.",
    badge: "USA available",
    mark: "D",
    accent: "from-[#F15BAF] via-[#E83E9B] to-[#9B3CE8]",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/5421?aff_sub5=SF_006OG000004lmDN",
    tags: ["Casual", "USA"],
  },
  {
    name: "FetishPartner",
    category: "Adult social",
    description:
      "An adult-focused platform for exploring connections around specific interests.",
    badge: "USA available",
    mark: "F",
    accent: "from-[#6138A8] via-[#8C1D4D] to-[#E83E9B]",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/5055?aff_sub5=SF_006OG000004lmDN",
    tags: ["Adult social", "Adults 18+", "USA"],
  },
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
  },
  {
    name: "Smoke and Poke",
    category: "Adult social",
    description:
      "An adult social option for visitors interested in casual conversations and connections.",
    badge: "USA available",
    mark: "S",
    accent: "from-[#6138A8] via-[#E83E9B] to-[#C8326D]",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk9.com/358917/8228/0?po=6456&aff_sub5=SF_006OG000004lmDN",
    tags: ["Adult social", "Adults 18+", "USA"],
  },
  {
    name: "Dreamz.ai",
    category: "AI",
    featured: false,
    description:
      "Explore an AI companion experience designed for personalized conversations and virtual connections.",
    badge: "AI companion",
    mark: "D",
    accent: "from-[#E83E9B] via-[#A855F7] to-[#6366F1]",
    image: "/images/ai-model.webp",
    href: "https://t.vlmai-5.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN",
    tags: ["AI", "Virtual companion"],
  },
];

const intentionHashes: Record<string, string> = {
  Casual: "offers-casual",
  "Gay Dating": "offers-gay",
  AI: "offers-ai",
};

const intentions = [
  {
    number: "01",
    title: "Keep it casual",
    text: "Browse relaxed dating options for a fun, low-pressure connection.",
    filter: "Casual",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
  },
  {
    number: "02",
    title: "Find your community",
    text: "Discover gay dating platforms and connections.",
    filter: "Gay Dating",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    number: "03",
    title: "Explore AI connections",
    text: "Discover AI companion experiences and virtual connections.",
    filter: "AI",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
];

const safetyNotes = [
  "You must be 18 years or older.",
  "Read the provider’s terms and privacy policy.",
  "Never send money to a person you have not met.",
  "Choose public places for early in-person dates.",
];

const usaFaqs = [
  {
    question: "What are the best adult dating sites in the USA in 2026?",
    answer:
      "The strongest USA options on this page span casual dating (CheekyCrush, DirtyDating), gay dating (GayBloom, PridePair, Manfinder), mature dating (Grannyhunter), and AI companions (Dreamz.ai). The best fit depends on your intention, not a single ranking for every visitor.",
  },
  {
    question: "Are these dating platforms free to join?",
    answer:
      "Most platforms offer free registration with optional premium upgrades. You can usually create a profile and browse before committing to a paid plan. Pricing and features vary by provider.",
  },
  {
    question: "Does TheDateCompass operate these dating sites?",
    answer:
      "No. TheDateCompass is an independent comparison and discovery website. We do not operate the listed platforms or manage registrations, profiles, messages, payments, or customer support.",
  },
  {
    question: "Which USA dating sites are best for gay dating?",
    answer:
      "GayBloom, PridePair, and Manfinder are the gay dating options featured for eligible USA visitors. You can also compare our dedicated gay dating category for a deeper shortlist.",
  },
  {
    question: "Is online dating safe for adults in the USA?",
    answer:
      "Use platforms with privacy controls and verification tools, keep personal details private early on, never send money to someone you have not met, and choose public places for first meetings. Always follow each provider’s safety guidance.",
  },
];

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Best Adult Dating Sites in the USA 2026",
  description:
    "A comparison and discovery page for third-party adult dating, gay dating, mature dating, and AI companion platforms available in the United States.",
  url: PAGE_URL,
  isPartOf: {
    "@type": "WebSite",
    name: "TheDateCompass",
    url: SITE_URL,
  },
  audience: {
    "@type": "PeopleAudience",
    suggestedMinAge: 18,
  },
  about: [
    "Adult dating sites USA",
    "Casual dating",
    "Gay dating",
    "Mature dating",
    "AI companion",
  ],
  mainEntity: {
    "@type": "ItemList",
    itemListElement: usaOffers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: offer.name,
      url: PAGE_URL,
      description: offer.description,
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "USA Dating Sites",
      item: PAGE_URL,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: usaFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function UsaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Header />
      <main className="min-h-screen bg-[#080808] text-white antialiased selection:bg-[#E83E9B]/40 selection:text-white">
        {/* -------- HERO SECTION -------- */}
        <section className="relative isolate overflow-hidden bg-[#080808] px-6 pb-20 pt-6 sm:px-8 lg:px-12 lg:pb-28 lg:pt-8">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(232,62,155,0.30),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(245,139,197,0.14),transparent_30%),linear-gradient(145deg,#080808_0%,#181018_55%,#080808_100%)]" />
          <div className="absolute -left-32 top-24 -z-10 h-96 w-96 rounded-full bg-[#E83E9B]/20 blur-3xl" />
          <div className="absolute -right-28 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#F58BC5]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl pb-4 pt-16 text-center sm:pt-20 lg:pt-28">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#E83E9B]/30 bg-[#E83E9B]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#F8B6DA] backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#E83E9B]" />
              Adults-only dating discovery · 2026
            </div>

            <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Best adult dating sites
              <br />
              <span className="text-[#E83E9B]">in the USA.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              TheDateCompass is an independent adult dating site comparison
              resource for visitors in the United States. We review and present
              third-party platforms based on availability and category. We do
              not operate these platforms or manage registrations, profiles,
              messages, payments, or customer support.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#offers"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E83E9B] px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-xl shadow-[#E83E9B]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#F58BC5] hover:text-[#080808]"
              >
                Explore USA options
                <span className="text-lg transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white/85 transition duration-300 hover:-translate-y-1 hover:border-[#E83E9B]/60 hover:bg-[#E83E9B]/10"
              >
                How it works
              </a>
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-xs leading-5 text-white/35">
              18+ only. This site contains affiliate links. If you select an
              offer, you will be redirected to an independent third-party
              provider.
            </p>
          </div>
        </section>

        {/* -------- INTENTIONS SECTION -------- */}
        <section
          id="how-it-works"
          className="bg-[#f3eae4] px-6 py-20 text-[#21151d] sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a34b68]">
                  Start with your intention
                </p>
                <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  Every good connection starts with being clear about what you
                  want.
                </h2>
              </div>
              <p className="max-w-sm leading-relaxed text-[#5f4652]">
                Choose a direction, then compare the platforms that best align
                with it.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {intentions.map((intention) => (
                <a
                  key={intention.title}
                  href={`#${intentionHashes[intention.filter]}`}
                  className="group relative overflow-hidden rounded-3xl border border-[#ddd0c9] bg-white/70 shadow-xl shadow-black/5 transition hover:-translate-y-2 hover:border-rose-300 hover:shadow-rose-200/20 backdrop-blur-sm"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={intention.image}
                      alt={intention.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                    <span className="absolute left-5 top-5 text-sm font-bold tracking-[0.2em] text-white/90">
                      {intention.number}
                    </span>
                  </div>
                  <div className="p-8 pt-6">
                    <h3 className="font-serif text-3xl font-semibold tracking-tight">
                      {intention.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-[#5f4652]">
                      {intention.text}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rose-700/80 group-hover:text-rose-800">
                      Explore options{" "}
                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* -------- OFFERS SECTION -------- */}
        <USAOffers offers={usaOffers} />

        {/* -------- SEO EDITORIAL -------- */}
        <section
          id="usa-dating-guide"
          className="bg-[#f3eae4] px-6 py-20 text-[#21151d] sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a34b68]">
              USA dating guide
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              How to choose adult dating sites in the USA
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-[#5f4652]">
              <p>
                Finding the right adult dating site in the United States starts
                with intention. Some visitors want low-pressure{" "}
                <a
                  href="#offers-casual"
                  className="font-semibold text-[#a34b68] underline-offset-2 hover:underline"
                >
                  casual dating
                </a>
                , others prefer{" "}
                <Link
                  href="/top-offers/gay-dating"
                  className="font-semibold text-[#a34b68] underline-offset-2 hover:underline"
                >
                  gay dating platforms
                </Link>
                , mature connections, or an{" "}
                <Link
                  href="/category/ai-girlfriend"
                  className="font-semibold text-[#a34b68] underline-offset-2 hover:underline"
                >
                  AI companion experience
                </Link>
                . This page helps eligible 18+ visitors compare third-party
                options by category before leaving for a provider site.
              </p>
              <p>
                TheDateCompass does not operate these platforms. We present
                availability-focused shortlists so you can review category fit,
                safety expectations, and signup flow before you register. For
                broader adult and niche comparisons, explore our{" "}
                <Link
                  href="/top-offers/adult"
                  className="font-semibold text-[#a34b68] underline-offset-2 hover:underline"
                >
                  adult dating offers
                </Link>{" "}
                and{" "}
                <Link
                  href="/cozy-sites"
                  className="font-semibold text-[#a34b68] underline-offset-2 hover:underline"
                >
                  cozy companion sites
                </Link>
                .
              </p>
              <p>
                Before joining any service, read the provider’s terms and
                privacy policy, use platform safety tools, and keep early
                conversations on-platform. Availability, pricing, and features
                can change, so always confirm details on the destination site.
              </p>
            </div>
          </div>
        </section>

        {/* -------- FAQ -------- */}
        <section
          id="faq"
          className="relative px-6 py-20 sm:px-8 lg:px-12"
        >
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,#0f0a0e,#1f1220_60%,#12101a)]" />
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-300/80">
              FAQ
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Common questions about USA dating sites
            </h2>
            <div className="mt-10 space-y-4">
              {usaFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 open:border-[#E83E9B]/40"
                >
                  <summary className="cursor-pointer list-none font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-4">
                      {faq.question}
                      <span className="shrink-0 text-white/40 transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* -------- SAFETY SECTION -------- */}
        <section className="bg-[#efe4dc] px-6 py-20 text-[#21151d] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-2xl shadow-black/5 backdrop-blur-sm md:grid-cols-[0.85fr_1.15fr] md:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a34b68]">
                A gentle reminder
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight">
                The best kind of chemistry comes with good judgment.
              </h2>
              <p className="mt-5 leading-relaxed text-[#5f4652]">
                Keep your experience enjoyable by moving thoughtfully and
                staying in control of your information.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {safetyNotes.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-[#ddd0c9] bg-white/60 p-5 font-medium leading-relaxed shadow-sm backdrop-blur-sm"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-rose-200/70 text-sm font-bold text-rose-800">
                    {index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
