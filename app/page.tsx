import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import DropStrip from "@/components/DropStrip";
import Marquee from "@/components/Marquee";
import CountUp from "@/components/CountUp";
import {
  pieces,
  artisans,
  getArtisan,
  piecesByArtisan,
  img,
} from "@/lib/data";

export default function Home() {
  const drop = pieces.filter((p) => p.featured).slice(0, 6);
  const lead = artisans[0];
  const others = artisans.slice(1);

  return (
    <>
      {/* ============== HERO — artisan-led ============== */}
      <section className="lp-hero">
        <div className="lp-hero__media">
          <Image
            src={img("1609881583302-61548332039c", 2200)}
            alt="A master artisan's hands shaping clay"
            fill
            priority
            sizes="100vw"
            className="lp-hero__img"
          />
          <div className="lp-hero__scrim" />
        </div>

        <div className="lp-hero__inner shell">
          <p className="eyebrow lp-hero__eyebrow">
            Handcrafted in India · Collected worldwide
          </p>
          <h1 className="lp-hero__title">
            <span className="lp-line">
              <span style={{ animationDelay: "0.05s" }}>Made by the last</span>
            </span>
            <span className="lp-line">
              <span style={{ animationDelay: "0.18s" }}>
                <em>masters</em> of the craft.
              </span>
            </span>
          </h1>
          <p className="lp-hero__lead">
            We open the workshop door to the world. Buy directly from India&apos;s
            finest makers — every piece verified, every story kept, and the
            majority of each sale paid straight to the hands that made it.
          </p>
          <div className="lp-hero__actions">
            <Link href="/artisans" className="btn btn--light">
              Meet the makers
            </Link>
            <Link href="/collection" className="tlink lp-hero__tlink">
              Browse the gallery <span className="arr">→</span>
            </Link>
          </div>
        </div>

        <div className="hero__cue lp-hero__cue">
          <span>Scroll</span>
          <i />
        </div>
      </section>

      {/* ============== TICKER ============== */}
      <Marquee
        variant="clay"
        items={[
          "Handmade in India",
          "78% to the artisan",
          "Shipped to 30+ countries",
          "Verified makers",
          "One of one",
          "No middlemen",
        ]}
      />

      {/* ============== WHO WE ARE ============== */}
      <section className="section vision">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Who we are</p>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="vision__statement">
              We are India&apos;s artisans — selling{" "}
              <em>direct to the world</em>, for the first time on our own terms.
            </h2>
          </Reveal>
          <div className="vision__cols">
            <Reveal delay={120} className="vision__col">
              <p className="bodytext">
                For generations, the people who make India&apos;s finest crafts
                sold them for a fraction of their worth. Middlemen took the
                margin. Buyers across the world never even learned their names.
              </p>
            </Reveal>
            <Reveal delay={180} className="vision__col">
              <p className="bodytext">
                Karu exists to end that. A curated house that carries
                the work of verified masters straight to collectors abroad —
                preserving the craft, naming the maker, and paying them what they
                have always deserved.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============== MEET THE MAKERS ============== */}
      <section className="section makers">
        <div className="shell">
          <div className="sec-head">
            <Reveal>
              <div>
                <p className="eyebrow">The makers</p>
                <h2 className="display-lg">The people behind every piece</h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <p className="lead makers__lead">
                Not anonymous inventory — named masters, each with a village, a
                lineage, and a craft passed hand to hand for centuries.
              </p>
            </Reveal>
          </div>

          {/* lead maker feature */}
          <div className="maker__grid makers__feature">
            <Reveal className="maker__body">
              <p className="eyebrow">In focus</p>
              <h3 className="display-md maker__name">{lead.name}</h3>
              <p className="maker__role">
                {lead.craft} · {lead.location}
              </p>
              <p className="lead">{lead.intro}</p>
              <ul className="maker__facts">
                <li>
                  <span>{lead.experienceYears}</span> years at the craft
                </li>
                <li>
                  <span>{lead.generation}</span> of her family
                </li>
                <li>
                  <span>{lead.tradition}</span>
                </li>
              </ul>
              <Link href={`/artisan/${lead.slug}`} className="tlink">
                Read her story <span className="arr">→</span>
              </Link>
            </Reveal>
            <Reveal className="maker__media" delay={100}>
              <div className="frame maker__portrait">
                <Image
                  src={img(lead.portrait, 1100)}
                  alt={lead.name}
                  fill
                  sizes="(max-width: 900px) 100vw, 45vw"
                />
              </div>
            </Reveal>
          </div>

          {/* the other makers */}
          <div className="makers-grid">
            {others.map((a, i) => {
              const n = piecesByArtisan(a.slug).length;
              return (
                <Reveal key={a.slug} delay={i * 80} as="article">
                  <Link href={`/artisan/${a.slug}`} className="maker-tile">
                    <div className="frame frame--zoom maker-tile__media">
                      <Image
                        src={img(a.portrait, 800)}
                        alt={a.name}
                        fill
                        sizes="(max-width: 760px) 100vw, 30vw"
                      />
                    </div>
                    <p className="eyebrow muted maker-tile__region">{a.region}</p>
                    <h3 className="maker-tile__name">{a.name}</h3>
                    <p className="maker-tile__meta">
                      {a.craft} · {a.experienceYears} yrs ·{" "}
                      {n} {n === 1 ? "piece" : "pieces"}
                    </p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== THE WORK ============== */}
      <DropStrip
        pieces={drop}
        eyebrow="In the gallery now"
        title="What they're making"
      />

      {/* ============== FAIR PAY ============== */}
      <section className="flip">
        <div className="shell flip__grid">
          <Reveal className="flip__copy">
            <p className="eyebrow flip__eyebrow">The difference</p>
            <h2 className="display-lg flip__head">
              Your money reaches the hand that <em>made it</em> — not a middleman.
            </h2>
            <p className="flip__sub">
              Every piece prints its split, right on the page. We take only what
              keeps the house running. The rest goes home to the maker.
            </p>
            <Link href="/promise" className="btn btn--light">
              Read our promise
            </Link>
          </Reveal>

          <Reveal className="flip__stat" delay={120}>
            <div className="flip__bignum">
              <CountUp to={78} suffix="%" />
            </div>
            <p className="flip__bigcap">
              of an average sale is paid <em>directly</em> to the artisan
            </p>
            <div className="flip__rows">
              <div className="flip__row">
                <span className="flip__rowk">Hand-selected pieces</span>
                <span className="flip__rowv">
                  <CountUp to={100} suffix="%" />
                </span>
              </div>
              <div className="flip__row">
                <span className="flip__rowk">Verified master makers</span>
                <span className="flip__rowv">
                  <CountUp to={4} />
                </span>
              </div>
              <div className="flip__row">
                <span className="flip__rowk">Countries we ship to</span>
                <span className="flip__rowv">
                  <CountUp to={30} suffix="+" />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== FROM INDIA TO THE WORLD ============== */}
      <section className="section global">
        <div className="shell global__grid">
          <Reveal className="global__copy">
            <p className="eyebrow">From India to the world</p>
            <h2 className="display-lg global__head">
              From a village workshop to your home — wherever in the world that
              is.
            </h2>
            <p className="lead global__lead">
              Collecting from across the world should feel effortless. We handle
              the hard parts, so a piece made by hand in rural India arrives at
              your door like the treasure it is.
            </p>
            <ul className="global__points">
              <li>
                <span className="global__pt">Insured, museum-grade crating</span>
                Each piece is packed to survive the journey — built around the
                object, fully insured.
              </li>
              <li>
                <span className="global__pt">Customs &amp; duties handled</span>
                We manage international freight, paperwork, and duties end to end.
              </li>
              <li>
                <span className="global__pt">Certificate of authenticity</span>
                A digital record of the maker, materials, and origin travels with
                every piece.
              </li>
              <li>
                <span className="global__pt">Tracked to your door</span>
                Full tracking from the workshop to your home, anywhere we ship.
              </li>
            </ul>
          </Reveal>

          <Reveal className="global__media" delay={100}>
            <div className="frame global__img">
              <Image
                src={img("1595351298020-038700609878", 1200)}
                alt="Inside an Indian artisan workshop"
                fill
                sizes="(max-width: 900px) 100vw, 42vw"
              />
            </div>
            <div className="global__badge">
              <span className="global__badgenum">
                <CountUp to={30} suffix="+" />
              </span>
              <span className="global__badgelab">countries served</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== HOW YOU COLLECT ============== */}
      <section className="section chapters section--paper">
        <div className="shell">
          <Reveal>
            <div className="sec-head">
              <div>
                <p className="eyebrow">How you collect</p>
                <h2 className="display-lg">Buying from across the world, made simple</h2>
              </div>
              <p className="lead chapters__lead">
                Four steps from discovering a maker to holding their work in your
                hands.
              </p>
            </div>
          </Reveal>

          <ol className="chapters__list">
            {[
              { n: "01", t: "Discover the maker", b: "Browse by craft or maker. Every piece carries its full story, provenance, and the share that reaches the artisan." },
              { n: "02", t: "Acquire or bid", b: "Collect at a fixed price, or compete for a master work at live auction — securely, in your currency." },
              { n: "03", t: "We pack & insure", b: "Museum-grade crating built around the piece, fully insured, with customs and duties handled for you." },
              { n: "04", t: "Delivered to your door", b: "Tracked international delivery, with a certificate of authenticity in hand when it arrives." },
            ].map((c, i) => (
              <Reveal key={c.n} delay={i * 80} as="li" className="chapter">
                <span className="chapter__n">{c.n}</span>
                <h3 className="chapter__t">{c.t}</h3>
                <p className="chapter__b">{c.b}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============== MANTRA TICKER ============== */}
      <Marquee
        variant="ink"
        reverse
        items={[
          "A name, not a brand",
          "A village, not a warehouse",
          "A tradition, not a trend",
          "A maker, paid fairly",
        ]}
      />

      {/* ============== CLOSING ============== */}
      <section className="closing">
        <div className="shell closing__inner">
          <Reveal>
            <p className="eyebrow closing__eyebrow">Begin collecting</p>
            <h2 className="closing__head">
              Own a piece of a <em>living tradition</em> — and keep a craft alive.
            </h2>
            <div className="closing__actions">
              <Link href="/collection" className="btn btn--light">
                Browse the gallery
              </Link>
              <Link href="/artisans" className="tlink closing__tlink">
                Meet the makers <span className="arr">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
