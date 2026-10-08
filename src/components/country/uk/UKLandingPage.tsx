import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import NoiseOverlay from "@/components/theme/NoiseOverlay";
import UKOfferCard from "@/components/country/uk/UKOfferCard";
import UKFaq from "@/components/country/uk/UKFaq";
import { ukOffers } from "@/data/countries/uk";

const ukCategories = [
  { href: "/gay-dating", label: "Gay dating" },
  { href: "/top-offers/adult", label: "Adult dating offers" },
  { href: "/top-offers/mature", label: "Mature dating" },
  { href: "/cozy-sites", label: "Cozy & niche sites" },
] as const;

const otherCountries = [
  { href: "/usa", label: "United States", flag: "ðŸ‡ºðŸ‡¸" },
  { href: "/germany", label: "Germany", flag: "ðŸ‡©ðŸ‡ª" },
  { href: "/france", label: "France", flag: "ðŸ‡«ðŸ‡·" },
  { href: "/canada", label: "Canada", flag: "ðŸ‡¨ðŸ‡¦" },
  { href: "/australia", label: "Australia", flag: "ðŸ‡¦ðŸ‡º" },
] as const;

const ukFaqs = [
  {
    question: "What is this UK dating comparison page designed for?",
    answer:
      "It gives United Kingdom visitors a focused place to compare five third-party adult dating listings. Review categories and short descriptions here, then open a provider site if an option looks relevant. TheDateCompass does not operate those platforms.",
  },
  {
    question: "What categories appear on the UK shortlist?",
    answer:
      "Mature dating, adult dating, and trans dating. Use the labels on each cardâ€”and the related category links on this pageâ€”to narrow by what kind of experience you want.",
  },
  {
    question: "Is TheDateCompass a UK dating operator?",
    answer:
      "No. TheDateCompass is an independent comparison website. We do not host member profiles, handle registrations or payments, or provide customer support for the listed services. Offer buttons open external third-party sites.",
  },
  {
    question: "How should UK visitors treat the outbound offer buttons?",
    answer:
      "As a next step for research, not as a finished decision. Read the card on this page first, then check the destination site for current signup rules, privacy settings, and terms. Links may be affiliate links. All listed services are intended for adults 18+ only.",
  },
  {
    question: "What is worth checking before I create a profile?",
    answer:
      "Age and eligibility requirements, the privacy policy and community rules, and how messaging works on that platform today. Features and policies can change, so confirm details on the providerâ€™s live pages before you register.",
  },
];

const pillLinkClass =
  "inline-flex items-center rounded-full border border-[#ff2d87]/35 bg-[#141a3d] px-4 py-2.5 text-sm font-bold tracking-wide text-cream transition duration-200 hover:bg-[#ff2d87] hover:text-white";

export default function UKLandingPage() {
  return (
    <>
      <Header tone="home" />
      <div className="relative bg-[#0c1230]">
        <NoiseOverlay />
        <main className="relative min-h-screen overflow-hidden font-display text-cream">
          <section className="relative overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden
              style={{
                background:
                  "radial-gradient(ellipse 55% 50% at 78% 42%, rgba(255,45,135,0.28), transparent 62%), radial-gradient(ellipse 40% 35% at 12% 80%, rgba(40,70,160,0.2), transparent 55%)",
              }}
            />
            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-20">
              <div>
                <p className="mb-6 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
                  <span className="h-px w-10 bg-[#ff2d87]" aria-hidden />
                  UK Â· Adults 18+
                </p>

                <h1 className="text-5xl font-extrabold leading-[0.9] tracking-[-0.045em] md:text-6xl">
                  Dating offers for{" "}
                  <span className="font-serif-accent italic text-[#ff2d87]">UK</span>{" "}
                  visitors.
                </h1>

                <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-cream/68">
                  A United Kingdomâ€“focused shortlist of third-party dating listings
                  from our catalog. TheDateCompass compares options â€” we do not
                  operate these platforms.
                </p>

                <p className="mt-4 max-w-xl text-sm leading-7 text-cream/55">
                  Compare categories and descriptions on this page, then confirm
                  eligibility, privacy settings, and terms on each provider site
                  before you register. Adults 18+ only.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href="#offers"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff2d87] px-7 py-4 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_24px_rgba(255,45,135,0.28)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
                  >
                    Browse UK offers
                    <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="group relative overflow-hidden rounded-3xl border border-[#ff2d87]/30">
                  <Image
                    src={ukOffers[0]?.image ?? "/images/ai-model.webp"}
                    alt="UK dating offers preview"
                    width={1200}
                    height={800}
                    priority
                    className="h-[520px] w-full object-cover object-top transition duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1230] via-transparent to-black/10" />
                  <div className="absolute inset-0 bg-[#ff2d87]/0 mix-blend-multiply transition duration-500 group-hover:bg-[#ff2d87]/20" />
                </div>
              </div>
            </div>
          </section>

          <section
            id="offers"
            className="relative scroll-mt-20 overflow-x-clip py-16 sm:py-24"
            style={{
              background:
                "radial-gradient(ellipse 70% 55% at 8% 0%, rgba(255, 45, 135, 0.22), transparent 58%), radial-gradient(ellipse 50% 40% at 100% 80%, rgba(40, 60, 140, 0.35), transparent 55%), linear-gradient(180deg, #0c1230 0%, #141a3d 48%, #0c1230 100%)",
            }}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
                  UK offers
                </p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">
                  Five platforms to compare
                </h2>
                <p className="mx-auto mt-5 max-w-xl font-serif-accent text-lg italic leading-relaxed text-cream/70 sm:text-xl">
                  A UK-focused shortlist spanning mature dating, adult dating, and
                  trans dating. Open any card to visit the third-party site.
                </p>
              </div>

              <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 xl:grid-cols-3">
                {ukOffers.map((offer) => (
                  <UKOfferCard key={offer.id} offer={offer} />
                ))}
              </div>

              <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-6 text-cream/45">
                TheDateCompass is an independent comparison site. We may earn a
                commission when you visit a platform through our links. Listed
                services are third-party providers for adults 18+. Always confirm
                current terms and eligibility on the destination site.
              </p>

              <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-[#ff2d87]/35 bg-[#141a3d] p-6 sm:p-8">
                <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                  What to consider when choosing a platform
                </h3>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-cream/70 sm:text-base">
                  <li>
                    <span className="font-semibold text-cream">Categories â€”</span>{" "}
                    Align mature, adult dating, or trans dating listings with the
                    experience you actually want.
                  </li>
                  <li>
                    <span className="font-semibold text-cream">Audience fit â€”</span>{" "}
                    Check who each offer says it is for before you invest time in a
                    signup flow.
                  </li>
                  <li>
                    <span className="font-semibold text-cream">Privacy controls â€”</span>{" "}
                    Look for profile visibility options and clear ways to block or
                    report accounts.
                  </li>
                  <li>
                    <span className="font-semibold text-cream">
                      Communication features â€”
                    </span>{" "}
                    Confirm how messaging and matching work on the destination site.
                  </li>
                  <li>
                    <span className="font-semibold text-cream">Age requirements â€”</span>{" "}
                    All offers on this page are for adults 18+. Providers may set
                    additional eligibility rulesâ€”verify them before registering.
                  </li>
                  <li>
                    <span className="font-semibold text-cream">Destination terms â€”</span>{" "}
                    Policies and features can change. Always review the current terms
                    and privacy policy on the external platform.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <UKFaq items={ukFaqs} />

          <section
            id="uk-dating-guide"
            className="scroll-mt-20 border-t border-[#ff2d87]/15 py-16 sm:py-20"
          >
            <div className="mx-auto max-w-3xl px-6">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
                UK dating guide
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                How to compare adult dating and social platforms in the UK
              </h2>
              <p className="mt-5 font-serif-accent text-lg italic text-cream/65 sm:text-xl">
                An informational guide for United Kingdom visitors who want to
                shortlist third-party options carefully.
              </p>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-cream/70">
                <p>
                  Adult dating and social platforms are easier to evaluate when you
                  separate intention from marketing. This UK page gathers a
                  third-party shortlist so you can see, in one place, whether an
                  offer is framed as mature dating, adult dating, or trans dating.
                  TheDateCompass exists for that comparison moment. We do not run
                  the platforms, host profiles, or manage registrations, payments, or
                  supportâ€”those responsibilities sit with each external provider.
                </p>
                <p>
                  Start by naming the experience you want. Some visitors prefer
                  mature audiences; others want adult dating or inclusive trans
                  dating spaces. Choosing a category first makes the five-offer list
                  below more useful, because you can set aside listings that simply
                  target a different kind of connection.
                </p>
                <p>
                  Next, read the cards that remain for focus and wording. Look at
                  how each platform describes itself and whether that description
                  matches your expectations. If you want more context on how
                  TheDateCompass groups similar themes, follow the related category
                  links on this UK layout. Those pages expand the theme; they do not
                  award rankings or declare a single preferred brand.
                </p>
                <p>
                  Outbound buttons always open third-party destinations. Account
                  rules, moderation tools, interface details, and any paid features
                  are defined on those sites and can change. Before you register,
                  review the providerâ€™s current terms and privacy policy. Confirm
                  age and eligibility requirements. If messaging behaviour, profile
                  visibility, or reporting tools matter to you, locate that
                  information on the destination site rather than assuming this
                  summary includes every operational detail.
                </p>
                <p>
                  Privacy and personal caution should travel with you from shortlist
                  to signup. Prefer platforms that make visibility controls and
                  block/report tools easy to find. Keep early conversations
                  on-platform when you can. Do not share sensitive financial or
                  identity information with people you have not met or do not trust.
                  If online chat later becomes an in-person plan, meet in a public
                  place and tell someone you trust. These are practical habits for
                  adult online dating; they are not assessments of any specific
                  platformâ€™s safety.
                </p>
                <p>
                  Treat this UK page as a comparison aid, not a substitute for your
                  own checks. The five offers above are a curated shortlist for this
                  layout and are not ordered as winners. This guide does not claim
                  which option is most popular, cheapest, or right for every visitor.
                  Shortlist by category here, use related links for theme context,
                  and verify live details on each destination site. If you want to
                  see how similar shortlists are arranged for other countries, use
                  the country links at the bottom of the page.
                </p>
              </div>
            </div>
          </section>

          <section
            className="border-t border-[#ff2d87]/15 py-16 sm:py-20"
          >
            <div className="mx-auto max-w-7xl space-y-16 px-6">
              <div id="uk-related-categories">
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
                    Related categories
                  </p>
                  <h2
                    id="uk-related-categories-title"
                    className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl"
                  >
                    Explore dating categories in the UK
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl font-serif-accent text-lg italic text-cream/65 sm:text-xl">
                    Browse existing category pages that match the offer themes on this
                    UK shortlist.
                  </p>
                </div>
                <ul className="mt-8 flex flex-wrap justify-center gap-3">
                  {ukCategories.map((category) => (
                    <li key={category.href}>
                      <Link href={category.href} className={pillLinkClass}>
                        {category.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
                    More countries
                  </p>
                  <h2
                    id="uk-other-countries"
                    className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl"
                  >
                    Explore other countries
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl font-serif-accent text-lg italic text-cream/65 sm:text-xl">
                    Compare similar shortlists on our other active country pages.
                  </p>
                </div>
                <ul className="mt-8 flex flex-wrap justify-center gap-3">
                  {otherCountries.map((country) => (
                    <li key={country.href}>
                      <Link href={country.href} className={pillLinkClass}>
                        {country.flag} {country.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer tone="home" />
    </>
  );
}
