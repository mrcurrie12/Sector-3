import Image from "next/image";
import { MapPin } from "lucide-react";

export default function PhotoFrame({ photo, tall = false, priority = false }) {
  // Real photos keep their own aspect ratio so nothing gets cropped;
  // only placeholders (no file yet) fall back to a guessed box shape.
  const ratio = photo.width && photo.height ? photo.width / photo.height : tall ? 3 / 4 : 4 / 3;

  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: ratio }}>
      {photo.src ? (
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0" style={{ background: photo.hue }} />
      )}

      <div className="absolute inset-0 flex items-end p-5 bg-gradient-to-t from-black/25 via-transparent to-transparent">
        <div>
          <div className="font-display text-sm text-white drop-shadow">{photo.title}</div>
          <div className="flex items-center gap-1 mt-1 text-xs text-white/80">
            <MapPin size={11} />
            {photo.location}
          </div>
        </div>
      </div>
    </div>
  );
}
