"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Full-bleed hero photo (or rotating slider of several), ~85% of viewport
// tall, no text overlay. Pass a single `src`, or `images` as an array of
// { src, alt } to crossfade through them automatically. Leave both unset
// until a real image is added — a plain placeholder block renders in the
// meantime so nothing breaks.

const ROTATE_MS = 5000;

export default function Hero({ src, alt, images }) {
  const slides = images && images.length > 0 ? images : src ? [{ src, alt }] : [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="relative w-full" style={{ height: "85vh" }}>
      {slides.length > 0 ? (
        slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt || "Sector 3"}
            fill
            priority={i === 0}
            className="object-cover transition-opacity duration-1000"
            style={{ opacity: i === index ? 1 : 0 }}
            sizes="100vw"
          />
        ))
      ) : (
        <div className="absolute inset-0 bg-border" />
      )}
    </div>
  );
}
