import { motion } from "framer-motion";

export function Footprint() {
  return (
    <section className="bg-surface-100 py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-brand md:text-5xl">
            Global standard, <br /> regional focus.
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium leading-relaxed text-gray-500">
            Our facilities in South Africa and Angola are positioned to serve beverage and diversified customers seamlessly across the region.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          {["South Africa", "Angola"].map((location, i) => (
            <motion.div
              key={location}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex aspect-[16/9] flex-col justify-between overflow-hidden rounded-[32px] bg-white p-8 shadow-soft"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-surface-100 to-white" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-brand-accent shadow-[0_0_0_8px_rgba(0,102,204,0.1)]" />
                  <span className="text-sm font-semibold uppercase tracking-widest text-brand-light">Active Hub</span>
                </div>
                <div>
                  <h3 className="mb-2 font-display text-4xl font-bold text-brand">{location}</h3>
                  <p className="text-lg font-medium text-gray-500">Advanced high-speed production facility.</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

