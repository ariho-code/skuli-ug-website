import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import Wordmark from './Wordmark';

const PHONE1 = '+256 760 730 254';
const PHONE2 = '+256 709 234 352';
const SALES_EMAIL = 'sales@skuliug.com';
const APP_URL = 'https://school.skuliug.com';

/* On the dark colophon we speak in the same gold the paper sections use. */
const gold = 'var(--gold-soft)';

export default function Footer() {
  return (
    <footer
      className="relative"
      style={{ background: '#15130F', color: 'rgba(235,229,218,0.5)' }}
    >
      {/* gold registration thread, echoing the masthead */}
      <div
        aria-hidden
        className="h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(200,147,46,0.45) 15%, rgba(200,147,46,0.45) 85%, transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-12 mb-14">

          {/* Brand */}
          <div>
            <Wordmark tone="dark" size="md" className="mb-5" />
            <p className="text-[14px] leading-relaxed mb-6 max-w-xs" style={{ color: 'rgba(235,229,218,0.5)' }}>
              The all-in-one school management platform built for Uganda's primary schools — report
              cards, fees, marks and e-learning, on the phones teachers already carry.
            </p>
            <div className="space-y-2.5 text-[13.5px]">
              <a href={`tel:${PHONE1.replace(/\s/g, '')}`} className="flex items-center gap-2.5 transition-colors hover:text-paper-2" style={{ color: 'rgba(235,229,218,0.62)' }}>
                <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: gold }} /> {PHONE1}
              </a>
              <a href={`tel:${PHONE2.replace(/\s/g, '')}`} className="flex items-center gap-2.5 transition-colors hover:text-paper-2" style={{ color: 'rgba(235,229,218,0.62)' }}>
                <Phone className="w-3.5 h-3.5 flex-shrink-0" style={{ color: gold }} /> {PHONE2}
              </a>
              <a href={`mailto:${SALES_EMAIL}`} className="flex items-center gap-2.5 transition-colors hover:text-paper-2" style={{ color: 'rgba(235,229,218,0.62)' }}>
                <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: gold }} /> {SALES_EMAIL}
              </a>
              <div className="flex items-center gap-2.5" style={{ color: 'rgba(235,229,218,0.62)' }}>
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: gold }} />
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] mb-4" style={{ color: gold }}>Platform</h3>
            <ul className="space-y-3">
              {[
                { to: '/features', label: 'Features' },
                { to: '/pricing', label: 'Pricing' },
                { to: '/e-learning', label: 'E-Learning' },
                { href: `${APP_URL}/login`, label: 'Log in', external: true },
                { href: `${APP_URL}/login`, label: 'Book a demo', external: true },
              ].map(l => (
                <li key={l.label}>
                  {'href' in l ? (
                    <a href={l.href} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-[13.5px] transition-colors hover:text-paper-2" style={{ color: 'rgba(235,229,218,0.55)' }}>
                      {l.label} {l.external && <ExternalLink className="w-3 h-3 opacity-60" />}
                    </a>
                  ) : (
                    <Link to={l.to!} className="text-[13.5px] transition-colors hover:text-paper-2" style={{ color: 'rgba(235,229,218,0.55)' }}>{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] mb-4" style={{ color: gold }}>Company</h3>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'About Skuli UG' },
                { to: '/contact', label: 'Contact us' },
                { to: '/contact', label: 'Request a demo' },
                { to: '/contact', label: 'Custom build' },
              ].map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="text-[13.5px] transition-colors hover:text-paper-2" style={{ color: 'rgba(235,229,218,0.55)' }}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + newsletter */}
          <div>
            <h3 className="text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] mb-4" style={{ color: gold }}>Legal</h3>
            <ul className="space-y-3 mb-8">
              {[
                { to: '/terms', label: 'Terms of Service' },
                { to: '/privacy', label: 'Privacy Policy' },
              ].map(l => (
                <li key={l.label}>
                  <Link to={l.to} className="text-[13.5px] transition-colors hover:text-paper-2" style={{ color: 'rgba(235,229,218,0.55)' }}>{l.label}</Link>
                </li>
              ))}
            </ul>
            <h3 className="text-[10.5px] font-mono font-bold uppercase tracking-[0.2em] mb-3" style={{ color: gold }}>Stay updated</h3>
            <a href={`mailto:${SALES_EMAIL}?subject=Newsletter Sign-up`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-semibold transition-all"
              style={{ background: 'rgba(200,147,46,0.12)', color: gold, border: '1px solid rgba(200,147,46,0.22)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(200,147,46,0.2)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(200,147,46,0.12)')}>
              <Mail className="w-4 h-4" /> Subscribe
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px]"
          style={{ borderTop: '1px solid rgba(235,229,218,0.1)', color: 'rgba(235,229,218,0.36)' }}>
          <p className="leading-relaxed">
            &copy; {new Date().getFullYear()} Skuli UG · Uganda School Management System. Built in Kampala 🇺🇬
          </p>
          <div className="flex items-center gap-5">
            <Link to="/terms" className="transition-colors hover:text-paper-2">Terms</Link>
            <Link to="/privacy" className="transition-colors hover:text-paper-2">Privacy</Link>
            <span className="font-mono uppercase tracking-[0.14em] text-[10px]" style={{ color: 'rgba(235,229,218,0.3)' }}>
              Set in Fraunces &amp; Inter
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
