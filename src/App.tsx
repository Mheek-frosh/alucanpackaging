import { useState, useEffect, createContext, useContext } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Capabilities } from "./components/Capabilities";
import { Sustainability } from "./components/Sustainability";
import { Footprint } from "./components/Footprint";
import { Contact } from "./components/Contact";
import { ChatWidget } from "./components/ChatWidget";
import { CompanyPage } from "./pages/CompanyPage";
import { LeadershipPage } from "./pages/LeadershipPage";
import { ProductsPage } from "./pages/ProductsPage";
import { BlogPage } from "./pages/BlogPage";

// ---------- Theme Context ----------
export const ThemeContext = createContext<{ dark: boolean; toggle: () => void }>({ dark: false, toggle: () => { } });
export const useTheme = () => useContext(ThemeContext);

// ---------- Router Context ----------
export type PageId = "home" | "company" | "leadership" | "products" | "blog";
export const RouterContext = createContext<{ page: PageId; navigate: (p: PageId) => void }>({ page: "home", navigate: () => { } });
export const useRouter = () => useContext(RouterContext);

// ---------- Footer ----------
function Footer({ navigate }: { navigate: (p: PageId) => void }) {
  return (
    <footer className="bg-brand dark:bg-dark-card border-t border-brand-mid dark:border-dark-border">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <span className="text-xl font-black text-brand-accent tracking-tight block mb-3">ALUCAN</span>
            <p className="text-xs leading-relaxed text-brand-steel">A publicly owned metals packaging business listed on the JSE for over 55 years.</p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-steel/60">Company</h4>
            <ul className="space-y-2 text-sm text-brand-steel">
              {[["About Us", "company"], ["Leadership", "leadership"], ["Investors", "company"], ["Sustainability", "company"]].map(([l, p]) => (
                <li key={l}><button onClick={() => navigate(p as PageId)} className="hover:text-brand-accent transition-colors text-left">{l}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-steel/60">Products</h4>
            <ul className="space-y-2 text-sm text-brand-steel">
              {["Beverage Cans", "Aerosol Cans", "Tinplate Cans", "CanStudio™", "CanWorks™"].map(l => (
                <li key={l}><button onClick={() => navigate("products")} className="hover:text-brand-accent transition-colors text-left">{l}</button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-steel/60">Contact</h4>
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
          </div>
        </div>
      </div>
    </footer>
  );
}

// ---------- App ----------
function App() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem("alucan-theme") === "dark"; } catch { return false; }
  });
  const [page, setPage] = useState<PageId>("home");

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
    try { localStorage.setItem("alucan-theme", dark ? "dark" : "light"); } catch { }
  }, [dark]);

  // Scroll to top on page change
  const navigate = (p: PageId) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      <RouterContext.Provider value={{ page, navigate }}>
        <div className="min-h-screen bg-surface-100 text-brand dark:bg-dark-bg dark:text-dark-text transition-colors duration-300 overflow-x-hidden">
          <Navbar />
          <main>
            {page === "home" && (
              <>
                <Hero />
                <About />
                <Capabilities />
                <Sustainability />
                <Footprint />
                <Contact />
              </>
            )}
            {page === "company" && <CompanyPage />}
            {page === "leadership" && <LeadershipPage />}
            {page === "products" && <ProductsPage />}
            {page === "blog" && <BlogPage />}
          </main>
          <ChatWidget />
          <Footer navigate={navigate} />
        </div>
      </RouterContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
