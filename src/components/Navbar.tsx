import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const GOLD = '#F57A12';
const INK = '#07182F';
const APP_URL = 'https://primary.skuliug.com';

const links = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/e-learning', label: 'E-Learning' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function SkuliMark({ size = 38 }: { size?: number }) {
  return (
    <img
      src="/skuli-emblem.png"
      alt="Skuli UG"
      className="flex-shrink-0 object-contain"
      style={{ height: size, width: 'auto' }}
    />
  );
}

export function SkuliLogo({ size = 38 }: { size?: number }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <SkuliMark size={size} />
      <span className="leading-none">
        <span className="block font-display font-extrabold text-[17px] tracking-tight text-white">
          Skuli <span style={{ color: GOLD }}>UG</span>
        </span>
        <span className="block text-[8.5px] tracking-[0.22em] uppercase font-semibold text-white/40">
          Uganda School Management
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isHome = pathname === '/';
  const navBg = scrolled
    ? 'rgba(7,24,47,0.92)'
    : isHome ? 'transparent' : 'rgba(7,24,47,1)';

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        background: navBg,
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
      }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[68px] flex items-center justify-between">
        <SkuliLogo />

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <li key={l.href}>
              <Link to={l.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  color: pathname === l.href ? GOLD : 'rgba(255,255,255,0.7)',
                  background: pathname === l.href ? 'rgba(245,122,18,0.1)' : 'transparent',
                }}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={`${APP_URL}/login`} className="text-sm font-medium text-white/60 hover:text-white transition-colors">Log in</a>
          <a href={`${APP_URL}/login`}
            className="btn-gold flex items-center gap-1.5 px-4 py-2.5 text-sm font-bold rounded-xl">
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2.5 -mr-1 rounded-lg text-white/90 active:scale-95 transition"
          onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            style={{ background: 'rgba(11,34,66,0.98)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map(l => (
                <Link key={l.href} to={l.href}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl text-[15px] font-medium transition-all"
                  style={{
                    color: pathname === l.href ? GOLD : 'rgba(255,255,255,0.85)',
                    background: pathname === l.href ? 'rgba(245,122,18,0.1)' : 'transparent',
                  }}>
                  {l.label}
                  {pathname === l.href && <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: GOLD }} />}
                </Link>
              ))}
              <div className="my-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />
              <a href={`${APP_URL}/login`}
                className="block text-center px-4 py-3.5 rounded-xl text-[15px] font-semibold text-white/90"
                style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.04)' }}>
                Log in to your school
              </a>
              <a href={`${APP_URL}/login`} className="btn-gold block text-center px-4 py-3.5 rounded-xl text-[15px] font-bold">
                Get Started Free →
              </a>
              <div className="flex gap-2 pt-1">
                <a href="tel:+256760730254" className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-sm font-semibold text-white/80" style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }}>Call us</a>
                <a href="https://wa.me/256760730254" className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-sm font-semibold" style={{ background: '#25D366', color: INK }}>WhatsApp</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
