import Image from "next/image";
import {
  MANFINDER_AFFILIATE_URL,
  manFinderOffer,
  manFinderVisuals,
} from "@/data/manFinderOffers";
import ManFinderLogo from "@/components/landing/ManFinderLogo";
import FixedOfferCta from "./FixedOfferCta";

const AFFILIATE_URL = MANFINDER_AFFILIATE_URL;
const REL = "noopener noreferrer";

function ExploreCta({
  label = "Explore ManFinder",
}: {
  label?: string;
}) {
  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel={REL}
      className="group inline-flex min-h-[52px] items-center overflow-hidden rounded-full bg-[#c82a5c] pl-7 pr-1.5 text-[11px] font-black uppercase tracking-[0.16em] text-white shadow-[0_16px_40px_rgba(200,42,92,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e0386e] hover:shadow-[0_22px_50px_rgba(200,42,92,0.45)]"
    >
      <span>{label}</span>
      <span className="ml-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-base transition-transform duration-300 group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}

const features = [
  {
    number: "01",
    title: "Meet Like-Minded Men",
    text: "Explore a focused dating environment for gay singles looking to connect with other men.",
  },
  {
    number: "02",
    title: "Discover Gay Dating",
    text: "Browse profiles and start conversations at your own pace with people who share similar interests.",
  },
  {
    number: "03",
    title: "Connect Your Way",
    text: "Whether you're looking for conversation, social connections, or casual dating, explore possibilities on your terms.",
  },
];

const signals = [
  "Gay singles",
  "Men seeking men",
  "Conversation or casual",
  "Adults 18+",
];

export default function ManFinderGayDatingLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0709] font-sans text-[#f6f1ee]">
      {/* Top bar */}
      <div className="relative z-20 border-b border-white/10 bg-[#0a0709]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
          <ManFinderLogo size="sm" />
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel={REL}
            className="hidden text-[10px] font-bold uppercase tracking-[0.22em] text-white/55 transition hover:text-[#ff6b93] sm:inline"
          >
            Open ManFinder →
          </a>
        </div>
      </div>

      {/* HERO — split editorial */}
      <section className="relative">
        <div className="mx-auto grid min-h-[720px] max-w-6xl lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-5 py-16 lg:px-8 lg:py-24">
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[#c82a5c]/40 bg-[#c82a5c]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff6b93]">
              Gay dating · Adults 18+
            </p>

            <h1 className="mt-7 max-w-xl text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] sm:text-6xl lg:text-[4.6rem]">
              Explore gay dating
              <span className="mt-2 block font-serif-accent text-4xl font-normal lowercase italic tracking-normal text-[#ff6b93] sm:text-5xl">
                on your terms.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/62 sm:text-lg">
              Discover a focused destination for gay dating where men can
              explore profiles, meet like-minded people, and start new
              connections at their own pace.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {signals.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-white/55"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10">
              <ExploreCta label="Explore ManFinder" />
            </div>

            <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/30">
              External destination · Affiliate disclosure
            </p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
            <Image
              src={manFinderVisuals.hero}
              alt="Premium gay dating lifestyle"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0709] via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-[#0a0709]/20 lg:to-[#0a0709]" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/45 px-5 py-4 backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff6b93]">
                ManFinder
              </p>
              <p className="mt-1 text-sm text-white/75">
                A focused place for gay singles to meet gay men online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO strip */}
      <section className="border-y border-white/10 bg-[#120b10]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff6b93]">
              A focused dating experience
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[1.05] tracking-tight sm:text-4xl">
              Gay dating sites
              <span className="mt-1 block font-serif-accent text-2xl font-normal lowercase italic tracking-normal text-white/45">
                made for connection.
              </span>
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-8 text-white/55 sm:text-base">
            <p>
              Finding the right gay dating platform can make meeting new
              people feel more straightforward. Online gay dating gives
              singles the flexibility to browse profiles, discover
              compatible people, and begin conversations when the time feels
              right.
            </p>
            <p>
              If you&apos;re comparing dating sites for gay men or simply want
              another place to explore gay dating, ManFinder provides a
              focused destination for men interested in meeting gay men and
              discovering new connections.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES — stacked rows */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff6b93]">
                Why explore
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl">
                A simpler way to{" "}
                <span className="text-[#ff6b93]">meet gay men.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/40">
              Browse, chat, and decide how far each connection goes — without
              a mixed-audience dating feed.
            </p>
          </div>

          <div className="divide-y divide-white/10 overflow-hidden rounded-3xl border border-white/10 bg-[#11090e]">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="grid gap-4 px-6 py-8 transition-colors duration-300 hover:bg-white/[0.03] md:grid-cols-[88px_1fr_1.4fr] md:items-start md:gap-8 md:px-8"
              >
                <span className="font-serif-accent text-3xl italic text-[#ff6b93]">
                  {feature.number}
                </span>
                <h3 className="text-lg font-black uppercase tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm leading-7 text-white/50">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE / CONTENT */}
      <section className="border-y border-white/10">
        <div className="mx-auto grid max-w-6xl overflow-hidden lg:grid-cols-2">
          <div className="relative min-h-[480px]">
            <Image
              src={manFinderVisuals.side}
              alt="Man enjoying a refined evening setting"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0709] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0a0709]/70" />
          </div>

          <div className="flex items-center bg-[#0e090c] px-5 py-16 lg:px-14">
            <div className="max-w-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff6b93]">
                Online gay dating
              </p>
              <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
                Meet people who
                <span className="mt-1 block font-serif-accent text-3xl font-normal lowercase italic tracking-normal text-[#ff6b93]">
                  share your interests.
                </span>
              </h2>
              <p className="mt-6 text-sm leading-8 text-white/55">
                Gay dating online gives you more flexibility in how you
                discover new people. Take your time exploring profiles,
                starting conversations, and deciding which connections are
                worth pursuing.
              </p>
              <p className="mt-5 text-sm leading-8 text-white/55">
                For men searching for gay dating connections, a focused
                platform can be a useful alternative to general dating apps
                and mixed-audience dating sites.
              </p>
              <div className="mt-9">
                <ExploreCta label="Discover ManFinder" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff6b93]">
            Explore your options
          </p>
          <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Looking for gay dating sites?
          </h2>
          <div className="mt-8 space-y-5 border-l-2 border-[#c82a5c]/50 pl-6 text-sm leading-8 text-white/50">
            <p>
              Choosing between gay dating sites often comes down to what kind
              of experience you&apos;re looking for. Some gay singles want
              meaningful conversations, while others are interested in
              meeting new people, social connections, or casual gay dating.
            </p>
            <p>
              Dating sites for gay men can provide a more focused environment
              for discovering people with similar interests. Online gay dating
              also gives you the opportunity to explore profiles and begin
              conversations without the pressure of an immediate meeting.
            </p>
            <p>
              If you&apos;re ready to explore gay dating and meet gay men online,
              ManFinder is one destination worth discovering. Visit the
              platform to learn more and decide whether it fits what you&apos;re
              looking for.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="relative min-h-[520px]">
          <Image
            src={manFinderVisuals.wide}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#0a0709]/78" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0709] via-[#0a0709]/40 to-transparent" />

          <div className="relative mx-auto flex min-h-[520px] max-w-6xl items-center px-5 py-20 lg:px-8">
            <div className="max-w-2xl rounded-3xl border border-white/10 bg-black/35 p-8 backdrop-blur-md sm:p-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff6b93]">
                Your next connection could be closer than you think
              </p>
              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
                Ready to explore
                <span className="mt-2 block font-serif-accent text-3xl font-normal lowercase italic tracking-normal text-[#ff6b93] sm:text-4xl">
                  gay dating?
                </span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/60">
                Discover ManFinder and explore a focused destination for men
                interested in gay dating and new connections.
              </p>
              <div className="mt-9">
                <ExploreCta label="Explore ManFinder" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-5 py-8">
        <p className="mx-auto max-w-5xl text-center text-[10px] leading-5 text-white/25">
          Affiliate disclosure: TheDateCompass may earn a commission if you
          visit ManFinder through links on this page. Adults 18+ only.
          Availability, features, and terms are determined by the destination
          site.
        </p>
      </footer>

      <FixedOfferCta
        offer={manFinderOffer}
        placement="manfinder_fixed_cta"
        ctaLabel="Explore ManFinder →"
      />
    </main>
  );
}
