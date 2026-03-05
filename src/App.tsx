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
    <div className="min-h-screen bg-surface-100 font-sans selection:bg-brand-accent/10">
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
      <footer className="border-t border-surface-300 bg-surface-50 py-12 text-[12px] text-gray-500">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <p>© {new Date().getFullYear()} Alucan Packaging. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-light transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-light transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-light transition-colors">Legal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

