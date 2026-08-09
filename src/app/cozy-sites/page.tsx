"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";

interface OfferItem {
  id: string;
  title: string;
  description: string;
  url: string;
  featured?: boolean;
  image: string;
  highlights: string[];
}

const IMG = {
  aiModel: "/images/ai-model.webp",
  aiModel3: "/images/ai-model-3.webp",
  chatAi: "/images/chat-ai.webp",
  ctaAi: "/images/cta-ai.webp",
  hero: "/images/ai-companion-hero.png",
  neon: "/images/extra/2.jpg",
  portraitA:
    "/images/extra/1eqyiSccso7couzchcXqVLjQF8PFkPWvsBwD9ptKVCw9ztaCl92n4L7nhdgjLvk46LfHmeLlhFLsWD3idQzAi1t9afPweJcUW9UlkwZQyQT3-qtwayhtiXo5DKJD_6WpHC6XOr0iBiMZ5aOctCGRWDT69PkJ7LY6hdewU3kp4Ne.jpg",
  portraitB:
    "/images/extra/808vP-M-5b6gTi0tN1Yc-6H4TwhXsw_gO_zVgTJzfnMfUCrQsSJS4SHm4VhudkvN0j6pITl47QVYDUxnKXnqB_TJjeuZikZ6Bme7G1u__7XfxMA6xxsaUBBjQoqsz3F4r8MLSWm4O7Lxb4bLXGucr2V69UMS15YGEvT5eAhmb0s.jpg",
  portraitC: "/images/extra/ai-model.jpg",
  portraitD:
    "/images/extra/IuJU7xxK5CBG801VwI4LrRyJZrR3nvIbBpM-A6Ig59zbMHpDjDcfTsmLinTPxKj3XtpB4vk1lOlp9WKaOeJZSD9eDNOar8yIAHvLjURnTPuAXngQObP8aqve7qEg6c1TZ5U3On8ZMYDnCDary9VzstCL2pTdpEAsNSgB14sEER8.jpg",
  portraitE:
    "/images/extra/XWB8SOkp9vB_OqUj38mQvKq_6eHMmAediIcYizJkB1Oo9D7UV-wxfv6CVV4iDy5lgsUwIYbU0iwl4qrCpzWcSUfiKHEnb_W6NSSSxnU1yxTWyR_VyqqyVZvhDxfloBSKDGdPczBLjGIXrtMVtDFARfOAFZI8P0wefRpNnUThZ36.jpg",
} as const;

const DATA: Record<string, OfferItem[]> = {
  Dating: [
    {
      id: "premium-dating",
      title: "Premium Dating",
      description: "Find meaningful connections with advanced matching.",
      url: "#",
      featured: true,
      image: IMG.chatAi,
      highlights: ["Smart matching", "Verified profiles", "Private chat"],
    },
    {
      id: "elite-singles",
      title: "Elite Singles",
      description: "Dating experience for professionals.",
      url: "#",
      image: IMG.portraitA,
      highlights: ["Career-focused", "Curated matches", "Desktop & mobile"],
    },
    {
      id: "spark-match",
      title: "Spark Match",
      description: "AI-powered dating recommendations for faster chemistry.",
      url: "#",
      image: IMG.neon,
      highlights: ["AI suggestions", "Quick signup", "Active members"],
    },
    {
      id: "nightline",
      title: "Nightline",
      description: "Evening-first dating for adults who prefer low-pressure chats.",
      url: "#",
      image: IMG.portraitD,
      highlights: ["Discreet profiles", "Night-friendly", "Instant messaging"],
    },
    {
      id: "harbor-hearts",
      title: "Harbor Hearts",
      description: "Warm, conversation-first dating with thoughtful prompts.",
      url: "#",
      image: IMG.portraitE,
      highlights: ["Prompted icebreakers", "Local discovery", "Safe messaging"],
    },
  ],

  "AI Platform": [
    {
      id: "dreamz-ai",
      title: "Dreamz.ai",
      description:
        "Create your own personalized AI companion and enjoy immersive conversations with customizable personalities.",
      url: "https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN",
      featured: true,
      image: IMG.aiModel,
      highlights: [
        "Personalized companions",
        "Immersive roleplay",
        "Custom personalities",
        "Private conversations",
        "Available 24/7",
      ],
    },
    {
      id: "chatcraft-ai",
      title: "ChatCraft AI",
      description: "AI tools for realistic chat experiences and content creation.",
      url: "#",
      image: IMG.chatAi,
      highlights: ["Realistic chat", "Content tools", "Fast responses"],
    },
    {
      id: "visionary-ai",
      title: "Visionary AI",
      description: "Advanced image generation for new creative campaigns.",
      url: "#",
      image: IMG.aiModel3,
      highlights: ["Image generation", "Campaign ready", "High fidelity"],
    },
  ],

  VPN: [
    {
      id: "secure-vpn",
      title: "Secure VPN",
      description: "Browse safely and securely with encrypted tunnels.",
      url: "#",
      featured: true,
      image: IMG.ctaAi,
      highlights: ["No-logs policy", "Fast servers", "Multi-device"],
    },
    {
      id: "streaming-vpn",
      title: "Streaming VPN",
      description: "Fast VPN optimized for streaming content worldwide.",
      url: "#",
      image: IMG.hero,
      highlights: ["Streaming unlock", "Low latency", "Easy apps"],
    },
  ],

  Finance: [
    {
      id: "trading-platform",
      title: "Trading Platform",
      description: "Invest and trade with a clean, beginner-friendly interface.",
      url: "#",
      featured: true,
      image: IMG.portraitB,
      highlights: ["Live charts", "Low fees", "Mobile trading"],
    },
    {
      id: "credit-service",
      title: "Credit Service",
      description: "Access financial products quickly with transparent terms.",
      url: "#",
      image: IMG.portraitC,
      highlights: ["Fast approval", "Clear rates", "Secure portal"],
    },
  ],
};

const CATEGORIES = Object.keys(DATA);

export default function OfferHubPage() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);
  const [selectedOffer, setSelectedOffer] = useState<OfferItem | null>(null);

  const filteredOffers = DATA[activeTab] ?? [];

  const featuredOffer =
    filteredOffers.find((o) => o.featured) ?? filteredOffers[0] ?? null;

  const handleTabClick = (category: string) => {
    setActiveTab(category);
    setSelectedOffer(null);
  };

  return (
    <div className="min-h-screen bg-[#0c0a0b] text-stone-100">
      <Header />

      <main>
        {/* Atmosphere */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(232,62,155,0.18),_transparent_55%)]" />
          <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-[#E83E9B]/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-rose-900/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMG.hero}
              alt=""
              fill
              priority
              className="object-cover object-[center_20%] opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c0a0b]/40 via-[#0c0a0b]/75 to-[#0c0a0b]" />
          </div>

          <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-28 md:pb-24">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#E83E9B]">
              Cozy Sites Hub
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.05]   md:text-7xl">
              Soft nights.
              <span className="mt-2 block text-[#E83E9B]">Better offers.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-300">
              Browse dating, AI companions, VPN, and finance picks — curated
              with the right visual for every listing.
            </p>
            {featuredOffer && (
              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("offer-tabs");
                    el?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="rounded-full bg-[#E83E9B] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#d12f8a]"
                >
                  Browse categories
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedOffer(featuredOffer)}
                  className="rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-[#E83E9B]/50"
                >
                  View featured
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Tabs */}
        <section id="offer-tabs" className="mx-auto max-w-6xl px-6 pt-8">
          <div
            role="tablist"
            aria-label="Offer categories"
            className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur-md"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeTab === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  id={`tab-${category}`}
                  onClick={() => handleTabClick(category)}
                  className={`rounded-xl px-5 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#E83E9B] text-white shadow-[0_8px_24px_rgba(232,62,155,0.35)]"
                      : "text-stone-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {category}
                  <span className="ml-2 text-xs opacity-70">
                    {DATA[category]?.length ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Offer grid */}
        <section
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="mx-auto max-w-6xl px-6 py-12"
        >
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold   md:text-3xl">
                {activeTab} offers
              </h2>
              <p className="mt-2 text-stone-400">
                {filteredOffers.length} handpicked{" "}
                {filteredOffers.length === 1 ? "listing" : "listings"}
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredOffers.map((offer, index) => (
              <article
                key={`${activeTab}-${offer.id}`}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-1 hover:border-[#E83E9B]/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={offer.image}
                    alt={offer.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a0b] via-[#0c0a0b]/20 to-transparent" />
                  {offer.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-[#E83E9B] px-3 py-1 text-xs font-bold text-white">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{offer.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-stone-400">
                    {offer.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelectedOffer(offer)}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#E83E9B] transition hover:text-pink-300"
                  >
                    View offer
                    <span aria-hidden>→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredOffers.length === 0 && (
            <div className="py-20 text-center text-stone-500">
              No offers found in this category.
            </div>
          )}
        </section>
      </main>

      <Footer />

      {/* Offer modal */}
      {selectedOffer && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="offer-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            aria-label="Close dialog"
            onClick={() => setSelectedOffer(null)}
          />
          <div className="relative grid w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/10 bg-[#141112] shadow-2xl md:grid-cols-2">
            <div className="relative min-h-[240px] md:min-h-full">
              <Image
                src={selectedOffer.image}
                alt={selectedOffer.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative flex flex-col p-7">
              <button
                type="button"
                onClick={() => setSelectedOffer(null)}
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white transition hover:border-[#E83E9B]"
              >
                Close
              </button>
              <h2
                id="offer-modal-title"
                className="pr-16 text-2xl font-black text-white"
              >
                {selectedOffer.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">
                {selectedOffer.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-stone-300">
                {selectedOffer.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#E83E9B]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={selectedOffer.url}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="mt-auto inline-flex w-fit rounded-full bg-[#E83E9B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d12f8a]"
              >
                Open offer
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Featured shortcut */}
      {featuredOffer && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            type="button"
            onClick={() => setSelectedOffer(featuredOffer)}
            className="rounded-full bg-[#E83E9B] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#E83E9B]/30 transition hover:bg-[#d12f8a]"
          >
            Featured: {featuredOffer.title}
          </button>
        </div>
      )}
    </div>
  );
}
