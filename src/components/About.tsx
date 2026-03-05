import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="bg-surface-50 py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1000px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="mb-8 font-display text-4xl font-bold tracking-tight text-brand md:text-5xl lg:text-6xl text-balance">
            A distinct approach to <br /> metals packaging.
          </h2>
          <p className="max-w-[800px] text-lg font-medium leading-relaxed text-gray-500 md:text-2xl text-balance">
            Alucan is a specialist metals packaging studio that blends engineering discipline with brand thinking. We help beverage, personal care and household brands turn cans into a powerful extension of their identity.
          </p>
        </motion.div>

        <div className="mt-32 grid gap-16 md:grid-cols-3">
          {[
            {
              title: "Distinctive capabilities",
              description: "Deep engineering expertise, multi-decade customer relationships and disciplined operational excellence."
            },
            {
              title: "Defensive segment",
              description: "Beverage and essential goods packaging with resilient demand profiles and sustainable growth."
            },
            {
              title: "Blue-chip customers",
              description: "Partner to leading regional and multinational brands that depend on reliable supply and quality."
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-surface-200">
                <span className="text-xl text-brand font-semibold">{i + 1}</span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-brand">{item.title}</h3>
              <p className="text-[15px] font-medium leading-relaxed text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

