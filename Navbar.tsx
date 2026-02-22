/*
 * DESIGN: Underground Punk Zine
 * Navbar fixe, fond blanc/noir selon thème, liens en rose au hover
 * Logo Kalimero à gauche, liens de navigation, bouton thème à droite
 */

import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Yam What Yam", href: "https://yamwhatyam.netlify.app/", external: true },
  { label: "Picaboo", href: "https://picaboo.netlify.app/", external: true },
  { label: "Nest In Pace", href: "https://nest-in-pace.netlify.app/", external: true },
  { label: "Rock, Ghost, Rock !", href: "https://rockghostsrock.digital/", external: true },
  { label: "Chronic", href: "#", external: false },
  { label: "Rayon X", href: "#", external: false },
  { label: "PRNGRFX", href: "https://xxx19.digitalpress.blog/", external: true },
  { label: "Shop", href: "#", external: false },
  { label: "Goodies", href: "#", external: false },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: theme === "dark" ? "rgba(10,10,10,0.95)" : "rgba(255,255,255,0.95)",
        borderColor: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
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
            style={{
              borderColor: "#FF2D78",
            }}
          >
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663373356866/CMEWaetlJgNQwlju.jpg"
              alt="Kalimero Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
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
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="nav-link px-2 py-1 whitespace-nowrap text-xs"
              style={{
                color: theme === "dark" ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.7)",
                textDecoration: "none",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: theme toggle + mobile menu */}
        <div className="flex items-center gap-2">
          {/* Mobile menu button */}
          <button
            className="lg:hidden w-8 h-8 flex flex-col items-center justify-center gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className="block w-5 h-0.5 transition-all"
              style={{ backgroundColor: theme === "dark" ? "white" : "black" }}
            />
            <span
              className="block w-5 h-0.5 transition-all"
              style={{ backgroundColor: theme === "dark" ? "white" : "black" }}
            />
            <span
              className="block w-5 h-0.5 transition-all"
              style={{ backgroundColor: theme === "dark" ? "white" : "black" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden border-t px-4 py-3 flex flex-col gap-2"
          style={{
            backgroundColor: theme === "dark" ? "rgba(10,10,10,0.98)" : "rgba(255,255,255,0.98)",
            borderColor: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="nav-link py-1 text-sm"
              style={{
                color: theme === "dark" ? "rgba(255,255,255,0.8)" : "rgba(0,0,0,0.7)",
                textDecoration: "none",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
