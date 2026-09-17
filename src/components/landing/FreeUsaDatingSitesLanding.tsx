import Image from "next/image";
import { MessageCircle, Sparkles, Star, Users } from "lucide-react";
import { adultImages } from "@/data/adultOfferImages";
import { usaOffers, type UsaOffer } from "@/data/usaOffers";

const PINK = "#fb2f83";
const REL = "sponsored nofollow noopener noreferrer";

/** Names confirmed as “free to join” in existing offer datasets. */
const FREE_TO_JOIN = new Set([
  "GayBloom",
  "Manfinder",
  "Grannyhunter",
  "TransDate",
  "MilfFinder",
]);

const FEATURED_NAMES = [
  "CheekyCrush",
  "GayBloom",
  "Manfinder",
  "Grannyhunter",
] as const;

function pickOffer(name: string): UsaOffer | undefined {
  const matches = usaOffers.filter((offer) => offer.name === name);
  return matches.find((offer) => offer.featured) ?? matches[0];
}

const featuredOffers = FEATURED_NAMES.map(pickOffer).filter(
  (offer): offer is UsaOffer => Boolean(offer)
);

function freeOption(offer: UsaOffer) {
  return FREE_TO_JOIN.has(offer.name) ? "Free to join" : "Free to explore";
}

function keyFeatures(offer: UsaOffer) {
  return offer.tags.slice(0, 3).join(" · ");
}

const faqs = [
  {
    q: "Are these dating sites free?",
    a: "Pricing is set by each third-party platform. Some listed partners are described as free to join in existing offer data; others may let you browse or register at no charge with optional paid upgrades. Always check current terms on the destination site. We do not claim any service is completely free unless that is confirmed in our offer data.",
  },
  {
    q: "Can I join from the USA?",
    a: "The platforms on this page are drawn from TheDateCompass USA inventory and are presented as available to adults in the United States. Eligibility, geo-restrictions, and signup rules can change, so confirm availability on the partner site.",
  },
  {
    q: "Are these suitable for casual dating?",
    a: "Several listings focus on casual dating, adult social discovery, or low-pressure conversations. Read each platform’s category and description to see whether it matches the kind of connection you want.",
  },
  {
    q: "How does TheDateCompass make money?",
    a: "Some links are affiliate links. If you visit a partner platform through this site, we may earn a commission at no extra cost to you. We do not operate the listed dating services.",
  },
  {
    q: "Do I need to register with TheDateCompass?",
    a: "No. TheDateCompass is a comparison directory. You do not create a dating profile here. When you choose a platform, you leave this site and register directly with that provider if you decide to join.",
  },
];

export default function FreeUsaDatingSitesLanding() {
  return (
    <div className="bg-[#f4f5f8] font-display text-slate-900 antialiased">
      <section className="relative overflow-hidden bg-[#0b1020] text-white">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 85% 15%, rgba(251,47,131,0.28), transparent 55%), radial-gradient(ellipse 45% 40% at 5% 90%, rgba(99,102,241,0.18), transparent 50%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-pink-200">
              🇺🇸 FREE USA DATING
            </p>
            <h1 className="mt-5 max-w-xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Free Dating Sites for{" "}
              <span style={{ color: PINK }}>Casual Connections</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
              Explore dating platforms available in the USA and discover options
              for meeting new people, casual conversations and connections.
            </p>
            <a
              href="#featured"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-full px-7 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(251,47,131,0.35)] transition hover:-translate-y-0.5"
              style={{ backgroundColor: PINK }}
            >
              Explore Free Dating Sites →
            </a>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative h-[22rem] overflow-hidden rounded-[1.75rem] border border-white/15 shadow-2xl sm:h-[28rem]">
              <Image
                src={adultImages.portraitD}
                alt="Dating lifestyle in the USA"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="featured" className="scroll-mt-24 bg-[#0b1020] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Featured Free Dating Sites
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-white/60">
            Partner platforms from our USA listings. Free-to-join labels are used
            only where existing offer data confirms them.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {featuredOffers.map((offer) => (
              <article
                key={offer.name}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-lg transition hover:-translate-y-1 hover:border-pink-400/40"
              >
                <div className="relative h-36 overflow-hidden rounded-2xl">
                  <Image
                    src={offer.image}
                    alt={offer.name}
                    fill
                    sizes="(max-width: 1280px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: PINK }}
                  >
                    {offer.mark}
                  </span>
                  <div>
                    <h3 className="font-semibold">{offer.name}</h3>
                    <p className="text-xs text-white/50">{offer.category}</p>
                  </div>
                </div>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/65">
                  {offer.description}
                </p>
                <div className="mt-3 flex items-center justify-between text-xs text-white/70">
                  <span>{freeOption(offer)}</span>
                  {offer.rating ? (
                    <span className="inline-flex items-center gap-1">
                      <Star size={12} className="fill-amber-400 text-amber-400" />
                      {offer.rating.toFixed(1)}
                    </span>
                  ) : null}
                </div>
                <a
                  href={offer.href}
                  target="_blank"
                  rel={REL}
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full py-3 text-xs font-bold uppercase tracking-wide text-white transition hover:brightness-110"
                  style={{ backgroundColor: PINK }}
                >
                  Visit Site →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Casual Connections
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Casual Dating",
                text: "Low-pressure platforms for chemistry, chats, and easy meetups.",
                Icon: Sparkles,
              },
              {
                title: "Meet New People",
                text: "Browse USA-available listings to discover new conversations.",
                Icon: Users,
              },
              {
                title: "Online Connections",
                text: "Start talking online first, then decide if you want to meet.",
                Icon: MessageCircle,
              },
            ].map(({ title, text, Icon }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div
                  className="grid h-11 w-11 place-items-center rounded-2xl"
                  style={{ backgroundColor: `${PINK}18`, color: PINK }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold tracking-tight">How it works</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                n: "01",
                title: "Choose a platform",
                text: "Compare featured USA listings and pick a style that fits you.",
              },
              {
                n: "02",
                title: "Create your profile",
                text: "Sign up on the partner site. Some are free to join; others offer free exploration with optional upgrades.",
              },
              {
                n: "03",
                title: "Start connecting",
                text: "Message, match, and take conversations at your own pace.",
              },
            ].map((step) => (
              <div
                key={step.n}
                className="rounded-3xl border border-slate-200 bg-[#f8f9fb] p-7"
              >
                <p className="text-sm font-bold tracking-[0.2em]" style={{ color: PINK }}>
                  {step.n}
                </p>
                <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-extrabold tracking-tight">
            Compare dating platforms
          </h2>
          <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Platform</th>
                  <th className="px-4 py-3 font-semibold">Type</th>
                  <th className="px-4 py-3 font-semibold">Key Features</th>
                  <th className="px-4 py-3 font-semibold">Free Option</th>
                  <th className="px-4 py-3 font-semibold">Rating</th>
                  <th className="px-4 py-3 font-semibold">Visit</th>
                </tr>
              </thead>
              <tbody>
                {featuredOffers.map((offer) => (
                  <tr key={offer.name} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-4 font-semibold">{offer.name}</td>
                    <td className="px-4 py-4 text-slate-600">{offer.category}</td>
                    <td className="px-4 py-4 text-slate-600">{keyFeatures(offer)}</td>
                    <td className="px-4 py-4">{freeOption(offer)}</td>
                    <td className="px-4 py-4">
                      {offer.rating ? offer.rating.toFixed(1) : "—"}
                    </td>
                    <td className="px-4 py-4">
                      <a
                        href={offer.href}
                        target="_blank"
                        rel={REL}
                        className="font-semibold hover:underline"
                        style={{ color: PINK }}
                      >
                        Visit →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1020] px-5 py-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="mt-8 space-y-3">
              {faqs.map((item) => (
                <details
                  key={item.q}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4"
                >
                  <summary className="cursor-pointer list-none font-semibold">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div className="relative hidden h-[22rem] overflow-hidden rounded-[1.75rem] lg:block">
            <Image
              src={adultImages.alt}
              alt=""
              fill
              sizes="420px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020] to-transparent" />
          </div>
        </div>
      </section>

      <section className="px-5 py-12 sm:px-8">
        <div
          className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl px-8 py-10 text-white sm:flex-row sm:items-center"
          style={{
            background: `linear-gradient(90deg, #0b1020 0%, ${PINK} 100%)`,
          }}
        >
          <div>
            <h2 className="text-3xl font-extrabold">Ready to Start Connecting?</h2>
            <p className="mt-2 text-white/85">
              Explore dating platforms available in the USA.
            </p>
          </div>
          <a
            href="#featured"
            className="inline-flex h-12 items-center rounded-full bg-white px-7 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            Explore Sites →
          </a>
        </div>
      </section>
    </div>
  );
}
