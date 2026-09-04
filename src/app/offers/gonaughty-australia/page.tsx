"use client";

import Image from "next/image";
import Link from "next/link";
import { adultImages } from "@/data/adultOfferImages";
import FreeGayDatingSitesLanding from "@/components/landing/FreeGayDatingSitesLanding";
import { trackAffiliateClick } from "@/lib/analytics";

const HERO_BG = "https://assets.gonaughty.com/st/static/background.jpg";

const AFFILIATE_URL =
  "https://t.datsk9.com/358917/8570/0?po=6456&aff_sub5=SF_006OG000004lmDN";
const REL = "noopener noreferrer";
const OFFER_NAME = "GoNaughty";
const COUNTRY = "australia";

function Cta({
  label,
  variant = "rose",
  placement,
}: {
  label: string;
  variant?: "rose" | "ink" | "cream";
  placement: string;
}) {
  const styles = {
    rose: "bg-[#ff3d6e] text-white shadow-[0_16px_40px_rgba(255,61,110,0.32)] hover:bg-[#ff5a84]",
    ink: "bg-[#14110f] text-[#f7f3ee] hover:bg-[#2a2420]",
    cream:
      "bg-[#f7f3ee] text-[#14110f] shadow-[0_16px_40px_rgba(0,0,0,0.18)] hover:bg-white",
  };

  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel={REL}
      onClick={() => trackAffiliateClick(OFFER_NAME, placement, COUNTRY)}
      className={`group inline-flex min-h-[54px] w-full items-center justify-center gap-3 rounded-2xl px-8 text-[12px] font-bold uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 sm:w-auto ${styles[variant]}`}
    >
      <span>{label}</span>
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

const benefits = [
  {
    number: "01",
    title: "Australian dating focus",
    text: "Browse dating sites Australia visitors actually use — built around people looking to meet singles in Australia.",
    image: adultImages.portraitA,
  },
  {
    number: "02",
    title: "Casual dating Australia",
    text: "Prefer something low-pressure? GoNaughty is geared toward casual dating Australia and adult connections, not long questionnaires.",
    image: adultImages.portraitD,
  },
  {
    number: "03",
    title: "Adult dating, discreetly",
    text: "A compact adult dating Australia experience: explore profiles, message when you want, and keep the vibe private.",
    image: adultImages.portraitE,
  },
];

const steps = [
  {
    number: "01",
    title: "Join",
    text: "Open GoNaughty and create a profile in a few minutes.",
  },
  {
    number: "02",
    title: "Browse",
    text: "Look through Australian dating sites style profiles near you.",
  },
  {
    number: "03",
    title: "Connect",
    text: "Start a chat and see if online dating Australia feels like a match.",
  },
];

const ticker = [
  "Dating sites Australia",
  "Casual dating",
  "Adult dating",
  "Meet singles in Australia",
  "Online dating Australia",
  "Australian dating sites",
];

export default function GoNaughtyAustraliaPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3ee] font-sans text-[#14110f]">
      <div className="flex items-center justify-between border-b border-[#14110f]/10 px-5 py-3 sm:px-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#14110f]/45">
          GoNaughty · Australia
        </p>
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff3d6e]">
          Adults 18+
        </p>
      </div>

      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#14110f]/12 bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff3d6e]">
              Online dating Australia
            </p>
            <h1 className="mt-6 font-serif text-5xl font-normal leading-[0.92] tracking-tight text-[#14110f] sm:text-6xl lg:text-[4.6rem]">
              Meet new people
              <span className="block italic text-[#ff3d6e]">in Australia</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-[#14110f]/65">
              Looking for dating sites Australia can rely on? GoNaughty is a
              focused destination for online dating Australia — casual dating,
              adult dating, and a chance to meet singles in Australia on your
              terms.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Cta label="Join GoNaughty Free" placement="hero" />
              <p className="text-[11px] leading-5 text-[#14110f]/40">
                External destination · Affiliate disclosure
              </p>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden lg:min-h-[640px]">
            <Image
              src={HERO_BG}
              alt="Adult lifestyle portrait for Australian dating"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#14110f]/50 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[#f7f3ee]/40" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-[#14110f]/55 px-5 py-4 backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">
                Casual dating Australia
              </p>
              <p className="mt-1 font-serif text-xl italic text-white">
                Direct, discreet, no long forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-[#14110f]/10 bg-[#14110f] py-3">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap px-6">
          {[...ticker, ...ticker].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f7f3ee]/80"
            >
              {item}
              <span className="ml-10 text-[#ff3d6e]">●</span>
            </span>
          ))}
        </div>
      </div>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff3d6e]">
                Why GoNaughty
              </p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Compact benefits for{" "}
                <em className="text-[#ff3d6e]">Australian dating sites</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-[#14110f]/55">
              Built for people who want adult dating Australia without the
              clutter of apps that try to be everything.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map((item) => (
              <article
                key={item.number}
                className="group overflow-hidden rounded-[28px] bg-white shadow-[0_18px_50px_rgba(20,17,15,0.06)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#f7f3ee]/90 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-[#14110f]">
                    {item.number}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#14110f]/55">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#14110f] px-5 py-16 text-[#f7f3ee] sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-[32px]">
            <Image
              src={adultImages.portraitH}
              alt="Lifestyle portrait for casual dating Australia"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff3d6e]">
              Dating sites Australia
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
              Online dating Australia,{" "}
              <em className="text-[#ff8aa8]">without the noise</em>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-white/60">
              <p>
                Searching for Australian dating sites often means sorting through
                apps that try to be everything. GoNaughty keeps the focus on adult
                dating Australia and casual dating Australia — useful if you want
                to meet singles in Australia without a heavy matching process.
              </p>
              <p>
                Whether you are comparing dating sites Australia options or
                starting online dating Australia for the first time, a dedicated
                adult destination can make browsing profiles faster and more
                direct.
              </p>
            </div>
            <div className="mt-8">
              <Cta label="Browse GoNaughty" variant="rose" placement="mid-cta" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff3d6e]">
            How it works
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
            Three steps to{" "}
            <em className="text-[#ff3d6e]">meet singles in Australia</em>
          </h2>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.number}
                className="rounded-[28px] border border-[#14110f]/8 bg-white p-7"
              >
                <span className="font-serif text-4xl italic text-[#ff3d6e]">
                  {step.number}
                </span>
                <h3 className="mt-5 font-serif text-2xl tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#14110f]/55">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 pb-16 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px]">
          <div className="relative min-h-[420px]">
            <Image
              src={adultImages.portraitD}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-[#14110f]/72" />
            <div className="relative flex min-h-[420px] flex-col items-center justify-center px-6 py-16 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff8aa8]">
                Adult dating Australia
              </p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.02] text-white sm:text-5xl">
                Ready to join GoNaughty?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/65">
                Explore GoNaughty and see if it fits your search for casual
                dating Australia and Australian dating sites.
              </p>
              <div className="mt-8">
                <Cta label="Start on GoNaughty" variant="cream" placement="footer-cta" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#14110f]/10 px-5 py-8">
        <p className="mx-auto max-w-3xl text-center text-[11px] leading-6 text-[#14110f]/40">
          Affiliate disclosure: TheDateCompass may earn a commission if you
          visit GoNaughty through links on this page. Adults 18+ only.
          Availability, features, and terms are set by the destination site.{" "}
          <Link
            href="/affiliate-disclosure"
            className="underline underline-offset-2 hover:text-[#14110f]"
          >
            Read the full disclosure
          </Link>
        </p>
      </footer>

      <FreeGayDatingSitesLanding />
    </main>
  );
}
