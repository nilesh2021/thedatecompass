"use client";

import Image from "next/image";
import { getOfferTabByRoute } from "@/data/datingOffersTabs";
import MarqueeBand from "@/components/theme/MarqueeBand";

const gayTab = getOfferTabByRoute("gay-dating")!;

const cardClass =
  "border border-cream/10 bg-ink-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-rose/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const eyebrowClass = "tdc-eyebrow";

const sectionTitleClass =
  "font-display text-4xl font-extrabold leading-tight text-cream md:text-5xl";

const btnPrimaryClass = "tdc-btn-primary";

const btnSecondaryClass =
  "inline-flex items-center gap-1.5 text-[0.9375rem] font-bold uppercase tracking-wider text-brand-mint transition-colors hover:text-cream";

const features = [
  {
    title: "Verified profiles",
    description:
      "Every platform we recommend prioritizes real people — with verification tools that cut through fake accounts.",
  },
  {
    title: "Inclusive matching",
    description:
      "Smart filters and community-focused design help you find men who share your interests and intentions.",
  },
  {
    title: "Private messaging",
    description:
      "Secure chat built for meaningful conversations, not endless small talk with strangers.",
  },
];

const steps = [
  {
    step: "01",
    title: "Choose your platform",
    description:
      "Browse our curated picks below — each rated for community quality, safety, and ease of use.",
  },
  {
    step: "02",
    title: "Create your profile",
    description:
      "Sign up in minutes. Add photos, set your preferences, and let the algorithm do the rest.",
  },
  {
    step: "03",
    title: "Start connecting",
    description:
      "Message matches, plan dates, and build something real — on your terms.",
  },
];

const testimonials = [
  {
    quote:
      "I was tired of apps that felt like an afterthought. GayBloom actually felt built for us — met my partner within three weeks.",
    name: "Marcus T.",
    location: "Chicago, IL",
  },
  {
    quote:
      "Clean interface, real people, no nonsense. Finally a list that doesn't waste your time with dead-end platforms.",
    name: "James R.",
    location: "Portland, OR",
  },
];

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);

  return (
    <span
      className="text-sm tracking-wide text-amber-600"
      aria-label={`${rating} out of 5 stars`}
    >
      {"★".repeat(full)}
      {"☆".repeat(5 - full)}
      <span className="ml-2 text-stone-500">{rating}</span>
    </span>
  );
}

export default function GayDatingLanding() {
  const featured = gayTab.offers.find((o) => o.featured) ?? gayTab.offers[0];

  return (
    <div className="font-display text-cream">
      {/* Hero */}
      <section className="tdc-section-pitch px-6 pb-20 pt-16 lg:px-10 lg:pb-32 lg:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className={`${eyebrowClass} mb-6`}>Gay dating · 2026</p>
            <h1
              className="mb-8 text-[clamp(2.75rem,6vw,4.75rem)] font-extrabold leading-[1.05]"
            >
              Find someone who{" "}
              <em className="font-serif-accent not-italic text-brand-rose">
                gets you.
              </em>
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-fog">
              We compared the top gay dating platforms so you can skip the noise
              and focus on real connections — with men who are actually looking.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimaryClass}
              >
                Try {featured.name} free
              </a>
              <a href="#offers" className={btnSecondaryClass}>
                Compare all platforms →
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden border border-cream/10 shadow-hero">
              <Image
                src="https://images.unsplash.com/photo-1624947834764-5e1dcb67c920?w=800&h=1000&fit=crop"
                alt="Two men enjoying a conversation"
                width={800}
                height={1000}
                className="aspect-[4/5] w-full object-cover"
                priority
              />
            </div>
            <div
              className={`${cardClass} absolute -bottom-6 -left-4 px-6 py-4 lg:-left-8`}
            >
              <p className="text-2xl font-bold text-cream">4.8★</p>
              <p className="text-sm text-fog">Average platform rating</p>
            </div>
          </div>
        </div>
        </section>

        <MarqueeBand
          items={[
            "Gay dating",
            "Verified profiles",
            "Real connections",
            "Community first",
            "Adults 18+",
          ]}
        />

      {/* Features */}
      <section className="tdc-section-stone px-6 py-20 text-ink lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <p className={`${eyebrowClass} mb-4 text-brand-rose`}>Why these platforms</p>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">
              Dating apps that put community first.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className={`${cardClass} border-ink/10 bg-cream p-10`}>
                <h3 className="mb-4 text-xl font-bold text-ink">{feature.title}</h3>
                <p className="leading-relaxed text-ink/65">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="offers" className="bg-ink px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-xl">
            <p className={`${eyebrowClass} mb-4`}>Top picks</p>
            <h2 className={`${sectionTitleClass} mb-4`}>
              Best gay dating sites ranked.
            </h2>
            <p className="text-lg leading-relaxed text-fog">{gayTab.seoIntro}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {gayTab.offers.map((offer, index) => (
              <a
                key={offer.id}
                href={offer.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardClass} flex h-full flex-col p-8 no-underline ${
                  offer.featured ? "ring-1 ring-brand-rose/30" : ""
                }`}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center overflow-hidden border border-cream/10 bg-ink">
                      <Image
                        src={offer.logo}
                        alt=""
                        width={56}
                        height={56}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-fog">
                        #{index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-cream">{offer.name}</h3>
                    </div>
                  </div>
                  {offer.badge && (
                    <span className="shrink-0 bg-brand-rose/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-rose">
                      {offer.badge}
                    </span>
                  )}
                </div>

                <StarRating rating={offer.rating} />
                <p className="mt-2 text-sm text-fog">{offer.reviews} reviews</p>

                <p className="mt-6 flex-1 leading-relaxed text-cream/65">
                  {offer.description}
                </p>

                <p className="mt-4 text-sm font-medium text-cream/80">
                  Best for: {offer.bestFor}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {offer.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="border border-cream/10 px-3 py-1 text-xs text-fog"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <span
                  className={`${btnPrimaryClass} mt-8 w-full text-center`}
                >
                  Visit {offer.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="tdc-section-stone px-6 py-20 text-ink lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-xl">
            <p className={`${eyebrowClass} mb-4 text-brand-rose`}>How it works</p>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">
              Three steps to your next date.
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {steps.map((item) => (
              <div key={item.step} className="space-y-4">
                <span className="font-display text-5xl text-brand-rose/30">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <p className="leading-relaxed text-ink/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-xl">
            <p className={`${eyebrowClass} mb-4`}>Real stories</p>
            <h2 className={sectionTitleClass}>What members are saying.</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.name} className={`${cardClass} p-10`}>
                <p className="mb-8 text-2xl font-medium leading-relaxed text-cream/85">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer>
                  <cite className="not-italic">
                    <span className="font-bold text-cream">{item.name}</span>
                    <span className="text-fog"> · {item.location}</span>
                  </cite>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className={`${cardClass} overflow-hidden`}>
            <div className="grid items-center gap-12 p-10 lg:grid-cols-2 lg:p-16">
              <div>
                <h2 className={`${sectionTitleClass} mb-6`}>
                  Ready to meet someone new?
                </h2>
                <p className="text-lg leading-relaxed text-fog">
                  Join thousands of gay men who found their match through our
                  top-rated platforms. Free to sign up — no credit card required.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:items-end">
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnPrimaryClass} px-10 py-4 text-base`}
                >
                  Get started with {featured.name}
                </a>
                <p className="text-sm text-fog">
                  Takes less than 2 minutes to create a profile
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
