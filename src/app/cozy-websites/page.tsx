"use client";

import Image from "next/image";
import Link from "next/link";

const AFFILIATE_LINK =
  "https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN";

export default function OfferLandingPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">

      {/* Hero */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent" />

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="rounded-full bg-pink-500/20 px-4 py-2 text-sm font-semibold text-pink-400">
                ⭐ Editor's Choice
              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
                Discover Your
                <span className="block text-pink-500">
                  Perfect Platform
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                Trusted by thousands of users worldwide. Fast registration,
                premium experience, mobile friendly and secure.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full border border-white/10 px-4 py-2">
                  ✔ Fast Signup
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2">
                  ✔ Secure
                </span>

                <span className="rounded-full border border-white/10 px-4 py-2">
                  ✔ Mobile Friendly
                </span>
              </div>

              <div className="mt-10 flex gap-4">

                <Link
                  href={AFFILIATE_LINK}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="rounded-full bg-pink-500 px-8 py-4 font-semibold transition hover:bg-pink-600"
                >
                  Start Now →
                </Link>

                <Link
                  href="#features"
                  className="rounded-full border border-white/20 px-8 py-4 font-semibold hover:border-pink-500"
                >
                  Learn More
                </Link>

              </div>

            </div>

            {/* Right */}

            <div className="relative">

              <Image
                src="/images/offer.webp"
                alt="Offer"
                width={700}
                height={700}
                priority
                className="rounded-[40px] border border-white/10 object-cover shadow-2xl"
              />

            </div>

          </div>

        </div>
      </section>

      {/* Features */}

      <section
        id="features"
        className="py-20"
      >

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-black">
            Why Choose This Platform
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                icon: "⚡",
                title: "Fast Registration",
              },
              {
                icon: "🔒",
                title: "Private & Secure",
              },
              {
                icon: "📱",
                title: "Mobile Friendly",
              },
              {
                icon: "🌍",
                title: "Worldwide Access",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition hover:-translate-y-2 hover:border-pink-500/40"
              >

                <div className="text-5xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {item.title}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Steps */}

      <section className="bg-[#0d0d0d] py-20">

        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-center text-4xl font-black">
            Get Started In 3 Steps
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            {[
              "Create Account",
              "Verify Email",
              "Start Exploring",
            ].map((step, index) => (

              <div
                key={step}
                className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 text-2xl font-bold">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {step}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div className="mx-auto max-w-5xl px-6">

          <div className="rounded-[40px] border border-pink-500/20 bg-gradient-to-br from-[#151515] to-[#090909] p-12 text-center">

            <h2 className="text-5xl font-black">
              Ready To Get Started?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
              Join thousands of users already enjoying this platform.
            </p>

            <Link
              href={AFFILIATE_LINK}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="mt-10 inline-flex rounded-full bg-pink-500 px-10 py-4 font-semibold transition hover:bg-pink-600"
            >
              🚀 Claim Offer
            </Link>

          </div>

        </div>

      </section>

      {/* Sticky CTA */}

      <div className="fixed bottom-6 right-6 z-50">

        <Link
          href={AFFILIATE_LINK}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          className="rounded-full bg-pink-500 px-6 py-4 font-semibold shadow-lg shadow-pink-500/30 transition hover:scale-105 hover:bg-pink-600"
        >
          🚀 Start Now
        </Link>

      </div>

    </main>
  );
}