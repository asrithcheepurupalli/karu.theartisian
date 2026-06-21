"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/collection", label: "The Collection" },
  { href: "/artisans", label: "Artisans" },
  { href: "/auctions", label: "Auctions" },
  { href: "/promise", label: "Our Promise" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className={`site-head ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-head__inner shell">
        <Link href="/" className="wordmark" aria-label="Artisan Reserve home">
          <span className="wordmark__mark">AR</span>
          <span className="wordmark__name">
            Artisan <em>Reserve</em>
          </span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`site-nav__link ${
                pathname.startsWith(item.href) ? "is-active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-head__actions">
          <Link href="/collection" className="btn btn--ghost head-cta">
            Acquire
          </Link>
          <button
            className={`menu-toggle ${open ? "is-open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${open ? "is-open" : ""}`}>
        {NAV.map((item) => (
          <Link key={item.href} href={item.href} className="mobile-nav__link">
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
