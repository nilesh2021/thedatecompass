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
      className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#d5b06a] px-8 text-[11px] font-black uppercase tracking-[0.18em] text-[#120d0d] shadow-[0_15px_45px_rgba(213,176,106,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e3c481] hover:shadow-[0_20px_60px_rgba(213,176,106,0.3)]"
    >
      <span>{label}</span>

      <span className="transition-transform duration-300 group-hover:translate-x-1">
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
    text: "Whether you&apos;re looking for conversation, social connections, or casual dating, explore possibilities on your terms.",
  },
];

export default function ManFinderGayDatingLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080708] font-sans text-white">

      {/* HERO */}
      <section className="relative min-h-[680px] overflow-hidden">
        <Image
          src={manFinderVisuals.hero}
          alt="Premium gay dating lifestyle"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080708] via-[#080708]/80 to-[#080708]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080708] via-transparent to-[#080708]/40" />

        <div className="relative mx-auto flex min-h-[680px] max-w-6xl items-center px-6 py-20 lg:px-10">
          <div className="max-w-2xl">

            <ManFinderLogo size="md" />

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#d5b06a]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d5b06a]">
                Gay Dating · Adults 18+
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.9] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Explore Gay Dating
              <span className="block text-[#d5b06a]">
                Your Way.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              Discover a focused destination for gay dating where men can
              explore profiles, meet like-minded people, and start new
              connections at their own pace.
            </p>

            <div className="mt-9">
              <ExploreCta label="Explore ManFinder →" />
            </div>

            <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-white/35">
              Adults 18+ · External destination · Affiliate disclosure
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-y border-white/10 bg-[#0c0a0c]">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d5b06a]">
                A focused dating experience
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
                Gay dating sites
                <span className="block text-white/40">
                  made for connection.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-sm leading-8 text-white/55 sm:text-base">
                Finding the right gay dating platform can make meeting new
                people feel more straightforward. Online gay dating gives
                singles the flexibility to browse profiles, discover
                compatible people, and begin conversations when the time feels
                right.
              </p>

              <p className="mt-5 text-sm leading-8 text-white/55 sm:text-base">
                If you&apos;re comparing dating sites for gay men or simply want
                another place to explore gay dating, ManFinder provides a
                focused destination for men interested in meeting gay men and
                discovering new connections.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d5b06a]">
              Why explore
            </p>

            <h2 className="mt-4 text-3xl font-black uppercase tracking-tight sm:text-4xl">
              A simpler way to
              <span className="text-[#d5b06a]"> meet gay men.</span>
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group bg-[#0d0b0d] p-7 transition-colors duration-300 hover:bg-[#131013]"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-[#d5b06a]">
                  {feature.number}
                </span>

                <h3 className="mt-8 text-lg font-black uppercase tracking-tight">
                  {feature.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/45">
                  {feature.text}
                </p>

                <div className="mt-8 h-px w-8 bg-[#d5b06a] transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* IMAGE / CONTENT */}
      <section className="border-y border-white/10 bg-[#0b090b]">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">

          <div className="relative min-h-[460px]">
            <Image
              src={manFinderVisuals.side}
              alt="Man enjoying a refined evening setting"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#0b090b] via-transparent to-transparent" />
          </div>

          <div className="flex items-center px-6 py-16 lg:px-14">

            <div className="max-w-xl">

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#d5b06a]">
                Online gay dating
              </p>

              <h2 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight sm:text-4xl">
                Meet people who
                <span className="block text-[#d5b06a]">
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
                <ExploreCta label="Discover ManFinder →" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-4xl">

          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#d5b06a]">
            Explore your options
          </p>

          <h2 className="mt-4 text-center text-3xl font-black uppercase tracking-tight sm:text-4xl">
            Looking for gay dating sites?
          </h2>

          <div className="mt-8 space-y-5 text-sm leading-8 text-white/50">
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
      <section className="relative overflow-hidden border-t border-white/10">

        <div className="relative min-h-[500px]">
          <Image
            src={manFinderVisuals.wide}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#080708]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080708] via-transparent to-[#080708]" />

          <div className="relative mx-auto flex min-h-[500px] max-w-6xl items-center justify-center px-6 py-20 text-center">

            <div className="max-w-2xl">

              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d5b06a]">
                Your next connection could be closer than you think
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
                Ready to explore
                <span className="block text-[#d5b06a]">
                  gay dating?
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/55">
                Discover ManFinder and explore a focused destination for men
                interested in gay dating and new connections.
              </p>

              <div className="mt-9">
                <ExploreCta label="Explore ManFinder →" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* DISCLOSURE */}
      <footer className="px-6 py-8">
        <p className="mx-auto max-w-5xl text-center text-[10px] leading-5 text-white/25">
          Affiliate disclosure: TheDateCompass may earn a commission if you
          visit ManFinder through links on this page. Adults 18+ only.
          Availability, features, and terms are determined by the destination
          site.
        </p>
      </footer>

      {/* EXISTING FIXED CTA */}
      <FixedOfferCta
        offer={manFinderOffer}
        placement="manfinder_fixed_cta"
        ctaLabel="Explore ManFinder →"
      />

    </main>
  );
}