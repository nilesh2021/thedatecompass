import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import TrackedAffiliateLink from "@/components/affiliate/TrackedAffiliateLink";
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

const FEATURED_NAMES = ["CheekyCrush", "Manfinder", "Grannyhunter"] as const;

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

export const freeOnlineDatingUsaSinglesFaqs = [
  {
    question: "Is free online dating in the USA really free?",
    answer:
      "Pricing is set by each third-party platform. Some listed partners are free to join in our offer data; others let you browse or register at no charge with optional paid upgrades. Always check current terms on the destination site.",
  },
  {
    question: "Can US singles use these dating sites?",
    answer:
      "Yes. The platforms on this page come from TheDateCompass USA inventory and are presented as available to adults in the United States. Eligibility and geo rules can change, so confirm availability on the partner site.",
  },
  {
    question: "Are these sites for singles looking for casual or serious dating?",
    answer:
      "Listings cover casual dating, gay dating, and mature connections for singles. Read each platform’s category and description to match the kind of connection you want.",
  },
  {
    question: "How does TheDateCompass make money?",
    answer:
      "Some links are affiliate links. If you visit a partner platform through this site, we may earn a commission at no extra cost to you. We do not operate the listed dating services.",
  },
];

export default function FreeOnlineDatingUsaSinglesLanding() {
  return (
    <div className="bg-[#f4f5f8] font-display text-slate-900 antialiased">
      <section className="relative overflow-hidden bg-[#0b1020] px-5 py-10 text-white sm:px-8 sm:py-12">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 85% 15%, rgba(251,47,131,0.28), transparent 55%), radial-gradient(ellipse 45% 40% at 5% 90%, rgba(99,102,241,0.18), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-pink-200">
            Free Online Dating · USA Singles
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Free Online Dating in the USA for{" "}
            <span style={{ color: PINK }}>Singles</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            Browse free dating sites in the US for singles—free-to-join and
            free-to-explore platforms, then visit a partner site to start
            connecting.
          </p>
          <a
            href="#offers"
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(251,47,131,0.35)] transition hover:-translate-y-0.5"
            style={{ backgroundColor: PINK }}
          >
            View dating sites →
          </a>
        </div>
      </section>

      <section
        id="offers"
        className="scroll-mt-24 bg-[#0b1020] px-5 py-10 text-white sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Top free online dating picks for US singles
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-white/60">
            Three partner platforms from our USA listings. Free-to-join labels
            are used only where offer data confirms them.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {featuredOffers.map((offer) => (
              <article
                key={offer.name}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-lg transition hover:-translate-y-1 hover:border-pink-400/40"
              >
                <div className="relative h-28 overflow-hidden rounded-xl">
                  <Image
                    src={offer.image}
                    alt={offer.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <span
                    className="grid h-9 w-9 place-items-center rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: PINK }}
                  >
                    {offer.mark}
                  </span>
                  <div>
                    <h3 className="font-semibold">{offer.name}</h3>
                    <p className="text-xs text-white/50">{offer.category}</p>
                  </div>
                </div>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/65">
                  {offer.description}
                </p>
                <div className="mt-2 flex items-center justify-between text-xs text-white/70">
                  <span>{freeOption(offer)}</span>
                  {offer.rating ? (
                    <span className="inline-flex items-center gap-1">
                      <Star
                        size={12}
                        className="fill-amber-400 text-amber-400"
                      />
                      {offer.rating.toFixed(1)}
                    </span>
                  ) : null}
                </div>
                <TrackedAffiliateLink
                  href={offer.href}
                  placement="usa_singles_card"
                  country="usa"
                  target="_blank"
                  rel={REL}
                  className="mt-3 inline-flex w-full items-center justify-center rounded-full py-2.5 text-xs font-bold uppercase tracking-wide text-white transition hover:brightness-110"
                  style={{ backgroundColor: PINK }}
                >
                  Visit Site →
                </TrackedAffiliateLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            How free online dating works for USA singles
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Looking for all dating sites in US free options for singles? Free
            online dating in the USA usually means creating a profile on a
            partner site, browsing nearby or interest-based matches, and
            messaging at your own pace. Some platforms are free to join; others
            let you explore first with optional upgrades. Adults 18+ only. For
            the full USA catalog by category, see our{" "}
            <Link
              href="/usa"
              className="font-semibold underline-offset-2 hover:underline"
              style={{ color: PINK }}
            >
              adult dating sites in the USA
            </Link>{" "}
            guide or{" "}
            <Link
              href="/free-usa-dating-sites"
              className="font-semibold underline-offset-2 hover:underline"
              style={{ color: PINK }}
            >
              free USA dating sites
            </Link>
            .
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Choose by intention—casual chats, LGBTQ+ community, or mature
            connections—then open the partner site to confirm pricing,
            verification, and local availability before you sign up.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Compare dating platforms
          </h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
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
                  <tr
                    key={offer.name}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="px-4 py-3 font-semibold">{offer.name}</td>
                    <td className="px-4 py-3 text-slate-600">
                      {offer.category}
                    </td>
                    <td className="px-4 py-3 text-slate-600">
                      {keyFeatures(offer)}
                    </td>
                    <td className="px-4 py-3">{freeOption(offer)}</td>
                    <td className="px-4 py-3">
                      {offer.rating ? offer.rating.toFixed(1) : "—"}
                    </td>
                    <td className="px-4 py-3">
                      <TrackedAffiliateLink
                        href={offer.href}
                        placement="usa_singles_table"
                        country="usa"
                        target="_blank"
                        rel={REL}
                        className="font-semibold hover:underline"
                        style={{ color: PINK }}
                      >
                        Visit →
                      </TrackedAffiliateLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1020] px-5 py-10 text-white sm:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-6 space-y-2">
            {freeOnlineDatingUsaSinglesFaqs.map((item) => (
              <details
                key={item.question}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                <summary className="cursor-pointer list-none text-sm font-semibold">
                  {item.question}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8">
        <div
          className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 rounded-2xl px-6 py-8 text-white sm:flex-row sm:items-center"
          style={{
            background: `linear-gradient(90deg, #0b1020 0%, ${PINK} 100%)`,
          }}
        >
          <div>
            <h2 className="text-2xl font-extrabold">
              Ready to meet singles online?
            </h2>
            <p className="mt-1 text-sm text-white/85">
              Explore free online dating options available in the USA.
            </p>
          </div>
          <a
            href="#offers"
            className="inline-flex h-11 items-center rounded-full bg-white px-6 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5"
          >
            View sites →
          </a>
        </div>
      </section>
    </div>
  );
}
