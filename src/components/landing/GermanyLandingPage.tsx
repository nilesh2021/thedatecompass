"use client";

import { germanyOffers } from "@/data/germanyOffers";
import Image from "next/image";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import MarqueeBand from "@/components/theme/MarqueeBand";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const comparisonStats = [
  { label: "Platforms compared", value: `${germanyOffers.length}` },
  { label: "Guide updated", value: "2026" },
  { label: "Audience", value: "Adults 18+" },
];

const heroImages = {
  main: "https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
};

const socialProofAvatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=88&h=88&fit=crop",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=88&h=88&fit=crop",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=88&h=88&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=88&h=88&fit=crop",
];

const ctaFeaturedClass =
  "group relative z-10 flex min-h-[58px] w-full cursor-pointer items-stretch overflow-hidden border-2 border-brand-rose bg-cream text-ink shadow-[6px_6px_0_0_rgba(255,61,110,0.85)] transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_rgba(255,61,110,0.95)] active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0_0_rgba(255,61,110,0.7)]";

const ctaDefaultClass =
  "group relative inline-flex min-h-[48px] w-full cursor-pointer items-stretch overflow-hidden border border-cream/30 bg-cream text-ink transition duration-200 hover:border-brand-rose hover:shadow-[4px_4px_0_0_rgba(255,61,110,0.7)] active:translate-x-px active:translate-y-px active:shadow-none sm:w-auto sm:min-w-[12rem]";

const ctaHeroClass =
  "group relative inline-flex min-h-[56px] cursor-pointer items-stretch overflow-hidden border-2 border-brand-rose bg-cream text-ink shadow-[6px_6px_0_0_rgba(255,61,110,0.85)] transition duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_rgba(255,61,110,0.95)] active:translate-x-0 active:translate-y-0 active:shadow-[3px_3px_0_0_rgba(255,61,110,0.7)]";

function GermanyOfferCard({
  platform,
  variant = "default",
}: {
  platform: (typeof germanyOffers)[number];
  variant?: "featured" | "default";
}) {
  const name = platform.name.trim();
  const isFeatured = variant === "featured" || platform.highlighted;

  return (
    <article
      className={
        isFeatured
          ? "relative overflow-hidden border border-brand-rose/40 bg-[linear-gradient(145deg,rgba(255,61,110,0.14),rgba(22,24,28,0.95))] p-4 sm:p-8 lg:p-10"
          : "group relative border border-cream/10 bg-ink-soft p-4 transition duration-300 hover:border-brand-rose/25 sm:p-6"
      }
    >
      {isFeatured && (
        <div className="absolute right-0 top-0 bg-brand-rose px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-cream">
          Test winner 2026
        </div>
      )}

      <div
        className={
          isFeatured
            ? "grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)_220px] lg:items-stretch"
            : "grid gap-5 sm:grid-cols-[88px_minmax(0,1fr)_auto] sm:items-center"
        }
      >
        {/* Model photo */}
        <div
          className={
            isFeatured
              ? "relative overflow-hidden border border-cream/10 sm:row-span-1"
              : "relative shrink-0 overflow-hidden border border-cream/10 sm:row-span-2"
          }
        >
          <Image
            src={platform.image}
            alt={`${name} member`}
            width={isFeatured ? 360 : 176}
            height={isFeatured ? 480 : 220}
            className={
              isFeatured
                ? "h-56 w-full object-cover object-top sm:h-64 lg:h-full lg:min-h-[280px]"
                : "h-[110px] w-[88px] object-cover object-top sm:h-[132px]"
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        </div>

        {/* Platform details */}
        <div className={isFeatured ? "max-w-3xl" : "min-w-0"}>
          <h3
            className={
              isFeatured
                ? "text-3xl font-extrabold tracking-tight text-cream sm:text-4xl"
                : "text-xl font-extrabold tracking-tight text-cream sm:text-2xl"
            }
          >
            {name}
          </h3>

          <p
            className={
              isFeatured
                ? "mt-3 max-w-2xl text-base font-medium text-brand-rose sm:text-lg"
                : "mt-1 text-sm font-medium text-brand-rose"
            }
          >
            {platform.category}
          </p>

          <ul
            className={
              isFeatured
                ? "mt-6 grid gap-3 sm:grid-cols-2"
                : "mt-4 space-y-2"
            }
          >
            {platform.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-cream/80"
              >
                <span className="mt-0.5 shrink-0 text-brand-mint">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {isFeatured && (
            <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-fog">
              <ShieldCheck size={14} className="text-brand-mint" />
              Independent comparison · Affiliate link
            </p>
          )}
        </div>

        {/* CTA column */}
        <div
          className={
            isFeatured
              ? "flex flex-col justify-end gap-4 lg:items-stretch"
              : "flex shrink-0 flex-col gap-2 sm:items-end"
          }
        >
          {isFeatured ? (
            <a
              href={platform.affiliateLink}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className={ctaFeaturedClass}
            >
              <span className="flex flex-1 items-center justify-center px-5 text-sm font-extrabold uppercase tracking-[0.12em]">
                {platform.buttonText.trim()}
              </span>
              <span className="flex w-14 shrink-0 items-center justify-center bg-brand-rose text-cream transition duration-200 group-hover:bg-brand-rose-soft sm:w-16">
                <ArrowUpRight
                  size={20}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          ) : (
            <a
              href={platform.affiliateLink}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className={ctaDefaultClass}
            >
              <span className="flex flex-1 items-center justify-center px-4 text-[0.78rem] font-extrabold uppercase tracking-[0.1em]">
                {platform.buttonText.trim()}
              </span>
              <span className="flex w-11 shrink-0 items-center justify-center bg-brand-rose text-cream transition duration-200 group-hover:bg-brand-rose-soft">
                <ArrowUpRight
                  size={16}
                  className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>
          )}

          {isFeatured ? (
            <span className="text-center text-[0.68rem] uppercase tracking-[0.14em] text-fog">
              18+ · External site · Best pick
            </span>
          ) : (
            <span className="text-center text-[0.68rem] uppercase tracking-[0.14em] text-fog sm:text-right">
              18+ · External site
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

export default function GermanyLandingPage() {
  const featured =
    germanyOffers.find((offer) => offer.highlighted) ?? germanyOffers[0];
  const otherOffers = germanyOffers.filter((offer) => offer !== featured);

  return (
    <>
      <Header />
      <main className="min-h-screen overflow-hidden bg-ink font-display text-cream">
        <section className="tdc-section-pitch mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:gap-16 sm:px-6 sm:py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <div className="tdc-eyebrow-mint mb-8 inline-flex items-center border border-cream/10 bg-cream/5 px-4 py-2">
              Adult dating offers compared · 2026
            </div>

            <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Find the{" "}
              <span className="font-serif-accent italic text-brand-rose">
                spark
              </span>{" "}
              you want.
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-8 text-fog">
              Casual dating, niche communities, mature matches, and AI
              companions — compared side by side so you can skip the guesswork
              and click what fits.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  document.getElementById("offers")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className={ctaHeroClass}
              >
                <span className="flex flex-1 items-center justify-center px-8 text-sm font-extrabold uppercase tracking-[0.12em]">
                  Compare now
                </span>
                <span className="flex w-14 shrink-0 items-center justify-center bg-brand-rose text-cream transition duration-200 group-hover:bg-brand-rose-soft">
                  <span className="text-lg transition duration-200 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </button>

              <a href="#faq" className="tdc-btn-line">
                Read the guide
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {socialProofAvatars.map((src) => (
                  <div
                    key={src}
                    className="relative h-10 w-10 overflow-hidden border-2 border-ink ring-1 ring-cream/10"
                  >
                    <Image
                      src={src}
                      alt=""
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-fog">
                <span className="font-bold text-cream">12,400+</span> readers
                compared platforms this month
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden border border-cream/10 bg-ink-soft p-4 shadow-hero">
              <Image
                src={heroImages.main}
                alt="Couple enjoying a date in Germany"
                width={1200}
                height={800}
                priority
                className="h-[520px] w-full object-cover sm:h-[580px] lg:h-[620px]"
              />
            </div>

              <div className="absolute -bottom-8 -left-6 hidden w-44 overflow-hidden border-4 border-ink shadow-2xl lg:block">
              
              </div>

              <div className="absolute -right-4 -top-6 hidden w-36 overflow-hidden border-4 border-ink shadow-2xl lg:block">
               
            </div>
          </div>
        </section>

        <MarqueeBand
          items={[
            "Casual dating",
            "Gay dating",
            "Mature matches",
            "Adult social",
            "AI companions",
            "Adults 18+",
          ]}
        />

        <section
          id="offers"
          className="relative border-t border-cream/10 py-14 sm:py-20 lg:py-24"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
          >
            <Image
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1600&q=80"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-end">
              <div>
                <p className="tdc-eyebrow mb-4">Top picks</p>
                <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight text-cream sm:text-5xl">
                  Top adult dating platforms compared
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-fog">
                  From CheekyCrush and RealSexClub to niche picks like FetishPartner,
                  MilfFinder, and Dreamz.ai — each offer below matches our live
                  affiliate lineup.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-px border border-cream/10 bg-cream/10">
                {comparisonStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-ink-soft px-4 py-4 text-center sm:px-5"
                  >
                    <p className="text-xl font-extrabold text-cream sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-fog">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 sm:mt-14">
              <GermanyOfferCard platform={featured} variant="featured" />
            </div>

            <div className="mt-8 sm:mt-10">
              <div className="mb-5 flex items-end justify-between gap-4 border-b border-cream/10 pb-4">
                <div>
                  <p className="tdc-eyebrow-mint">More options</p>
                  <h3 className="mt-2 text-2xl font-extrabold text-cream">
                    More platforms worth comparing
                  </h3>
                </div>
                <p className="hidden text-sm text-fog sm:block">
                  {otherOffers.length} additional picks
                </p>
              </div>

              <div className="space-y-4">
                {otherOffers.map((offer) => (
                  <GermanyOfferCard key={offer.name} platform={offer} />
                ))}
              </div>
            </div>

            <p className="mt-10 border border-cream/10 bg-ink-soft px-5 py-4 text-center text-xs leading-relaxed text-fog">
              TheDateCompass is an independent comparison site. We may earn a
              commission when you visit a platform through our links. All listed
              services are third-party providers for adults 18+.
            </p>
          </div>
        </section>

        <section
          id="faq"
          className="border-t border-cream/10 bg-ink-soft py-14 sm:py-20 lg:py-24 backdrop-blur-xl"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="mb-10 text-center sm:mb-14">
              <p className="tdc-eyebrow mb-4">FAQ</p>
              <h2 className="text-5xl font-extrabold">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-lg text-fog">
                Quick answers before you compare the offers above.
              </p>
            </div>

            <div className="space-y-5">
  {[
    {
      q: "What are the best dating sites in Germany?",
      a: "The best dating site depends on what you are looking for. Our Germany dating guide compares different platforms and adult dating offers based on their audience, dating focus, features, and availability for visitors in Germany.",
    },
    {
      q: "Which dating sites are available in Germany?",
      a: "Several dating platforms and adult dating services are available to users in Germany. The offers listed on this page are selected for their relevance to visitors looking for dating and online connection options in Germany.",
    },
    {
      q: "Which dating site is best for casual dating in Germany?",
      a: "If you are looking for casual dating in Germany, consider platforms that specifically focus on casual encounters and adult dating. Our comparison includes several offers with different audiences and dating experiences, so you can choose the option that best matches your preferences.",
    },
    {
      q: "Are there adult dating sites for different interests in Germany?",
      a: "Yes. Adult dating platforms can focus on different types of connections and interests. Some offers are designed for casual dating, while others focus on specific communities, preferences, or alternative dating experiences. Check each platform's description to find an option that matches what you are looking for.",
    },
    {
      q: "How do I choose a dating site in Germany?",
      a: "Consider the type of connection you want, the platform's target audience, available features, pricing, privacy options, and whether the service is available in Germany. Comparing several dating platforms before choosing one can help you find an option that suits your preferences.",
    },
    {
      q: "Are these dating platforms safe to use?",
      a: "Online dating services have different privacy and safety features. Before using a platform, review its terms, privacy policy, community guidelines, and available safety controls. Avoid sharing sensitive personal or financial information with people you have not met or do not trust.",
    },
  ].map((faq) => (
    <details
      key={faq.q}
      className="border border-cream/10 bg-ink px-4 py-4 backdrop-blur-2xl sm:px-6 sm:py-5"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
        {faq.q}
        <span>⌄</span>
      </summary>

      <p className="mt-4 leading-7 text-fog">
        {faq.a}
      </p>
    </details>
  ))}
</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
