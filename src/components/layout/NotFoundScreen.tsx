import Link from "next/link";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";

export default function NotFoundScreen() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0c1230] text-white">
      <Header tone="home" />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#ff3d6e]">
          404
        </p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-white/70">
          That address is not on TheDateCompass. The link may be old, or the
          page may have moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-[#ff3d6e] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#ff5d86]"
          >
            Home
          </Link>
          <Link
            href="/top-offers"
            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/40"
          >
            Top offers
          </Link>
        </div>
      </main>
      <Footer tone="home" />
    </div>
  );
}
