import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Signature Texture: Light Leak (Travel Photographer Lens Flare) */}
      <div className="absolute top-[-15%] left-[-10%] w-[60vw] h-[60vw] bg-primary rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-ocean-blue rounded-full mix-blend-screen filter blur-[200px] opacity-20 pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-text-main">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-primary font-body uppercase tracking-[0.2em] mb-6 text-sm font-semibold">
            Founder's Office Assessment
          </p>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 leading-[1.1] tracking-tight">
            The Digital <br />
            <span className="gradient-text">Concierge</span>
          </h1>
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed font-body">
            Three strategic questions. Real thinking. Built to ship. Moving beyond the utilitarian form to deliver a premium, immersive presentation.
          </p>
          
          <motion.div
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="inline-block"
          >
            <a href="#q1" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary-container text-[#390c00] font-bold font-body transition-transform smooth-shadow">
              Begin Exploration
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3 opacity-60"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-body text-text-muted">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
