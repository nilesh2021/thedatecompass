"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// countries menu removed from header

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E83E9B] shadow-lg shadow-pink-300">
            <span className="text-2xl font-black italic text-white">
              D
            </span>
          </div>

          <div>

            <h1 className="text-xl font-black md:text-2xl">
              <span className="text-[#E83E9B]">TheDate</span>
              <span className="text-[#222]">Compass</span>
            </h1>

          <p className="hidden text-[10px] uppercase tracking-[3px] text-gray-500 md:block">
              Dating Directory
            </p>

          </div>

        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/category/ai-girlfriend"
            className="font-semibold text-gray-700 hover:text-[#E83E9B]"
          >
            AI Girlfriend
          </Link>

          <Link
            href="/usa"
            className="rounded-full bg-[#E83E9B] px-6 py-3 font-bold text-white transition hover:scale-105"
          >
            Explore USA
          </Link>

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden"
        >
          {mobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

      </div>

    {/* Mobile Menu */}

{mobileMenu && (

<div className="fixed inset-0 z-[999] bg-gradient-to-b from-[#111111] via-[#1a1a1a] to-[#111111] text-white lg:hidden">

  {/* Header */}

  <div className="flex h-20 items-center justify-between border-b border-white/10 bg-[#111111] px-6">

    <Link
      href="/"
      onClick={() => setMobileMenu(false)}
      className="flex items-center gap-3"
    >
     <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E83E9B] shadow-lg shadow-pink-300 md:h-12 md:w-12">
  <span className="text-xl font-black italic text-white md:text-2xl">
    D
  </span>
</div>

<h2 className="text-xl font-black md:text-2xl">
        <span className="text-[#E83E9B]">
          TheDate
        </span>
        Compass
      </h2>
    </Link>

    <button
      onClick={() => setMobileMenu(false)}
    >
      <FaTimes size={26} />
    </button>

  </div>

  {/* Navigation */}
<div className="overflow-y-auto bg-[#111111] px-6 py-8">

    <Link
      href="/category/ai-girlfriend"
      onClick={() => setMobileMenu(false)}
      className="block rounded-xl px-5 py-4 font-semibold transition hover:bg-pink-50"
    >
      AI Girlfriend
    </Link>



    <Link
      href="/usa"
      onClick={() => setMobileMenu(false)}
      className="mt-8 block rounded-full bg-[#E83E9B] py-4 text-center font-bold text-white transition hover:bg-pink-600"
    >
      Explore USA
    </Link>

  </div>

</div>

)}

    </header>
  );
}