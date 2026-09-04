"use client";

import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Image from "next/image";
import Link from "next/link";
import { trackAffiliateClick } from "@/lib/analytics";

const AFFILIATE_URL =
  "https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN";
const OFFER_NAME = "Dreamz.ai";

export default function AIGirlfriendV2() {
  return (
    <>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Best AI Companion Platform",
      description:
        "Discover AI companion platforms and compare their features.",
      url:
        "https://www.thedatecompass.com/category/ai-girlfriend-v2",
    }),
  }}
/>
    <Header/>
       <section className="min-h-screen bg-[#070707] text-white">

        {/* Hero */}

        <section className="container mx-auto px-6 py-24">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="rounded-full bg-pink-500/20 px-4 py-2 text-sm font-semibold text-pink-400">
                AI Companion Platform
              </span>

              <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

               Best AI Companion 
                <span className="block text-pink-500">
                 Platform for Adults in 2026
                </span>

              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

                Experience realistic conversations, personalized AI
                personalities and private chats available anytime,
                anywhere.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

              <Link
    href={AFFILIATE_URL}
    target="_blank"
    rel="sponsored nofollow noopener noreferrer"
    onClick={() => trackAffiliateClick(OFFER_NAME, "hero")}
    className="rounded-full bg-pink-500 px-8 py-4 font-bold text-white"
  >
    ❤️ Start Chatting
  </Link>

                <Link
                  href="#features"
                  className="rounded-full border border-white/20 px-8 py-4 font-semibold transition hover:border-pink-500"
                >
                  Learn More
                </Link>

              </div>

              <div className="mt-10 flex gap-8">

                <div>

                  <h2 className="text-3xl font-bold">
                    500K+
                  </h2>

                  <p className="text-gray-500">
                    Members
                  </p>

                </div>

                <div>

                  <h2 className="text-3xl font-bold">
                    ★★★★★
                  </h2>

                  <p className="text-gray-500">
                    User Rating
                  </p>

                </div>

              </div>

            </div>

            {/* Right */}

            <div className="relative">

              <div className="absolute -inset-10 rounded-full bg-pink-500 blur-[120px] opacity-30"></div>

              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGZlbWFsZSUyMGZhY2V8ZW58MHx8fHwxNjg4NzQ1MDk0&auto=format&fit=crop&w=600&q=60"
                alt="AI Companion"
                width={600}
                height={750}
                priority
                className="relative mx-auto rounded-[40px]"
              />

            </div>

          </div>

        </section>

      </section>

      {/* ================= FEATURES ================= */}

<section
  id="features"
  className="bg-[#0b0b0b] py-24"
>
  <div className="container mx-auto px-6">

    <div className="mx-auto max-w-3xl text-center">

      <span className="rounded-full bg-pink-500/10 px-5 py-2 text-sm font-semibold text-pink-400">
        Why Choose Our AI Companion
      </span>

      <h2 className="mt-6 text-4xl font-black lg:text-5xl">

        Everything You Need For
        <span className="block text-pink-500">
          Meaningful Conversations
        </span>

      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-400">

        Enjoy realistic conversations, personalized AI personalities,
        and a secure experience designed for adults.

      </p>

    </div>

    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {[
        {
          icon: "💬",
          title: "Natural Conversations",
          text: "Chat with intelligent AI companions that respond naturally."
        },
        {
          icon: "❤️",
          title: "Personalized Companion",
          text: "Customize personality, appearance, and conversation style."
        },
        {
          icon: "🔒",
          title: "Private & Secure",
          text: "Your conversations remain private and confidential."
        },
        {
          icon: "⚡",
          title: "Instant Access",
          text: "Start chatting within seconds without complicated setup."
        },
        {
          icon: "📱",
          title: "Works Everywhere",
          text: "Compatible with desktop, tablet, and mobile devices."
        },
        {
          icon: "🌍",
          title: "Available 24/7",
          text: "Your AI companion is always available whenever you need."
        },
      ].map((item) => (

        <div
          key={item.title}
          className="group rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-500/40 hover:bg-white/10"
        >

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/15 text-3xl">

            {item.icon}

          </div>

          <h3 className="mt-8 text-2xl font-bold text-white">

            {item.title}

          </h3>

          <p className="mt-4 leading-8 text-gray-400">

            {item.text}

          </p>

        </div>

      ))}

    </div>

  </div>
</section>{/* ================= GALLERY ================= */}

<section className="bg-[#070707] py-24">

  <div className="container mx-auto px-6">

    <div className="mx-auto mb-16 max-w-3xl text-center">

      <span className="rounded-full bg-pink-500/10 px-5 py-2 text-sm font-semibold text-pink-400">
        AI Experience
      </span>

      <h2 className="mt-6 text-4xl font-black lg:text-5xl">

        Discover Your
        <span className="block text-pink-500">
          AI Companion
        </span>

      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-400">

        Explore beautiful AI personalities designed for engaging
        conversations, companionship, and immersive experiences.

      </p>

    </div>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {/* Large Image */}

      <div className="lg:col-span-2 lg:row-span-2 overflow-hidden rounded-[32px]">

        <Image
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          alt="AI Companion"
          width={900}
          height={900}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />

      </div>

      {/* Image 2 */}

      <div className="overflow-hidden rounded-[28px]">

        <Image
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
          alt="AI Chat"
          width={500}
          height={500}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />

      </div>

      {/* Image 3 */}

      <div className="overflow-hidden rounded-[28px]">

        <Image
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
          alt="Virtual Girlfriend"
          width={500}
          height={500}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />

      </div>

      {/* Image 4 */}

      <div className="overflow-hidden rounded-[28px]">

        <Image
          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-4.0.3&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGZlbWFsZSUyMGZhY2V8ZW58MHx8fHwxNjg4NzQ1MDk0&auto=format&fit=crop&w=500&q=60"
          alt="AI Relationship"
          width={500}
          height={500}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />

      </div>

      {/* Image 5 */}

      <div className="overflow-hidden rounded-[28px]">

        <Image
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
          alt="AI Companion Platform"
          width={500}
          height={500}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />

      </div>

    </div>

  </div>

</section>{/* ================= WHY USERS LOVE IT ================= */}

<section className="bg-[#0b0b0b] py-24">

  <div className="container mx-auto px-6">

    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Left Image */}

      <div className="relative">

        <div className="absolute -inset-6 rounded-[40px] bg-pink-500/20 blur-3xl"></div>

        <Image
          src="https://images.unsplash.com/photo-1504593811423-6dd665756598"
          alt="AI Companion"
          width={650}
          height={800}
          className="relative mx-auto rounded-[40px] object-cover shadow-2xl"
        />

      </div>

      {/* Right Content */}

      <div>

        <span className="rounded-full bg-pink-500/10 px-5 py-2 text-sm font-semibold text-pink-400">
          Why Thousands Choose AI Companions
        </span>

        <h2 className="mt-6 text-4xl font-black leading-tight lg:text-5xl">

          More Than Just
          <span className="block text-pink-500">
            A Simple Chat
          </span>

        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-400">

          Experience intelligent conversations, personalized personalities,
          and a private environment designed for adults looking for engaging
          AI companionship.

        </p>

        <div className="mt-10 space-y-6">

          {[
            "💬 Natural and engaging conversations",
            "🎭 Customize your AI companion",
            "🔒 Safe and private experience",
            "⚡ Instant access with fast signup",
            "📱 Works on desktop and mobile",
            "🌍 Available anytime, 24/7",
          ].map((item) => (

            <div
              key={item}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-pink-500/40 hover:bg-white/10"
            >

              <div className="text-2xl">
                {item.split(" ")[0]}
              </div>

              <p className="text-lg text-gray-300">
                {item.substring(2)}
              </p>

            </div>

          ))}

        </div>

        {/* CTA */}

        <Link
          href={AFFILIATE_URL}
          target="_blank"
          rel="sponsored nofollow noopener noreferrer"
          onClick={() => trackAffiliateClick(OFFER_NAME, "features-cta")}
          className="mt-12 inline-flex items-center rounded-full bg-pink-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-pink-600"
        >
          Start Your AI Journey →
        </Link>

      </div>

    </div>

  </div>

</section>{/* ================= MAIN CTA ================= */}

<section className="relative overflow-hidden bg-[#070707] py-24">

  {/* Background Glow */}

  <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[180px]" />

  <div className="relative container mx-auto px-6">

    <div className="mx-auto max-w-5xl overflow-hidden rounded-[40px] border border-pink-500/20 bg-gradient-to-br from-[#141414] to-[#090909] p-12 shadow-[0_0_80px_rgba(236,72,153,.15)]">

      <div className="grid items-center gap-12 lg:grid-cols-2">

        {/* Left */}

        <div>

          <span className="rounded-full bg-pink-500/15 px-4 py-2 text-sm font-semibold text-pink-400">
            Start Today
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight lg:text-5xl">

            Your Perfect
            <span className="block text-pink-500">
              AI Companion
            </span>
            Is Waiting

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">

            Join thousands of users enjoying intelligent conversations,
            customizable AI personalities, and private chats anytime,
            anywhere.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

          <Link
    href={AFFILIATE_URL}
    target="_blank"
    rel="sponsored nofollow noopener noreferrer"
    onClick={() => trackAffiliateClick(OFFER_NAME, "mid-cta")}
    className="rounded-full bg-pink-500 px-8 py-4 font-bold text-white"
  >
    ❤️ Start Chatting
  </Link>

            <Link
              href="#faq"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:border-pink-500"
            >
              Learn More
            </Link>

          </div>

        </div>

        {/* Right */}

        <div className="grid grid-cols-2 gap-5">

          {[
            "🔒 Private & Secure",
            "💬 Smart Conversations",
            "⚡ Instant Access",
            "📱 Mobile Friendly",
            "❤️ Personalized AI",
            "🌍 Available 24/7",
          ].map((item) => (

            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition duration-300 hover:border-pink-500/40 hover:bg-white/10"
            >

              <p className="text-lg font-medium">

                {item}

              </p>

            </div>

          ))}

        </div>

      </div>

    </div>

  </div>

</section>{/* ================= FAQ ================= */}

<section
  id="faq"
  className="bg-[#0b0b0b] py-24"
>

  <div className="container mx-auto max-w-5xl px-6">

    <div className="text-center">

      <span className="rounded-full bg-pink-500/10 px-5 py-2 text-sm font-semibold text-pink-400">
        Frequently Asked Questions
      </span>

      <h2 className="mt-6 text-4xl font-black lg:text-5xl">

        Everything You
        <span className="block text-pink-500">
          Need To Know
        </span>

      </h2>

      <p className="mt-6 text-lg text-gray-400">

        Learn more before starting your AI companion experience.

      </p>

    </div>

    <div className="mt-16 space-y-5">

      {[
        {
          q: "What is an AI companion?",
          a: "An AI companion is a virtual assistant designed to have natural conversations, provide companionship, and offer interactive experiences for adults."
        },
        {
          q: "Is registration free?",
          a: "Most AI companion platforms allow users to register for free. Premium plans may unlock additional features and customization options."
        },
        {
          q: "Can I use it on my phone?",
          a: "Yes. Most AI companion platforms are optimized for smartphones, tablets, and desktop devices."
        },
        {
          q: "Is my privacy protected?",
          a: "Leading AI companion platforms prioritize user privacy and use secure technologies to help protect conversations and personal information."
        }
      ].map((item, index) => (

        <details
          key={index}
          className="group rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:border-pink-500/30"
        >

          <summary className="cursor-pointer list-none text-xl font-semibold text-white flex justify-between items-center">

            {item.q}

            <span className="text-pink-500 transition group-open:rotate-45">
              +
            </span>

          </summary>

          <p className="mt-5 leading-8 text-gray-400">

            {item.a}

          </p>

        </details>

      ))}

    </div>

  </div>

</section>{/* ================= FINAL CTA ================= */}

<section className="relative overflow-hidden bg-[#050505] py-28">

  {/* Background Glow */}

  <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[180px]" />

  <div className="relative container mx-auto px-6">

    <div className="mx-auto max-w-5xl rounded-[40px] border border-pink-500/20 bg-gradient-to-br from-[#111111] to-[#080808] px-8 py-16 text-center shadow-[0_20px_80px_rgba(236,72,153,.15)] lg:px-16">

      <span className="inline-flex rounded-full bg-pink-500/15 px-5 py-2 text-sm font-semibold text-pink-400">

        Ready to Start?

      </span>

      <h2 className="mt-8 text-4xl font-black leading-tight lg:text-6xl">

        Your AI Companion
        <span className="block text-pink-500">

          Is Waiting For You

        </span>

      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

        Discover engaging conversations, personalized AI personalities,
        and private interactions whenever you want. Start your journey
        with one of the most popular AI companion platforms today.

      </p>

      {/* CTA */}

      <div className="mt-12">

     <Link
    href={AFFILIATE_URL}
    target="_blank"
    rel="sponsored nofollow noopener noreferrer"
    onClick={() => trackAffiliateClick(OFFER_NAME, "footer-cta")}
    className="rounded-full bg-pink-500 px-8 py-4 font-bold text-white"
  >
    ❤️ Start Chatting
  </Link>
      </div>

      {/* Trust Badges */}

      <div className="mt-12 flex flex-wrap justify-center gap-4">

        {[
          "🔒 Secure",
          "❤️ Private",
          "📱 Mobile Friendly",
          "⚡ Fast Signup",
          "🌍 Available 24/7",
          "18+ Adults Only",
        ].map((item) => (

          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300"
          >
            {item}
          </span>

        ))}

      </div>

      {/* Disclaimer */}

      <p className="mx-auto mt-10 max-w-3xl text-sm leading-7 text-gray-500">

        <strong>TheDateCompass</strong> is an independent comparison
        website. Clicking the button above will redirect you to our
        recommended partner platform. This page contains affiliate links,
        and we may receive a commission if you register through them.

      </p>

    </div>

  </div>

</section>
<div className="fixed bottom-5 right-5 z-50">
  <Link
    href={AFFILIATE_URL}
    target="_blank"
    rel="sponsored nofollow noopener noreferrer"
    onClick={() => trackAffiliateClick(OFFER_NAME, "fixed-cta")}
    className="rounded-full bg-pink-500 px-6 py-4 font-bold text-white shadow-lg"
  >
    ❤️ Start Chatting
  </Link>
</div>
<Footer/>
    </>
  );
}