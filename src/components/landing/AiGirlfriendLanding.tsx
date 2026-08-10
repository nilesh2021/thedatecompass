import Image from "next/image";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";
import DreamzLogo from "@/components/landing/DreamzLogo";
import {
  aiGirlfriendFaqs,
  dreamzCompanions,
  dreamzOffer,
  type DreamzCompanion,
} from "@/data/aiGirlfriendOffers";

 

const featured = dreamzCompanions.find((c) => c.featured) ?? dreamzCompanions[0];

function PaceBadge({ pace }: { pace: string }) {
  return (
    <span className="absolute bottom-3 left-3 z-10 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-lg">
      <span aria-hidden>🔥</span>
      {pace}
    </span>
  );
}

function CompanionMedia({
  companion,
  priority = false,
  className = "",
}: {
  companion: DreamzCompanion;
  priority?: boolean;
  className?: string;
}) {
  if (companion.video) {
    return (
      <video
        className={`h-full w-full object-cover ${className}`}
        autoPlay
        muted
        loop
        playsInline
        poster={companion.image}
        aria-label={`${companion.name} companion preview`}
      >
        <source src={companion.video} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={companion.image}
      alt={`${companion.name} AI companion`}
      width={400}
      height={350}
      priority={priority}
      className={`h-full w-full object-cover transition duration-500 group-hover:scale-105 ${className}`}
    />
  );
}

function CompanionCard({
  companion,
  href,
  priority = false,
}: {
  companion: DreamzCompanion;
  href: string;
  priority?: boolean;
}) {
  const cardMedia = { ...companion, video: undefined };

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-[1.25rem] border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:border-white/10 lg:bg-[#16161c] lg:shadow-none lg:hover:border-violet-500/40"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 lg:bg-[#0d0d12]">
        <CompanionMedia companion={cardMedia} priority={priority} />
        <PaceBadge pace={companion.pace} />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-[15px] font-bold text-gray-900 lg:text-white">
            {companion.name}, {companion.age}
          </h3>
          <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-violet-600 lg:text-violet-400">
            <svg
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 20.2c-.4 0-.7-.1-1-.3C7.4 17.2 4.5 14.5 3.2 11.8 2.2 9.6 2.5 7 4.2 5.4c1.5-1.4 3.8-1.6 5.5-.4L12 6.5l2.3-1.5c1.7-1.2 4-1 5.5.4 1.7 1.6 2 4.2 1 6.4-1.3 2.7-4.2 5.4-7.8 8.1-.3.2-.6.3-1 .3z" />
            </svg>
            {companion.likes}
          </span>
        </div>
        <p className="line-clamp-2 text-sm leading-relaxed text-gray-600 lg:text-white/55">
          {companion.bio}{" "}
          <span className="text-violet-700 underline decoration-violet-500/60 underline-offset-2 lg:text-violet-300">
            read more
          </span>
        </p>
      </div>
    </a>
  );
}

export default function AiGirlfriendLanding() {
  const offer = dreamzOffer;

  return (
    <>
      <Header />

      <main className="bg-white text-gray-900 lg:bg-[#07070a] lg:text-white">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-black/5 px-5 py-10 lg:border-white/5 lg:py-14">
          <div className="pointer-events-none absolute -right-24 top-0 hidden h-80 w-80 rounded-full bg-violet-600/25 blur-[100px] lg:block" />
          <div className="pointer-events-none absolute -left-20 bottom-0 hidden h-64 w-64 rounded-full bg-fuchsia-600/15 blur-[90px] lg:block" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-10 xl:grid-cols-[minmax(0,1fr)_250px]">
            <div className="min-w-0">
              <div className="mb-5">
                <DreamzLogo
                  size="lg"
                  className="text-gray-900 lg:text-white"
                />
              </div>

              <p className="animate-fade-up mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-violet-600 lg:text-violet-400">
                TheDateCompass pick · Adults 18+
              </p>
              <h1 className="animate-fade-up-delay-1 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] font-black leading-[1.05] tracking-tight">
              Meet Your AI Companion on{" "}
                <span className="bg-gradient-to-r from-violet-500 to-fuchsia-400 bg-clip-text text-transparent">
                  Dreamz.ai
                </span>
              </h1>
              <p className="animate-fade-up-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-gray-600 lg:text-lg lg:text-white/60">
              Explore personalized AI companions for private conversations, different personalities, and roleplay. Start exploring for free.
              </p>

              <ul className="animate-fade-up-delay-2 mt-6 grid max-w-2xl gap-2 sm:grid-cols-2">
                {offer.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 lg:text-white/75"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap gap-3">
                <a
                  href={offer.url}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-600/30 transition hover:bg-violet-500"
                >
               Try Dreamz.ai Free →
                </a>
                <a
                  href="#companions"
                  className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-transparent px-7 py-3.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-50 lg:border-white/15 lg:text-white lg:hover:bg-white/5"
                >
                  Browse companions
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 lg:text-white/45">
                <span>{offer.promo}</span>
                
                <span>Best for: {offer.bestFor}</span>
              </div>
            </div>

            {/* Small featured video */}
            <a
              href={offer.url}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="group relative mx-auto w-[180px] shrink-0 overflow-hidden rounded-2xl border border-black/10 shadow-xl sm:w-[200px] lg:mx-0 lg:w-full lg:border-white/10 lg:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
            >
              <div className="relative aspect-[3/4] bg-[#0d0d12]">
                <CompanionMedia companion={featured} priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="absolute right-2 top-2 z-10 rounded-full bg-violet-600 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">
                  Live
                </span>
                <div className="absolute inset-x-0 bottom-0 z-10 p-2.5">
                  <p className="text-xs font-bold text-white">
                    {featured.name}, {featured.age}
                  </p>
                  <p className="text-[10px] text-white/70">Tap to chat →</p>
                </div>
              </div>
            </a>
          </div>
        </section>

        {/* Companions grid */}
        <section id="companions" className="px-5 py-14 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-violet-600 lg:text-violet-400">
                  Inside Dreamz.ai
                </p>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                Explore AI companions
                </h2>
              </div>
              <a
                href={offer.url}
                target="_blank"
                rel="sponsored nofollow noopener noreferrer"
                className="text-sm font-semibold text-violet-600 transition hover:text-violet-500 lg:text-violet-400"
              >
                Open full catalog on Dreamz →
              </a>
            </div>

            <div className="grid gap-5 lg:grid-cols-[220px_1fr] lg:gap-6">
              <aside className="hidden lg:block">
                <div className="sticky top-20 rounded-2xl border border-white/10 bg-[#101018] p-3">
                  <div className="mb-4 px-2 pt-1">
                    <DreamzLogo size="sm" className="text-white" />
                  </div>
                  <div className="flex-1 p-4">
  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
    Companion Preview
  </p>

  <p className="mt-3 text-sm leading-relaxed text-white/50">
    Explore a preview of the AI companion experience available on Dreamz.ai.
  </p>

  <div className="mt-6 space-y-3">
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <p className="text-sm font-semibold text-white/80">
        Personalized companions
      </p>
      <p className="mt-1 text-xs text-white/40">
        Explore different personalities and conversation styles.
      </p>
    </div>

    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <p className="text-sm font-semibold text-white/80">
        AI conversations
      </p>
      <p className="mt-1 text-xs text-white/40">
        Chat and explore conversations with your chosen companion.
      </p>
    </div>

    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <p className="text-sm font-semibold text-white/80">
        Roleplay experiences
      </p>
      <p className="mt-1 text-xs text-white/40">
        Discover different conversation and roleplay experiences.
      </p>
    </div>
  </div>
</div>
                  <a
                    href={offer.url}
                    target="_blank"
                    rel="sponsored nofollow noopener noreferrer"
                    className="mt-4 block rounded-xl bg-violet-600 py-3 text-center text-sm font-bold text-white transition hover:bg-violet-500"
                  >
                   Explore on Dreamz.ai →
                  </a>
                </div>
              </aside>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
                {dreamzCompanions.map((companion, index) => (
                  <CompanionCard
                    key={companion.name}
                    companion={companion}
                    href={offer.url}
                    priority={index < 2}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

       

        {/* Highlights */}
        <section className="border-y border-black/5 bg-gray-50 px-5 py-16 lg:border-white/5 lg:bg-[#0c0c12] lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
            {offer.highlights.slice(0, 3).map((title, i) => (
              <div key={title}>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-violet-600 lg:text-violet-400">
                  0{i + 1}
                </p>
                <h3 className="mb-2 text-xl font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 lg:text-white/50">
                  {
                    [
                      "Build a companion that matches your energy and conversation style.",
                      "Private chats designed for adults — available anytime.",
                      "Sign up and start talking in minutes on desktop or mobile.",
                    ][i]
                  }
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-3xl font-black tracking-tight md:text-4xl">
              Common questions
            </h2>
            <div className="divide-y divide-black/5 lg:divide-white/10">
              {aiGirlfriendFaqs.map((faq) => (
                <div key={faq.question} className="py-5 first:pt-0 last:pb-0">
                  <h3 className="mb-2 text-base font-semibold">{faq.question}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 lg:text-white/55">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 pb-20 pt-4 lg:pb-28">
          <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-black/5 bg-gradient-to-br from-violet-50 to-fuchsia-50 px-8 py-12 text-center lg:border-violet-500/20 lg:from-violet-600/20 lg:to-fuchsia-600/10 lg:px-12">
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
            Ready to Explore Dreamz.ai?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
  Create your AI companion, choose a personality, and start exploring
  conversations on Dreamz.ai.
</p>
<a
  href={offer.url}
  target="_blank"
  rel="nofollow sponsored noopener"
  className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-black transition hover:bg-white/90"
>
  Try Dreamz.ai Free →
</a>
            <p className="mt-4 text-xs text-gray-400 lg:text-white/35">
              Affiliate link · Adults 18+
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
