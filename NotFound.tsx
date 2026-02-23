import { Link } from "wouter";

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: "#0a0a0a",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Space Grotesk', sans-serif",
        gap: "1.5rem",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: 700,
          color: "#FF2D78",
          lineHeight: 1,
          fontFamily: "'Space Mono', monospace",
        }}
      >
        404
      </h1>
      <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.6)" }}>
        Cette page n'existe pas.
      </p>
      <Link
        href="/"
        style={{
          padding: "0.6rem 1.5rem",
          border: "2px solid #FF2D78",
          backgroundColor: "transparent",
          color: "#FF2D78",
          textDecoration: "none",
          fontWeight: 600,
          fontFamily: "'Space Grotesk', sans-serif",
          transition: "all 0.15s ease",
        }}
      >
        ← Retour
      </Link>
    </div>
  );
}
