"use client";

import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import CountryFaqSection from "@/components/country/common/CountryFaqSection";
import BrowseByCountrySection from "@/components/landing/BrowseByCountrySection";

import { getCountryBrowseLinks } from "@/data/countryBrowseLinks";
 
import { trackAffiliateClick } from "@/lib/analytics";

const REL = "sponsored nofollow noopener noreferrer";

type OfferFeature = {
  title: string;
  text: string;
};

type OfferAudienceItem = {
  title: string;
  text: string;
};

type OfferConsideration = {
  title: string;
  text: string;
};

type OfferFaq = {
  question: string;
  answer: string;
};

type OfferData = {
  slug: string;

  offer: {
    name: string;
    category: string;
    url: string;
    ctaLabel: string;
    description: string;
  };

  visuals: {
    hero: string;
    portrait: string;
    wide: string;
  };

  description: string;

  features: OfferFeature[];

  audience: OfferAudienceItem[];

  considerations: OfferConsideration[];

  faqs: OfferFaq[];
};

const primaryCtaClass =
  "group relative inline-flex min-h-[48px] cursor-pointer items-stretch overflow-hidden rounded-2xl border-2 border-brand-rose bg-cream text-ink shadow-[6px_6px_0_0_rgba(255,61,110,0.85)] transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5";

export default function OfferLandingPage({
  data,
}: {
  data: OfferData;
}) {
  const offer = data.offer;

  // Adds TrafficStars ts_click_id as aff_sub5
  // when the visitor originally arrived with ts_click_id.
  

  function VisitCta({ placement }: { placement: string }) {
    return (
      <a
        href={offer.url}
        target="_blank"
        rel={REL}
        className={primaryCtaClass}
        onClick={() => trackAffiliateClick(offer.name, placement)}
      >
        <span className="flex flex-1 items-center justify-center px-6 text-sm font-extrabold uppercase tracking-[0.08em]">
          {offer.ctaLabel}
        </span>

        <span className="flex w-12 shrink-0 items-center justify-center bg-brand-rose text-cream">
          →
        </span>
      </a>
    );
  }

  function AffiliateNote({
    className = "",
  }: {
    className?: string;
  }) {
    return (
      <p className={className}>
        Affiliate link · Adults 18+. TheDateCompass may earn a commission if
        you visit through this link.{" "}
        <Link
          href="/affiliate-disclosure"
          className="text-cream underline decoration-brand-rose/60 underline-offset-2 hover:text-brand-rose"
        >
          Affiliate disclosure
        </Link>
      </p>
    );
  }

  return (
    <>
      <Header />

      <main className="relative bg-ink font-display text-cream">
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-ink/90 via-ink to-ink/90">
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1">
                <p className="tdc-eyebrow-mint mb-3">
                  {offer.category}
                </p>

                <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
                  {offer.name}
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fog">
                  {offer.description}
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <VisitCta
                    placement={`${data.slug}_hero`}
                  />

                  <Link
                    href="#features"
                    className="text-sm font-semibold text-cream/80 underline underline-offset-4"
                  >
                    Learn more
                  </Link>
                </div>

                <AffiliateNote className="mt-4 text-xs text-fog/80" />
              </div>

              <div className="order-1 mx-auto w-full lg:order-2">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                  <Image
                    src={data.visuals.hero}
                    alt={`${offer.name} hero`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VISUAL SHOWCASE */}
        <section className="px-4 py-14 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="tdc-eyebrow mb-4">
              Visual showcase
            </h2>

            <p className="max-w-2xl text-sm leading-relaxed text-fog">
              A curated selection of photos representing the listing and key
              visuals.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                data.visuals.portrait,
                data.visuals.wide,
                data.visuals.hero,
              ].map((src, i) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-2xl shadow-lg"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={src}
                      alt={`${offer.name} visual ${i + 1}`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-3">
                    <h3 className="font-bold">
                      {["Profiles", "Messaging", "Mobile"][i] ??
                        "Highlight"}
                    </h3>

                    <p className="mt-2 text-xs text-fog">
                      {[
                        "See how profiles appear on the listing.",
                        "Messaging tools and contact flows.",
                        "Use the service on mobile devices.",
                      ][i] ?? "Visual highlight"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="px-4 py-12 sm:px-6 lg:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="tdc-eyebrow mb-4">
                  About this listing
                </h2>

                <p className="text-2xl font-extrabold">
                  What to expect
                </p>

                <p className="mt-4 max-w-xl text-sm leading-relaxed text-fog">
                  {data.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {data.features.slice(0, 3).map((feature, index) => (
                    <li
                      key={feature.title}
                      className="flex items-start gap-3"
                    >
                      <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-rose/10 font-bold text-brand-rose">
                        {index + 1}
                      </div>

                      <div>
                        <p className="font-semibold">
                          {feature.title}
                        </p>

                        <p className="mt-1 text-sm text-fog">
                          {feature.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mx-auto w-full">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                  <Image
                    src={data.visuals.portrait}
                    alt={`${offer.name} about`}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section
          id="features"
          className="px-4 py-12 sm:px-6 lg:py-20"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="tdc-eyebrow mb-4">
              Key features
            </h2>

            <p className="max-w-2xl text-sm leading-relaxed text-fog">
              Important features highlighted simply.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {data.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl bg-ink-soft/60 p-6"
                >
                  <h3 className="text-lg font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm text-fog">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AUDIENCE */}
        <section className="px-4 py-12 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="tdc-eyebrow mb-4">
              Who it may suit
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {data.audience.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-cream/8 bg-ink-soft p-6"
                >
                  <h3 className="font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-fog">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONSIDERATIONS */}
        <section className="px-4 py-12 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="tdc-eyebrow mb-4">
              What to consider
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {data.considerations.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-cream/10 bg-ink p-6"
                >
                  <h3 className="font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-fog">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <CountryFaqSection
          eyebrow="FAQ"
          title="Common questions"
          variant="germany"
          items={data.faqs}
        />

        {/* FINAL CTA */}
        <section className="px-4 pb-24 pt-12 sm:px-6 lg:pb-32 lg:pt-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold">
              Ready to visit?
            </h2>

            <p className="mt-4 text-sm text-fog">
              Open the destination site to review profiles, messaging, and
              current terms. Adults 18+ only.
            </p>

            <div className="mt-8 flex justify-center">
              <VisitCta
                placement={`${data.slug}_final_cta`}
              />
            </div>

            <AffiliateNote className="mx-auto mt-4 max-w-md text-xs text-fog/70" />
          </div>
        </section>

        {/* COUNTRY LINKS */}
        <BrowseByCountrySection
          links={getCountryBrowseLinks("adult")}
          title="Adult dating listings by country"
          description="See how adult dating offers appear on live country pages."
        />
      </main>

      <Footer />
    </>
  );
}