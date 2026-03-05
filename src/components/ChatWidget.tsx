import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const initialMessages = [
  {
    id: 1,
    from: "bot" as const,
    text: "Hi, I’m the Alucan assistant. How can we help with your metals packaging today?"
  }
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages] = useState(initialMessages);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="fixed bottom-5 right-4 z-40 flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-100 shadow-soft backdrop-blur-md hover:border-sky-400 hover:text-sky-200 md:bottom-6 md:right-6"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 text-slate-950">
          AI
        </span>
        <span className="hidden md:inline">Chat with us</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 right-4 z-40 w-[90vw] max-w-sm overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/90 shadow-soft backdrop-blur-xl md:bottom-24 md:right-6"
          >
            <div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-slate-900/80 px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-200">
                    Alucan assistant
                  </p>
                  <p className="text-[10px] text-slate-400">
                    Ask about capabilities, lead times or sustainability.
                  </p>
                </div>
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.35)]" />
              </div>
            </div>

            <div className="flex max-h-72 flex-col gap-2 overflow-y-auto bg-gradient-to-b from-slate-900/70 to-slate-950/90 px-4 py-3">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="flex items-start gap-2 text-[11px] text-slate-100"
                >
                  <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[10px] font-semibold text-slate-100">
                    A
                  </div>
                  <p className="rounded-2xl bg-slate-800/80 px-3 py-2 text-[11px] text-slate-100 ring-1 ring-slate-700/80">
                    {message.text}
                  </p>
                </div>
              ))}
              <p className="pt-1 text-[10px] text-slate-500">
                This is a design prototype – connect it to your preferred chat or
                support platform to make it fully interactive.
              </p>
            </div>

            <div className="border-t border-slate-800/80 bg-slate-950/80 px-3 py-2.5">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-800/80 bg-slate-900/80 px-3 py-1.5 text-[11px] text-slate-400">
                <span className="truncate">
                  Type your message here to customise this flow.
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

