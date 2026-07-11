import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { SkuliMark } from './Navbar';
import InstallApp from './InstallApp';

const GOLD = '#F57A12';
const INK = '#0B2242';

const PHONE1 = '+256 760 730 254';
const PHONE2 = '+256 709 234 352';
const SALES_EMAIL = 'sales@skuliug.com';
const APP_URL = 'https://school.skuliug.com';

const platformLinks = [
  { to: '/features', label: 'Features' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/e-learning', label: 'E-Learning' },
  { href: `${APP_URL}/login`, label: 'Log In', external: true },
  { href: `${APP_URL}/login`, label: 'Get Started Free', external: true },
];

const companyLinks = [
  { to: '/about', label: 'About Skuli UG' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/contact', label: 'Request a Demo' },
  { to: '/contact', label: 'Custom Build' },
];

const contactRows = [
  { icon: Phone, label: PHONE1, href: `tel:${PHONE1.replace(/\s/g, '')}` },
  { icon: Phone, label: PHONE2, href: `tel:${PHONE2.replace(/\s/g, '')}` },
  { icon: Mail, label: SALES_EMAIL, href: `mailto:${SALES_EMAIL}` },
  { icon: MapPin, label: 'Kampala, Uganda', href: null },
];

const socialLinks = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@Skuliug',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@skuli.ug',
    path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/skuliug',
    path: 'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/skuliug',
    path: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
  },
];

export default function Footer() {
  return (
    <footer style={{ background: INK, borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-8">

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-10 sm:gap-x-8 lg:gap-10 mb-10 sm:mb-12">

          {/* Brand — full-width row until desktop */}
          <div className="col-span-2 lg:col-span-2 lg:max-w-xs">
            <div className="flex items-center gap-2.5 mb-4">
              <SkuliMark size={36} />
              <span className="leading-none">
                <span className="block font-display font-extrabold text-base text-white">Skuli <span style={{ color: GOLD }}>UG</span></span>
                <span className="block text-[8.5px] tracking-[0.22em] uppercase font-semibold text-white/35">Smarter schools, better futures.</span>
              </span>
            </div>
            <p className="text-sm text-white/45 leading-relaxed mb-5 max-w-sm">
              The all-in-one school management platform built for Uganda's primary schools.
            </p>
            <div className="flex gap-2 mb-6">
              <a href="https://wa.me/256760730254" target="_blank" rel="noreferrer" className="w-10 h-10 sm:w-9 sm:h-9 rounded-xl grid place-items-center bg-white/5 hover:bg-white/10 active:bg-white/15 transition" aria-label="WhatsApp">
                <svg width="16" height="16" viewBox="0 0 24 24" fill={GOLD}><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z" /></svg>
              </a>
              <a href={`mailto:${SALES_EMAIL}`} className="w-10 h-10 sm:w-9 sm:h-9 rounded-xl grid place-items-center bg-white/5 hover:bg-white/10 active:bg-white/15 transition" aria-label="Email">
                <Mail className="w-4 h-4" style={{ color: GOLD }} />
              </a>
              <a href={`tel:${PHONE1.replace(/\s/g, '')}`} className="w-10 h-10 sm:w-9 sm:h-9 rounded-xl grid place-items-center bg-white/5 hover:bg-white/10 active:bg-white/15 transition" aria-label="Call">
                <Phone className="w-4 h-4" style={{ color: GOLD }} />
              </a>
            </div>

            <p className="text-[11px] font-bold uppercase tracking-widest text-white/30 mb-2.5">Follow us</p>
            <div className="flex gap-2">
              {socialLinks.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  className="w-10 h-10 sm:w-9 sm:h-9 rounded-xl grid place-items-center bg-white/5 hover:bg-white/10 active:bg-white/15 transition"
                  aria-label={s.label}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill={GOLD}><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Platform</h3>
            <ul className="space-y-3 sm:space-y-2.5">
              {platformLinks.map(l => (
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
            <ul className="space-y-3 sm:space-y-2.5">
              {companyLinks.map(l => (
                <li key={l.label}><Link to={l.to} className="text-sm text-white/50 hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact — full-width row on mobile/tablet */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Contact</h3>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-2.5 text-sm text-white/50">
              {contactRows.map(c => (
                <li key={c.label} className="flex items-center gap-2 min-w-0">
                  <c.icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: GOLD }} />
                  {c.href
                    ? <a href={c.href} className="hover:text-white transition-colors truncate">{c.label}</a>
                    : <span className="truncate">{c.label}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Install app */}
        <div className="mb-10 sm:mb-12">
          <InstallApp />
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4 text-xs text-white/30 text-center sm:text-left"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <p>&copy; {new Date().getFullYear()} Skuli UG · Smarter schools, better futures. Built in Uganda 🇺🇬</p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
