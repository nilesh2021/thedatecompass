
 
import type { Metadata } from "next";
import Footer from "@/components/Home/Footer";
import Header from  "@/components/Home/Header";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Best Adult Dating Sites in the USA | TheDateCompass",
  description:
    "Explore adult dating and social platforms available in the USA. Compare third-party dating options for casual dating, LGBTQ+ connections, and adult social discovery.",
  keywords: [
    "adult dating sites USA",
    "casual dating sites USA",
    "LGBTQ dating sites USA",
    "adult social platforms USA",
    "dating site comparison USA",
  ],
  alternates: {
    canonical: "https://www.thedatecompass.com/usa",
  },
  openGraph: {
    title: "Adult Dating Sites Available in the USA | TheDateCompass",
    description:
      "Explore third-party adult dating and social platforms available to eligible visitors in the United States.",
    url: "https://www.thedatecompass.com/usa",
    siteName: "TheDateCompass",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adult Dating Sites Available in the USA | TheDateCompass",
    description:
      "Explore third-party adult dating and social platforms available to eligible visitors in the United States.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};
const usaOffers = [
  {
    name: "CheekyCrush",
    category: "Casual dating",
    description:
      "A casual adult dating option for people looking to explore new connections.",
    badge: "USA available",
    mark: "C",
    accent: "from-[#E83E9B] via-[#F15BAF] to-[#F58BC5]",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk11.com/358917/10377/0?po=6456&aff_sub5=SF_006OG000004lmDN",
  },
  {
    name: "GayBloom",
    category: "LGBTQ+ dating",
    description:
      "An inclusive adult dating option for LGBTQ+ singles and communities.",
    badge: "USA available",
    mark: "G",
    accent: "from-[#9B3CE8] via-[#D45CF1] to-[#F58BC5]",
    image:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk11.com/358917/10378/0?po=6456&aff_sub5=SF_006OG000004lmDN",
  },
  {
    name: "LitLainz",
    category: "Adult dating",
    description:
      "An adult dating option available to eligible visitors in the United States.",
    badge: "USA available",
    mark: "L",
    accent: "from-[#6138A8] via-[#9C5CDB] to-[#E83E9B]",
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk11.com/358917/7410?aff_sub5=SF_006OG000004lmDN",
  },
  {
    name: "NaughtyCharm",
    category: "Adult dating",
    description:
      "An adult-focused dating option for people who know what they are looking for.",
    badge: "USA available",
    mark: "N",
    accent: "from-[#8C1D4D] via-[#C8326D] to-[#E83E9B]",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk11.com/358917/10376/0?po=6456&aff_sub5=SF_006OG000004lmDN",
  },
  {
    name: "PridePair",
    category: "LGBTQ+ connections",
    description:
      "An inclusive adult social and dating option for LGBTQ+ visitors in the USA.",
    badge: "USA available",
    mark: "P",
    accent: "from-[#126B78] via-[#2FA5A5] to-[#E83E9B]",
    image:
      "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=80",
    href: "https://t.datsk11.com/358917/10379/0?po=6456&aff_sub5=SF_006OG000004lmDN",
  },
];
const intentions = [
  {
    number: "01",
    title: "Keep it casual",
    text: "Browse relaxed dating options for a fun, low-pressure connection.",
  },
  {
    number: "02",
    title: "Find your community",
    text: "Discover inclusive spaces made for LGBTQ+ singles and conversations.",
  },
  {
    number: "03",
    title: "Be direct",
    text: "Compare adult-focused platforms that suit your particular intentions.",
  },
];

const safetyNotes = [
  "You must be 18 years or older.",
  "Read the provider’s terms and privacy policy.",
  "Never send money to a person you have not met.",
  "Choose public places for early in-person dates.",
];

export default function UsaPage() {
  return (

    <> <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Adult Dating Sites Available in the USA",
          description:
            "A comparison and discovery page for third-party adult dating and social platforms available in the United States.",
          url: "https://www.thedatecompass.com/usa",
          isPartOf: {
            "@type": "WebSite",
            name: "TheDateCompass",
            url: "https://www.thedatecompass.com",
          },
          audience: {
            "@type": "PeopleAudience",
            suggestedMinAge: 18,
          },
          about: [
            "Adult dating sites",
            "Casual dating",
            "LGBTQ+ dating",
            "Dating sites in the USA",
          ],
        }),
      }}
    />

    <Header />
      <main className="min-h-screen bg-[#080808] text-white  antialiased selection:bg-[#E83E9B]/40 selection:text-white">
        {/* -------- HERO SECTION -------- */}
        <section className="relative isolate overflow-hidden bg-[#080808] px-6 pb-20 pt-6 sm:px-8 lg:px-12 lg:pb-28 lg:pt-8">
          {/* Pink glow background */}
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(232,62,155,0.30),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(245,139,197,0.14),transparent_30%),linear-gradient(145deg,#080808_0%,#181018_55%,#080808_100%)]" />
          <div className="absolute -left-32 top-24 -z-10 h-96 w-96 rounded-full bg-[#E83E9B]/20 blur-3xl" />
          <div className="absolute -right-28 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#F58BC5]/10 blur-3xl" />

          {/* Header */}
         

          {/* Hero content */}
          <div className="mx-auto max-w-7xl pb-4 pt-16 text-center sm:pt-20 lg:pt-28">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#E83E9B]/30 bg-[#E83E9B]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#F8B6DA] backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#E83E9B]" />
              Adults-only dating discovery
            </div>

            <h1 className="mx-auto mt-8 max-w-5xl  text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl">
              Explore dating sites
              <br />
              <span className="text-[#E83E9B]">available in the USA.</span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
              TheDateCompass is an independent adult dating site comparison resource for
              visitors in the United States. We review and present third-party platforms
              based on availability and category. We do not operate these platforms or
              manage registrations, profiles, messages, payments, or customer support.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#offers"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#E83E9B] px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white shadow-xl shadow-[#E83E9B]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#F58BC5] hover:text-[#080808]"
              >
                Explore USA options
                <span className="text-lg transition duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white/85 transition duration-300 hover:-translate-y-1 hover:border-[#E83E9B]/60 hover:bg-[#E83E9B]/10"
              >
                How it works
              </a>
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-xs leading-5 text-white/35">
              18+ only. This site contains affiliate links. If you select an offer,
              you will be redirected to an independent third-party provider.
            </p>
          </div>
        </section>

        {/* -------- INTENTIONS SECTION -------- */}
        <section
          id="how-it-works"
          className="bg-[#f3eae4] px-6 py-20 text-[#21151d] sm:px-8 lg:px-12"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a34b68]">
                  Start with your intention
                </p>
                <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                  Every good connection starts with being clear about what you
                  want.
                </h2>
              </div>
              <p className="max-w-sm leading-relaxed text-[#5f4652]">
                Choose a direction, then compare the platforms that best align
                with it.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {intentions.map((intention) => (
                <a
                  key={intention.title}
                  href="#offers"
                  className="group relative rounded-3xl border border-[#ddd0c9] bg-white/70 p-8 shadow-xl shadow-black/5 transition hover:-translate-y-2 hover:border-rose-300 hover:shadow-rose-200/20 backdrop-blur-sm"
                >
                  <span className="text-sm font-bold tracking-[0.2em] text-rose-600/80">
                    {intention.number}
                  </span>
                  <h3 className="mt-6 font-serif text-3xl font-semibold tracking-tight">
                    {intention.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#5f4652]">
                    {intention.text}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rose-700/80 group-hover:text-rose-800">
                    Explore options{" "}
                    <span className="transition group-hover:translate-x-1">→</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* -------- OFFERS SECTION -------- */}
        <section id="offers" className="relative px-6 py-20 sm:px-8 lg:px-12">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,#0f0a0e,#1f1220_60%,#12101a)]" />
          <div className="absolute -left-20 top-1/3 -z-5 h-64 w-64 rounded-full bg-rose-500/5 blur-3xl" />

          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-300/80">
                  USA dating options
                </p>
                <h2 className="mt-3 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                  A little less searching.{" "}
                  <span className="italic text-rose-200/80">
                    A lot more possibility.
                  </span>
                </h2>
              </div>
              <p className="max-w-md leading-relaxed text-white/50">
                Availability, eligibility, and terms vary by platform. Take a
                moment to review each provider before registering.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {usaOffers.map((offer) => (
                <article
                  key={offer.name}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/30 backdrop-blur-sm transition hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  <div className="relative h-60 overflow-hidden rounded-2xl bg-[#1a1018]">
                    <Image
                      src={offer.image}
                      alt={`${offer.name} dating option`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/35 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="inline-block rounded-full border border-white/25 bg-[#E83E9B]/85 px-3.5 py-1 text-xs font-bold tracking-wide text-white backdrop-blur-sm">
                        {offer.badge}
                      </span>

                      <div className="mt-6 flex items-end justify-between">
                        <div>
                          <h3 className="font-serif text-3xl font-semibold tracking-tight text-white">
                            {offer.name}
                          </h3>
                          <p className="mt-1 text-sm font-medium text-white/75">
                            {offer.category}
                          </p>
                        </div>

                        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#E83E9B] text-lg text-white shadow-lg shadow-[#E83E9B]/30 transition group-hover:scale-110">
                          ↗
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="min-h-[4rem] px-1 pt-5 leading-relaxed text-white/60">
                    {offer.description}
                  </p>
                  {offer.href ? (
                    <a
                      href={offer.href}
                      target="_blank"
                      rel="sponsored nofollow noopener noreferrer"
                      className="mt-5 block rounded-full bg-[#E83E9B] px-5 py-3.5 text-center text-sm font-bold text-white transition hover:bg-[#F58BC5] hover:text-[#080808]"
                    >
                      Visit site
                    </a>
                  ) : (
                    <span className="mt-5 block cursor-not-allowed rounded-full bg-white/10 px-5 py-3.5 text-center text-sm font-bold text-white/40">
                      Currently unavailable
                    </span>
                  )}
                </article>
              ))}
            </div>
            <p className="mt-10 text-center text-xs text-white/30">
              TheDateCompass is an independent comparison and discovery site. We
              do not own or operate the third-party platforms listed here.
            </p>
          </div>
        </section>

        {/* -------- SAFETY SECTION -------- */}
        <section className="bg-[#efe4dc] px-6 py-20 text-[#21151d] sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-2xl shadow-black/5 backdrop-blur-sm md:grid-cols-[0.85fr_1.15fr] md:p-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a34b68]">
                A gentle reminder
              </p>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight tracking-tight">
                The best kind of chemistry comes with good judgment.
              </h2>
              <p className="mt-5 leading-relaxed text-[#5f4652]">
                Keep your experience enjoyable by moving thoughtfully and staying
                in control of your information.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {safetyNotes.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-2xl border border-[#ddd0c9] bg-white/60 p-5 font-medium leading-relaxed shadow-sm backdrop-blur-sm"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-rose-200/70 text-sm font-bold text-rose-800">
                    {index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* subtle footer spacer */}
     <Footer />
      </main>

    </>
  );
}
