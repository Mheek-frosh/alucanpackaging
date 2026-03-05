import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="bg-white py-32">
      <div className="mx-auto max-w-[800px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-brand md:text-5xl">
            Start a conversation.
          </h2>
          <p className="text-lg font-medium text-gray-500">
            Tell us about your next project.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gray-400">Name</label>
              <input
                type="text"
                className="w-full border-b border-surface-300 bg-transparent py-3 text-lg font-medium text-brand outline-none transition-colors focus:border-brand-accent placeholder:text-gray-300"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gray-400">Company</label>
              <input
                type="text"
                className="w-full border-b border-surface-300 bg-transparent py-3 text-lg font-medium text-brand outline-none transition-colors focus:border-brand-accent placeholder:text-gray-300"
                placeholder="Company Ltd"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gray-400">Email</label>
            <input
              type="email"
              className="w-full border-b border-surface-300 bg-transparent py-3 text-lg font-medium text-brand outline-none transition-colors focus:border-brand-accent placeholder:text-gray-300"
              placeholder="hello@example.com"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-gray-400">Message</label>
            <textarea
              rows={3}
              className="w-full resize-none border-b border-surface-300 bg-transparent py-3 text-lg font-medium text-brand outline-none transition-colors focus:border-brand-accent placeholder:text-gray-300"
              placeholder="Tell us about volumes, timelines, formats..."
            />
          </div>
          <button
            type="submit"
            className="mt-8 flex w-full items-center justify-center rounded-full bg-brand py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Submit Enquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
}

