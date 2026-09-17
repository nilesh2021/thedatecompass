import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Heart,
  MessageCircle,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import Header from "@/components/Home/Header";
import { adultImages } from "@/data/adultOfferImages";
import { usaOffers } from "@/data/usaOffers";

const SITE_URL = "https://www.thedatecompass.com";
const PAGE_URL = `${SITE_URL}/usa-dating-sites`;
const OG_IMAGE = `${SITE_URL}${adultImages.alt}`;

const FEATURED_NAMES = [
  "CheekyCrush",
  "LitLatinz",
  "GayBloom",
  "Grannyhunter",
] as const;

const featuredOffers = FEATURED_NAMES.map((name) =>
  usaOffers.find((offer) => offer.name === name)
).filter((offer): offer is (typeof usaOffers)[number] => Boolean(offer));

const categories = [
  {
    title: "Serious Dating",
    description: "Mature platforms for slower, intentional connections.",
    Icon: Heart,
    offer: usaOffers.find((o) => o.name === "Grannyhunter"),
  },
  {
    title: "Casual Dating",
    description: "Low-pressure spaces for chemistry and easy conversation.",
    Icon: Sparkles,
    offer: usaOffers.find((o) => o.name === "CheekyCrush"),
  },
  {
    title: "Social Discovery",
    description: "Open, social-first platforms for meeting new people.",
    Icon: Users,
    offer: usaOffers.find((o) => o.name === "RealSexClub"),
  },
  {
    title: "LGBTQ+ Dating",
    description: "Inclusive communities built for gay and queer daters.",
    Icon: MessageCircle,
    offer: usaOffers.find((o) => o.name === "GayBloom"),
  },
] as const;

export const metadata: Metadata = {
  title: {
    absolute: "Dating Sites in the USA | TheDateCompass",
  },
  description:
    "Explore dating sites and dating platforms available in the USA. Compare featured services and discover your next connection.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "Dating Sites in the USA | TheDateCompass",
    description:
      "Explore dating sites and dating platforms available in the USA. Compare featured services and discover your next connection.",
    url: PAGE_URL,
    siteName: "TheDateCompass",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Dating sites in the USA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dating Sites in the USA | TheDateCompass",
    description:
      "Explore dating sites and dating platforms available in the USA. Compare featured services and discover your next connection.",
    images: [OG_IMAGE],
  },
};

export default function UsaDatingSitesPage() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-x-hidden bg-[#05060c] text-white antialiased">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-24 top-0 h-[32rem] w-[32rem] rounded-full bg-fuchsia-600/25 blur-[140px]" />
          <div className="absolute right-[-8rem] top-40 h-[28rem] w-[28rem] rounded-full bg-indigo-600/30 blur-[130px]" />
          <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-rose-500/15 blur-[120px]" />
        </div>

        <section className="relative isolate px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-pink-200/90 backdrop-blur-md">
                🇺🇸 USA Dating
              </p>
              <h1 className="mt-7 max-w-xl font-serif text-[2.7rem] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                Discover Your Next{" "}
                <span className="bg-gradient-to-r from-pink-300 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent">
                  Connection
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
                Explore dating sites and platforms available across the USA.
              </p>
              <a
                href="#featured"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-indigo-500 px-7 py-4 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-white shadow-[0_0_40px_rgba(236,72,153,0.35)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_55px_rgba(168,85,247,0.45)]"
              >
                Explore Dating Sites
                <span className="transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-6 rounded-[2.2rem] bg-gradient-to-br from-pink-500/30 via-violet-500/20 to-sky-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative h-[22rem] overflow-hidden rounded-[1.5rem] sm:h-[28rem]">
                  <Image
                    src={adultImages.alt}
                    alt="USA dating lifestyle"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05060c] via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-black/40 px-4 py-3 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.18em] text-pink-200/80">
                      Curated for USA
                    </p>
                    <p className="mt-1 font-serif text-xl">
                      Premium dating discovery
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="featured" className="scroll-mt-24 px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-pink-300/80">
              Featured
            </p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
              Featured Dating Sites
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {featuredOffers.map((offer) => (
                <article
                  key={offer.name}
                  className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-pink-400/40 hover:shadow-[0_0_40px_rgba(236,72,153,0.18)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={offer.image}
                      alt={offer.name}
                      fill
                      sizes="(max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090f] via-black/20 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-2xl">{offer.name}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/60">
                      {offer.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {offer.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={offer.href}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-indigo-500"
                    >
                      Visit Site
                      <span className="transition duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="max-w-2xl font-serif text-4xl font-semibold sm:text-5xl">
              Find the Right Dating Experience
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map(({ title, description, Icon, offer }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-xl"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-pink-500/15 text-pink-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {description}
                  </p>
                  {offer ? (
                    <a
                      href={offer.href}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="mt-5 inline-flex text-xs font-bold uppercase tracking-[0.14em] text-pink-200 transition hover:text-white"
                    >
                      {offer.name} →
                    </a>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-serif text-4xl font-semibold sm:text-5xl">
              How it works
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  n: "01",
                  title: "Explore",
                  text: "Browse dating platforms.",
                  Icon: Search,
                },
                {
                  n: "02",
                  title: "Compare",
                  text: "Find the experience that suits you.",
                  Icon: Compass,
                },
                {
                  n: "03",
                  title: "Connect",
                  text: "Visit the platform and get started.",
                  Icon: Heart,
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl"
                >
                  <p className="text-sm font-bold tracking-[0.2em] text-fuchsia-300/80">
                    {step.n}
                  </p>
                  <step.Icon className="mt-5 h-6 w-6 text-sky-200" />
                  <h3 className="mt-4 font-serif text-3xl">{step.title}</h3>
                  <p className="mt-2 text-white/60">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 lg:px-12">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 px-6 py-16 text-center sm:px-12">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-fuchsia-700 to-pink-600" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22),transparent_40%)]" />
            <div className="relative">
              <h2 className="font-serif text-4xl font-semibold sm:text-6xl">
                Ready to Meet Someone New?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/80">
                Explore dating platforms available in the USA.
              </p>
              <a
                href="#featured"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[0.78rem] font-bold uppercase tracking-[0.14em] text-ink transition hover:-translate-y-0.5"
              >
                Explore Now
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 text-sm text-white/50 sm:flex-row sm:items-center">
            <Link href="/" className="font-serif text-lg text-white">
              TheDateCompass
            </Link>
            <nav className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-white">
                Terms
              </Link>
              <Link href="/affiliate-disclosure" className="hover:text-white">
                Affiliate Disclosure
              </Link>
              <Link href="/disclaimer" className="hover:text-white">
                Disclaimer
              </Link>
            </nav>
          </div>
        </footer>
      </main>
    </>
  );
}
