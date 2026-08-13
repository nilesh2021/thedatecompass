import CountrySectionHeading from "@/components/country/common/CountrySectionHeading";

export type CountryFaqItem = {
  question: string;
  answer: string;
};

type CountryFaqSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  items: CountryFaqItem[];
  variant: "germany" | "usa";
};

export default function CountryFaqSection({
  id = "faq",
  eyebrow,
  title,
  subtitle,
  items,
  variant,
}: CountryFaqSectionProps) {
  if (variant === "germany") {
    return (
      <section
        id={id}
        className="border-t border-cream/10 bg-ink-soft py-14 sm:py-20 lg:py-24 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <CountrySectionHeading
            variant="germanyFaq"
            eyebrow={eyebrow}
            title={title}
            description={subtitle}
          />

          <div className="space-y-5">
            {items.map((faq) => (
              <details
                key={faq.question}
                className="border border-cream/10 bg-ink px-4 py-4 backdrop-blur-2xl sm:px-6 sm:py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  {faq.question}
                  <span>⌄</span>
                </summary>

                <p className="mt-4 leading-7 text-fog">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="relative px-6 py-20 sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(145deg,#0f0a0e,#1f1220_60%,#12101a)]" />
      <div className="mx-auto max-w-3xl">
        <CountrySectionHeading
          variant="usaFaq"
          eyebrow={eyebrow}
          title={title}
        />
        <div className="mt-10 space-y-4">
          {items.map((faq) => (
            <details
              key={faq.question}
              className="group border border-cream/10 bg-cream/[0.04] px-6 py-5 open:border-brand-rose/40"
            >
              <summary className="cursor-pointer list-none font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {faq.question}
                  <span className="shrink-0 text-white/40 transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
