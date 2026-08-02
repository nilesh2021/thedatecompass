import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Girlfriend Platform 2026 | AI Companion Chat | TheDateCompass",
  description:
    "Discover realistic AI girlfriend platforms with private conversations, customizable personalities, and instant AI companionship. Compare the best AI companion websites in 2026.",
  keywords: [
    "AI Girlfriend",
    "AI Companion",
    "Virtual Girlfriend",
    "AI Chat",
    "AI Relationship",
    "Adult AI Chat",
    "AI Dating",
    "AI Companion Platform",
    "Best AI Girlfriend",
    "AI Girlfriend 2026",
  ],
  alternates: {
    canonical:
      "https://www.thedatecompass.com/category/ai-girlfriend-v2",
  },
};

export default function AIGirlfriendLanding() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#070707] text-white">
        <section className="container mx-auto px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <span className="rounded-full bg-pink-500/20 px-4 py-2 text-sm font-semibold text-pink-400">
              AI Companion
            </span>

            <h1 className="mt-8 text-4xl font-black lg:text-6xl">
              Your Personal
              <span className="block text-pink-500">AI Girlfriend</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Private, realistic conversations with a customizable AI companion.
              Start chatting in seconds — no complicated setup required.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN"
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="rounded-full bg-pink-500 px-6 py-3 font-semibold text-white"
              >
                Start Chatting
              </Link>

              <Link href="#features" className="rounded-full border border-white/20 px-6 py-3 font-semibold">
                Learn More
              </Link>
            </div>

            <div className="mt-12">
              <Image
                src="/images/ai-model.webp"
                alt="AI Model"
                width={900}
                height={600}
                className="mx-auto rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        <section id="features" className="bg-[#0b0b0b] py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold">Features</h2>
              <p className="mt-4 text-gray-400">Real conversations, privacy-first, and fully customizable AI personalities.</p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-semibold">Natural Chat</h3>
                  <p className="mt-2 text-sm text-gray-300">Responsive, human-like conversations.</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-semibold">Private & Secure</h3>
                  <p className="mt-2 text-sm text-gray-300">Your conversations stay private.</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-6">
                  <h3 className="font-semibold">Easy Setup</h3>
                  <p className="mt-2 text-sm text-gray-300">Start chatting instantly with zero configuration.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400">Ready to try?</p>
            <Link
              href="https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN"
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="mt-4 inline-block rounded-full bg-pink-500 px-8 py-3 font-semibold text-white"
            >
              Start Chatting Now
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
