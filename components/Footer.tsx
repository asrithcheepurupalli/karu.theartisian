import Link from "next/link";

// One-click, pre-written email to the studio — for anyone who wants this built.
const BUILD_MAIL =
  "mailto:thebrain@made-by-ac.com?subject=" +
  encodeURIComponent("Karu — build this with us") +
  "&body=" +
  encodeURIComponent(
    "Hi made. team,\n\nI saw Karu and I'd love to talk about building something like it (or working together).\n\nWhat I have in mind:\n\n\nThanks,\n"
  );

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
            Built by{" "}
            <a href="https://made-by-ac.com" target="_blank" rel="noreferrer">
              made. by ac
            </a>{" "}
            ·{" "}
            <a href={BUILD_MAIL}>Build this with us →</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
