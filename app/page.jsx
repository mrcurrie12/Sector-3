import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import { photos } from "@/data/photos";

// Set this to your hero image once it's in public/images, e.g. "/images/hero.jpg"
const HERO_IMAGE = "/images/hero.jpg";

export default function HomePage() {
  return (
    <>
      <Hero src={HERO_IMAGE} alt="Sector 3" />
      <Gallery photos={photos} />
    </>
  );
}
