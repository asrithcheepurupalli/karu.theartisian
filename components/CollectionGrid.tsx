"use client";

import { useState } from "react";
import PieceCard from "@/components/PieceCard";
import { type Piece } from "@/lib/data";

export default function CollectionGrid({
  pieces,
  categories,
}: {
  pieces: Piece[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");
  const shown =
    active === "All" ? pieces : pieces.filter((p) => p.category === active);

  return (
    <>
      <div className="filters" role="tablist" aria-label="Filter by craft">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={active === c}
            className={`filter ${active === c ? "is-active" : ""}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid-3 collection-grid">
        {shown.map((p, i) => (
          <article key={p.slug} className="reveal is-in">
            <PieceCard piece={p} priority={i < 3} />
          </article>
        ))}
      </div>

      <p className="collection-count fine">
        {shown.length} {shown.length === 1 ? "piece" : "pieces"} · each one
        verified and singular
      </p>
    </>
  );
}
