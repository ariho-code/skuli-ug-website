import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const GOLD = '#E8B84B';
const DARK = '#1a1a1a';
const APP_URL = 'https://school.skuliug.com';

const links = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/e-learning', label: 'E-Learning' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

function SkuliLogo() {
  return (
    <Link to="/" className="flex items-center group" aria-label="Skuli UG Home">
      <img
        src="/skuli-logo.png"
        alt="Skuli UG"
        className="h-16 w-auto object-contain drop-shadow-xl transition-transform duration-200 group-hover:scale-105"
      />
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

  // Always use dark background for visibility
  const navBg = scrolled
    ? 'rgba(26,26,26,0.98)'
    : 'rgba(26,26,26,0.95)';

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{ 
        background: navBg, 
        backdropFilter: 'blur(12px)', 
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.2)'
      }}>
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 h-[68px] flex items-center justify-between">
        <SkuliLogo />

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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="md:hidden"
            style={{ background: '#1a1a1a', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="px-4 pt-2 pb-5">
              {/* Nav links */}
              <div className="space-y-0.5">
                {links.map(l => (
                  <Link key={l.href} to={l.href}
                    className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium transition-all"
                    style={{
                      color: pathname === l.href ? GOLD : 'rgba(255,255,255,0.8)',
                      background: pathname === l.href ? 'rgba(232,184,75,0.1)' : 'transparent',
                    }}>
                    {l.label}
                    {pathname === l.href && (
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: GOLD }} />
                    )}
                  </Link>
                ))}
              </div>

              {/* Divider */}
              <div className="my-4" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }} />

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2.5">
                <a href={`${APP_URL}/login`}
                  className="flex items-center justify-center px-4 py-3.5 text-sm font-semibold rounded-xl transition-all"
                  style={{ color: 'rgba(255,255,255,0.85)', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.04)' }}>
                  Log in to your school
                </a>
                <a href={`${APP_URL}/login`}
                  className="flex items-center justify-center px-4 py-3.5 text-sm font-bold rounded-xl transition-all"
                  style={{ background: GOLD, color: DARK }}>
                  Get Started Free →
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
