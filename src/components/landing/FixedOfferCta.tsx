import { dreamzOffer } from "@/data/aiGirlfriendOffers";

export default function FixedOfferCta() {
  const offer = dreamzOffer;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-black/5 bg-white/95 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
      role="region"
      aria-label="Offer call to action"
    >
      <div className="mx-auto flex max-w-7xl items-center gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <p className="hidden shrink-0 text-sm font-medium text-gray-600 sm:block">
            {offer.promo}
          </p>
          <a
            href={offer.url}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="flex min-w-0 flex-1 items-center justify-center rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500 sm:flex-none sm:px-8"
          >
            Start chatting on {offer.name}
          </a>
        </div>

        {/* Reserve space for the global scroll-to-top button (right-8, w-14) */}
        <div className="h-14 w-14 shrink-0 sm:w-16" aria-hidden />
      </div>
    </div>
  );
}
