/*
 * DESIGN: Underground Punk Zine
 * Carousel component for Picaboo social feed section
 * - Toujours en mode sombre
 * - Navigation clavier (flèches gauche/droite)
 */

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  image: string;
  caption: string;
  date: string;
}

interface CarouselSectionProps {
  posts: Post[];
}

export default function CarouselSection({ posts }: CarouselSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? posts.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
  };

  // Navigation clavier
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const currentPost = posts[currentIndex];

  return (
    <div
      role="region"
      aria-label="Galerie d'œuvres"
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.05)",
      }}
    >
      {/* Main carousel image */}
      <div
        style={{
          position: "relative",
          aspectRatio: "16 / 9",
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        <img
          src={currentPost.image}
          alt={currentPost.caption}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.5s ease",
          }}
        />

        {/* Overlay with caption */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
            padding: "2rem 1.5rem 1.5rem",
            color: "white",
          }}
        >
          <p style={{ fontWeight: 600, fontSize: "1rem", marginBottom: "0.5rem" }}>
            {currentPost.caption}
          </p>
          <p style={{ opacity: 0.7, fontSize: "0.875rem" }}>{currentPost.date}</p>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          aria-label="Image précédente"
          style={{
            position: "absolute",
            left: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255, 20, 147, 0.7)",
            border: "none",
            borderRadius: "50%",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255, 20, 147, 1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255, 20, 147, 0.7)";
          }}
        >
          <ChevronLeft size={24} color="white" />
        </button>

        <button
          onClick={goToNext}
          aria-label="Image suivante"
          style={{
            position: "absolute",
            right: "1rem",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(255, 20, 147, 0.7)",
            border: "none",
            borderRadius: "50%",
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255, 20, 147, 1)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255, 20, 147, 0.7)";
          }}
        >
          <ChevronRight size={24} color="white" />
        </button>
      </div>

      {/* Thumbnail strip */}
      <div
        style={{
          display: "flex",
          gap: "2px",
          padding: "0.75rem",
          backgroundColor: "rgba(255,255,255,0.02)",
          overflowX: "auto",
        }}
      >
        {posts.map((post, index) => (
          <button
            key={post.id}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Voir : ${post.caption}`}
            aria-current={index === currentIndex ? "true" : undefined}
            style={{
              flexShrink: 0,
              width: "60px",
              height: "60px",
              border: index === currentIndex ? "2px solid #FF2D78" : "1px solid rgba(255,255,255,0.2)",
              borderRadius: "4px",
              padding: "0",
              cursor: "pointer",
              overflow: "hidden",
              transition: "border-color 0.3s ease",
              opacity: index === currentIndex ? 1 : 0.6,
            }}
            onMouseEnter={(e) => {
              if (index !== currentIndex)
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.8";
            }}
            onMouseLeave={(e) => {
              if (index !== currentIndex)
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.6";
            }}
          >
            <img
              src={post.image}
              alt={post.caption}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </button>
        ))}
      </div>

      {/* Indicator dots */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.5rem",
          padding: "0.75rem",
          backgroundColor: "rgba(255,255,255,0.05)",
        }}
      >
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Aller à l'image ${index + 1}`}
            style={{
              width: index === currentIndex ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              border: "none",
              backgroundColor: index === currentIndex ? "#FF2D78" : "rgba(255,255,255,0.3)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
