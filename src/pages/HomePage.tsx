import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  DollarSign, BarChart3, Users, BookOpen, Smartphone, Brain, Bell, Shield,
  CheckCircle2, ArrowUpRight, Phone, TrendingUp, Layers, UserCheck, Calendar,
  FileText, Sparkles, Star, MessageCircle,
} from 'lucide-react';

const APP_URL = 'https://primary.skuliug.com';
const PHONE1 = '+256 760 730 254';
const PHONE2 = '+256 709 234 352';

/* ─── Reveal on scroll ──────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  y = 18,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Data ─────────────────────────────────────────────── */
const features = [
  { icon: FileText,     title: 'AI report cards',     desc: 'Personalised end-of-term comments written automatically. Teachers enter marks — Skuli writes.' },
  { icon: TrendingUp,   title: 'Marks & grade books', desc: 'Subject-level mark entry with instant aggregates, positions and grade bands.' },
  { icon: DollarSign,   title: 'Fees & invoices',     desc: 'Track paid, owing and outstanding fees per pupil. Generate receipts in one tap.' },
  { icon: BookOpen,     title: 'E-learning',          desc: 'Share notes, lessons and assignments. Submission and grading happens online.' },
  { icon: BarChart3,    title: 'Analytics',           desc: 'Class averages, top performers and term-on-term trends — visualised, not buried.' },
  { icon: UserCheck,    title: 'Teacher accounts',    desc: 'Every teacher logs in on their own phone. Role-based access, secure by default.' },
];

const pricingPlans = [
  {
    name: 'Starter', sub: 'Under 150 pupils',
    price: '150,000', usd: '$40', popular: false,
    features: ['Report cards & mark sheets', 'Fees tracking', 'Up to 5 teacher accounts', 'Mobile access'],
  },
  {
    name: 'Growth', sub: '150 – 400 pupils',
    price: '300,000', usd: '$80', popular: true,
    features: ['Everything in Starter', 'E-learning module', 'AI report comments', 'Analytics dashboard', 'Up to 20 teachers'],
  },
  {
    name: 'Pro', sub: '400 – 800 pupils',
    price: '500,000', usd: '$130', popular: false,
    features: ['Everything in Growth', 'Parent SMS alerts', 'Advanced analytics', 'Unlimited teachers', 'Priority support'],
  },
  {
    name: 'Enterprise', sub: '800+ pupils',
    price: '800,000+', usd: '$210+', popular: false,
    features: ['Everything in Pro', 'Custom school branding', 'Multi-campus support', 'Dedicated onboarding', 'Custom reports'],
  },
];

const stats = [
  { value: '3×',  label: 'Faster report cards' },
  { value: '100%', label: 'Mobile ready' },
  { value: '0',    label: 'Excel files needed' },
  { value: 'AI',   label: 'Powered comments' },
];

const testimonials = [
  { quote: 'End of term used to take weeks of paperwork. Now it takes one evening — and the AI comments sound like our teachers.', author: 'Mrs. Nakato', role: 'Headteacher, Kampala' },
  { quote: 'Parents can see fees and marks the moment we update them. The phone calls have gone down by half.', author: 'Mr. Ssebunya', role: 'Director of Studies' },
  { quote: 'We finally know exactly who owes what — no more digging through notebooks.', author: 'Ms. Achieng', role: 'School Bursar' },
];

/* ─── Page ─────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="bg-paper text-ink">

      {/* ════════════════ HERO ════════════════ */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 paper-grain overflow-hidden">
        {/* Soft brand orb (very subtle, no AI-gradient cliché) */}
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[640px] h-[640px] rounded-full opacity-40 pointer-events-none drift"
          style={{ background: 'radial-gradient(closest-side, rgba(200,147,46,0.22), transparent 70%)' }}
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full opacity-30 pointer-events-none"
          style={{ background: 'radial-gradient(closest-side, rgba(194,92,46,0.16), transparent 70%)' }}
        />

        <div className="relative max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full text-[11px] font-semibold tracking-wide mb-7"
              style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid var(--line)' }}>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider"
                style={{ background: 'var(--ink)', color: 'var(--paper-2)' }}>NEW</span>
              <span className="text-muted">AI-written report card comments</span>
              <Sparkles className="w-3 h-3 text-gold" />
            </div>

            <h1 className="font-display text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.98] tracking-tightest text-ink mb-6">
              School management,
              <span className="block">
                made <span className="font-display-italic text-gold">graceful.</span>
              </span>
            </h1>

            <p className="text-[17px] lg:text-[18.5px] text-muted max-w-xl leading-relaxed mb-9">
              Skuli is the all-in-one platform built for Uganda's primary schools — report cards,
              fees, e-learning and AI, on every teacher's phone. No laptops. No Excel. No stress.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a href={`${APP_URL}/login`} className="btn btn-primary group">
                Book a free demo
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href={`tel:${PHONE1.replace(/\s/g, '')}`} className="btn btn-ghost">
                <Phone className="w-4 h-4 text-gold" />
                {PHONE1}
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex items-center gap-5 text-[13px] text-muted">
              <div className="flex -space-x-2">
                {['#C8932E','#1C1A17','#C25C2E','#6E665C'].map((c,i) => (
                  <span key={i} className="w-7 h-7 rounded-full ring-2 ring-paper"
                    style={{ background: c }} />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[0,1,2,3,4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />)}
                </div>
                <span>Trusted by schools across Uganda</span>
              </div>
            </div>
          </Reveal>

          {/* Visual: a paper card with stats + a faux preview */}
          <Reveal delay={0.12} y={28}>
            <div className="relative">
              {/* Backdrop card */}
              <div className="absolute inset-0 rounded-3xl bg-paper-2 -rotate-2 shadow-paper-lg" />
              {/* Foreground card */}
              <div className="relative rounded-3xl bg-paper-2 border border-[color:var(--line)] p-7 shadow-paper">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-muted">
                      Term 2 — 2026
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-muted">v 4.2</span>
                </div>

                <div className="font-display text-[26px] leading-tight text-ink mb-1">
                  Nakato Sarah <span className="text-muted font-sans text-[14px] font-normal align-middle">P5 Blue</span>
                </div>
                <p className="text-[13.5px] text-muted leading-relaxed mb-5">
                  Sarah has shown remarkable improvement in mathematics this term — her perseverance
                  with long division stands out. <span className="text-ink font-medium">Encourage more reading at home.</span>
                </p>

                <div className="grid grid-cols-2 gap-2.5 mb-5">
                  {[
                    { s: 'Math',     m: 84, g: 'A' },
                    { s: 'English',  m: 78, g: 'B' },
                    { s: 'Science',  m: 81, g: 'A' },
                    { s: 'Social',   m: 72, g: 'B' },
                  ].map(row => (
                    <div key={row.s} className="flex items-center justify-between rounded-xl px-3.5 py-2.5 bg-paper border border-[color:var(--line)]">
                      <span className="text-[13px] font-medium text-ink">{row.s}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[12.5px] text-muted">{row.m}</span>
                        <span className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded-md bg-gold/15 text-[color:var(--gold-deep)]"
                          style={{ background: 'rgba(200,147,46,0.16)', color: '#8F6817' }}>
                          {row.g}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rule mb-5" />

                <div className="grid grid-cols-4 gap-3">
                  {stats.map(s => (
                    <div key={s.label} className="text-center">
                      <div className="font-display text-[22px] font-semibold text-ink leading-none">{s.value}</div>
                      <div className="text-[9.5px] font-semibold tracking-wider uppercase text-muted-2 mt-1.5 leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating chip */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-5 -left-5 flex items-center gap-2 px-3.5 py-2 rounded-full bg-ink text-paper-2 shadow-paper-lg"
              >
                <Brain className="w-3.5 h-3.5 text-gold" />
                <span className="text-[12px] font-medium">Comments written by Skuli AI</span>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ MARQUEE — feature labels ════════════════ */}
      <section className="border-y border-[color:var(--line)] bg-paper-2 overflow-hidden">
        <div className="py-5 flex">
          <div className="flex gap-12 whitespace-nowrap marquee-track">
            {[
              'AI report comments', 'Termly fees tracking', 'Mark sheets',
              'E-learning module', 'Parent SMS (coming soon)', 'Staff chat',
              'Timetable builder', 'Multi-campus ready', 'MTN & Airtel friendly',
              // duplicate for seamless loop
              'AI report comments', 'Termly fees tracking', 'Mark sheets',
              'E-learning module', 'Parent SMS (coming soon)', 'Staff chat',
              'Timetable builder', 'Multi-campus ready', 'MTN & Airtel friendly',
            ].map((t, i) => (
              <span key={i} className="flex items-center gap-3 text-[13px] font-medium text-muted">
                <span className="w-1 h-1 rounded-full bg-gold" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ FEATURES ════════════════ */}
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal className="mb-14 max-w-2xl">
            <div className="eyebrow mb-5">What you get</div>
            <h2 className="font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.02] tracking-tightest text-ink mb-5">
              One phone.<br />Your whole school.
            </h2>
            <p className="text-[16.5px] text-muted leading-relaxed">
              Every module a Ugandan primary school actually uses — designed for our curriculum,
              our school calendar, and the devices teachers already carry.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[color:var(--line)] rounded-2xl overflow-hidden border border-[color:var(--line)]">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="group h-full bg-paper p-7 transition-colors hover:bg-paper-2 cursor-default">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-paper-2 border border-[color:var(--line)] group-hover:border-gold transition-colors">
                      <f.icon className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-[11px] font-mono text-muted-2">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-[20px] font-semibold text-ink mb-2 tracking-tight">{f.title}</h3>
                  <p className="text-[14.5px] text-muted leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-[13.5px] text-muted">
            <span>Explore the full feature set</span>
            <Link to="/features" className="inline-flex items-center gap-1 text-ink font-medium link-reveal">
              See everything <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════ AI HIGHLIGHT (dark) ════════════════ */}
      <section className="relative py-24 lg:py-28 bg-ink text-paper-2 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 right-1/4 w-[520px] h-[520px] rounded-full pointer-events-none drift"
          style={{ background: 'radial-gradient(closest-side, rgba(200,147,46,0.18), transparent 70%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 mb-6 text-[11px] font-semibold tracking-[0.18em] uppercase text-gold-soft">
              <Sparkles className="w-3.5 h-3.5" /> Skuli AI
            </div>
            <h2 className="font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.04] tracking-tightest mb-6">
              Personalised comments,<br />
              <span className="font-display-italic text-gold-soft">written for every pupil.</span>
            </h2>
            <p className="text-[16.5px] text-paper-3/80 leading-relaxed mb-8 max-w-lg">
              At end of term, teachers spend weekends crafting report card comments. Skuli AI reads
              each pupil's marks, attendance and history, then drafts comments in your school's
              voice — saving hours, sounding human.
            </p>

            <ul className="space-y-3 text-[14.5px]">
              {[
                'Comments grounded in the actual marks',
                'School-specific tone & terminology',
                'Editable before sign-off — always',
                'Works offline on submission',
              ].map(p => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                  <span className="text-paper-3/85">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            {/* Mock AI panel */}
            <div className="relative rounded-2xl p-6 lg:p-7"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                </div>
                <span className="text-[12px] font-mono text-white/40 ml-2">skuli.ai · comments</span>
              </div>

              <div className="space-y-4 text-[13.5px] leading-relaxed">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-white/35 mb-1.5">Input</div>
                  <div className="rounded-lg px-3.5 py-2.5 font-mono text-[12.5px] text-paper-3/80"
                    style={{ background: 'rgba(255,255,255,0.04)' }}>
                    pupil: Sarah, P5 · maths: 84↑ · english: 78 · attendance: 96%
                  </div>
                </div>

                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-gold-soft mb-1.5">Generated</div>
                  <div className="rounded-lg px-3.5 py-3 text-paper-3"
                    style={{ background: 'rgba(200,147,46,0.08)', border: '1px solid rgba(200,147,46,0.18)' }}>
                    "Sarah has shown remarkable progress in mathematics this term, and her attendance
                    is exemplary. With more consistent reading at home, her English will follow."
                    <span className="cursor text-gold-soft" />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 text-[11.5px] font-mono text-white/35">
                  <span>0.34s · 412 pupils ready</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 soft-pulse" />
                    streaming
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ PRICING ════════════════ */}
      <section id="pricing" className="py-24 lg:py-32 bg-paper">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal className="mb-14 max-w-2xl">
            <div className="eyebrow mb-5">Termly pricing — pay once per term</div>
            <h2 className="font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.02] tracking-tightest text-ink mb-5">
              Priced for <span className="font-display-italic text-gold">Uganda's schools.</span>
            </h2>
            <p className="text-[16.5px] text-muted leading-relaxed">
              No per-teacher fees. No hidden charges. One flat termly rate based on your school
              size. Three terms a year — that's all you pay.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pricingPlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.07}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-2xl p-7 h-full flex flex-col"
                  style={{
                    background: plan.popular ? 'var(--ink)' : 'var(--paper-2)',
                    color:      plan.popular ? 'var(--paper-2)' : 'var(--ink)',
                    border:     plan.popular ? '1px solid var(--ink)' : '1px solid var(--line)',
                    boxShadow:  plan.popular ? 'var(--shadow-lg)' : 'none',
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-2.5 left-7 px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-wider uppercase"
                      style={{ background: 'var(--gold)', color: '#1A1611' }}>
                      Most popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className={`font-display text-[22px] font-semibold tracking-tight ${plan.popular ? '' : 'text-ink'}`}>{plan.name}</h3>
                    <p className={`text-[12.5px] mt-0.5 ${plan.popular ? 'text-paper-3/65' : 'text-muted'}`}>{plan.sub}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-[12.5px] font-medium ${plan.popular ? 'text-paper-3/65' : 'text-muted'}`}>UGX</span>
                      <span className="font-display text-[34px] font-semibold tracking-tight">{plan.price}</span>
                    </div>
                    <div className={`text-[12px] mt-0.5 ${plan.popular ? 'text-paper-3/55' : 'text-muted-2'}`}>
                      per term · {plan.usd}
                    </div>
                  </div>

                  <ul className="space-y-2.5 flex-1 mb-7">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-[13.5px] leading-snug">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-gold-soft' : 'text-gold'}`} />
                        <span className={plan.popular ? 'text-paper-3/85' : 'text-muted'}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="btn w-full"
                    style={
                      plan.popular
                        ? { background: 'var(--gold)', color: '#1A1611' }
                        : { background: 'var(--ink)', color: 'var(--paper-2)' }
                    }
                  >
                    Get started <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {/* Custom build banner */}
          <Reveal delay={0.15}>
            <div className="mt-10 rounded-2xl p-7 lg:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-paper-2 border border-[color:var(--line)]">
              <div className="max-w-xl">
                <div className="eyebrow mb-3" style={{ color: 'var(--clay)' }}>Custom build</div>
                <h3 className="font-display text-[22px] font-semibold tracking-tight text-ink mb-2">
                  Want a system built for your school specifically?
                </h3>
                <p className="text-[14px] text-muted leading-relaxed">
                  Your branding, your workflow, your features. We build bespoke school management
                  systems for districts, MOEs and independent schools.
                </p>
              </div>
              <Link to="/contact" className="btn btn-gold flex-shrink-0">
                Get a quote <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ TESTIMONIALS ════════════════ */}
      <section className="py-24 lg:py-28 bg-paper-2 border-y border-[color:var(--line)]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal className="mb-14 max-w-2xl">
            <div className="eyebrow mb-5">From Ugandan schools</div>
            <h2 className="font-display text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.02] tracking-tightest text-ink">
              Words from the headteachers' room.
            </h2>
          </Reveal>

          <div className="grid lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 0.08}>
                <figure className="card h-full flex flex-col bg-paper">
                  <div className="flex gap-0.5 mb-4">
                    {[0,1,2,3,4].map(j => <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />)}
                  </div>
                  <blockquote className="font-display text-[19px] leading-snug text-ink mb-5 flex-1">
                    "{t.quote}"
                  </blockquote>
                  <figcaption>
                    <div className="text-[14px] font-semibold text-ink">{t.author}</div>
                    <div className="text-[12.5px] text-muted">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ WHY SKULI ════════════════ */}
      <section className="py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { icon: Smartphone, title: 'Mobile first',     desc: 'Runs on any Android or iPhone on mobile data. No WiFi, no computer lab required.' },
              { icon: Brain,      title: 'AI built in',      desc: 'AI drafts personalised comments per pupil. Teachers enter marks — Skuli does the rest.' },
              { icon: Shield,     title: 'Secure & private', desc: 'Role-based access. Each teacher sees only what they need. Your data stays yours.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="card h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-paper border border-[color:var(--line)]">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-[20px] font-semibold text-ink mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-[14.5px] text-muted leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ CTA ════════════════ */}
      <section className="relative py-24 lg:py-28 bg-ink text-paper-2 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 35%), radial-gradient(circle at 80% 80%, var(--clay) 0, transparent 40%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <Reveal>
            <div className="eyebrow mb-5 justify-center mx-auto" style={{ color: 'var(--gold-soft)' }}>Ready when you are</div>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.02] tracking-tightest mb-5">
              Bring your school online,<br />
              <span className="font-display-italic text-gold-soft">this term.</span>
            </h2>
            <p className="text-[16.5px] text-paper-3/75 leading-relaxed mb-9 max-w-xl mx-auto">
              We come to your school. Set up takes one afternoon. Your first term-end report
              cards write themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-7">
              <a
                href="https://wa.me/256760730254"
                target="_blank" rel="noreferrer"
                className="btn"
                style={{ background: 'var(--gold)', color: '#1A1611' }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp us
              </a>
              <a href={`tel:${PHONE1.replace(/\s/g,'')}`} className="btn btn-dark-on-dark">
                <Phone className="w-4 h-4 text-gold-soft" />
                {PHONE1}
              </a>
            </div>
            <p className="text-[12.5px] text-paper-3/45">
              Or call <a href={`tel:${PHONE2.replace(/\s/g,'')}`} className="text-paper-3/80 hover:text-paper-2 link-reveal">{PHONE2}</a>
              <span className="mx-2">·</span>
              No obligation, no laptops required
            </p>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ COMING SOON ════════════════ */}
      <section className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal className="mb-12 max-w-2xl">
            <div className="eyebrow mb-5">On the roadmap</div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-[1.05] tracking-tightest text-ink">
              What we're building next.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Bell,     title: 'SMS to parents',     desc: 'MTN & Airtel alerts for fees and results.' },
              { icon: Users,    title: 'Parent portal app',   desc: 'Dedicated login for fees, marks and notices.' },
              { icon: Calendar, title: 'Timetable builder',   desc: 'Drag-and-drop schedules for every class.' },
              { icon: Layers,   title: 'District dashboard',  desc: 'Multi-school oversight for officers.' },
            ].map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="rounded-2xl p-5 h-full bg-paper-2 border border-dashed border-[color:var(--line-strong)]">
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase mb-3 px-2 py-0.5 rounded-md"
                    style={{ background: 'rgba(194,92,46,0.10)', color: 'var(--clay)' }}>
                    soon
                  </span>
                  <f.icon className="w-5 h-5 mb-2 text-muted" />
                  <h3 className="font-display text-[16px] font-semibold text-ink mb-1 tracking-tight">{f.title}</h3>
                  <p className="text-[12.5px] text-muted">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
