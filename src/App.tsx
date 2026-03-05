import { useState, useEffect, createContext, useContext } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Capabilities } from "./components/Capabilities";
import { Sustainability } from "./components/Sustainability";
import { Footprint } from "./components/Footprint";
import { Contact } from "./components/Contact";
import { ChatWidget } from "./components/ChatWidget";

// ---------- Theme Context ----------
export const ThemeContext = createContext<{
  dark: boolean;
  toggle: () => void;
}>({ dark: false, toggle: () => { } });

export const useTheme = () => useContext(ThemeContext);

// ---------- App ----------
function App() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("alucan-theme") === "dark"; }
    catch { return false; }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) { root.classList.add("dark"); localStorage.setItem("alucan-theme", "dark"); }
    else { root.classList.remove("dark"); localStorage.setItem("alucan-theme", "light"); }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      <div className="min-h-screen bg-surface-100 text-brand dark:bg-dark-bg dark:text-dark-text transition-colors duration-300 overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Capabilities />
          <Sustainability />
          <Footprint />
          <Contact />
        </main>
        <ChatWidget />

        {/* Footer */}
        <footer className="bg-brand dark:bg-dark-card border-t border-brand-mid dark:border-dark-border">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="grid gap-10 md:grid-cols-4">
              <div className="md:col-span-1">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-xl font-black text-brand-accent tracking-tight">ALUCAN</span>
                </div>
                <p className="text-xs leading-relaxed text-brand-steel">
                  A publicly owned metals packaging business listed on the JSE for over 55 years.
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-steel">Company</h4>
                <ul className="space-y-2 text-sm text-brand-steel">
                  {["About Us", "Our History", "Leadership", "Investors", "Careers"].map(l => (
                    <li key={l}><a href="#" className="hover:text-brand-accent transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-steel">Products</h4>
                <ul className="space-y-2 text-sm text-brand-steel">
                  {["Beverage Cans", "Aerosol Cans", "Tinplate Cans", "CanStudio™", "CanWorks™"].map(l => (
                    <li key={l}><a href="#" className="hover:text-brand-accent transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-steel">Contact</h4>
                <ul className="space-y-2 text-sm text-brand-steel">
                  <li>info@alucanpackaging.com</li>
                  <li>+27 (0)11 000 0000</li>
                  <li>Johannesburg, South Africa</li>
                </ul>
              </div>
            </div>
            <div className="mt-10 border-t border-brand-mid dark:border-dark-border pt-6 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-brand-steel">
              <p>© {new Date().getFullYear()} Alucan Packaging (Pty) Ltd. All rights reserved. JSE Listed.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-brand-accent transition-colors">Terms of Use</a>
                <a href="#" className="hover:text-brand-accent transition-colors">PAIA</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
