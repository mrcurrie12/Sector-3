import { Fraunces, Oswald, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-oswald",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata = {
  title: "Sector 3",
  description: "Photography by Mark Currie — bikes, cars, and the roads between them.",
  metadataBase: new URL("https://sector3.cc"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${oswald.variable} ${plex.variable}`}>
      <body className="font-sans bg-bg text-ink min-h-screen">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
