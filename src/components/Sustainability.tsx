import { motion } from "framer-motion";

const metrics = [
  { icon: "♻️", value: "100%", label: "Recyclable Materials", desc: "All aluminium and tinplate products are fully and infinitely recyclable." },
  { icon: "⚡", value: "35%", label: "Energy Reduction", desc: "Ongoing investments in energy efficiency across all manufacturing sites." },
  { icon: "🌱", value: "40%", label: "Less Carbon", desc: "Reduced carbon footprint per unit through lightweighting programmes." },
  { icon: "🔄", value: "∞", label: "Circular Loops", desc: "Metals remain in productive use — no degradation through recycling cycles." },
];

const commitments = [
  "Collaboration with industry bodies to strengthen can collection and recycling rates",
  "Continuous investments in process efficiency and waste reduction",
  "Technical teams partnering with customers on sustainable pack formats and specifications",
  "Lightweighting programmes that reduce material use without compromising integrity",
  "Annual sustainability reporting aligned with JSE Listings Requirements",
];

export function Sustainability() {
  return (
    <section id="sustainability" className="bg-surface-100 dark:bg-dark-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-tag mb-4">Sustainability</span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-brand dark:text-dark-text leading-tight md:text-5xl">
              Endlessly Recyclable.<br />By Design.
            </h2>
            <p className="mt-6 text-lg font-medium leading-relaxed text-brand-steel dark:text-dark-muted">
              Every can that leaves an Alucan plant is designed with its next life in mind. We optimise gauges, coatings and formats so our packs are easy to recover, recycle and remake — keeping metals in the loop, not the landfill.
            </p>

            {/* Commitments list */}
            <ul className="mt-8 space-y-3">
              {commitments.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/20">
                    <span className="h-2 w-2 rounded-full bg-brand-accent" />
                  </span>
                  <span className="text-[14px] font-medium text-brand-steel dark:text-dark-muted">{c}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">Sustainability Enquiry</a>
              <a href="#about" className="btn-outline">Our ESG Report</a>
            </div>
          </motion.div>

          {/* Right: Image + metrics grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-glass">
              <img
                src="https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Sustainability at Alucan"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/50 to-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m) => (
                <div key={m.label} className="glass-card p-5 hover:shadow-glow transition-shadow">
                  <span className="text-2xl block mb-2">{m.icon}</span>
                  <span className="text-2xl font-black text-brand-accent block">{m.value}</span>
                  <span className="text-xs font-bold text-brand dark:text-dark-text uppercase tracking-widest">{m.label}</span>
                  <p className="mt-1 text-[11px] text-brand-steel dark:text-dark-muted">{m.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
