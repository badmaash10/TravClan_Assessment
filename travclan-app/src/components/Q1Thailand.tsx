import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Plane, Palmtree, Map, IndianRupee, Camera, Calendar } from 'lucide-react';

const PRICE_DATA = [
  { name: 'Flights', value: 20000, color: '#FFB59D' },
  { name: 'Hotels (6N)', value: 18000, color: '#FF6B35' },
  { name: 'Tours & Activity', value: 6500, color: '#facc15' },
  { name: 'Transfers', value: 4500, color: '#59d5fb' },
  { name: 'Meals (Est.)', value: 5999, color: '#b5c4ff' },
];

const EARLY_BIRD_DATA = [
  { name: 'Flights', value: 18000, color: '#FFB59D' },
  { name: 'Hotels (6N)', value: 15400, color: '#FF6B35' },
  { name: 'Tours & Activity', value: 6500, color: '#facc15' },
  { name: 'Transfers', value: 4500, color: '#59d5fb' },
  { name: 'Meals (Est.)', value: 5599, color: '#b5c4ff' },
];

const TIMELINE = [
  { day: 1, text: 'Arrive Bangkok, Asiatique Night Market', icon: <Map size={16} /> },
  { day: 2, text: 'Grand Palace, Wat Pho & Dinner Cruise', icon: <Camera size={16} /> },
  { day: 3, text: 'Safari World & Chatuchak Market', icon: <Palmtree size={16} /> },
  { day: 4, text: 'Fly to Phuket, Patong Beach', icon: <Plane size={16} /> },
  { day: 5, text: 'Phi Phi Islands Day Trip', icon: <Camera size={16} /> },
  { day: 6, text: 'Big Buddha, Old Town Phuket', icon: <Map size={16} /> },
  { day: 7, text: 'Checkout & Departure', icon: <Plane size={16} /> },
];

function AnimatedCounter({ end, duration = 2 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
}

const IMAGES = [
  'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&q=80&w=800', // Phi Phi
  'https://images.unsplash.com/photo-1508009603885-50cf7c588074?auto=format&fit=crop&q=80&w=800', // Bangkok
  'https://images.unsplash.com/photo-1513036191774-b2badb8fc076?auto=format&fit=crop&q=80&w=800'  // Phuket
];

export default function Q1Thailand() {
  const [revealed, setRevealed] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleCardClick = (target: string) => {
    setSelectedCard(selectedCard === target ? null : target);
  };

  return (
    <section id="q1" className="relative min-h-screen border-t ghost-border bg-background text-text-main overflow-hidden py-12">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dim to-background pointer-events-none" />
      
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-12">
        
        {/* TASK STAGE */}
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="task"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col items-center justify-center min-h-[70vh] text-center"
            >
              <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-6 font-semibold">Task 1</h2>
              <div className="glass p-12 rounded-2xl max-w-4xl border border-[rgba(255,107,53,0.1)] smooth-shadow relative overflow-hidden group">
                {/* Subtle hover pulse */}
                <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
                
                <h3 className="text-4xl md:text-5xl font-display font-medium leading-tight text-text-main mb-10">
                  "Design a bestseller holiday package for Indian travelers. What's the destination, the experience, and the price?"
                </h3>
                
                <button 
                  onClick={handleReveal}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-surface-highest text-text-main font-body font-medium hover:bg-surface-high transition-all ghost-border group/btn relative overflow-hidden"
                >
                  <span className="relative z-10">See the Strategy</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary-container/10 opacity-0 group-hover/btn:opacity-100 transition-opacity"
                  />
                  <span className="relative z-10 text-primary group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ) : (
            /* REVEAL STAGE */
            <motion.div
              key="reveal"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              {/* HERO HEADER & STATS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 relative">
                 <div className="lg:col-span-7 flex flex-col justify-between">
                    <div className="mb-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-sm uppercase tracking-[0.2em] text-primary mb-2 font-semibold">Answer</h2>
                          <h3 className="text-4xl lg:text-5xl font-display font-bold">Thailand Bliss: <span className="text-text-muted font-normal">Bangkok + Phuket</span></h3>
                        </div>
                        <button 
                          onClick={() => setRevealed(false)}
                          className="text-xs uppercase tracking-widest text-gray-500 hover:text-text-main transition-colors ml-4 shrink-0"
                        >
                          ← Back
                        </button>
                      </div>
                    </div>
                    
                    {/* DASHBOARD STATS */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass p-6 rounded-xl border border-[rgba(0,0,0,0.05)]"
                      >
                        <div className="text-3xl font-display font-bold text-primary mb-1">
                          <AnimatedCounter end={2000000} duration={1.5} />+
                        </div>
                        <div className="text-sm text-text-muted uppercase tracking-widest font-semibold">Indian Visitors (2025)</div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass p-6 rounded-xl border border-[rgba(253, 252, 248, 0.95)] bg-primary/5"
                      >
                        <div className="text-3xl font-display font-bold text-soft-espresso mb-1">Visa-Free</div>
                        <div className="text-sm text-primary uppercase tracking-widest font-semibold">Frictionless Entry</div>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass p-6 rounded-xl border border-[rgba(0,0,0,0.05)]"
                      >
                        <div className="text-3xl font-display font-bold text-ocean-blue mb-1">#3 Rank</div>
                        <div className="text-sm text-text-muted uppercase tracking-widest font-semibold">Global Search</div>
                      </motion.div>
                    </div>
                 </div>

                 {/* HIGHLIGHT PHOTO SLIDER */}
                 <div className="lg:col-span-5 h-[300px] w-full rounded-2xl overflow-hidden relative shadow-lg ghost-border mt-8 lg:mt-0">
                   <AnimatePresence mode="wait">
                     <motion.img
                       key={currentImage}
                       src={IMAGES[currentImage]}
                       initial={{ opacity: 0, scale: 1.05 }}
                       animate={{ opacity: 1, scale: 1 }}
                       exit={{ opacity: 0 }}
                       transition={{ duration: 0.8 }}
                       className="absolute inset-0 w-full h-full object-cover"
                     />
                   </AnimatePresence>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                   
                   <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                     <div className="text-white">
                       <h5 className="font-display font-bold text-xl drop-shadow-md">Destination Overview</h5>
                       <p className="text-xs uppercase tracking-widest font-semibold opacity-80">Images inspired by Stitch Layouts</p>
                     </div>
                     <div className="flex gap-2">
                       {IMAGES.map((_, i) => (
                         <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentImage ? 'bg-white w-6' : 'bg-white/40 w-1.5'}`} />
                       ))}
                     </div>
                   </div>
                 </div>
              </div>

              {/* DESTINATION CARDS GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 relative">
                
                {/* CARD 1 */}
                {selectedCard !== 'budget' && (
                  <motion.div 
                    layout
                    onClick={() => handleCardClick('lavish')}
                    className={`cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden relative ${
                      selectedCard === 'lavish' 
                        ? 'border-primary bg-surface-lowest smooth-shadow col-span-1 lg:col-span-2' 
                        : 'border-[rgba(0,0,0,0.05)] glass hover:border-[rgba(255,107,53,0.3)]'
                    }`}
                  >
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <div className="inline-block px-3 py-1 rounded bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                            Bestseller 🔥
                          </div>
                          <h4 className="text-3xl font-display font-bold mb-2">Standard Package</h4>
                          <p className="text-text-muted">Bookings Within 90 Days of Travel</p>
                        </div>
                        <div className="text-right">
                          <div className="font-display font-bold text-4xl text-text-main">
                            <IndianRupee size={24} className="inline -mt-2 text-primary" />
                            {selectedCard === 'lavish' ? <AnimatedCounter end={54999} /> : '54,999'}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">per person (twin share)</div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {selectedCard === 'lavish' && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pt-8 border-t border-[rgba(0,0,0,0.05)] mt-6 grid grid-cols-1 md:grid-cols-2 gap-12"
                          >
                            {/* Financial Breakdown */}
                            <div>
                              <h5 className="text-xs uppercase tracking-widest text-text-muted mb-6 font-semibold">Unit Economics</h5>
                              <div className="h-48 w-full relative">
                                <ResponsiveContainer width="100%" height="100%">
                                  <PieChart>
                                    <Pie
                                      data={PRICE_DATA}
                                      innerRadius={50}
                                      outerRadius={80}
                                      paddingAngle={5}
                                      dataKey="value"
                                      stroke="none"
                                    >
                                      {PRICE_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                      ))}
                                    </Pie>
                                    <Tooltip 
                                      contentStyle={{ background: 'rgba(253, 252, 248, 0.95)', border: '1px solid rgba(45, 40, 37, 0.1)', borderRadius: '8px' }}
                                      itemStyle={{ color: '#2D2825' }}
                                      formatter={(value: any) => [`₹${value.toLocaleString()}`, 'Cost']}
                                    />
                                  </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                  <div className="text-center">
                                    <div className="text-[10px] text-text-muted uppercase tracking-widest">Margin</div>
                                    <div className="text-sm font-bold text-primary">~18%</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Itinerary Timeline */}
                            <div>
                               <h5 className="text-xs uppercase tracking-widest text-text-muted mb-6 font-semibold">7-Day Itinerary</h5>
                               <div className="space-y-4">
                                 {TIMELINE.slice(0, 4).map((item, i) => (
                                   <div key={i} className="flex gap-4 items-start">
                                     <div className="w-8 h-8 rounded-full bg-surface-highest flex items-center justify-center text-primary shrink-0">
                                       {item.day}
                                     </div>
                                     <div>
                                       <div className="text-sm font-medium text-text-muted">{item.text}</div>
                                     </div>
                                   </div>
                                 ))}
                                 <div className="text-xs text-primary font-medium hover:underline cursor-pointer">
                                   + View full 7 days
                                 </div>
                               </div>
                             </div>
                           </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}

                {/* CARD 2 */}
                {selectedCard !== 'lavish' && (
                  <motion.div 
                    layout
                    onClick={() => handleCardClick('budget')}
                    className={`cursor-pointer rounded-2xl border transition-all duration-500 overflow-hidden relative ${
                      selectedCard === 'budget' 
                        ? 'border-ocean-blue bg-surface-lowest smooth-shadow col-span-1 lg:col-span-2' 
                        : 'border-[rgba(0,0,0,0.05)] glass hover:border-ocean-blue/30'
                    }`}
                  >
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <div className="inline-block px-3 py-1 rounded bg-ocean-blue/20 text-ocean-blue text-xs font-bold uppercase tracking-widest mb-4">
                            Advance Cash Flow ⚡
                          </div>
                          <h4 className="text-3xl font-display font-bold mb-2">Early-Bird Promo</h4>
                          <p className="text-text-muted">Same 4-Star Experience, Booked 90+ Days Out</p>
                        </div>
                        <div className="text-right">
                          <div className="font-display font-bold text-4xl text-text-main">
                            <IndianRupee size={24} className="inline -mt-2 text-ocean-blue opacity-80" />
                            {selectedCard === 'budget' ? <AnimatedCounter end={49999} /> : '49,999'}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">per person (twin share)</div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {selectedCard === 'budget' && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pt-8 border-t border-[rgba(0,0,0,0.05)] mt-6 grid grid-cols-1 md:grid-cols-2 gap-12"
                          >
                            {/* Financial Breakdown */}
                            <div>
                              <h5 className="text-xs uppercase tracking-widest text-text-muted mb-6 font-semibold">Unit Economics</h5>
                              <div className="h-48 w-full relative">
                                <ResponsiveContainer width="100%" height="100%">
                                  <PieChart>
                                    <Pie
                                      data={EARLY_BIRD_DATA}
                                      innerRadius={50}
                                      outerRadius={80}
                                      paddingAngle={5}
                                      dataKey="value"
                                      stroke="none"
                                    >
                                      {EARLY_BIRD_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                      ))}
                                    </Pie>
                                    <Tooltip 
                                      contentStyle={{ background: 'rgba(253, 252, 248, 0.95)', border: '1px solid rgba(45, 40, 37, 0.1)', borderRadius: '8px' }}
                                      itemStyle={{ color: '#2D2825' }}
                                      formatter={(value: any) => [`₹${value.toLocaleString()}`, 'Cost']}
                                    />
                                  </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                  <div className="text-center">
                                    <div className="text-[10px] text-text-muted uppercase tracking-widest">Margin</div>
                                    <div className="text-sm font-bold text-ocean-blue">~18%</div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Itinerary Timeline */}
                            <div>
                               <h5 className="text-xs uppercase tracking-widest text-text-muted mb-6 font-semibold">7-Day Itinerary</h5>
                               <div className="space-y-4">
                                 {TIMELINE.slice(0, 4).map((item, i) => (
                                   <div key={i} className="flex gap-4 items-start">
                                     <div className="w-8 h-8 rounded-full bg-surface-highest flex items-center justify-center text-ocean-blue shrink-0">
                                       {item.day}
                                     </div>
                                     <div>
                                       <div className="text-sm font-medium text-text-muted">{item.text}</div>
                                     </div>
                                   </div>
                                 ))}
                                 <div className="text-xs text-ocean-blue font-medium hover:underline cursor-pointer">
                                   + View full 7 days
                                 </div>
                               </div>
                             </div>
                           </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* WHY IT WORKS CARDS */}
              <div className="mt-16">
                 <h4 className="text-xl font-display font-bold mb-8 flex items-center gap-3">
                   <Calendar className="text-primary" />
                   Why This Becomes a Bestseller
                 </h4>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                   {['Instagram ROI (Phi Phi)', '2-City Structure Value', 'Nov-Feb Wedding Season', 'No Dietary Anxiety'].map((reason, idx) => (
                     <motion.div
                       key={idx}
                       initial={{ opacity: 0, x: -20 }}
                       animate={{ opacity: 1, x: 0 }}
                       transition={{ delay: 0.6 + (idx * 0.1) }}
                       className="p-4 rounded-lg bg-surface-low border border-outline-variant/20 text-sm font-medium text-text-muted"
                     >
                       {reason}
                     </motion.div>
                   ))}
                 </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
