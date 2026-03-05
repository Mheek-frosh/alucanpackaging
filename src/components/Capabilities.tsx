import { motion } from "framer-motion";

const items = [
  {
    title: "Aluminium beverage cans",
    subtitle: "High-speed, high-volume lines",
    body: "Modern lines producing a range of aluminium beverage can formats with consistent quality, advanced decoration capabilities and integrated quality inspection.",
    tag: "Largest in South Africa & Angola"
  },
  {
    title: "Two-piece tinplate cans",
    subtitle: "Specialised metal packaging",
    body: "Unique producer of two-piece tinplate cans in our home markets, serving premium food and diversified segments with robust, reliable packaging.",
    tag: "Only producer locally"
  },
  {
    title: "Aluminium monobloc aerosol",
    subtitle: "Precision for personal & home care",
    body: "Monobloc aerosol cans engineered for demanding applications, combining lightweight design, strength and high-end finishes for home, personal and industrial brands.",
    tag: "Technical excellence"
  }
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-t border-slate-800/70 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">
              What we make
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Focused metals packaging capabilities.
            </h2>
          </div>
          <p className="max-w-md text-xs text-slate-300 md:text-[13px]">
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
              className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 p-4 shadow-soft"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-3xl transition group-hover:opacity-100">
                <div className="absolute -top-12 right-0 h-32 w-32 bg-cyan-400/30" />
              </div>
              <div className="relative space-y-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-400">
                  {item.subtitle}
                </p>
                <h3 className="text-sm font-semibold text-slate-50 md:text-[15px]">
                  {item.title}
                </h3>
                <p className="text-[11px] leading-relaxed text-slate-300">
                  {item.body}
                </p>
                <div className="pt-2">
                  <span className="inline-flex rounded-full bg-slate-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-emerald-300 ring-1 ring-emerald-500/40">
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

