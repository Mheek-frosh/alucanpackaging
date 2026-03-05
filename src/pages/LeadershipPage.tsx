import { motion } from "framer-motion";

const leaders = [
    {
        name: "Sipho Nkosi",
        role: "Chief Executive Officer",
        bio: "Sipho brings over 25 years of leadership in manufacturing and packaging. He has led Alucan through strategic expansions into Angola and overseen significant capacity investments across both plants.",
        image: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=600",
        credentials: ["BCom (Hons) – University of Cape Town", "MBA – Wits Business School"],
        linkedin: "#",
    },
    {
        name: "Ayanda Dlamini",
        role: "Chief Financial Officer",
        bio: "Ayanda oversees the group's financial strategy, reporting and investor relations. With a background in listed-company finance, she brings rigour and transparency to our JSE obligations.",
        image: "https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=600",
        credentials: ["CA(SA)", "CFA Charterholder"],
        linkedin: "#",
    },
    {
        name: "Bernardo Silva",
        role: "Managing Director — Angola",
        bio: "Bernardo leads our growing Luanda operation, driving commercial partnerships and capacity expansion across Central and West Africa's beverage market.",
        image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=600",
        credentials: ["BEng (Industrial) – University of Pretoria", "Senior Packaging Executive – 18 yrs"],
        linkedin: "#",
    },
    {
        name: "Thandi Mokoena",
        role: "Chief Operating Officer",
        bio: "Thandi drives operational excellence across both plants, with a focus on lean manufacturing, quality systems and world-class service levels for our blue-chip customer base.",
        image: "https://images.pexels.com/photos/3760268/pexels-photo-3760268.jpeg?auto=compress&cs=tinysrgb&w=600",
        credentials: ["BEng (Mechanical)", "Six Sigma Black Belt"],
        linkedin: "#",
    },
    {
        name: "James Hartley",
        role: "Chief Commercial Officer",
        bio: "James leads our commercial and customer strategy — from new business development and key account management to CanStudio™ innovation projects with leading brands.",
        image: "https://images.pexels.com/photos/5538300/pexels-photo-5538300.jpeg?auto=compress&cs=tinysrgb&w=600",
        credentials: ["BSc Marketing & Management", "20+ years in FMCG packaging"],
        linkedin: "#",
    },
    {
        name: "Nomvula Khumalo",
        role: "Head of Sustainability & ESG",
        bio: "Nomvula leads Alucan's sustainability strategy, reporting and industry engagement — ensuring our ESG commitments meet JSE Listings Requirements and stakeholder expectations.",
        image: "https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=600",
        credentials: ["BSc Environmental Science", "MSc Sustainability Leadership – Cambridge"],
        linkedin: "#",
    },
];

const boardMembers = [
    { name: "Dr. Reginald Moyo", role: "Non-Executive Chairman" },
    { name: "Priya Govender", role: "Independent Non-Executive Director" },
    { name: "Kofi Mensah", role: "Independent Non-Executive Director" },
    { name: "Liesl van der Berg", role: "Non-Executive Director" },
];

export function LeadershipPage() {
    return (
        <div>
            {/* Hero */}
            <section
                className="relative h-[380px] overflow-hidden flex items-end"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=1920')",
                    backgroundSize: "cover",
                    backgroundPosition: "center 30%",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand/95 to-brand/50" />
                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                        <span className="section-tag mb-3">Our People</span>
                        <h1 className="mt-3 text-4xl font-black text-white md:text-6xl">Leadership Team</h1>
                        <p className="mt-3 text-lg text-white/70 max-w-xl">Experienced executives driving Africa's metals packaging industry forward with purpose and precision.</p>
                    </motion.div>
                </div>
            </section>

            {/* Executive Team */}
            <section className="bg-surface-50 dark:bg-dark-bg py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <span className="section-tag mb-4">Executive Management</span>
                        <h2 className="mt-4 text-4xl font-black text-brand dark:text-dark-text">Executive Committee</h2>
                        <p className="mt-3 text-brand-steel dark:text-dark-muted max-w-xl mx-auto">Seasoned professionals with decades of combined experience in metals packaging, listed-company management, and African markets.</p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {leaders.map((leader, i) => (
                            <motion.div
                                key={leader.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.8, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                                className="glass-card overflow-hidden group hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
                            >
                                {/* Photo */}
                                <div className="relative aspect-[3/2] overflow-hidden">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand/80 via-brand/10 to-transparent" />
                                    {/* Role badge */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-[11px] font-bold uppercase tracking-widest text-brand-accent">{leader.role}</p>
                                        <h3 className="text-lg font-black text-white">{leader.name}</h3>
                                    </div>
                                </div>
                                {/* Body */}
                                <div className="p-5 space-y-4">
                                    <p className="text-[13px] font-medium leading-relaxed text-brand-steel dark:text-dark-muted">{leader.bio}</p>
                                    <div className="space-y-1">
                                        {leader.credentials.map(c => (
                                            <span key={c} className="block text-[11px] font-semibold text-brand dark:text-dark-text opacity-70">· {c}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Board */}
            <section className="bg-brand py-20">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-14">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-accent mb-4">Board of Directors</span>
                        <h2 className="mt-4 text-3xl font-black text-white">Board of Directors</h2>
                        <p className="mt-3 text-brand-steel max-w-lg mx-auto">Our non-executive directors bring an independent perspective and broad expertise to oversee Alucan's strategy and governance.</p>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {boardMembers.map((b, i) => (
                            <motion.div key={b.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-center hover:bg-white/10 transition-colors">
                                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent/20 text-brand-accent font-black text-xl">
                                    {b.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                                </div>
                                <h4 className="font-bold text-white">{b.name}</h4>
                                <p className="text-xs text-brand-steel mt-1">{b.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
