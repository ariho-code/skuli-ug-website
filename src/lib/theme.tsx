import type { ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const GOLD = '#F57A12';
export const GOLD_DEEP = '#DA6A0C';
export const GOLD_LIGHT = '#FBA24A';
export const INK = '#07182F';
export const INK2 = '#0B2242';
export const INK3 = '#123A66';
export const CREAM = '#FAF7F0';

export const APP_URL = 'https://school.skuliug.com';
export const PHONE1 = '+256 760 730 254';
export const PHONE2 = '+256 709 234 352';
export const SALES_EMAIL = 'sales@skuliug.com';

export const goldGrad = `linear-gradient(180deg, ${GOLD_LIGHT}, ${GOLD} 55%, ${GOLD_DEEP})`;
export const goldTile = `linear-gradient(135deg, rgba(245,122,18,0.15), rgba(245,122,18,0.05))`;

export function FadeIn({ children, delay = 0, className = '', style }: { children: ReactNode; delay?: number; className?: string; style?: CSSProperties }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className} style={style}>
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold mb-6"
      style={{ border: '1px solid rgba(245,122,18,0.3)', background: 'rgba(245,122,18,0.1)', color: GOLD }}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: GOLD }} />
        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: GOLD }} />
      </span>
      {children}
    </div>
  );
}
