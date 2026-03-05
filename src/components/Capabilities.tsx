import { motion } from "framer-motion";

const items = [
  {
    title: "CanStudio™ Concepts",
    subtitle: "Early-stage pack exploration",
    body: "Rapid concepting for new SKUs and formats – from slim cans to specialty shapes – using virtual mockups and small pilot runs to de-risk decisions before you lock in tooling.",
    tag: "Design + engineering"
  },
  {
    title: "CanWorks™ Production",
    subtitle: "Scale without losing detail",
    body: "High-speed, tightly controlled production that keeps registration, colour and specifications consistent across large campaigns and multi-market launches.",
    tag: "Production ready"
  },
  {
    title: "CanLoop™ Lifecycle",
    subtitle: "Data and circularity",
    body: "Lightweighting, recyclability and line performance tracked over time – giving your teams a clear view of how each format behaves in the real world.",
    tag: "Continuous improvement"
  }
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-t border-slate-200 bg-slate-50 py-16 md:py-20 dark:border-slate-800/70 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-950 dark:to-slate-950"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-cyan-300">
              What we make
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
              Focused metals packaging capabilities.
            </h2>
          </div>
          <p className="max-w-md text-xs text-slate-600 md:text-[13px] dark:text-slate-300">
            Our plants in South Africa and Angola are configured around a simple
            idea: do a few things exceptionally well. This focus allows us to
            invest deeply in technology, quality and people.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-soft dark:border-slate-800/80 dark:bg-slate-900/60"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-3xl transition group-hover:opacity-100">
                <div className="absolute -top-12 right-0 h-32 w-32 bg-sky-400/30 dark:bg-cyan-400/30" />
              </div>
              <div className="relative space-y-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  {item.subtitle}
                </p>
                <h3 className="text-sm font-semibold text-slate-900 md:text-[15px] dark:text-slate-50">
                  {item.title}
                </h3>
                <p className="text-[11px] leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.body}
                </p>
                <div className="pt-2">
                  <span className="inline-flex rounded-full bg-slate-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-700 ring-1 ring-slate-200 dark:bg-slate-950/70 dark:text-emerald-300 dark:ring-emerald-500/40">
                    {item.tag}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

