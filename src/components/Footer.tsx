import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, ArrowUpRight } from 'lucide-react';

const PHONE1 = '+256 760 730 254';
const PHONE2 = '+256 709 234 352';
const SALES_EMAIL = 'sales@skuliug.com';
const APP_URL = 'https://primary.skuliug.com';

export default function Footer() {
  return (
    <footer className="bg-paper-2 border-t border-[color:var(--line)]">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-20">

        {/* Brand strip */}
        <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr] gap-10 mb-14">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="relative w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-ink">
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold ring-2 ring-paper-2" />
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
            </div>

            <p className="font-display text-[20px] leading-snug tracking-tight text-ink max-w-xs mb-6">
              School management,
              <span className="font-display-italic text-gold"> made graceful.</span>
            </p>

            <div className="space-y-2 text-[13.5px] text-muted">
              <a href={`tel:${PHONE1.replace(/\s/g,'')}`} className="flex items-center gap-2 link-reveal w-fit">
                <Phone className="w-3.5 h-3.5 text-gold" /> {PHONE1}
              </a>
              <a href={`tel:${PHONE2.replace(/\s/g,'')}`} className="flex items-center gap-2 link-reveal w-fit">
                <Phone className="w-3.5 h-3.5 text-gold" /> {PHONE2}
              </a>
              <a href={`mailto:${SALES_EMAIL}`} className="flex items-center gap-2 link-reveal w-fit">
                <Mail className="w-3.5 h-3.5 text-gold" /> {SALES_EMAIL}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </div>

          {/* Platform */}
          <FooterCol title="Platform" items={[
            { to: '/features',    label: 'Features' },
            { to: '/pricing',     label: 'Pricing' },
            { to: '/e-learning',  label: 'E-Learning' },
            { href: `${APP_URL}/login`, label: 'Log in',           external: true },
            { href: `${APP_URL}/login`, label: 'Get started free', external: true },
          ]} />

          {/* Company */}
          <FooterCol title="Company" items={[
            { to: '/about',   label: 'About Skuli' },
            { to: '/contact', label: 'Contact us' },
            { to: '/contact', label: 'Request a demo' },
            { to: '/contact', label: 'Custom build' },
          ]} />

          {/* Legal */}
          <FooterCol title="Legal" items={[
            { to: '/terms',   label: 'Terms of Service' },
            { to: '/privacy', label: 'Privacy Policy' },
          ]} />

          {/* Stay updated */}
          <div>
            <h3 className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-gold mb-4">Stay in the loop</h3>
            <p className="text-[13.5px] text-muted leading-relaxed mb-5">
              New features and updates from Uganda's classrooms.
            </p>
            <a
              href={`mailto:${SALES_EMAIL}?subject=Newsletter Sign-up`}
              className="btn btn-ghost !py-2.5 !px-4 !text-[13px]"
            >
              <Mail className="w-3.5 h-3.5" /> Subscribe
            </a>
          </div>
        </div>

        {/* Big wordmark */}
        <div className="relative mb-10 select-none pointer-events-none overflow-hidden">
          <div className="font-display text-[clamp(4rem,17vw,12rem)] leading-none tracking-tightest text-ink/[0.05] whitespace-nowrap">
            Skuli<span className="font-display-italic">UG</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-muted-2 border-t border-[color:var(--line)]">
          <p>
            &copy; {new Date().getFullYear()} Skuli UG · Uganda School Management. All rights reserved. Built in Uganda 🇺🇬
          </p>
          <div className="flex items-center gap-5">
            <Link to="/terms"   className="hover:text-ink transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-ink transition-colors">Privacy</Link>
            <a href={`${APP_URL}/login`} className="inline-flex items-center gap-1 text-ink font-medium link-reveal">
              Go to the app <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

type Item = { to: string; label: string } | { href: string; label: string; external?: boolean };

function FooterCol({ title, items }: { title: string; items: Item[] }) {
  return (
    <div>
      <h3 className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-gold mb-4">{title}</h3>
      <ul className="space-y-2.5">
        {items.map(i => (
          <li key={i.label}>
            {'href' in i
              ? <a href={i.href} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[13.5px] text-muted hover:text-ink transition-colors">
                  {i.label} {i.external && <ExternalLink className="w-3 h-3" />}
                </a>
              : <Link to={i.to}
                  className="text-[13.5px] text-muted hover:text-ink transition-colors">
                  {i.label}
                </Link>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}
