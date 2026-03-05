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
          DEFAULT: "#0B2447",
          light: "#19376D",
          accent: "#F97316"
        }
      },
      boxShadow: {
        soft: "0 24px 60px rgba(15, 23, 42, 0.35)"
      }
    }
  },
  plugins: []
};

