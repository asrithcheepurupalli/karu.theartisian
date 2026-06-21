import Image from "next/image";
import Link from "next/link";
import { type Piece, getArtisan, img, formatPrice } from "@/lib/data";

export default function PieceCard({
  piece,
  priority = false,
}: {
  piece: Piece;
  priority?: boolean;
}) {
  const artisan = getArtisan(piece.artisan);
  const isAuction = Boolean(piece.auction);
  const swap = piece.gallery.find((g) => g !== piece.hero);

  return (
    <Link href={`/piece/${piece.slug}`} className="card">
      <div className="card__frame">
        <Image
          src={img(piece.hero, 1100)}
          alt={piece.title}
          fill
          sizes="(max-width: 760px) 100vw, 33vw"
          className="card__img card__img--a"
          priority={priority}
        />
        {swap && (
          <Image
            src={img(swap, 1100)}
            alt=""
            fill
            sizes="(max-width: 760px) 100vw, 33vw"
            className="card__img card__img--b"
          />
        )}
        <div className="card__tags">
          {isAuction ? (
            <span className="tag tag--live">Live auction</span>
          ) : piece.editionAvailable === 1 ? (
            <span className="tag tag--clay tag--dot">{piece.edition}</span>
          ) : (
            <span className="tag tag--dot">{piece.edition}</span>
          )}
        </div>
      </div>

      <div className="card__body">
        <div className="card__head">
          <h3 className="card__title">{piece.title}</h3>
          <span className="card__price">
            {isAuction
              ? formatPrice(piece.auction!.currentBid)
              : formatPrice(piece.price)}
          </span>
        </div>
        <div className="card__meta">
          <span>{artisan?.name}</span>
          <span className="card__sep">·</span>
          <span>{piece.origin}</span>
        </div>
        <span className="card__cta">
          {isAuction ? "Place a bid" : "View piece"}
          <span className="arr" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
