import { motion } from "framer-motion";

export function Sustainability() {
  return (
    <section id="sustainability" className="bg-white py-32 md:py-48">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-brand md:text-5xl lg:text-6xl text-balance">
              Endlessly <br /> recyclable.
            </h2>
            <p className="mb-8 text-lg font-medium leading-relaxed text-gray-500">
              Every can that leaves an Alucan line is designed with its next life in mind. We optimise gauges, coatings and formats so packs are easy to recover, recycle and remake.
            </p>
            <div className="space-y-8 border-l border-surface-300 pl-8">
              <div>
                <h3 className="mb-2 font-display text-xl font-bold text-brand">Zero Compromise</h3>
                <p className="text-[15px] font-medium leading-relaxed text-gray-500">
                  Lightweighting programs that protect product integrity while drastically reducing environmental footprint.
                </p>
              </div>
              <div>
                <h3 className="mb-2 font-display text-xl font-bold text-brand">Circular by Design</h3>
                <p className="text-[15px] font-medium leading-relaxed text-gray-500">
                  Aluminium and tinplate keep materials in productive use and out of landfill, permanently.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-[40px] shadow-soft"
          >
            <img
              src="https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Sustainable nature"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

