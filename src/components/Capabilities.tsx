import { motion } from "framer-motion";

const items = [
  {
    title: "CanStudio™ Concepts",
    subtitle: "Design & engineering",
    body: "Rapid concepting for new SKUs and formats – from slim cans to specialty shapes – using virtual mockups and small pilot runs to de-risk decisions before you lock in tooling.",
    image: "https://images.pexels.com/photos/15166223/pexels-photo-15166223.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "CanWorks™ Production",
    subtitle: "Production ready",
    body: "High-speed, tightly controlled production that keeps registration, colour and specifications consistent across large campaigns and multi-market launches.",
    image: "https://images.pexels.com/photos/4034873/pexels-photo-4034873.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "CanLoop™ Lifecycle",
    subtitle: "Continuous improvement",
    body: "Lightweighting, recyclability and line performance tracked over time – giving your teams a clear view of how each format behaves in the real world.",
    image: "https://images.pexels.com/photos/12693821/pexels-photo-12693821.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="bg-surface-100 py-32"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-20 text-center">
          <h2 className="mb-6 font-display text-4xl font-bold tracking-tight text-brand md:text-5xl">
            Focused packaging capabilities.
          </h2>
          <p className="mx-auto max-w-2xl text-[17px] font-medium leading-relaxed text-gray-500">
            Our plants in South Africa and Angola are configured around a simple idea: do a few things exceptionally well. This focus allows us to invest deeply in technology, quality and people.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-[32px] bg-white shadow-soft transition-all hover:shadow-glass hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 pr-6">
                  <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-white/80">
                    {item.subtitle}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="flex grow flex-col justify-between p-8">
                <p className="text-[15px] font-medium leading-relaxed text-gray-600 group-hover:text-brand-light transition-colors">
                  {item.body}
                </p>
                <div className="mt-8 flex items-center text-sm font-semibold text-brand-accent">
                  Learn more
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

