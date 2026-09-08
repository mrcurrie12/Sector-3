import Gallery from "@/components/Gallery";
import { photos } from "@/data/photos";

export default function HomePage() {
  return <Gallery photos={photos} />;
}
