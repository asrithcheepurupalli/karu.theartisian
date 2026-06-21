"use client";

import { useState, type ReactNode } from "react";

export type AccordionItem = {
  title: string;
  body: ReactNode;
};

export default function Accordion({
  items,
  initial = 0,
}: {
  items: AccordionItem[];
  initial?: number;
}) {
  const [open, setOpen] = useState<number | null>(initial);

  return (
    <div className="acc">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div className={`acc__item ${isOpen ? "is-open" : ""}`} key={it.title}>
            <button
              className="acc__head"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="acc__title">{it.title}</span>
              <span className="acc__sign" aria-hidden>
                <i />
                <i />
              </span>
            </button>
            <div className="acc__panel" data-open={isOpen}>
              <div className="acc__inner">{it.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
