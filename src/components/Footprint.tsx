import { motion } from "framer-motion";

export function Footprint() {
  return (
    <section
      id="footprint"
      className="border-t border-slate-200 bg-slate-50 py-16 md:py-20 dark:border-slate-800/70 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-sky-300">
              Our footprint
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
              Strategically located in Southern Africa.
            </h2>
          </div>
          <p className="max-w-md text-xs text-slate-600 md:text-[13px] dark:text-slate-300">
            Alucan Packaging operates manufacturing facilities in South Africa
            and Angola, positioned to serve regional beverage and diversified
            customers efficiently and reliably.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1.5fr,1fr] md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800/80 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-12 rounded-[36px] border border-slate-200 dark:border-slate-700/60" />
              <div className="absolute inset-4 rounded-[40px] border border-slate-200 dark:border-slate-800/50" />
            </div>

            <div className="relative">
              <div className="aspect-[16/9] rounded-[32px] bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(34,197,94,0.12),transparent_50%),radial-gradient(circle_at_center,rgba(248,250,252,1),rgba(248,250,252,1))] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.25),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(34,197,94,0.18),transparent_50%),radial-gradient(circle_at_center,rgba(15,23,42,1),rgba(15,23,42,1))]">
                <div className="relative h-full w-full">
                  <div className="absolute inset-[18%] rounded-[28px] border border-slate-200 dark:border-slate-700/50">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0),rgba(148,163,184,0.35)_55%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0),rgba(148,163,184,0.4)_55%)] dark:bg-[radial-gradient(circle_at_40%_30%,rgba(15,23,42,0),rgba(15,23,42,0.9)_55%),radial-gradient(circle_at_70%_70%,rgba(15,23,42,0),rgba(15,23,42,0.95)_55%)]" />
                    <div className="absolute inset-[12%] rounded-[24px] border border-dashed border-slate-200 dark:border-slate-700/60" />

                    <div className="absolute left-[32%] top-[58%]">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-300">
                          South Africa
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_0_4px_rgba(56,189,248,0.3)]" />
                      </div>
                    </div>

                    <div className="absolute left-[22%] top-[38%]">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-300">
                          Angola
                        </span>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_0_4px_rgba(52,211,153,0.35)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 text-xs text-slate-700 md:text-[13px] dark:text-slate-200"
          >
            <p>
              Our manufacturing footprint is intentionally concentrated, enabling
              scale efficiencies while staying close to our customers and key
              logistics routes. From these hubs we serve a broad base of
              beverage and diversified markets.
            </p>
            <div className="space-y-3 rounded-2xl bg-white p-4 ring-1 ring-slate-200 dark:bg-slate-900/70 dark:ring-slate-800/80">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    South Africa
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300">
                    Advanced beverage and metals packaging hub.
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-700 dark:bg-slate-950 dark:text-sky-300">
                  Core hub
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-slate-800/80 pt-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    Angola
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300">
                    Strategic presence supporting the region&apos;s growing
                    beverage market.
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-700 dark:bg-slate-950 dark:text-emerald-300">
                  Growth market
                </span>
              </div>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Detailed site information and coordinates can be shared with
              partners and customers on request.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

