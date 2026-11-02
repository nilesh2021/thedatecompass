"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Heart,
  MapPin,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";

import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import NoiseOverlay from "@/components/theme/NoiseOverlay";

import { useTrackedAffiliateUrl } from "@/components/affiliate/TrackedAffiliateLink";
import { trackAffiliateClick } from "@/lib/analytics";
import { appendGoPlacement } from "@/lib/affiliateUrl";

import {
  singleflirtFaqs,
  singleflirtFeatures,
  singleflirtOffer,
  singleflirtSparks,
  singleflirtSteps,
  singleflirtVisuals,
} from "@/data/singleflirtOffers";

const REL = "sponsored nofollow noopener noreferrer";

const primaryButton =
  "group inline-flex min-h-[58px] items-stretch overflow-hidden rounded-full bg-brand-rose text-cream shadow-[0_12px_40px_rgba(255,61,110,0.35)] transition duration-300 hover:-translate-y-1 hover:bg-brand-rose-soft hover:shadow-[0_20px_50px_rgba(255,61,110,0.45)]";

const secondaryButton =
  "inline-flex min-h-[58px] items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 text-sm font-bold uppercase tracking-[0.1em] text-cream backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-brand-rose/50 hover:bg-white/[0.08]";

function SingleflirtMark({
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
      aria-label="Singleflirt"
    >
      <span className="text-cream">Single</span>
      <span className="font-serif-accent font-normal italic text-brand-rose">
        flirt
      </span>
    </span>
  );
}

function VisitCta({
  href,
  placement,
  className = primaryButton,
  label,
}: {
  href: string;
  placement: string;
  className?: string;
  label?: string;
}) {
  const trackedHref = useTrackedAffiliateUrl(href, placement);
  return (
    <a
      href={trackedHref}
      target="_blank"
      rel={REL}
      className={className}
      onClick={() => trackAffiliateClick(singleflirtOffer.name, placement)}
    >
      <span className="flex flex-1 items-center justify-center px-7 text-sm font-extrabold uppercase tracking-[0.1em]">
        {label ?? singleflirtOffer.ctaLabel}
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
  "Say hi",
  "Local singles",
  "Private chat",
  "Adults 18+",
  "Singleflirt",
  "Real dates",
];

export default function SingleflirtLanding() {
  const affiliateUrl = useTrackedAffiliateUrl(singleflirtOffer.url);

  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-[#12080d] text-cream">
        <NoiseOverlay />

        <section className="relative min-h-[780px] overflow-hidden lg:min-h-[880px]">
          <Image
            src={singleflirtVisuals.hero}
            alt="Woman looking toward the camera"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_20%] lg:object-[70%_center]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#12080d] via-[#12080d]/75 to-[#12080d]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12080d] via-transparent to-[#12080d]/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(255,61,110,0.16),transparent_46%)]" />

          <div className="relative mx-auto grid min-h-[780px] max-w-7xl items-center gap-12 px-5 pb-28 pt-24 lg:min-h-[880px] lg:grid-cols-[1.15fr_0.75fr] lg:px-8 lg:pb-16 lg:pt-32">
            <div className="max-w-2xl">
              <div className="mb-7 flex flex-wrap items-center gap-3">
                <SingleflirtMark size="lg" />
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-rose/40 bg-brand-rose/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-rose-soft backdrop-blur-md">
                  <Heart size={11} />
                  Adults 18+
                </span>
              </div>

              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-rose-soft">
                <span className="h-px w-8 bg-brand-rose/70" />
                Online dating
              </p>

              <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-5xl lg:text-[3.5rem]">
                The first hello is the{" "}
                <span className="font-serif-accent font-normal italic text-brand-rose-soft">
                  hard part.
                </span>{" "}
                Singleflirt makes it easy.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-fog sm:text-lg">
                {singleflirtOffer.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {singleflirtOffer.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-xs font-semibold text-cream/90 backdrop-blur-md"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <VisitCta href={affiliateUrl} placement="lp_hero" />
                <a href="#how-it-works" className={secondaryButton}>
                  See how it works
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-fog/80">
                <span className="flex items-center gap-2">
                  <Sparkles size={14} className="text-brand-rose" />
                  {singleflirtOffer.promo}
                </span>
                <span className="flex items-center gap-2">
                  <Zap size={14} className="text-brand-rose/80" />
                  {singleflirtOffer.availability}
                </span>
              </div>

              <AffiliateNote className="mt-5 max-w-md text-[11px] leading-5 text-fog/60" />
            </div>

            <div className="relative mx-auto w-full max-w-[360px]">
              <div className="absolute -inset-4 rounded-[2rem] bg-brand-rose/30 opacity-70 blur-3xl" />

              <a
                href={appendGoPlacement(affiliateUrl, "lp_hero")}
                target="_blank"
                rel={REL}
                onClick={() =>
                  trackAffiliateClick(singleflirtOffer.name, "lp_hero")
                }
                className="group relative block overflow-hidden rounded-[1.8rem] border border-white/15 bg-black/30 shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={singleflirtVisuals.portrait}
                    alt="Portrait of a woman"
                    fill
                    priority
                    sizes="(max-width: 1024px) 360px, 400px"
                    className="object-cover object-center transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12080d] via-transparent to-[#12080d]/10" />
                  <span className="absolute left-4 top-4 rounded-full bg-brand-rose px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-cream shadow-lg shadow-brand-rose/40">
                    {singleflirtOffer.badge}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur-md">
                      <p className="text-sm font-bold">Someone nearby is online</p>
                      <p className="mt-1 text-xs text-fog">
                        Open Singleflirt and say hi →
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div
            className="overflow-hidden border-y border-brand-rose/30 bg-brand-rose text-cream"
            aria-hidden
          >
            <div className="flex w-max animate-marquee py-3.5">
              {[...MARQUEE, ...MARQUEE].map((item, i) => (
                <span
                  key={`${item}-${i}`}
                  className="whitespace-nowrap px-7 text-[0.72rem] font-bold uppercase tracking-[0.22em] after:ml-7 after:opacity-70 after:content-['♥']"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="relative border-b border-white/10 bg-[#1a0c12]">
          <div className="mx-auto grid max-w-7xl divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              {
                icon: MapPin,
                title: "Close enough to meet",
                text: singleflirtSparks[0].text,
              },
              {
                icon: MessageCircle,
                title: "Chat with a pulse",
                text: singleflirtSparks[1].text,
              },
              {
                icon: Heart,
                title: "A date, not a pen pal",
                text: singleflirtSparks[2].text,
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 px-6 py-8 lg:px-10">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-rose/15 text-brand-rose-soft">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-fog">{text}</p>
                </div>
              </div>
            ))}
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
                From profile to{" "}
                <span className="font-serif-accent font-normal italic text-brand-rose-soft">
                  a plan
                </span>
              </h2>
              <p className="mt-4 text-sm leading-6 text-fog sm:text-base">
                Singleflirt keeps the path short: show up, start a
                conversation, and meet if you both want to.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {singleflirtSteps.map((item) => (
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
                href={affiliateUrl}
                placement="lp_mid"
                label="Join Singleflirt"
              />
            </div>
          </div>
        </section>

        <section
          id="features"
          className="relative scroll-mt-24 border-b border-white/10 px-5 py-16 lg:px-8 lg:py-24"
        >
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-brand-rose/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={singleflirtVisuals.side}
                    alt="Woman smiling at the camera"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12080d]/85 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] backdrop-blur-md">
                    Meet singles nearby
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-rose-soft">
                Why it works
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Flirt like you mean{" "}
                <span className="font-serif-accent font-normal italic text-brand-rose-soft">
                  to meet
                </span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-fog sm:text-base">
                Singleflirt is a dating site for adults who want a relationship,
                a date, or a new connection. You set the pace. TheDateCompass
                only introduces the site.
              </p>

              <div className="mt-8 space-y-3">
                {singleflirtFeatures.map((feature) => (
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
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-white/10">
          <div className="relative min-h-[460px]">
            <Image
              src={singleflirtVisuals.wide}
              alt="Couple close together"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[#12080d]/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#12080d] via-[#12080d]/75 to-[#12080d]/25" />

            <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-5 py-16 lg:px-8">
              <div className="max-w-xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-rose-soft">
                  Tonight is a fine time
                </p>
                <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                  Someone nearby is waiting on a{" "}
                  <span className="font-serif-accent font-normal italic text-brand-rose-soft">
                    better opener.
                  </span>
                </h2>
                <p className="mt-5 text-sm leading-7 text-fog sm:text-base">
                  Open Singleflirt, make the profile, and send the message you
                  have been rehearsing.
                </p>
                <div className="mt-8">
                  <VisitCta
                    href={affiliateUrl}
                    placement="lp_mid"
                    label="Start flirting"
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
              {singleflirtFaqs.map((faq) => (
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
            <Heart
              size={28}
              className="mx-auto mb-4 text-brand-rose"
              aria-hidden
            />
            <h2 className="text-3xl font-black tracking-tight md:text-5xl">
              Go on. Say hi.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-fog md:text-base">
              Join Singleflirt, browse singles nearby, and send the message
              that starts the date.
            </p>
            <div className="mt-8 flex justify-center">
              <VisitCta
                href={affiliateUrl}
                placement="lp_end"
                label="Join Singleflirt"
              />
            </div>
            <AffiliateNote className="mt-5 text-[11px] text-fog/60" />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
