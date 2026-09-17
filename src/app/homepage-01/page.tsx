"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Globe,
  Heart,
  Mail,
  Menu,
  Search,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

import BrandLogo from "@/components/Home/BrandLogo";
import { adultImages } from "@/data/adultOfferImages";
import { dreamzOffer } from "@/data/aiGirlfriendOffers";
import { australiaOffers } from "@/data/countries/australia";
import { canadaOffers } from "@/data/countries/canada";
import { ukOffers } from "@/data/countries/uk";
import { germanyOffers } from "@/data/germanyOffers";
import { usaOffers } from "@/data/usaOffers";
import { trackAffiliateClick } from "@/lib/analytics";

type CountrySlug = "usa" | "canada" | "uk" | "germany" | "australia";
type Intent =
  | "dating"
  | "casual"
  | "adult"
  | "lgbtq"
  | "ai"
  | "international";

type Platform = {
  name: string;
  category: string;
  description: string;
  image: string;
  href: string;
  rating: number;
  features: string[];
};

const COUNTRIES: { slug: CountrySlug; name: string; flag: string }[] = [
  { slug: "usa", name: "USA", flag: "🇺🇸" },
  { slug: "canada", name: "Canada", flag: "🇨🇦" },
  { slug: "uk", name: "UK", flag: "🇬🇧" },
  { slug: "germany", name: "Germany", flag: "🇩🇪" },
  { slug: "australia", name: "Australia", flag: "🇦🇺" },
];

const INTENTS: { id: Intent; label: string }[] = [
  { id: "dating", label: "Dating" },
  { id: "casual", label: "Casual Dating" },
  { id: "adult", label: "Adult Dating" },
  { id: "lgbtq", label: "LGBTQ+" },
  { id: "ai", label: "AI Companions" },
  { id: "international", label: "International" },
];

const CATEGORY_TILES: {
  id: Intent;
  label: string;
  href?: string;
  hint: string;
}[] = [
  { id: "dating", label: "Dating", href: "/top-offers", hint: "Mainstream comparison" },
  { id: "casual", label: "Casual Dating", href: "/top-offers", hint: "Low-pressure chats" },
  { id: "adult", label: "Adult Dating", href: "/top-offers/adult", hint: "Direct connections" },
  { id: "lgbtq", label: "LGBTQ+", href: "/gay-dating", hint: "Inclusive platforms" },
  { id: "ai", label: "AI Companions", href: "/category/ai-girlfriend", hint: "Private AI chat" },
  { id: "international", label: "International", hint: "Browse by country" },
];

const FAQS = [
  {
    q: "What is TheDateCompass?",
    a: "TheDateCompass is an independent dating-site comparison directory for adults. We help you discover platforms and AI companion services by country so you can choose a better fit before you click through.",
  },
  {
    q: "Is TheDateCompass a dating website?",
    a: "No. We do not host profiles, chats, or memberships. We compare third-party dating platforms and send you to the provider you choose.",
  },
  {
    q: "Why browse by country?",
    a: "Availability, eligibility, pricing, and member focus can vary by region. Country selection keeps the shortlist relevant to where you are.",
  },
  {
    q: "How do affiliate links work?",
    a: "Some Visit Site links are affiliate links. If you join a partner platform through them, we may earn a commission at no extra cost to you. We do not operate the listed sites.",
  },
  {
    q: "Do you list AI companion platforms?",
    a: "Yes. Alongside traditional dating sites, we compare AI companion and AI girlfriend platforms for private chats and custom personalities.",
  },
  {
    q: "Can I find LGBTQ+ options?",
    a: "Yes. Comparisons include gay dating and inclusive LGBTQ+ platforms. Use the LGBTQ+ intent filter or the gay dating category pages.",
  },
];

const DEFAULT_RATING = 4.5;

function uniqueByName(list: Platform[]): Platform[] {
  return list.filter(
    (item, index) =>
      list.findIndex((other) => other.name.toLowerCase() === item.name.toLowerCase()) ===
      index
  );
}

function chipsFromCategory(category: string, extra?: string[]): string[] {
  const base = category
    .split(/[&,/]/)
    .map((part) => part.trim())
    .filter(Boolean)
    .slice(0, 2);
  return [...base, ...(extra ?? [])].slice(0, 3);
}

function normalizeUsa(): Platform[] {
  return uniqueByName(
    usaOffers.map((offer) => ({
      name: offer.name,
      category: offer.category,
      description: offer.description,
      image: offer.image,
      href: offer.href,
      rating: offer.rating ?? DEFAULT_RATING,
      features: chipsFromCategory(offer.category, offer.tags),
    }))
  );
}

function normalizeList(
  items: { name: string; category: string; description?: string; image: string; href?: string; affiliateLink?: string; points?: string[] }[]
): Platform[] {
  return uniqueByName(
    items.map((offer) => ({
      name: offer.name,
      category: offer.category,
      description: offer.description ?? offer.points?.[0] ?? `${offer.name} listing`,
      image: offer.image,
      href: offer.href ?? offer.affiliateLink ?? "#",
      rating: DEFAULT_RATING,
      features: chipsFromCategory(offer.category, offer.points?.slice(0, 2)),
    }))
  );
}

const INVENTORY: Record<CountrySlug, Platform[]> = {
  usa: normalizeUsa(),
  canada: normalizeList(canadaOffers),
  uk: normalizeList(ukOffers),
  germany: normalizeList(
    germanyOffers.map((offer) => ({
      ...offer,
      description: offer.points[0],
      href: offer.affiliateLink,
    }))
  ),
  australia: normalizeList(australiaOffers),
};

const AI_PLATFORM: Platform = {
  name: dreamzOffer.name,
  category: dreamzOffer.badge,
  description: dreamzOffer.description,
  image: adultImages.aiCompanion,
  href: dreamzOffer.url,
  rating: 4.7,
  features: dreamzOffer.highlights.slice(0, 3),
};

function matchesIntent(platform: Platform, intent: Intent): boolean {
  const key = `${platform.name} ${platform.category} ${platform.description}`.toLowerCase();
  if (intent === "international") return true;
  if (intent === "ai") {
    return key.includes("ai") || key.includes("dreamz") || key.includes("companion");
  }
  if (intent === "lgbtq") {
    return (
      key.includes("gay") ||
      key.includes("lgbt") ||
      key.includes("trans") ||
      key.includes("inclusive") ||
      key.includes("men looking")
    );
  }
  if (intent === "casual") return key.includes("casual");
  if (intent === "adult") {
    return key.includes("adult") || key.includes("mature") || key.includes("milf");
  }
  return !key.includes("ai") && !key.includes("dreamz");
}

function selectShortlist(
  country: CountrySlug,
  intent: Intent,
  query: string
): Platform[] {
  const inventory =
    intent === "ai"
      ? uniqueByName([AI_PLATFORM, ...INVENTORY[country]])
      : INVENTORY[country];

  const q = query.trim().toLowerCase();
  let list = inventory.filter((item) => matchesIntent(item, intent));
  if (q) {
    list = list.filter((item) =>
      `${item.name} ${item.category} ${item.description}`.toLowerCase().includes(q)
    );
  }
  if (list.length === 0) {
    list = q
      ? inventory.filter((item) =>
          `${item.name} ${item.category}`.toLowerCase().includes(q)
        )
      : inventory;
  }
  return uniqueByName(list).slice(0, 5);
}

const selectClass =
  "h-11 w-full rounded-xl border border-white/10 bg-black/50 px-3 text-sm text-white outline-none transition focus:border-[#E83E9B]/70";

export default function Homepage01() {
  const [country, setCountry] = useState<CountrySlug>("usa");
  const [intent, setIntent] = useState<Intent>("dating");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const countryMeta = COUNTRIES.find((item) => item.slug === country)!;
  const platforms = useMemo(
    () => selectShortlist(country, intent, query),
    [country, intent, query]
  );

  const goToPlatforms = () => {
    document.getElementById("platforms")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const onVisit = (name: string) => {
    trackAffiliateClick(name, "homepage-01", countryMeta.name);
  };

  return (
    <div className="min-h-screen bg-[#050505] font-display text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/92 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
          <BrandLogo dark icon="heart" />
          <nav className="hidden items-center gap-5 text-[13px] text-white/65 lg:flex">
            <Link href="/top-offers" className="hover:text-white">Dating</Link>
            <Link href="/top-offers/adult" className="hover:text-white">Adult Dating</Link>
            <Link href="/category/ai-girlfriend" className="hover:text-white">AI Companions</Link>
            <a href="#countries" className="hover:text-white">Countries</a>
            <a href="#categories" className="hover:text-white">Categories</a>
          </nav>
          <div className="ml-auto hidden items-center gap-2 md:flex">
            <label className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={goToPlatforms}
                placeholder="Search platforms"
                className="h-10 w-44 rounded-full border border-white/10 bg-white/5 pl-9 pr-3 text-xs text-white placeholder:text-white/35 outline-none focus:border-[#E83E9B]/60 lg:w-52"
              />
            </label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value as CountrySlug)}
              className="h-10 rounded-full border border-white/10 bg-white/5 px-3 text-xs text-white"
              aria-label="Country"
            >
              {COUNTRIES.map((item) => (
                <option key={item.slug} value={item.slug} className="bg-[#111]">
                  {item.flag} {item.name}
                </option>
              ))}
            </select>
            <a
              href="#platforms"
              className="inline-flex h-10 items-center rounded-full bg-[#E83E9B] px-4 text-xs font-semibold text-white hover:bg-[#ff4dad]"
            >
              Explore
            </a>
          </div>
          <button
            type="button"
            className="ml-auto grid h-10 w-10 place-items-center rounded-full border border-white/10 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0a0b0d] px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3 text-sm text-white/75">
              <Link href="/top-offers" onClick={() => setMenuOpen(false)}>Dating</Link>
              <Link href="/top-offers/adult" onClick={() => setMenuOpen(false)}>Adult Dating</Link>
              <Link href="/category/ai-girlfriend" onClick={() => setMenuOpen(false)}>AI Companions</Link>
              <a href="#countries" onClick={() => setMenuOpen(false)}>Countries</a>
              <a href="#categories" onClick={() => setMenuOpen(false)}>Categories</a>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search platforms"
                className="h-11 rounded-xl border border-white/10 bg-black/40 px-3 text-sm"
              />
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value as CountrySlug)}
                className={selectClass}
              >
                {COUNTRIES.map((item) => (
                  <option key={item.slug} value={item.slug} className="bg-[#111]">
                    {item.flag} {item.name}
                  </option>
                ))}
              </select>
              <button type="button" onClick={goToPlatforms} className="h-11 rounded-full bg-[#E83E9B] text-sm font-semibold">
                Explore
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/5">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 80% 10%, rgba(232,62,155,0.18), transparent 55%), radial-gradient(ellipse 50% 40% at 0% 80%, rgba(255,61,110,0.08), transparent 50%)",
            }}
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E83E9B]">
                Dating discovery
              </p>
              <h1 className="mt-4 max-w-xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Find the right dating platform for your country
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/60">
                Compare dating, adult, LGBTQ+, and AI companion platforms with a
                country-first shortlist — not a dump of affiliate cards.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-white/45">
                    Country
                  </span>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value as CountrySlug)}
                    className={selectClass}
                  >
                    {COUNTRIES.map((item) => (
                      <option key={item.slug} value={item.slug} className="bg-[#111]">
                        {item.flag} {item.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-white/45">
                    What you&apos;re looking for
                  </span>
                  <select
                    value={intent}
                    onChange={(e) => setIntent(e.target.value as Intent)}
                    className={selectClass}
                  >
                    {INTENTS.map((item) => (
                      <option key={item.id} value={item.id} className="bg-[#111]">
                        {item.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <button
                type="button"
                onClick={goToPlatforms}
                className="mt-5 inline-flex h-12 items-center gap-2 rounded-full bg-[#E83E9B] px-6 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(232,62,155,0.28)] hover:bg-[#ff4dad]"
              >
                Explore Platforms
                <ArrowRight size={16} />
              </button>
            </div>
            <div className="relative hidden h-[420px] lg:block">
              <div className="absolute inset-y-6 left-6 right-0 overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={adultImages.neon}
                  alt="Dating discovery visual"
                  fill
                  className="object-cover"
                  sizes="520px"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 h-48 w-40 overflow-hidden rounded-2xl border border-white/15 shadow-2xl">
                <Image src={adultImages.portraitD} alt="" fill className="object-cover" sizes="160px" />
              </div>
              <div className="absolute right-0 top-0 h-36 w-32 overflow-hidden rounded-2xl border border-white/15">
                <Image src={adultImages.aiCompanion} alt="" fill className="object-cover" sizes="128px" />
              </div>
            </div>
          </div>
        </section>

        <section id="categories" className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E83E9B]">
            Categories
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Explore by category</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {CATEGORY_TILES.map((tile) => (
              <button
                key={tile.id}
                type="button"
                onClick={() => {
                  setIntent(tile.id);
                  if (tile.id === "international") {
                    document.getElementById("countries")?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    goToPlatforms();
                  }
                }}
                className={`rounded-2xl border px-4 py-4 text-left transition ${
                  intent === tile.id
                    ? "border-[#E83E9B]/50 bg-[#E83E9B]/10"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
              >
                <p className="text-sm font-semibold">{tile.label}</p>
                <p className="mt-1 text-[11px] text-white/45">{tile.hint}</p>
              </button>
            ))}
          </div>
        </section>

        <section id="platforms" className="border-y border-white/5 bg-[#0a0b0d] py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E83E9B]">
                  Shortlist
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight">
                  Platforms in {countryMeta.name}
                </h2>
                <p className="mt-2 text-sm text-white/50">
                  {INTENTS.find((item) => item.id === intent)?.label} · {platforms.length} compared
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              {platforms.map((platform) => (
                <article
                  key={platform.name}
                  className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#111216] sm:grid-cols-[140px_1fr_auto]"
                >
                  <div className="relative h-36 sm:h-auto">
                    <Image
                      src={platform.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="140px"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#E83E9B]">
                      {platform.category}
                    </p>
                    <h3 className="mt-1 text-lg font-bold">{platform.name}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-white/55">{platform.description}</p>
                    <p className="mt-2 inline-flex items-center gap-1 text-sm text-white/80">
                      <Star size={14} className="fill-[#E83E9B] text-[#E83E9B]" />
                      {platform.rating.toFixed(1)}
                    </p>
                  </div>
                  <div className="flex items-center p-4 sm:pr-5">
                    <a
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => onVisit(platform.name)}
                      className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[#E83E9B] px-5 text-sm font-semibold sm:w-auto"
                    >
                      Visit Site
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E83E9B]">
            Compare
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Compare dating platforms</h2>
          <div className="mt-8 hidden overflow-hidden rounded-2xl border border-white/10 md:block">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.04] text-[11px] uppercase tracking-wider text-white/45">
                <tr>
                  <th className="px-4 py-3 font-medium">Platform</th>
                  <th className="px-4 py-3 font-medium">Category</th>
                  <th className="px-4 py-3 font-medium">Features</th>
                  <th className="px-4 py-3 font-medium">Country</th>
                  <th className="px-4 py-3 font-medium">Rating</th>
                  <th className="px-4 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {platforms.map((platform) => (
                  <tr key={platform.name} className="border-t border-white/8">
                    <td className="px-4 py-3 font-semibold">{platform.name}</td>
                    <td className="px-4 py-3 text-white/60">{platform.category}</td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {platform.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full border border-white/10 px-2 py-0.5 text-[11px] text-white/55"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-white/60">{countryMeta.name}</td>
                    <td className="px-4 py-3">{platform.rating.toFixed(1)}</td>
                    <td className="px-4 py-3">
                      <a
                        href={platform.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => onVisit(platform.name)}
                        className="text-xs font-semibold text-[#E83E9B] hover:underline"
                      >
                        Visit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-3 md:hidden">
            {platforms.map((platform) => (
              <div key={platform.name} className="rounded-2xl border border-white/10 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold">{platform.name}</p>
                    <p className="text-xs text-white/50">{platform.category}</p>
                  </div>
                  <span className="text-sm">{platform.rating.toFixed(1)}</span>
                </div>
                <p className="mt-2 text-xs text-white/45">{countryMeta.name}</p>
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onVisit(platform.name)}
                  className="mt-3 inline-flex text-sm font-semibold text-[#E83E9B]"
                >
                  Visit Site
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="countries" className="border-y border-white/5 bg-[#0a0b0d] py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E83E9B]">
              Countries
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight">Explore by country</h2>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {COUNTRIES.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className={`rounded-2xl border px-4 py-5 text-center transition hover:border-[#E83E9B]/40 ${
                    country === item.slug
                      ? "border-[#E83E9B]/50 bg-[#E83E9B]/10"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  <span className="text-2xl">{item.flag}</span>
                  <p className="mt-2 text-sm font-semibold">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E83E9B]">
            Process
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight">How TheDateCompass works</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { n: "01", t: "Choose country", d: "Start with where you are so listings stay relevant.", icon: Globe },
              { n: "02", t: "Select what you're looking for", d: "Dating, casual, adult, LGBTQ+, or AI companions.", icon: Heart },
              { n: "03", t: "Explore & compare", d: "Scan a shortlist and open only the platforms that fit.", icon: Sparkles },
            ].map((step) => (
              <div key={step.n} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <step.icon className="h-5 w-5 text-[#E83E9B]" />
                <p className="mt-4 text-xs font-bold tracking-[0.2em] text-white/35">{step.n}</p>
                <h3 className="mt-2 text-lg font-bold">{step.t}</h3>
                <p className="mt-2 text-sm text-white/55">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="faq" className="border-y border-white/5 bg-[#0a0b0d] py-14">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <p className="text-center text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E83E9B]">
              FAQ
            </p>
            <h2 className="mt-3 text-center text-3xl font-extrabold tracking-tight">Common questions</h2>
            <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10">
              {FAQS.map((item, index) => {
                const open = faqOpen === index;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-semibold"
                      onClick={() => setFaqOpen(open ? null : index)}
                    >
                      {item.q}
                      <ChevronDown className={`h-4 w-4 shrink-0 transition ${open ? "rotate-180" : ""}`} />
                    </button>
                    {open && <p className="px-4 pb-4 text-sm leading-relaxed text-white/55">{item.a}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#E83E9B] via-[#ff3d6e] to-[#c026d3] px-6 py-12 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to find a better match for your country?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-white/85">
              Set your country, pick an intent, and compare a focused shortlist.
            </p>
            <div className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
              <select
                value={country}
                onChange={(e) => setCountry(e.target.value as CountrySlug)}
                className="h-12 flex-1 rounded-full border-0 bg-black/25 px-4 text-sm text-white"
              >
                {COUNTRIES.map((item) => (
                  <option key={item.slug} value={item.slug} className="bg-[#111]">
                    {item.flag} {item.name}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={goToPlatforms}
                className="h-12 rounded-full bg-white px-6 text-sm font-bold text-[#E83E9B]"
              >
                Explore Platforms
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#050505] px-4 py-8 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <BrandLogo dark icon="heart" />
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/55">
            <Link href="/affiliate-disclosure" className="hover:text-white">About</Link>
            <Link href="/" className="hover:text-white">Blog</Link>
            <a href="#faq" className="hover:text-white">FAQ</a>
            <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white">Terms</Link>
            <Link href="/disclaimer" className="hover:text-white">Contact</Link>
          </nav>
          <div className="flex items-center gap-3 text-white/45">
            <a href="#" aria-label="Facebook" className="hover:text-white"><FaFacebookF size={14} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><FaInstagram size={14} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white"><FaXTwitter size={14} /></a>
            <a href="mailto:hello@thedatecompass.com" aria-label="Email" className="hover:text-white"><Mail size={16} /></a>
          </div>
        </div>
        <p className="mx-auto mt-5 max-w-7xl text-[11px] text-white/35">
          © {new Date().getFullYear()} TheDateCompass · Independent comparison site. 18+ · Affiliate links may earn commissions.
        </p>
      </footer>
    </div>
  );
}
