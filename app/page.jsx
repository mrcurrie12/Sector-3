import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import { photos } from "@/data/photos";

// Add more images here (in public/images) and the hero will crossfade
// through all of them automatically.
const HERO_IMAGES = [{ src: "/images/hero.jpg", alt: "Sector 3" }];

export default function HomePage() {
  return (
    <>
      <Hero images={HERO_IMAGES} />
      <Gallery photos={photos} />
    </>
  );
}
