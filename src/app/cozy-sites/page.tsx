"use client";

import { useId, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import MarqueeBand from "@/components/theme/MarqueeBand";

interface OfferItem {
  id: string;
  title: string;
  categoryLabel: string;
  description: string;
  url: string;
  featured?: boolean;
  image: string;
  highlights: string[];
}

const IMG = {
  hero: "/images/ai-companion-hero.png",
  aiModel: "/images/ai-model.webp",
  aiModel3: "/images/ai-model-3.webp",
  chatAi: "/images/chat-ai.webp",
  ctaAi: "/images/cta-ai.webp",
  companion1: "/images/dreamz/companion-1.webp",
  companion2: "/images/dreamz/companion-2.webp",
  companion3: "/images/dreamz/companion-3.webp",
  companion4: "/images/dreamz/companion-4.webp",
  companion5: "/images/dreamz/companion-5.webp",
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
      id: "cheekycrush",
      title: "CheekyCrush",
      categoryLabel: "Casual dating",
      description:
        "Fast signup for flirty adult dating with active members looking for chemistry — not endless swiping.",
      url: "https://t.datsk11.com/358917/10377/0?po=6456&aff_sub5=SF_006OG000004lmDN",
      featured: true,
      image: IMG.portraitA,
      highlights: ["Quick registration", "Verified-style profiles", "Private chat"],
    },
    {
      id: "naughtycharm",
      title: "NaughtyCharm",
      categoryLabel: "Adult dating",
      description:
        "Direct adult dating for people who know what they want — straightforward profiles and messaging.",
      url: "https://t.datsk11.com/358917/10376/0?po=6456&aff_sub5=SF_006OG000004lmDN",
      image: IMG.portraitD,
      highlights: ["No-games connections", "Discreet profiles", "Mobile friendly"],
    },
    {
      id: "litlatinz",
      title: "LitLatinz",
      categoryLabel: "Latino dating",
      description:
        "Focused on Latino community connections with adult-friendly profiles and chat.",
      url: "https://t.datsk11.com/358917/7410?aff_sub5=SF_006OG000004lmDN",
      image: IMG.portraitE,
      highlights: ["Community vibe", "Active chat", "Easy browse"],
    },
    {
      id: "dirtydating",
      title: "DirtyDating",
      categoryLabel: "Casual adult",
      description:
        "Casual dating with an adult edge — browse, message, and meet without the pressure.",
      url: "https://t.crdtg2.com/358917/5421?aff_sub5=SF_006OG000004lmDN",
      image: IMG.neon,
      highlights: ["Fast signup", "Adult profiles", "Private messaging"],
    },
    {
      id: "fetishpartner",
      title: "FetishPartner",
      categoryLabel: "Niche dating",
      description:
        "Niche matching for alternative interests beyond mainstream dating apps.",
      url: "https://t.crdtg2.com/358917/5055?aff_sub5=SF_006OG000004lmDN",
      image: IMG.portraitB,
      highlights: ["Niche filters", "Engaged community", "Private chat"],
    },
  ],

  "AI Platform": [
    {
      id: "dreamz-ai",
      title: "Dreamz.ai",
      categoryLabel: "AI companion",
      description:
        "Create your own personalized AI companion with immersive conversations and customizable personalities.",
      url: "https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN",
      featured: true,
      image: IMG.companion1,
      highlights: [
        "Personalized companions",
        "Immersive roleplay",
        "Custom personalities",
        "Private conversations",
        "Available 24/7",
      ],
    },
    {
      id: "dreamz-ella",
      title: "Dreamz — Ella",
      categoryLabel: "AI companion",
      description:
        "Confident, flirty companion energy for immersive stories and late-night chats.",
      url: "https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN",
      image: IMG.companion2,
      highlights: ["Flirty tone", "Story-ready", "Always online"],
    },
    {
      id: "dreamz-maya",
      title: "Dreamz — Maya",
      categoryLabel: "AI companion",
      description:
        "Warm and thoughtful AI companionship when you want deeper emotional conversations.",
      url: "https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN",
      image: IMG.companion3,
      highlights: ["Emotional depth", "Calm pace", "Private chats"],
    },
    {
      id: "dreamz-luna",
      title: "Dreamz — Luna",
      categoryLabel: "AI companion",
      description:
        "Creative muse energy — chat, flirt, or build a fantasy world together.",
      url: "https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN",
      image: IMG.companion4,
      highlights: ["Creative roleplay", "Fantasy chats", "Custom vibe"],
    },
  ],

  "Gay Dating": [
    {
      id: "gaybloom",
      title: "GayBloom",
      categoryLabel: "Gay dating",
      description:
        "Inclusive space for gay singles who want real conversations, easy matching, and private messaging.",
      url: "https://t.datsk11.com/358917/10378/0?po=6456&aff_sub5=SF_006OG000004lmDN",
      featured: true,
      image: IMG.ctaAi,
      highlights: [
        "LGBTQ+ community",
        "Private messaging",
        "Verified-style profiles",
      ],
    },
    {
      id: "pridepair",
      title: "PridePair",
      categoryLabel: "Gay dating community",
      description:
        "Match and chat with like-minded gay singles in a community-first dating experience.",
      url: "https://t.datsk11.com/358917/10379/0?po=6456&aff_sub5=SF_006OG000004lmDN",
      image: IMG.hero,
      highlights: ["Inclusive matching", "Fast conversations", "Safe community"],
    },
    {
      id: "manfinder",
      title: "Manfinder",
      categoryLabel: "Gay dating for men",
      description:
        "Men looking to meet other men — dating and social features in one place to start chatting fast.",
      url: "https://t.datsk9.com/358917/6488?aff_sub5=SF_006OG000004lmDN",
      image: IMG.aiModel3,
      highlights: ["Men seeking men", "Social + dating", "Quick signup"],
    },
  ],

  "Trans Dating": [
    {
      id: "transdate",
      title: "TransDate",
      categoryLabel: "Trans dating",
      description:
        "Inclusive dating for trans connections with clear preferences and respectful private messaging.",
      url: "https://t.datsk9.com/358917/6497?aff_sub5=SF_006OG000004lmDN",
      featured: true,
      image: IMG.companion5,
      highlights: [
        "Trans-inclusive",
        "Clear preferences",
        "Respectful chats",
        "Private messaging",
      ],
    },
  ],
};

const CATEGORIES = Object.keys(DATA);

export default function OfferHubPage() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0]);
  const tabsId = useId();

  const filteredOffers = DATA[activeTab] ?? [];

  const handleTabClick = (category: string) => {
    setActiveTab(category);
  };

  return (
    <div className="min-h-screen bg-ink font-display text-cream">
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={IMG.hero}
              alt=""
              fill
              priority
              className="object-cover object-[center_18%] opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/85 to-ink" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_70%_30%,rgba(255,61,110,0.2),transparent_70%)]" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28">
            <p className="tdc-eyebrow-mint mb-3 flex items-center gap-3 before:h-px before:w-8 before:bg-brand-mint before:content-['']">
              TheDateCompass · Cozy Sites
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Cozy Sites
              <span className="mt-1 block font-serif-accent text-[1.02em] italic text-brand-rose">
                Soft nights. Better offers.
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-fog sm:text-lg">
              Browse dating, gay dating, AI companions, and trans dating picks —
              curated with the right visual for every listing.
            </p>
          </div>
        </section>

        <MarqueeBand
          items={[
            "Casual dating",
            "Gay dating",
            "AI companions",
            "Trans dating",
            "Adults 18+",
            "Affiliate links",
          ]}
        />

        <section
          id="offer-tabs"
          className="tdc-section-pitch"
          aria-labelledby={`${tabsId}-${activeTab}`}
        >
          <div className="sticky top-14 z-40 border-b-2 border-brand-rose/50 bg-ink/95 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 sm:py-4">
              <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
                <div>
                  <p className="tdc-eyebrow">Categories</p>
                  <h2 className="mt-1 text-xl font-extrabold tracking-tight sm:text-2xl">
                    Pick a tab · browse offers
                  </h2>
                </div>
                <p className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.14em] text-fog">
                  <ShieldCheck size={13} className="text-brand-mint" />
                  Independent hub · 18+
                </p>
              </div>

              <div
                role="tablist"
                aria-label="Offer categories"
                className="grid grid-cols-2 gap-2 lg:grid-cols-4"
              >
                {CATEGORIES.map((category) => {
                  const isActive = activeTab === category;
                  const count = DATA[category]?.length ?? 0;
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      id={`${tabsId}-${category}`}
                      onClick={() => handleTabClick(category)}
                      className={`border-2 px-3 py-3 text-left transition duration-200 sm:px-4 ${
                        isActive
                          ? "border-brand-rose bg-brand-rose text-cream shadow-[4px_4px_0_0_rgba(255,107,143,0.5)]"
                          : "border-cream/20 bg-ink-soft text-cream hover:border-brand-rose/60"
                      }`}
                    >
                      <span className="block text-xs font-extrabold uppercase tracking-[0.1em] sm:text-sm">
                        {category}
                      </span>
                      <span
                        className={`mt-1 block text-[0.65rem] font-bold uppercase tracking-[0.14em] ${
                          isActive ? "text-cream/85" : "text-fog"
                        }`}
                      >
                        {count} {count === 1 ? "offer" : "offers"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            role="tabpanel"
            id="offers"
            aria-labelledby={`${tabsId}-${activeTab}`}
            className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8"
          >
            <p className="mb-4 text-sm text-fog">
              <span className="font-bold text-cream">{activeTab}</span>
              {" · "}
              {filteredOffers.length} handpicked{" "}
              {filteredOffers.length === 1 ? "listing" : "listings"}
            </p>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {filteredOffers.map((offer, index) => (
                <article
                  key={`${activeTab}-${offer.id}`}
                  className="group flex flex-col border border-cream/10 bg-ink-soft transition duration-300 hover:border-brand-rose/35 sm:flex-row sm:items-stretch xl:flex-col"
                >
                  <div className="relative aspect-[16/10] shrink-0 overflow-hidden sm:aspect-auto sm:w-36 xl:aspect-[16/10] xl:w-auto">
                    <Image
                      src={offer.image}
                      alt={offer.title}
                      fill
                      className="object-cover object-top transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 40vw, 33vw"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-4">
                    <span className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-rose">
                      {offer.categoryLabel}
                    </span>
                    <h3 className="mt-1 text-lg font-extrabold tracking-tight">
                      {offer.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-fog">
                      {offer.description}
                    </p>

                    <div className="mt-3">
                      <a
                        href={offer.url}
                        target={
                          offer.url.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          offer.url.startsWith("http")
                            ? "nofollow sponsored noopener noreferrer"
                            : undefined
                        }
                        className="text-xs font-bold uppercase tracking-[0.12em] text-brand-mint transition hover:text-cream"
                      >
                        View offer →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredOffers.length === 0 && (
              <div className="py-12 text-center text-fog">
                No offers found in this category.
              </div>
            )}

            <p className="mt-6 border border-cream/10 bg-ink-soft px-4 py-3 text-center text-xs leading-relaxed text-fog">
              TheDateCompass is an independent comparison hub. We may earn a
              commission when you visit a platform through our links. All listed
              services are third-party providers for adults 18+.
            </p>
          </div>
        </section>

        <section className="border-t border-cream/10 bg-ink-soft py-10 sm:py-12">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
            <p className="tdc-eyebrow mb-3">Keep exploring</p>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              More ways to compare
            </h2>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link href="/germany" className="tdc-btn-line">
                Germany guide
              </Link>
              <Link href="/usa" className="tdc-btn-line">
                USA guide
              </Link>
              <Link href="/category/ai-girlfriend" className="tdc-btn-primary">
                AI girlfriend picks
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
