"use client";

import { useEffect, useMemo, useState } from "react";
import { formatPrice } from "@/lib/data";

type Props = {
  endsAt: string;
  startingBid: number;
  currentBid: number;
  bids: number;
  compact?: boolean;
};

function diff(target: number) {
  const now = Date.now();
  const ms = Math.max(0, target - now);
  const d = Math.floor(ms / 86400000);
  const h = Math.floor((ms % 86400000) / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return { d, h, m, s, ended: ms === 0 };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function AuctionTimer({
  endsAt,
  startingBid,
  currentBid,
  bids,
  compact = false,
}: Props) {
  const target = useMemo(() => new Date(endsAt).getTime(), [endsAt]);
  const [t, setT] = useState(() => diff(target));
  const [bid, setBid] = useState(currentBid);
  const [count, setCount] = useState(bids);
  const [input, setInput] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const minNext = bid + Math.max(50, Math.round(bid * 0.03));

  function placeBid(e: React.FormEvent) {
    e.preventDefault();
    const value = Number(input.replace(/[^0-9.]/g, ""));
    if (!value || value < minNext) {
      setNote(`Enter at least ${formatPrice(minNext)} to lead.`);
      return;
    }
    setBid(value);
    setCount((c) => c + 1);
    setInput("");
    setNote(`You're the highest bidder at ${formatPrice(value)}. (Demo)`);
  }

  if (compact) {
    return (
      <div className="timer timer--compact">
        <span className="tag tag--live">Live</span>
        <span className="timer__compactval">
          {t.d}d {pad(t.h)}h {pad(t.m)}m left
        </span>
      </div>
    );
  }

  return (
    <div className="timer">
      <div className="timer__row">
        <div>
          <p className="eyebrow">Current bid</p>
          <p className="timer__bid">{formatPrice(bid)}</p>
          <p className="fine">
            {count} bids · opened at {formatPrice(startingBid)}
          </p>
        </div>
        <span className="tag tag--live">Live auction</span>
      </div>

      <div className="timer__clock" aria-label="Time remaining">
        {[
          { v: t.d, l: "Days" },
          { v: t.h, l: "Hrs" },
          { v: t.m, l: "Min" },
          { v: t.s, l: "Sec" },
        ].map((u) => (
          <div className="timer__unit" key={u.l}>
            <span className="timer__num">{pad(u.v)}</span>
            <span className="timer__label">{u.l}</span>
          </div>
        ))}
      </div>

      {t.ended ? (
        <p className="timer__ended">This auction has closed.</p>
      ) : (
        <form className="timer__form" onSubmit={placeBid}>
          <div className="timer__inputwrap">
            <span>$</span>
            <input
              inputMode="numeric"
              placeholder={String(minNext)}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-label="Your bid amount"
            />
          </div>
          <button type="submit" className="btn">
            Place bid
          </button>
        </form>
      )}

      <p className="timer__hint">{note || `Next bid: ${formatPrice(minNext)} or more`}</p>
    </div>
  );
}
