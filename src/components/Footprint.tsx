import { motion } from "framer-motion";

const plants = [
  {
    country: "South Africa",
    city: "Johannesburg",
    badge: "Core Hub",
    badgeColor: "text-brand-accent2 bg-brand-accent2/10",
    desc: "Our primary manufacturing hub and headquarters. Home to our largest beverage can lines and the CanStudio™ innovation centre. Strategically located in South Africa's industrial heartland.",
    image: "https://images.pexels.com/photos/4034873/pexels-photo-4034873.jpeg?auto=compress&cs=tinysrgb&w=900",
    facts: ["Primary beverage can plant", "CanStudio™ Innovation Centre", "Regional distribution hub"],
  },
  {
    country: "Angola",
    city: "Luanda",
    badge: "Growth Market",
    badgeColor: "text-brand-accent bg-brand-accent/10",
    desc: "Our strategic presence serving Central Africa's fast-growing beverage market. Built for scale — positioned to capture growing demand from regional brands and multinationals entering Angola.",
    image: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=900",
    facts: ["Beverage can facility", "Specialist packaging lines", "West African distribution network"],
  },
];

const logistics = [
  { icon: "🚛", title: "Integrated Logistics", desc: "End-to-end supply chain management from manufacturing to customer doorstep." },
  { icon: "📦", title: "Flexible Volumes", desc: "From pilot quantities to full-scale multi-million unit campaigns." },
  { icon: "📋", title: "Quality Assurance", desc: "ISO-aligned quality management across all production and dispatch operations." },
];

export function Footprint() {
  return (
    <section id="footprint" className="bg-white dark:bg-dark-card py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <span className="section-tag mb-4">Our Footprint</span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-brand dark:text-dark-text md:text-5xl">
            Manufacturing Across Africa
          </h2>
          <p className="mt-4 text-lg font-medium text-brand-steel dark:text-dark-muted">
            Two world-class plants, one shared standard of excellence — serving customers from Cape Town to Luanda.
          </p>
        </motion.div>

        {/* Plant cards */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          {plants.map((plant, i) => (
            <motion.div
              key={plant.country}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={plant.image}
                  alt={plant.country}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">{plant.city}</p>
                  <h3 className="text-2xl font-black text-white">{plant.country}</h3>
                </div>
              </div>
              <div className="p-6">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-3 ${plant.badgeColor}`}>
                  {plant.badge}
                </span>
                <p className="text-[14px] font-medium leading-relaxed text-brand-steel dark:text-dark-muted mb-4">{plant.desc}</p>
                <ul className="space-y-2">
                  {plant.facts.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[13px] text-brand dark:text-dark-text font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logistics strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid gap-6 md:grid-cols-3"
        >
          {logistics.map((l) => (
            <div key={l.title} className="glass-card p-6 text-center hover:shadow-glow transition-shadow">
              <span className="text-3xl block mb-3">{l.icon}</span>
              <h4 className="text-base font-bold text-brand dark:text-dark-text mb-2">{l.title}</h4>
              <p className="text-[13px] text-brand-steel dark:text-dark-muted">{l.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
