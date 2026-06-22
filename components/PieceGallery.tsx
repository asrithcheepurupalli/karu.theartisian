"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { img } from "@/lib/data";

const pad = (n: number) => String(n).padStart(2, "0");

export default function PieceGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [active, setActive] = useState(0);
  const [light, setLight] = useState(false);
  const rowRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);
  const count = images.length;

  const go = useCallback(
    (dir: number) => setActive((a) => (a + dir + count) % count),
    [count]
  );

  // live counter — the leftmost most-visible image in the horizontal row
  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;
    const update = () => {
      const left = row.scrollLeft;
      const right = left + row.clientWidth;
      let best = 0;
      let bestOverlap = -1;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const l = el.offsetLeft;
        const r = l + el.offsetWidth;
        const overlap = Math.max(0, Math.min(r, right) - Math.max(l, left));
        if (overlap > bestOverlap + 1) {
          bestOverlap = overlap;
          best = i;
        }
      });
      setActive(best);
    };
    update();
    row.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      row.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [count]);

  // lightbox keyboard + scroll lock
  useEffect(() => {
    if (!light) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLight(false);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [light, go]);

  const openAt = (i: number) => {
    setActive(i);
    setLight(true);
  };

  return (
    <div className="pgbig">
      <div className="pgbig__row" ref={rowRef}>
        {images.map((g, i) => (
          <figure
            key={g + i}
            data-i={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className="pgbig__item"
            onClick={() => openAt(i)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img(g, 1800)}
              alt={`${title}, view ${i + 1}`}
              loading={i === 0 ? "eager" : "lazy"}
              draggable={false}
            />
            <span className="pgbig__expand" aria-hidden>
              <span>⤢</span> Expand
            </span>
          </figure>
        ))}
      </div>

      <div className="pgbig__count" aria-hidden>
        {pad(active + 1)} <i>/</i> {pad(count)}
      </div>

      {light && (
        <div className="lightbox" onClick={() => setLight(false)}>
          <button className="lightbox__close" aria-label="Close">
            ✕
          </button>
          <button
            className="lightbox__arrow lightbox__arrow--prev"
            onClick={(e) => {
              e.stopPropagation();
              go(-1);
            }}
            aria-label="Previous"
          >
            ←
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img(images[active], 2400)}
            alt={`${title}, view ${active + 1}`}
            className="lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox__arrow lightbox__arrow--next"
            onClick={(e) => {
              e.stopPropagation();
              go(1);
            }}
            aria-label="Next"
          >
            →
          </button>
          <span className="lightbox__count">
            {pad(active + 1)} / {pad(count)}
          </span>
        </div>
      )}
    </div>
  );
}
