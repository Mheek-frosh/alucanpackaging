/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        display: ["'Inter'", "system-ui", "sans-serif"]
      },
      colors: {
        brand: {
          DEFAULT: "#0a2540",
          dark: "#071a2d",
          mid: "#134074",
          accent: "#e8931a",        // Alucan gold/amber
          accent2: "#1a6ce8",        // Secondary blue
          steel: "#8faec7",
        },
        surface: {
          50: "#ffffff",
          100: "#f7f9fb",
          200: "#eef2f7",
          300: "#d4dde8",
        },
        dark: {
          bg: "#0d1117",
          card: "#161b22",
          border: "#30363d",
          text: "#e6edf3",
          muted: "#8b949e",
        }
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0,0,0,0.07)",
        glass: "0 8px 40px rgba(0,0,0,0.18)",
        glow: "0 0 40px rgba(232,147,26,0.25)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, rgba(10,37,64,0.85) 0%, rgba(19,64,116,0.60) 100%)",
        "dark-gradient": "linear-gradient(135deg, #0d1117 0%, #161b22 100%)",
      },
      animation: {
        "slide-in": "slideIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "ken-burns": "kenBurns 8s ease-in-out infinite alternate",
      },
      keyframes: {
        slideIn: { from: { opacity: 0, transform: "translateY(20px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        fadeUp: { from: { opacity: 0, transform: "translateY(30px)" }, to: { opacity: 1, transform: "translateY(0)" } },
        kenBurns: { from: { transform: "scale(1)" }, to: { transform: "scale(1.08)" } },
      }
    }
  },
  plugins: []
};


