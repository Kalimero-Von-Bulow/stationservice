/*
 * DESIGN: Underground Punk Zine
 * Footer avec liens sociaux, projets et crédits
 */

export default function Footer() {
  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/kalimero_666/" },
    { label: "Facebook", href: "https://www.facebook.com/kalimero666" },
    { label: "Youtube", href: "https://www.youtube.com/@kalimero666" },
    { label: "Pixelfed", href: "#" },
    { label: "Peertube", href: "#" },
    { label: "Mastodon", href: "#" },
    { label: "...and more →", href: "#" },
  ];

  const supportLinks = [
    { label: "Book-O-Matics", href: "https://bookomatic.hstn.me/" },
    { label: "Ko-Fi", href: "https://ko-fi.com/kalimero666" },
    { label: "Opensea", href: "#" },
    { label: "Patreon", href: "#" },
    { label: "Tipeee", href: "https://www.tipeee.com/kalimero" },
    { label: "Goodies", href: "#" },
    { label: "...and more →", href: "#" },
  ];

  const projectLinks = [
    { label: "Rock, Ghost, Rock !", href: "https://rockghostsrock.digital/" },
    { label: "PRNGRFX", href: "https://xxx19.digitalpress.blog/" },
    { label: "Kalimero's official website", href: "https://kalimero.rocks/" },
    { label: "Instagram", href: "https://www.instagram.com/kalimero_666/" },
    { label: "Github", href: "https://github.com/kalimero666" },
  ];

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
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
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
            ))}
          </div>
        </div>

        {/* Support links */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#FF2D78" }}>
            Support
          </p>
          <div className="flex flex-wrap gap-3">
            {supportLinks.map((link) => (
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
            ))}
          </div>
        </div>

        {/* Project links */}
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#FF2D78" }}>
            Projects & Links
          </p>
          <div className="flex flex-wrap gap-3">
            {projectLinks.map((link) => (
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
            ))}
          </div>
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
