import {
  Globe,
  ShieldCheck,
 BadgeCheck,
  RefreshCcw,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Country-Specific Recommendations",
    description:
      "Only see dating platforms available in your country. No more clicking offers that aren't accessible in your region.",
  },
  {
    icon: RefreshCcw,
    title: "Updated Offers",
    description:
      "Our listings are reviewed regularly to help you discover active and available dating platforms.",
  },
  {
    icon: BadgeCheck,
    title: "Adults Only",
    description:
      "TheDateCompass lists platforms intended only for adults aged 18 years or older.",
  },
  {
    icon: ShieldCheck,
    title: "Independent Directory",
    description:
      "We compare third-party dating platforms independently. We don&apos;t own or operate any listed service.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-28">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#E83E9B]/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-[#E83E9B]/30 bg-[#E83E9B]/10 px-5 py-2 text-sm font-semibold text-[#E83E9B]">
            Why Choose TheDateCompass
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-white">
            Why Thousands of Visitors
            <br />
            Trust TheDateCompass
          </h2>

          <p className="mx-auto mt-6 text-lg leading-8 text-white/65">
            We help visitors discover dating platforms available in their
            country while keeping the experience transparent, independent,
            and easy to compare.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {features.map((item) => {

            const Icon = item.icon;

            return (

              <article
                key={item.title}
                className="group rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#E83E9B]/40 hover:shadow-[0_25px_70px_rgba(232,62,155,.15)]"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E83E9B] to-pink-500 shadow-lg shadow-pink-500/30">

                    <Icon
                      size={30}
                      className="text-white"
                    />

                  </div>

                  <CheckCircle2
                    size={24}
                    className="text-green-400 opacity-80"
                  />

                </div>

                <h3 className="mt-8 text-3xl font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-white/65">
                  {item.description}
                </p>

              </article>

            );
          })}

        </div>

        {/* Bottom Stats */}

        <div className="mt-24 grid gap-6 border-t border-white/10 pt-12 sm:grid-cols-3">

          {[
            ["190+", "Countries Supported"],
            ["18+", "Adults Only"],
            ["Daily", "Offer Updates"],
          ].map(([number, label]) => (

            <div
              key={label}
              className="text-center"
            >

              <h3 className="text-5xl font-black text-[#E83E9B]">
                {number}
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/45">
                {label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}