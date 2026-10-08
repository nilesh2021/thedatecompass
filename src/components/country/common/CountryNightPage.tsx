import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import NoiseOverlay from "@/components/theme/NoiseOverlay";
import UKFaq from "@/components/country/uk/UKFaq";

type LinkItem = { href: string; label: string; flag?: string };

const pillLinkClass =
  "inline-flex items-center rounded-full border border-[#ff2d87]/35 bg-[#141a3d] px-4 py-2.5 text-sm font-bold tracking-wide text-cream transition duration-200 hover:bg-[#ff2d87] hover:text-white";

const offerBandStyle = {
  background:
    "radial-gradient(ellipse 70% 55% at 8% 0%, rgba(255, 45, 135, 0.22), transparent 58%), radial-gradient(ellipse 50% 40% at 100% 80%, rgba(40, 60, 140, 0.35), transparent 55%), linear-gradient(180deg, #0c1230 0%, #141a3d 48%, #0c1230 100%)",
};

export default function CountryNightPage({
  eyebrow,
  title,
  lede,
  note,
  ctaLabel,
  image,
  imageAlt,
  offerEyebrow,
  offerTitle,
  offerDescription,
  offerBanner,
  offers,
  disclaimer,
  checklistTitle = "What to consider when choosing a platform",
  checklist,
  faqEyebrow,
  faqTitle,
  faqSubtitle,
  faqs,
  guideId,
  guideEyebrow,
  guideTitle,
  guideDescription,
  guide,
  categoriesId,
  categoriesTitle,
  categoriesDescription,
  categories,
  countriesTitleId,
  countries,
  extra,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
  note?: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
  offerEyebrow: string;
  offerTitle: string;
  offerDescription: string;
  offerBanner?: ReactNode;
  offers: ReactNode;
  disclaimer: string;
  checklistTitle?: string;
  checklist?: ReactNode;
  faqEyebrow: string;
  faqTitle: string;
  faqSubtitle: string;
  faqs: { question: string; answer: string }[];
  guideId: string;
  guideEyebrow: string;
  guideTitle: string;
  guideDescription: string;
  guide: ReactNode;
  categoriesId: string;
  categoriesTitle: string;
  categoriesDescription: string;
  categories: LinkItem[];
  countriesTitleId: string;
  countries: LinkItem[];
  extra?: ReactNode;
}) {
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
                  {eyebrow}
                </p>
                <h1 className="text-5xl font-extrabold leading-[0.95] tracking-[-0.045em] md:text-6xl">
                  {title}
                </h1>
                <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-cream/68">
                  {lede}
                </p>
                {note ? (
                  <p className="mt-4 max-w-xl text-sm leading-7 text-cream/55">{note}</p>
                ) : null}
                <div className="mt-10">
                  <a
                    href="#offers"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff2d87] px-7 py-4 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_24px_rgba(255,45,135,0.28)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
                  >
                    {ctaLabel}
                    <ArrowRight size={18} className="transition group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="group relative overflow-hidden rounded-3xl border border-[#ff2d87]/30">
                  <Image
                    src={image}
                    alt={imageAlt}
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

          <section id="offers" className="relative scroll-mt-20 overflow-x-clip py-16 sm:py-24" style={offerBandStyle}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
                  {offerEyebrow}
                </p>
                <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">
                  {offerTitle}
                </h2>
                <p className="mx-auto mt-5 max-w-xl font-serif-accent text-lg italic leading-relaxed text-cream/70 sm:text-xl">
                  {offerDescription}
                </p>
              </div>
              {offerBanner}
              <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 xl:grid-cols-3">{offers}</div>
              <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-6 text-cream/45">
                {disclaimer}
              </p>
              {checklist ? (
                <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-[#ff2d87]/35 bg-[#141a3d] p-6 text-left sm:p-8">
                  <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                    {checklistTitle}
                  </h3>
                  <ul className="mt-5 space-y-3 text-sm leading-relaxed text-cream/70 sm:text-base">
                    {checklist}
                  </ul>
                </div>
              ) : null}
            </div>
          </section>

          <UKFaq items={faqs} eyebrow={faqEyebrow} title={faqTitle} subtitle={faqSubtitle} />

          <section id={guideId} className="scroll-mt-20 border-t border-[#ff2d87]/15 py-16 sm:py-20">
            <div className="mx-auto max-w-3xl px-6">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
                {guideEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">
                {guideTitle}
              </h2>
              <p className="mt-5 font-serif-accent text-lg italic text-cream/65 sm:text-xl">
                {guideDescription}
              </p>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-cream/70">{guide}</div>
              {extra}
            </div>
          </section>

          <section className="border-t border-[#ff2d87]/15 py-16 sm:py-20">
            <div className="mx-auto max-w-7xl space-y-16 px-6">
              <div id={categoriesId}>
                <div className="mx-auto max-w-3xl text-center">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#ff2d87]">
                    Related categories
                  </p>
                  <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">
                    {categoriesTitle}
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl font-serif-accent text-lg italic text-cream/65 sm:text-xl">
                    {categoriesDescription}
                  </p>
                </div>
                <ul className="mt-8 flex flex-wrap justify-center gap-3">
                  {categories.map((category) => (
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
                  <h2 id={countriesTitleId} className="mt-4 text-3xl font-extrabold tracking-[-0.04em] sm:text-5xl">
                    Explore other countries
                  </h2>
                  <p className="mx-auto mt-5 max-w-xl font-serif-accent text-lg italic text-cream/65 sm:text-xl">
                    Compare similar shortlists on our other active country pages.
                  </p>
                </div>
                <ul className="mt-8 flex flex-wrap justify-center gap-3">
                  {countries.map((country) => (
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
