import { motion } from "framer-motion";
import { useRouter } from "../App";

const CompanyStats = [
    { value: "1968", label: "Year Established" },
    { value: "55+", label: "Years JSE Listed" },
    { value: "2", label: "Countries" },
    { value: "300M+", label: "Annual Can Capacity" },
];

const values = [
    { icon: "🎯", title: "Customer First", desc: "Long-term partnerships, reliable supply and responsive technical teams." },
    { icon: "⚙️", title: "Engineering Excellence", desc: "World-class manufacturing standards across every plant and every line." },
    { icon: "♻️", title: "Sustainability", desc: "Circular design principles embedded in every can we make." },
    { icon: "📈", title: "Trusted Governance", desc: "JSE-listed and held to the highest standards of corporate governance." },
];

const jseHighlights = [
    { label: "Exchange", value: "Johannesburg Stock Exchange (JSE)" },
    { label: "Listing Date", value: "1971" },
    { label: "Sector", value: "Industrials – Packaging" },
    { label: "Shares", value: "Ordinary shares publicly offered" },
    { label: "Reporting", value: "Annual integrated report + interim results" },
];

const sustainabilityPillars = [
    { icon: "🌱", title: "Circular Economy", desc: "Aluminium and tinplate are the most recycled packaging materials on earth — we design every can with that in mind." },
    { icon: "⚡", title: "Energy Efficiency", desc: "Ongoing programmes to reduce energy intensity per unit across all production lines." },
    { icon: "💧", title: "Water Stewardship", desc: "Water reduction targets and monitoring integrated into our operational KPIs." },
    { icon: "🤝", title: "Community Impact", desc: "Local employment, enterprise development and skills training in South Africa and Angola." },
];

export function CompanyPage() {
    const { navigate } = useRouter();

    return (
        <div className="pb-0">
            {/* ---- Page Hero ---- */}
            <section
                className="relative h-[420px] overflow-hidden flex items-end"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=1920')",
                    backgroundSize: "cover",
                    backgroundPosition: "center 40%",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand/95 to-brand/50" />
                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                        <span className="section-tag mb-3">Company</span>
                        <h1 className="mt-3 text-4xl font-black text-white md:text-6xl leading-tight">
                            Who We Are
                        </h1>
                        <p className="mt-3 text-lg text-white/70 max-w-xl">
                            Africa's foremost metals packaging group. Established 1968. JSE listed since 1971.
                        </p>
                    </motion.div>
                </div>
                {/* Section jump nav */}
                <div className="absolute bottom-0 left-0 right-0 z-10">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="flex gap-0 border-t border-white/10">
                            {[["About Alucan", "#about-alucan"], ["Leadership", "leadership"], ["JSE Listing", "#jse"], ["Sustainability", "#sustainability-co"]].map(([label, target]) => (
                                <a
                                    key={label}
                                    href={!target.startsWith("#") ? undefined : target}
                                    onClick={!target.startsWith("#") ? () => navigate("leadership") : undefined}
                                    className="px-5 py-3 text-sm font-semibold text-white/60 hover:text-white hover:bg-white/10 transition-colors border-r border-white/10 last:border-r-0 cursor-pointer"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ---- About Alucan ---- */}
            <section id="about-alucan" className="bg-surface-50 dark:bg-dark-bg py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
                        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
                            <span className="section-tag mb-4">About Alucan</span>
                            <h2 className="mt-4 text-4xl font-black text-brand dark:text-dark-text tracking-tight md:text-5xl">
                                Africa's Leading Metals Packaging Group
                            </h2>
                            <p className="mt-5 text-[15px] font-medium leading-relaxed text-brand-steel dark:text-dark-muted">
                                Alucan Packaging is a focused metals packaging business with deep expertise in aluminium and tinplate cans. We are a publicly owned entity whose shares have been listed on the Johannesburg Stock Exchange for over 55 years.
                            </p>
                            <p className="mt-4 text-[15px] font-medium leading-relaxed text-brand-steel dark:text-dark-muted">
                                With manufacturing facilities in South Africa and Angola, we supply trusted products and excellent service to a broad range of customers — from beverage majors to household brands and specialty industrial customers.
                            </p>
                            {/* Stats row */}
                            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                                {CompanyStats.map(s => (
                                    <div key={s.label} className="glass-card p-4 text-center">
                                        <span className="text-2xl font-black text-brand-accent block">{s.value}</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-steel">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="relative rounded-3xl overflow-hidden shadow-glass">
                            <img
                                src="https://images.pexels.com/photos/4034873/pexels-photo-4034873.jpeg?auto=compress&cs=tinysrgb&w=900"
                                alt="Alucan facility"
                                className="aspect-[4/3] w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand/60 to-transparent" />
                        </motion.div>
                    </div>

                    {/* Values */}
                    <div className="mt-20">
                        <h3 className="text-2xl font-black text-brand dark:text-dark-text mb-8 text-center">Our Values</h3>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {values.map((v, i) => (
                                <motion.div
                                    key={v.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                    className="glass-card p-6 hover:shadow-glow transition-shadow"
                                >
                                    <span className="text-3xl block mb-3">{v.icon}</span>
                                    <h4 className="text-sm font-bold text-brand dark:text-dark-text mb-2">{v.title}</h4>
                                    <p className="text-[12px] text-brand-steel dark:text-dark-muted leading-relaxed">{v.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ---- Leadership Teaser ---- */}
            <section className="bg-brand py-20">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <h2 className="text-3xl font-black text-white mb-4">Meet Our Leadership Team</h2>
                    <p className="text-brand-steel max-w-xl mx-auto mb-8">
                        Experienced executives driving Africa's metals packaging industry forward.
                    </p>
                    <button onClick={() => navigate("leadership")} className="btn-primary">
                        View Full Leadership Team →
                    </button>
                </div>
            </section>

            {/* ---- JSE Listing ---- */}
            <section id="jse" className="bg-surface-50 dark:bg-dark-bg py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
                        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="relative rounded-3xl overflow-hidden shadow-glass">
                            <img
                                src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=900"
                                alt="JSE listing"
                                className="aspect-[4/3] w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand/70 to-transparent" />
                            <div className="absolute bottom-6 left-6">
                                <span className="text-xs font-bold uppercase tracking-widest text-brand-accent">JSE Listed · 1971</span>
                                <p className="text-white font-black text-xl mt-1">Public Ownership, Proven Accountability</p>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
                            <span className="section-tag mb-4">JSE Listing</span>
                            <h2 className="mt-4 text-4xl font-black text-brand dark:text-dark-text tracking-tight">
                                55+ Years of Market Trust
                            </h2>
                            <p className="mt-5 text-[15px] font-medium leading-relaxed text-brand-steel dark:text-dark-muted">
                                Our shares have been listed on the Johannesburg Stock Exchange since 1971, making us one of Africa's longest-standing publicly listed packaging groups. Our listing reflects the trust of shareholders and a commitment to transparent governance.
                            </p>
                            <div className="mt-8 space-y-3">
                                {jseHighlights.map(h => (
                                    <div key={h.label} className="flex items-center justify-between gap-4 py-3 border-b border-surface-300 dark:border-dark-border">
                                        <span className="text-xs font-bold uppercase tracking-widest text-brand-steel dark:text-dark-muted">{h.label}</span>
                                        <span className="text-sm font-semibold text-brand dark:text-dark-text">{h.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 flex gap-4">
                                <a href="#contact" className="btn-primary">Investor Contact</a>
                                <a href="#" className="btn-outline">Annual Report</a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ---- Sustainability ---- */}
            <section id="sustainability-co" className="bg-white dark:bg-dark-card py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="section-tag mb-4">Sustainability</span>
                        <h2 className="mt-4 text-4xl font-black text-brand dark:text-dark-text md:text-5xl">Packaging for a Circular Future</h2>
                        <p className="mt-4 text-lg text-brand-steel dark:text-dark-muted">Aluminium and tinplate are infinitely recyclable. We build our sustainability commitments into every decision — from design through dispatch.</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
                        {sustainabilityPillars.map((p, i) => (
                            <motion.div key={p.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="glass-card p-6 hover:shadow-glow transition-shadow text-center">
                                <span className="text-4xl block mb-4">{p.icon}</span>
                                <h4 className="text-sm font-bold text-brand dark:text-dark-text mb-2">{p.title}</h4>
                                <p className="text-[12px] text-brand-steel dark:text-dark-muted leading-relaxed">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative rounded-3xl overflow-hidden shadow-glass">
                        <img
                            src="https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=1400"
                            alt="Sustainability"
                            className="h-72 w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-brand/90 to-brand/40 flex items-center">
                            <div className="px-12 max-w-2xl">
                                <p className="text-3xl font-black text-white leading-snug">"Every can is designed with its next life in mind."</p>
                                <p className="mt-3 text-brand-steel text-sm">Alucan Sustainability Commitment, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
