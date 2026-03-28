import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { MapPin, TrendingUp, Building, Star, Info } from 'lucide-react';
import DataSources from './DataSources';

// CapEx figures from assessment; validated against Varanasi market rates
const CAPEX_DATA = [
  { name: 'Room Furnishing', value: 720000, color: '#f59e0b', width: '42%' },
  { name: 'Working Capital', value: 200000, color: '#d97706', width: '12%' },
  { name: 'Lease Deposit', value: 180000, color: '#b45309', width: '10%' },
  { name: 'Common Area', value: 150000, color: '#92400e', width: '9%' },
  { name: 'Contingency', value: 145000, color: '#78350f', width: '8.5%' },
  { name: 'Rooftop Setup', value: 80000, color: '#fcd34d', width: '5%' },
  { name: 'Kitchen', value: 60000, color: '#fbbf24', width: '3.5%' },
  { name: 'Branding/Web', value: 55000, color: '#fef3c7', width: '3%' },
];

const Q2_SOURCES = [
  { label: 'UP Tourism Department', url: 'https://uptourism.gov.in', detail: '110M+ visitors in 2024; 309,932 foreign tourists' },
  { label: 'Varanasi Tourism Portal', url: 'https://varanasi-tourism.in', detail: 'Q1 2025: 114.6M domestic + 150K foreign visitors' },
  { label: 'Booking.com — Commission Structure', url: 'https://partner.booking.com', detail: 'Base commission 15–25% for independent properties' },
  { label: 'Airbnb — Host Fee Model', url: 'https://www.airbnb.com/help/article/1857', detail: '15.5% host-only fee (2025 standard)' },
  { label: 'MakeMyTrip — Investor Filings', url: 'https://www.makemytrip.com', detail: 'Avg. adjusted hotel margins ~18–22%' },
  { label: 'Kashi Vishwanath Corridor Impact', url: 'https://organiser.org', detail: '120x foreign tourist growth since 2021 post-corridor' },
];

const PAYBACK_DATA = Array.from({ length: 24 }, (_, i) => {
  const month = i + 1;
  const isYear2 = month > 12;
  const monthlyProfit = isYear2 ? 125000 : 106000; 
  const cumulative = month * monthlyProfit;
  return {
    month: `M${month}`,
    profit: cumulative,
    capex: 1690000
  };
});

const SECRETS = [
  { id: 1, title: 'Ghat-View Rooftop', desc: 'Adds a 30-40% rate premium immediately.', icon: <MapPin /> },
  { id: 2, title: 'Professional Photos', desc: 'Drives a 25-30% CTR boost on OTAs.', icon: <Star /> },
  { id: 3, title: 'Breakfast Included', desc: 'Positions above budget, below luxury.', icon: <Building /> },
  { id: 4, title: 'First 20 Reviews', desc: 'Determine long-term platform ranking. Critical focus.', icon: <TrendingUp /> }
];

function Ticker() {
  return (
    <div className="w-full bg-surface-highest border-y border-[rgba(0,0,0,0.05)] py-3 overflow-hidden whitespace-nowrap relative mt-16 text-primary">
      <motion.div 
        className="inline-block"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <span className="mx-8 font-mono text-sm tracking-widest uppercase">₹12,74,364 Net Annual Profit</span> • 
        <span className="mx-8 font-mono text-sm tracking-widest uppercase">16 Months Payback</span> • 
        <span className="mx-8 font-mono text-sm tracking-widest uppercase">6 Rooms in Varanasi</span> • 
        <span className="mx-8 font-mono text-sm tracking-widest uppercase">65% Y1 Occupancy</span> • 
        <span className="mx-8 font-mono text-sm tracking-widest uppercase">₹1,500 ADR</span> •
        <span className="mx-8 font-mono text-sm tracking-widest uppercase">₹12,74,364 Net Annual Profit</span> • 
        <span className="mx-8 font-mono text-sm tracking-widest uppercase">16 Months Payback</span>
      </motion.div>
    </div>
  );
}

export default function Q2Hotel() {
  const [revealed, setRevealed] = useState(false);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleFlip = (id: number) => {
    setFlippedCards(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  return (
    <section id="q2" className="relative min-h-screen border-t ghost-border bg-background text-text-main overflow-hidden py-12">
      {/* Saffron / Ochre Ambient Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-yellow-600 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.05]" />

      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-6 lg:px-12">
        
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="task"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="flex flex-col items-center justify-center min-h-[70vh] text-center"
            >
              <h2 className="text-sm uppercase tracking-[0.2em] text-yellow-500 mb-6 font-semibold">Task 2</h2>
              <div className="glass p-12 rounded-2xl max-w-4xl border border-[rgba(234,179,8,0.15)] smooth-shadow relative overflow-hidden group">
                <div className="absolute inset-0 bg-yellow-600 opacity-0 group-hover:opacity-5 transition-opacity duration-700" />
                
                <h3 className="text-4xl md:text-5xl font-display font-medium leading-tight text-text-main mb-10">
                  "Start a hotel in India for under <span className="text-yellow-500">₹20 Lakhs</span>. Where, how, and will it make money?"
                </h3>
                
                <button 
                  onClick={() => setRevealed(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-surface-highest text-text-main font-body font-medium hover:bg-surface-high transition-all ghost-border group/btn relative overflow-hidden"
                >
                  <span className="relative z-10">Unlock the Analysis</span>
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  <span className="relative z-10 text-yellow-500 group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="reveal"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between mb-16">
                <div>
                  <h2 className="text-sm uppercase tracking-[0.2em] text-yellow-500 mb-2 font-semibold">Answer</h2>
                  <h3 className="text-4xl font-display font-bold">Heritage Guesthouse: <span className="text-text-muted font-normal">Varanasi</span></h3>
                </div>
                <button 
                  onClick={() => setRevealed(false)}
                  className="text-xs uppercase tracking-widest text-gray-500 hover:text-text-main transition-colors"
                >
                  ← Back to Task
                </button>
              </div>

              {/* LOCATION & CAPEX GRID */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                
                {/* Location Reveal */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="col-span-1 lg:col-span-4 glass p-8 rounded-2xl border border-[rgba(234,179,8,0.15)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDEwMCAxMDAiPjxwYXRoIGQ9Ik01MCAxMGMtMTYuNiAwLTMwIDEzLjQtMzAgMzAgMCAyNi4zIDMwIDUwIDMwIDUwczMwLTIzLjcgMzAtNTBjMC0xNi42LTEzLjQtMzAtMzAtMzB6bTAgNDNjLTcuMiAwLTEzLTUuOC0xMy0xM3M1LjgtMTMgMTMtMTMgMTMgNS44IDEzIDEzLTUuOCAxMy0xMyAxM3oiIGZpbGw9IiNmNThjMGMiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-10 bg-center bg-no-repeat bg-cover" />
                  
                  <MapPin size={40} className="text-yellow-500 mb-6 drop-shadow-md" />
                  <h4 className="text-2xl font-display font-bold mb-4">Why Varanasi?</h4>
                  <ul className="space-y-4 text-sm font-medium text-text-main">
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 shrink-0" /><div>110M+ Visitors Annually (2024)<span className="block text-[10px] text-text-muted opacity-60">UP Tourism Dept</span></div></li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 shrink-0" /><div>310K+ Foreign Tourists (2024)<span className="block text-[10px] text-text-muted opacity-60">120x growth since 2021 post-KV Corridor</span></div></li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 shrink-0" /><div>Fragmented Unbranded OTA Supply<span className="block text-[10px] text-text-muted opacity-60">Low competition for boutique listings</span></div></li>
                    <li className="flex items-start gap-3"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 shrink-0" /><div>OTA Commission: 15–25% (Booking.com)<span className="block text-[10px] text-text-muted opacity-60">Airbnb: 15.5% host-only | MMT: 18–22%</span></div></li>
                  </ul>
                </motion.div>

                {/* CapEx Budget */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="col-span-1 lg:col-span-8 glass p-8 rounded-2xl border border-[rgba(0,0,0,0.05)]"
                >
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <h4 className="text-xl font-display font-bold text-text-main">Capital Expenditure</h4>
                      <p className="text-sm text-text-muted">Total Budget: ₹16,90,000</p>
                    </div>
                    <div className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-widest rounded border border-green-500/20">
                      Under Budget (₹3.1L Saved)
                    </div>
                  </div>

                  {/* Custom Segmented Bar Chart */}
                  <div className="w-full h-8 rounded-full overflow-hidden flex shadow-inner mb-6">
                    {CAPEX_DATA.map((item, idx) => (
                      <div 
                        key={idx} 
                        style={{ width: item.width, backgroundColor: item.color }} 
                        className="h-full hover:opacity-80 transition-opacity relative group/bar"
                      >
                         <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-surface-highest border border-[rgba(253, 252, 248, 0.95)] rounded text-xs font-mono font-medium opacity-0 group-hover/bar:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity">
                           {item.name}: ₹{(item.value / 100000).toFixed(1)}L
                         </div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                    {CAPEX_DATA.slice(0, 4).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}/>
                        <div className="text-xs text-text-muted font-medium truncate">{item.name}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* PAYBACK CHART */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full glass p-8 rounded-2xl border border-[rgba(0,0,0,0.05)] mb-16"
              >
                <h4 className="text-xl font-display font-bold text-text-main mb-8 flex items-center justify-between">
                  <span>Cumulative Profit & Payback Period</span>
                  <span className="text-sm font-mono text-yellow-500 font-normal tracking-widest bg-yellow-500/10 px-3 py-1 rounded">📍 Payback @ Month 16</span>
                </h4>
                <div className="w-full h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={PAYBACK_DATA} margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#eab308" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#eab308" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" vertical={false} />
                      <XAxis dataKey="month" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${(value/100000).toFixed(1)}L`} />
                      <Tooltip 
                        contentStyle={{ background: 'rgba(253, 252, 248, 0.95)', border: '1px solid rgba(234,179,8,0.2)', borderRadius: '8px' }}
                        itemStyle={{ color: '#2D2825' }}
                        formatter={(value: any, name: any) => [`₹${(value as number).toLocaleString()}`, name === 'profit' ? 'Cumulative Profit' : 'CapEx']}
                      />
                      <ReferenceLine y={1690000} stroke="#ef4444" strokeDasharray="3 3" label={{ position: 'top', value: 'CapEx (₹16.9L)', fill: '#ef4444', fontSize: 12 }} />
                      <Area type="monotone" dataKey="profit" stroke="#eab308" strokeWidth={3} fillOpacity={1} fill="url(#colorProfit)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* SECRET CARDS */}
              <div className="mb-8">
                 <h4 className="text-xl font-display font-bold text-text-main mb-6 flex items-center gap-2">
                   <Info size={20} className="text-yellow-500" />
                   Insider Success Factors
                 </h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                   {SECRETS.map((secret) => (
                     <div 
                       key={secret.id}
                       className="relative w-full h-[200px] perspective-1000 cursor-pointer"
                       onClick={() => toggleFlip(secret.id)}
                     >
                       <motion.div 
                         className="w-full h-full relative preserve-3d transition-all duration-700"
                         animate={{ rotateY: flippedCards.includes(secret.id) ? 180 : 0 }}
                       >
                         {/* Front */}
                         <div className="absolute inset-0 backface-hidden glass rounded-xl border border-[rgba(234,179,8,0.2)] flex flex-col items-center justify-center p-6 text-center hover:bg-yellow-500/5">
                           <div className="w-12 h-12 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center mb-4">
                             {secret.id}
                           </div>
                           <h5 className="font-display font-bold text-lg">Tip #{secret.id}</h5>
                           <p className="text-xs text-yellow-500/70 uppercase tracking-widest mt-2">Click to Reveal</p>
                         </div>
                         
                         {/* Back */}
                         <div className="absolute inset-0 backface-hidden glass rounded-xl border border-yellow-500/40 bg-surface-lowest flex flex-col items-center justify-center p-6 text-center rotate-y-180">
                           <div className="text-yellow-500 mb-3">{secret.icon}</div>
                           <h5 className="font-display font-bold text-md mb-2">{secret.title}</h5>
                           <p className="text-sm text-text-muted font-medium">{secret.desc}</p>
                         </div>
                       </motion.div>
                     </div>
                   ))}
                 </div>
              </div>

              {/* TICKER */}
              <Ticker />

              {/* DATA SOURCES */}
              <DataSources sources={Q2_SOURCES} accentColor="text-yellow-500" />
              
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
