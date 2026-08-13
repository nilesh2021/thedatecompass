import type { ReactNode } from "react";

export type CountrySectionHeadingVariant =
  | "germany"
  | "germanySecondary"
  | "germanyFaq"
  | "usa"
  | "usaFaq";

type CountrySectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  aside?: ReactNode;
  titleAs?: "h2" | "h3";
  variant: CountrySectionHeadingVariant;
  className?: string;
};

const eyebrowClass: Record<CountrySectionHeadingVariant, string> = {
  germany: "tdc-eyebrow mb-4",
  germanySecondary: "tdc-eyebrow-mint",
  germanyFaq: "tdc-eyebrow mb-4",
  usa: "text-xs font-bold uppercase tracking-[0.2em] text-brand-mint/80",
  usaFaq: "text-xs font-bold uppercase tracking-[0.2em] text-rose-300/80",
};

const titleClass: Record<
  CountrySectionHeadingVariant,
  { h2: string; h3: string }
> = {
  germany: {
    h2: "max-w-2xl text-4xl font-extrabold tracking-tight text-cream sm:text-5xl",
    h3: "max-w-2xl text-4xl font-extrabold tracking-tight text-cream sm:text-5xl",
  },
  germanySecondary: {
    h2: "mt-2 text-2xl font-extrabold text-cream",
    h3: "mt-2 text-2xl font-extrabold text-cream",
  },
  germanyFaq: {
    h2: "text-5xl font-extrabold",
    h3: "text-5xl font-extrabold",
  },
  usa: {
    h2: "mt-3 font-serif text-4xl font-semibold   sm:text-5xl",
    h3: "mt-2 font-serif text-3xl font-semibold   sm:text-4xl",
  },
  usaFaq: {
    h2: "mt-3 font-serif text-4xl font-semibold   text-white sm:text-5xl",
    h3: "mt-3 font-serif text-4xl font-semibold   text-white sm:text-5xl",
  },
};

const descriptionClass: Record<CountrySectionHeadingVariant, string> = {
  germany: "mt-5 max-w-2xl text-lg leading-8 text-fog",
  germanySecondary: "mt-5 max-w-2xl text-lg leading-8 text-fog",
  germanyFaq: "mt-4 text-lg text-fog",
  usa: "max-w-md leading-relaxed text-white/50",
  usaFaq: "mt-4 text-lg text-fog",
};

const wrapperClass: Partial<Record<CountrySectionHeadingVariant, string>> = {
  germanyFaq: "mb-10 text-center sm:mb-14",
};

export default function CountrySectionHeading({
  eyebrow,
  title,
  description,
  aside,
  titleAs = "h2",
  variant,
  className,
}: CountrySectionHeadingProps) {
  const TitleTag = titleAs;
  const heading = (
    <>
      <p className={eyebrowClass[variant]}>{eyebrow}</p>
      <TitleTag className={titleClass[variant][titleAs]}>{title}</TitleTag>
      {description ? (
        <p className={descriptionClass[variant]}>{description}</p>
      ) : null}
    </>
  );

  const baseWrapper = wrapperClass[variant];
  const combinedClassName = [baseWrapper, className].filter(Boolean).join(" ");

  if (aside !== undefined) {
    return (
      <div
        className={
          combinedClassName || "flex items-end justify-between gap-4"
        }
      >
        <div>{heading}</div>
        {aside}
      </div>
    );
  }

  if (combinedClassName) {
    return <div className={combinedClassName}>{heading}</div>;
  }

  return <>{heading}</>;
}
