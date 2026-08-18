"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { ArrowRight, ChevronDown } from "lucide-react";
import BrandLogo from "@/components/Home/BrandLogo";

const primaryNav = [
  { href: "/#featured", label: "Offers" },
  { href: "/#categories", label: "Categories" },
  { href: "/#countries", label: "Countries" },
  { href: "/#faq", label: "FAQ" },
];

const moreNav = [
  { href: "/gay-dating", label: "Gay Dating" },
  { href: "/category/ai-girlfriend", label: "AI Girlfriend" },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!moreOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [moreOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  return (
    <header className="sticky top-0 z-50 font-display">
      {/* Ambient gradient layer */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(22,24,28,0.97)_0%,rgba(10,11,13,0.92)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_0%_0%,rgba(255,61,110,0.07),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_100%_at_100%_0%,rgba(125,255,195,0.04),transparent_50%)]"
        aria-hidden
      />

      {/* Bottom edge highlight */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cream/12 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto flex h-[3.625rem] max-w-7xl items-center justify-between px-5 lg:h-16">
        <BrandLogo dark icon="heart" />

        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-3.5 py-2 text-[0.8125rem] font-medium tracking-wide text-cream/55 transition-colors hover:text-cream"
            >
              {link.label}
              <span
                className="absolute inset-x-3.5 -bottom-px h-px bg-gradient-to-r from-brand-rose/0 via-brand-rose/70 to-brand-rose/0 opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
            </Link>
          ))}

          <div ref={moreRef} className="relative">
            <button
              type="button"
              onClick={() => setMoreOpen(!moreOpen)}
              className="group flex items-center gap-1 px-3.5 py-2 text-[0.8125rem] font-medium tracking-wide text-cream/55 transition-colors hover:text-cream"
              aria-expanded={moreOpen}
              aria-haspopup="true"
            >
              More
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${moreOpen ? "rotate-180" : ""}`}
              />
            </button>

            {moreOpen && (
              <div
                className="absolute right-0 top-full z-50 mt-2 min-w-[11rem] overflow-hidden border border-cream/8 bg-ink-soft/95 shadow-[0_16px_48px_rgba(0,0,0,0.45)] backdrop-blur-xl"
                role="menu"
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,61,110,0.06),transparent_70%)]"
                  aria-hidden
                />
                {moreNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    onClick={() => setMoreOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-cream/65 transition hover:bg-cream/[0.04] hover:text-cream"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="ml-4 h-5 w-px bg-cream/10" aria-hidden />

          <Link
            href="/#countries"
            className="group relative ml-3 inline-flex items-center gap-2 overflow-hidden px-5 py-2.5 text-[0.75rem] font-semibold tracking-[0.06em] text-cream transition-all duration-300 hover:shadow-[0_4px_24px_rgba(255,61,110,0.28)]"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-brand-rose via-[#ff4d7a] to-brand-rose-soft"
              aria-hidden
            />
            <span
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <span className="relative">Browse countries</span>
            <ArrowRight
              size={14}
              className="relative transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="relative grid h-9 w-9 place-items-center border border-cream/10 bg-cream/[0.03] text-cream/80 transition hover:border-cream/20 hover:bg-cream/[0.06] hover:text-cream lg:hidden"
          aria-label={mobileMenu ? "Close menu" : "Open menu"}
        >
          {mobileMenu ? <FaTimes size={16} /> : <FaBars size={16} />}
        </button>
      </div>

      {mobileMenu && (
        <div className="fixed inset-0 z-[999] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={() => setMobileMenu(false)}
            aria-hidden
          />

          {/* Panel */}
          <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-cream/8 bg-[linear-gradient(165deg,#16181c_0%,#0a0b0d_100%)] shadow-[-8px_0_40px_rgba(0,0,0,0.5)]">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(255,61,110,0.1),transparent_60%)]"
              aria-hidden
            />

            <div className="relative flex h-[3.625rem] items-center justify-between border-b border-cream/8 px-5">
              <BrandLogo
                dark
                icon="heart"
                onClick={() => setMobileMenu(false)}
              />

              <button
                type="button"
                onClick={() => setMobileMenu(false)}
                className="grid h-9 w-9 place-items-center border border-cream/10 bg-cream/[0.03] text-cream/80 transition hover:border-cream/20 hover:text-cream"
                aria-label="Close menu"
              >
                <FaTimes size={16} />
              </button>
            </div>

            <nav className="relative flex-1 overflow-y-auto px-5 py-6">
              <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-cream/30">
                Navigate
              </p>

              <div className="space-y-0.5">
                {primaryNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenu(false)}
                    className="block border border-transparent px-4 py-3.5 text-[0.9375rem] font-medium text-cream/70 transition hover:border-cream/8 hover:bg-cream/[0.03] hover:text-cream"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <p className="mb-4 mt-8 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-cream/30">
                Categories
              </p>

              <div className="space-y-0.5">
                {moreNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenu(false)}
                    className="block border border-transparent px-4 py-3.5 text-[0.9375rem] font-medium text-cream/70 transition hover:border-cream/8 hover:bg-cream/[0.03] hover:text-cream"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="relative border-t border-cream/8 px-5 py-5">
              <Link
                href="/#countries"
                onClick={() => setMobileMenu(false)}
                className="group relative flex items-center justify-center gap-2 overflow-hidden py-3.5 text-[0.78rem] font-semibold tracking-[0.06em] text-cream transition-all duration-300"
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-brand-rose via-[#ff4d7a] to-brand-rose-soft"
                  aria-hidden
                />
                <span className="relative">Browse countries</span>
                <ArrowRight
                  size={15}
                  className="relative transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
