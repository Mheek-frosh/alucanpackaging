import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-soft transition-transform hover:scale-105 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] overflow-hidden rounded-[24px] border border-surface-300 bg-white shadow-glass"
          >
            <div className="bg-surface-50 p-4 border-b border-surface-300">
              <h3 className="font-semibold text-brand">Alucan Support</h3>
              <p className="text-xs text-gray-500">We typically reply in 5 minutes.</p>
            </div>
            <div className="flex flex-col gap-4 p-4 min-h-[200px] bg-white">
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-surface-200 px-4 py-3 text-sm text-brand-light">
                Hello! How can we help you today?
              </div>
            </div>
            <div className="p-4 border-t border-surface-300">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full bg-surface-100 border border-surface-300 rounded-full px-4 py-2 text-sm text-brand placeholder:text-gray-400 outline-none focus:border-brand-accent transition-colors"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

