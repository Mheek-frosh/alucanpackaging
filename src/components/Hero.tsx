import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/5437301/pexels-photo-5437301.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tag: "Beverage Excellence",
    title: "Aluminium Cans at Scale",
    subtitle: "Supplying trusted products to the leading beverage brands across Southern Africa and beyond.",
    cta1: "Explore Our Products",
    cta2: "View Capabilities",
    href1: "#capabilities",
    href2: "#about",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/4034873/pexels-photo-4034873.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tag: "Precision Engineering",
    title: "World-Class Production",
    subtitle: "High-speed, high-volume lines delivering consistency, quality, and performance with every can.",
    cta1: "Our Capabilities",
    cta2: "Partner With Us",
    href1: "#capabilities",
    href2: "#contact",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/3738221/pexels-photo-3738221.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tag: "Sustainability",
    title: "Packaging With Purpose",
    subtitle: "Metals are endlessly recyclable. We design every can with tomorrow in mind.",
    cta1: "Sustainability Commitment",
    cta2: "Learn More",
    href1: "#sustainability",
    href2: "#about",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=1920",
    tag: "Regional Footprint",
    title: "Rooted Across Africa",
    subtitle: "Manufacturing in South Africa and Angola — serving customers across two continents.",
    cta1: "Our Footprint",
    cta2: "Contact Us",
    href1: "#footprint",
    href2: "#contact",
  },
];

const stats = [
  { value: "1968", label: "Year Established" },
  { value: "300M+", label: "Annual Can Capacity" },
  { value: "2", label: "Countries" },
  { value: "55+", label: "JSE Listed Years" },
];

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export function Hero() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const prev = () => setCurrent(c => (c - 1 + total) % total);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[current];

  return (
    <section id="home" className="relative h-screen min-h-[620px] max-h-[900px] overflow-hidden">
      {/* ---- BG Images ---- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full w-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand/90 via-brand/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* ---- Content ---- */}
      <div className="relative z-10 flex h-full flex-col">
        <div className="flex flex-1 items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id + "-text"}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-2xl"
              >
                <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-accent/20 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
                  {slide.tag}
                </span>
                <h1 className="mb-5 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl text-balance">
                  {slide.title}
                </h1>
                <p className="mb-8 text-lg font-medium leading-relaxed text-white/80 max-w-xl">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={slide.href1} className="btn-primary">
                    {slide.cta1} <ArrowRight />
                  </a>
                  <a href={slide.href2} className="btn-outline border-white/50 text-white hover:bg-white hover:text-brand">
                    {slide.cta2}
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ---- Bottom: Stats Glass Bar ---- */}
        <div className="mx-auto w-full max-w-7xl px-6 pb-8">
          <div className="glass-card border-white/20 bg-white/10 dark:bg-dark-card/60 backdrop-blur-2xl flex flex-wrap divide-y divide-white/20 md:divide-y-0 md:divide-x">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-1 flex-col items-center justify-center px-6 py-4 min-w-[120px] text-center">
                <span className="text-2xl font-black text-brand-accent md:text-3xl">{s.value}</span>
                <span className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-white/70">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Carousel Controls ---- */}
        <div className="absolute bottom-28 right-6 z-20 flex flex-col items-end gap-3 md:bottom-36 md:right-10">
          {/* Slide counter */}
          <div className="flex items-center gap-2 text-white/60 text-xs font-mono">
            <span className="text-white font-bold text-sm">{String(current + 1).padStart(2, "0")}</span>
            <span>/</span>
            <span>{String(total).padStart(2, "0")}</span>
          </div>
          {/* Dot indicators */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-brand-accent" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
          {/* Arrow controls */}
          <div className="flex gap-2">
            <button onClick={prev} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur text-white transition hover:bg-brand-accent hover:border-brand-accent">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={next} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur text-white transition hover:bg-brand-accent hover:border-brand-accent">
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
