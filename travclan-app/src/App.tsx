import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Q1Thailand from './components/Q1Thailand';
import Q2Hotel from './components/Q2Hotel';
import Q3TATFix from './components/Q3TATFix';
import Closing from './components/Closing';
import Konami from './components/Konami';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-text-main font-body overflow-x-hidden selection:bg-primary-container selection:text-text-main">
      {/* Global Scroll Progress */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-ocean-blue via-primary to-primary-container origin-left z-50"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Placeholder for future sections */}
        {/* Phase 2: Q1 Thailand */}
        <Q1Thailand />
        
        {/* Phase 3: Q2 Hotel */}
        <Q2Hotel />
        
        {/* Phase 4: Q3 TAT Fix */}
        <Q3TATFix />
        
        {/* Phase 5: Closing */}
        <Closing />
        <Konami />
      </main>
    </div>
  )
}

export default App
