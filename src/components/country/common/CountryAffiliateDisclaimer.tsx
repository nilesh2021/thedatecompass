type CountryAffiliateDisclaimerProps = {
  text: string;
  variant: "germany" | "usa";
};

const variantClass: Record<CountryAffiliateDisclaimerProps["variant"], string> =
  {
    germany:
      "mt-10 border border-cream/10 bg-ink-soft px-5 py-4 text-center text-xs leading-relaxed text-fog",
    usa: "mt-10 text-center text-xs text-white/30",
  };

export default function CountryAffiliateDisclaimer({
  text,
  variant,
}: CountryAffiliateDisclaimerProps) {
  return <p className={variantClass[variant]}>{text}</p>;
}
