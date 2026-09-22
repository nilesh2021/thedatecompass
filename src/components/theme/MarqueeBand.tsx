type MarqueeBandProps = {
  items: string[];
};

export default function MarqueeBand({ items }: MarqueeBandProps) {
  const track = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y border-[#d4af87]/20 bg-[#3a0d1c] text-[#f3e6d4]"
      aria-hidden
    >
      <div className="flex w-max animate-marquee py-3.5">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap px-7 text-[0.72rem] font-bold uppercase tracking-[0.22em] after:ml-7 after:text-[#d4af87] after:content-['◆']"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
