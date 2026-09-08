"use client";

import { useMemo, useState } from "react";
import PhotoFrame from "./PhotoFrame";
import Lightbox from "./Lightbox";
import { themes } from "@/data/photos";

export default function Gallery({ photos }) {
  const [activeTheme, setActiveTheme] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () => (activeTheme === "All" ? photos : photos.filter((p) => p.theme === activeTheme)),
    [photos, activeTheme]
  );

  const openLightbox = (id) => setLightboxIndex(filtered.findIndex((p) => p.id === id));
  const closeLightbox = () => setLightboxIndex(null);
  const step = (dir) =>
    setLightboxIndex((i) => (i + dir + filtered.length) % filtered.length);

  const activePhoto = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      {/* Theme filter */}
      <div className="sticky top-0 z-10 flex gap-8 px-6 md:px-14 py-4 bg-bg/90 backdrop-blur border-b border-border">
        {themes.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTheme(t)}
            className={`text-sm pb-1 border-b transition-colors ${
              activeTheme === t
                ? "text-green border-green"
                : "text-muted border-transparent"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Grid */}
      <main className="px-6 md:px-14 py-14">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-6">
          {filtered.map((photo, i) => {
            const span =
              i % 5 === 0 || i % 5 === 3 ? "md:col-span-3" : "md:col-span-2";
            return (
              <button
                key={photo.id}
                onClick={() => openLightbox(photo.id)}
                className={`col-span-2 ${span} text-left`}
              >
                <PhotoFrame photo={photo} tall={i % 3 === 1} />
              </button>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-sm mt-8 text-muted">No photos in this category yet.</p>
        )}
      </main>

      <Lightbox photo={activePhoto} onClose={closeLightbox} onStep={step} />
    </>
  );
}
