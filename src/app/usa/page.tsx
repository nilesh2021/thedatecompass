import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Image from "next/image";
import CountryFaqSection from "@/components/country/common/CountryFaqSection";
import USAOffers from "@/components/country/usa/USAOffers";
import { usaOffers } from "@/data/usaOffers";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/usa`;
const OG_IMAGE =
  "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80";

export const metadata: Metadata = {
  title: "Adult Dating Sites in the USA 2026 | Compare Offers",
  description:
    "Compare adult dating sites in the USA for 2026. Browse casual dating, gay dating, mature dating, and AI companion platforms listed for eligible US visitors.",
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
    title: "Adult Dating Sites in the USA 2026 | Compare Offers",
    description:
      "Compare casual, gay dating, mature, and AI companion platforms listed for eligible visitors in the United States.",
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
    title: "Adult Dating Sites in the USA 2026 | Compare Offers",
    description:
      "Compare casual, gay dating, mature, and AI companion platforms listed for eligible visitors in the United States.",
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
    question: "What dating offers are listed for USA users on this page?",
    answer:
      "This page lists third-party casual dating, gay dating, mature dating, adult dating, and AI companion offers for eligible visitors in the United States. Examples on this page include CheekyCrush, GayBloom, LitLatinz, and Dreamz.ai, depending on the category you want to compare.",
  },
  {
    question: "Which casual dating offers are listed for USA users?",
    answer:
      "CheekyCrush and DirtyDating are the casual dating offers listed for USA users on this page. Compare their categories and descriptions here before visiting a third-party provider.",
  },
  {
    question: "Are there gay dating offers for USA users?",
    answer:
      "Yes. GayBloom, PridePair, and Manfinder are gay dating offers listed for USA users and eligible LGBTQ+ visitors in the United States. Compare them here, or browse our dedicated gay dating category for more options.",
  },
  {
    question: "Where can I find signup and pricing details for these offers?",
    answer:
      "Signup requirements, pricing, and any free or paid features are set by each third-party platform. Check the destination site for current terms before you register.",
  },
  {
    question: "Can USA users compare AI companion offers here too?",
    answer:
      "Yes. Dreamz.ai is listed as an AI companion offer on this USA page for visitors who want virtual conversations instead of traditional dating. You can also explore more AI girlfriend offers in our AI companion category.",
  },
  {
    question: "How should USA users choose the right dating offer?",
    answer:
      "Start with intention: casual dating, gay dating, mature dating, adult dating, or AI companion. Then compare the offers listed on this page by category and description. TheDateCompass only lists third-party dating offers and does not operate the platforms.",
  },
];

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Adult Dating Sites in the USA 2026",
  description:
    "A comparison and discovery page for third-party adult dating, gay dating, mature dating, and AI companion platforms listed for visitors in the United States.",
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
      <main className="min-h-screen bg-ink text-white antialiased selection:bg-brand-rose/40 selection:text-white">
        {/* -------- HERO SECTION -------- */}
        <section className="relative isolate overflow-hidden bg-ink px-6 pb-20 pt-6 sm:px-8 lg:px-12 lg:pb-28 lg:pt-8">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(255,61,110,0.28),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(255,107,143,0.12),transparent_30%),linear-gradient(145deg,#0a0b0d_0%,#16181c_55%,#0a0b0d_100%)]" />
          <div className="absolute -left-32 top-24 -z-10 h-96 w-96 rounded-full bg-brand-rose/20 blur-3xl" />
          <div className="absolute -right-28 bottom-0 -z-10 h-96 w-96 rounded-full bg-brand-rose-soft/10 blur-3xl" />

          <div className="mx-auto max-w-7xl pb-4 pt-16 text-center sm:pt-20 lg:pt-28">
            <div className="inline-flex items-center gap-3 border border-brand-rose/30 bg-brand-rose/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-rose-soft backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-rose" />
              Adults-only dating discovery · 2026
            </div>

            <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Adult dating sites
              <br />
              <span className="text-brand-rose">in the USA.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              TheDateCompass is an independent adult dating site comparison
              resource for visitors in the United States. We present third-party
              platforms by availability and category. We do not operate these
              platforms or manage registrations, profiles, messages, payments, or
              customer support.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#offers"
                className="tdc-btn-primary group !rounded-none shadow-xl shadow-brand-rose/30"
              >
                Explore USA options
                <span className="text-lg transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#how-it-works"
                className="tdc-btn-line !rounded-none"
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

        {/* -------- OFFERS SECTION -------- */}
        <USAOffers offers={usaOffers} />

        {/* -------- INTENTIONS SECTION (kept below offers for shorter ad path) -------- */}
        <section
          id="how-it-works"
          className="tdc-section-stone px-6 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="tdc-eyebrow">
                  Start with your intention
                </p>
                <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight   sm:text-5xl">
                  Every good connection starts with being clear about what you
                  want.
                </h2>
              </div>
              <p className="max-w-sm leading-relaxed text-ink/70">
                Choose a direction, then compare the platforms that align with
                it.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {intentions.map((intention) => (
                <a
                  key={intention.title}
                  href={`#${intentionHashes[intention.filter]}`}
                  className="group relative overflow-hidden border border-ink/10 bg-cream/80 shadow-xl shadow-black/5 transition hover:-translate-y-2 hover:border-brand-rose/40 backdrop-blur-sm"
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
                  <div className="p-4 pt-4">
                    <h3 className="font-serif text-3xl font-semibold  ">
                      {intention.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-ink/70">
                      {intention.text}
                    </p>
                  {/*   <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rose-700/80 group-hover:text-rose-800">
                      Explore options{" "}
                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </span> */}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* -------- SEO EDITORIAL -------- */}
        <section
          id="usa-dating-guide"
          className="tdc-section-stone px-6 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-3xl">
            <p className="tdc-eyebrow">
              USA dating guide
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight   sm:text-5xl">
              How to choose adult dating sites in the USA
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/70">
              <p>
                Finding the right adult dating site in the United States starts
                with intention. Some visitors want low-pressure{" "}
                <a
                  href="#offers-casual"
                  className="font-semibold text-brand-rose underline-offset-2 hover:underline"
                >
                  casual dating
                </a>
                , others prefer{" "}
                <Link
                  href="/gay-dating"
                  className="font-semibold text-brand-rose underline-offset-2 hover:underline"
                >
                  gay dating platforms
                </Link>
                , mature connections, or an{" "}
                <Link
                  href="/category/ai-girlfriend"
                  className="font-semibold text-brand-rose underline-offset-2 hover:underline"
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
                  className="font-semibold text-brand-rose underline-offset-2 hover:underline"
                >
                  adult dating offers
                </Link>{" "}
                and{" "}
                <Link
                  href="/cozy-sites"
                  className="font-semibold text-brand-rose underline-offset-2 hover:underline"
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
        <CountryFaqSection
          variant="usa"
          eyebrow="FAQ · USA offers"
          title="Dating offers for USA users — common questions"
          items={usaFaqs}
        />

        {/* -------- SAFETY SECTION -------- */}
        <section className="bg-stone px-6 py-20 text-ink sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-2xl shadow-black/5 backdrop-blur-sm md:grid-cols-[0.85fr_1.15fr] md:p-12">
            <div>
              <p className="tdc-eyebrow">
                A gentle reminder
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight  ">
                Chemistry works better with good judgment.
              </h2>
              <p className="mt-5 leading-relaxed text-ink/70">
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

        <section
          aria-labelledby="usa-other-countries"
          className="border-t border-white/10 bg-ink px-6 py-12 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-mint/80">
              More countries
            </p>
            <h2
              id="usa-other-countries"
              className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl"
            >
              Explore other countries
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50">
              Compare similar shortlists on our other active country pages.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {(
                [
                  { href: "/germany", label: "🇩🇪 Germany" },
                  { href: "/france", label: "🇫🇷 France" },
                  { href: "/canada", label: "🇨🇦 Canada" },
                  { href: "/australia", label: "🇦🇺 Australia" },
                  { href: "/uk", label: "🇬🇧 United Kingdom" },
                ] as const
              ).map((country) => (
                <li key={country.href}>
                  <Link
                    href={country.href}
                    className="inline-flex border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-bold tracking-wide text-white/80 transition hover:border-brand-rose/40 hover:text-brand-rose-soft"
                  >
                    {country.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
