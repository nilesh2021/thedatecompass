type MarqueeBandProps = {
  items: string[];
};

export default function MarqueeBand({ items }: MarqueeBandProps) {
  const track = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y border-cream/10 bg-brand-rose text-cream"
      aria-hidden
    >
      <div className="flex w-max animate-marquee py-3.5">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="whitespace-nowrap px-7 text-[0.72rem] font-bold uppercase tracking-[0.22em] after:ml-7 after:opacity-55 after:content-['✦']"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
