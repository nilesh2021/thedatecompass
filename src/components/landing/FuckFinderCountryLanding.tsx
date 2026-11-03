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
import {
  FUCKFINDER_SITE_URL,
  type FuckFinderCountryPage,
} from "@/data/fuckFinderCountryPages";

const stepIcons = [KeyRound, UserRound, Search] as const;
const privacyIcons = [EyeOff, Lock, BadgeCheck] as const;

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

export default function FuckFinderCountryLanding({
  page,
}: {
  page: FuckFinderCountryPage;
}) {
  const { ui } = page;
  const pageUrl = `${FUCKFINDER_SITE_URL}${page.path}`;
  const goBase = `/go/${page.goSlug}?country=${page.countryToken}`;
  const image = getOfferAdultImage("fuckfinder");

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: pageUrl,
    inLanguage: page.hreflang,
    isPartOf: {
      "@type": "WebSite",
      name: "TheDateCompass",
      url: FUCKFINDER_SITE_URL,
    },
    audience: { "@type": "PeopleAudience", suggestedMinAge: 18 },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: ui.home, item: FUCKFINDER_SITE_URL },
      page.hubHref
        ? {
            "@type": "ListItem",
            position: 2,
            name: ui.country,
            item: `${FUCKFINDER_SITE_URL}${page.hubHref}`,
          }
        : { "@type": "ListItem", position: 2, name: ui.country },
      { "@type": "ListItem", position: 3, name: "FuckFinder", item: pageUrl },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ui.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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
                  {ui.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-[#9C5CDB]/50 bg-[#9C5CDB]/15 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#d8b4fe]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <nav aria-label={ui.breadcrumbLabel} className="mt-4 text-sm text-cream/55">
                  <ol className="flex flex-wrap gap-x-2 gap-y-1">
                    <li>
                      <Link href="/" className="underline-offset-4 hover:text-white hover:underline">
                        {ui.home}
                      </Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li>
                      {page.hubHref ? (
                        <Link href={page.hubHref} className="underline-offset-4 hover:text-white hover:underline">
                          {ui.country}
                        </Link>
                      ) : (
                        <span>{ui.country}</span>
                      )}
                    </li>
                    <li aria-hidden="true">/</li>
                    <li className="text-cream">FuckFinder</li>
                  </ol>
                </nav>
                <h1 className="mt-5 text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[3.4rem]">
                  {ui.h1Lead} <span className="text-[#d8b4fe]">{ui.h1Highlight}</span> {ui.h1Tail}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/75">{ui.intro}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                  <Cta href={`${goBase}&placement=lp_hero`}>{ui.heroCta}</Cta>
                  <p className="text-sm font-semibold text-cream/60">{ui.heroNote}</p>
                </div>
                <p className="mt-6 max-w-xl text-xs leading-5 text-cream/50">
                  {ui.disclosure}{" "}
                  <Link href="/affiliate-disclosure" className="font-semibold text-[#d8b4fe] underline-offset-4 hover:underline">
                    {ui.disclosureLink}
                  </Link>
                  .
                </p>
              </div>
              <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                <div className="absolute -inset-3 rounded-[2.4rem] bg-gradient-to-br from-[#9C5CDB]/40 to-transparent blur-2xl" aria-hidden />
                <div className="relative aspect-[16/11] overflow-hidden rounded-[2rem] border border-[#9C5CDB]/40 sm:aspect-[4/5]">
                  <Image
                    src={image}
                    alt={ui.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1230] via-[#0c1230]/10 to-transparent" />
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-[#0c1230]/80 p-4 backdrop-blur">
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#d8b4fe]">
                      {ui.shortEyebrow}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-cream/85">{ui.shortText}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative mx-auto max-w-6xl px-6">
            <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {ui.facts.map((fact) => (
                <div key={fact.label} className="rounded-2xl border border-[#9C5CDB]/25 bg-[#141a3d]/90 p-4 text-center">
                  <dt className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-[#d8b4fe]">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm font-extrabold sm:text-base">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="relative mx-auto mt-16 max-w-6xl px-6">
            <SectionHead eyebrow={ui.partnerEyebrow} title={ui.partnerTitle} />
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <p className="text-base leading-7 text-cream/80">{ui.partnerLeft}</p>
              <p className="text-base leading-7 text-cream/80">{ui.partnerRight}</p>
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <SectionHead eyebrow={ui.contactsEyebrow} title={ui.contactsTitle} />
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {ui.contacts.map((item) => (
                <p key={item} className="rounded-3xl border border-[#9C5CDB]/25 bg-[#141a3d] p-6 text-sm leading-6 text-cream/80">
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <SectionHead eyebrow={ui.nicheEyebrow} title={ui.nicheTitle} />
            <p className="mt-5 max-w-3xl text-base leading-7 text-cream/80">{ui.nicheBody}</p>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <SectionHead eyebrow={ui.signupEyebrow} title={ui.signupTitle} />
            <p className="mt-4 max-w-2xl text-base leading-7 text-cream/80">{ui.signupIntro}</p>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {ui.steps.map((step, index) => {
                const Icon = stepIcons[index] ?? KeyRound;
                return (
                  <li key={step.title} className="relative rounded-3xl border border-[#9C5CDB]/25 bg-[#141a3d] p-6">
                    <span className="absolute right-5 top-4 text-5xl font-extrabold text-[#9C5CDB]/20" aria-hidden>
                      {index + 1}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#9C5CDB]/15 text-[#d8b4fe]">
                      <Icon size={22} aria-hidden />
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-cream/75">{step.text}</p>
                  </li>
                );
              })}
            </ol>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <div className="grid gap-8 overflow-hidden rounded-[2rem] border border-[#9C5CDB]/30 bg-gradient-to-br from-[#1a2150] to-[#141a3d] p-6 sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#c084fc]">
                  {ui.priceEyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">{ui.priceTitle}</h2>
              </div>
              <div className="space-y-4 text-base leading-7 text-cream/80">
                {ui.priceBody.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          <section className="relative mx-auto mt-16 max-w-6xl px-6">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#6138A8] via-[#9C5CDB] to-[#E83E9B] px-6 py-12 text-center sm:px-12">
              <h2 className="relative text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-4xl">
                {ui.midTitle}
              </h2>
              <p className="relative mx-auto mt-3 max-w-xl text-sm leading-6 text-white/85">{ui.midBody}</p>
              <div className="relative mt-7">
                <Cta href={`${goBase}&placement=lp_mid`} tone="light">
                  {ui.midCta}
                </Cta>
              </div>
              <p className="relative mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/70">
                {ui.midNote}
              </p>
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <div className="grid gap-6 rounded-[2rem] border border-amber-300/30 bg-amber-300/[0.06] p-6 sm:p-10 lg:grid-cols-[auto_1fr]">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-amber-300/15 text-amber-300">
                <ShieldAlert size={28} aria-hidden />
              </span>
              <div>
                <h2 className="text-3xl font-extrabold tracking-[-0.03em]">{ui.ageTitle}</h2>
                <div className="mt-4 space-y-4 text-base leading-7 text-cream/85">
                  {ui.ageBody.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <SectionHead eyebrow={ui.privacyEyebrow} title={ui.privacyTitle} />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {ui.privacy.map((tip, index) => {
                const Icon = privacyIcons[index] ?? EyeOff;
                return (
                  <div key={tip.title} className="rounded-3xl border border-[#9C5CDB]/25 bg-[#141a3d] p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#9C5CDB]/15 text-[#d8b4fe]">
                      <Icon size={22} aria-hidden />
                    </span>
                    <h3 className="mt-4 text-xl font-extrabold">{tip.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-cream/75">{tip.text}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6">
            <div className="rounded-[2rem] border border-[#9C5CDB]/35 bg-gradient-to-br from-[#141a3d] to-[#0c1230] p-6 sm:p-10">
              <SectionHead eyebrow={ui.summaryEyebrow} title={ui.summaryTitle} />
              <div className="mt-5 grid gap-6 text-base leading-7 text-cream/85 md:grid-cols-2">
                {ui.summaryBody.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8">
                <Cta href={`${goBase}&placement=lp_end`}>{ui.endCta}</Cta>
              </div>
            </div>
          </section>

          <section className="relative mx-auto mt-20 max-w-6xl px-6 pb-20">
            <SectionHead eyebrow={ui.faqEyebrow} title={ui.faqTitle} center />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {ui.faqs.map((item) => (
                <section key={item.question} className="rounded-2xl border border-[#9C5CDB]/25 bg-[#141a3d] p-6">
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
        <Cta href={`${goBase}&placement=lp_end`} className="w-full">
          {ui.endCta}
        </Cta>
      </div>
    </>
  );
}
