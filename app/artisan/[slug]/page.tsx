import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import PieceCard from "@/components/PieceCard";
import Marquee from "@/components/Marquee";
import CountUp from "@/components/CountUp";
import { artisans, getArtisan, piecesByArtisan, img } from "@/lib/data";

export function generateStaticParams() {
  return artisans.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = getArtisan(slug);
  if (!a) return { title: "Artisan — Karu" };
  return { title: `${a.name} — Karu`, description: a.intro };
}

export default async function ArtisanPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artisan = getArtisan(slug);
  if (!artisan) notFound();

  const works = piecesByArtisan(artisan.slug);

  return (
    <article className="artisan">
      {/* ============== CINEMATIC HERO ============== */}
      <section className="artisan-cine">
        <div className="artisan-cine__media">
          <Image
            src={img(artisan.portrait, 2000)}
            alt={artisan.name}
            fill
            priority
            sizes="100vw"
          />
          <div className="artisan-cine__scrim" />
        </div>

        <div className="shell artisan-cine__inner">
          <Link href="/artisans" className="tlink tlink--back artisan-cine__back">
            <span className="arr">←</span> The Artisans
          </Link>
          <p className="eyebrow artisan-cine__region">{artisan.region}</p>
          <h1 className="artisan-cine__name">
            <span className="lp-line">
              <span style={{ animationDelay: "0.08s" }}>{artisan.name}</span>
            </span>
          </h1>
          <p className="artisan-cine__role">
            {artisan.craft} · {artisan.location}
          </p>
        </div>

        <div className="hero__cue artisan-cine__cue">
          <span>Scroll</span>
          <i />
        </div>
      </section>

      {/* ============== STATS BAND ============== */}
      <section className="artisan-stats">
        <div className="shell artisan-stats__grid">
          <Reveal className="artisan-stat">
            <span className="artisan-stat__num">
              <CountUp to={artisan.experienceYears} />
            </span>
            <span className="artisan-stat__lab">years at the craft</span>
          </Reveal>
          <Reveal className="artisan-stat" delay={80}>
            <span className="artisan-stat__num">
              <CountUp to={works.length} />
            </span>
            <span className="artisan-stat__lab">
              {works.length === 1 ? "piece available" : "pieces available"}
            </span>
          </Reveal>
          <Reveal className="artisan-stat" delay={160}>
            <span className="artisan-stat__num artisan-stat__num--text">
              {artisan.generation}
            </span>
            <span className="artisan-stat__lab">of the family</span>
          </Reveal>
        </div>
      </section>

      {/* ============== TICKER ============== */}
      <Marquee
        variant="ink"
        items={[artisan.tradition, artisan.location, artisan.craft, "Verified maker"]}
      />

      {/* ============== STORY ============== */}
      <section className="section artisan-story2">
        <div className="shell artisan-story2__grid">
          <Reveal className="artisan-story2__aside">
            <p className="eyebrow">The tradition</p>
            <p className="artisan-story2__quote">{artisan.tradition}</p>
            <dl className="artisan-story2__facts">
              <div>
                <dt>Based in</dt>
                <dd>{artisan.location}</dd>
              </div>
              <div>
                <dt>Maker&apos;s mark</dt>
                <dd>{artisan.signature}</dd>
              </div>
            </dl>
          </Reveal>

          <div className="artisan-story2__text">
            <Reveal>
              <p className="eyebrow">In her words, our record</p>
            </Reveal>
            {artisan.story.map((para, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className={i === 0 ? "pullquote" : "bodytext bodytext--lg"}>
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== WORKSHOP ============== */}
      <section className="section artisan-shop">
        <div className="shell">
          <Reveal>
            <div className="sec-head">
              <div>
                <p className="eyebrow">Inside the workshop</p>
                <h2 className="display-lg">Where the work is made</h2>
              </div>
            </div>
          </Reveal>
          <div className="artisan-shop__grid">
            {artisan.workshop.map((w, i) => (
              <Reveal
                key={w + i}
                delay={i * 80}
                as="figure"
                className={`frame frame--zoom artisan-shop__img ${
                  i === 0 ? "artisan-shop__img--wide" : ""
                }`}
              >
                <Image
                  src={img(w, 1400)}
                  alt={`${artisan.name}'s workshop`}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== WORKS ============== */}
      <section className="section section--paper">
        <div className="shell">
          <div className="sec-head">
            <div>
              <p className="eyebrow">Collect her work</p>
              <h2 className="display-lg">Available now</h2>
            </div>
            <Link href="/collection" className="tlink">
              The full collection <span className="arr">→</span>
            </Link>
          </div>
          <div className="grid-3">
            {works.map((p, i) => (
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
