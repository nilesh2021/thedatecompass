import Link from "next/link";
import {
  Compass,
  SlidersHorizontal,
  Sparkles,
  UserRound,
} from "lucide-react";
import NoiseOverlay from "@/components/theme/NoiseOverlay";
import styles from "./SexEmulatorLanding.module.css";

const AFFILIATE_URL =
  "https://t.bbwafx.com/358917/9294/0?aff_sub5=SF_0060G000004lmDN";
const CTA_REL = "nofollow sponsored noopener";
const HERO_IMAGE = "https://www.sexemulator.com/images/home_img3.png";

const FEATURES = [
  {
    index: "01",
    icon: UserRound,
    title: "CREATE",
    text: "Build your ideal virtual character.",
  },
  {
    index: "02",
    icon: SlidersHorizontal,
    title: "CUSTOMIZE",
    text: "Shape your experience with detailed customization.",
  },
  {
    index: "03",
    icon: Compass,
    title: "EXPLORE",
    text: "Enter an interactive virtual world.",
  },
] as const;

const STATS = [
  "IMMERSIVE",
  "INTERACTIVE",
  "CUSTOMIZABLE",
  "18+ EXPERIENCE",
] as const;

const TICKER = [
  "VIRTUAL WORLD",
  "ADULT GAMING",
  "CUSTOM AVATARS",
  "IMMERSIVE PLAY",
  "PRIVATE SESSION",
  "18+ ONLY",
] as const;

const SYSTEMS = [
  { label: "AVATAR CORE", value: 92 },
  { label: "WORLD DEPTH", value: 86 },
  { label: "INTIMACY", value: 78 },
  { label: "FREEDOM", value: 95 },
] as const;

const PARTICLES = [
  { top: "12%", left: "8%", delay: "0s", size: 4 },
  { top: "22%", left: "78%", delay: "0.6s", size: 3 },
  { top: "38%", left: "18%", delay: "1.2s", size: 5 },
  { top: "48%", left: "88%", delay: "0.3s", size: 3 },
  { top: "62%", left: "10%", delay: "1.8s", size: 4 },
  { top: "71%", left: "72%", delay: "0.9s", size: 3 },
  { top: "18%", left: "52%", delay: "1.5s", size: 2 },
  { top: "84%", left: "40%", delay: "2.1s", size: 4 },
  { top: "8%", left: "36%", delay: "0.4s", size: 2 },
  { top: "56%", left: "46%", delay: "1.1s", size: 3 },
] as const;

function PlayCta({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel={CTA_REL}
      className={className}
    >
      {children}
    </a>
  );
}

function ViewportCorners() {
  return (
    <>
      {[
        "left-0 top-0 border-l-2 border-t-2",
        "right-0 top-0 border-r-2 border-t-2",
        "left-0 bottom-0 border-b-2 border-l-2",
        "right-0 bottom-0 border-b-2 border-r-2",
      ].map((pos) => (
        <span
          key={pos}
          className={`pointer-events-none absolute h-8 w-8 border-[#ff4ecd]/70 ${pos}`}
          aria-hidden
        />
      ))}
    </>
  );
}

export default function SexEmulatorLanding() {
  const ticker = [...TICKER, ...TICKER];

  return (
    <main className="relative min-h-screen bg-[#070712] font-display text-white">
      <NoiseOverlay />

      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-[#0B0B18]" />
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          className={`absolute -left-24 -top-16 h-[28rem] w-[28rem] rounded-full bg-[#ff2e9a]/25 blur-[120px] ${styles.orbA}`}
        />
        <div
          className={`absolute -right-16 top-[12%] h-[32rem] w-[32rem] rounded-full bg-[#7c3aed]/30 blur-[130px] ${styles.orbB}`}
        />
        <div
          className={`absolute bottom-[-8%] left-1/3 h-[24rem] w-[24rem] rounded-full bg-[#22d3ee]/16 blur-[110px] ${styles.orbC}`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(255,46,154,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(56,189,248,0.12),transparent_50%)]" />
      </div>

      <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-5 py-3.5 sm:px-8 lg:px-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-white/45">
          <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#22d3ee] shadow-[0_0_10px_#22d3ee]" />
          System ready
        </p>
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff4ecd]">
          18+
        </p>
      </div>

      <section className="relative z-10 overflow-x-clip min-h-[calc(100svh-48px)] px-5 pb-16 pt-10 sm:px-8 sm:pt-14 lg:px-12 lg:pb-20 lg:pt-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 lg:min-h-[calc(100svh-140px)]">
          <div className="max-w-2xl animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#ff8ac8] backdrop-blur-md">
              <Sparkles className="h-3 w-3 text-[#38bdf8]" aria-hidden />
              18+ • VIRTUAL ADULT GAMING
            </p>

            <h1 className="mt-6 font-display text-[2.45rem] font-extrabold leading-[0.92] tracking-[-0.04em] sm:text-[2.85rem] md:text-5xl lg:text-[5.05rem]">
              <span className="block text-white">ENTER YOUR</span>
              <span className="mt-1 block bg-gradient-to-r from-[#ff4ecd] via-[#c084fc] to-[#38bdf8] bg-clip-text text-transparent">
                VIRTUAL FANTASY
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-white/60 sm:text-lg">
              Create, customize and explore an immersive virtual world built
              around your fantasies.
            </p>

            <div className="mt-9">
              <PlayCta
                className={`${styles.ctaGlow} inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ff2e9a] via-[#ff4ecd] to-[#d946ef] px-10 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto`}
              >
                PLAY NOW →
              </PlayCta>
              <p className="mt-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white/35 sm:text-left">
                18+ ONLY • ADULT CONTENT
              </p>
            </div>

            <div className="mt-10 hidden items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35 sm:flex">
              <span className="text-[#38bdf8]">Live simulation</span>
              <span className="h-px w-8 bg-white/15" />
              <span>Private session</span>
              <span className="h-px w-8 bg-white/15" />
              <span>Adults only</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-10 rounded-full bg-[#ff2e9a]/25 blur-[90px]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-8 top-4 h-72 w-72 rounded-full bg-[#7c3aed]/30 blur-[80px]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-8 h-56 w-56 rounded-full bg-[#22d3ee]/20 blur-[70px]"
              aria-hidden
            />
            <div
              className={`pointer-events-none absolute inset-x-[-18%] bottom-[-12%] top-[28%] opacity-80 ${styles.gridFloor}`}
              aria-hidden
            />

            <div className={`relative px-1 sm:px-3 ${styles.heroFloat} ${styles.heroGlow}`}>
              <img
                src={HERO_IMAGE}
                alt="Immersive virtual adult gaming character"
                width={820}
                height={706}
                decoding="async"
                fetchPriority="high"
                className={`relative z-[1] h-auto w-full max-w-full ${styles.heroMask}`}
              />

              {PARTICLES.map((p, i) => (
                <span
                  key={i}
                  className={`pointer-events-none absolute z-[2] rounded-full bg-white ${styles.particle}`}
                  style={{
                    top: p.top,
                    left: p.left,
                    width: p.size,
                    height: p.size,
                    animationDelay: p.delay,
                    boxShadow: "0 0 10px rgba(255,78,205,0.8)",
                  }}
                  aria-hidden
                />
              ))}

              <ViewportCorners />
            </div>

            <div className="relative z-[3] mt-4 flex flex-wrap items-center justify-between gap-3 px-1 sm:px-3">
              <div
                className={`rounded-2xl border border-white/15 bg-black/45 px-3.5 py-2 backdrop-blur-md ${styles.floatA}`}
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#38bdf8]">
                  Live
                </p>
                <p className="mt-0.5 text-xs font-semibold text-white/90">
                  Avatar linked
                </p>
              </div>
              <div
                className={`rounded-2xl border border-white/15 bg-black/45 px-3.5 py-2 backdrop-blur-md ${styles.floatB}`}
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#ff4ecd]">
                  Customize
                </p>
                <p className="mt-0.5 text-xs font-semibold text-white/90">
                  World · Desire
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="relative z-10 overflow-hidden border-y border-white/10 bg-white/[0.03]"
        aria-hidden
      >
        <div className="flex w-max animate-marquee py-3.5">
          {ticker.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap px-7 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/45 after:ml-7 after:text-[#ff4ecd]/70 after:content-['◆']"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="relative z-10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#38bdf8]">
              Game systems
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">
              YOUR VIRTUAL WORLD.
              <span className="mt-1 block bg-gradient-to-r from-[#ff4ecd] to-[#c084fc] bg-clip-text text-transparent">
                YOUR RULES.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {FEATURES.map(({ index, icon: Icon, title, text }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.25)] backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:border-[#ff4ecd]/35 hover:shadow-[0_24px_60px_rgba(255,46,154,0.16)]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#ff2e9a]/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ff4ecd]/25 bg-[#ff2e9a]/10 text-[#ff4ecd] shadow-[0_0_24px_rgba(255,46,154,0.2)]">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <span className="font-display text-sm font-bold tracking-[0.2em] text-white/25">
                    {index}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-xl font-extrabold tracking-[0.16em] text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{text}</p>
                <div className="mt-6 h-px w-12 bg-gradient-to-r from-[#ff4ecd] to-transparent transition-all duration-300 group-hover:w-24" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#12121f]/90 via-[#0B0B18] to-[#14081a] px-6 py-12 shadow-[0_40px_90px_rgba(0,0,0,0.45)] sm:px-10 lg:px-14 lg:py-16">
          <div
            className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#7c3aed]/20 blur-[90px]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[#ff2e9a]/15 blur-[80px]"
            aria-hidden
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#ff8ac8]">
                Experience
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl">
                MORE THAN A GAME
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/60">
                Step into an interactive virtual experience where your
                imagination becomes part of the gameplay.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-3">
                {STATS.map((stat, i) => (
                  <span key={stat} className="flex items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/80">
                      {stat}
                    </span>
                    {i < STATS.length - 1 ? (
                      <span className="hidden h-3 w-px bg-gradient-to-b from-[#ff4ecd] to-[#38bdf8] sm:block" />
                    ) : null}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.35rem] border border-white/12 bg-black/35 p-5 backdrop-blur-md sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
                  World console
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#22d3ee]">
                  Online
                </p>
              </div>

              <div className="space-y-4">
                {SYSTEMS.map((system) => (
                  <div key={system.label}>
                    <div className="mb-1.5 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.16em]">
                      <span className="text-white/50">{system.label}</span>
                      <span className="text-[#ff4ecd]">{system.value}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#ff2e9a] via-[#a855f7] to-[#38bdf8]"
                        style={{ width: `${system.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2.5">
                {["Player", "Scene", "Desire"].map((slot) => (
                  <div
                    key={slot}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3 text-center"
                  >
                    <div className="mx-auto mb-2 h-8 w-8 rounded-full bg-gradient-to-br from-[#ff4ecd]/50 to-[#38bdf8]/40 blur-[1px]" />
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-white/50">
                      {slot}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-20 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] border border-[#ff4ecd]/25 bg-[#ff2e9a]/10 px-6 py-14 text-center shadow-[0_0_80px_rgba(255,46,154,0.16)] sm:px-10 lg:py-20">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,46,154,0.22),transparent_60%)]"
            aria-hidden
          />
          <div className="relative">
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
              READY TO ENTER?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base text-white/60">
              Your virtual experience is waiting.
            </p>
            <PlayCta
              className={`${styles.ctaGlow} mt-8 inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ff2e9a] to-[#d946ef] px-10 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto`}
            >
              PLAY NOW →
            </PlayCta>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-[11px] leading-6 text-white/40 sm:flex-row sm:text-left">
          <p>18+ Adult Content · Play responsibly.</p>
          <Link
            href="/"
            className="text-white/55 underline underline-offset-2 transition-colors hover:text-white"
          >
            Back to TheDateCompass
          </Link>
        </div>
      </footer>
    </main>
  );
}
