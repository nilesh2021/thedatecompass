import Link from "next/link";
import {
  Globe2,
  Search,
  HeartHandshake,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Globe2,
    title: "Choose Your Country",
    description:
      "Select your country to discover dating platforms available in your region.",
  },
  {
    number: "02",
    icon: Search,
    title: "Compare Platforms",
    description:
      "Browse trusted dating platforms by category, availability, and purpose.",
  },
  {
    number: "03",
    icon: ExternalLink,
    title: "Visit the Platform",
    description:
      "Click your preferred platform and continue securely to the provider's official website.",
  },
  {
    number: "04",
    icon: HeartHandshake,
    title: "Start Your Journey",
    description:
      "Create your account and begin exploring new connections with confidence.",
  },
];
export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-28">

      {/* Background */}

      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#E83E9B]/10 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-[#E83E9B]/30 bg-[#E83E9B]/10 px-5 py-2 text-sm font-semibold text-[#E83E9B]">
            How It Works
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-white">
            Find Your Perfect
            <br />
            Dating Platform
          </h2>

          <p className="mx-auto mt-6 text-lg leading-8 text-white/65">
            Compare trusted dating platforms in four simple steps.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-[#E83E9B]/40 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">

            {steps.map((step) => {

              const Icon = step.icon;

              return (

                <article
                  key={step.number}
                  className="group relative rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#E83E9B]/40 hover:shadow-[0_25px_70px_rgba(232,62,155,.15)]"
                >

                  {/* Step */}

                  <div className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#E83E9B] text-lg font-black text-white shadow-xl">
                    {step.number}
                  </div>

                  {/* Icon */}

                  <div className="mt-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#E83E9B] to-pink-500 shadow-lg shadow-pink-500/30">

                    <Icon
                      size={34}
                      className="text-white"
                    />

                  </div>

                  {/* Title */}

                  <h3 className="mt-8 text-3xl font-black text-white">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-5 leading-8 text-white/65">
                    {step.description}
                  </p>

                </article>

              );
            })}

          </div>

        </div>

        {/* CTA */}

        <div className="mt-20 text-center">

          <Link
            href="#countries"
            className="inline-flex items-center gap-3 rounded-full bg-[#E83E9B] px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500"
          >
            Explore Dating Platforms

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </section>
  );
}