import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Beverage", "Aerosol", "Tinplate", "Innovation"];

const products = [
    {
        id: 1,
        category: "Beverage",
        name: "Standard Beverage Can",
        subtitle: "330ml · Aluminium",
        desc: "Our flagship beverage can — the workhorse of the industry. High-speed produced in aluminium with consistent wall integrity, printability, and pressure performance for carbonated soft drinks and beers.",
        image: "https://images.pexels.com/photos/5437301/pexels-photo-5437301.jpeg?auto=compress&cs=tinysrgb&w=900",
        specs: ["330ml standard format", "Aluminium body & lid", "Up to 9-colour print", "3.8 bar pressure rating"],
        tag: "Best Seller",
    },
    {
        id: 2,
        category: "Beverage",
        name: "Sleek Beverage Can",
        subtitle: "250ml · Aluminium",
        desc: "The sleek can format — popular for premium beverages, energy drinks and RTD cocktails. Narrower diameter allows brands to create a distinctive presence on shelf.",
        image: "https://images.pexels.com/photos/5437543/pexels-photo-5437543.jpeg?auto=compress&cs=tinysrgb&w=900",
        specs: ["250ml sleek format", "Aluminium", "Premium aesthetics", "Energy & RTD ready"],
        tag: "Premium Format",
    },
    {
        id: 3,
        category: "Beverage",
        name: "Large Format Can",
        subtitle: "440ml–500ml · Aluminium",
        desc: "The go-to format for beer and larger carbonated beverages. Proven performance in the African market with high shelf visibility and excellent liquid protection.",
        image: "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=900",
        specs: ["440ml or 500ml", "Aluminium or Tinplate", "Beer / CSD optimised", "Strong shelf presence"],
        tag: "High Volume",
    },
    {
        id: 4,
        category: "Aerosol",
        name: "Monobloc Aerosol Can",
        subtitle: "Personal Care · Aluminium",
        desc: "Precision-engineered aluminium monobloc aerosol cans for deodorants, hair care, and body sprays. Consistent wall thickness, excellent corrosion resistance, and printable surface for premium branding.",
        image: "https://images.pexels.com/photos/3945651/pexels-photo-3945651.jpeg?auto=compress&cs=tinysrgb&w=900",
        specs: ["150ml – 300ml range", "Monobloc aluminium", "Personal care grade", "High print fidelity"],
        tag: "Personal Care",
    },
    {
        id: 5,
        category: "Aerosol",
        name: "Industrial Aerosol",
        subtitle: "Technical · Aluminium",
        desc: "Engineered for industrial and household aerosol applications — paints, lubricants, and technical sprays. Robust construction, pressure-safe and efficiently recyclable.",
        image: "https://images.pexels.com/photos/4691789/pexels-photo-4691789.jpeg?auto=compress&cs=tinysrgb&w=900",
        specs: ["300ml – 600ml", "Heavy-duty aluminium", "Industrial grade lining", "Technical spray ready"],
        tag: "Industrial",
    },
    {
        id: 6,
        category: "Tinplate",
        name: "Two-Piece Tinplate Can",
        subtitle: "Food & General · Tinplate",
        desc: "Two-piece tinplate cans for food preservation and general packaging. Excellent barrier properties, strong structural performance, and proven in food-grade environments.",
        image: "https://images.pexels.com/photos/4199098/pexels-photo-4199098.jpeg?auto=compress&cs=tinysrgb&w=900",
        specs: ["Multiple sizes available", "Food-grade tin coating", "BPA-free lining options", "ISO-certified"],
        tag: "Food Grade",
    },
    {
        id: 7,
        category: "Tinplate",
        name: "Paint & Specialty Can",
        subtitle: "Decorative & Industrial · Tinplate",
        desc: "Steel tinplate cans for paint, varnish and specialty chemical markets. Robust construction, airtight sealing, and chemical-resistant interior coatings.",
        image: "https://images.pexels.com/photos/5707603/pexels-photo-5707603.jpeg?auto=compress&cs=tinysrgb&w=900",
        specs: ["0.5L – 5L sizes", "Tinplate construction", "Chemical-resistant lining", "Re-sealable lid options"],
        tag: "Specialty",
    },
    {
        id: 8,
        category: "Innovation",
        name: "CanStudio™",
        subtitle: "Innovation Programme",
        desc: "Our proprietary innovation programme for early-stage format exploration. Virtual mockups, small pilot runs, and engineering analysis before committing to full tooling — reducing risk, cost and time-to-market.",
        image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=900",
        specs: ["Virtual 3D mockups", "Pilot batch capability", "Format & structure analysis", "Brand team workshops"],
        tag: "CanStudio™",
    },
];

export function ProductsPage() {
    const [active, setActive] = useState("All");
    const filtered = active === "All" ? products : products.filter(p => p.category === active);

    return (
        <div>
            {/* Hero banner */}
            <section
                className="relative h-[380px] overflow-hidden flex items-end"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/5437301/pexels-photo-5437301.jpeg?auto=compress&cs=tinysrgb&w=1920')",
                    backgroundSize: "cover",
                    backgroundPosition: "center 40%",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand/95 to-brand/50" />
                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                        <span className="section-tag mb-3">Our Range</span>
                        <h1 className="mt-3 text-4xl font-black text-white md:text-6xl">Products</h1>
                        <p className="mt-3 text-lg text-white/70 max-w-xl">Every format, every market. Precision-engineered metals packaging for Africa's leading brands.</p>
                    </motion.div>
                </div>
            </section>

            {/* Filter tabs */}
            <div className="sticky top-[66px] z-30 bg-white/90 dark:bg-dark-card/90 backdrop-blur border-b border-surface-300 dark:border-dark-border">
                <div className="mx-auto max-w-7xl px-6 flex gap-1 py-3 overflow-x-auto">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActive(cat)}
                            className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition-all ${active === cat ? "bg-brand-accent text-white shadow-glow" : "text-brand-steel dark:text-dark-muted hover:bg-surface-200 dark:hover:bg-dark-border/30"}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Products grid */}
            <section className="bg-surface-50 dark:bg-dark-bg py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {filtered.map((p, i) => (
                            <motion.article
                                key={p.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                                className="glass-card overflow-hidden group hover:shadow-glass hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand/70 to-transparent" />
                                    <span className="absolute top-4 left-4 rounded-full bg-brand-accent/90 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">{p.tag}</span>
                                    <span className="absolute top-4 right-4 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-[11px] font-semibold text-white">{p.category}</span>
                                </div>
                                <div className="p-6">
                                    <p className="text-[11px] font-bold uppercase tracking-widest text-brand-accent mb-1">{p.subtitle}</p>
                                    <h3 className="text-xl font-black text-brand dark:text-dark-text mb-3">{p.name}</h3>
                                    <p className="text-[13px] font-medium leading-relaxed text-brand-steel dark:text-dark-muted mb-5">{p.desc}</p>
                                    {/* Specs */}
                                    <div className="grid grid-cols-2 gap-2 mb-5">
                                        {p.specs.map(s => (
                                            <div key={s} className="flex items-center gap-1.5 text-[12px] font-medium text-brand dark:text-dark-text">
                                                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                                                {s}
                                            </div>
                                        ))}
                                    </div>
                                    <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-brand-accent hover:gap-3 transition-all duration-200">
                                        Enquire About This Product →
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-brand py-20">
                <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2 md:items-center">
                    <div>
                        <h2 className="text-3xl font-black text-white mb-3">Need a Custom Format?</h2>
                        <p className="text-brand-steel max-w-lg">Our CanStudio™ team specialises in early-stage format exploration — virtual mockups, pilot runs, and engineering analysis to bring your ideas to life before full tooling.</p>
                    </div>
                    <div className="flex flex-wrap gap-4 md:justify-end">
                        <a href="#contact" className="btn-primary">Start a CanStudio™ Brief</a>
                        <a href="#contact" className="btn-outline border-white/30 text-white hover:bg-white hover:text-brand">General Enquiry</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
