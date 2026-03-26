import { motion } from 'framer-motion';

export default function Closing() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden border-t border-[rgba(255,107,53,0.1)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 via-background to-[#0A2463]/20 opacity-50 pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-text-main leading-tight">
            That's the <span className="gradient-text">full picture.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 font-body italic font-medium">
            "3 questions. Real thinking. Built to ship."
          </p>
          
          <div className="mb-16">
            <h3 className="text-3xl font-bold font-display text-text-main">Charchit Sahay</h3>
            <p className="text-primary uppercase tracking-[0.2em] text-sm mt-3 font-semibold">Founder's Office Candidate</p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[rgba(0,0,0,0.1)] hover:border-primary text-gray-400 hover:text-text-main transition-all group bg-surface-highest smooth-shadow"
          >
            <span className="font-body uppercase tracking-widest text-xs font-bold">Back to the beginning</span>
            <span className="group-hover:-translate-y-1 inline-block transition-transform text-xl leading-none">↑</span>
          </button>
        </motion.div>
      </div>
      
      {/* Subtle bottom footer text */}
      <div className="absolute bottom-6 left-0 w-full text-center text-[10px] text-gray-600 uppercase tracking-widest font-mono">
        © 2026 • Built for TravClan Assessment
      </div>
    </section>
  );
}
