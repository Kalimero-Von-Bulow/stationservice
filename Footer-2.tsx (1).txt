/*
 * DESIGN: Underground Punk Zine
 * Footer avec liens sociaux, projets et crédits
 * - Toujours en mode sombre
 * - Liens non disponibles désactivés (cursor not-allowed, opacité réduite)
 * - Suppression du doublon Instagram dans projectLinks
 */

interface FooterLink {
  label: string;
  href: string | null;
}

export default function Footer() {
  const socialLinks: FooterLink[] = [
    { label: "Instagram", href: "https://www.instagram.com/kalimero_____666/" },
    { label: "Facebook", href: "https://www.facebook.com/kalimero.officiel" },
    { label: "Youtube", href: "https://www.youtube.com/@kalimero666" },
    // TODO: ajouter les vraies URLs quand les comptes sont actifs
    { label: "Pixelfed", href: null },
    { label: "Peertube", href: null },
    { label: "Mastodon", href: null },
    { label: "...and more →", href: null },
  ];

  const supportLinks: FooterLink[] = [
    { label: "Book-O-Matics", href: "https://ko-fi.com/kalimero_666/shop" },
    { label: "Ko-Fi", href: "https://ko-fi.com/kalimero666" },
    { label: "Tipeee", href: "https://www.tipeee.com/kalimero" },
    // TODO: ajouter les vraies URLs
    { label: "Opensea", href: null },
    { label: "Patreon", href: null },
    { label: "Goodies", href: null },
    { label: "...and more →", href: null },
  ];

  const projectLinks: FooterLink[] = [
    { label: "Rock, Ghost, Rock !", href: "https://rockghostsrock.digitalpress.blog/" },
    { label: "PRNGRFX", href: "https://xxx19.digitalpress.blog/" },
    { label: "kalimero.ink", href: "https://kalimero.ink/" },
    { label: "Github", href: "https://github.com/kalimero666" },
  ];

  const renderLink = (link: FooterLink) =>
    link.href ? (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm hover:text-white transition-colors"
        style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
      >
        {link.label}
      </a>
    ) : (
      <span
        key={link.label}
        title="Bientôt disponible"
        className="text-sm"
        style={{ color: "rgba(255,255,255,0.25)", cursor: "not-allowed" }}
      >
        {link.label}
      </span>
    );

  return (
    <footer
      className="py-12 px-6"
      style={{ backgroundColor: "#0a0a0a", color: "rgba(255,255,255,0.7)" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Social links */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#FF2D78" }}>
            Social
          </p>
          <div className="flex flex-wrap gap-3">{socialLinks.map(renderLink)}</div>
        </div>

        {/* Support links */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#FF2D78" }}>
            Support
          </p>
          <div className="flex flex-wrap gap-3">{supportLinks.map(renderLink)}</div>
        </div>

        {/* Project links */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#FF2D78" }}>
            Projects & Links
          </p>
          <div className="flex flex-wrap gap-3">{projectLinks.map(renderLink)}</div>
        </div>

        {/* Support Tipeee */}
        <div className="border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <a
            href="https://www.tipeee.com/kalimero"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-all hover:opacity-80"
            style={{
              backgroundColor: "#FF2D78",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
            }}
          >
            tip! Soutenez KaliMero sur Tipeee
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
          © Kalimero Von Bülow — All rights reserved
        </div>
      </div>
    </footer>
  );
}
