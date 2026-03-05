/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "Inter", "sans-serif"]
      },
      colors: {
        brand: {
          DEFAULT: "#0F172A",
          light: "#1E293B",
          accent: "#38BDF8"
        }
      },
      boxShadow: {
        soft: "0 24px 60px rgba(15, 23, 42, 0.35)"
      }
    }
  },
  plugins: []
};

