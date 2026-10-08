"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import TrackedAffiliateLink from "@/components/affiliate/TrackedAffiliateLink";
import { trackAffiliateClick } from "@/lib/analytics";

type NightOfferCardProps = {
  name: string;
  category: string;
  description?: string;
  points?: string[];
  image: string;
  href: string;
  country: string;
};

export default function NightOfferCard({
  name,
  category,
  description,
  points,
  image,
  href,
  country,
}: NightOfferCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#ff2d87]/35 bg-[#141a3d]">
      <TrackedAffiliateLink
        href={href}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="group flex flex-1 flex-col text-cream no-underline"
        onClick={() => trackAffiliateClick(name, "offer_card", country)}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover object-top transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141a3d] via-transparent to-transparent" />
          <span className="absolute left-3 top-3 rounded-full bg-[#0c1230]/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            18+
          </span>
        </div>
        <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#ff2d87]">
            {category}
          </p>
          <h3 className="mt-2 text-2xl font-extrabold tracking-tight">{name}</h3>
          {description ? (
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/75">{description}</p>
          ) : null}
          {points?.length ? (
            <ul className="mt-3 space-y-1.5 text-sm leading-6 text-white/75">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : null}
          <span className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#ff2d87] px-6 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_24px_rgba(255,45,135,0.28)] transition group-hover:brightness-110">
            Open offer
            <ArrowUpRight size={16} />
            <span className="sr-only"> (opens in a new tab)</span>
          </span>
        </div>
      </TrackedAffiliateLink>
    </article>
  );
}
