"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { datingOfferTabs } from "@/data/datingOffersTabs";

export default function OfferTabsNav() {
  const pathname = usePathname();

  const activeRoute =
    datingOfferTabs.find((tab) => pathname?.endsWith(`/${tab.route}`))?.route ??
    (pathname === "/top-offers" ? "casual" : null);

  return (
    <nav
      aria-label="Offer categories"
      className="border-b border-stone-200/80 bg-white/80 backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex gap-2 overflow-x-auto py-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {datingOfferTabs.map((tab) => {
            const href =
              tab.route === "casual"
                ? "/top-offers"
                : `/top-offers/${tab.route}`;
            const isActive = activeRoute === tab.route;

            return (
              <Link
                key={tab.id}
                href={href}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-stone-900 text-white shadow-sm"
                    : "text-stone-500 hover:bg-stone-100 hover:text-stone-800"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
