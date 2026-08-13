"use client";

import { useEffect } from "react";
import Link from "next/link";
import { getOfferTabByRoute } from "@/data/datingOffersTabs";
import "./cheekycrush.css";

const casualTab = getOfferTabByRoute("casual")!;
const offer =
  casualTab.offers.find((item) => item.slug === "cheekycrush") ??
  casualTab.offers[0];

const promises = [
  {
    num: "01",
    title: "In before the small talk dies",
    description:
      "Quick registration and active members mean you’re chatting while the spark is still warm — not waiting for a match that never replies.",
  },
  {
    num: "02",
    title: "Private by design",
    description:
      "Discreet messaging and profile controls keep the vibe fun without putting your personal life on blast.",
  },
  {
    num: "03",
    title: "Built for phones",
    description:
      "Browse, flirt, and plan late-night plans from anywhere. The experience stays smooth on mobile.",
  },
];

const steps = [
  {
    index: "01",
    title: "Create your profile",
    description:
      "Sign up in minutes. Add a photo, set your intentions, and you’re in.",
  },
  {
    index: "02",
    title: "Browse who’s nearby",
    description:
      "Explore verified, adult profiles that match the energy you’re looking for.",
  },
  {
    index: "03",
    title: "Start the conversation",
    description:
      "Send a message, keep it playful, and see where the chemistry goes.",
  },
];

export default function CheekyCrushLanding() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".cc-page .cc-reveal");
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
      { threshold: 0.14, rootMargin: "0px 0px -36px 0px" },
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="cc-page">
      <div className="cc-age">
        <strong>18+</strong> Adult casual dating · Affiliate offer · Join free
        to start chatting
      </div>

      <nav className="cc-nav">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <span className="cc-brand-mark">{offer.name}</span>
            <a
              className="cc-nav-cta"
              href={offer.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              Join free <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </nav>

      <header className="cc-hero">
        <div className="cc-hero-media" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd4a70?w=1800&h=1200&fit=crop"
            alt=""
          />
        </div>
        <div className="container">
          <div className="col-lg-8 px-0">
            <h1 className="cc-hero-brand">
              Cheeky<em>Crush</em>
            </h1>
            <p className="cc-hero-line">
              Casual dating for adults who don’t want the long wait.
            </p>
            <p className="cc-hero-copy">
              Fast signup, flirty chats, and private messaging — built for
              people who know what they want tonight.
            </p>
            <div className="cc-hero-actions">
              <a
                className="cc-btn-flame cc-pulse"
                href={offer.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
              >
                Create your free profile <span aria-hidden="true">→</span>
              </a>
              <a className="cc-btn-ghost" href="#how">
                See how it works
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="cc-band" aria-hidden="true">
        <div className="cc-band-track">
          <span>
            Quick registration · Verified members · Private messaging · Mobile
            friendly · Adults 18+ ·
          </span>
          <span>
            Quick registration · Verified members · Private messaging · Mobile
            friendly · Adults 18+ ·
          </span>
          <span>
            Quick registration · Verified members · Private messaging · Mobile
            friendly · Adults 18+ ·
          </span>
          <span>
            Quick registration · Verified members · Private messaging · Mobile
            friendly · Adults 18+ ·
          </span>
        </div>
      </div>

      <section className="cc-section" id="why">
        <div className="container">
          <div className="mb-5 cc-reveal">
            <p className="cc-kicker">Why {offer.name}</p>
            <h2 className="cc-title font-display">
              Less swiping. More chemistry.
            </h2>
            <p className="cc-lead">{offer.description}</p>
          </div>

          <div className="cc-promise-grid cc-reveal">
            {promises.map((item) => (
              <article key={item.num}>
                <div className="cc-promise-num">{item.num}</div>
                <h3 className="font-display">{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cc-section pt-0" id="how">
        <div className="container">
          <div className="cc-steps">
            <div className="cc-reveal">
              <p className="cc-kicker">How it works</p>
              <h2 className="cc-title font-display">
                Three moves from “bored” to “who’s free?”
              </h2>
              <div className="cc-step-list mt-4">
                {steps.map((step) => (
                  <div className="cc-step" key={step.index}>
                    <div className="cc-step-index">{step.index}</div>
                    <div>
                      <h3 className="font-display">{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <a
                  className="cc-btn-ink"
                  href={offer.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                >
                  Start on {offer.name} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="cc-visual cc-reveal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1518199266791-5375a57590ae?w=900&h=1100&fit=crop"
                alt=""
              />
              <div className="cc-visual-caption">
                <strong>Best for: {offer.bestFor}</strong>
                {offer.highlights.join(" · ")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cc-section pt-0">
        <div className="container">
          <div className="cc-quote-wrap cc-reveal">
            <p className="cc-quote">
              “I signed up on a whim and had a real conversation the same night
              — no week-long ‘hey’ loops. That’s the whole point.”
            </p>
            <p className="cc-quote-meta">
              <strong>Alex R.</strong> · Joined for casual dating · Adults 18+
            </p>
          </div>
        </div>
      </section>

      <section className="cc-section pt-0" id="join">
        <div className="container">
          <div className="cc-final cc-reveal">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <h2 className="font-display">Your next chat starts here.</h2>
                <p className="cc-lead mb-0">
                  Free to join. Built for adults. Open {offer.name}, finish your
                  profile, and see who’s online.
                </p>
              </div>
              <div className="col-lg-5 d-flex justify-content-lg-end">
                <a
                  className="cc-btn-flame cc-pulse"
                  href={offer.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                >
                  Join {offer.name} free <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="cc-footer">
        <div className="container">
          <div className="row g-4 pb-4">
            <div className="col-md-6">
              <div className="cc-footer-brand">{offer.name}</div>
              <p className="small mb-2" style={{ maxWidth: "28rem" }}>
                Promotional page from TheDateCompass. We may earn a commission
                when you click affiliate links. For adults 18+ only.
              </p>
              <p className="small mb-0 opacity-75">
                Editor’s Choice · {offer.rating}★ · {offer.reviews} reviews
              </p>
            </div>
            <div className="col-md-6 d-flex flex-wrap gap-3 justify-content-md-end align-items-start">
              <Link href="/adult-offers">All adult offers</Link>
              <Link href="/privacy-policy">Privacy</Link>
              <Link href="/terms-and-conditions">Terms</Link>
              <Link href="/affiliate-disclosure">Affiliate disclosure</Link>
            </div>
          </div>
          <div className="border-top border-secondary border-opacity-25 pt-3 d-flex flex-wrap justify-content-between gap-2">
            <small>© 2026 TheDateCompass</small>
            <small>Must be 18 or older to join.</small>
          </div>
        </div>
      </footer>

      <div
        className="cc-sticky"
        role="region"
        aria-label="CheekyCrush call to action"
      >
        <div className="cc-sticky-inner">
          <p className="cc-sticky-note mb-0">Free to join · 18+</p>
          <a
            className="cc-btn-flame"
            href={offer.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
          >
            Join {offer.name} <span aria-hidden="true">→</span>
          </a>
          <div className="d-none d-sm-block" style={{ width: "3.5rem" }} aria-hidden />
        </div>
      </div>
    </div>
  );
}
