"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
  datingOfferTabs,
  getOfferTabByRoute,
  type DatingOffer,
} from "@/data/datingOffersTabs";
import "./adult-bs5.css";

const adultTab = getOfferTabByRoute("adult")!;
const casualTab = datingOfferTabs.find((tab) => tab.id === "casual");

const featuredOffers: DatingOffer[] = [
  ...adultTab.offers,
  ...(casualTab?.offers.slice(0, 2) ?? []),
];

const whyItems = [
  {
    num: "01",
    title: "Real traffic signals",
    description:
      "We prioritize platforms with active members and signup flows that don’t stall halfway through.",
  },
  {
    num: "02",
    title: "Niche clarity",
    description:
      "Casual, fetish, or community-focused — each pick is labeled so you know who it’s built for.",
  },
  {
    num: "03",
    title: "Discreet by default",
    description:
      "Private messaging and mobile-friendly profiles matter when you’re browsing on your schedule.",
  },
];

function rankLabel(index: number) {
  return String(index + 1).padStart(2, "0");
}

export default function AdultOffersBs5Landing() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".adult-bs5-page .reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const primaryOffer = featuredOffers[0];

  return (
    <div className="adult-bs5-page">
      <div className="age-bar text-center">
        <div className="container">
          <strong>18+</strong> Adult dating offers · Discreet comparison guide ·
          Affiliate links
        </div>
      </div>

      <nav className="site-nav">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <Link className="navbar-brand-custom" href="/">
              TheDateCompass
            </Link>
            <div className="d-none d-md-flex align-items-center gap-4">
              <a className="nav-link-custom" href="#offers">
                Offers
              </a>
              <a className="nav-link-custom" href="#why">
                Why us
              </a>
              <a className="nav-link-custom" href="#start">
                Get started
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1516589178581-6adb783a0d9d?w=1800&h=1200&fit=crop"
            alt=""
          />
        </div>
        <div className="container">
          <div className="col-lg-7 px-0">
            <p className="hero-brand">TheDateCompass</p>
            <h1 className="hero-title font-display">
              Adult dating offers worth opening tonight.
            </h1>
            <p className="hero-copy">
              Hand-picked platforms for adults who want fast signup, active
              members, and private chat — without the noise.
            </p>
            <div className="hero-actions d-flex flex-wrap gap-3">
              <a href="#offers" className="btn-accent">
                Browse top offers
              </a>
              <a href="#start" className="btn-ghost">
                See how it works
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="trust-strip" aria-hidden="true">
        <div className="trust-track">
          <span>
            Verified picks · Fast signup · Private messaging · Adult-only ·
            Mobile ready ·
          </span>
          <span>
            Verified picks · Fast signup · Private messaging · Adult-only ·
            Mobile ready ·
          </span>
          <span>
            Verified picks · Fast signup · Private messaging · Adult-only ·
            Mobile ready ·
          </span>
          <span>
            Verified picks · Fast signup · Private messaging · Adult-only ·
            Mobile ready ·
          </span>
        </div>
      </div>

      <section className="section" id="offers">
        <div className="container">
          <div className="row g-4 align-items-end mb-5 reveal">
            <div className="col-lg-7">
              <p className="section-kicker">Top adult offers</p>
              <h2 className="section-title font-display">
                Platforms adults actually use.
              </h2>
            </div>
            <div className="col-lg-5">
              <p className="section-lead">
                {adultTab.seoIntro} Tap an offer to visit the official site.
              </p>
            </div>
          </div>

          <div className="offer-list reveal">
            {featuredOffers.map((offer, index) => (
              <a
                key={offer.id}
                className="offer-row"
                href={offer.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
              >
                <div className="offer-rank">{rankLabel(index)}</div>
                <div className="offer-body d-flex align-items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="offer-logo" src={offer.logo} alt="" />
                  <div>
                    {offer.badge ? (
                      <span className="offer-badge">{offer.badge}</span>
                    ) : null}
                    <h3 className="offer-name">{offer.name}</h3>
                    <p className="offer-meta">
                      {offer.rating} ★ · {offer.reviews} reviews ·{" "}
                      {offer.bestFor}
                    </p>
                  </div>
                </div>
                <div className="offer-cta">
                  Visit site <span aria-hidden="true">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0" id="why">
        <div className="container">
          <div className="mb-5 reveal">
            <p className="section-kicker">Why this list</p>
            <h2 className="section-title font-display">
              One job: help you choose faster.
            </h2>
          </div>
          <div className="why-grid reveal">
            {whyItems.map((item) => (
              <article key={item.num} className="why-item">
                <div className="why-num">{item.num}</div>
                <h3 className="font-display">{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0" id="start">
        <div className="container">
          <div className="final-cta reveal">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <h2 className="font-display">Ready when you are.</h2>
                <p
                  className="text-muted-custom mb-0"
                  style={{ maxWidth: "34rem" }}
                >
                  Pick a platform, create a profile in minutes, and start
                  chatting. Adults 18+ only.
                </p>
              </div>
              <div className="col-lg-5 d-flex justify-content-lg-end">
                <a
                  className="btn-ink"
                  href={primaryOffer.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                >
                  Start with {primaryOffer.name}{" "}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="row g-4 pb-4">
            <div className="col-md-6">
              <div className="footer-brand">TheDateCompass</div>
              <p className="small mb-0" style={{ maxWidth: "28rem" }}>
                Independent comparison site for adult dating offers. We may earn
                a commission when you click affiliate links. Always 18+.
              </p>
            </div>
            <div className="col-md-6 d-flex flex-wrap gap-3 justify-content-md-end align-items-start">
              <Link className="footer-link" href="/privacy-policy">
                Privacy
              </Link>
              <Link className="footer-link" href="/terms-and-conditions">
                Terms
              </Link>
              <Link className="footer-link" href="/affiliate-disclosure">
                Affiliate disclosure
              </Link>
              <Link className="footer-link" href="/disclaimer">
                Disclaimer
              </Link>
            </div>
          </div>
          <div className="border-top border-secondary border-opacity-25 pt-3 d-flex flex-wrap justify-content-between gap-2">
            <small>© 2026 TheDateCompass. All rights reserved.</small>
            <small>For adults 18 years or older.</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
