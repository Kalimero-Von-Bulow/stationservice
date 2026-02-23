import { useState } from "react";

type NavLink = { label: string; href: string | null; external: boolean };

const navLinks: NavLink[] = [
  { label: "Yam What Yam", href: "https://yamwhatyam.vercel.app/", external: true },
  { label: "Picaboo", href: "https://picaboo.vercel.app/", external: true },
  { label: "Nest In Pace", href: "https://nest-in-pace.vercel.app/", external: true },
  { label: "Rock, Ghost, Rock !", href: "https://rockghostsrock.digitalpress.blog/", external: true },
  { label: "Chronic", href: null, external: false },
  { label: "Rayon X", href: null, external: false },
  { label: "PRNGRFX", href: "https://xxx19.digitalpress.blog/", external: true },
  { label: "Shop", href: "https://ko-fi.com/kalimero_666/shop", external: true },
  { label: "Goodies", href: null, external: false },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-wrapper {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          background: rgba(10,10,10,0.95);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.2rem;
          height: 52px;
        }
        .nav-logo {
          font-family: 'Space Mono', monospace;
          color: #FF2D78;
          font-weight: 700;
          font-size: 1rem;
          text-decoration: none;
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }
        .nav-burger {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
        }
        .nav-burger span {
          display: block;
          width: 22px;
          height: 2px;
          background: white;
          border-radius: 2px;
        }
        .nav-mobile-menu {
          border-top: 1px solid rgba(255,255,255,0.1);
          background: rgba(10,10,10,0.98);
          padding: 0.75rem 1.2rem 1.2rem;
        }
        .nav-mobile-link {
          display: block;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1rem;
          font-weight: 500;
        }
        .nav-mobile-link:last-child {
          border-bottom: none;
        }
        .nav-mobile-link.disabled {
          color: rgba(255,255,255,0.25);
          cursor: not-allowed;
        }
      `}</style>

      <nav className="nav-wrapper">
        <div className="nav-inner">
          <a href="/" className="nav-logo">Kalimero</a>
          <button
            className="nav-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {menuOpen && (
          <div className="nav-mobile-menu">
            {navLinks.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="nav-mobile-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <span
                  key={link.label}
                  className="nav-mobile-link disabled"
                  title="Bientôt disponible"
                >
                  {link.label}
                </span>
              )
            )}
          </div>
        )}
      </nav>
    </>
  );
}
