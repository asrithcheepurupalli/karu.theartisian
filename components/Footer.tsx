import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="shell">
        <div className="site-foot__top">
          <div className="site-foot__brand">
            <h2 className="display-md">
              The greatest luxury is <em>human craftsmanship.</em>
            </h2>
            <Link href="/collection" className="btn btn--light">
              Enter the collection
            </Link>
          </div>

          <div className="site-foot__cols">
            <div>
              <p className="eyebrow muted">Explore</p>
              <Link href="/collection">The Collection</Link>
              <Link href="/artisans">The Artisans</Link>
              <Link href="/auctions">Live Auctions</Link>
              <Link href="/promise">Our Promise</Link>
            </div>
            <div>
              <p className="eyebrow muted">Acquire</p>
              <Link href="/promise">Provenance &amp; Authenticity</Link>
              <Link href="/promise">Commission a Piece</Link>
              <Link href="/promise">Global Shipping</Link>
              <Link href="/promise">Collector Care</Link>
            </div>
            <div>
              <p className="eyebrow muted">Reach us</p>
              <a href="mailto:hello@karu.world">hello@karu.world</a>
              <span className="fine">By appointment, worldwide</span>
            </div>
          </div>
        </div>

        <div className="site-foot__bar">
          <span className="fine">
            © {2026} Karu · Working title — a curated marketplace for
            Indian craftsmanship.
          </span>
          <span className="fine">
            A majority of every sale is paid directly to the maker.
          </span>
        </div>
      </div>
    </footer>
  );
}
