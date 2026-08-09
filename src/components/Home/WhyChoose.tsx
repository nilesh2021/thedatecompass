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
      "We compare third-party platforms independently. We don’t own or operate any listed service.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-24">
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#E83E9B]/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#E83E9B]/30 bg-[#E83E9B]/10 px-5 py-2 text-sm font-semibold text-[#E83E9B]">
            Why TheDateCompass
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl">
            Transparent dating comparison
            <br />
            by country
          </h2>

          <p className="mx-auto mt-5 text-lg leading-8 text-white/65">
            We help visitors discover third-party dating platforms without
            creating profiles or collecting dating preferences on this site.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="group rounded-[28px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#E83E9B]/40"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E83E9B] to-pink-500 shadow-lg shadow-pink-500/30">
                    <Icon size={26} className="text-white" />
                  </div>
                  <CheckCircle2 size={22} className="text-green-400 opacity-80" />
                </div>
                <h3 className="mt-6 text-xl font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-white/65">{item.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
          {[
            [`${countries.length}`, "Countries listed"],
            [`${usaOffers.length}+`, "Platforms compared"],
            ["18+", "Adults only"],
          ].map(([number, label]) => (
            <div key={label} className="text-center">
              <h3 className="text-4xl font-black text-[#E83E9B]">{number}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/45">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
