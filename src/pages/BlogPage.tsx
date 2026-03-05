import { useState } from "react";
import { motion } from "framer-motion";

const posts = [
    {
        id: 1,
        category: "Industry Insights",
        date: "March 2025",
        title: "The Growing Appetite for Beverage Cans in Sub-Saharan Africa",
        excerpt: "Rising urbanisation, changing consumer habits, and the sustainability credentials of aluminium cans are driving strong structural growth across the African beverages market.",
        image: "https://images.pexels.com/photos/5437301/pexels-photo-5437301.jpeg?auto=compress&cs=tinysrgb&w=900",
        readTime: "5 min read",
        featured: true,
    },
    {
        id: 2,
        category: "Sustainability",
        date: "February 2025",
        title: "Why Aluminium Is the Most Sustainable Beverage Packaging",
        excerpt: "Unlike plastic, aluminium can be recycled infinitely without loss of quality. We explore the lifecycle data that makes it the circular economy's preferred packaging material.",
        image: "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=900",
        readTime: "4 min read",
        featured: false,
    },
    {
        id: 3,
        category: "Innovation",
        date: "February 2025",
        title: "Introducing CanStudio™: From Brief to Prototype in Weeks",
        excerpt: "Our in-house innovation programme allows brands to explore new formats, test aesthetics and validate specifications before committing to full tooling investment.",
        image: "https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=900",
        readTime: "3 min read",
        featured: false,
    },
    {
        id: 4,
        category: "Markets",
        date: "January 2025",
        title: "Angola's Beverage Boom: How Local Manufacturing Changes Everything",
        excerpt: "As Angola's middle class grows and beverage brands invest, local manufacturing capacity becomes a strategic advantage — reducing lead times, costs, and import dependency.",
        image: "https://images.pexels.com/photos/4034873/pexels-photo-4034873.jpeg?auto=compress&cs=tinysrgb&w=900",
        readTime: "6 min read",
        featured: false,
    },
    {
        id: 5,
        category: "Company News",
        date: "December 2024",
        title: "Alucan Expands Luanda Facility to Meet Regional Demand",
        excerpt: "We are pleased to announce a significant capital investment in our Luanda operations, adding a third beverage can line and increasing annual capacity by 80 million units.",
        image: "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=900",
        readTime: "3 min read",
        featured: false,
    },
    {
        id: 6,
        category: "Industry Insights",
        date: "November 2024",
        title: "Lightweighting: How We're Reducing Material Without Compromising Quality",
        excerpt: "Continuous gauge reduction programmes save materials, cut transport weight and reduce emissions — all without touching the structural or consumer performance of our cans.",
        image: "https://images.pexels.com/photos/3738221/pexels-photo-3738221.jpeg?auto=compress&cs=tinysrgb&w=900",
        readTime: "5 min read",
        featured: false,
    },
];

const allCategories = ["All", ...Array.from(new Set(posts.map(p => p.category)))];

export function BlogPage() {
    const [active, setActive] = useState("All");
    const featured = posts.find(p => p.featured && (active === "All" || p.category === active));
    const rest = posts.filter(p => !p.featured || active !== "All").filter(p => active === "All" || p.category === active);

    return (
        <div>
            {/* Hero */}
            <section
                className="relative h-[340px] overflow-hidden flex items-end"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=1920')",
                    backgroundSize: "cover",
                    backgroundPosition: "center 30%",
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-brand/95 to-brand/50" />
                <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-14">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
                        <span className="section-tag mb-3">Insights &amp; News</span>
                        <h1 className="mt-3 text-4xl font-black text-white md:text-6xl">Blog</h1>
                        <p className="mt-3 text-lg text-white/70 max-w-xl">Industry insights, company news, innovation updates and sustainability perspectives from the Alucan team.</p>
                    </motion.div>
                </div>
            </section>

            {/* Cat filter */}
            <div className="sticky top-[66px] z-30 bg-white/90 dark:bg-dark-card/90 backdrop-blur border-b border-surface-300 dark:border-dark-border">
                <div className="mx-auto max-w-7xl px-6 flex gap-1 py-3 overflow-x-auto">
                    {allCategories.map(cat => (
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

            <section className="bg-surface-50 dark:bg-dark-bg py-20">
                <div className="mx-auto max-w-7xl px-6">
                    {/* Featured post */}
                    {featured && (
                        <motion.article
                            key={featured.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="glass-card overflow-hidden mb-12 grid md:grid-cols-2 group hover:shadow-glass cursor-pointer"
                        >
                            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                                <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-r from-brand/60 to-transparent" />
                                <span className="absolute top-4 left-4 rounded-full bg-brand-accent px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">Featured</span>
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-accent mb-2">{featured.category}</span>
                                <h2 className="text-2xl font-black text-brand dark:text-dark-text mb-4 leading-tight">{featured.title}</h2>
                                <p className="text-[14px] font-medium leading-relaxed text-brand-steel dark:text-dark-muted mb-6">{featured.excerpt}</p>
                                <div className="flex items-center gap-4 text-[12px] text-brand-steel">
                                    <span>{featured.date}</span>
                                    <span className="opacity-40">·</span>
                                    <span>{featured.readTime}</span>
                                </div>
                                <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-accent hover:gap-3 transition-all">
                                    Read Article →
                                </a>
                            </div>
                        </motion.article>
                    )}

                    {/* Grid */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {rest.map((post, i) => (
                            <motion.article
                                key={post.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                                className="glass-card overflow-hidden group hover:shadow-glass hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                            >
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand/60 to-transparent" />
                                    <span className="absolute top-4 left-4 rounded-full bg-brand-accent/80 backdrop-blur px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">{post.category}</span>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-3 text-[11px] text-brand-steel dark:text-dark-muted mb-3">
                                        <span>{post.date}</span>
                                        <span className="opacity-40">·</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="text-base font-black text-brand dark:text-dark-text mb-3 leading-snug">{post.title}</h3>
                                    <p className="text-[12px] font-medium leading-relaxed text-brand-steel dark:text-dark-muted mb-4">{post.excerpt}</p>
                                    <a href="#" className="inline-flex items-center gap-1.5 text-[13px] font-bold text-brand-accent hover:gap-2.5 transition-all">
                                        Read More →
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="bg-brand py-20">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="text-3xl font-black text-white mb-3">Stay In the Loop</h2>
                    <p className="text-brand-steel max-w-xl mx-auto mb-8">Get the latest industry insights, company news, and sustainability updates from Alucan delivered to your inbox.</p>
                    <form onSubmit={e => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 justify-center">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="flex-1 max-w-sm rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 backdrop-blur focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none"
                        />
                        <button type="submit" className="btn-primary whitespace-nowrap">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
