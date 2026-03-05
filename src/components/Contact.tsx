import { motion } from "framer-motion";
import { FormEvent } from "react";

const inquiryTypes = ["Beverage Cans", "Aerosol Cans", "Tinplate Cans", "CanStudio™ Innovation", "General Enquiry", "Investor Relations"];

const contactDetails = [
  { icon: "📍", label: "Head Office", value: "Johannesburg, South Africa" },
  { icon: "📞", label: "Telephone", value: "+27 (0)11 000 0000" },
  { icon: "✉️", label: "Email", value: "info@alucanpackaging.com" },
  { icon: "📈", label: "JSE Listing", value: "Ordinary shares listed since 1971" },
];

export function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { e.preventDefault(); };

  return (
    <section id="contact" className="bg-surface-100 dark:bg-dark-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <span className="section-tag mb-4">Get In Touch</span>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-brand dark:text-dark-text md:text-5xl">
            Start a Conversation
          </h2>
          <p className="mt-4 text-lg font-medium text-brand-steel dark:text-dark-muted">
            Whether you're exploring new formats, renegotiating supply or investing — our team is ready.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5 lg:items-start">

          {/* Left: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            {contactDetails.map((d) => (
              <div key={d.label} className="glass-card p-5 flex items-start gap-4">
                <span className="text-2xl">{d.icon}</span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-accent">{d.label}</p>
                  <p className="text-[14px] font-semibold text-brand dark:text-dark-text mt-0.5">{d.value}</p>
                </div>
              </div>
            ))}

            {/* Google Maps embed */}
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-glass border border-surface-300 dark:border-dark-border">
              <iframe
                title="Alucan Packaging – Johannesburg, South Africa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57294.73540626798!2d27.955494753613273!3d-26.20534395839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1709640000000!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Branded chip overlay */}
              <div className="absolute bottom-3 left-3 z-10 glass-card border-white/20 bg-white/90 dark:bg-dark-card/90 backdrop-blur px-3 py-1.5 flex items-center gap-2 shadow-glass pointer-events-none">
                <span className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
                <p className="text-xs font-bold text-brand dark:text-dark-text">Johannesburg, South Africa</p>
              </div>
            </div>

          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 glass-card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-brand-steel dark:text-dark-muted mb-2">First Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-surface-300 dark:border-dark-border bg-surface-50 dark:bg-dark-bg px-4 py-3 text-sm text-brand dark:text-dark-text placeholder:text-brand-steel/50 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest text-brand-steel dark:text-dark-muted mb-2">Last Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full rounded-xl border border-surface-300 dark:border-dark-border bg-surface-50 dark:bg-dark-bg px-4 py-3 text-sm text-brand dark:text-dark-text placeholder:text-brand-steel/50 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-brand-steel dark:text-dark-muted mb-2">Company *</label>
                <input
                  type="text"
                  required
                  className="w-full rounded-xl border border-surface-300 dark:border-dark-border bg-surface-50 dark:bg-dark-bg px-4 py-3 text-sm text-brand dark:text-dark-text placeholder:text-brand-steel/50 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
                  placeholder="Company Ltd."
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-brand-steel dark:text-dark-muted mb-2">Email *</label>
                <input
                  type="email"
                  required
                  className="w-full rounded-xl border border-surface-300 dark:border-dark-border bg-surface-50 dark:bg-dark-bg px-4 py-3 text-sm text-brand dark:text-dark-text placeholder:text-brand-steel/50 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-brand-steel dark:text-dark-muted mb-2">Area of Enquiry</label>
                <select className="w-full rounded-xl border border-surface-300 dark:border-dark-border bg-surface-50 dark:bg-dark-bg px-4 py-3 text-sm text-brand dark:text-dark-text focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors">
                  {inquiryTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-widest text-brand-steel dark:text-dark-muted mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full resize-none rounded-xl border border-surface-300 dark:border-dark-border bg-surface-50 dark:bg-dark-bg px-4 py-3 text-sm text-brand dark:text-dark-text placeholder:text-brand-steel/50 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors"
                  placeholder="Tell us about your volumes, timelines and formats..."
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center py-4 text-base">
                Send Enquiry →
              </button>
              <p className="text-center text-[11px] text-brand-steel">
                We typically respond within 1 business day.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
