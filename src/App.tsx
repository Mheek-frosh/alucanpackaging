import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Capabilities } from "./components/Capabilities";
import { Sustainability } from "./components/Sustainability";
import { Footprint } from "./components/Footprint";
import { Contact } from "./components/Contact";
import { ChatWidget } from "./components/ChatWidget";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
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
      <footer className="border-t border-slate-800/70 bg-slate-950 py-6 text-[11px] text-slate-500">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 md:px-6">
          <p>© {new Date().getFullYear()} Alucan Packaging. All rights reserved.</p>
          <p className="text-[10px] uppercase tracking-[0.22em]">
            Metals packaging. Trusted partners. Sustainable growth.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

