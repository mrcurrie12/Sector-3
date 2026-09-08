"use client";

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import PhotoFrame from "./PhotoFrame";

export default function Lightbox({ photo, onClose, onStep }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onStep(-1);
      if (e.key === "ArrowRight") onStep(1);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onStep]);

  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-green/95"
      onClick={onClose}
    >
      <button className="absolute top-5 right-5 p-2 text-bg" onClick={onClose} aria-label="Close">
        <X size={22} />
      </button>
      <button
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-bg"
        onClick={(e) => { e.stopPropagation(); onStep(-1); }}
        aria-label="Previous photo"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-bg"
        onClick={(e) => { e.stopPropagation(); onStep(1); }}
        aria-label="Next photo"
      >
        <ChevronRight size={28} />
      </button>

      <div className="flex-1 flex items-center justify-center p-6" onClick={(e) => e.stopPropagation()}>
        <div className="w-full max-w-3xl">
          <PhotoFrame photo={photo} priority />
          <div className="mt-4">
            <div className="font-display text-xl text-bg">{photo.title}</div>
            <div className="flex items-center gap-1 mt-1 text-sm text-bg/70">
              <MapPin size={12} />
              {photo.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
