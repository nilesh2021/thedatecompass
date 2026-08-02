import Link from "next/link";
import { countries } from "@/data/countries";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Top */}
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E83E9B] text-xl font-black text-white shadow-lg shadow-pink-500/30">
                D
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  <span className="text-[#E83E9B]">TheDate</span>Compass
                </h2>

                <p className="text-xs tracking-widest uppercase text-white/50">
                  Dating Directory
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
              TheDateCompass is an independent comparison website that helps
              adults discover dating platforms, AI companion services, and
              relationship websites across multiple countries.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#E83E9B]/30 bg-[#E83E9B]/10 px-3 py-1 text-xs font-medium text-pink-300">
                18+
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                Affiliate
              </span>
            </div>
          </div>

          {/* Countries */}
          <div>
            <h3 className="text-lg font-semibold">Countries</h3>

            <ul className="mt-3 space-y-1.5 text-sm">
              {countries.map((country) => (
                <li key={country.slug}>
                  <Link
                    href={`/${country.slug}`}
                    className="text-white/60 transition hover:text-[#E83E9B]"
                  >
                    {country.flag} {country.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>

            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-white/60 transition hover:text-[#E83E9B]"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/cookie-policy"
                  className="text-white/60 transition hover:text-[#E83E9B]"
                >
                  Cookie Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-white/60 transition hover:text-[#E83E9B]"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/affiliate-disclosure"
                  className="text-white/60 transition hover:text-[#E83E9B]"
                >
                  Affiliate Disclosure
                </Link>
              </li>

              <li>
                <Link
                  href="/disclaimer"
                  className="text-white/60 transition hover:text-[#E83E9B]"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-3 text-center lg:flex-row lg:items-center lg:justify-between">
          <p className="text-xs text-white/45">
            © {new Date().getFullYear()} TheDateCompass. All rights reserved.
          </p>

          <p className="max-w-2xl text-xs leading-6 text-white/45 lg:text-right">
            TheDateCompass is an independent comparison website and may earn
            commissions from qualifying purchases. We do not own or operate any
            dating platform. Clicking an offer redirects you to the provider&apos;s
            website.
          </p>
        </div>
      </div>
    </footer>
  );
}