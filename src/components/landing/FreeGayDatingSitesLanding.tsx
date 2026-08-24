"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, MessageCircle, Sparkles } from "lucide-react";

import { getOfferTabByRoute, type DatingOffer } from "@/data/datingOffersTabs";
import { trackAffiliateClick } from "@/lib/analytics";
import { getTrackedAffiliateUrl } from "@/lib/trafficstars";

const gayTab = getOfferTabByRoute("gay-dating")!;
const REL = "sponsored nofollow noopener noreferrer";

/** Confirmed “free to join” in existing gay dating sites offer data. */
const FREE_TO_JOIN_IDS = new Set(["gaybloom", "manfinder"]);

const HERO_IMG =
  "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=1400&q=80";

const offerImages: Record<string, string> = {
  gaybloom:
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
  pridepair:
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80",
  manfinder:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
  transdate:
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=80",
};

function useTrackedUrls(offers: DatingOffer[]) {
  const [urls, setUrls] = useState<Record<string, string>>(() =>
    Object.fromEntries(offers.map((o) => [o.id, o.url]))
  );

  useEffect(() => {
    setUrls(
      Object.fromEntries(
        offers.map((o) => [o.id, getTrackedAffiliateUrl(o.url)])
      )
    );
  }, [offers]);

  return urls;
}

function accessLabel(offer: DatingOffer) {
  return FREE_TO_JOIN_IDS.has(offer.id) ? "Free to join" : "Free to explore";
}

function OfferLink({
  offer,
  href,
  placement,
  className,
  children,
}: {
  offer: DatingOffer;
  href: string;
  placement: string;
  className: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel={REL}
      className={className}
      onClick={() => trackAffiliateClick(offer.name, placement)}
    >
      {children}
    </a>
  );
}

export default function FreeGayDatingSitesLanding() {
  const trackedUrls = useTrackedUrls(gayTab.offers);
  const featured = gayTab.offers.find((o) => o.featured) ?? gayTab.offers[0];

  return (

    <> 
    
    <div className="bg-page font-display text-ink">

{/* HERO */}
<section className="relative overflow-hidden border-b border-border">
  <div className="absolute inset-0 bg-gradient-to-br from-panel via-page to-page" />

  <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">

    {/* HERO CONTENT */}
    <div className="max-w-2xl">

      <div className="mb-5 flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
          Adults 18+
        </span>

        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
          Free Gay Dating
        </span>
      </div>

      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
        Online dating for gay singles
      </p>

      <h1 className="mt-4 max-w-2xl font-serif-accent text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
        Explore Free
        <span className="block text-accent">
          Gay Dating Sites
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">
        Discover free-to-explore dating platforms for gay singles and
        gay men. Compare options, browse your choices, and find a
        platform that fits the kind of connection you&apos;re looking for.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">

        <a
          href="#offers"
          className="group inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-accent px-6 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-accent2"
        >
          Explore Gay Dating
          <ArrowRight
            size={15}
            className="transition-transform group-hover:translate-x-1"
          />
        </a>

        <a
          href="#how-it-works"
          className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-border bg-panel px-6 text-[10px] font-bold uppercase tracking-[0.14em] text-ink transition hover:border-accent/40 hover:text-accent"
        >
          How It Works
        </a>

      </div>

      {/* QUICK INFO */}
      <div className="mt-9 grid max-w-lg grid-cols-3 divide-x divide-border border-y border-border py-4">

        <div className="pr-4">
          <p className="text-base font-bold text-ink">
            18+
          </p>

          <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-muted">
            Adults only
          </p>
        </div>

        <div className="px-4">
          <p className="text-base font-bold text-ink">
            Free
          </p>

          <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-muted">
            Explore options
          </p>
        </div>

        <div className="pl-4">
          <p className="text-base font-bold text-ink">
            Online
          </p>

          <p className="mt-1 text-[9px] uppercase tracking-[0.14em] text-muted">
            Gay dating
          </p>
        </div>

      </div>
    </div>

    {/* HERO IMAGE */}
    <div className="relative mx-auto w-full max-w-md">

      <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-3xl" />

      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-panel shadow-soft">

        <Image
          src={HERO_IMG}
          alt="Lifestyle portrait for online gay dating"
          fill
          priority
          sizes="(max-width: 1024px) 90vw, 420px"
          className="object-cover object-top"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">

          <div className="mb-3 h-1 w-10 rounded-full bg-accent" />

          <p className="font-serif-accent text-2xl leading-tight text-white">
            Gay dating,
            <span className="block text-accent">
              on your terms.
            </span>
          </p>

        </div>
      </div>
    </div>

  </div>
</section>


{/* FEATURED OFFERS */}
<section id="offers" className="px-5 py-14 sm:py-18 lg:px-8 lg:py-22">

  <div className="mx-auto max-w-6xl">

    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

      <div>

        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
          Featured platforms
        </p>

        <h2 className="mt-3 font-serif-accent text-3xl font-semibold leading-tight sm:text-4xl">
          Find a gay dating site
          <span className="block text-accent">
            that fits you.
          </span>
        </h2>

      </div>

      <p className="max-w-md text-sm leading-6 text-muted">
        Explore selected platforms for gay singles and discover
        different ways to meet people online.
      </p>

    </div>


    <div className="mt-9 grid gap-5 md:grid-cols-2">

      {gayTab.offers.map((offer, index) => (

        <article
          key={offer.id}
          className="group overflow-hidden rounded-2xl border border-border bg-panel shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-soft"
        >

          <div className="grid sm:grid-cols-[190px_1fr]">

            {/* IMAGE */}

            <div className="relative min-h-[240px] overflow-hidden sm:min-h-full">

              <Image
                src={offerImages[offer.id] ?? offer.logo}
                alt={`${offer.name} gay dating`}
                fill
                sizes="(max-width: 640px) 100vw, 190px"
                className="object-cover object-top transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent sm:bg-gradient-to-r" />

              <div className="absolute left-4 top-4">

                <span className="rounded-full bg-black/55 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur">
                  {accessLabel(offer)}
                </span>

              </div>

              <span className="absolute bottom-4 left-4 text-[9px] font-bold uppercase tracking-[0.15em] text-white/70">
                18+ Dating
              </span>

            </div>


            {/* CONTENT */}

            <div className="flex flex-col p-6">

              <div className="flex items-center justify-between">

                <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-accent">
                  {offer.badge}
                </span>

                <span className="text-[10px] text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>

              </div>

              <h3 className="mt-3 font-serif-accent text-2xl font-semibold">
                {offer.name}
              </h3>

              <p className="mt-1 text-sm font-medium text-accent">
                {offer.bestFor}
              </p>

              <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted">
                {offer.description}
              </p>

              <div className="mt-auto pt-6">

                <OfferLink
                  offer={offer}
                  href={trackedUrls[offer.id]}
                  placement={`free_gay_dating_sites_offer_${offer.id}`}
                  className="group/cta inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-accent2"
                >
                  Explore {offer.name}

                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover/cta:translate-x-1"
                  />

                </OfferLink>

              </div>

            </div>

          </div>

        </article>

      ))}

    </div>


    <p className="mt-5 text-center text-[10px] text-muted">
      Availability, features and pricing are determined by each
      destination platform.
    </p>

  </div>

</section>


{/* BENEFITS */}

<section className="border-y border-border bg-panel px-5 py-14 sm:py-18 lg:px-8">

  <div className="mx-auto max-w-6xl">

    <div className="max-w-2xl">

      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
        Why explore
      </p>

      <h2 className="mt-3 font-serif-accent text-3xl font-semibold sm:text-4xl">
        A simpler way to discover
        <span className="text-accent">
          {" "}gay dating.
        </span>
      </h2>

    </div>


    <div className="mt-9 grid gap-4 md:grid-cols-3">

      {[
        {
          icon: Sparkles,
          number: "01",
          title: "Free to explore",
          text: "Discover dating platforms that offer free-to-join or free-to-explore options.",
        },
        {
          icon: MessageCircle,
          number: "02",
          title: "Meet gay singles",
          text: "Explore platforms created around gay singles and men looking to connect online.",
        },
        {
          icon: Compass,
          number: "03",
          title: "Choose your pace",
          text: "Compare your options first and decide which platform works best for you.",
        },
      ].map(({ icon: Icon, number, title, text }) => (

        <div
          key={title}
          className="rounded-2xl border border-border bg-page p-6 transition hover:border-accent/30 hover:shadow-sm"
        >

          <div className="flex items-center justify-between">

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Icon size={18} />
            </div>

            <span className="text-[10px] font-bold tracking-[0.2em] text-muted">
              {number}
            </span>

          </div>

          <h3 className="mt-6 font-serif-accent text-2xl font-semibold">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-muted">
            {text}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>


{/* SEO CONTENT */}

<section className="px-5 py-14 sm:py-18 lg:px-8">

  <div className="mx-auto max-w-4xl">

    <div className="rounded-2xl border border-border bg-panel p-6 sm:p-8 lg:p-10">

      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
        Gay dating guide
      </p>

      <h2 className="mt-3 font-serif-accent text-3xl font-semibold leading-tight sm:text-4xl">
        Free gay dating sites,
        <span className="block text-accent">
          compared in one place.
        </span>
      </h2>

      <div className="mt-6 space-y-4 text-sm leading-7 text-muted sm:text-base">

        <p>
          Looking for free gay dating sites for men? Explore
          accessible gay dating listings and discover online
          platforms where gay singles can meet and start new
          conversations.
        </p>

        <p>
          Free gay dating can be a convenient way to explore
          different platforms before deciding where you want
          to create an account or connect with other people.
        </p>

        <p>
          Features, availability and pricing can vary between
          providers, so always review the destination platform
          before signing up.
        </p>

      </div>

    </div>

  </div>

</section>


{/* HOW IT WORKS */}

<section
  id="how-it-works"
  className="border-t border-border bg-panel px-5 py-14 sm:py-18 lg:px-8"
>

  <div className="mx-auto max-w-6xl">

    <div className="max-w-2xl">

      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
        How it works
      </p>

      <h2 className="mt-3 font-serif-accent text-3xl font-semibold sm:text-4xl">
        Discover. Compare. Connect.
      </h2>

    </div>


    <div className="mt-10 grid gap-6 md:grid-cols-3">

      {[
        {
          step: "01",
          title: "Discover",
          body: "Browse free gay dating listings and find platforms that match your interests.",
        },
        {
          step: "02",
          title: "Compare",
          body: "Review audience, features and access before choosing a destination.",
        },
        {
          step: "03",
          title: "Connect",
          body: "Continue to the partner platform and explore profiles and conversations.",
        },
      ].map((item) => (

        <div
          key={item.step}
          className="relative border-l-2 border-accent/30 pl-5"
        >

          <span className="text-[10px] font-bold tracking-[0.2em] text-accent">
            {item.step}
          </span>

          <h3 className="mt-3 font-serif-accent text-2xl font-semibold">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-muted">
            {item.body}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>


{/* FINAL CTA */}

<section className="px-5 py-8 lg:px-8">

  <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-accent/20 bg-panel">

    <div className="relative px-6 py-14 text-center sm:px-10 lg:py-18">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(233,52,105,0.10),transparent_50%)]" />

      <div className="relative">

        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-accent">
          Your next connection
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl font-serif-accent text-3xl font-semibold sm:text-5xl">
          Ready to explore
          <span className="block text-accent">
            free gay dating?
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted">
          Start with a featured listing and explore the platform
          to learn more about its signup options and features.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <OfferLink
            offer={featured}
            href={trackedUrls[featured.id]}
            placement="free_gay_dating_sites_footer"
            className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl bg-accent px-7 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white shadow-sm transition hover:bg-accent2"
          >
            Explore {featured.name}
            <ArrowRight size={15} />
          </OfferLink>

          <a
            href="#offers"
            className="inline-flex min-h-[50px] items-center justify-center rounded-xl border border-border bg-page px-7 text-[10px] font-bold uppercase tracking-[0.14em] text-ink transition hover:border-accent/40 hover:text-accent"
          >
            Compare Listings
          </a>

        </div>

      </div>

    </div>

  </div>

</section>


{/* DISCLOSURE */}

<section className="px-5 pb-14 lg:px-8">

  <p className="mx-auto max-w-3xl text-center text-[10px] leading-5 text-muted">

    Affiliate disclosure: TheDateCompass is an independent
    comparison site. We may earn a commission if you visit
    gay dating platforms through our links, at no extra cost
    to you. Offers are third-party services for adults 18+.

    {" "}

    <Link
      href="/affiliate-disclosure"
      className="text-accent underline decoration-accent/30 underline-offset-2 hover:text-accent2"
    >
      Full affiliate disclosure
    </Link>

  </p>

</section>

</div>
    </>
  );
}
