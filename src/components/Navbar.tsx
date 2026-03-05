import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Overview" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#sustainability", label: "Sustainability" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 flex justify-center pt-4 transition-all duration-500 ${isScrolled ? "pt-6" : "pt-8"}`}
    >
      <nav className="flex items-center justify-between gap-8 rounded-full border border-surface-300/40 bg-surface-50/70 px-6 py-3 shadow-glass backdrop-blur-xl md:gap-12">
        <a href="#home" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-brand">Alucan</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-gray-800 transition-colors hover:text-brand-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full bg-brand px-4 py-2 text-[12px] font-medium text-white transition-transform hover:scale-105 active:scale-95"
        >
          Order Now
        </a>
      </nav>
    </motion.header>
  );
}
