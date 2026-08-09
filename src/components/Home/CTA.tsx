import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";
import { countries } from "@/data/countries";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#080808] py-24">
      <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-[#E83E9B]/15 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-fuchsia-500/15 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#E83E9B] via-[#D63384] to-[#7B174F] p-10 shadow-[0_50px_120px_rgba(232,62,155,.35)] lg:p-14">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-semibold text-white backdrop-blur-xl">
              <BadgeCheck size={16} />
              Start exploring today
            </span>

            <h2 className="mt-8 text-4xl font-black leading-tight text-white lg:text-5xl">
              Discover dating platforms
              <br />
              available in your country
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-pink-50/90">
              Compare trusted dating and AI companion platforms by region, then
              continue directly to the third-party provider that fits your
              intention.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur-xl">
              <ShieldCheck size={18} />
              <span className="font-medium">Adults 18+</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur-xl">
              <Globe2 size={18} />
              <span className="font-medium">
                {countries.length} countries listed
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 backdrop-blur-xl">
              <BadgeCheck size={18} />
              <span className="font-medium">Independent comparison</span>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#countries"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-[#E83E9B] shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Browse by country
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/usa"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
            >
              View live USA page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
