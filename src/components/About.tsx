import { motion } from "framer-motion";

const milestones = [
  { year: "1968", event: "Company founded in South Africa" },
  { year: "1971", event: "Listed on the Johannesburg Stock Exchange" },
  { year: "1998", event: "Angola manufacturing operations established" },
  { year: "2012", event: "300M+ annual capacity milestone reached" },
  { year: "2024", event: "Launched CanStudio™ innovation programme" },
];

export function About() {
  return (
    <section id="about" className="bg-surface-50 dark:bg-dark-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end"
        >
          <div>
            <span className="section-tag mb-4">Who We Are</span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-brand dark:text-dark-text leading-tight md:text-5xl">
              Africa's Leading <br />Metals Packaging Group
            </h2>
          </div>
          <p className="text-lg font-medium leading-relaxed text-brand-steel dark:text-dark-muted max-w-xl">
            Alucan is a focused metals packaging business specialising in aluminium and tinplate cans for beverage and diversified markets. With plants in South Africa and Angola, we serve blue-chip customers with precision and purpose.
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">

          {/* Left: Big image with glass info card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-2"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-glass">
              <img
                src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Alucan packaging facility"
                className="aspect-[3/4] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/90 via-brand/20 to-transparent" />
              {/* Floating stat card */}
              <div className="absolute bottom-6 left-6 right-6 glass-card border-white/20 bg-white/10 backdrop-blur-xl p-4">
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand-accent mb-1">JSE Listed Entity</p>
                <p className="text-lg font-black text-white">55+ Years of Market Trust</p>
                <p className="text-xs text-white/70 mt-1">Publicly owned. Proudly South African.</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-8"
          >
            <div className="space-y-4 text-[15px] font-medium leading-relaxed text-brand-steel dark:text-dark-muted">
              <p>
                Alucan Packaging is a publicly listed entity whose shares have been on the Johannesburg Stock Exchange for over 55 years. We are a focused metals packaging business with deep expertise in aluminium and tinplate — designed for resilience, performance, and growth.
              </p>
              <p>
                Our manufacturing facilities in South Africa and Angola position us to serve a broad range of customers across Southern and Central Africa. We partner with leading beverage brands, consumer goods manufacturers, and household product companies who demand consistent quality and reliable supply.
              </p>
            </div>

            {/* Value pillars */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: "🏭", title: "Engineering Excellence", desc: "Deep technical capabilities across high-speed beverage and specialised packaging lines." },
                { icon: "🤝", title: "Long-Term Partnerships", desc: "We invest in shared roadmaps with blue-chip customers for sustainable growth." },
                { icon: "♻️", title: "Circular Economy", desc: "Aluminium and tinplate are infinitely recyclable — we build that into every decision." },
                { icon: "📈", title: "JSE Listed & Governed", desc: "Strong corporate governance, accountability and investor transparency since 1971." },
              ].map((p) => (
                <div key={p.title} className="glass-card p-5 hover:shadow-glow transition-shadow">
                  <span className="text-2xl mb-3 block">{p.icon}</span>
                  <h4 className="text-sm font-bold text-brand dark:text-dark-text mb-1">{p.title}</h4>
                  <p className="text-[12px] text-brand-steel dark:text-dark-muted leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-brand dark:text-dark-text mb-4">Company Milestones</h4>
              <div className="space-y-3">
                {milestones.map((m) => (
                  <div key={m.year} className="flex items-start gap-4">
                    <span className="min-w-[48px] rounded-lg bg-brand-accent/10 px-2 py-1 text-center text-xs font-bold text-brand-accent">{m.year}</span>
                    <span className="text-[13px] text-brand-steel dark:text-dark-muted pt-0.5">{m.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
