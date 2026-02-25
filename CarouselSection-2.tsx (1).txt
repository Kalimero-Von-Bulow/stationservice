import { useEffect, useState, useRef } from "react";

interface Post {
  id: number;
  image: string;
  caption: string;
  date: string;
}

interface CarouselSectionProps {
  posts: Post[];
}

const INTERVAL = 4000;

export default function CarouselSection({ posts }: CarouselSectionProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [fade, setFade] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 300);
  };

  const next = () => goTo((current + 1) % posts.length);
  const prev = () => goTo((current - 1 + posts.length) % posts.length);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused]);

  // Clavier
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  const post = posts[current];

  return (
    <div
      role="region"
      aria-label="Galerie d'œuvres"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ position: "relative", width: "100%", userSelect: "none" }}
    >
      {/* Image principale */}
      <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", backgroundColor: "#000" }}>
        <img
          src={post.image}
          alt={post.caption}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: fade ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />

        {/* Boutons discrets */}
        {[{ fn: prev, side: "left", label: "←" }, { fn: next, side: "right", label: "→" }].map(({ fn, side, label }) => (
          <button
            key={side}
            onClick={fn}
            aria-label={label}
            style={{
              position: "absolute",
              top: "50%",
              [side]: "0.75rem",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.35)",
              border: "none",
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.1rem",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Dots */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "6px",
        padding: "0.75rem 0",
      }}>
        {posts.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Image ${i + 1}`}
            style={{
              width: i === current ? "20px" : "6px",
              height: "6px",
              borderRadius: "3px",
              border: "none",
              backgroundColor: i === current ? "#FF2D78" : "rgba(255,255,255,0.25)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
