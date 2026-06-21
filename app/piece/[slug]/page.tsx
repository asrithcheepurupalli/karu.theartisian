import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import PieceCard from "@/components/PieceCard";
import AuctionTimer from "@/components/AuctionTimer";
import Marquee from "@/components/Marquee";
import CountUp from "@/components/CountUp";
import PieceGallery from "@/components/PieceGallery";
import Accordion from "@/components/Accordion";
import { pieces, getPiece, getArtisan, img, formatPrice } from "@/lib/data";

export function generateStaticParams() {
  return pieces.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) return { title: "Piece — Artisan Reserve" };
  return {
    title: `${piece.title} — Artisan Reserve`,
    description: piece.blurb,
  };
}

export default async function PiecePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) notFound();

  const artisan = getArtisan(piece.artisan)!;
  const related = pieces.filter((p) => p.slug !== piece.slug).slice(0, 3);
  const isAuction = Boolean(piece.auction);

  return (
    <article className="piece">
      {/* ============== FULL-BLEED GALLERY ============== */}
      <div className="piece-stage">
        <PieceGallery images={piece.gallery} title={piece.title} />
      </div>

      {/* ============== INFO BAR ============== */}
      <section className="piece-bar">
        <div className="piece-bar__head">
          <p className="piece-bar__crumb">
            <Link href="/collection">The Collection</Link>
            <span>/</span>
            {piece.category}
          </p>
          <h1 className="piece-bar__title">{piece.title}</h1>
          <p className="piece-bar__by">
            by{" "}
            <Link href={`/artisan/${artisan.slug}`} className="ulink">
              {artisan.name}
            </Link>{" "}
            · {piece.origin}
          </p>
        </div>

        <div className="piece-bar__mid">
          <p className="piece-bar__desc">{piece.blurb}</p>
          {isAuction ? (
            <AuctionTimer
              endsAt={piece.auction!.endsAt}
              startingBid={piece.auction!.startingBid}
              currentBid={piece.auction!.currentBid}
              bids={piece.auction!.bids}
            />
          ) : (
            <div className="piece-bar__cta">
              <button className="btn">Acquire this piece</button>
              <button className="btn btn--ghost">Enquire about commission</button>
            </div>
          )}
          <p className="piece-bar__rev">
            <strong>{piece.artisanShare}%</strong> goes directly to{" "}
            {artisan.name}.{" "}
            <Link href="/promise" className="ulink">
              Why →
            </Link>
          </p>
        </div>

        <div className="piece-bar__right">
          {isAuction ? (
            <>
              <span className="tag tag--live">Live auction</span>
              <span className="tag tag--clay">{piece.edition}</span>
            </>
          ) : (
            <>
              <span className="piece-bar__price">{formatPrice(piece.price)}</span>
              <span
                className={`tag ${
                  piece.editionAvailable === 1 ? "tag--clay" : ""
                }`}
              >
                {piece.edition}
              </span>
              <span className="fine">
                {piece.editionAvailable === 1
                  ? "the only one"
                  : `${piece.editionAvailable} remaining`}
              </span>
            </>
          )}
        </div>
      </section>

      {/* ============== FACTS TICKER ============== */}
      <Marquee
        variant="paper"
        items={[
          piece.edition,
          piece.materials,
          piece.origin,
          `${piece.year}`,
          piece.dimensions,
          piece.craftAge,
        ]}
      />

      {/* ============== STORY + DETAILS ============== */}
      <section className="section piece-story2">
        <div className="shell piece-story2__grid">
          <div className="piece-story2__narrative">
            <Reveal>
              <p className="eyebrow">The story</p>
            </Reveal>
            <Reveal delay={60}>
              <p className="pullquote">{piece.story[0]}</p>
            </Reveal>
            {piece.story.slice(1).map((para, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="bodytext bodytext--lg">{para}</p>
              </Reveal>
            ))}
          </div>

          <aside className="piece-story2__aside">
            <p className="eyebrow piece-story2__detailhead">The details</p>
            <Accordion
              items={[
                {
                  title: "Materials & dimensions",
                  body: (
                    <dl className="acc__specs">
                      <div>
                        <dt>Materials</dt>
                        <dd>{piece.materials}</dd>
                      </div>
                      <div>
                        <dt>Dimensions</dt>
                        <dd>{piece.dimensions}</dd>
                      </div>
                      <div>
                        <dt>Weight</dt>
                        <dd>{piece.weight}</dd>
                      </div>
                      <div>
                        <dt>Made</dt>
                        <dd>
                          {piece.year}, {piece.origin}
                        </dd>
                      </div>
                    </dl>
                  ),
                },
                {
                  title: "Authenticity & provenance",
                  body: (
                    <>
                      <p>
                        Ships with a digital certificate of authenticity recording
                        the maker, the materials, the date, and the craft origin.
                      </p>
                      <p className="acc__kv">
                        <span>Maker&apos;s mark</span>
                        {artisan.signature}
                      </p>
                      <p className="acc__kv">
                        <span>Craft origin</span>
                        {piece.craftAge}
                      </p>
                    </>
                  ),
                },
                {
                  title: "Shipping & care",
                  body: (
                    <>
                      <p>
                        Museum-grade, custom-built crating with full insurance.
                        International freight with customs and duties handled,
                        tracked to your door across seven countries and counting.
                      </p>
                      <p className="acc__kv">
                        <span>Care</span>
                        Dust gently with a dry, soft brush. Keep out of prolonged
                        direct sunlight and standing water.
                      </p>
                    </>
                  ),
                },
              ]}
            />
          </aside>
        </div>
      </section>

      {/* ============== PROCESS ============== */}
      <section className="section piece__process">
        <div className="shell">
          <Reveal>
            <div className="sec-head">
              <div>
                <p className="eyebrow">The making</p>
                <h2 className="display-lg">From earth to object</h2>
              </div>
              <p className="lead process__lead">
                {piece.craftAge} — a tradition kept alive by hand.
              </p>
            </div>
          </Reveal>

          <ol className="process">
            {piece.process.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 80}
                as="li"
                className="process__step"
              >
                <div className="frame frame--zoom process__img">
                  <Image
                    src={img(step.image, 900)}
                    alt={step.title}
                    fill
                    sizes="(max-width: 760px) 100vw, 25vw"
                  />
                </div>
                <span className="process__no">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="process__title">{step.title}</h3>
                <p className="process__body">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============== REVENUE MOMENT ============== */}
      <section className="revmoment">
        <div className="shell revmoment__inner">
          <Reveal>
            <p className="eyebrow revmoment__eyebrow">Where your money goes</p>
            <p className="revmoment__num">
              <CountUp to={piece.artisanShare} suffix="%" />
            </p>
            <p className="revmoment__cap">
              of this {isAuction ? "hammer price" : "purchase"} is paid{" "}
              <em>directly</em> to {artisan.name} — the hands that made it.
            </p>
            <Link href="/promise" className="tlink revmoment__link">
              How we pay our makers <span className="arr">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============== PROVENANCE + MAKER ============== */}
      <section className="section piece__prov">
        <div className="shell piece__provgrid">
          <Reveal className="provcard">
            <div className="provcard__seal" aria-hidden>
              ✦
            </div>
            <p className="eyebrow">Provenance</p>
            <h2 className="display-md">Certificate of authenticity</h2>
            <p className="bodytext">
              Every piece ships with a digital certificate recording exactly what
              you have collected, and the hand that made it.
            </p>
            <dl className="provcard__list">
              <div>
                <dt>Artisan</dt>
                <dd>{artisan.name}</dd>
              </div>
              <div>
                <dt>Craft origin</dt>
                <dd>{piece.craftAge}</dd>
              </div>
              <div>
                <dt>Created</dt>
                <dd>
                  {piece.year}, {piece.origin}
                </dd>
              </div>
              <div>
                <dt>Materials</dt>
                <dd>{piece.materials}</dd>
              </div>
              <div>
                <dt>Edition</dt>
                <dd>{piece.edition}</dd>
              </div>
              <div>
                <dt>Maker&apos;s mark</dt>
                <dd>{artisan.signature}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="makercard" delay={100}>
            <div className="frame makercard__portrait">
              <Image
                src={img(artisan.portrait, 900)}
                alt={artisan.name}
                fill
                sizes="(max-width: 900px) 100vw, 38vw"
              />
            </div>
            <div className="makercard__body">
              <p className="eyebrow">The maker</p>
              <h3 className="display-md">{artisan.name}</h3>
              <p className="makercard__role">
                {artisan.craft} · {artisan.location}
              </p>
              <p className="bodytext">{artisan.intro}</p>
              <Link href={`/artisan/${artisan.slug}`} className="tlink">
                See the full profile <span className="arr">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============== RELATED ============== */}
      <section className="section">
        <div className="shell">
          <div className="sec-head">
            <h2 className="display-lg">Continue collecting</h2>
            <Link href="/collection" className="tlink">
              All pieces <span className="arr">→</span>
            </Link>
          </div>
          <div className="grid-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} as="article">
                <PieceCard piece={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
