import { useState, useEffect, useRef } from "react";
import { useTheme } from "../App";

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);
const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const megaMenus: Record<string, { label: string; desc: string; href: string }[]> = {
  "Products": [
    { label: "Beverage Cans", desc: "Aluminium & tinplate beverage packaging", href: "#capabilities" },
    { label: "Aerosol Cans", desc: "Monobloc aluminium aerosol solutions", href: "#capabilities" },
    { label: "Tinplate Cans", desc: "Two-piece steel & tinplate can ranges", href: "#capabilities" },
    { label: "CanStudio™", desc: "Early-stage format exploration & concepting", href: "#capabilities" },
  ],
  "Company": [
    { label: "About Alucan", desc: "Our story, mission & values", href: "#about" },
    { label: "Leadership", desc: "Management & board of directors", href: "#about" },
    { label: "JSE Listing", desc: "55+ years on the Johannesburg Stock Exchange", href: "#about" },
    { label: "Sustainability", desc: "Circular economy & ESG commitments", href: "#sustainability" },
  ],
  "Footprint": [
    { label: "South Africa", desc: "Primary manufacturing hub & headquarters", href: "#footprint" },
    { label: "Angola", desc: "Regional plant serving West Africa", href: "#footprint" },
    { label: "Distribution", desc: "Logistics & supply chain network", href: "#footprint" },
  ],
};

const navLinks = ["Products", "Company", "Footprint", "Sustainability", "Contact"];

export function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (megaMenus[label]) setOpen(label);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => setOpen(null), 180);
  };

  return (
    <>
      {/* ---- TOP BAR ---- */}
      <div className="hidden md:block bg-brand-dark dark:bg-dark-card border-b border-brand-mid dark:border-dark-border">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <p className="text-[11px] text-brand-steel">JSE Listed · Established 1968 · South Africa &amp; Angola</p>
          <div className="flex items-center gap-4 text-[11px] text-brand-steel">
            <a href="mailto:info@alucanpackaging.com" className="hover:text-brand-accent transition-colors">info@alucanpackaging.com</a>
            <span className="text-brand-mid">|</span>
            <a href="tel:+27110000000" className="hover:text-brand-accent transition-colors">+27 (0)11 000 0000</a>
          </div>
        </div>
      </div>

      {/* ---- MAIN NAV ---- */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-white/90 dark:bg-dark-card/90 backdrop-blur-xl shadow-glass"
            : "bg-white dark:bg-dark-card"
          } border-b border-surface-300 dark:border-dark-border`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand">
              <span className="text-base font-black text-brand-accent">A</span>
            </div>
            <div className="leading-none">
              <span className="block text-sm font-black tracking-widest text-brand dark:text-dark-text">ALUCAN</span>
              <span className="block text-[10px] font-medium tracking-widest text-brand-steel uppercase">Packaging</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((label) => (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(label)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href={label === "Contact" ? "#contact" : label === "Sustainability" ? "#sustainability" : "#"}
                  className={`nav-link flex items-center gap-1 px-4 py-5 text-[13px] font-semibold ${open === label ? "text-brand-accent" : ""}`}
                >
                  {label}
                  {megaMenus[label] && <ChevronDown />}
                </a>

                {/* Mega Dropdown */}
                {megaMenus[label] && open === label && (
                  <div
                    className="absolute left-0 top-full mt-0 w-72 rounded-b-2xl glass-card py-3 shadow-glass"
                    onMouseEnter={() => { if (timerRef.current) clearTimeout(timerRef.current); }}
                    onMouseLeave={handleMouseLeave}
                  >
                    {megaMenus[label].map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex flex-col gap-0.5 px-5 py-3 transition-colors hover:bg-surface-200 dark:hover:bg-dark-border/30 rounded-xl mx-1"
                      >
                        <span className="text-[13px] font-semibold text-brand dark:text-dark-text">{item.label}</span>
                        <span className="text-[11px] text-brand-steel">{item.desc}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-300 dark:border-dark-border bg-surface-100 dark:bg-dark-card text-brand dark:text-dark-text transition-all hover:border-brand-accent hover:text-brand-accent"
              aria-label="Toggle dark mode"
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <a href="#contact" className="btn-primary hidden md:inline-flex">
              Get a Quote
            </a>
            <button
              className="flex md:hidden flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span className={`block h-0.5 w-6 bg-brand dark:bg-dark-text transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-brand dark:bg-dark-text transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-brand dark:bg-dark-text transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-surface-300 dark:border-dark-border bg-white dark:bg-dark-card px-6 py-4 space-y-1">
            {navLinks.map((label) => (
              <a
                key={label}
                href={label === "Contact" ? "#contact" : "#"}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-brand dark:text-dark-text hover:bg-surface-200 dark:hover:bg-dark-border/30"
              >
                {label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-3 w-full justify-center">Get a Quote</a>
          </div>
        )}
      </header>
    </>
  );
}
