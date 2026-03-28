import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Source {
  label: string;
  url?: string;
  detail?: string;
}

interface DataSourcesProps {
  sources: Source[];
  accentColor?: string;
}

export default function DataSources({ sources, accentColor = 'text-primary' }: DataSourcesProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-12 w-full">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-text-muted hover:text-text-main transition-colors group"
      >
        <span className={accentColor}>📊</span>
        Data Sources & Methodology
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 glass rounded-xl border border-outline-variant/20 p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {sources.map((source, idx) => (
                  <div key={idx} className="flex items-start gap-3 py-2 border-b border-outline-variant/10 last:border-0">
                    <span className="text-[10px] font-mono text-text-muted bg-surface-highest px-1.5 py-0.5 rounded shrink-0 mt-0.5">
                      [{idx + 1}]
                    </span>
                    <div className="flex flex-col min-w-0">
                      {source.url ? (
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm font-medium ${accentColor} hover:underline flex items-center gap-1`}
                        >
                          <span className="truncate">{source.label}</span>
                          <ExternalLink size={10} className="shrink-0 opacity-60" />
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-text-main">{source.label}</span>
                      )}
                      {source.detail && (
                        <span className="text-[11px] text-text-muted mt-0.5">{source.detail}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-text-muted mt-4 uppercase tracking-widest opacity-60">
                All figures verified as of March 2026. Sources may update independently.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
