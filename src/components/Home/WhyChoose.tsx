import {
  Globe,
  ShieldCheck,
  BadgeCheck,
  RefreshCcw,
  CheckCircle2,
} from "lucide-react";
import { countries } from "@/data/countries";
import { usaOffers } from "@/data/usaOffers";

const features = [
  {
    icon: Globe,
    title: "Country-based listings",
    description:
      "See dating platforms organized by country so you can focus on offers available in your region.",
  },
  {
    icon: RefreshCcw,
    title: "Updated comparisons",
    description:
      "Featured offers and affiliate links are reviewed so you can compare active platforms more confidently.",
  },
  {
    icon: BadgeCheck,
    title: "Adults 18+ only",
    description:
      "Every offer on TheDateCompass is intended only for adults aged 18 years or older.",
  },
  {
    icon: ShieldCheck,
    title: "Independent directory",
    description:
      "We compare third-party platforms independently. We don't own or operate any listed service.",
  },
];

export default function WhyChoose() {
  return (
    <section className="tdc-section-pitch py-24 font-display">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="tdc-eyebrow">Why TheDateCompass</p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-cream sm:text-5xl">
            Transparent dating comparison by country
          </h2>

          <p className="mx-auto mt-5 text-lg text-cream/65">
            We help visitors discover third-party dating platforms without
            creating profiles on this site.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="border border-cream/10 bg-cream/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-brand-rose/30"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center border border-brand-rose/30 bg-brand-rose/10">
                    <Icon size={26} className="text-brand-rose" />
                  </div>
                  <CheckCircle2 size={22} className="text-brand-mint opacity-80" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-cream">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-cream/65">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 grid gap-6 border-t border-cream/10 pt-10 sm:grid-cols-3">
          {[
            [`${countries.length}`, "Countries listed"],
            [`${usaOffers.length}+`, "Platforms compared"],
            ["18+", "Adults only"],
          ].map(([number, label]) => (
            <div key={label} className="text-center">
              <h3 className="text-4xl font-extrabold text-brand-rose">{number}</h3>
              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-fog">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
