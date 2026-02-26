interface FooterLink {
  label: string;
  href: string | null;
}

const socialLinks: FooterLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/kalimero_____666/" },
  { label: "Facebook", href: "https://facebook.com/kalimero.officiel/" },
  { label: "Youtube", href: "https://youtube.com/@kalimero_666" },
  { label: "Mastodon", href: "https://graphics.social/@kalimero" },
  { label: "Pixelfed", href: "https://pixelfed.fr/kalimero_666" },
  { label: "Peertube", href: "https://peertube.linuxrocks.online/a/kalimero666/video-channels" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kalimero666" },
  { label: "...and more →", href: null },
];

const supportLinks: FooterLink[] = [
  { label: "Shop", href: "https://ko-fi.com/kalimero_666/shop" },
  { label: "Ko-Fi", href: "https://ko-fi.com/kalimero666" },
  { label: "Tipeee", href: "https://www.tipeee.com/kalimero" },
  { label: "Goodies", href: "https://kalimero.myspreadshop.fr/" },
  { label: "Opensea", href: null },
  { label: "...and more →", href: null },
];

const projectLinks: FooterLink[] = [
  { label: "Rock, Ghost, Rock !", href: "https://rockghostsrock.digitalpress.blog/" },
  { label: "PRNGRFX", href: "https://xxx19.digitalpress.blog/" },
  { label: "kalimero.ink", href: "https://kalimero.ink/" },
  { label: "Github", href: "https://github.com/kalimero666" },
];

function renderLink(link: FooterLink) {
  const base = {
    display: "inline-block",
    marginRight: "1rem",
    marginBottom: "0.6rem",
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "0.9rem",
    textDecoration: "none",
  };
  return link.href ? (
    <a
      key={link.label}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ ...base, color: "rgba(255,255,255,0.65)" }}
    >
      {link.label}
    </a>
  ) : (
    <span
      key={link.label}
      title="Bientôt disponible"
      style={{ ...base, color: "rgba(255,255,255,0.22)", cursor: "not-allowed" }}
    >
      {link.label}
    </span>
  );
}

const sectionTitle = {
  color: "#FF2D78",
  fontSize: "0.7rem",
  fontFamily: "'Space Grotesk', sans-serif",
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  marginBottom: "0.75rem",
  fontWeight: 600,
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0a0a0a", padding: "3rem 1.5rem 2rem" }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>

        <div style={{ marginBottom: "2rem" }}>
          <p style={sectionTitle}>Social</p>
          <div>{socialLinks.map(renderLink)}</div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <p style={sectionTitle}>Support</p>
          <div>{supportLinks.map(renderLink)}</div>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <p style={sectionTitle}>Projects & Links</p>
          <div>{projectLinks.map(renderLink)}</div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", marginBottom: "1.5rem" }}>
          <a
            href="https://www.tipeee.com/kalimero"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#FF2D78",
              color: "white",
              textDecoration: "none",
              padding: "0.5rem 1.2rem",
              borderRadius: "4px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 600,
            }}
          >
            tip! Soutenez KaliMero sur Tipeee
          </a>
        </div>

        <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", fontFamily: "'Space Grotesk', sans-serif" }}>
          © Kalimero Von Bülow — All rights reserved
        </div>

      </div>
    </footer>
  );
}
