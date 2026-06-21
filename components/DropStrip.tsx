"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { type Piece, getArtisan, img, formatPrice } from "@/lib/data";

export default function DropStrip({
  pieces,
  eyebrow,
  title,
}: {
  pieces: Piece[];
  eyebrow: string;
  title: string;
}) {
  const rowRef = useRef<HTMLDivElement | null>(null);

  const nudge = (dir: number) => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: dir * row.clientWidth * 0.62, behavior: "smooth" });
  };

  return (
    <section className="section drop-sec">
      <div className="shell drop-head">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display-lg">{title}</h2>
        </div>
        <div className="drop-head__right">
          <Link href="/collection" className="tlink">
            View all <span className="arr">→</span>
          </Link>
          <div className="drop-nav">
            <button onClick={() => nudge(-1)} aria-label="Scroll left">
              ←
            </button>
            <button onClick={() => nudge(1)} aria-label="Scroll right">
              →
            </button>
          </div>
        </div>
      </div>

      <div className="drop-row" ref={rowRef}>
        {pieces.map((p, i) => {
          const artisan = getArtisan(p.artisan);
          const isAuction = Boolean(p.auction);
          return (
            <Link href={`/piece/${p.slug}`} className="drop-item" key={p.slug}>
              <div className="drop-item__media">
                <Image
                  src={img(p.hero, 1400)}
                  alt={p.title}
                  fill
                  sizes="(max-width: 760px) 86vw, 40vw"
                  priority={i === 0}
                />
                <span className="drop-item__index">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {isAuction ? (
                  <span className="tag tag--live drop-item__tag">Live auction</span>
                ) : p.editionAvailable === 1 ? (
                  <span className="tag tag--clay drop-item__tag">{p.edition}</span>
                ) : null}
              </div>
              <div className="drop-item__cap">
                <div>
                  <h3 className="drop-item__name">{p.title}</h3>
                  <p className="drop-item__by">{artisan?.name}</p>
                </div>
                <span className="drop-item__price">
                  {isAuction
                    ? formatPrice(p.auction!.currentBid)
                    : formatPrice(p.price)}
                </span>
              </div>
            </Link>
          );
        })}
        <Link href="/collection" className="drop-item drop-item--all">
          <div className="drop-item__allinner">
            <span className="eyebrow">The full gallery</span>
            <span className="drop-item__alltitle">
              See every <em>piece</em>
            </span>
            <span className="tlink">
              Enter <span className="arr">→</span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
