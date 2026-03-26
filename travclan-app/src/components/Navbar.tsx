import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${scrolled ? 'glass py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="font-display font-bold text-xl tracking-tight text-text-main">
          C.S. <span className="text-primary-container">•</span> TravClan
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.1em] font-body text-text-muted">
            <a href="#q1" className="hover:text-primary transition-colors duration-300">Q1: Thailand</a>
            <a href="#q2" className="hover:text-primary transition-colors duration-300">Q2: Hotel</a>
            <a href="#q3" className="hover:text-primary transition-colors duration-300">Q3: TAT Fix</a>
          </div>
        </div>
      </div>
      {/* Subtle bottom glow reflection when scrolled */}
      {scrolled && <div className="absolute bottom-0 left-0 right-0 h-px bg-primary opacity-20" />}
    </nav>
  );
}
