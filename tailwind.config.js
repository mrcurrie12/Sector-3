/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sector 3 brand palette — light base, dark green + bronze accents.
        bg: "#F6F5F0",
        border: "#E1DFD5",
        ink: "#1E2320",
        muted: "#767A70",
        green: "#2C3B2E",
        bronze: "#93703F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        wordmark: ["var(--font-oswald)", "sans-serif"],
        sans: ["var(--font-plex)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
