/*
 * DESIGN: Underground Punk Zine
 * Page principale du site Station-Service de Kalimero Von Bülow
 * Sections: Hero (starfield + personnage), Hi There!, Picaboo, Social Feed, Quote, From Hell With Love, Ecce Kalimero, Showcase
 * Couleurs: fond noir/blanc, rose fluo (#FF2D78), vert (#1a7a5a)
 * Typographie: Space Grotesk + Space Mono
 */

import CarouselSection from "@/components/CarouselSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StarfieldCanvas from "@/components/StarfieldCanvas";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useRef, useState } from "react";

// Image URLs from generated assets (CDN permanent URLs)
const HERO_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663373356866/BpApixyoKaqkDjBY.avif";

const SKULL_IMAGE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663373356866/SQvobNtwDQtMltRB.png";

// Showcase projects
const showcaseProjects = [
  {
    title: "kalimero.rocks",
    url: "https://kalimero.rocks/",
    description: "Official website",
    bg: "#0a0a0a",
    textColor: "white",
  },
  {
    title: "Ecce Kalimero",
    url: "https://kalimero.rocks/",
    description: "Ghost blog",
    bg: "#00BFFF",
    textColor: "black",
  },
  {
    title: "Book-O-Matics",
    url: "https://bookomatic.hstn.me/",
    description: "Comics & Books",
    bg: "#f5f5f5",
    textColor: "black",
  },
  {
    title: "PRNGRFX",
    url: "https://xxx19.digitalpress.blog/",
    description: "Graphical Erotica / Pornographic Studies",
    bg: "#1a1a1a",
    textColor: "white",
  },
  {
    title: "Kalimero Von Bülow",
    url: "https://kalimero.rocks/",
    description: "Portfolio & biography",
    bg: "#f0ede8",
    textColor: "black",
  },
  {
    title: "Picaboo",
    url: "https://picaboo.netlify.app/",
    description: "Art shop",
    bg: "#fff0f5",
    textColor: "black",
  },
  {
    title: "Nest In Pace",
    url: "https://nest-in-pace.netlify.app/",
    description: "Comics project",
    bg: "#f5f5f5",
    textColor: "black",
  },
];

// Social feed mock posts (artwork images from Unsplash - art/drawing themed)
const socialPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=400&q=80",
    caption: "Au Bistrot - Olivier Quéméré",
    date: "May 25, 2025",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=400&q=80",
    caption: "Fleur de Peau",
    date: "Sep 8, 2023",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
    caption: "Self portrait",
    date: "Jul 20, 2023",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&q=80",
    caption: "Rock, Ghost, Rock !",
    date: "Dec 20, 2023",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&q=80",
    caption: "Chronic",
    date: "Jan 4, 2024",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
    caption: "Rayon X",
    date: "Sep 12, 2023",
  },
];

// Intersection observer hook for fade-in animations
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const hiThereRef = useInView(0.2);
  const picabooRef = useInView(0.2);
  const fromHellRef = useInView(0.2);
  const ecceRef = useInView(0.2);
  const showcaseRef = useInView(0.1);

  const textColor = isDark ? "rgba(255,255,255,0.9)" : "#1a1a1a";
  const bgColor = isDark ? "#0a0a0a" : "#ffffff";
  const sectionBg = isDark ? "#111111" : "#f9f9f9";

  return (
    <div style={{ backgroundColor: bgColor, color: textColor, fontFamily: "'Space Grotesk', sans-serif" }}>
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          backgroundColor: "#0a0a0a",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <StarfieldCanvas />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <img
            src={HERO_IMAGE}
            alt="Kalimero Von Bülow"
            style={{
              height: "70vh",
              maxWidth: "70vw",
              objectFit: "contain",
              objectPosition: "bottom center",
              animation: "float 10s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ===== HI THERE! SECTION ===== */}
      <section
        ref={hiThereRef.ref}
        style={{
          backgroundColor: bgColor,
          padding: "5rem 1.5rem",
          textAlign: "center",
          opacity: hiThereRef.inView ? 1 : 0,
          transform: hiThereRef.inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          {/* Logo */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              backgroundColor: "#1a7a5a",
              margin: "0 auto 2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <svg viewBox="0 0 100 100" width="60" height="60" fill="white">
              <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="3" />
              <ellipse cx="50" cy="55" rx="22" ry="16" fill="white" />
              <ellipse cx="50" cy="55" rx="14" ry="10" fill="#1a7a5a" />
              <path d="M28 45 Q20 35 15 40 Q18 48 28 50" fill="white" />
              <path d="M72 45 Q80 35 85 40 Q82 48 72 50" fill="white" />
              <circle cx="42" cy="50" r="4" fill="white" />
              <circle cx="58" cy="50" r="4" fill="white" />
              <circle cx="42" cy="50" r="2" fill="#1a7a5a" />
              <circle cx="58" cy="50" r="2" fill="#1a7a5a" />
              <line x1="30" y1="58" x2="18" y2="65" stroke="white" strokeWidth="3" strokeLinecap="round" />
              <line x1="35" y1="62" x2="22" y2="72" stroke="white" strokeWidth="3" strokeLinecap="round" />
              <line x1="70" y1="58" x2="82" y2="65" stroke="white" strokeWidth="3" strokeLinecap="round" />
              <line x1="65" y1="62" x2="78" y2="72" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>

          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#FF2D78",
              marginBottom: "1.5rem",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Hi There !
          </h2>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.7,
              color: textColor,
              marginBottom: "2.5rem",
            }}
          >
            Once upon a time my name was{" "}
            <span style={{ color: "#FF2D78", fontWeight: 600 }}>Quéméré</span>, and I used to be a
            post-modern, <span style={{ color: "#FF2D78", fontWeight: 600 }}>wild at Art</span>,{" "}
            <span style={{ color: "#FF2D78", fontWeight: 600 }}>undergrrround</span> comiXmaker.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://yamwhatyam.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-punk"
              style={{
                color: textColor,
                borderColor: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              ⚓ Yam What Yam
            </a>
            <a
              href="https://nest-in-pace.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-punk"
              style={{
                color: textColor,
                borderColor: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.3)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              ✝ Nest In Pace, Quéméré
            </a>
          </div>
        </div>
      </section>

      {/* ===== PICABOO SECTION ===== */}
      <section
        ref={picabooRef.ref}
        style={{
          backgroundColor: sectionBg,
          padding: "5rem 1.5rem",
          textAlign: "center",
          opacity: picabooRef.inView ? 1 : 0,
          transform: picabooRef.inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#FF2D78",
              marginBottom: "1.5rem",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Picaboo
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: textColor,
              marginBottom: "3rem",
            }}
          >
            <span style={{ color: "#FF2D78", fontWeight: 600 }}>Since</span> I got my degree at the
            famous <span style={{ color: "#FF2D78", fontWeight: 600 }}>ERG</span>, Ecole de Recherche
            Graphique in <span style={{ color: "#FF2D78", fontWeight: 600 }}>Brüsel</span>, also had
            to deal with <span style={{ color: "#FF2D78", fontWeight: 600 }}>ADHD</span>, I spent my
            life <span style={{ color: "#FF2D78", fontWeight: 600 }}>trying</span> things.
          </p>

          {/* Social Feed Grid */}
          <div
            style={{
              border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
              borderRadius: "4px",
              overflow: "hidden",
              marginBottom: "1rem",
            }}
          >
            {/* Feed header */}
            <div
              style={{
                padding: "0.75rem 1rem",
                borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                textAlign: "left",
                fontSize: "0.8rem",
                color: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ color: "#FF2D78" }}>◈</span> Free Social Feed Widget
            </div>

            {/* Carousel */}
            <CarouselSection posts={socialPosts} isDark={isDark} />
          </div>
        </div>
      </section>

      {/* ===== QUOTE SECTION ===== */}
      <section
        style={{
          backgroundColor: bgColor,
          padding: "4rem 1.5rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <blockquote
            style={{
              fontSize: "1.1rem",
              fontStyle: "italic",
              color: isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.55)",
              lineHeight: 1.7,
              borderLeft: "none",
              padding: 0,
            }}
          >
            "Everything I learned in my life, I've learned it because I decided to try something new"
          </blockquote>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.9rem",
              color: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
            }}
          >
            (David Lynch)
          </p>
        </div>
      </section>

      {/* ===== FROM HELL, WITH LOVE SECTION ===== */}
      <section
        ref={fromHellRef.ref}
        style={{
          backgroundColor: sectionBg,
          padding: "5rem 1.5rem",
          textAlign: "center",
          opacity: fromHellRef.inView ? 1 : 0,
          transform: fromHellRef.inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#FF2D78",
              marginBottom: "1.5rem",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            From Hell, With Love
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: textColor,
              marginBottom: "3rem",
            }}
          >
            With that{" "}
            <span style={{ color: "#FF2D78", fontWeight: 600 }}>behaviour</span> I've spent a few{" "}
            <span style={{ color: "#FF2D78", fontWeight: 600 }}>Seasons</span> in Hell, stepped{" "}
            <span style={{ color: "#FF2D78", fontWeight: 600 }}>across</span> the border, came back
            on Earth @ summer 21 as a{" "}
            <span style={{ color: "#FF2D78", fontWeight: 600 }}>born-dead</span> tweety.
          </p>

          {/* Skull artwork - Punk skull icon */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663373356866/CMEWaetlJgNQwlju.jpg"
              alt="Skull icon - Kalimero"
              style={{
                maxWidth: "280px",
                width: "100%",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </section>

      {/* ===== ECCE KALIMERO SECTION ===== */}
      <section
        ref={ecceRef.ref}
        style={{
          backgroundColor: "#0a0a0a",
          padding: "5rem 1.5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          opacity: ecceRef.inView ? 1 : 0,
          transform: ecceRef.inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <StarfieldCanvas />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#FF2D78",
              marginBottom: "1.5rem",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Ecce Kalimero
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.85)",
              marginBottom: "1rem",
            }}
          >
            My nickname is{" "}
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "#FF2D78",
                fontWeight: 700,
              }}
            >
              @kalimero_666
            </span>{" "}
            I am{" "}
            <span style={{ color: "#FF2D78", fontWeight: 700 }}>Kalimero Von Bülow</span>
          </p>

          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "2.5rem",
            }}
          >
            Check out my{" "}
            <a
              href="https://kalimero.rocks/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#FF2D78", textDecoration: "none", fontWeight: 600 }}
            >
              Ghost blog
            </a>
            ! and visit my{" "}
            <a
              href="https://xxx19.digitalpress.blog/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#FF2D78", textDecoration: "none", fontWeight: 600 }}
            >
              Porn-O-One
            </a>{" "}
            :
          </p>

          {/* Project rectangles */}
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}>
            <a
              href="https://kalimero.rocks/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "280px",
                height: "120px",
                backgroundColor: "rgba(255, 45, 120, 0.15)",
                border: "2px solid #FF2D78",
                borderRadius: "4px",
                color: "#FF2D78",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255, 45, 120, 0.25)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255, 45, 120, 0.15)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
              }}
            >
              Rock, Ghost, Rock !
            </a>
            <a
              href="https://xxx19.digitalpress.blog/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "280px",
                height: "120px",
                backgroundColor: "rgba(255, 45, 120, 0.15)",
                border: "2px solid #FF2D78",
                borderRadius: "4px",
                color: "#FF2D78",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 600,
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255, 45, 120, 0.25)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255, 45, 120, 0.15)";
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
              }}
            >
              PRNGRFX
            </a>
          </div>
        </div>
      </section>

      {/* ===== SHOWCASE SECTION ===== */}
      <section
        ref={showcaseRef.ref}
        style={{
          backgroundColor: bgColor,
          padding: "5rem 1.5rem",
          opacity: showcaseRef.inView ? 1 : 0,
          transform: showcaseRef.inView ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: "#FF2D78",
              marginBottom: "1.5rem",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Showcase
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: textColor,
              marginBottom: "2.5rem",
            }}
          >
            Kalimero is{" "}
            <span style={{ color: "#FF2D78", fontWeight: 600 }}>versatile</span>... So be my guesss,
            feel <span style={{ color: "#FF2D78", fontWeight: 600 }}>free</span>, exxxplore my{" "}
            <span style={{ color: "#FF2D78", fontWeight: 600 }}>Whiteborrred Jungle</span> which is a
            work <span style={{ color: "#FF2D78", fontWeight: 600 }}>in progress</span> !
          </p>

          {/* Projects grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "12px",
            }}
          >
            {showcaseProjects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="showcase-item"
                style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                backgroundColor: project.bg,
                color: project.textColor,
                textDecoration: "none",
                borderRadius: "4px",
                overflow: "hidden",
                aspectRatio: "16/9",
                position: "relative",
                padding: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontSize: "0.75rem",
                    opacity: 0.6,
                    marginBottom: "0.3rem",
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  {project.description}
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {project.title}
                </p>
              </a>
            ))}
          </div>

          {/* Ko-Fi button */}
          <div style={{ marginTop: "3rem" }}>
            <a
              href="https://ko-fi.com/kalimero666"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.6rem 1.4rem",
                backgroundColor: "#FF5E5B",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
                borderRadius: "4px",
                transition: "opacity 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              }}
            >
              ☕ Buy me a coffee
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <Footer />
    </div>
  );
}
