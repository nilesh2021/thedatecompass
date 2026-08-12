
"use client";
// import ScrollToTop from "@/components/ui/ScrollToTop";
 import { germanyOffers } from "@/data/germanyOffers";
import Link from "next/link";
import Image from "next/image";

export default function GermanyLandingPage() {
  return (

    <main className="bg-[radial-gradient(circle_at_top,_#3b0f24_0%,_#120b12_45%,_#090909_100%)] text-white min-h-screen overflow-hidden">

        {/* Platform details */}
        <div className={isFeatured ? "max-w-3xl" : "min-w-0"}>
          <h3
            className={
              isFeatured
                ? "text-3xl font-extrabold tracking-tight text-cream sm:text-4xl"
                : "text-xl font-extrabold tracking-tight text-cream sm:text-2xl"
            }
          >
            {name}
          </h3>

      <header className="border-b border-white/10 bg-white/5 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <span className="text-pink-400 text-xl">♥</span>
            <span className="tracking-wide">LiebesGuide.de</span>
          </div>

          <button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-105 transition-all duration-300 text-white px-5 py-2 rounded-full text-sm font-medium shadow-[0_0_30px_rgba(236,72,153,0.4)]">
            Test winner
          </button>
        </div>
      </header>


      <section className="max-w-6xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center rounded-full bg-white/10 border border-white/10 backdrop-blur-lg text-pink-200 px-4 py-2 text-sm mb-8 shadow-lg">
            Germany’s honest dating guide 2026
          </div>

          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6  ">
            Find the{" "}
            <span className="italic text-pink-400">love</span> you deserve.
          </h1>

          <p className="text-gray-300 text-lg leading-8 mb-10 max-w-xl">
            No more endless swiping and disappointment. We’ve tested the best
            German dating sites so you can invest your time where the real spark
            is.
          </p>

<div className="flex flex-wrap items-center gap-4 mb-12">
  
  <button
    onClick={() => {
      document
        .getElementById("offers")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }}
    className="
      bg-gradient-to-r
      from-pink-500
      to-rose-500
      hover:scale-105
      transition-all
      duration-300
      text-white
      px-8
      py-4
      rounded-full
      font-medium
      shadow-[0_0_40px_rgba(236,72,153,0.35)]
    "
  >
    Compare now →
  </button>

  <button
    className="
      bg-white/10
      border
      border-white/10
      backdrop-blur-lg
      hover:bg-white/20
      transition
      text-white
      px-8
      py-4
      rounded-full
      font-medium
    "
  >
    Read the guide
  </button>

</div>
        </div>

        <div>
          <div className="relative rounded-[36px] overflow-hidden shadow-[0_0_80px_rgba(236,72,153,0.15)] bg-white/5 border border-white/10 backdrop-blur-2xl p-4">
            <Image
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop"
              alt="Dating"
              className="w-full h-[620px] object-cover rounded-[24px]" />
          </div>
        </div>
      </section>


      <section id="offers" className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-5  ">
            The best dating sites compared
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-8">
            Based on success rates, profile quality, pricing, and real user
            experience.
          </p>
        </div>

        <div className="space-y-8">
          {germanyOffers.map((platform) => (
            <div
              key={platform.name}
              className={`relative rounded-[32px] border backdrop-blur-2xl p-8 bg-white/5 ${platform.highlighted
                ? "border-pink-500 shadow-[0_0_50px_rgba(236,72,153,0.15)]"
                : "border-white/10"}`}
            >
              {platform.highlighted && (
                <div className="absolute -top-4 left-8 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-sm px-4 py-2 rounded-full">
                  Test winner 2026
                </div>
              )}

              <div className="grid lg:grid-cols-[180px_1fr_220px] gap-8 items-start">

                <div>
                  <div className="h-20 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl font-bold mb-5">
                    {platform.name}
                  </div>

                  <div className="text-yellow-400 mb-2">★★★★★</div>

                  <div className="text-3xl font-bold mb-1">
                    {platform.score}
                  </div>

                  <p className="uppercase tracking-wider text-xs text-gray-400">
                    Love Guide Score
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-2">
                    {platform.name}
                  </h3>

                  <p className="text-pink-300 font-medium mb-5">
                    {platform.category}
                  </p>

                  <ul className="space-y-3">
                    {platform.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-gray-200"
                      >
                        <span className="text-green-400 mt-1">✔</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <a
                    href={platform.affiliateLink}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:scale-105 transition-all duration-300 text-white py-4 rounded-full font-semibold text-center shadow-[0_0_35px_rgba(236,72,153,0.35)]"
                  >
                    {platform.buttonText}
                  </a>

                  <button className="text-gray-300 hover:text-white transition text-sm">
                    Read the review
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="bg-white/5 border-t border-white/10 backdrop-blur-xl py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-black mb-4  ">
              Frequently Asked Questions
            </h2>

            <p className="text-gray-300 text-lg">
              Everything you need to know about online dating in Germany.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "Are premium memberships worth the money?",
              "Which app is best for committed relationships?",
              "Is online dating popular in Germany?",
              "How long does it take to achieve success?",
            ].map((faq) => (
              <details
                key={faq}
                className="bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 px-6 py-5"
              >
                <summary className="cursor-pointer list-none flex justify-between items-center font-medium">
                  {faq}
                  <span>⌄</span>
                </summary>

                <p className="mt-4 text-gray-300 leading-7">
                  Premium dating platforms usually provide better profile
                  quality, advanced matching systems, and improved privacy
                  protection.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>


      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <div className="font-semibold text-lg mb-2 text-white">
              ♥ LiebesGuide.de
            </div>

            <p className="text-sm text-gray-400 max-w-md">
              Independent guide to dating sites and apps in Germany.
              We are financed through affiliate links.
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm text-gray-400">
            <Link href="/privacy-policy">
              Privacy
            </Link>

            <Link href="/terms-and-conditions">
              Terms and Conditions
            </Link>

            <Link href="/disclaimer">
              Disclaimer
            </Link>
          </div>
        </div>
      </footer>

      {/* <ScrollToTop /> */}
    </main>

  );
}