import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Phone, MessageCircle } from 'lucide-react';
import Wordmark from './Wordmark';

const APP_URL = 'https://school.skuliug.com';
const PHONE1 = '+256 760 730 254';
const WHATSAPP =
  'https://wa.me/256760730254?text=Hello%2C%20I%27m%20interested%20in%20Skuli%20UG%20for%20my%20school.';
const TERM = 'Term 2 · 2026';

const links = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/e-learning', label: 'E-Learning' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

/* Two rules that cross into an X — quieter and more bespoke than a
   swapped icon. */
function MenuGlyph({ open }: { open: boolean }) {
  const common = {
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
  };
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <motion.line
        x1="3" y1="7.5" x2="19" y2="7.5" {...common}
        animate={open ? { x1: 4.5, y1: 4.5, x2: 17.5, y2: 17.5 } : { x1: 3, y1: 7.5, x2: 19, y2: 7.5 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.line
        x1="3" y1="14.5" x2="19" y2="14.5" {...common}
        animate={open ? { x1: 4.5, y1: 17.5, x2: 17.5, y2: 4.5 } : { x1: 3, y1: 14.5, x2: 19, y2: 14.5 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    const frame = requestAnimationFrame(() => setOpen(false));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  // Lock the page behind the drawer + close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
      style={{
        background: scrolled ? 'rgba(250,247,240,0.82)' : 'rgba(245,241,234,0.55)',
        backdropFilter: 'blur(14px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(14px) saturate(1.4)',
        borderBottom: `1px solid ${scrolled ? 'var(--line-strong)' : 'var(--line)'}`,
        boxShadow: scrolled ? '0 10px 30px -18px rgba(28,26,23,0.35)' : 'none',
        transition: 'background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        paddingTop: 'env(safe-area-inset-top)',
      }}
    >
      {/* hairline gold thread at the very top — a printer's registration mark */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(200,147,46,0.5) 20%, rgba(200,147,46,0.5) 80%, transparent)',
          opacity: scrolled ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />

      <nav
        className="max-w-6xl mx-auto px-5 lg:px-8 flex items-center justify-between"
        style={{ height: scrolled ? 62 : 74, transition: 'height 0.3s ease' }}
      >
        <Wordmark tone="light" size="sm" />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {links.map(l => {
            const active = pathname === l.href;
            return (
              <li key={l.href} className="relative">
                <Link
                  to={l.href}
                  className="relative block px-3.5 py-2 text-[14px] font-medium tracking-tight transition-colors"
                  style={{ color: active ? 'var(--ink)' : 'var(--muted)' }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = 'var(--ink)'; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = 'var(--muted)'; }}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3.5 right-3.5 -bottom-px h-[2px] rounded-full"
                      style={{ background: 'var(--gold)' }}
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href={`${APP_URL}/login`}
            className="px-3 py-2 text-[14px] font-medium transition-colors"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            Log in
          </a>
          <a href={`${APP_URL}/login`} className="btn btn-primary !py-2 !px-4 group">
            Book a demo
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile trigger */}
        <button
          className="md:hidden -mr-2 flex items-center justify-center w-11 h-11 rounded-lg text-ink transition-colors active:bg-[rgba(28,26,23,0.05)]"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <MenuGlyph open={open} />
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 top-0 z-40"
              style={{ background: 'rgba(20,18,14,0.34)', backdropFilter: 'blur(2px)' }}
            />

            <motion.div
              key="sheet"
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden absolute inset-x-0 top-full z-50 origin-top"
              style={{
                background: 'var(--paper-2)',
                borderBottom: '1px solid var(--line-strong)',
                boxShadow: '0 30px 60px -24px rgba(28,26,23,0.4)',
              }}
            >
              <div
                className="paper-grain px-5 pt-4"
                style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 20px)' }}
              >
                {/* masthead line */}
                <div className="masthead !text-[9.5px] mb-4 text-muted">
                  <span>A Prospectus</span>
                  <span className="hair" />
                  <span>{TERM}</span>
                </div>

                {/* links — staggered editorial rows */}
                <motion.ul
                  initial="hidden"
                  animate="show"
                  variants={{ show: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } } }}
                  className="mb-2"
                >
                  {links.map((l, i) => {
                    const active = pathname === l.href;
                    return (
                      <motion.li
                        key={l.href}
                        variants={{
                          hidden: { opacity: 0, x: -12 },
                          show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
                        }}
                      >
                        <Link
                          to={l.href}
                          className="group flex items-center gap-4 py-3.5 border-b"
                          style={{ borderColor: 'var(--line)' }}
                        >
                          <span
                            className="font-mono text-[10px] tracking-[0.18em] tabular-nums w-6"
                            style={{ color: active ? 'var(--gold)' : 'var(--muted-2)' }}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span
                            className="font-display text-[24px] leading-none tracking-tight flex-1"
                            style={{ color: active ? 'var(--gold)' : 'var(--ink)' }}
                          >
                            {l.label}
                          </span>
                          <ArrowUpRight
                            className="w-4 h-4 transition-transform group-active:translate-x-0.5"
                            style={{ color: active ? 'var(--gold)' : 'var(--muted-2)' }}
                          />
                        </Link>
                      </motion.li>
                    );
                  })}
                </motion.ul>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-5 flex flex-col gap-2.5"
                >
                  <a href={`${APP_URL}/login`} className="btn btn-primary w-full !py-3.5">
                    Book a free demo
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a href={`${APP_URL}/login`} className="btn btn-ghost w-full !py-3.5">
                    Log in to your school
                  </a>
                </motion.div>

                {/* direct contact — the fastest paths for a school on a phone */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.36, duration: 0.35 }}
                  className="mt-5 grid grid-cols-2 gap-2.5"
                >
                  <a
                    href={`tel:${PHONE1.replace(/\s/g, '')}`}
                    className="flex items-center justify-center gap-2 rounded-xl py-3 text-[13px] font-semibold"
                    style={{ background: 'var(--paper-3)', color: 'var(--ink)' }}
                  >
                    <Phone className="w-4 h-4 text-gold" /> Call us
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-xl py-3 text-[13px] font-semibold text-white"
                    style={{ background: '#25d366' }}
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
