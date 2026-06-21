import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import AuctionTimer from "@/components/AuctionTimer";
import { auctionPieces, getArtisan, img, formatPrice } from "@/lib/data";

export const metadata: Metadata = {
  title: "Live Auctions — Artisan Reserve",
  description:
    "Master works and singular pieces, offered through live auction. Scarcity that lets collectors set the value of exceptional craftsmanship.",
};

export default function AuctionsPage() {
  return (
    <>
      <section className="page-head page-head--dark">
        <div className="shell">
          <p className="eyebrow" style={{ color: "var(--gold-light)" }}>
            Live Auctions
          </p>
          <h1 className="display-lg">Where collectors set the value</h1>
          <p className="lead page-head__lead" style={{ color: "rgba(250,247,241,0.72)" }}>
            A handful of master works are released to auction rather than sold at
            a fixed price. The maker sets the reserve. You decide the rest — and
            the artisan&apos;s share rises with every bid.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell auction-list">
          {auctionPieces.map((p, i) => {
            const a = getArtisan(p.artisan)!;
            return (
              <Reveal key={p.slug} delay={i * 80} as="article" className="auction-row">
                <Link href={`/piece/${p.slug}`} className="frame frame--zoom auction-row__img">
                  <Image
                    src={img(p.hero, 1200)}
                    alt={p.title}
                    fill
                    sizes="(max-width: 980px) 100vw, 48vw"
                    priority={i === 0}
                  />
                  <span className="tag tag--live auction-row__live">Live</span>
                </Link>

                <div className="auction-row__body">
                  <span className="tag tag--clay">{p.edition}</span>
                  <h2 className="display-md">
                    <Link href={`/piece/${p.slug}`} className="ulink">
                      {p.title}
                    </Link>
                  </h2>
                  <p className="auction-row__by">
                    by {a.name} · {p.origin}
                  </p>
                  <p className="bodytext">{p.blurb}</p>

                  <AuctionTimer
                    endsAt={p.auction!.endsAt}
                    startingBid={p.auction!.startingBid}
                    currentBid={p.auction!.currentBid}
                    bids={p.auction!.bids}
                  />

                  <div className="auction-row__foot">
                    <span className="fine">
                      {p.artisanShare}% of the hammer price goes to {a.name}
                    </span>
                    <Link href={`/piece/${p.slug}`} className="tlink">
                      Full lot details <span className="arr">→</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="section how-auction">
        <div className="shell">
          <Reveal>
            <div className="sec-head sec-head--center">
              <div>
                <p className="eyebrow">How it works</p>
                <h2 className="display-lg">A fair, transparent auction</h2>
              </div>
            </div>
          </Reveal>
          <div className="grid-3">
            {[
              { n: "01", t: "The maker sets the reserve", b: "Every lot opens at a price the artisan is content with. Nothing sells below it." },
              { n: "02", t: "Collectors bid live", b: "The timer counts down. Each bid is held, and the highest bid at close wins the work." },
              { n: "03", t: "The artisan’s share rises", b: "Because their percentage is fixed, every bid increases what the maker takes home." },
            ].map((c, i) => (
              <Reveal key={c.n} delay={i * 80} as="article" className="trust__card">
                <span className="trust__num">{c.n}</span>
                <h3 className="trust__title">{c.t}</h3>
                <p className="trust__body">{c.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
