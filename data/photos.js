// Each photo is a structured record, not a hardcoded <img> tag.
//
// `src`   — path under /public once you've added the real file
//           (e.g. "/images/shop-bike.jpg"). Leave null and a placeholder
//           color block renders instead, so you can wire up the site
//           before every photo is ready.
// `width` / `height` — the real file's pixel dimensions, used to size its
//           grid tile at the photo's own aspect ratio instead of cropping
//           it into a fixed box. Only needed once `src` is set.
// `hue`   — background color used only for the placeholder block.
// `forSale` / `sizes` — unused right now, kept in the shape so a print
//           store can be added later without touching every component.

export const photos = [
  { id: "c1", theme: "Cars", title: "Slate and Chrome", location: "Cars & Coffee, Boulder, CO", src: "/images/car-porsche-slate.jpg", width: 1500, height: 2000, hue: "#D8C7AC", forSale: false, sizes: [] },
  { id: "c2", theme: "Cars", title: "Cobalt Line", location: "Cars & Coffee, Boulder, CO", src: "/images/car-porsche-cobalt.jpg", width: 1500, height: 2000, hue: "#BFC7C2", forSale: false, sizes: [] },
  { id: "c3", theme: "Cars", title: "Red Line", location: "Cars & Coffee, Boulder, CO", src: "/images/car-porsche-red.jpg", width: 1500, height: 2000, hue: "#D3C7AE", forSale: false, sizes: [] },
  { id: "c4", theme: "Cars", title: "Yellow Horse", location: "Cars & Coffee, Boulder, CO", src: "/images/car-ferrari-yellow.jpg", width: 1500, height: 2000, hue: "#E8D24A", forSale: false, sizes: [] },
  { id: "c5", theme: "Cars", title: "Cavallino Red", location: "Cars & Coffee, Boulder, CO", src: "/images/car-ferrari-red.jpg", width: 1500, height: 2000, hue: "#C23B3B", forSale: false, sizes: [] },
  { id: "c6", theme: "Cars", title: "White Horse", location: "Cars & Coffee, Boulder, CO", src: "/images/car-ferrari-white.jpg", width: 1500, height: 2000, hue: "#E5E5E0", forSale: false, sizes: [] },
  { id: "c7", theme: "Cars", title: "Ice Blue", location: "Cars & Coffee, Boulder, CO", src: "/images/car-ferrari-ice.jpg", width: 1500, height: 2000, hue: "#C7D6DE", forSale: false, sizes: [] },
  { id: "b1", theme: "Bikes", title: "Shop Bike", location: "Boulder, CO", src: null, hue: "#C9C2CB", forSale: false, sizes: [] },
  { id: "b2", theme: "Bikes", title: "Kickstand Down", location: "Jackson, WY", src: null, hue: "#C6CDC9", forSale: false, sizes: [] },
  { id: "b3", theme: "Bikes", title: "Track Prep", location: "Boulder, CO", src: null, hue: "#CBCAC0", forSale: false, sizes: [] },
  { id: "l1", theme: "Landscape", title: "Divide Road", location: "Indian Peaks Wilderness, CO", src: null, hue: "#C7CFC0", forSale: false, sizes: [] },
  { id: "l2", theme: "Landscape", title: "Switchback", location: "Collegiate Peaks, CO", src: null, hue: "#D6D2C4", forSale: false, sizes: [] },
  { id: "l3", theme: "Landscape", title: "High Pass", location: "Maroon Bells, CO", src: null, hue: "#C4CDC6", forSale: false, sizes: [] },
  { id: "l4", theme: "Landscape", title: "Storm, Divide", location: "Rocky Mountain NP, CO", src: null, hue: "#D2C9B4", forSale: false, sizes: [] },
];

export const themes = ["All", "Bikes", "Cars", "Landscape"];
