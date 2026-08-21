import { useEffect, useState } from 'react';
import type { ReactNode, CSSProperties } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PRIMARY_PORTAL_URL } from './portals';

export const GOLD = '#F57A12';
export const GOLD_DEEP = '#DA6A0C';
export const GOLD_LIGHT = '#FBA24A';
export const INK = '#07182F';
export const INK2 = '#0B2242';
export const INK3 = '#123A66';
export const CREAM = '#FAF7F0';

/**
 * Kept for backwards compatibility: the primary school portal.
 * New code should import PRIMARY / SECONDARY from './portals' so it stays
 * aware that Skuli runs two systems.
 */
export const APP_URL = PRIMARY_PORTAL_URL;
export const PHONE1 = '+256 760 730 254';
export const PHONE2 = '+256 709 234 352';
export const SALES_EMAIL = 'sales@skuliug.com';

export const goldGrad = `linear-gradient(180deg, ${GOLD_LIGHT}, ${GOLD} 55%, ${GOLD_DEEP})`;
export const goldTile = `linear-gradient(135deg, rgba(245,122,18,0.15), rgba(245,122,18,0.05))`;

const EASE = [0.22, 1, 0.36, 1] as const;

export function FadeIn({ children, delay = 0, className = '', style }: { children: ReactNode; delay?: number; className?: string; style?: CSSProperties }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const reduce = useReducedMotion();
  return (
    <motion.div ref={ref} initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className} style={style}>
      {children}
    </motion.div>
  );
}

/*
 * Headline reveal: wipes upward from behind a mask instead of floating in.
 *
 * The observed node and the animated node have to be different elements. The
 * reveal starts at clip-path: inset(0 0 100% 0), which clips the element to
 * zero area, and an IntersectionObserver watching that same element then
 * reports a ratio of 0 forever: it never crosses the threshold, the animation
 * never starts and the heading stays invisible. So the outer div stays
 * unclipped and carries the ref, and the inner one does the wiping.
 */
export function Rise({ children, delay = 0, className = '', style }: { children: ReactNode; delay?: number; className?: string; style?: CSSProperties }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className={className} style={style}>
      <motion.div
        initial={reduce ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)', y: 26, opacity: 0 }}
        animate={inView ? (reduce ? { opacity: 1 } : { clipPath: 'inset(0 0 -8% 0)', y: 0, opacity: 1 }) : undefined}
        transition={{ duration: reduce ? 0.6 : 0.85, delay, ease: EASE }}>
        {children}
      </motion.div>
    </div>
  );
}

/* Cycles through words with a masked vertical slide. */
export function RotatingWord({ words, interval = 2200, className = '', style }: { words: string[]; interval?: number; className?: string; style?: CSSProperties }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex(i => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval, reduce]);
  return (
    <span className={`inline-grid overflow-hidden align-bottom ${className}`} style={style}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span key={words[index]}
          initial={{ y: '105%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-105%', opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="whitespace-nowrap" style={{ gridArea: '1 / 1' }}>
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
