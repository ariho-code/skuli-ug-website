import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { SkuliMark } from './Navbar';

const GOLD = '#F57A12';
const INK = '#0B2242';

const PHONE1 = '+256 760 730 254';
const PHONE2 = '+256 709 234 352';
const SALES_EMAIL = 'sales@skuliug.com';
const APP_URL = 'https://primary.skuliug.com';

export default function Footer() {
  return (
    <footer style={{ background: INK, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2 max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <SkuliMark size={36} />
              <span className="leading-none">
                <span className="block font-display font-extrabold text-base text-white">Skuli <span style={{ color: GOLD }}>UG</span></span>
                <span className="block text-[8.5px] tracking-[0.22em] uppercase font-semibold text-white/35">Smarter schools, better futures.</span>
              </span>
            </div>
            <p className="text-sm text-white/45 leading-relaxed mb-5">
              The all-in-one school management platform built for Uganda's primary schools.
            </p>
            <div className="flex gap-2">
              <a href="https://wa.me/256760730254" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl grid place-items-center bg-white/5 hover:bg-white/10 transition" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill={GOLD}><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z" /></svg>
              </a>
              <a href={`mailto:${SALES_EMAIL}`} className="w-9 h-9 rounded-xl grid place-items-center bg-white/5 hover:bg-white/10 transition" aria-label="Email">
                <Mail className="w-4 h-4" style={{ color: GOLD }} />
              </a>
              <a href={`tel:${PHONE1.replace(/\s/g, '')}`} className="w-9 h-9 rounded-xl grid place-items-center bg-white/5 hover:bg-white/10 transition" aria-label="Call">
                <Phone className="w-4 h-4" style={{ color: GOLD }} />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Platform</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/features', label: 'Features' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/e-learning', label: 'E-Learning' },
                { href: `${APP_URL}/login`, label: 'Log In', external: true },
                { href: `${APP_URL}/login`, label: 'Get Started Free', external: true },
              ].map(l => (
                <li key={l.label}>
                  {'href' in l
                    ? <a href={l.href} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors">{l.label} {l.external && <ExternalLink className="w-3 h-3" />}</a>
                    : <Link to={l.to!} className="text-sm text-white/50 hover:text-white transition-colors">{l.label}</Link>}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Company</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/about', label: 'About Skuli UG' },
                { to: '/contact', label: 'Contact Us' },
                { to: '/contact', label: 'Request a Demo' },
                { to: '/contact', label: 'Custom Build' },
              ].map(l => (
                <li key={l.label}><Link to={l.to} className="text-sm text-white/50 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Contact</h3>
            <ul className="space-y-2.5 text-sm text-white/50">
              <li><a href={`tel:${PHONE1.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{PHONE1}</a></li>
              <li><a href={`tel:${PHONE2.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{PHONE2}</a></li>
              <li><a href={`mailto:${SALES_EMAIL}`} className="hover:text-white transition-colors">{SALES_EMAIL}</a></li>
              <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: GOLD }} /> Kampala, Uganda</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <p>&copy; {new Date().getFullYear()} Skuli UG · Smarter schools, better futures. System. Built in Uganda 🇺🇬</p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
