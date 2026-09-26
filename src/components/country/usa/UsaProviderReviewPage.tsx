import Image from "next/image";
import Link from "next/link";
import CountryFaqSection from "@/components/country/common/CountryFaqSection";
import type { CountryFaqItem } from "@/components/country/common/CountryFaqSection";
import CountrySectionHeading from "@/components/country/common/CountrySectionHeading";
import UsaAffiliateLink from "@/components/country/usa/UsaAffiliateLink";
import { USA_PAGE_LAST_UPDATED, type UsaOffer } from "@/data/usaOffers";

const linkFocus =
  "font-semibold text-brand-rose underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-rose";

export type UsaProviderReviewExtras = {
  /** Optional lines from casual-dating tab data (highlights, audience focus). */
  tabBestFor?: string;
  tabDescription?: string;
  listedHighlights?: string[];
};

type UsaProviderReviewPageProps = {
  offer: UsaOffer;
  extras?: UsaProviderReviewExtras;
  faqs: CountryFaqItem[];
};

export default function UsaProviderReviewPage({
  offer,
  extras,
  faqs,
}: UsaProviderReviewPageProps) {
  const availability =
    offer.badge?.trim() ||
    (offer.country ? `Listed for ${offer.country}` : "Not specified");

  const listedHighlights = extras?.listedHighlights ?? [];
  const hasListedHighlights = listedHighlights.length > 0;

  const pros = [
    offer.country || offer.badge
      ? `Listed on TheDateCompass for ${offer.country ?? "USA"} visitors (${offer.badge ?? "USA available"}).`
      : null,
    offer.keyFocus
      ? `Clear focus in our USA inventory: ${offer.keyFocus}.`
      : null,
    offer.featured
      ? "Featured in the USA comparison lineup for easier side-by-side browsing."
      : null,
    hasListedHighlights
      ? `Casual dating comparison data mentions: ${listedHighlights.join(", ").toLowerCase()}.`
      : null,
  ].filter(Boolean) as string[];

  const considerations = [
    "Pricing, billing cycles, and membership tiers are not included in TheDateCompass data—confirm on the provider site before paying.",
    "Privacy practices and data retention are set by the operator; read their policy on the destination site.",
    `TheDateCompass does not operate ${offer.name}, manage profiles, or handle support for the platform.`,
    "Eligibility, age rules, and regional availability can change; verify current terms when you visit the provider.",
  ];

  const signupNotes = hasListedHighlights
    ? `Project listings reference ${listedHighlights[0]?.toLowerCase() ?? "signup"} and similar steps; complete registration only on the official destination linked below.`
    : "Information not provided on the available source.";

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="border-b border-white/10 bg-ink px-6 py-4 sm:px-8 lg:px-12"
      >
        <ol className="mx-auto flex max-w-4xl flex-wrap items-center gap-2 text-sm text-white/60">
          <li>
            <Link
              href="/"
              className={`text-white/80 ${linkFocus}`}
            >
              Home
            </Link>
          </li>
          <li aria-hidden className="text-white/30">/</li>
          <li>
            <Link href="/usa" className={`text-white/80 ${linkFocus}`}>
              USA
            </Link>
          </li>
          <li aria-hidden className="text-white/30">/</li>
          <li>
            <span className="font-medium text-white" aria-current="page">
              {offer.name} Review
            </span>
          </li>
        </ol>
      </nav>

      <section className="relative isolate overflow-hidden px-6 pb-14 pt-10 sm:px-8 lg:px-12 lg:pb-20 lg:pt-14">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,61,110,0.2),transparent_42%),linear-gradient(145deg,#070709_0%,#131018_55%,#0a0b0d_100%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-rose-soft">
              {offer.category} · USA guide
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {offer.name} Review 2026
            </h1>
            <p className="mt-3 text-sm text-white/55">
              Last updated:{" "}
              <time dateTime={USA_PAGE_LAST_UPDATED.iso}>
                {USA_PAGE_LAST_UPDATED.label}
              </time>
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              {offer.description} This page summarizes how {offer.name} appears
              in TheDateCompass USA listings—category, focus, and availability—so
              you can decide whether to visit the provider&apos;s own site for
              full details.
            </p>
            <p className="mt-4 text-sm text-white/55">
              Category: <span className="text-white/80">{offer.category}</span>
              {offer.country ? (
                <>
                  {" "}
                  · Availability:{" "}
                  <span className="text-white/80">{offer.badge}</span>
                </>
              ) : null}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <UsaAffiliateLink
                href={offer.href}
                offerName={offer.name}
                placement="usa_review_hero"
                className={`inline-flex items-center justify-center rounded-xl bg-brand-rose px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-brand-rose/25 transition hover:bg-brand-rose-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-rose`}
              >
                Visit {offer.name}
              </UsaAffiliateLink>
              <Link
                href="/usa"
                className={`inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.04] px-7 py-4 text-xs font-extrabold uppercase tracking-wider text-white/90 transition hover:border-brand-rose/50 hover:bg-white/[0.08] ${linkFocus}`}
              >
                Back to USA comparison
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div
              className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${offer.accent} opacity-30 blur-2xl`}
              aria-hidden
            />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl">
              <Image
                src={offer.image}
                alt={`${offer.name} listing image on TheDateCompass`}
                width={640}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="quick-overview-heading"
        className="border-t border-white/10 bg-ink px-6 py-14 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-4xl">
          <CountrySectionHeading
            variant="usa"
            eyebrow="At a glance"
            title={<span id="quick-overview-heading">Quick overview</span>}
            titleAs="h2"
          />
          <div
            className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
          >
            <dl className="divide-y divide-white/10 text-sm">
              {[
                ["Platform", offer.name],
                ["Category", offer.category],
                ["Availability", availability],
                ["Key focus", offer.keyFocus ?? "Not specified"],
                [
                  "Official / affiliate destination",
                  "External provider site (opens in a new tab via our tracked link)",
                ],
              ].map(([term, detail]) => (
                <div
                  key={term}
                  className="grid gap-1 px-5 py-4 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-6"
                >
                  <dt className="font-semibold text-white/90">{term}</dt>
                  <dd className="text-white/65">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl space-y-10 text-base leading-relaxed text-white/70">
          <div>
            <h2 className="font-serif text-3xl font-bold text-white">
              What is {offer.name}?
            </h2>
            <p className="mt-4">
              Based on TheDateCompass USA inventory, {offer.name} is listed under{" "}
              <strong className="font-semibold text-white/90">
                {offer.category.toLowerCase()}
              </strong>
              . {offer.description}
            </p>
            {extras?.tabDescription ? (
              <p className="mt-4">{extras.tabDescription}</p>
            ) : null}
            <p className="mt-4 text-sm text-white/55">
              We do not operate this platform. Profiles, messaging, moderation,
              and billing are handled entirely on the provider&apos;s website.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-bold text-white">
              Who might consider it?
            </h2>
            <p className="mt-4">
              This listing may suit adults in the United States who are browsing{" "}
              {offer.category.toLowerCase()} options and prefer a{" "}
              {offer.keyFocus?.toLowerCase() ?? "casual"} experience rather than
              a long-form compatibility questionnaire.
            </p>
            {extras?.tabBestFor ? (
              <p className="mt-4">
                Our casual dating comparison describes the audience focus as:{" "}
                <span className="text-white/85">{extras.tabBestFor}</span>.
              </p>
            ) : null}
            <p className="mt-4 text-sm text-white/55">
              Whether it fits your goals depends on what you want from messaging,
              privacy settings, and community rules—confirm those on the
              destination site.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="key-information-heading"
        className="border-t border-white/10 bg-[#0a0a0d] px-6 py-14 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-4xl">
          <h2
            id="key-information-heading"
            className="font-serif text-3xl font-bold text-white sm:text-4xl"
          >
            Key information
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "Main focus",
                body:
                  offer.keyFocus ??
                  "Information not provided on the available source.",
              },
              {
                title: "Available information",
                body: hasListedHighlights
                  ? `TheDateCompass casual dating data lists: ${listedHighlights.join(", ")}.`
                  : offer.description,
              },
              {
                title: "Privacy information",
                body:
                  "Information not provided on the available source. Review the provider's privacy policy after you arrive on their site.",
              },
              {
                title: "Pricing information",
                body:
                  "Information not provided on the available source.",
              },
              {
                title: "Signup / access information",
                body: signupNotes,
              },
            ].map((block) => (
              <article
                key={block.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {block.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {block.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-bold text-white">Pros</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-white/70">
              {pros.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-white">
              Considerations
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-white/70">
              {considerations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-ink px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-base leading-relaxed text-white/70">
          <h2 className="font-serif text-3xl font-bold text-white">
            Privacy &amp; safety
          </h2>
          <p className="mt-4">
            We have not verified specific security controls for {offer.name} in
            this project. General online-dating safety still applies: keep early
            chats on-platform when possible, avoid sending money or sensitive
            documents to new contacts, and use the privacy settings the
            provider offers after you create an account.
          </p>
          <p className="mt-4">
            For broader USA listing safety tips, see our{" "}
            <Link href="/usa#safety" className={linkFocus}>
              safety section on the USA comparison page
            </Link>
            . Read our{" "}
            <Link href="/privacy-policy" className={linkFocus}>
              privacy policy
            </Link>{" "}
            for how TheDateCompass handles site analytics, and the provider&apos;s
            policy for how they handle member data.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-14 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-base leading-relaxed text-white/70">
          <h2 className="font-serif text-3xl font-bold text-white">
            How this review was prepared
          </h2>
          <p className="mt-4">
            TheDateCompass compares publicly available listing information used
            across our USA guide—category, availability badges, short
            descriptions, stated focus areas, and casual-dating comparison
            highlights where we publish them. We do not claim hands-on product
            testing unless a page explicitly says so. Details can change on the
            provider site without notice.
          </p>
          <p className="mt-4 text-sm text-white/55">
            See also our{" "}
            <Link href="/disclaimer" className={linkFocus}>
              disclaimer
            </Link>{" "}
            and{" "}
            <Link href="/affiliate-disclosure" className={linkFocus}>
              affiliate disclosure
            </Link>
            .
          </p>
        </div>
      </section>

      <CountryFaqSection
        variant="usa"
        eyebrow={`FAQ · ${offer.name}`}
        title={`${offer.name} — common questions`}
        items={faqs}
      />

      <section className="border-t border-white/10 px-6 py-10 sm:px-8 lg:px-12">
        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-white/55">
          TheDateCompass may earn a commission when visitors use certain links.
          This does not mean every platform is suitable for every visitor.{" "}
          <Link href="/affiliate-disclosure" className={linkFocus}>
            Learn more
          </Link>
          .
        </p>
      </section>

      <section className="border-t border-white/10 bg-[#070709] px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
            Ready to visit {offer.name}?
          </h2>
          <p className="text-sm text-white/60">
            You will leave TheDateCompass and open the provider site in a new
            tab.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <UsaAffiliateLink
              href={offer.href}
              offerName={offer.name}
              placement="usa_review_footer"
              className={`inline-flex items-center justify-center rounded-xl bg-brand-rose px-8 py-4 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-brand-rose/25 transition hover:bg-brand-rose-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-rose`}
            >
              Visit {offer.name}
            </UsaAffiliateLink>
            <Link
              href="/usa"
              className={`inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.04] px-7 py-4 text-xs font-extrabold uppercase tracking-wider text-white/90 transition hover:border-brand-rose/50 ${linkFocus}`}
            >
              Compare other adult dating sites in the USA
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
