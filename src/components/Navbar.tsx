import { motion } from "framer-motion";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#footprint", label: "Footprint" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/60 bg-slate-900/40 shadow-[0_18px_60px_rgba(15,23,42,0.75)] backdrop-blur-2xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-accent to-cyan-500 shadow-soft">
            <span className="text-lg font-semibold tracking-tight text-slate-950">
              A
            </span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.18em] text-slate-400">
              ALUCAN
            </span>
            <span className="text-xs text-slate-500">
              Metals Packaging
            </span>
          </div>
        </div>
        <div className="hidden items-center gap-8 text-xs font-medium text-slate-300 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative uppercase tracking-[0.18em] text-slate-300 transition hover:text-sky-200"
            >
              {link.label}
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-gradient-to-r from-brand-accent to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-brand-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950 shadow-soft transition hover:bg-cyan-400"
        >
          Talk to us
        </a>
      </nav>
    </motion.header>
  );
}

