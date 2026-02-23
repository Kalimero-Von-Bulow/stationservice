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

const S = {
  nav: {
    position: "fixed" as const,
    top: 0, left: 0, right: 0,
    zIndex: 50,
    background: "rgba(10,10,10,0.97)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 1.2rem",
    height: "52px",
  },
  logo: {
    fontFamily: "'Space Mono', monospace",
    color: "#FF2D78",
    fontWeight: 700,
    fontSize: "1rem",
    textDecoration: "none",
    letterSpacing: "0.05em",
  },
  burger: {
    background: "none",
    border: "none",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column" as const,
    gap: "5px",
    padding: "8px",
  },
  bar: {
    display: "block",
    width: "22px",
    height: "2px",
    background: "white",
    borderRadius: "2px",
  },
  dropdown: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(10,10,10,0.99)",
    padding: "0.5rem 0",
  },
  link: {
    display: "block",
    padding: "0.85rem 1.4rem",
    color: "rgba(255,255,255,0.85)",
    textDecoration: "none",
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "1rem",
    fontWeight: 500,
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  disabled: {
    display: "block",
    padding: "0.85rem 1.4rem",
    color: "rgba(255,255,255,0.2)",
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "1rem",
    cursor: "not-allowed",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={S.nav}>
      <div style={S.inner}>
        <a href="/" style={S.logo}>Kalimero</a>
        <button
          style={S.burger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span style={S.bar} />
          <span style={S.bar} />
          <span style={S.bar} />
        </button>
      </div>

      {menuOpen && (
        <div style={S.dropdown}>
          {navLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                style={S.link}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <span key={link.label} style={S.disabled} title="Bientôt disponible">
                {link.label}
              </span>
            )
          )}
        </div>
      )}
    </nav>
  );
}
