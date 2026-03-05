/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Inter", "system-ui", "sans-serif"],
        display: ["SF Pro Display", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          DEFAULT: "#000000",
          light: "#333333",
          accent: "#0066CC", // Apple blue
        },
        surface: {
          50: "#ffffff",
          100: "#fbfbfd", // Apple background gray
          200: "#f5f5f7",
          300: "#e5e5ea",
        }
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0, 0, 0, 0.04)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.08)",
      },
      letterSpacing: {
        tightest: '-.04em',
      }
    }
  },
  plugins: []
};

