import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import {
  GraduationCap, DollarSign, BarChart3, MessageSquare, Users, BookOpen,
  Smartphone, Brain, Bell, Shield, CheckCircle2, ArrowRight, Phone,
  TrendingUp, Layers, UserCheck, Calendar, FileText, Zap,
} from 'lucide-react';

const GOLD = '#E8B84B';
const DARK = '#1a1a1a';
const APP_URL = 'https://primary.skuliug.com';
const PHONE1 = '+256 760 730 254';
const PHONE2 = '+256 709 234 352';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

const features = [
  { icon: FileText, title: 'Smart report cards', desc: 'AI writes personalised comments per pupil automatically. Teachers enter marks — system does the rest.' },
  { icon: TrendingUp, title: 'Mark sheets & grades', desc: 'Record performance per subject. Aggregates and positions calculated instantly.' },
  { icon: DollarSign, title: 'Fees tracking', desc: 'Paid, owing and outstanding per pupil. Instant fee reports any time.' },
  { icon: BookOpen, title: 'E-learning', desc: 'Share notes, lessons and assignments digitally with pupils.' },
  { icon: BarChart3, title: 'Analytics dashboard', desc: 'Class averages, top performers and term-on-term trends at a glance.' },
  { icon: UserCheck, title: 'Teacher accounts', desc: 'Each teacher logs in and sees only their class. Secure and mobile-ready.' },
];

const pricingPlans = [
  {
    name: 'Starter',
    sub: 'Under 150 pupils',
    price: '150,000',
    usd: '$40',
    highlight: false,
    badge: null,
    features: ['Report cards & mark sheets', 'Fees tracking', 'Up to 5 teacher accounts', 'Mobile access'],
  },
  {
    name: 'Growth',
    sub: '150 – 400 pupils',
    price: '300,000',
    usd: '$80',
    highlight: true,
    badge: 'Most Popular',
    features: ['Everything in Starter', 'E-learning module', 'AI report comments', 'Analytics dashboard', 'Up to 20 teachers'],
  },
  {
    name: 'Pro',
    sub: '400 – 800 pupils',
    price: '500,000',
    usd: '$130',
    highlight: false,
    badge: null,
    features: ['Everything in Growth', 'Parent SMS alerts', 'Advanced analytics', 'Unlimited teachers', 'Priority support'],
  },
  {
    name: 'Enterprise',
    sub: '800+ pupils',
    price: '800,000+',
    usd: '$210+',
    highlight: false,
    badge: null,
    features: ['Everything in Pro', 'Custom school branding', 'Multi-campus support', 'Dedicated onboarding', 'Custom report formats'],
  },
];

const stats = [
  { value: '3x', label: 'Faster Report Cards' },
  { value: '100%', label: 'Mobile Ready' },
  { value: '0', label: 'Excel Files Needed' },
  { value: 'AI', label: 'Powered Comments' },
];

export default function HomePage() {
  return (
    <div style={{ background: DARK, color: '#fff' }}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: DARK }}>
        {/* Decorative circle */}
        <div className="absolute right-0 top-0 w-[520px] h-[520px] rounded-full opacity-20 pointer-events-none"
          style={{ background: `radial-gradient(circle at 70% 30%, ${GOLD}, transparent 70%)` }} />
        <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: '#2a2a1a', filter: 'blur(60px)' }} />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-32 grid lg:grid-cols-2 gap-12 items-center w-full">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{ background: 'rgba(232,184,75,0.15)', border: `1px solid rgba(232,184,75,0.3)`, color: GOLD }}>
              <Zap className="w-3.5 h-3.5" /> AI-powered
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight mb-6" style={{ color: '#fff' }}>
              Your school.<br />
              <span style={{ color: GOLD }}>Fully digital.</span><br />
              Finally.
            </h1>
            <p className="text-lg text-white/60 mb-4 max-w-lg leading-relaxed">
              The all-in-one school management system built for Uganda's primary schools. Report cards, fees, e-learning and AI — all on your teachers' phones. No laptops. No Excel. No stress.
            </p>
            <p className="text-base text-white/50 mb-8">
              One platform to manage{' '}
              <span style={{ color: GOLD }} className="font-semibold">
                <TypeAnimation
                  sequence={['students', 1500, 'fees', 1500, 'academics', 1500, 'e-learning', 1500, 'parents', 1500]}
                  wrapper="span" speed={50} repeat={Infinity}
                />
              </span>
            </p>

            {/* Feature tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['AI-powered', 'Report cards', 'Fees tracking', 'E-learning', 'Analytics', 'MTN & Airtel ready'].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href={`${APP_URL}/login`}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base transition-all"
                style={{ background: GOLD, color: DARK }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d4a017')}
                onMouseLeave={e => (e.currentTarget.style.background = GOLD)}>
                Book a free demo <ArrowRight className="w-4 h-4" />
              </a>
              <a href={`tel:${PHONE1.replace(/\s/g,'')}`}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-base transition-all"
                style={{ background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}>
                <Phone className="w-4 h-4" /> {PHONE1}
              </a>
            </div>
          </FadeIn>

          {/* Stats column */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(s => (
                <div key={s.label} className="rounded-2xl p-6 text-center"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="text-4xl font-extrabold mb-1" style={{ color: GOLD }}>{s.value}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/40">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURES GRID ───────────────────────────────────── */}
      <section className="py-20" style={{ background: '#111' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <FadeIn className="mb-14">
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>What you get</div>
            <h2 className="text-4xl font-extrabold text-white mb-3">One phone. Your whole school.</h2>
            <p className="text-white/50 max-w-xl">The all-in-one school management platform built for Uganda.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.06}>
                <motion.div whileHover={{ y: -3 }}
                  className="rounded-2xl p-6 transition-all"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(232,184,75,0.3)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'rgba(232,184,75,0.1)' }}>
                    <f.icon className="w-5 h-5" style={{ color: GOLD }} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI BANNER ───────────────────────────────────────── */}
      <section className="py-8" style={{ background: '#1c2a1c', borderTop: `2px solid ${GOLD}`, borderBottom: `2px solid ${GOLD}` }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <span className="px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap"
            style={{ background: GOLD, color: DARK }}>
            AI FEATURE
          </span>
          <p className="text-white/80 text-sm leading-relaxed">
            <span style={{ color: GOLD }} className="font-bold">Artificial intelligence built in.</span>{' '}
            Skuli uses AI to automatically draft personalised report card comments per pupil — saving teachers hours of writing every end of term. Smarter comments, zero extra effort.
          </p>
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────── */}
      <section className="py-24" style={{ background: DARK }} id="pricing">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <FadeIn className="mb-14">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>
              Termly Pricing — Pay Once Per Term
            </div>
            <h2 className="text-4xl font-extrabold text-white mb-3">Priced for Uganda's schools</h2>
            <p className="text-white/50 max-w-xl">
              No per-teacher fees. No hidden charges. One flat termly rate based on your school size. Three terms a year — that's all you pay.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pricingPlans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.08}>
                <motion.div whileHover={{ y: -5 }}
                  className="rounded-2xl p-7 flex flex-col h-full relative transition-all"
                  style={{
                    background: plan.highlight ? '#fff' : 'rgba(255,255,255,0.04)',
                    border: plan.highlight ? `2px solid ${GOLD}` : '1px solid rgba(255,255,255,0.08)',
                  }}>
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                      style={{ background: GOLD, color: DARK }}>
                      {plan.badge}
                    </div>
                  )}
                  <div className="mb-5">
                    <h3 className="text-lg font-extrabold mb-0.5" style={{ color: plan.highlight ? DARK : '#fff' }}>{plan.name}</h3>
                    <p className="text-xs mb-4" style={{ color: plan.highlight ? '#666' : 'rgba(255,255,255,0.4)' }}>{plan.sub}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold" style={{ color: plan.highlight ? DARK : GOLD }}>
                        UGX {plan.price}
                      </span>
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: plan.highlight ? '#888' : 'rgba(255,255,255,0.35)' }}>
                      / term &nbsp;&bull;&nbsp; {plan.usd}
                    </div>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm"
                        style={{ color: plan.highlight ? '#333' : 'rgba(255,255,255,0.65)' }}>
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: plan.highlight ? '#16a34a' : GOLD }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="block text-center py-3 rounded-xl text-sm font-bold transition-all"
                    style={{
                      background: plan.highlight ? GOLD : 'rgba(232,184,75,0.12)',
                      color: plan.highlight ? DARK : GOLD,
                      border: plan.highlight ? 'none' : `1px solid rgba(232,184,75,0.25)`,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = plan.highlight ? '#d4a017' : 'rgba(232,184,75,0.2)')}
                    onMouseLeave={e => (e.currentTarget.style.background = plan.highlight ? GOLD : 'rgba(232,184,75,0.12)')}>
                    Get Started
                  </Link>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Custom Build Banner */}
          <FadeIn delay={0.2}>
            <div className="mt-8 rounded-2xl px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div>
                <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold mb-2" style={{ background: DARK, color: GOLD, border: `1px solid ${GOLD}` }}>
                  CUSTOM BUILD
                </span>
                <p className="text-white/80 text-sm">
                  <span className="font-semibold text-white">Want a system built for your school specifically?</span>{' '}
                  We build fully bespoke school management systems. Your branding, your workflow, your features. Contact us for a quote.
                </p>
              </div>
              <Link to="/contact"
                className="flex-shrink-0 px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
                style={{ background: GOLD, color: DARK }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d4a017')}
                onMouseLeave={e => (e.currentTarget.style.background = GOLD)}>
                Get a Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── WHY SKULI ───────────────────────────────────────── */}
      <section className="py-20" style={{ background: '#111' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, title: 'Mobile first', desc: 'Runs on any Android or iPhone on mobile data. No WiFi, no computer lab required.' },
              { icon: Brain, title: 'AI built in', desc: 'AI writes personalised comments per pupil. Teachers enter marks — system does the rest.' },
              { icon: Shield, title: 'Secure & private', desc: 'Role-based access. Each teacher sees only what they need. Your data stays yours.' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="rounded-2xl p-7" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(232,184,75,0.12)' }}>
                    <item.icon className="w-6 h-6" style={{ color: GOLD }} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FOOTER ──────────────────────────────────────── */}
      <section className="py-20" style={{ background: '#1a2a00', borderTop: `2px solid ${GOLD}` }}>
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <div className="rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
            style={{ background: 'rgba(232,184,75,0.07)', border: `1px solid rgba(232,184,75,0.2)` }}>
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-3">Ready to digitalise your school?</h2>
              <p className="text-white/60 mb-4">Book a free demo for your school. We come to you. No obligation.</p>
              <div className="flex flex-col sm:flex-row gap-3 text-white/70 text-sm">
                <a href={`tel:${PHONE1.replace(/\s/g,'')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" style={{ color: GOLD }} /> {PHONE1}
                </a>
                <a href={`tel:${PHONE2.replace(/\s/g,'')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" style={{ color: GOLD }} /> {PHONE2}
                </a>
              </div>
              <p className="text-white/40 text-xs mt-2">Call or WhatsApp — we come to your school</p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <a href={`https://wa.me/256760730254`} target="_blank" rel="noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all"
                style={{ background: GOLD, color: DARK }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d4a017')}
                onMouseLeave={e => (e.currentTarget.style.background = GOLD)}>
                Call or WhatsApp Us
              </a>
              <p className="text-center text-white/30 text-xs">We come to your school. No obligation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPCOMING FEATURES ───────────────────────────────── */}
      <section className="py-16" style={{ background: DARK }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <FadeIn className="mb-10">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>Coming Soon</div>
            <h2 className="text-3xl font-extrabold text-white">What we're building next</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Bell, title: 'SMS to Parents', desc: 'Automated MTN & Airtel SMS alerts for fees and results.' },
              { icon: Users, title: 'Parent Portal App', desc: 'Dedicated parent login to track fees, results and messages.' },
              { icon: Calendar, title: 'Timetable Builder', desc: 'Visual drag-and-drop timetable creation for all classes.' },
              { icon: Layers, title: 'District Dashboard', desc: 'Multi-school oversight for district education officers.' },
            ].map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.08}>
                <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="inline-block px-2 py-0.5 rounded-md text-xs font-bold mb-3" style={{ background: 'rgba(232,184,75,0.15)', color: GOLD }}>
                    COMING SOON
                  </div>
                  <f.icon className="w-5 h-5 mb-2" style={{ color: 'rgba(255,255,255,0.4)' }} />
                  <h3 className="font-bold text-white text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-white/40">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
