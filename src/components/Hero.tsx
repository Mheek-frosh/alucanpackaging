import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-24 md:pt-32 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950" />
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-brand-accent/10 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent dark:via-slate-700/60" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-start gap-14 px-4 md:flex-row md:items-center md:gap-20 md:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-xl space-y-6"
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-accent">
            Focused metals packaging
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-slate-50">
            Official metals packaging partner
            <span className="block bg-gradient-to-br from-brand-accent via-amber-400 to-amber-300 bg-clip-text text-transparent">
              for leading African brands.
            </span>
          </h1>
          <p className="text-balance text-sm text-slate-600 sm:text-base dark:text-slate-300">
            Alucan Packaging is a high-quality, market-leading metals packaging
            business focused on aluminium and tinplate cans. From state-of-the-art
            beverage lines to specialised aerosol and two-piece tinplate cans, we
            partner with blue-chip customers across Southern Africa.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="rounded-full bg-brand-accent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-soft transition hover:bg-amber-400"
            >
              Talk to our team
            </a>
            <a
              href="#capabilities"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 hover:text-brand-accent dark:text-slate-300 dark:hover:text-sky-300"
            >
              Explore our capabilities
            </a>
          </div>

          <div className="grid gap-4 pt-6 text-xs text-slate-600 sm:grid-cols-3 dark:text-slate-300">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Footprint
              </p>
              <p>Manufacturing in South Africa and Angola.</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Focus
              </p>
              <p>Aluminium beverage, tinplate and monobloc aerosol cans.</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                Approach
              </p>
              <p>Trusted products, excellent service and sustainable growth.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-md"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200/80 bg-white/70 shadow-soft backdrop-blur-2xl dark:border-slate-700/60 dark:bg-slate-900/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(15,118,210,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,23,42,0.95),_rgba(15,23,42,1))] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(8,47,73,0.9),_rgba(15,23,42,1))]" />

            <div className="relative flex h-full flex-col justify-between p-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-300 ring-1 ring-slate-700/70 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Live production line
                </div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                  Precision-engineered aluminium & tinplate cans
                </h2>
                <p className="text-[11px] text-slate-600 dark:text-slate-300">
                  High-speed, high-volume lines with rigorous quality controls,
                  delivering consistent packaging performance for leading
                  beverage and diversified brands.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-700/70">
                  <img
                    src="https://images.pexels.com/photos/5437301/pexels-photo-5437301.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Close-up of aluminium beverage cans on a production line"
                      className="h-28 w-full object-cover transition duration-700 ease-out hover:scale-[1.03]"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-700/70">
                    <img
                      src="https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=1200"
                      alt="Industrial view of a modern manufacturing facility"
                      className="h-28 w-full object-cover transition duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
              </div>

              <div className="grid gap-3 pt-4 text-[11px] text-slate-700 dark:text-slate-200">
                <div className="flex items-center justify-between rounded-2xl bg-slate-100/80 px-3 py-2 ring-1 ring-slate-200/80 dark:bg-slate-900/70 dark:ring-slate-700/70">
                  <span className="uppercase tracking-[0.2em] text-slate-400">
                    Beverage cans
                  </span>
                  <span className="text-xs font-semibold text-emerald-300">
                    Largest in SA & Angola
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-100/70 px-3 py-2 ring-1 ring-slate-200/80 dark:bg-slate-900/60 dark:ring-slate-800/70">
                  <span className="uppercase tracking-[0.2em] text-slate-400">
                    Aerosol
                  </span>
                  <span className="text-xs font-semibold text-sky-300">
                    Aluminium monobloc expertise
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-slate-100/60 px-3 py-2 ring-1 ring-slate-200/80 dark:bg-slate-900/40 dark:ring-slate-800/70">
                  <span className="uppercase tracking-[0.2em] text-slate-400">
                    Tinplate
                  </span>
                  <span className="text-xs font-semibold text-cyan-200">
                    Two-piece tinplate leadership
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

