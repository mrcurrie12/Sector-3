import Image from "next/image";

// Full-bleed hero photo, ~90% of viewport tall, no text overlay.
// Leave `src` as null until a real image is added — a plain placeholder
// block renders in the meantime so nothing breaks.

export default function Hero({ src, alt }) {
  return (
    <div className="relative w-full" style={{ height: "90vh" }}>
      {src ? (
        <Image
          src={src}
          alt={alt || "Sector 3"}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 bg-border" />
      )}
    </div>
  );
}
