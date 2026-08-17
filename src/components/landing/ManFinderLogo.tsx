type ManFinderLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "text-sm tracking-[0.12em]",
  md: "text-xl tracking-[0.14em]",
  lg: "text-3xl tracking-[0.16em]",
};

export default function ManFinderLogo({
  className = "",
  size = "md",
}: ManFinderLogoProps) {
  return (
    <span
      className={`inline-flex items-baseline font-display font-extrabold uppercase ${sizeClass[size]} ${className}`}
      aria-label="ManFinder"
    >
      <span className="bg-gradient-to-r from-cream via-cream to-fog bg-clip-text text-transparent">
        Man
      </span>
      <span className="bg-gradient-to-r from-brand-rose via-[#e040fb] to-brand-rose-soft bg-clip-text text-transparent">
        Finder
      </span>
    </span>
  );
}
