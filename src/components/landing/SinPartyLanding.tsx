"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Lock,
  MonitorSmartphone,
  Sparkles,
  Video,
} from "lucide-react";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import NoiseOverlay from "@/components/theme/NoiseOverlay";

import { useTrackedAffiliateUrl } from "@/components/affiliate/TrackedAffiliateLink";
import { trackAffiliateClick } from "@/lib/analytics";

import {
  sinpartyFaqs,
  sinpartyFeatures,
  sinpartyOffer,
  sinpartySparks,
  sinpartySteps,
  sinpartyVisuals,
} from "@/data/sinpartyOffers";

const REL = "sponsored nofollow noopener noreferrer";

const primaryButton =
  "group inline-flex min-h-[58px] items-stretch overflow-hidden rounded-full bg-brand-rose text-cream shadow-[0_12px_40px_rgba(255,61,110,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-brand-rose-soft hover:shadow-[0_20px_50px_rgba(255,61,110,0.45)]";

const secondaryButton =
  "inline-flex min-h-[58px] items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 text-sm font-bold uppercase tracking-[0.1em] text-cream backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-brand-rose/50 hover:bg-white/[0.08]";

function SinPartyMark({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass = {
    sm: "text-sm",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <span
      className={`inline-flex items-baseline font-display font-black tracking-[-0.04em] ${sizeClass[size]} ${className}`}
      aria-label="SinParty"
    >
      <span className="text-cream">Sin</span>
      <span className="font-serif-accent font-normal italic text-brand-rose">
        Party
      </span>
    </span>
  );
}

function VisitCta({
  href,
  placement,
  className = primaryButton,
  label,
  compact = false,
}: {
  href: string;
  placement: string;
  className?: string;
  label?: string;
  compact?: boolean;
}) {
  const trackedHref = useTrackedAffiliateUrl(href, placement);
  const text = label ?? sinpartyOffer.ctaLabel;

  if (compact) {
    return (
      <a
        href={trackedHref}
        target="_blank"
        rel={REL}
        className={className}
        onClick={() => trackAffiliateClick(sinpartyOffer.name, placement)}
      >
        {text}
      </a>
    );
  }

  return (
    <a
      href={trackedHref}
      target="_blank"
      rel={REL}
      className={className}
      onClick={() => trackAffiliateClick(sinpartyOffer.name, placement)}
    >
      <span className="flex flex-1 items-center justify-center px-7 text-sm font-extrabold uppercase tracking-[0.1em]">
        {text}
      </span>
      <span className="flex w-14 shrink-0 items-center justify-center bg-black/15">
        <ArrowUpRight
          size={19}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </a>
  );
}

function AffiliateNote({ className = "" }: { className?: string }) {
  return (
    <p className={className}>
      Affiliate link · Adults 18+. TheDateCompass may earn a commission if you
      visit through this link.{" "}
      <Link
        href="/affiliate-disclosure"
        className="underline decoration-brand-rose/60 underline-offset-2 hover:text-brand-rose-soft"
      >
        Affiliate disclosure
      </Link>
    </p>
  );
}

const MARQUEE = [
  "Live cam",
  "Free to start",
  "Private",
  "Adults 18+",
  "SinParty",
  "Phone or desktop",
];

const sparkIcons = [Sparkles, Lock, MonitorSmartphone] as const;

export default function SinPartyLanding() {
  const heroCtaRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const node = heroCtaRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShowSticky(!entry.isIntersecting),
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[#12080d] text-cream">
        <NoiseOverlay />

        <section className="relative min-h-[780px] overflow-hidden lg:min-h-[880px]">
          <Image
            src={sinpartyVisuals.hero}
            alt="Adult portrait in low evening light"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_20%] lg:object-[70%_center]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#12080d] via-[#12080d]/78 to-[#12080d]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12080d] via-transparent to-[#12080d]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(255,61,110,0.2),transparent_46%)]" />

          <div className="relative mx-auto grid min-h-[780px] max-w-7xl items-center px-5 pb-28 pt-24 lg:min-h-[880px] lg:px-8 lg:pb-16 lg:pt-32">
            <div className="max-w-2xl">
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <SinPartyMark size="lg" />
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-rose/40 bg-brand-rose/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-rose-soft backdrop-blur-md">
                  <Video size={11} />
                  Adults 18+
                </span>
              </div>

              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-rose-soft">
                <span className="h-px w-8 bg-brand-rose/70" />
                Freemium live cam
              </p>

              <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">
                A live room, ready{" "}
                <span className="font-serif-accent font-normal italic text-brand-rose-soft">
                  when you are.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-fog sm:text-lg">
                {sinpartyOffer.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {sinpartyOffer.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold text-cream/90 backdrop-blur-md"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div
                ref={heroCtaRef}
                className="mt-9 flex flex-col gap-3 sm:flex-row"
              >
                <VisitCta href={sinpartyOffer.url} placement="lp_hero" />
                <a href="#how-it-works" className={secondaryButton}>
                  See how it works
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-fog/80">
                <span className="flex items-center gap-2">
                  <Sparkles size={14} className="text-brand-rose" />
                  {sinpartyOffer.promo}
                </span>
                <span className="flex items-center gap-2">
                  <MonitorSmartphone size={14} className="text-brand-rose/80" />
                  {sinpartyOffer.availability}
                </span>
              </div>

              <AffiliateNote className="mt-4 max-w-md text-[11px] leading-5 text-fog/60" />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10 bg-[#1a0c12]">
          <div className="flex animate-marquee py-4 text-brand-rose-soft/80">
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="whitespace-nowrap px-7 text-[0.72rem] font-bold uppercase tracking-[0.22em] after:ml-7 after:opacity-70 after:content-['•']"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="relative border-b border-white/10 bg-[#1a0c12]">
          <div className="mx-auto grid max-w-7xl divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {sinpartySparks.map((spark, index) => {
              const Icon = sparkIcons[index] ?? Video;
              return (
                <div key={spark.title} className="flex gap-4 px-6 py-8 lg:px-10">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-rose/15 text-brand-rose-soft">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h2 className="font-bold">{spark.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-fog">{spark.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section
          id="how-it-works"
          className="scroll-mt-24 border-b border-white/10 px-5 py-16 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-rose-soft">
                Three moves
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                From this page to{" "}
                <span className="font-serif-accent font-normal italic text-brand-rose-soft">
                  a live room
                </span>
              </h2>
              <p className="mt-4 text-sm leading-6 text-fog sm:text-base">
                Confirm your age, continue to SinParty, and start free. Paid
                options stay on the provider site.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {sinpartySteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-rose/40"
                >
                  <p className="font-serif-accent text-5xl italic text-brand-rose/80">
                    {item.step}
                  </p>
                  <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-fog">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <VisitCta
                href={sinpartyOffer.url}
                placement="lp_steps"
                label="Continue to SinParty"
              />
            </div>
          </div>
        </section>

        <section
          id="benefits"
          className="relative scroll-mt-24 border-b border-white/10 px-5 py-16 lg:px-8 lg:py-24"
        >
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-brand-rose/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={sinpartyVisuals.portrait}
                    alt="Adult looking toward the camera"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12080d]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-md">
                    Free to start
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-rose-soft">
                What you get
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Live cam,{" "}
                <span className="font-serif-accent font-normal italic text-brand-rose-soft">
                  free to start
                </span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-fog sm:text-base">
                SinParty is a new freemium live cam platform. TheDateCompass
                introduces the site. The rooms, accounts, and prices live on
                SinParty.
              </p>

              <div className="mt-8 space-y-3">
                {sinpartyFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-brand-rose/35"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-rose/15 text-brand-rose-soft">
                      <Check size={15} />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold">{feature.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-fog">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <VisitCta
                  href={sinpartyOffer.url}
                  placement="lp_benefits"
                  label="Open SinParty"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-white/10">
          <div className="relative min-h-[460px]">
            <Image
              src={sinpartyVisuals.wide}
              alt="Adult in warm evening light"
              fill
              sizes="100vw"
              className="object-cover object-[center_20%]"
            />
            <div className="absolute inset-0 bg-[#12080d]/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#12080d] via-[#12080d]/75 to-[#12080d]/25" />

            <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-5 py-16 lg:px-8">
              <div className="max-w-xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-rose-soft">
                  Start when you want
                </p>
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  Open a live room and{" "}
                  <span className="font-serif-accent font-normal italic text-brand-rose-soft">
                    stay private.
                  </span>
                </h2>
                <p className="mt-5 text-sm leading-7 text-fog sm:text-base">
                  Continue to SinParty, confirm you are 18 or older, and start
                  free. Check any paid features on the site before you buy.
                </p>
                <div className="mt-8">
                  <VisitCta
                    href={sinpartyOffer.url}
                    placement="lp_banner"
                    label="Visit SinParty"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-24 px-5 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-brand-rose-soft">
              Before you join
            </p>
            <h2 className="mb-10 text-center text-3xl font-black tracking-tight md:text-4xl">
              Questions, answered
            </h2>
            <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.03] px-6 sm:px-8">
              {sinpartyFaqs.map((faq) => (
                <div key={faq.question} className="py-6">
                  <h3 className="text-base font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fog">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 pt-2 lg:pb-28">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] border border-brand-rose/30 bg-gradient-to-br from-[#2a1020] to-[#12080d] px-8 py-14 text-center lg:px-12">
            <Video
              size={28}
              className="mx-auto mb-4 text-brand-rose"
              aria-hidden
            />
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Start free on SinParty.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-fog md:text-base">
              A new freemium live cam platform for adults. Continue to the
              site, confirm you are 18 or older, and open a room when you are
              ready.
            </p>
            <div className="mt-8 flex justify-center">
              <VisitCta
                href={sinpartyOffer.url}
                placement="lp_end"
                label="Visit SinParty"
              />
            </div>
            <AffiliateNote className="mt-5 text-[11px] text-fog/60" />
          </div>
        </section>
      </main>

      <div
        className={`fixed bottom-0 left-0 right-0 z-40 border-t border-cream/10 bg-[#1a0c12]/95 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-transform duration-300 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden ${
          showSticky
            ? "translate-y-0"
            : "pointer-events-none translate-y-full"
        }`}
        role="region"
        aria-label="Offer call to action"
        aria-hidden={!showSticky}
      >
        <VisitCta
          href={sinpartyOffer.url}
          placement="lp_sticky"
          compact
          label="Visit SinParty"
          className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-brand-rose px-6 text-sm font-extrabold uppercase tracking-[0.1em] text-cream shadow-[0_12px_40px_rgba(255,61,110,0.35)]"
        />
      </div>

      <Footer />
    </>
  );
}
