import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { img } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Promise — Karu",
  description:
    "How we verify makers, guarantee provenance, pay artisans the majority, commission custom work, and ship craftsmanship safely worldwide.",
};

const COMMITMENTS = [
  {
    k: "The maker keeps the majority",
    b: "Between 70 and 80 percent of every sale is paid directly to the artisan. We print the exact split on every product page. There are no hidden listing fees, and no middlemen taking a cut of the maker's name.",
  },
  {
    k: "Curated, never crowded",
    b: "Anyone cannot list. We seek out makers, visit their workshops, and hand-select each piece against a single standard: would this belong in a serious collection? Most things never make it in. That is the point.",
  },
  {
    k: "Provenance, guaranteed",
    b: "Every work ships with a digital certificate of authenticity — the maker, the materials, the date, the craft origin, and the maker's mark. You always know exactly what you hold and whose hands made it.",
  },
  {
    k: "Scarcity that is real",
    b: "One-of-one works, numbered editions, and small batches — never an endless catalogue. When a piece is collected, it is genuinely gone.",
  },
];

const STEPS = [
  { n: "01", t: "Discover", b: "Browse the gallery, or tell us what you are looking for. Every piece carries its full story." },
  { n: "02", t: "Acquire or bid", b: "Collect at a fixed price, or compete for a master work at live auction." },
  { n: "03", t: "We pack like a gallery", b: "Museum-grade, custom-built crating with full insurance for fragile, irreplaceable work." },
  { n: "04", t: "Delivered worldwide", b: "International freight, customs and duties handled, tracked to your door across seven countries and counting." },
];

export default function PromisePage() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="promise-hero">
        <div className="promise-hero__media">
          <Image
            src={img("1589051088132-06f36a22012a", 2000)}
            alt="An artisan's hands at work"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero__scrim" />
        </div>
        <div className="shell promise-hero__content">
          <p className="eyebrow" style={{ color: "var(--gold-light)" }}>
            Our Promise
          </p>
          <h1 className="display-lg">
            A platform built to <em>elevate</em> makers, not exploit them.
          </h1>
          <p className="lead" style={{ color: "rgba(250,247,241,0.78)" }}>
            Indian craftsmanship has been undervalued for generations. Everything
            we do is designed to reverse that — transparently, and on the maker&apos;s
            terms.
          </p>
        </div>
      </section>

      {/* ---------------- COMMITMENTS ---------------- */}
      <section className="section">
        <div className="shell">
          <div className="commit">
            {COMMITMENTS.map((c, i) => (
              <Reveal key={c.k} delay={i * 70} as="article" className="commit__item">
                <span className="commit__no">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h2 className="display-md commit__title">{c.k}</h2>
                  <p className="bodytext bodytext--lg">{c.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SPLIT STATEMENT ---------------- */}
      <section className="revband">
        <div className="shell revband__inner">
          <Reveal>
            <p className="eyebrow revband__eyebrow">Transparency</p>
            <h2 className="display-lg revband__head">
              “75% of this purchase goes directly to the artisan.”
            </h2>
            <p className="revband__sub">
              You will see a line like this on every piece — with a visual
              breakdown of exactly where your money goes. No guessing, no fine
              print.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- COMMISSION ---------------- */}
      <section className="section commission">
        <div className="shell commission__grid">
          <Reveal className="frame commission__img">
            <Image
              src={img("1611013621103-91e10668a120", 1200)}
              alt="A custom piece being shaped by hand"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </Reveal>
          <Reveal className="commission__body" delay={100}>
            <p className="eyebrow">Commission a piece</p>
            <h2 className="display-lg">Have something made, only for you</h2>
            <p className="lead">
              A family deity, a memorial figure, a piece scaled for a particular
              room. Tell us what you imagine and we will match you with the right
              master for the tradition.
            </p>
            <ol className="commission__steps">
              <li><span>1</span> Share your idea and intent</li>
              <li><span>2</span> The artisan reviews and estimates</li>
              <li><span>3</span> You approve the maquette and timeline</li>
              <li><span>4</span> The piece is made, documented, and shipped</li>
            </ol>
            <Link href="/collection" className="btn">
              Start a commission
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SHIPPING ---------------- */}
      <section className="section section--paper">
        <div className="shell">
          <Reveal>
            <div className="sec-head sec-head--center">
              <div>
                <p className="eyebrow">Collecting from anywhere</p>
                <h2 className="display-lg">Effortless, even from across the world</h2>
              </div>
            </div>
          </Reveal>
          <div className="steps4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 70} as="article" className="steps4__item">
                <span className="steps4__no">{s.n}</span>
                <h3 className="steps4__title">{s.t}</h3>
                <p className="steps4__body">{s.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="section cta">
        <div className="shell cta__inner">
          <Reveal>
            <h2 className="display-lg">
              Collect something that <em>means</em> something.
            </h2>
            <div className="cta__actions">
              <Link href="/collection" className="btn">
                Enter the collection
              </Link>
              <Link href="/artisans" className="tlink">
                Meet the makers <span className="arr">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
