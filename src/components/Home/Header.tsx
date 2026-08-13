"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import BrandLogo from "@/components/Home/BrandLogo";

const navLinks = [
  { href: "/#featured", label: "Offers" },
  { href: "/#categories", label: "Categories" },
  { href: "/#countries", label: "Countries" },
  { href: "/gay-dating", label: "Gay Dating" },
  { href: "/category/ai-girlfriend", label: "AI Girlfriend" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-cream/10 bg-ink/95 font-display text-cream backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">
        <BrandLogo dark icon="heart" />

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-fog transition hover:text-brand-rose"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/#countries"
            className="bg-brand-rose px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.1em] text-cream transition hover:bg-brand-rose-soft"
          >
            Browse countries
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="grid h-9 w-9 place-items-center border border-cream/15 text-cream transition hover:border-brand-rose hover:text-brand-rose lg:hidden"
          aria-label={mobileMenu ? "Close menu" : "Open menu"}
        >
          {mobileMenu ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {mobileMenu && (
        <div className="fixed inset-0 z-[999] bg-ink text-cream lg:hidden">
          <div className="flex h-14 items-center justify-between border-b border-cream/10 px-5">
            <BrandLogo
              dark
              icon="heart"
              onClick={() => setMobileMenu(false)}
            />

            <button
              type="button"
              onClick={() => setMobileMenu(false)}
              className="grid h-9 w-9 place-items-center border border-cream/15 text-cream transition hover:border-brand-rose hover:text-brand-rose"
              aria-label="Close menu"
            >
              <FaTimes size={18} />
            </button>
          </div>

          <div className="space-y-1 bg-ink-soft px-5 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="block border border-transparent px-4 py-3 text-sm font-semibold text-fog transition hover:border-cream/10 hover:bg-ink hover:text-brand-rose"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#countries"
              onClick={() => setMobileMenu(false)}
              className="mt-4 block bg-brand-rose py-3.5 text-center text-[0.78rem] font-bold uppercase tracking-[0.1em] text-cream transition hover:bg-brand-rose-soft"
            >
              Browse countries
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
