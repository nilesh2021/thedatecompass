"use client";

import Link from "next/link";
import { trackAffiliateClick } from "@/lib/analytics";

const AFFILIATE_URL =
  "https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN";
const OFFER_NAME = "Dreamz.ai";

export default function AIPlatformPage() {
  const features = [
    {
      icon: "💬",
      title: "Smart Conversations",
      text: "Interact with advanced AI designed to understand context and respond naturally.",
    },
    {
      icon: "⚡",
      title: "Fast Responses",
      text: "Get answers, ideas, and support in seconds.",
    },
    {
      icon: "🔒",
      title: "Private & Secure",
      text: "Built with privacy and security in mind.",
    },
    {
      icon: "🌎",
      title: "Available Anytime",
      text: "Access your AI assistant whenever you need it.",
    },
    {
      icon: "📱",
      title: "Multi-Device",
      text: "Works seamlessly across desktop, tablet, and mobile.",
    },
    {
      icon: "🚀",
      title: "Productivity Focused",
      text: "Help with writing, research, planning, and more.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ec489955,transparent_50%)]" />
        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[180px]" />

        <div className="relative container mx-auto px-6 py-32">
          <div className="mx-auto max-w-5xl text-center">

            <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-5 py-2 text-sm text-pink-400">
              Next Generation AI Platform
            </span>

            <h1 className="mt-8 text-6xl font-black leading-tight lg:text-8xl">
              The Future of
              <span className="block bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                AI Conversations
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-400">
              Experience intelligent conversations, productivity tools,
              creative assistance, and personalized AI experiences.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                href={AFFILIATE_URL}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                onClick={() => trackAffiliateClick(OFFER_NAME, "hero")}
                className="rounded-full bg-pink-500 px-6 py-3 font-semibold text-white"
              >
                Get Started
              </Link>

              <Link href="#features" className="rounded-full border border-white/20 px-6 py-3 font-semibold">
                Learn More
              </Link>
            </div>

            <div className="mt-20 grid gap-6 md:grid-cols-3">
              {[
                ["500K+", "Users"],
                ["4.9/5", "Rating"],
                ["24/7", "Availability"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <h3 className="text-5xl font-black bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
                    {value}
                  </h3>

                  <p className="mt-2 text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="bg-[#080808] py-32"
      >
        <div className="container mx-auto px-6">

          <div className="mb-20 text-center">
            <h2 className="text-5xl font-black">
              Built For Modern Users
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-gray-400">
              Everything you need from a modern AI platform.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/20 text-3xl">
                  {feature.icon}
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-400 leading-8">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento */}
      <section className="bg-black py-32">
        <div className="container mx-auto px-6">

          <div className="grid gap-6 lg:grid-cols-3">

            <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-pink-500/15 to-purple-500/10 p-10 lg:col-span-2">
              <h3 className="text-4xl font-bold">
                Advanced AI Technology
              </h3>

              <p className="mt-6 text-gray-300">
                Built using modern AI models capable of delivering
                intelligent and contextual conversations.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10">
              <h3 className="text-2xl font-bold">
                ⚡ Fast & Reliable
              </h3>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10">
              <h3 className="text-2xl font-bold">
                🔒 Secure
              </h3>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10">
              <h3 className="text-2xl font-bold">
                📱 Mobile Ready
              </h3>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-10">
              <h3 className="text-2xl font-bold">
                🌎 Always Available
              </h3>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0b0b0b] py-32">
        <div className="container mx-auto max-w-5xl px-6">

          <div className="text-center">
            <h2 className="text-5xl font-black">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-16 space-y-5">

            {[
              {
                q: "What is this platform?",
                a: "An AI-powered platform designed for conversations, productivity, and assistance."
              },
              {
                q: "Can I use it on mobile?",
                a: "Yes, it works across desktop, tablet, and mobile devices."
              },
              {
                q: "Is my data secure?",
                a: "Security and privacy are core priorities."
              },
              {
                q: "Can I get started quickly?",
                a: "Yes, onboarding is simple and fast."
              }
            ].map((item) => (
              <details
                key={item.q}
                className="rounded-[24px] border border-white/10 bg-white/5 p-6"
              >
                <summary className="cursor-pointer text-xl font-semibold">
                  {item.q}
                </summary>

                <p className="mt-4 text-gray-400">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-black py-32">

        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 blur-[140px]" />

        <div className="relative container mx-auto px-6">

          <div className="mx-auto max-w-6xl rounded-[40px] border border-pink-500/20 bg-[#0f0f0f] p-16 text-center">

            <h2 className="text-5xl font-black lg:text-7xl">
              Ready To Get Started?
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg text-gray-400">
              Join thousands of users already using AI to work smarter,
              create faster, and communicate better.
            </p>

            <div className="mt-8">
              <Link
                href={AFFILIATE_URL}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                onClick={() => trackAffiliateClick(OFFER_NAME, "footer-cta")}
                className="rounded-full bg-pink-500 px-6 py-3 font-semibold text-white"
              >
                Start Free
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}