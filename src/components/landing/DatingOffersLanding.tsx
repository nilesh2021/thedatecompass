"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/top-offers/sparq.css";

const AFFILIATE_LINK =
  "https://t.vlmai-1.com/358917/10461/0?aff_sub5=SF_006OG000004lmDN";

const navLinks = [
  { label: "Pricing", href: "#offers" },
  { label: "About", href: "#how-it-works" },
  { label: "Success Stories", href: "#testimonials" },
  { label: "Contact", href: "#signup" },
];

const deals = [
  {
    title: "Spark Premium",
    badge: "Most popular",
    image:
      "https://images.unsplash.com/photo-1522673607800-1d9837241f65?w=800&h=600&fit=crop",
    url: AFFILIATE_LINK,
  },
  {
    title: "Gold Membership",
    badge: "Limited time",
    image:
      "https://images.unsplash.com/photo-1518199266791-5375a57590ae?w=800&h=600&fit=crop",
    url: AFFILIATE_LINK,
  },
  {
    title: "Spark Premium",
    badge: "30% OFF",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd4a70?w=800&h=600&fit=crop",
    url: AFFILIATE_LINK,
  },
  {
    title: "Gold Membership",
    badge: null,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    url: AFFILIATE_LINK,
  },
];

const steps = [
  {
    number: "01",
    title: "Make it real",
    description:
      "Tell us who you are — not just your best photo. We match on values, humor, and the things that actually matter.",
    align: "left" as const,
  },
  {
    number: "02",
    title: "Meet fewer, better",
    description:
      "No endless swiping. We curate a small number of high-quality matches each week — people worth your time.",
    align: "right" as const,
  },
  {
    number: "03",
    title: "Light the spark",
    description:
      "From first message to first date, we give you the prompts and plans to turn a match into something real.",
    align: "left" as const,
  },
];

const testimonials = [
  {
    quote:
      "I deleted every other app the week I met James. Sparq felt like someone actually cared about finding me the right person.",
    name: "Sarah M.",
    detail: "Brooklyn, NY · Together 2 years",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=88&h=88&fit=crop",
  },
  {
    quote:
      "The match quality is unreal. Three dates in, and I'd already found someone I wanted to keep talking to past midnight.",
    name: "David K.",
    detail: "Austin, TX · Engaged",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=88&h=88&fit=crop",
  },
];

const heroAvatars = [
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=72&h=72&fit=crop",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=72&h=72&fit=crop",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=72&h=72&fit=crop",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=72&h=72&fit=crop",
];

export default function DatingOffersLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="sparq-page min-h-screen">
      {/* Navbar */}
      <nav className="px-4 py-5 lg:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/top-offers" className="font-serif text-2xl font-semibold">
            Sparq.
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <span className="block h-0.5 w-6 bg-[#1a1515]" />
            <span className="block h-0.5 w-6 bg-[#1a1515]" />
            <span className="block h-0.5 w-6 bg-[#1a1515]" />
          </button>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-[#1a1515] transition hover:text-[#f85c50]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-[#1a1515] px-6 py-2.5 text-sm text-white transition hover:bg-[#333] lg:inline-block"
          >
            Join the community
          </a>
        </div>

        {menuOpen && (
          <div className="mx-auto mt-4 max-w-6xl rounded-2xl border border-black/5 bg-white p-4 shadow-lg lg:hidden">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="block py-2 text-sm uppercase tracking-widest"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block rounded-full bg-[#1a1515] px-6 py-3 text-center text-sm text-white"
            >
              Join the community
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="px-4 py-8 lg:px-8 lg:py-12">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Date with intention</p>
            <h1 className="hero-title font-serif mb-5">
              Meet someone worth{" "}
              <em className="text-accent not-italic">staying up for.</em>
            </h1>
            <p className="mb-6 max-w-lg text-[#6b6565]">
              Real connections for people who&apos;d rather have one great
              conversation than a hundred small talks. No games. Just chemistry.
            </p>
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <a
                href={AFFILIATE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#f85c50] px-7 py-3 font-medium text-white transition hover:bg-[#e54a3e]"
              >
                Create a free profile
              </a>
              <a
                href="#offers"
                className="font-medium text-[#1a1515] transition hover:text-[#f85c50]"
              >
                Browse profiles →
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="avatar-stack">
                {heroAvatars.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-full border-2 border-[#fff9f8] object-cover"
                    style={{ marginLeft: i === 0 ? 0 : -10 }}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6b6565]">300+ Active Users</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="hero-arch">
              <span className="member-badge">Premium + exclusive</span>
              <Image
                src="https://images.unsplash.com/photo-1516589178581-6adb783a0d9d?w=600&h=750&fit=crop"
                alt="Couple at sunset"
                width={600}
                height={750}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          <span>
            Butterflies • First dates • Late-night talks • Slow dances •{" "}
          </span>
          <span>
            Butterflies • First dates • Late-night talks • Slow dances •{" "}
          </span>
        </div>
      </div>

      {/* Offers */}
      <section id="offers" className="px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-2">Our offers</p>
              <h2 className="font-serif text-4xl md:text-5xl">
                Deals worth <em className="text-accent not-italic">falling for.</em>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[#6b6565]">
                Premium plans designed for people who take love seriously — and
                want the tools to find it.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {deals.map((deal) => (
              <a
                key={`${deal.title}-${deal.badge ?? "default"}`}
                href={deal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="deal-card"
                style={{ backgroundImage: `url('${deal.image}')` }}
              >
                {deal.badge && <span className="deal-badge">{deal.badge}</span>}
                <div className="deal-content">
                  <h3 className="deal-title">{deal.title}</h3>
                  <span className="deal-arrow">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="bg-[#1a1515] px-4 py-16 text-white lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif mb-12 text-4xl md:text-5xl">
            Three steps between <em className="text-accent not-italic">you</em>{" "}
            and <em className="text-accent not-italic">them.</em>
          </h2>

          <div className="space-y-12">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`grid items-center gap-6 md:grid-cols-12 ${
                  step.align === "right" ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                {step.align === "left" ? (
                  <>
                    <div className="md:col-span-4">
                      <div className="step-number">{step.number}</div>
                    </div>
                    <div className="md:col-span-8">
                      <h3 className="step-title">{step.title}</h3>
                      <p className="max-w-md text-white/60">{step.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:col-span-8">
                      <h3 className="step-title">{step.title}</h3>
                      <p className="max-w-md text-white/60">{step.description}</p>
                    </div>
                    <div className="md:col-span-4 md:text-right">
                      <div className="step-number">{step.number}</div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-4 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="eyebrow mb-2">Hear from our members</p>
          <h2 className="font-serif mb-10 text-4xl md:text-5xl">
            They swiped. They stayed.
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.name} className="testimonial-card">
                <div className="quote-icon">&ldquo;</div>
                <p className="testimonial-text">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={44}
                    height={44}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-sm text-[#6b6565]">{item.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="px-4 py-10 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="cta-banner">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div>
                <h2 className="font-serif mb-3">
                  Your free week <em className="italic">starts</em> the second
                  you sign up.
                </h2>
                <p className="opacity-75">
                  No credit card. No commitment. Just a week to see what real
                  matchmaking feels like.
                </p>
              </div>
              <div className="flex justify-start lg:justify-end">
                <form
                  className="email-group"
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.open(AFFILIATE_LINK, "_blank", "noopener,noreferrer");
                  }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit">Get started</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-[#1a1515] px-4 pb-6 pt-12 text-white lg:px-8">
        <div className="relative z-[1] mx-auto max-w-6xl">
          <div className="grid gap-8 pb-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="font-serif mb-3 text-2xl">Sparq.</div>
              <p className="max-w-xs text-sm text-white/50">
                Dating for people who believe in slow burns, deep talks, and
                love worth waiting for.
              </p>
            </div>
            <div className="md:col-span-3">
              <p className="mb-4 text-xs uppercase tracking-widest text-white/50">
                Company
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/terms-and-conditions" className="text-white/70 hover:text-white">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-white/70 hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <a href="#signup" className="text-white/70 hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#offers" className="text-white/70 hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:col-span-3">
              <p className="mb-4 text-xs uppercase tracking-widest text-white/50">
                Connect
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-white/70 hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/70 hover:text-white">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-watermark">find your spark</div>

          <div className="relative z-[1] flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <small className="text-white/50">
              © 2026 Sparq. All rights reserved.
            </small>
            <div className="flex gap-4 text-sm">
              <Link href="/privacy-policy" className="text-white/70 hover:text-white">
                Privacy
              </Link>
              <Link href="/terms-and-conditions" className="text-white/70 hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
