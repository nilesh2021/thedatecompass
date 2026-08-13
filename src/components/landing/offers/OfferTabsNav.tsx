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
      className="border-b border-cream/10 bg-ink-soft/90 backdrop-blur-md"
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
                className={`shrink-0 px-5 py-2.5 text-sm font-bold uppercase tracking-[0.08em] transition-all duration-200 ${
                  isActive
                    ? "bg-brand-rose text-cream"
                    : "text-fog hover:bg-cream/5 hover:text-cream"
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
