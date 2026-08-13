import Link from "next/link";
import BrandLogo from "@/components/Home/BrandLogo";
import { availableCountries } from "@/data/countries";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/cookie-policy", label: "Cookies" },
  { href: "/terms-and-conditions", label: "Terms" },
  { href: "/affiliate-disclosure", label: "Affiliate" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-5 py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <BrandLogo dark icon="heart" />
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <div className="flex gap-1.5">
              <span className="rounded-full border border-[#E83E9B]/30 bg-[#E83E9B]/10 px-2 py-0.5 text-[10px] font-medium text-pink-300">
                18+
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/60">
                Affiliate
              </span>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
            {availableCountries.map((country) => (
              <Link
                key={country.slug}
                href={`/${country.slug}`}
                className="text-white/55 transition hover:text-[#E83E9B]"
              >
                {country.flag} {country.name}
              </Link>
            ))}
            {availableCountries.length > 0 && (
              <span className="hidden h-3 w-px bg-white/15 sm:inline-block" />
            )}
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/55 transition hover:text-[#E83E9B]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-4 flex flex-col gap-1.5 border-t border-white/10 pt-3 text-[11px] leading-relaxed text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} TheDateCompass</p>
          <p className="max-w-xl sm:text-right">
            Independent comparison site. May earn commissions. We do not operate
            listed platforms.
          </p>
        </div>
      </div>
    </footer>
  );
}
