import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KONAMI_CODE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

export default function Konami() {
  const [, setInput] = useState<string[]>([]);
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setInput((prev) => {
        const nextInput = [...prev, e.key].slice(-10);
        if (nextInput.join('') === KONAMI_CODE.join('')) {
          setUnlocked(true);
        }
        return nextInput;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {unlocked && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
        >
          <div className="text-center p-12 glass rounded-3xl border border-primary/40 max-w-2xl mx-auto shadow-[0_0_100px_rgba(255,107,53,0.3)]">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-primary animate-pulse">
              You found it! 🎮
            </h2>
            <p className="text-xl text-gray-300 font-body leading-relaxed mb-6">
              Thank you for exploring this interactive assessment. I believe in pushing the boundaries of presentation to show what's possible, not just what's expected.
            </p>
            <p className="text-md font-bold text-gray-400 mb-10 italic">
              "Great design isn't just an interface, it's a digital concierge."
            </p>
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-display text-text-main">Charchit Sahay</h3>
              <p className="text-primary uppercase tracking-[0.2em] text-xs mt-2 font-semibold">TravClan Application</p>
            </div>
            <button 
              onClick={() => setUnlocked(false)}
              className="px-8 py-3 bg-surface-highest text-text-main rounded-lg border border-[rgba(0,0,0,0.1)] hover:bg-surface-high hover:border-[rgba(0,0,0,0.3)] transition-colors uppercase tracking-widest text-xs font-bold"
            >
              Close Secret
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
