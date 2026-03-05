import { motion } from "framer-motion";
import { FormEvent } from "react";

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-white py-16 md:py-20 dark:border-slate-800/70 dark:bg-slate-950/95"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-cyan-300">
              Contact
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl dark:text-slate-50">
              Let&apos;s build what&apos;s next in metals packaging.
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 md:text-[15px] dark:text-slate-300">
              Whether you are exploring new beverage formats, rethinking an
              existing pack or looking for a long-term strategic partner, our
              team is ready to help.
            </p>

            <div className="space-y-3 text-xs text-slate-700 md:text-[13px] dark:text-slate-200">
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                Commercial & customer enquiries
              </p>
              <p>Share a few details about your project and we&apos;ll respond
                with the right specialist team.</p>
              <div className="flex flex-wrap gap-4 pt-2 text-[11px] text-slate-600 dark:text-slate-300">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <a
                    href="mailto:info@alucanpackaging.com"
                    className="text-[11px] text-brand-accent hover:underline dark:text-sky-300"
                  >
                    info@alucanpackaging.com
                  </a>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    Phone
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300">
                    +27 (0)11 000 0000
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-soft dark:border-slate-800/80 dark:bg-slate-900/80"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-16 top-0 h-40 w-40 rounded-full bg-sky-400/25 blur-3xl" />
              <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl" />
            </div>
            <form
              className="relative space-y-4 text-xs text-slate-700 dark:text-slate-200"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-[12px] text-slate-900 outline-none ring-0 transition focus:border-brand-accent focus:bg-white dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-100 dark:focus:border-sky-400 dark:focus:bg-slate-900"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="company"
                    className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-[12px] text-slate-900 outline-none ring-0 transition focus:border-brand-accent focus:bg-white dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-100 dark:focus:border-sky-400 dark:focus:bg-slate-900"
                    placeholder="Your organisation"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-300"
                >
                  Work email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-[12px] text-slate-100 outline-none ring-0 transition focus:border-sky-400 focus:bg-slate-900"
                  placeholder="you@company.com"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-300"
                >
                  Project overview
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2 text-[12px] text-slate-900 outline-none ring-0 transition focus:border-brand-accent focus:bg-white dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-100 dark:focus:border-sky-400 dark:focus:bg-slate-900"
                  placeholder="Share timelines, formats, volumes or any other details you can."
                />
              </div>

              <button
                type="submit"
                className="mt-1 w-full rounded-full bg-brand-accent px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-950 shadow-soft transition hover:bg-amber-400 dark:bg-sky-400 dark:hover:bg-cyan-400"
              >
                Send enquiry
              </button>
              <p className="pt-1 text-[10px] text-slate-400">
                This form is a visual prototype only – hook it up to your email
                or CRM to go live.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

