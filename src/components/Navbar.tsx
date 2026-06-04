import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const GOLD = '#E8B84B';
const DARK = '#1a1a1a';
const APP_URL = 'https://primary.skuliug.com';

const links = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/e-learning', label: 'E-Learning' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function SkuliLogo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: GOLD }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={DARK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      </div>
      <div>
        <div className="font-extrabold text-lg leading-none" style={{ color: dark ? '#fff' : DARK }}>
          Skuli <span style={{ color: GOLD }}>UG</span>
        </div>
        <div className="text-[9px] tracking-[0.2em] uppercase font-semibold" style={{ color: dark ? 'rgba(255,255,255,0.4)' : '#888' }}>
          Uganda School Management
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
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isHeroPage = pathname === '/';
  const navBg = scrolled
    ? 'rgba(26,26,26,0.97)'
    : isHeroPage ? 'transparent' : 'rgba(26,26,26,1)';

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{ background: navBg, backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-[68px] flex items-center justify-between">
        <SkuliLogo dark />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <li key={l.href}>
              <Link to={l.href}
                className="px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all"
                style={{
                  color: pathname === l.href ? GOLD : 'rgba(255,255,255,0.7)',
                  background: pathname === l.href ? 'rgba(232,184,75,0.1)' : 'transparent',
                }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={`${APP_URL}/login`}
            className="text-sm font-medium transition-colors"
            style={{ color: 'rgba(255,255,255,0.6)' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          >Log in</a>
          <a href={`${APP_URL}/login`}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-xl transition-all"
            style={{ background: GOLD, color: DARK }}
            onMouseEnter={e => (e.currentTarget.style.background = '#d4a017')}
            onMouseLeave={e => (e.currentTarget.style.background = GOLD)}
          >Get Started Free</a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: 'rgba(255,255,255,0.8)' }}
          onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(26,26,26,0.98)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="px-5 py-4 space-y-0.5">
              {links.map(l => (
                <Link key={l.href} to={l.href}
                  className="block px-4 py-3 rounded-xl text-sm font-medium transition-all"
                  style={{
                    color: pathname === l.href ? GOLD : 'rgba(255,255,255,0.75)',
                    background: pathname === l.href ? 'rgba(232,184,75,0.08)' : 'transparent',
                  }}>
                  {l.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-2">
                <a href={`${APP_URL}/login`}
                  className="block text-center px-4 py-3 text-sm font-medium rounded-xl"
                  style={{ color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)' }}>Log in</a>
                <a href={`${APP_URL}/login`}
                  className="block text-center px-4 py-3 text-sm font-bold rounded-xl"
                  style={{ background: GOLD, color: DARK }}>Get Started Free</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
