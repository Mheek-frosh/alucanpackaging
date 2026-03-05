import { useState, useEffect, useRef } from "react";
import { useTheme } from "../App";
import { useRouter, PageId } from "../App";

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
const Chev = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
  </svg>
);

type MegaItem = { label: string; desc: string; page?: PageId; href?: string };

const megaMenus: Record<string, MegaItem[]> = {
  Company: [
    { label: "About Alucan", desc: "Our story, mission & values", page: "company" },
    { label: "Leadership", desc: "Management team & board of directors", page: "leadership" },
    { label: "JSE Listing", desc: "55+ years on the Johannesburg Stock Exchange", page: "company" },
    { label: "Sustainability", desc: "Circular economy & ESG commitments", page: "company" },
  ],
  Products: [
    { label: "Beverage Cans", desc: "Aluminium & tinplate beverage cans", page: "products" },
    { label: "Aerosol Cans", desc: "Monobloc aluminium aerosol solutions", page: "products" },
    { label: "Tinplate Cans", desc: "Two-piece steel & tinplate can ranges", page: "products" },
    { label: "CanStudio™", desc: "Early-stage format exploration & concepting", page: "products" },
  ],
  Footprint: [
    { label: "South Africa", desc: "Primary manufacturing hub & headquarters", href: "#footprint" },
    { label: "Angola", desc: "Regional plant serving West & Central Africa", href: "#footprint" },
  ],
};

const navLinks: { label: string; page?: PageId; href?: string }[] = [
  { label: "Home", page: "home" },
  { label: "Company", page: "company" },
  { label: "Products", page: "products" },
  { label: "Footprint", href: "#footprint" },
  { label: "Blog", page: "blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { dark, toggle } = useTheme();
  const { page, navigate } = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const enter = (label: string) => {
    if (timer.current) clearTimeout(timer.current);
    if (megaMenus[label]) setOpen(label);
  };
  const leave = () => { timer.current = setTimeout(() => setOpen(null), 160); };

  const handleNav = (item: { page?: PageId; href?: string }) => {
    setOpen(null); setMobileOpen(false);
    if (item.page) { navigate(item.page); }
    else if (item.href) {
      if (page !== "home") { navigate("home"); setTimeout(() => { const el = document.querySelector(item.href!); el?.scrollIntoView({ behavior: "smooth" }); }, 400); }
      else { const el = document.querySelector(item.href!); el?.scrollIntoView({ behavior: "smooth" }); }
    }
  };

  return (
    <>
      {/* Top announcement bar */}
      <div className="hidden md:block bg-brand-dark dark:bg-[#0a0f18] border-b border-brand-mid/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5">
          <p className="text-[11px] text-brand-steel">JSE Listed · Est. 1968 · South Africa &amp; Angola</p>
          <div className="flex items-center gap-4 text-[11px] text-brand-steel">
            <a href="mailto:info@alucanpackaging.com" className="hover:text-brand-accent transition-colors">info@alucanpackaging.com</a>
            <span className="opacity-30">|</span>
            <a href="tel:+27110000000" className="hover:text-brand-accent transition-colors">+27 (0)11 000 0000</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className={`sticky top-0 z-50 border-b transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-dark-card/90 backdrop-blur-xl shadow-glass border-surface-300/70 dark:border-dark-border/50"
          : "bg-white dark:bg-dark-card border-surface-300 dark:border-dark-border"
        }`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 h-[66px]">
          {/* Logo */}
          <button onClick={() => navigate("home")} className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand group-hover:bg-brand-mid transition-colors">
              <span className="text-base font-black text-brand-accent">A</span>
            </div>
            <div className="leading-none text-left">
              <span className="block text-sm font-black tracking-widest text-brand dark:text-dark-text">ALUCAN</span>
              <span className="block text-[9px] font-semibold tracking-[0.22em] text-brand-steel uppercase">Packaging</span>
            </div>
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map(link => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => enter(link.label)}
                onMouseLeave={leave}
              >
                <button
                  onClick={() => handleNav(link)}
                  className={`nav-link flex items-center gap-1 px-4 py-5 text-[13px] font-semibold transition-colors ${(link.page && page === link.page) ? "text-brand-accent" : ""
                    }`}
                >
                  {link.label}
                  {megaMenus[link.label] && <span className={`transition-transform duration-200 ${open === link.label ? "rotate-180" : ""}`}><Chev /></span>}
                </button>

                {/* Mega dropdown */}
                {megaMenus[link.label] && open === link.label && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-80 glass-card rounded-b-2xl rounded-t-none border-t-2 border-brand-accent shadow-glass py-2"
                    onMouseEnter={() => { if (timer.current) clearTimeout(timer.current); }}
                    onMouseLeave={leave}
                  >
                    {megaMenus[link.label].map(item => (
                      <button
                        key={item.label}
                        onClick={() => handleNav(item)}
                        className="flex w-full flex-col gap-0.5 px-5 py-3 text-left rounded-xl mx-1 w-[calc(100%-8px)] transition-colors hover:bg-surface-200 dark:hover:bg-dark-border/30"
                      >
                        <span className="text-[13px] font-semibold text-brand dark:text-dark-text">{item.label}</span>
                        <span className="text-[11px] text-brand-steel dark:text-dark-muted">{item.desc}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <button onClick={toggle} className="flex h-9 w-9 items-center justify-center rounded-full border border-surface-300 dark:border-dark-border bg-surface-100 dark:bg-dark-bg text-brand dark:text-dark-text transition-all hover:border-brand-accent hover:text-brand-accent" aria-label="Toggle dark mode">
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button onClick={() => navigate("products")} className="btn-primary hidden md:inline-flex">
              Our Products
            </button>
            {/* Hamburger */}
            <button className="flex md:hidden flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              <span className={`block h-0.5 w-6 bg-brand dark:bg-dark-text transition-transform origin-center ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-brand dark:bg-dark-text transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-brand dark:bg-dark-text transition-transform origin-center ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-surface-300 dark:border-dark-border bg-white dark:bg-dark-card px-6 py-4 space-y-1">
            {navLinks.map(link => (
              <button key={link.label} onClick={() => handleNav(link)}
                className="block w-full text-left rounded-xl px-4 py-3 text-sm font-semibold text-brand dark:text-dark-text hover:bg-surface-200 dark:hover:bg-dark-border/30 transition-colors">
                {link.label}
              </button>
            ))}
            <button onClick={() => handleNav({ page: "products" })} className="btn-primary mt-3 w-full justify-center">Our Products</button>
          </div>
        )}
      </header>
    </>
  );
}
