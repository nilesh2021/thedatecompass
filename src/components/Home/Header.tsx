"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import BrandLogo from "@/components/Home/BrandLogo";

const navLinks = [
  { href: "#featured", label: "Offers" },
  { href: "#categories", label: "Categories" },
  { href: "#countries", label: "Countries" },
  { href: "/category/ai-girlfriend", label: "AI Girlfriend" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-5">
        <BrandLogo icon="heart" />

        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-gray-600 transition hover:text-[#E83E9B]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#countries"
            className="rounded-full bg-[#E83E9B] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#d12f88]"
          >
            Browse countries
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="grid h-9 w-9 place-items-center rounded-full text-gray-700 transition hover:bg-gray-100 lg:hidden"
          aria-label={mobileMenu ? "Close menu" : "Open menu"}
        >
          {mobileMenu ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {mobileMenu && (
        <div className="fixed inset-0 z-[999] bg-[#111111] text-white lg:hidden">
          <div className="flex h-14 items-center justify-between border-b border-white/10 px-5">
            <BrandLogo dark icon="heart" onClick={() => setMobileMenu(false)} />

            <button
              type="button"
              onClick={() => setMobileMenu(false)}
              className="grid h-9 w-9 place-items-center rounded-full text-white/80 transition hover:bg-white/10"
              aria-label="Close menu"
            >
              <FaTimes size={18} />
            </button>
          </div>

          <div className="space-y-1 px-5 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenu(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-white/85 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="#countries"
              onClick={() => setMobileMenu(false)}
              className="mt-5 block rounded-full bg-[#E83E9B] py-3 text-center text-sm font-bold text-white transition hover:bg-[#d12f88]"
            >
              Browse countries
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
