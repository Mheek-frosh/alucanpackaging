import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-slate-200 bg-white py-16 md:py-20 dark:border-slate-800/70 dark:bg-slate-950/40"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-cyan-300">
              Who we are
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
              A modern metals studio for ambitious brands.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 md:text-[15px] dark:text-slate-300">
              Alucan is a specialist metals packaging studio that blends
              engineering discipline with brand thinking. We help beverage,
              personal care and household brands turn cans into a powerful
              extension of their identity.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 md:text-[15px] dark:text-slate-300">
              From early format exploration to full-scale production, our teams
              work as an extension of your product and operations groups –
              translating ideas into robust, manufacturable packs that run at
              speed on modern lines.
            </p>
            <p className="text-sm leading-relaxed text-slate-600 md:text-[15px] dark:text-slate-300">
              We favour long-term partnerships over one-off projects, investing
              in shared roadmaps, joint innovation sprints and data-led
              performance reviews to keep every launch sharper than the last.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 rounded-3xl border border-slate-200 bg-slate-50/80 p-5 shadow-soft dark:border-slate-800/80 dark:bg-slate-900/60"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Our profile
                </p>
                <p className="text-sm text-slate-900 dark:text-slate-200">
                  Metals packaging, designed for resilience.
                </p>
              </div>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-700 dark:border-slate-700/80 dark:bg-slate-900 dark:text-emerald-300">
                JSE-linked legacy
              </span>
            </div>

            <div className="grid gap-4 text-xs text-slate-700 dark:text-slate-200">
              <div className="rounded-2xl bg-white p-3 ring-1 ring-slate-200 dark:bg-slate-900/70 dark:ring-slate-700/80">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  Distinctive capabilities
                </p>
                <p className="pt-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                  Deep engineering expertise, multi-decade customer
                  relationships and disciplined operational excellence across
                  high-speed metals packaging lines.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-3 ring-1 ring-slate-200 dark:bg-slate-900/50 dark:ring-slate-800/80">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  Defensive segment
                </p>
                <p className="pt-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                  Beverage and essential goods packaging with resilient demand
                  profiles and attractive, sustainable growth characteristics.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-3 ring-1 ring-slate-200 dark:bg-slate-900/40 dark:ring-slate-800/80">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  Blue-chip customers
                </p>
                <p className="pt-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                  Partner to leading regional and multinational brands that
                  depend on reliable supply, consistent quality and responsible
                  environmental performance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

