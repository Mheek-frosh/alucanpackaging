import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#footprint", label: "Footprint" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/80 shadow-[0_18px_60px_rgba(15,23,42,0.25)] backdrop-blur-2xl dark:border-slate-800/60 dark:bg-slate-900/40 dark:shadow-[0_18px_60px_rgba(15,23,42,0.75)]"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent to-amber-400 shadow-soft">
            <span className="text-lg font-semibold tracking-tight text-slate-950">
              A
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.18em] text-slate-600 dark:text-slate-300">
              ALUCAN
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Metals Packaging
            </span>
          </div>
        </div>
        <div className="hidden items-center gap-8 text-xs font-medium text-slate-600 dark:text-slate-300 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative uppercase tracking-[0.18em] text-slate-600 transition hover:text-brand-accent dark:text-slate-300 dark:hover:text-sky-200"
            >
              {link.label}
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-gradient-to-r from-brand-accent to-amber-400 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200/70 bg-white/70 text-[11px] text-slate-700 shadow-sm transition hover:border-brand-accent hover:text-brand-accent dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☾" : "☼"}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-brand-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-soft transition hover:bg-amber-400 md:inline-flex"
          >
            Talk to us
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

