import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-slate-800/70 bg-slate-950/40 py-16 md:py-20"
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">
              About Alucan Packaging
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Evolving into a focused metals packaging business.
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 md:text-[15px]">
              With manufacturing facilities in South Africa and Angola, Alucan
              Packaging supplies trusted products and excellent service to a
              broad range of beverage and diversified customers. Built on a
              strong industrial heritage, we are evolving into a focused metals
              packaging business with a clear, sustainable growth strategy.
            </p>
            <p className="text-sm leading-relaxed text-slate-300 md:text-[15px]">
              Our business is centred on aluminium and tinplate cans. In South
              Africa and Angola, we are among the largest manufacturers of
              beverage cans, with substantial positions in other metals
              packaging. We are the only producer of two-piece tinplate cans and
              aluminium monobloc aerosol cans in our home markets.
            </p>
            <p className="text-sm leading-relaxed text-slate-300 md:text-[15px]">
              As a publicly owned entity with a long-standing market presence,
              Alucan Packaging is positioned to be a high-quality,
              market-leading business with distinctive capabilities, operating
              in a defensive market segment underpinned by a blue-chip customer
              base.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-900/60 p-5 shadow-soft"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Our profile
                </p>
                <p className="text-sm text-slate-200">
                  Metals packaging, designed for resilience.
                </p>
              </div>
              <span className="rounded-full border border-slate-700/80 bg-slate-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
                JSE-linked legacy
              </span>
            </div>

            <div className="grid gap-4 text-xs text-slate-200">
              <div className="rounded-2xl bg-slate-900/70 p-3 ring-1 ring-slate-700/80">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Distinctive capabilities
                </p>
                <p className="pt-1.5 text-[11px] text-slate-300">
                  Deep engineering expertise, multi-decade customer
                  relationships and disciplined operational excellence across
                  high-speed metals packaging lines.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900/50 p-3 ring-1 ring-slate-800/80">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Defensive segment
                </p>
                <p className="pt-1.5 text-[11px] text-slate-300">
                  Beverage and essential goods packaging with resilient demand
                  profiles and attractive, sustainable growth characteristics.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-900/40 p-3 ring-1 ring-slate-800/80">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Blue-chip customers
                </p>
                <p className="pt-1.5 text-[11px] text-slate-300">
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

