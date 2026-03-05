import { motion } from "framer-motion";

export function Sustainability() {
  return (
    <section
      id="sustainability"
      className="border-t border-slate-800/70 bg-slate-950 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Sustainability
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Recyclable by design. Lighter by choice.
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 md:text-[15px]">
              We actively promote the recyclability of our products and work
              continuously to reduce the weight of our cans. Every gram removed
              reduces material use, energy intensity and environmental impact
              across the value chain, without compromising performance.
            </p>
            <p className="text-sm leading-relaxed text-slate-300 md:text-[15px]">
              Working closely with our customers and industry partners, we
              support responsible sourcing, circular material flows and
              efficient collection and recycling ecosystems in our markets.
            </p>

            <dl className="grid gap-4 text-xs text-slate-200 sm:grid-cols-3">
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Recyclable metals
                </dt>
                <dd className="pt-1 text-[11px] text-slate-300">
                  Aluminium and tinplate cans designed to remain in circulation
                  through multiple life cycles.
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Lightweighting
                </dt>
                <dd className="pt-1 text-[11px] text-slate-300">
                  Ongoing weight reduction programmes that protect both product
                  integrity and environmental performance.
                </dd>
              </div>
              <div>
                <dt className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Responsible operations
                </dt>
                <dd className="pt-1 text-[11px] text-slate-300">
                  Focus on energy efficiency, reduced waste and continuous
                  improvement across every site.
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-slate-950 p-5 shadow-soft"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 top-0 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-sky-400/10 blur-3xl" />
            </div>

            <div className="relative space-y-4">
              <h3 className="text-sm font-semibold text-slate-50">
                Metals packaging for a circular future
              </h3>
              <p className="text-[11px] leading-relaxed text-slate-200">
                Metals are endlessly recyclable. By choosing aluminium and
                tinplate cans, our customers tap into an established recycling
                ecosystem that keeps material in productive use and out of
                landfill.
              </p>

              <ul className="space-y-2 text-[11px] text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <span>
                    Collaboration with industry bodies to strengthen collection,
                    sorting and recycling initiatives.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <span>
                    Continuous investments in process efficiency and emissions
                    reduction.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <span>
                    Technical teams partnering with customers on sustainable
                    pack formats and specifications.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

