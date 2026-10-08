import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import NoiseOverlay from "@/components/theme/NoiseOverlay";
import Image from "next/image";
import CountryFaqSection from "@/components/country/common/CountryFaqSection";
import USAComparisonTable from "@/components/country/usa/USAComparisonTable";
import USAOffers from "@/components/country/usa/USAOffers";
import { USA_PAGE_LAST_UPDATED, usaOffers } from "@/data/usaOffers";
import { getOfferAdultImage } from "@/data/adultOfferImages";
import { CheckCircle2, ShieldCheck, Sparkles, Users } from "lucide-react";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/usa`;
const OG_IMAGE = `${SITE_URL}/images/extra/2.jpg`;
const PAGE_TITLE = "Adult Dating Sites in the USA (2026) | TheDateCompass";
const META_DESCRIPTION =
  "Compare adult dating sites in the USA by category and focus. Browse casual, gay, mature, adult, and trans platforms listed for eligible US visitors—then visit providers on their own sites.";

const linkFocus =
  "font-semibold text-brand-rose underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-rose";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "adult dating sites USA",
    "casual dating sites USA",
    "gay dating sites USA",
    "mature dating USA",
    "dating site comparison USA",
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
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
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
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
  Mature: "offers-mature",
};

const intentions = [
  {
    number: "01",
    title: "Keep it casual",
    text: "Browse relaxed adult dating options for fun, low-pressure chemistry.",
    filter: "Casual",
    image: getOfferAdultImage("cheekycrush"),
  },
  {
    number: "02",
    title: "Find your community",
    text: "Discover gay dating platforms and connections that fit your preferences.",
    filter: "Gay Dating",
    image: getOfferAdultImage("pridepair"),
  },
  {
    number: "03",
    title: "Explore mature dating",
    text: "Connect with mature, experienced singles who value real conversations.",
    filter: "Mature",
    image: getOfferAdultImage("grannyhunter"),
  },
];

const howWeCompareItems = [
  {
    title: "Availability",
    text: "Whether each platform is listed for visitors in the United States.",
  },
  {
    title: "Category",
    text: "Casual, gay, mature, adult, trans, and related niches shown in our listings.",
  },
  {
    title: "Public features",
    text: "Information providers share publicly about matching, chat, and signup.",
  },
  {
    title: "Privacy information",
    text: "We point you to each provider’s own privacy policy and data practices.",
  },
  {
    title: "Pricing (where available)",
    text: "Free and paid options are set by the provider; we do not quote prices here.",
  },
  {
    title: "Usability",
    text: "How clearly a platform presents its purpose and next steps before you join.",
  },
];

const relatedGuides = [
  { href: "/gay-dating", label: "Gay dating sites and apps" },
  { href: "/free-gay-dating-sites", label: "Free gay dating sites" },
  { href: "/free-usa-dating-sites", label: "Free USA dating sites" },
  { href: "/usa-dating-sites", label: "USA dating sites by intention" },
  { href: "/top-offers/adult", label: "Adult dating offers" },
  { href: "/top-offers/mature", label: "Mature dating offers" },
  { href: "/cozy-sites", label: "Cozy companion platforms" },
  { href: "/offers/gay-dating-usa", label: "Gay dating in the USA (ManFinder)" },
  { href: "/offers/grannyhunter", label: "Grannyhunter mature dating" },
  { href: "/offers/manfinder", label: "ManFinder gay dating" },
  { href: "/offers/realsexclub", label: "RealSexClub adult listing" },
  { href: "/privacy-policy", label: "TheDateCompass privacy policy" },
  { href: "/disclaimer", label: "Site disclaimer" },
  { href: "#safety", label: "Online dating safety on this page" },
];

const safetyNotes = [
  "You must be 18 years or older to participate.",
  "Read each destination platform’s terms and privacy policy before joining.",
  "Never send money, crypto, or banking details to anyone you meet online.",
  "Keep initial chats on-platform and meet in well-lit public spaces first.",
];

const usaFaqs = [
  {
    question: "What dating offers are listed for USA users on this page?",
    answer:
      "This page lists third-party casual dating, gay dating, mature dating, adult dating, and trans dating offers for eligible visitors in the United States. Current listings include Grannyhunter, LitLatinz, Manfinder, RealSexClub, TransDate, MilfFinder, CheekyCrush, GayBloom, and PridePair.",
  },
  {
    question: "How do I choose an adult dating site in the USA?",
    answer:
      "Start with your goal—casual dating, gay dating, mature dating, adult encounters, or trans-inclusive connections. Use the category tabs and comparison table to narrow options, read each listing’s description, and visit the provider’s own site for rules, features, and pricing before you sign up.",
  },
  {
    question: "Which casual dating offers are listed for USA users?",
    answer:
      "CheekyCrush, LitLatinz, and RealSexClub appear under casual and adult categories on this page. Select the 'Casual & Adult' tab to compare them side by side.",
  },
  {
    question: "Are there gay dating offers for USA users?",
    answer:
      "Yes. GayBloom, PridePair, and Manfinder are gay dating platforms listed for USA users and eligible LGBTQ+ visitors. Use the 'Gay Dating' tab to view all three.",
  },
  {
    question: "How does TheDateCompass compare these platforms?",
    answer:
      "We organize publicly available listing information—category, USA availability, and short descriptions—so you can compare options in one place. We do not run the dating services ourselves. For details on how we work with links, see our affiliate disclosure.",
  },
  {
    question: "Do affiliate commissions affect which sites are listed?",
    answer:
      "We may earn a commission when you use certain outbound links. That does not change the category or description shown for each listing, and it does not mean every platform is right for every visitor. Compare options and choose based on your own needs.",
  },
  {
    question: "What should I know about privacy before joining?",
    answer:
      "Each third-party platform sets its own privacy policy, data retention, and messaging rules. Read those documents on the destination site before creating an account. TheDateCompass does not store your dating profiles or messages on provider platforms.",
  },
  {
    question: "Are these dating sites free or paid?",
    answer:
      "Signup requirements, free features, and paid memberships are set by each provider. Some may offer free registration with optional upgrades. Check the destination platform for current pricing and billing terms before you join.",
  },
  {
    question: "Are there mature dating offers for USA users?",
    answer:
      "Yes. Mature dating listings on this page include Grannyhunter and MilfFinder, both described as focusing on experienced adult connections and chemistry.",
  },
  {
    question: "How can I stay safer when dating online?",
    answer:
      "Use the safety tips on this page: stay 18+, keep early chats on-platform, meet in public first, and never send money or banking details to someone you met online. Report suspicious behavior through the provider’s own tools when available.",
  },
];

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Adult Dating Sites in the USA (2026)",
  description:
    "A comparison and discovery page for third-party adult dating, gay dating, mature dating, and related dating platforms listed for visitors in the United States.",
  url: PAGE_URL,
  dateModified: USA_PAGE_LAST_UPDATED.iso,
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
    "Trans dating",
  ],
  mainEntity: {
    "@type": "ItemList",
    itemListElement: usaOffers.map((offer, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: offer.name,
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

const offerCount = usaOffers.length;

const heroStats = [
  {
    label: "Platforms Listed",
    value: `${offerCount} Active`,
    icon: Sparkles,
  },
  { label: "Cost to Compare", value: "100% Free", icon: CheckCircle2 },
  { label: "Audience", value: "Adults 18+", icon: ShieldCheck },
  {
    label: "Page Updated",
    value: USA_PAGE_LAST_UPDATED.label,
    icon: Users,
  },
];

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

      <Header tone="home" />
      <div className="relative bg-[#0c1230]">
      <NoiseOverlay />
      <main className="relative min-h-screen bg-[#0c1230] font-display text-cream antialiased">
        {/* -------- HERO SECTION -------- */}
        <section className="relative isolate overflow-hidden bg-ink px-6 pb-16 pt-8 sm:px-8 lg:px-12 lg:pb-24 lg:pt-12">
          {/* Ambient Lighting Gradients */}
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,61,110,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(125,255,195,0.06),transparent_40%),linear-gradient(145deg,#070709_0%,#131018_55%,#0a0b0d_100%)]" />
          <div className="absolute -left-32 top-24 -z-10 h-[450px] w-[450px] rounded-full bg-brand-rose/15 blur-[140px]" />
          <div className="absolute -right-28 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-brand-rose-soft/10 blur-[140px]" />

          <div className="mx-auto max-w-6xl pb-4 pt-12 text-center sm:pt-16 lg:pt-20">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-rose/30 bg-brand-rose/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-brand-rose-soft backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-rose" />
              Adults-Only Dating Discovery · 2026 USA Guide
            </div>

            {/* Headline */}
            <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Adult dating sites
              <br />
              <span className="bg-gradient-to-r from-brand-rose via-[#ff6b8f] to-amber-300 bg-clip-text text-transparent">
                in the USA.
              </span>
            </h1>

            <p className="mx-auto mt-4 text-sm text-white/55">
              Last updated:{" "}
              <time dateTime={USA_PAGE_LAST_UPDATED.iso}>
                {USA_PAGE_LAST_UPDATED.label}
              </time>
            </p>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Compare {offerCount} adult dating sites in the USA by category and
              focus—casual connections, gay dating, mature singles, adult
              encounters, and trans-inclusive listings. Use this guide to
              shortlist options before you visit any third-party provider.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
              TheDateCompass helps adults compare platforms listed for US
              visitors, side by side, before visiting any provider. Browsing our
              comparison is free; signup and fees are handled on each
              provider&apos;s site.
            </p>

            {/* Fast Action Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#offers"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff2d87] px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-[0_8px_24px_rgba(255,45,135,0.28)] transition hover:-translate-y-0.5 hover:brightness-110"
              >
                <span>Explore USA options</span>
                <span className="text-base transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>

            </div>

            {/* Quick Stats Bar */}
            <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {heroStats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md transition-colors hover:border-white/20"
                  >
                    <IconComponent
                      size={18}
                      className="text-brand-rose-soft mb-1.5"
                      aria-hidden
                    />
                    <span className="text-sm font-bold text-white sm:text-base">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-medium tracking-wide text-white/50">
                      {stat.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="mx-auto mt-6 max-w-xl text-[11px] leading-5 text-white/55">
              18+ only. TheDateCompass contains sponsored links. Selecting an
              offer redirects you to an independent third-party provider site.
            </p>
          </div>
        </section>

        {/* -------- OFFERS SECTION (Unified Tabs + Modern Grid) -------- */}
        <USAOffers offers={usaOffers} />

        <USAComparisonTable offers={usaOffers} />

        <CountryFaqSection
          variant="usa"
          eyebrow="FAQ · USA offers"
          title="Dating offers for USA users — common questions"
          items={usaFaqs}
        />

        {/* -------- HOW WE COMPARE -------- */}
        <section
          id="how-we-compare"
          className="scroll-mt-20 border-t border-white/10 bg-[linear-gradient(180deg,#0a0b0d,#131018_50%,#0a0b0d)] px-6 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-rose">
              Our approach
            </p>
            <h2 className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              How we compare dating platforms
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              TheDateCompass is a comparison and discovery site—not a dating
              service. We group listing information so you can see how platforms
              differ before you leave for a provider&apos;s own website.
            </p>

            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {howWeCompareItems.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md"
                >
                  <h3 className="font-serif text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-white/55">
              <Link href="/affiliate-disclosure" className={linkFocus}>
                Read our affiliate disclosure
              </Link>
            </p>
          </div>
        </section>

        {/* -------- INTENTIONS SECTION (Dark Modern Cards) -------- */}
        <section
          id="how-it-works"
          className="relative scroll-mt-20 border-t border-white/10 bg-[linear-gradient(180deg,#0a0b0d,#131018_50%,#0a0b0d)] px-6 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-rose">
                  Start with your intention
                </p>
                <h2 className="mt-3 max-w-2xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Every good connection starts with knowing what you want.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-white/60">
                Choose a direction to jump directly to platforms tailored for your
                preferences.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {intentions.map((intention) => (
                <a
                  key={intention.title}
                  href={`#${intentionHashes[intention.filter]}`}
                  className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-brand-rose/50 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(255,61,110,0.18)] ${linkFocus}`}
                >
                  <div className="relative h-48 overflow-hidden bg-ink-soft">
                    <Image
                      src={intention.image}
                      alt={`${intention.title} — filter USA dating offers`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d] via-black/35 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-bold tracking-widest text-white/90 backdrop-blur-md">
                      {intention.number}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-white transition-colors group-hover:text-brand-rose-soft">
                        {intention.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-white/65">
                        {intention.text}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-bold uppercase tracking-wider text-brand-rose-soft group-hover:text-white">
                      <span>Filter matching offers</span>
                      <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* -------- SEO EDITORIAL (Frosted Dark Container) -------- */}
        <section
          id="usa-dating-guide"
          className="border-t border-white/10 bg-ink px-6 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-8 shadow-2xl backdrop-blur-md sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-rose">
              USA Dating Guide · 2026
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              How to choose the right adult dating site in the USA
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-white/70">
              <p>
                Finding the right adult dating site in the United States starts
                with being honest about your personal goals. Some visitors want
                low-pressure{" "}
                <a href="#offers-casual" className={linkFocus}>
                  casual dating & adult encounters
                </a>
                , others prefer{" "}
                <Link href="/gay-dating" className={linkFocus}>
                  gay dating platforms
                </Link>
                ,{" "}
                <a href="#offers-mature" className={linkFocus}>
                  mature dating connections
                </a>
                , or inclusive{" "}
                <a href="#offers-trans" className={linkFocus}>
                  trans dating
                </a>{" "}
                spaces. This guide provides a USA shortlist so 18+ adults can
                compare options before visiting third-party providers.
              </p>

              <p>
                TheDateCompass operates as an independent comparison resource. We
                organize each listing by category, availability for US visitors,
                and the descriptions providers share publicly—we do not operate
                the dating services on this page. For broader comparisons across
                adjacent adult niches, explore our{" "}
                <Link href="/top-offers/adult" className={linkFocus}>
                  adult dating offers
                </Link>{" "}
                and{" "}
                <Link href="/cozy-sites" className={linkFocus}>
                  cozy companion platforms
                </Link>
                .
              </p>

              <p>
                Before joining any service, always inspect the destination
                site&apos;s privacy settings, age verification rules, and billing
                terms. Keep early conversations on-platform and never share
                sensitive financial or personal details.
              </p>

              <div className="border-t border-white/10 pt-6">
                <h3 className="font-serif text-xl font-bold text-white">
                  Related guides
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {relatedGuides.map((guide) => (
                    <li key={guide.href}>
                      <Link
                        href={guide.href}
                        className="inline-flex rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-white/75 transition hover:border-brand-rose/50 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-rose"
                      >
                        {guide.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* -------- SAFETY GUIDELINES (Modern Dark Box) -------- */}
        <section
          id="safety"
          aria-labelledby="usa-safety-heading"
          className="scroll-mt-20 border-t border-white/10 bg-[#070709] px-6 py-20 text-white sm:px-8 lg:px-12"
        >
          <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-8 shadow-2xl backdrop-blur-md md:grid-cols-[0.85fr_1.15fr] md:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-rose">
                Safety & Discretion
              </p>
              <h2
                id="usa-safety-heading"
                className="mt-3 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl"
              >
                Chemistry works better with good judgment.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/65 sm:text-base">
                Online dating should be enjoyable and empowering. Maintain peace
                of mind by staying aware, trusting your instincts, and
                safeguarding your personal boundaries.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {safetyNotes.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm font-medium leading-relaxed text-white/80 shadow-sm backdrop-blur-sm transition-colors hover:border-white/20"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-rose/20 text-sm font-extrabold text-brand-rose-soft ring-1 ring-brand-rose/40">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -------- OTHER COUNTRIES -------- */}
        <section
          aria-labelledby="usa-other-countries"
          className="border-t border-white/10 bg-ink px-6 py-14 sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-mint/80">
              International Lineup
            </p>
            <h2
              id="usa-other-countries"
              className="mt-3 font-serif text-2xl font-bold text-white sm:text-3xl"
            >
              Explore dating options in other countries
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/50">
              Compare curated shortlists and regional platforms on our active
              country guides.
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
                    className="inline-flex rounded-full border border-[#ff2d87]/35 bg-[#141a3d] px-4 py-2.5 text-sm font-bold tracking-wide text-cream transition hover:bg-[#ff2d87] hover:text-white"
                  >
                    {country.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </main>
      </div>
      <Footer tone="home" />
    </>
  );
}
