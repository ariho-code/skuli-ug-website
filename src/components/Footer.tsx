import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const GOLD = '#E8B84B';
const DARK = '#111111';

const PHONE1 = '+256 760 730 254';
const PHONE2 = '+256 709 234 352';
const SALES_EMAIL = 'sales@skuliug.com';
const APP_URL = 'https://primary.skuliug.com';

export default function Footer() {
  return (
    <footer style={{ background: DARK, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/skuli-logo.png"
                alt="Skuli UG"
                className="h-11 w-auto object-contain"
              />
              <div>
                <div className="font-extrabold text-base leading-none text-white">
                  Skuli <span style={{ color: GOLD }}>UG</span>
                </div>
                <div className="text-[9px] tracking-[0.2em] uppercase font-semibold" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  Uganda School Management
                </div>
              </div>
            </div>
            <p className="text-sm text-white/45 leading-relaxed mb-5">
              The all-in-one school management platform built for Uganda's primary schools.
            </p>
            <div className="space-y-2 text-sm text-white/50">
              <a href={`tel:${PHONE1.replace(/\s/g,'')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: GOLD }} /> {PHONE1}
              </a>
              <a href={`tel:${PHONE2.replace(/\s/g,'')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: GOLD }} /> {PHONE2}
              </a>
              <a href={`mailto:${SALES_EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: GOLD }} /> {SALES_EMAIL}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: GOLD }} />
                <span>Kampala, Uganda</span>
              </div>
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
                    ? <a href={l.href} target="_blank" rel="noreferrer"
                        className="flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors">
                        {l.label} {l.external && <ExternalLink className="w-3 h-3" />}
                      </a>
                    : <Link to={l.to!} className="text-sm text-white/50 hover:text-white transition-colors">{l.label}</Link>
                  }
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
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white/50 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Legal</h3>
            <ul className="space-y-2.5">
              {[
                { to: '/terms', label: 'Terms of Service' },
                { to: '/privacy', label: 'Privacy Policy' },
              ].map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-white/50 hover:text-white transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Stay Updated</h3>
            <p className="text-sm text-white/45 mb-4">New features and updates for Uganda's schools.</p>
            <a href={`mailto:${SALES_EMAIL}?subject=Newsletter Sign-up`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all"
              style={{ background: 'rgba(232,184,75,0.1)', color: GOLD, border: '1px solid rgba(232,184,75,0.2)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(232,184,75,0.18)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(232,184,75,0.1)')}>
              <Mail className="w-4 h-4" /> Subscribe
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <p>&copy; {new Date().getFullYear()} Skuli UG · Uganda School Management System. All rights reserved. Built in Uganda 🇺🇬</p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
            <span>Receipts: <span style={{ color: GOLD }}>{SALES_EMAIL}</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
