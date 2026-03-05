/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"]
      },
      colors: {
        brand: {
          DEFAULT: "#0B2447", // deep corporate blue
          light: "#19376D",
          accent: "#F4B41A" // warm gold accent inspired by PremPlus
        }
      },
      boxShadow: {
        soft: "0 24px 60px rgba(15, 23, 42, 0.35)"
      }
    }
  },
  plugins: []
};

