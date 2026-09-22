import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Search, ExternalLink, Globe2 } from "lucide-react";
import { adultImages } from "@/data/adultOfferImages";

const steps = [
  {
    number: "01",
    icon: Globe2,
    title: "Choose your country",
    description:
      "Start where you are. See adult dating platforms that actually operate in your region.",
    image: adultImages.neon,
  },
  {
    number: "02",
    icon: Search,
    title: "Pick your temperature",
    description:
      "Casual, gay, mature, adult social, or AI companion — match the mood before you click through.",
    image: adultImages.portraitD,
  },
  {
    number: "03",
    icon: ExternalLink,
    title: "Slip into the platform",
    description:
      "Open the affiliate link and continue on the third-party site to register and connect.",
    image: adultImages.aiCompanion,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="tdc-section-velvet py-24 font-display text-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="tdc-eyebrow-gold">How the night goes</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl">
              Three steps from browse to chemistry
            </h2>
          </div>
          <p className="font-serif-accent text-xl italic text-cream/60 md:text-right">
            No profiles here — just a quieter way to compare before you commit.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className="group overflow-hidden border border-[#d4af87]/18 bg-black/25"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0709] via-transparent to-black/20" />
                  <p className="absolute left-4 top-4 font-serif-accent text-4xl italic text-brand-rose">
                    {step.number}
                  </p>
                </div>
                <div className="p-7">
                  <div className="flex h-11 w-11 items-center justify-center border border-[#d4af87]/25">
                    <Icon size={20} className="text-[#d4af87]" />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link href="#countries" className="tdc-btn-primary">
            Choose your country
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
