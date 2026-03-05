import { motion } from "framer-motion";

const products = [
  {
    title: "Beverage Cans",
    subtitle: "Aluminium & Tinplate",
    desc: "Largest supplier of beverage cans in South Africa and Angola. High-speed lines producing 330ml, 440ml and 500ml formats for leading carbonated soft drink and beer brands.",
    image: "https://images.pexels.com/photos/5437301/pexels-photo-5437301.jpeg?auto=compress&cs=tinysrgb&w=900",
    tag: "Flagship Product",
    highlights: ["330ml · 440ml · 500ml", "Aluminium & Tinplate", "Custom Printing Available"],
  },
  {
    title: "Aerosol Cans",
    subtitle: "Aluminium Monobloc",
    desc: "Precision-engineered aluminium monobloc aerosol cans for personal care, household and industrial applications. Consistent wall thickness, pressure integrity and finish quality.",
    image: "https://images.pexels.com/photos/3945651/pexels-photo-3945651.jpeg?auto=compress&cs=tinysrgb&w=900",
    tag: "Specialist Range",
    highlights: ["Personal Care", "Household & Industrial", "Monobloc Aluminium"],
  },
  {
    title: "Tinplate Cans",
    subtitle: "Two-Piece Steel",
    desc: "Two-piece tinplate cans for food, paint, and specialty markets. Engineered for structural integrity, barrier properties, and printability at high volumes.",
    image: "https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg?auto=compress&cs=tinysrgb&w=900",
    tag: "Diversified Markets",
    highlights: ["Food & Paint", "Two-Piece Innovation", "Specialty Sizes"],
  },
  {
    title: "CanStudio™",
    subtitle: "Innovation & Concepting",
    desc: "Our in-house innovation programme for early-stage format exploration. Virtual mockups, small pilot runs, and engineering analysis before committing to full tooling — reducing risk and time-to-market.",
    image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=900",
    tag: "Innovation",
    highlights: ["Virtual Mockups", "Pilot Runs", "Format Exploration"],
  },
];

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-white dark:bg-dark-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <span className="section-tag mb-4">Our Products</span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-brand dark:text-dark-text leading-tight md:text-5xl">
            Precision Packaging, Every Format
          </h2>
          <p className="mt-4 text-lg font-medium leading-relaxed text-brand-steel dark:text-dark-muted">
            From beverage and aerosol to tinplate and specialty cans — we manufacture to the highest standards for the most demanding brands.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group glass-card overflow-hidden hover:shadow-glass transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/70 to-transparent" />
                <span className="absolute top-4 left-4 rounded-full bg-brand-accent/90 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
                  {p.tag}
                </span>
              </div>
              <div className="p-6">
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand-accent mb-1">{p.subtitle}</p>
                <h3 className="text-xl font-black text-brand dark:text-dark-text mb-3">{p.title}</h3>
                <p className="text-[14px] font-medium leading-relaxed text-brand-steel dark:text-dark-muted mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.highlights.map((h) => (
                    <span key={h} className="rounded-full bg-surface-200 dark:bg-dark-border px-3 py-1 text-[11px] font-semibold text-brand dark:text-dark-text">
                      {h}
                    </span>
                  ))}
                </div>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent hover:gap-3 transition-all">
                  Enquire Now <ArrowRight />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
