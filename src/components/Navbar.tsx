import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const APP_URL = 'https://primary.skuliug.com';

const links = [
  { href: '/',          label: 'Home' },
  { href: '/features',  label: 'Features' },
  { href: '/e-learning',label: 'E-Learning' },
  { href: '/pricing',   label: 'Pricing' },
  { href: '/about',     label: 'About' },
  { href: '/contact',   label: 'Contact' },
];

function SkuliLogo() {
  return (
    <Link to="/" className="flex items-center gap-2.5 group" aria-label="Skuli UG home">
      <div className="relative w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-ink transition-transform group-hover:rotate-[-4deg]">
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold ring-2 ring-paper" />
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5F1EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7 L12 3 L21 7 L12 11 Z" />
          <path d="M5 10.5 V15 c0 1.8 3.1 3.5 7 3.5 s7 -1.7 7 -3.5 V10.5" />
        </svg>
      </div>
      <div className="leading-none">
        <div className="font-display text-[20px] font-semibold tracking-tight text-ink">
          Skuli<span className="text-gold">.</span>
        </div>
        <div className="text-[9.5px] tracking-[0.22em] uppercase font-semibold text-muted mt-0.5">
          Built in Uganda
        </div>
      </div>
    </Link>
  );
}

export { SkuliLogo };

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

  // (mobile menu closes via Link onClick — see below)

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(245,241,234,0.78)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(140%) blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(140%) blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(28,26,23,0.07)' : '1px solid transparent',
      }}
    >
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-[72px] flex items-center justify-between">
        <SkuliLogo />

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {links.map(l => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="relative px-3.5 py-2 rounded-full text-[14px] font-medium transition-colors"
                  style={{ color: active ? 'var(--ink)' : 'var(--muted)' }}
                  onMouseEnter={e => { if (!active) (e.currentTarget.style.color = 'var(--ink)'); }}
                  onMouseLeave={e => { if (!active) (e.currentTarget.style.color = 'var(--muted)'); }}
                >
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full"
                      style={{ background: 'var(--gold)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href={`${APP_URL}/login`}
            className="text-[14px] font-medium px-3 py-2 rounded-full transition-colors text-muted hover:text-ink"
          >
            Log in
          </a>
          <a
            href={`${APP_URL}/login`}
            className="btn btn-primary group !py-2.5 !px-4 !text-[13px]"
          >
            Book a demo
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2.5 rounded-lg transition-colors text-ink hover:bg-paper-3"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden border-t border-[color:var(--line)]"
            style={{ background: 'var(--paper-2)' }}
          >
            <div className="px-4 pt-3 pb-6">
              <div className="space-y-0.5">
                {links.map(l => {
                  const active = pathname === l.href;
                  return (
                    <Link
                      key={l.href}
                      to={l.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-[15px] font-medium transition-colors"
                      style={{
                        color: active ? 'var(--ink)' : 'var(--muted)',
                        background: active ? 'rgba(200,147,46,0.10)' : 'transparent',
                      }}
                    >
                      {l.label}
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                    </Link>
                  );
                })}
              </div>

              <div className="my-4 rule" />

              <div className="flex flex-col gap-2.5">
                <a href={`${APP_URL}/login`} className="btn btn-ghost w-full">
                  Log in to your school
                </a>
                <a href={`${APP_URL}/login`} className="btn btn-primary w-full">
                  Book a demo <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
