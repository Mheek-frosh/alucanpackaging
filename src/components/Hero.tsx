import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-brand pt-24"
    >
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5437301/pexels-photo-5437301.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Alucan Packaging Production Line"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-100/30 via-surface-100/10 to-surface-100" />
      </div>

      <div className="relative z-10 flex max-w-[1200px] flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 text-sm font-semibold tracking-widest text-brand-light uppercase"
        >
          Metals Packaging Evolved
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 max-w-4xl text-balance font-display text-5xl font-bold tracking-tight text-brand md:text-7xl lg:text-[80px] lg:leading-[0.9]"
        >
          Precision at Scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-2xl text-lg font-medium text-gray-600 md:text-xl lg:text-2xl"
        >
          From high-speed beverage lines to specialised aerosols. Engineered for performance, designed for the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#capabilities"
            className="flex min-w-[160px] items-center justify-center rounded-full bg-brand px-6 py-4 text-sm font-medium text-white transition-all hover:scale-105 active:scale-95"
          >
            Explore Capabilities
          </a>
          <a
            href="#contact"
            className="flex min-w-[160px] items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-medium text-brand ring-1 ring-inset ring-brand/10 transition-all hover:bg-surface-200"
          >
            Partner With Us
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400">Scroll to discover</span>
        <div className="h-10 w-[1px] bg-gradient-to-b from-gray-400 to-transparent" />
      </motion.div>
    </section>
  );
}

