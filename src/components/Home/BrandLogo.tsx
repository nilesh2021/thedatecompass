import Link from "next/link";

type BrandLogoProps = {
  onClick?: () => void;
  dark?: boolean;
  icon?: "compass" | "heart";
};

function LogoMark({
  icon = "compass",
  className = "",
}: {
  icon?: "compass" | "heart";
  className?: string;
}) {
  return (
    <span
      className={`relative grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#E83E9B] ${className}`}
      aria-hidden
    >
      {icon === "heart" ? (
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 text-white"
          fill="currentColor"
        >
          <path d="M12 20.2c-.4 0-.7-.1-1-.3C7.4 17.2 4.5 14.5 3.2 11.8 2.2 9.6 2.5 7 4.2 5.4c1.5-1.4 3.8-1.6 5.5-.4L12 6.5l2.3-1.5c1.7-1.2 4-1 5.5.4 1.7 1.6 2 4.2 1 6.4-1.3 2.7-4.2 5.4-7.8 8.1-.3.2-.6.3-1 .3z" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="8.25" />
          <path d="M12 5.5v2.2M12 16.3v2.2M5.5 12h2.2M16.3 12h2.2" />
          <path
            d="M12 8.2l2.4 3.8L12 15.8 9.6 12z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      )}
    </span>
  );
}

export default function BrandLogo({
  onClick,
  dark = false,
  icon = "compass",
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group flex items-center gap-2"
      aria-label="TheDateCompass home"
    >
      <LogoMark icon={icon} className="transition group-hover:scale-105" />
      <span className="text-[15px] font-bold  ">
        <span className="text-[#E83E9B]">TheDate</span>
        <span className={dark ? "text-white" : "text-[#1a1a1a]"}>Compass</span>
      </span>
    </Link>
  );
}
