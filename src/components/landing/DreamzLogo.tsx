type DreamzLogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "text-sm",
  md: "text-lg",
  lg: "text-2xl",
};

/** Wordmark styled like the official dreamz.ai logo */
export default function DreamzLogo({
  className = "",
  size = "md",
}: DreamzLogoProps) {
  return (
    <span
      className={`inline-flex items-baseline font-semibold tracking-tight ${sizeClass[size]} ${className}`}
      aria-label="dreamz.ai"
    >
      <span>dreamz</span>
      <span className="text-[#b794f6]">.</span>
      <span>a</span>
      <span className="relative inline-block leading-none">
        <span className="invisible">i</span>
        <span className="absolute inset-x-0 bottom-0 text-center" aria-hidden>
          ı
        </span>
        <span
          className="absolute left-1/2 top-[0.12em] h-[0.22em] w-[0.22em] -translate-x-1/2 rounded-full bg-[#b794f6]"
          aria-hidden
        />
      </span>
    </span>
  );
}
