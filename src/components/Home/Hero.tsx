import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Globe2, HeartHandshake } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#080808]">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[#E83E9B]/20 blur-[180px]" />
        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-500/10 blur-[180px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.02),transparent_70%)]" />
      </div>

      <div className="relative mx-auto grid min-h-[92vh] max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2">

        {/* LEFT CONTENT */}

        <div>

          <span className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm font-semibold text-pink-300 backdrop-blur-xl">
            ❤️ Adults Only • Country Based Dating
          </span>

          <h1 className="mt-8 text-5xl font-black leading-[1.05] text-white md:text-7xl xl:text-8xl">
            Find the
            <span className="block bg-gradient-to-r from-[#E83E9B] via-pink-400 to-[#ff7bc4] bg-clip-text text-transparent">
              Best Dating Sites
            </span>
            for Your Country
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-300">
           TheDateCompass helps you discover trusted dating websites, AI girlfriend platforms, casual dating services, and international matchmaking sites available in your country. We compare features, pricing, privacy, and user experience so you can choose the platform that fits your goals.
          </p>

          {/* CTA */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="#countries"
              className="group inline-flex items-center rounded-full bg-[#E83E9B] px-8 py-4 font-semibold text-white shadow-xl shadow-pink-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500"
            >
              Explore Countries
              <ArrowRight
                size={18}
                className="ml-2 transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/usa"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-pink-500 hover:bg-white/10"
            >
              USA Offers
            </Link>

          </div>

          {/* Stats */}

          <div className="mt-14 grid max-w-xl grid-cols-3 gap-5">

            {[
              {
                number: "150+",
                label: "Countries",
                icon: Globe2,
              },
              {
                number: "18+",
                label: "Adults Only",
                icon: ShieldCheck,
              },
              {
                number: "Daily",
                label: "Updated",
                icon: HeartHandshake,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition duration-300 hover:border-pink-500/30 hover:bg-white/10"
              >
                <item.icon
                  size={26}
                  className="mb-4 text-[#E83E9B]"
                />

                <p className="text-3xl font-black text-white">
                  {item.number}
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-400">
                  {item.label}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="relative hidden lg:block">

          {/* Glow */}

          <div className="absolute -left-12 top-10 h-48 w-48 rounded-full bg-[#E83E9B]/25 blur-[120px]" />

          {/* Floating Badge */}

          <div className="absolute -left-10 top-12 z-20 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-xl shadow-xl">
            <p className="text-xs uppercase tracking-widest text-pink-300">
              Featured
            </p>

            <p className="mt-1 font-bold text-white">
              Trusted Dating Guide
            </p>
          </div>

          {/* Image */}

          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 shadow-[0_40px_100px_rgba(0,0,0,.55)]">

            <Image
              src="/images/ai-companion-hero.png"
              alt="AI companion model in a modern lounge"
              width={700}
              height={900}
              priority
              className="h-[760px] w-full object-cover transition duration-700 hover:scale-105"
            />

          </div>

          {/* Bottom Glass Card */}

          <div className="absolute -bottom-8 right-6 w-72 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-2xl">

            <p className="text-sm text-gray-300">
              Available Categories
            </p>

            <div className="mt-4 flex flex-wrap gap-2">

              {[
                "Casual",
                "Adult",
                "LGBTQ+",
                "International",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-pink-500/20 px-3 py-1 text-xs font-semibold text-pink-200"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
