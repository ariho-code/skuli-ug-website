import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Backpack, GraduationCap, LockKeyhole, Phone, X } from 'lucide-react';
import { PORTALS, isLive, loginUrl } from '../lib/portals';
import type { Portal } from '../lib/portals';
import { GOLD, INK, INK2, PHONE1, goldTile } from '../lib/theme';
import { PortalPickerContext } from '../lib/portalPickerContext';
import type { PortalPickerApi } from '../lib/portalPickerContext';

const EASE = [0.22, 1, 0.36, 1] as const;

const portalIcon = { primary: Backpack, secondary: GraduationCap } as const;

/* --------------------------------------------------------------- provider */

export function PortalPickerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const api = useMemo<PortalPickerApi>(() => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false); };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  return (
    <PortalPickerContext.Provider value={api}>
      {children}
      <PortalPickerModal isOpen={isOpen} onClose={api.close} />
    </PortalPickerContext.Provider>
  );
}

/* ------------------------------------------------------------------ card */

function PortalCard({ portal, onNavigate }: { portal: Portal; onNavigate: () => void }) {
  const Icon = portalIcon[portal.key];
  const live = isLive(portal);
  const href = loginUrl(portal);

  const body = (
    <>
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="w-12 h-12 rounded-2xl grid place-items-center" style={{ background: goldTile }}>
          <Icon className="w-6 h-6" style={{ color: GOLD }} strokeWidth={2} />
        </div>
        <span className="px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-wide whitespace-nowrap"
          style={live
            ? { background: 'rgba(16,185,129,0.15)', color: '#34d399' }
            : { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}>
          {live ? 'LIVE' : 'OPENING SOON'}
        </span>
      </div>
      <h3 className="font-display font-extrabold text-xl text-white">{portal.name}</h3>
      <p className="text-[12.5px] font-semibold mt-1" style={{ color: GOLD }}>{portal.levels}</p>
      <p className="text-[13.5px] text-white/50 leading-relaxed mt-3 mb-6">{portal.audience}</p>
      <span className="mt-auto flex items-center gap-2 text-sm font-bold" style={{ color: live ? GOLD : 'rgba(255,255,255,0.6)' }}>
        {live ? <>Log in <ArrowRight className="w-4 h-4" /></> : <><LockKeyhole className="w-3.5 h-3.5" /> Ask us for early access</>}
      </span>
    </>
  );

  const cardStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
  };
  const className = 'card-hover flex flex-col rounded-3xl p-6 h-full text-left';

  return live
    ? <a href={href} target="_blank" rel="noreferrer" onClick={onNavigate} className={className} style={cardStyle}>{body}</a>
    : <Link to={href} onClick={onNavigate} className={className} style={cardStyle}>{body}</Link>;
}

/* ----------------------------------------------------------------- modal */

function PortalPickerModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const stop = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          role="dialog" aria-modal="true" aria-label="Choose your school system">

          <div className="absolute inset-0" style={{ background: 'rgba(3,10,20,0.75)', backdropFilter: 'blur(6px)' }} />

          <motion.div onClick={stop}
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="relative w-full max-w-2xl rounded-t-[2rem] sm:rounded-[2rem] p-6 sm:p-8 max-h-[92vh] overflow-y-auto"
            style={{ background: `linear-gradient(180deg, ${INK2}, ${INK})`, border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 40px 90px -30px rgba(0,0,0,0.9)' }}>

            <button onClick={onClose} aria-label="Close"
              className="absolute top-5 right-5 w-9 h-9 rounded-xl grid place-items-center text-white/50 hover:text-white transition"
              style={{ background: 'rgba(255,255,255,0.06)' }}>
              <X className="w-4 h-4" />
            </button>

            <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2" style={{ color: GOLD }}>Skuli portals</p>
            <h2 className="font-display font-extrabold text-2xl sm:text-[1.9rem] tracking-tight text-white leading-tight mb-2">
              Which school are you signing in to?
            </h2>
            <p className="text-white/50 text-[14.5px] leading-relaxed mb-7 max-w-lg">
              Skuli runs two separate systems so each one matches its own curriculum, grading and report card. Pick yours.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {PORTALS.map(p => <PortalCard key={p.key} portal={p} onNavigate={onClose} />)}
            </div>

            <div className="mt-6 pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-[13px] text-white/40">Not sure which one, or lost your login?</p>
              <div className="flex items-center gap-4 text-[13px]">
                <a href={`tel:${PHONE1.replace(/\s/g, '')}`} className="flex items-center gap-1.5 font-semibold text-white/70 hover:text-white transition">
                  <Phone className="w-3.5 h-3.5" style={{ color: GOLD }} /> {PHONE1}
                </a>
                <Link to="/contact" onClick={onClose} className="font-semibold hover:underline" style={{ color: GOLD }}>Contact us</Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
