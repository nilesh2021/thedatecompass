"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";

interface TopOffer {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  label: string;
  url: string;
  image: string;
}

const categories = ["Dating", "AI Platform", "VPN", "Finance"];

const offers: TopOffer[] = [
  {
    title: "Premium Dating",
    subtitle: "Bestseller",
    description: "Find meaningful connections with advanced matching algorithms designed for compatibility that lasts.",
    badge: "Dating",
    label: "View Offer →",
    url: "#",
    image: "/images/ai-model.webp",
  },
  {
    title: "Elite Singles",
    subtitle: "Professional",
    description: "A refined dating experience crafted for professionals who value ambition and depth.",
    badge: "Dating",
    label: "View Offer →",
    url: "#",
    image: "/images/chat-ai.webp",
  },
  {
    title: "HeartSync",
    subtitle: "AI Matching",
    description: "AI powered dating recommendations that learn your taste and get better every day.",
    badge: "Dating",
    label: "View Offer →",
    url: "#",
    image: "/images/ai-model-3.webp",
  },
  {
    title: "Dreamz.ai",
    subtitle: "AI Companion",
    description: "Create your own personalized AI companion with immersive conversations and custom personalities.",
    badge: "AI Platform",
    label: "View Offer →",
    url: "#",
    image: "/images/ai-model.webp",
  },
  {
    title: "ChatCraft AI",
    subtitle: "Bot Builder",
    description: "Build realistic chat experiences for customers, communities, and content creation.",
    badge: "AI Platform",
    label: "View Offer →",
    url: "#",
    image: "/images/chat-ai.webp",
  },
  {
    title: "Secure VPN",
    subtitle: "Privacy First",
    description: "Browse safely and securely with fast global VPN access and strong encryption.",
    badge: "VPN",
    label: "View Offer →",
    url: "#",
    image: "/images/ai-model-3.webp",
  },
  {
    title: "Streaming VPN",
    subtitle: "Fast Access",
    description: "Unlock streaming libraries worldwide with no throttling and premium speed.",
    badge: "VPN",
    label: "View Offer →",
    url: "#",
    image: "/images/ai-model.webp",
  },
  {
    title: "Trading Platform",
    subtitle: "Smart Finance",
    description: "Invest and trade with confidence using modern tools and expert market insight.",
    badge: "Finance",
    label: "View Offer →",
    url: "#",
    image: "/images/chat-ai.webp",
  },
  {
    title: "Credit Service",
    subtitle: "Instant Access",
    description: "Access financial products quickly with credit solutions designed for today.",
    badge: "Finance",
    label: "View Offer →",
    url: "#",
    image: "/images/ai-model-3.webp",
  },
];

export default function TopOffersPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const filteredOffers = offers.filter((offer) => offer.badge === activeCategory);

  return (
<>
     {/* <Header /> */}
    <main className="min-h-screen bg-[#07070f] text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#09070f] via-[#05040a] to-[#05030a]" />
      <div className="pointer-events-none absolute left-10 top-10 h-72 w-72 rounded-full bg-[#a712d4]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-20 h-72 w-72 rounded-full bg-[#8e2bff]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-6 lg:px-8">
        

        <section className="mx-auto max-w-4xl pt-10 text-center">
          <span className="inline-flex rounded-full border border-[#a712d4]/20 bg-[#a712d4]/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-[#f3c6ff]">
            Premium Offers Directory
          </span>

          <h1 className="mt-8 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Discover The Best
            <span className="block bg-gradient-to-r from-[#f37fe6] via-[#e946ff] to-[#8e2bff] bg-clip-text text-transparent">
              Offers In One Place
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-400 sm:text-lg">
            A hand-curated directory of top platforms, software, services and affiliate offers — organized by category and ranked for quality.
          </p>
        </section>

        {/* <section className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_40px_80px_rgba(0,0,0,0.18)]">
            <p className="text-4xl font-bold text-white">4</p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-gray-400">Categories</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_40px_80px_rgba(0,0,0,0.18)]">
            <p className="text-4xl font-bold text-white">10+</p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-gray-400">Offers</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_40px_80px_rgba(0,0,0,0.18)]">
            <p className="text-4xl font-bold text-white">100%</p>
            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-gray-400">Verified</p>
          </div>
        </section> */}

        <section className="mt-12">
          <div className="mx-auto flex w-full max-w-3xl justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-3 shadow-[0_30px_60px_rgba(0,0,0,0.16)]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "bg-[#a712d4] text-white shadow-lg shadow-[#a712d4]/30"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-4 shadow-[0_30px_60px_rgba(0,0,0,0.16)]">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#c4b5fd]">{activeCategory}</p>
              <h2 className="mt-3 text-3xl font-bold text-white">Top {activeCategory} Offers</h2>
              <p className="mt-2 text-sm text-gray-400">Handpicked, verified and ranked. Tap any card to view the full offer details.</p>
            </div>
            <div className="rounded-full border border-[#8e2bff]/20 bg-[#0c0717] px-4 py-2 text-sm text-[#d8b4fe]">
              Curated weekly
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 xl:grid-cols-3">
          {filteredOffers.map((offer) => (
            <div key={offer.title} className="group overflow-hidden rounded-[32px] border border-white/10 bg-[#05030a]/80 shadow-[0_25px_80px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:border-[#a712d4]/40">
              <div className="relative overflow-hidden rounded-t-[32px]">
                <Image src={offer.image} alt={offer.title} width={1000} height={600} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute left-4 top-4 rounded-full bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur-xl">
                  {offer.badge}
                </div>
                <div className="absolute right-4 top-4 rounded-full bg-[#f973b4] px-3 py-2 text-xs font-semibold text-[#08070f]">
                  Featured
                </div>
              </div>

              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-[#f9a8d4]">{offer.subtitle}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{offer.title}</h3>
                  </div>
                  <button className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200 transition hover:bg-[#a712d4]/15 hover:text-white">
                    ♥
                  </button>
                </div>
                <p className="text-sm leading-6 text-gray-400">{offer.description}</p>
                <div className="flex items-center justify-between gap-4">
                  <button className="rounded-full bg-gradient-to-r from-[#f37fe6] to-[#8e2bff] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">
                    {offer.label}
                  </button>
                  <div className="text-xs uppercase tracking-[0.35em] text-[#a78bfa]">Verified</div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>

    <Footer />
    </>
  );
}
