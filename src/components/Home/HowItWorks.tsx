import Link from "next/link";
import {
  Search,
  ArrowRight,
  ExternalLink,
  Globe2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Globe2,
    title: "Choose your country",
    description:
      "Pick your region to see dating platforms and offers available where you are.",
  },
  {
    number: "02",
    icon: Search,
    title: "Compare by category",
    description:
      "Browse casual dating, gay dating, mature dating, adult social, or AI companion options.",
  },
  {
    number: "03",
    icon: ExternalLink,
    title: "Visit the provider",
    description:
      "Open the affiliate link and continue on the third-party platform to register and connect.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#080808] py-24"
    >
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#E83E9B]/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#E83E9B]/30 bg-[#E83E9B]/10 px-5 py-2 text-sm font-semibold text-[#E83E9B]">
            How it works
          </span>
          <h2 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl">
            From country to connection
            <br />
            in three steps
          </h2>
          <p className="mx-auto mt-5 text-lg leading-8 text-white/65">
            A simple path to compare dating platforms by country before visiting
            a third-party provider.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="group relative rounded-[28px] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#E83E9B]/40"
              >
                <div className="absolute -top-4 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-[#E83E9B] text-sm font-black text-white shadow-xl">
                  {step.number}
                </div>
                <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E83E9B] to-pink-500 shadow-lg shadow-pink-500/30">
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="mt-6 text-2xl font-black text-white">
                  {step.title}
                </h3>
                <p className="mt-4 leading-7 text-white/65">{step.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="#countries"
            className="inline-flex items-center gap-3 rounded-full bg-[#E83E9B] px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500"
          >
            Choose your country
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
