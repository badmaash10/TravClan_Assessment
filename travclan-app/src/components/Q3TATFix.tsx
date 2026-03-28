import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, Target, Activity, Users, Settings, Briefcase, CheckCircle } from 'lucide-react';
import DataSources from './DataSources';

// PPT Framework: Balance → Match → Guardrails
const DIAGNOSIS = [
  { title: '01 — Balance the Load', desc: 'Map case distribution across execs. One handling 8 cases while another has 2 = bottleneck, not incompetence.', icon: <Users size={24} className="text-red-400" /> },
  { title: '02 — Match Hotels to Skill', desc: 'Tag hotels as Easy / Moderate / Difficult. Assign hard hotels to experienced senior communicators.', icon: <Settings size={24} className="text-red-400" /> },
  { title: '03 — Add Guardrails', desc: 'Auto-nudge at T+2hr, flag repeat offenders (3+ failures), daily standups, weekly compliance review.', icon: <Briefcase size={24} className="text-red-400" /> }
];

const WEEKS = [
  { title: 'W1: Diagnose', color: 'border-red-500/50', tasks: ['Map full pipeline: how bookings reach each exec', 'Pull 60-day case distribution per team member', 'Identify overloaded vs underutilised execs', 'Re-distribute open cases; build assignment system'] },
  { title: 'W2: Fix People', color: 'border-orange-500/50', tasks: ['Pull TAT data by hotel; tag Easy/Moderate/Difficult', 'Reassign hard hotels to senior communicators', 'Contact top 10 delayed hotels: 72-hr notice', 'Hotels that don\'t comply → bookings move to alternates'] },
  { title: 'W3: Fix Process', color: 'border-yellow-500/50', tasks: ['Activate WhatsApp auto-nudge at T+2hr', 'Deploy agent communication templates', 'Replace 3–5 repeat offender hotels', 'Daily 10-min standup begins: open cases + blockers'] },
  { title: 'W4: Measure', color: 'border-green-500/50', tasks: ['Track TAT compliance daily', 'Report to leadership', 'Hotels with 3+ failures flagged or removed', 'Present before/after dashboard to leadership'] }
];

const KPIS = [
  { label: 'TAT Miss Rate', before: '25%', after: '<8%' },
  { label: 'Load Balance', before: 'Unknown', after: 'Mapped & Even' },
  { label: 'Hard Hotels', before: 'Any Exec', after: 'Senior-Assigned' },
  { label: 'Agent Complaints', before: 'HIGH', after: '↓ 60–70%' },
  { label: 'Auto-Nudge', before: 'None', after: 'WhatsApp @ T+2hr' },
  { label: 'Offender Hotels', before: 'Tolerated', after: 'Flagged / Replaced' }
];

const Q3_SOURCES = [
  { label: 'OTA Industry Standard — PMS Integration', url: 'https://www.siteminder.com', detail: 'Automated confirmations: instant to 30 min via Channel Manager' },
  { label: 'Booking.com Partner Guidelines', url: 'https://partner.booking.com', detail: 'Preferred Partner SLA: confirmation within 24 hours for manual properties' },
  { label: 'Phocuswright / SiteMinder Reports', url: 'https://www.siteminder.com', detail: 'Industry best practice: real-time API sync between OTA ↔ PMS' },
  { label: 'WhatsApp Business API', url: 'https://business.whatsapp.com', detail: 'Automated nudge messaging for supplier follow-up at T+2hrs' },
  { label: 'TravClan Internal Assessment', detail: '25% TAT miss rate as baseline; 80/20 supplier concentration hypothesis' },
];

function Confetti() {
  const pieces = Array.from({ length: 50 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-50 flex justify-center items-center">
      {pieces.map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-3 h-3 ${['bg-red-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500'][i % 4]}`}
          initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
          animate={{
            opacity: [1, 1, 0],
            scale: [0, 1, 0.5],
            x: (Math.random() - 0.5) * 800,
            y: (Math.random() - 0.5) * 800 + 200,
            rotate: Math.random() * 360
          }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

export default function Q3TATFix() {
  const [revealed, setRevealed] = useState(false);
  const [activeWeek, setActiveWeek] = useState<number | null>(null);
  const [kpisRevealed, setKpisRevealed] = useState(0);

  // Auto-reveal KPIs sequentially when scrolled into view (simulated by timeout here)
  useEffect(() => {
    if (revealed && kpisRevealed < 6) {
      const timer = setTimeout(() => {
        setKpisRevealed(prev => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [revealed, kpisRevealed]);


  return (
    <section id="q3" className="relative min-h-screen border-t border-[rgba(255,107,53,0.1)] bg-background text-text-main overflow-hidden py-12">
      {/* Deep Navy/Red Ambient Glow */}
      <div className="absolute top-1/2 left-[10%] w-[40vw] h-[40vw] bg-red-600 rounded-full mix-blend-screen filter blur-[200px] opacity-[0.05]" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-blue-900 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.1]" />

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
              <h2 className="text-sm uppercase tracking-[0.2em] text-red-500 mb-6 font-semibold flex items-center justify-center gap-2">
                <AlertCircle size={16} /> Task 3
              </h2>
              <div className="glass p-12 rounded-2xl max-w-4xl border border-red-500/20 smooth-shadow relative overflow-hidden group">
                <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700" />
                
                <h3 className="text-4xl md:text-5xl font-display font-medium leading-tight text-text-main mb-10">
                  "25% of hotel bookings are missing confirmation deadlines. <span className="text-red-500">Fix it. 30 days.</span> Go."
                </h3>
                
                <button 
                  onClick={() => setRevealed(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 font-body font-medium hover:bg-red-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-red-500/50 group/btn relative overflow-hidden"
                >
                  <span className="relative z-10">Enter War Room</span>
                  <span className="relative z-10 text-red-400 group-hover/btn:translate-x-1 transition-transform">→</span>
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
                  <h2 className="text-sm uppercase tracking-[0.2em] text-red-500 mb-2 font-semibold">Answer</h2>
                  <h3 className="text-4xl font-display font-bold">30-Day Turnaround <span className="text-text-muted font-normal">Action Plan</span></h3>
                </div>
                <button 
                  onClick={() => setRevealed(false)}
                  className="text-xs uppercase tracking-widest text-gray-500 hover:text-text-main transition-colors"
                >
                  ← Back to Crisis
                </button>
              </div>

              {/* DIAGNOSIS CASCADE */}
              <div className="mb-16">
                <h4 className="text-xl font-display font-bold text-text-main mb-6 flex items-center gap-2">
                  <Activity size={20} className="text-red-500" />
                  Approach: Balance → Match → Guardrails
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {DIAGNOSIS.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + idx * 0.15 }}
                      className="glass p-6 rounded-xl border border-[rgba(0,0,0,0.05)] hover:border-red-500/30 transition-colors group relative overflow-hidden"
                    >
                      <div className="mb-4">{item.icon}</div>
                      <h5 className="font-display font-bold text-lg mb-2">{item.title}</h5>
                      <p className="text-text-muted text-sm font-medium">{item.desc}</p>
                      
                      {/* Hover Reveal Text */}
                      <div className="absolute inset-0 bg-red-950/90 p-6 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center">
                        <span className="text-xs uppercase tracking-widest text-red-400 font-bold mb-2">Key Action</span>
                        <span className="text-sm text-white">
                          {idx === 0 ? "Build a tracker (Sheets/CRM) and redistribute fairly" : idx === 1 ? "Build an internal hotel difficulty index" : "WhatsApp nudge + daily standup + weekly review"}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* TIMELINE GANTT */}
              <div className="mb-16">
                <h4 className="text-xl font-display font-bold text-text-main mb-6 flex items-center gap-2">
                  <Target size={20} className="text-red-500" />
                  30-Day Execution Timeline
                </h4>
                <div className="flex flex-col md:flex-row gap-4">
                  {WEEKS.map((week, idx) => (
                    <motion.div
                      key={idx}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      onClick={() => setActiveWeek(activeWeek === idx ? null : idx)}
                      className={`cursor-pointer border-l-4 ${week.color} glass p-5 rounded-r-xl transition-all duration-300 flex-1 hover:bg-surface-highest
                        ${activeWeek === idx ? 'md:flex-[2.5] bg-surface-highest' : ''}
                      `}
                    >
                      <h5 className="font-display font-bold text-md text-text-main whitespace-nowrap overflow-hidden text-ellipsis">{week.title}</h5>
                      
                      <AnimatePresence>
                        {activeWeek === idx && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 space-y-3"
                          >
                            {week.tasks.map((task, i) => (
                              <div key={i} className="flex gap-3 items-start group">
                                <CheckCircle size={16} className="text-gray-600 group-hover:text-green-500 transition-colors shrink-0 mt-0.5" />
                                <span className="text-sm text-text-main font-medium">{task}</span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* HERO MOMENT: BEFORE/AFTER KPI */}
              <div className="mb-16 relative">
                {kpisRevealed >= 6 && <Confetti />}
                
                <h4 className="text-3xl font-display font-bold text-center mb-4">The <span className="text-green-400">Impact</span></h4>
                <p className="text-center text-sm text-text-muted mb-8 max-w-2xl mx-auto">
                  <span className="font-semibold text-text-main">Industry benchmark:</span> Automated PMS-connected hotels confirm bookings in <span className="text-green-400 font-semibold">under 30 minutes</span> via real-time API sync.
                  <span className="block text-[10px] mt-1 opacity-60">Source: SiteMinder / Phocuswright Industry Reports</span>
                </p>
                <div className="max-w-4xl mx-auto bg-surface-lowest rounded-2xl border border-[rgba(0,0,0,0.05)] overflow-hidden">
                  
                  {/* Table Header */}
                  <div className="grid grid-cols-2 bg-surface-dim p-4 border-b border-[rgba(0,0,0,0.05)] text-xs uppercase tracking-widest font-bold text-gray-500">
                    <div className="pl-6">Before (Day 0)</div>
                    <div className="pl-6 text-green-400">After (Day 30)</div>
                  </div>

                  {/* Rows */}
                  {KPIS.map((kpi, idx) => (
                    <div key={idx} className="relative border-b border-[rgba(255,255,255,0.02)] last:border-0 relative overflow-hidden">
                      {/* Sweep animation background */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-green-500/10"
                        initial={{ x: '-100%' }}
                        animate={kpisRevealed > idx ? { x: 0 } : { x: '-100%' }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      
                      <div className="grid grid-cols-2 p-6 relative z-10">
                        <div className="pl-6 flex flex-col justify-center">
                          <span className="text-xs text-gray-500 uppercase tracking-widest mb-1">{kpi.label}</span>
                          <span className="text-2xl font-mono text-red-400 font-bold">{kpi.before}</span>
                        </div>
                        <div className="pl-6 flex items-center">
                          <motion.span 
                            initial={{ opacity: 0, x: 20 }}
                            animate={kpisRevealed > idx ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            className="text-3xl font-mono text-green-400 font-bold"
                          >
                            {kpi.after}
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DATA SOURCES */}
              <DataSources sources={Q3_SOURCES} accentColor="text-red-400" />

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
