import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "What products does Alucan supply?", a: "We supply aluminium beverage cans, aerosol cans, and tinplate cans across the food, beverage, personal care and industrial markets." },
  { q: "Where are you located?", a: "We operate manufacturing facilities in South Africa (Johannesburg) and Angola (Luanda), serving customers across the region." },
  { q: "Can I request a custom format?", a: "Yes — our CanStudio™ programme allows early-stage exploration of new SKUs, formats, and artwork before full tooling commitment." },
  { q: "How do I get a quote?", a: "Use our contact form above or email us directly at info@alucanpackaging.com. We respond within 1 business day." },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent text-white shadow-glow transition-all hover:scale-110 active:scale-95"
        aria-label="Help"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.span>
          ) : (
            <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] overflow-hidden rounded-2xl border border-surface-300 dark:border-dark-border bg-white dark:bg-dark-card shadow-glass"
          >
            {/* Header */}
            <div className="bg-brand px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent/20">
                  <span className="text-lg font-black text-brand-accent">A</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Alucan Support</p>
                  <p className="text-[11px] text-white/60 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                    Typically replies in minutes
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="divide-y divide-surface-300 dark:divide-dark-border max-h-72 overflow-y-auto">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-brand dark:text-dark-text hover:bg-surface-100 dark:hover:bg-dark-border/20 transition-colors"
                  >
                    {faq.q}
                    <svg className={`h-4 w-4 shrink-0 text-brand-steel transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden text-[13px] font-medium text-brand-steel dark:text-dark-muted px-5 pb-4"
                      >
                        {faq.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="border-t border-surface-300 dark:border-dark-border p-4">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full justify-center">
                Send us a Message
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
