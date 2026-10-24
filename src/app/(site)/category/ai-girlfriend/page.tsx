import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import BrowseByCountrySection from "@/components/landing/BrowseByCountrySection";
import { getCountryBrowseLinks } from "@/data/countryBrowseLinks";
import { aiGirlfriendOffers } from "@/data/aiGirlfriendOffers";
export const metadata: Metadata = {
  title: {
    absolute: "AI Girlfriend & AI Companion Sites | TheDateCompass",
  },
  description:
    "Explore AI girlfriend and AI companion platforms listed on TheDateCompass. Compare options and discover AI chat experiences for adults 18+.",
  keywords: [
    "AI girlfriend",
    "AI companion",
    "AI girlfriend sites",
    "virtual girlfriend",
    "AI chat",
    "AI roleplay",
  ],
  alternates: {
    canonical: "https://www.thedatecompass.com/category/ai-girlfriend",
  },
  openGraph: {
    title: "AI Girlfriend & AI Companion Sites | TheDateCompass",
    description:
      "Explore AI girlfriend and AI companion platforms listed on TheDateCompass.",
    url: "https://www.thedatecompass.com/category/ai-girlfriend",
    siteName: "TheDateCompass",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Girlfriend & AI Companion Sites | TheDateCompass",
    description:
      "Explore AI girlfriend and AI companion platforms listed on TheDateCompass.",
  },
  robots: { index: true, follow: true },
};

export default function AIGirlfriendCategoryPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#07070a] text-white">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-white/5 px-5 py-20 lg:py-28">
          {/* Background glow */}
          <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

          <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-fuchsia-600/15 blur-[120px]" />

          <div className="relative mx-auto max-w-6xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-violet-400">
              Explore AI Companions
            </p>

            <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Find an AI Companion That Fits Your Style
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              Explore AI girlfriend and AI companion platforms featuring
              personalized personalities, private conversations, and immersive
              experiences.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white/70">
                AI Companions
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white/70">
                Private Chat
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white/70">
                AI Roleplay
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white/70">
                Personalized
              </span>
            </div>
          </div>
        </section>

        {/* Offers */}
        <section className="px-5 pb-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-semibold uppercase text-violet-400">
              Featured AI companion
            </p>

            <h2 className="mt-2 text-3xl font-black md:text-4xl">
              Explore AI Companion Platforms
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/50">
              Browse our featured AI companion platforms and explore the
              experiences they offer.
            </p>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {aiGirlfriendOffers.map((offer) => (



                <article
                  key={offer.name}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111116] transition duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-900/20"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src="https://storage.googleapis.com/dreamz-assets/i/cf44b76e-707d-4dc2-8044-17896772477c.webp?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=dreamz-ai-run%40delta-carving-424713-r0.iam.gserviceaccount.com%2F20260809%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20260809T162217Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=38c74a7fbde06da29f10434a2dcb1cdda2c3200cb2caf6096bec9771ec5538dbf4adbc12aa1aa0df9eca896d4483c8f759eb24f0a65ad1cf5bbd45376835cd85a245556ee08c3979c578e8802523decb4af5b136b282f729e91f6e4a8cb32699eeeef7d24978c8bcd68c0e166dc184ddcba1d1a2f54782489ba71b6ca827f8e38977db8e68343ddc48fceab037374c687723a0b58415242c03599175d405e0238b29f8247d66855311cf351cb5f7f01a0fe48ba9fc46fb1b706c8818c01ce2205e1e0d21a6f2134ca9e4e8f3313fe91681f58c306c89b11409a158cc8509a794ea0e80a131483f8ce71ab2d234e598e936e00ace61a3fff6f860fb5a6293d1af"
                      alt="Dreamz.ai AI companion"
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent" />

                    <span className="absolute left-4 top-4 rounded-full bg-violet-600 px-3 py-1 text-xs font-bold text-white">
                      {offer.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-bold">
                          {offer.name}
                        </h3>

                        <p className="mt-1 text-sm text-violet-300">
                          {offer.bestFor}
                        </p>
                      </div>

                      
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-white/60">
                      {offer.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      {offer.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-2 text-sm text-white/70"
                        >
                          <span className="text-violet-400">✓</span>
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs font-semibold text-white/40">
                        {offer.promo}
                      </span>

                     
                    </div>

                    <a
                      href="/offers/dreamz-ai"
                      className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-violet-500"
                    >
                      Explore Dreamz.ai →
                    </a>
                  </div>
                </article>


              ))}
            </div>
          </div>
        </section>

        <BrowseByCountrySection
          tone="violet"
          links={getCountryBrowseLinks("ai")}
          title="Explore AI companions by country"
          description="Country shortlists that include AI companion listings such as Dreamz.ai from our active regional pages."
          className="px-5"
        />
      </main>

      <Footer />
    </>
  );
}