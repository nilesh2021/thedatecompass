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
      "Pick your region to see dating platforms and offers available where you are.",
    image: adultImages.neon,
  },
  {
    number: "02",
    icon: Search,
    title: "Compare by category",
    description:
      "Browse casual dating, gay dating, mature dating, adult social, or AI companion options.",
    image: adultImages.portraitD,
  },
  {
    number: "03",
    icon: ExternalLink,
    title: "Visit the provider",
    description:
      "Open the affiliate link and continue on the third-party platform to register and connect.",
    image: adultImages.aiCompanion,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="tdc-section-stone py-24 font-display">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="tdc-eyebrow">How it works</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl">
              From country to connection in three steps
            </h2>
          </div>
          <p className="font-serif-accent text-xl italic text-ink/55 md:text-right">
            A simple path to compare dating platforms before visiting a provider.
          </p>
        </div>

        <div className="mt-16 grid gap-0 border-t border-ink/15 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.number}
                className={`border-ink/12 py-8 md:border-r md:py-10 ${
                  index > 0 ? "md:pl-8" : ""
                } ${index === steps.length - 1 ? "md:border-r-0" : ""}`}
              >
                <div className="relative mb-6 h-44 overflow-hidden border border-ink/10">
                  <Image
                    src={step.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top"
                  />
                </div>
                <p className="font-serif-accent text-4xl italic text-brand-rose">
                  {step.number}
                </p>
                <div className="mt-4 flex h-12 w-12 items-center justify-center border border-ink/15">
                  <Icon size={22} className="text-ink" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/55">
                  {step.description}
                </p>
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
