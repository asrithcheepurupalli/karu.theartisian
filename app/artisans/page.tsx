import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { artisans, piecesByArtisan, img } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Artisans — Artisan Reserve",
  description:
    "Meet the verified makers behind the collection — the families, traditions, and hands that shape every piece.",
};

export default function ArtisansPage() {
  return (
    <>
      <section className="page-head">
        <div className="shell">
          <p className="eyebrow">The Artisans</p>
          <h1 className="display-lg">The hands behind the work</h1>
          <p className="lead page-head__lead">
            We do not list anonymous inventory. Each maker is verified, visited,
            and given a profile — because the story of the hand is the value of
            the object.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="shell artisan-list">
          {artisans.map((a, i) => {
            const count = piecesByArtisan(a.slug).length;
            return (
              <Reveal key={a.slug} delay={i * 60} as="article">
                <Link href={`/artisan/${a.slug}`} className="artisan-row">
                  <div className="frame frame--zoom artisan-row__img">
                    <Image
                      src={img(a.portrait, 900)}
                      alt={a.name}
                      fill
                      sizes="(max-width: 760px) 100vw, 30vw"
                      priority={i === 0}
                    />
                  </div>
                  <div className="artisan-row__body">
                    <p className="eyebrow muted">{a.region}</p>
                    <h2 className="display-md">{a.name}</h2>
                    <p className="artisan-row__role">
                      {a.craft} · {a.location}
                    </p>
                    <p className="bodytext artisan-row__intro">{a.intro}</p>
                    <div className="artisan-row__meta">
                      <span>{a.experienceYears} yrs</span>
                      <span>{a.generation}</span>
                      <span>
                        {count} {count === 1 ? "piece" : "pieces"} available
                      </span>
                    </div>
                    <span className="tlink">
                      View profile <span className="arr">→</span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
