/*
 * DESIGN: Underground Punk Zine
 * Navbar fixe, fond noir, liens en rose au hover
 * Logo Kalimero à gauche, liens de navigation à droite
 */

import { useState } from "react";

const navLinks = [
  { label: "Yam What Yam", href: "https://yamwhatyam.vercel.app/", external: true },
  { label: "Picaboo", href: "https://picaboo.vercel.app/", external: true },
  { label: "Nest In Pace", href: "https://nest-in-pace.vercel.app/", external: true },
  { label: "Rock, Ghost, Rock !", href: "https://rockghostsrock.digitalpress.blog/", external: true },
  // TODO: remplacer les liens ci-dessous par les vraies URLs quand disponibles
  { label: "Chronic", href: null, external: false },
  { label: "Rayon X", href: null, external: false },
  { label: "PRNGRFX", href: "https://xxx19.digitalpress.blog/", external: true },
  { label: "Shop", href: "https://ko-fi.com/kalimero_666/shop", external: true },
  { label: "Goodies", href: null, external: false },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(10,10,10,0.95)",
        borderColor: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="flex items-center justify-between px-4 h-12">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 flex-shrink-0"
          style={{ textDecoration: "none" }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0 border-2"
            style={{ borderColor: "#FF2D78" }}
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663373356866/CMEWaetlJgNQwlju.jpg"
              alt="Kalimero Logo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <span
            className="font-bold text-sm hidden sm:block"
            style={{
              fontFamily: "'Space Mono', monospace",
              color: "#FF2D78",
              letterSpacing: "0.05em",
            }}
          >
            Kalimero
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1 overflow-x-auto">
          {navLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="nav-link px-2 py-1 whitespace-nowrap text-xs"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className="px-2 py-1 whitespace-nowrap text-xs"
                title="Bientôt disponible"
                style={{
                  color: "rgba(255,255,255,0.3)",
                  fontFamily: "'Space Grotesk', sans-serif",
                  cursor: "not-allowed",
                }}
              >
                {link.label}
              </span>
            )
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
        >
          <span className="block w-5 h-0.5 transition-all" style={{ backgroundColor: "white" }} />
          <span className="block w-5 h-0.5 transition-all" style={{ backgroundColor: "white" }} />
          <span className="block w-5 h-0.5 transition-all" style={{ backgroundColor: "white" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t px-4 py-3 flex flex-col gap-2"
          style={{
            backgroundColor: "rgba(10,10,10,0.98)",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          {navLinks.map((link) =>
            link.href ? (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="nav-link py-1 text-sm"
                style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <span
                key={link.label}
                className="py-1 text-sm"
                title="Bientôt disponible"
                style={{ color: "rgba(255,255,255,0.3)", cursor: "not-allowed" }}
              >
                {link.label}
              </span>
            )
          )}
        </div>
      )}
    </nav>
  );
}
