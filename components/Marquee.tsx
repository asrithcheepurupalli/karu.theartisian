"use client";

type Props = {
  items: string[];
  variant?: "ink" | "clay" | "paper";
  reverse?: boolean;
};

export default function Marquee({ items, variant = "ink", reverse = false }: Props) {
  // duplicated track for a seamless loop
  const track = [...items, ...items];
  return (
    <div className={`marquee marquee--${variant}`} aria-hidden>
      <div className={`marquee__track ${reverse ? "marquee__track--rev" : ""}`}>
        {track.map((t, i) => (
          <span className="marquee__item" key={i}>
            {t}
            <span className="marquee__star">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
