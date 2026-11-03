import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  EyeOff,
  Lock,
  ShieldAlert,
  UserRound,
  Search,
  KeyRound,
} from "lucide-react";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import NoiseOverlay from "@/components/theme/NoiseOverlay";
import { getOfferAdultImage } from "@/data/adultOfferImages";
import { fetishPartnerLanguageAlternates } from "@/data/fetishPartnerCountryPages";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_PATH = "/canada/fetishpartner";
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
const PAGE_TITLE = "FetishPartner: Fetish Dating in Canada | TheDateCompass";
const META_DESCRIPTION =
  "FetishPartner for fetish dating in Canada: niche contacts, profiles, and direct messages. Adults 18+ only. Prices are on the provider site.";
const OG_IMAGE = `${SITE_URL}${getOfferAdultImage("fetishpartner")}`;
const GO_BASE = "/go/fetishpartner-ca?country=canada";

const faqs = [
  {
    question: "What is FetishPartner?",
    answer:
      "FetishPartner is listed here as an adult platform for connections around specific interests. The listing covers browsing profiles and sending direct messages. TheDateCompass does not operate the platform.",
  },
  {
    question: "Who is fetish dating on FetishPartner for?",
    answer:
      "The listing is for adults 18 or older in Canada who want a fetish partner or other niche contacts. That can include BDSM and kink dating. This page is not a matchmaking service and it does not promise results.",
  },
  {
    question: "How much does FetishPartner cost?",
    answer:
      "TheDateCompass does not publish prices. Current fees, free features, and subscriptions are shown only on the provider site and can change.",
  },
  {
    question: "How discreet is signup?",
    answer:
      "Discretion depends on what you share and on the provider’s settings. Use an email address you control, and read the privacy policy before you upload photos or contact details.",
  },
  {
    question: "Are all profiles real people?",
    answer:
      "That cannot be verified from outside the platform. Some profiles may be moderated. Read the provider’s terms, and do not rely on a claim such as “real profiles only.”",
  },
  {
    question: "Is there an age limit?",
    answer:
      "Yes. FetishPartner and this page are only for people 18 or older. Minors must not register. If a profile seems unclear, stop the conversation.",
  },
  {
    question: "What happens after I click the button?",
    answer:
      "The button sends you through a TheDateCompass redirect to the provider site. TheDateCompass may earn a commission if you sign up there. The provider handles the account, payment, and support.",
  },
] as const;

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: META_DESCRIPTION,
  keywords: [
    "FetishPartner",
    "fetish dating Canada",
    "fetish partner",
    "fetish contacts",
    "BDSM dating",
    "kink dating",
    "fetish community",
    "niche dating",
    "discreet",
    "18+",
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: fetishPartnerLanguageAlternates(),
  },
  openGraph: {
    title: PAGE_TITLE,
    description: META_DESCRIPTION,
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Neon pink mood image, not a photo of a real FetishPartner member",
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
  },
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: PAGE_TITLE,
  description: META_DESCRIPTION,
  url: PAGE_URL,
  inLanguage: "en-CA",
  isPartOf: {
    "@type": "WebSite",
    name: "TheDateCompass",
    url: SITE_URL,
  },
  audience: {
    "@type": "PeopleAudience",
    suggestedMinAge: 18,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Canada",
      item: `${SITE_URL}/canada`,
    },
    { "@type": "ListItem", position: 3, name: "FetishPartner", item: PAGE_URL },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const quickFacts = [
  { label: "Region", value: "Canada" },
  { label: "Focus", value: "Specific interests" },
  { label: "Age", value: "18 and older" },
  { label: "Prices", value: "See provider site" },
] as const;

const steps = [
  {
    icon: KeyRound,
    title: "Register",
    text: "A short signup with an email address or another login, an age confirmation, and a password is typical. The provider decides which fields are required.",
  },
  {
    icon: UserRound,
    title: "Create a profile",
    text: "Many services then ask for a display name, an approximate region, a short description, and an optional photo. Share only what you want to be public.",
  },
  {
    icon: Search,
    title: "Profiles and messages",
    text: "The FetishPartner listing covers browsing profiles and sending direct messages. Whether filters or chat require payment is stated on the provider site.",
  },
] as const;

const privacyTips = [
  {
    icon: EyeOff,
    title: "Share less",
    text: "A neutral display name, an email address you control, and a photo that does not show your workplace or home reduce the chance of being recognized later. Keep location details vague.",
  },
  {
    icon: Lock,
    title: "Check the privacy policy",
    text: "Read the provider’s privacy policy before you upload photos or contact details. Pay only through the checkout on the provider site. TheDateCompass never sees those details.",
  },
  {
    icon: BadgeCheck,
    title: "Be careful meeting",
    text: "The same precautions apply as with any contact from the internet: a public place, your own transport, and the right to leave. This page makes no promise about the safety of individual members.",
  },
] as const;

function Cta({
  href,
  children,
  className = "",
  tone = "pink",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "pink" | "light";
}) {
  const toneClass =
    tone === "light"
      ? "bg-white text-[#3d246e] shadow-[0_14px_36px_rgba(0,0,0,0.25)]"
      : "bg-gradient-to-r from-[#9C5CDB] to-[#E83E9B] text-white shadow-[0_14px_36px_rgba(156,92,219,0.4)]";
  return (
    <a
      href={href}
      rel="sponsored nofollow noopener noreferrer"
      className={`group inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-8 text-[0.8rem] font-bold uppercase tracking-[0.12em] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 ${toneClass} ${className}`}
    >
      {children}
      <ArrowRight size={18} className="transition group-hover:translate-x-1" aria-hidden />
    </a>
  );
}

function SectionHead({
  eyebrow,
  title,
  center = false,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#c084fc]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">{title}</h2>
    </div>
  );
}

export default function FetishPartnerCanadaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header tone="home" />
      <div className="relative bg-[#0c1230]">
        <NoiseOverlay />
        <main className="relative overflow-hidden pb-28 font-display text-cream md:pb-0">
          <section className="relative">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 60% 55% at 85% 20%, rgba(156,92,219,0.38), transparent 60%), radial-gradient(ellipse 45% 40% at 5% 90%, rgba(232,62,155,0.22), transparent 55%)",
              }}
            />
            <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-14 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pb-20 lg:pt-14">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[#9C5CDB]/50 bg-[#9C5CDB]/15 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#d8b4fe]">
                    Sponsored
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cream/80">
                    18+ only
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-cream/80">
                    Canada
                  </span>
                </div>
                <nav aria-label="Breadcrumb" className="mt-4 text-sm text-cream/55">
                  <ol className="flex flex-wrap gap-x-2 gap-y-1">
                    <li>
                      <Link href="/" className="underline-offset-4 hover:text-white hover:underline">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li>
                      <Link href="/canada" className="underline-offset-4 hover:text-white hover:underline">
                        Canada
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li className="text-cream">FetishPartner</li>
                  </ol>
                </nav>
                <h1 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[3.4rem]">
                  FetishPartner: <span className="text-[#d8b4fe]">fetish dating</span> in Canada
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/75">
                  FetishPartner is listed for adults looking for connections around specific
                  interests. You can browse profiles and send direct messages. This page covers
                  only this one offer.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                  <Cta href={`${GO_BASE}&placement=lp_hero`}>Continue to the provider</Cta>
                  <p className="text-sm font-semibold text-cream/60">
                    18+ only. Prices are on the provider site.
                  </p>
                </div>
                <p className="mt-6 max-w-xl text-xs leading-5 text-cream/50">
                  This offer is listed for adults in Canada. Outside Canada the provider may show
                  a different page. Advertising notice: this page contains a sponsored link.
                  TheDateCompass may earn a commission if you continue to the provider.{" "}
                  <Link href="/affiliate-disclosure" className="font-semibold text-[#d8b4fe] underline-offset-4 hover:underline">
                    Affiliate disclosure
                  </Link>
                  .
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="absolute -inset-3 rounded-[2.4rem] bg-gradient-to-br from-[#9C5CDB]/40 to-transparent blur-2xl" aria-hidden />
                <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] border border-[#9C5CDB]/40 sm:aspect-[4/5]">
                  <Image
                    src={getOfferAdultImage("fetishpartner")}
                    alt="Neon pink mood image, not a photo of a real FetishPartner member"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1230] via-[#0c1230]/10 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-[#0c1230]/80 p-4 backdrop-blur">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#d8b4fe]">
                      In short
                    </p>
                    <p className="mt-1 text-sm leading-6 text-cream/85">
                      Niche contacts for adults. Confirm the terms on the provider site.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative mx-auto max-w-6xl px-6">
            <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-[#9C5CDB]/25 bg-[#141a3d]/90 p-4 text-center"
                >
                  <dt className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#d8b4fe]">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-extrabold sm:text-base">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="relative mx-auto mt-16 max-w-6xl px-6">
            <SectionHead eyebrow="Listing" title="A fetish partner for specific interests" />
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <p className="text-base leading-7 text-cream/80">
                Someone looking for a fetish partner needs a listing that states the interest.
                On our Canada page, FetishPartner is the adult social option for connections
                around specific interests, rather than a general dating site.
              </p>
              <p className="text-base leading-7 text-cream/80">
                TheDateCompass does not run the platform, store profiles, or check the provider’s
                claims. Member counts, ratings, and success rates are left out because no verified
                source is available.
              </p>
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <SectionHead eyebrow="Features" title="Fetish contacts: profiles and messages" />
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <p className="rounded-3xl border border-[#9C5CDB]/25 bg-[#141a3d] p-6 text-sm leading-6 text-cream/80">
                Niche contacts: the listed focus is connections around specific interests, not
                broad dating with no topic.
              </p>
              <p className="rounded-3xl border border-[#9C5CDB]/25 bg-[#141a3d] p-6 text-sm leading-6 text-cream/80">
                Profiles: the offer describes browsing profiles. The provider decides which
                details are visible.
              </p>
              <p className="rounded-3xl border border-[#9C5CDB]/25 bg-[#141a3d] p-6 text-sm leading-6 text-cream/80">
                Messages: direct messages are part of the listing. Whether they work without
                payment is stated only on the provider site.
              </p>
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <SectionHead eyebrow="Niche" title="BDSM and kink dating in this listing" />
            <p className="mt-5 max-w-3xl text-base leading-7 text-cream/80">
              People looking for BDSM dating or kink dating fall under the same listing: adult
              contacts with a clear interest. FetishPartner is not described here as a general
              singles site. Whether the provider site has its own categories, a fetish community,
              or extra filters is stated there and can change. This page does not invent those
              features.
            </p>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <SectionHead eyebrow="Steps" title="Discreet signup" />
            <p className="mt-4 max-w-2xl text-base leading-7 text-cream/80">
              The exact steps are on the provider site and can change.
            </p>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="relative rounded-3xl border border-[#9C5CDB]/25 bg-[#141a3d] p-6"
                >
                  <span className="absolute right-5 top-4 text-5xl font-extrabold text-[#9C5CDB]/20" aria-hidden>
                    {index + 1}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#9C5CDB]/15 text-[#d8b4fe]">
                    <step.icon size={22} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/75">{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-[#9C5CDB]/30 bg-gradient-to-br from-[#1a2150] to-[#141a3d] p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#c084fc]">
                  Pricing
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
                  Costs are on the provider site
                </h2>
              </div>
              <div className="space-y-4 text-base leading-7 text-cream/80">
                <p>
                  No verified price is available here for FetishPartner. Whether signup is free,
                  and which features cost money afterward, is shown only on the current provider
                  site.
                </p>
                <p>
                  Check the term, renewal, and payment method before you confirm a subscription.
                  Cancellation and refunds are set by the provider, not by this overview.
                </p>
              </div>
            </div>
          </section>

          <section className="relative mx-auto mt-16 max-w-6xl px-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#6138A8] via-[#9C5CDB] to-[#E83E9B] px-6 py-12 text-center sm:px-12">
              <h2 className="relative text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
                Open the provider site and check it yourself
              </h2>
              <p className="relative mx-auto mt-3 max-w-xl text-sm leading-6 text-white/85">
                Current prices, features, and terms for this fetish dating offer are listed only
                there.
              </p>
              <div className="relative mt-7">
                <Cta href={`${GO_BASE}&placement=lp_mid`} tone="light">
                  Review FetishPartner on the provider site
                </Cta>
              </div>
              <p className="relative mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/70">
                Sponsored · 18+ only
              </p>
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <div className="grid gap-6 rounded-[2rem] border border-amber-300/30 bg-amber-300/[0.06] p-6 sm:p-10 lg:grid-cols-[auto_1fr]">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-300/15 text-amber-300">
                <ShieldAlert size={28} aria-hidden />
              </span>
              <div>
                <h2 className="text-3xl font-extrabold tracking-[-0.03em]">
                  Adults 18 and older only
                </h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-cream/85">
                  <p>
                    FetishPartner and this page are only for people 18 or older. Minors must not
                    register. Some profiles may be moderated. We do not claim that every profile
                    is a real person.
                  </p>
                  <p>
                    If someone quickly asks for payment outside the site, or for private documents,
                    stop the conversation. Report it with the platform’s tools when those tools
                    are available.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <SectionHead eyebrow="Tips" title="Privacy and discretion" />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {privacyTips.map((tip) => (
                <div key={tip.title} className="rounded-3xl border border-[#9C5CDB]/25 bg-[#141a3d] p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#9C5CDB]/15 text-[#d8b4fe]">
                    <tip.icon size={22} aria-hidden />
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold">{tip.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/75">{tip.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <div className="rounded-[2rem] border border-[#9C5CDB]/35 bg-gradient-to-br from-[#141a3d] to-[#0c1230] p-6 sm:p-10">
              <SectionHead eyebrow="Summary" title="FetishPartner in short" />
              <div className="mt-5 grid gap-6 text-base leading-7 text-cream/85 md:grid-cols-2">
                <p>
                  FetishPartner is an option for adults in Canada who want to look at fetish
                  dating and other niche contacts. The listing covers profile browsing and direct
                  messages. Prices and the exact feature set are only on the provider site.
                </p>
                <p>
                  TheDateCompass publishes this overview as an advertisement and links only this
                  offer. Profiles, payment, and support stay with the operator of FetishPartner.
                </p>
              </div>
              <div className="mt-8">
                <Cta href={`${GO_BASE}&placement=lp_end`}>Continue to FetishPartner</Cta>
              </div>
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6 pb-20">
            <SectionHead eyebrow="FAQ" title="Common questions about FetishPartner" center />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {faqs.map((item) => (
                <section
                  key={item.question}
                  className="rounded-2xl border border-[#9C5CDB]/25 bg-[#141a3d] p-6"
                >
                  <h3 className="text-lg font-bold">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-cream/80">{item.answer}</p>
                </section>
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#9C5CDB]/40 bg-[#0c1230]/95 p-3 backdrop-blur md:hidden">
        <Cta href={`${GO_BASE}&placement=lp_end`} className="w-full">
          Continue to FetishPartner
        </Cta>
      </div>
    </>
  );
}
