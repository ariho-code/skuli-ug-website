import { useState, useEffect } from 'react';
import type { ReactNode, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import {
  FileText, TrendingUp, DollarSign, BookOpen, BarChart3, UserCheck,
  Smartphone, Brain, Shield, ArrowRight, Phone, Check, Plus,
  Timer, FileX2, Sparkles, MessageCircle,
} from 'lucide-react';
import Seo from '../lib/seo';
import { faqJsonLd } from '../lib/jsonld';

const GOLD = '#F57A12';
const GOLD_DEEP = '#DA6A0C';
const GOLD_LIGHT = '#FBA24A';
const INK = '#07182F';
const INK2 = '#0B2242';
const INK3 = '#123A66';
const CREAM = '#FAF7F0';

const APP_URL = 'https://school.skuliug.com';
const PHONE1 = '+256 760 730 254';
const PHONE2 = '+256 709 234 352';

const goldGrad = `linear-gradient(180deg, ${GOLD_LIGHT}, ${GOLD} 55%, ${GOLD_DEEP})`;
const goldTile = `linear-gradient(135deg, rgba(245,122,18,0.15), rgba(245,122,18,0.05))`;

/* ---------------- helpers ---------------- */
function FadeIn({ children, delay = 0, className = '', style }: { children: ReactNode; delay?: number; className?: string; style?: CSSProperties }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className} style={style}>
      {children}
    </motion.div>
  );
}

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0; const dur = 1200; const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const AI_TEXT = "Aisha is a hardworking and attentive pupil. She has shown excellent improvement in Mathematics this term and participates actively in class. With continued effort in English comprehension, she will achieve even more. Well done, Aisha!";
function AiComment() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });
  const [shown, setShown] = useState(AI_TEXT);
  useEffect(() => {
    if (!inView) return;
    let i = 0; setShown('');
    const id = setInterval(() => { i++; setShown(AI_TEXT.slice(0, i)); if (i >= AI_TEXT.length) clearInterval(id); }, 22);
    return () => clearInterval(id);
  }, [inView]);
  return <p ref={ref} className="text-[13.5px] leading-relaxed text-white/85 min-h-[5em]">{shown}</p>;
}

/* ---------------- data ---------------- */
const stats = [
  { Icon: Timer, to: 3, suffix: 'x', label: 'Faster report cards', sub: 'End-of-term reports in minutes, not weekends' },
  { Icon: Smartphone, to: 100, suffix: '%', label: 'Mobile ready', sub: 'Runs on any Android or iPhone, on mobile data' },
  { Icon: FileX2, to: 0, suffix: '', label: 'Excel files needed', sub: 'No spreadsheets, no manual tallying, ever' },
  { Icon: Sparkles, text: 'AI', label: 'Powered comments', sub: 'Personalised pupil comments written for you' },
];

const features = [
  { Icon: FileText, title: 'Smart report cards', desc: 'AI writes a personalised comment per pupil automatically. Teachers enter marks — the system does the rest.' },
  { Icon: TrendingUp, title: 'Mark sheets & grades', desc: 'Record performance per subject. Aggregates and class positions calculated instantly.' },
  { Icon: DollarSign, title: 'Fees tracking', desc: 'See paid, owing and outstanding per pupil. Instant fee reports any time, on any phone.' },
  { Icon: BookOpen, title: 'E-learning', desc: 'Share notes, lessons and assignments digitally with your pupils — anytime.' },
  { Icon: BarChart3, title: 'Analytics dashboard', desc: 'Class averages, top performers and term-on-term trends at a glance.' },
  { Icon: UserCheck, title: 'Teacher accounts', desc: 'Each teacher logs in and sees only their class. Secure, role-based and mobile-ready.' },
];

const steps = [
  { n: '01', title: 'We come to you', desc: 'Book a free demo and our team visits your school to set everything up — classes, pupils, teachers.' },
  { n: '02', title: 'Teachers enter marks', desc: 'On their own phones. The familiar way, but digital. No training headaches, no computer lab.' },
  { n: '03', title: 'Print & share instantly', desc: 'Report cards, fee statements and analytics ready in seconds. AI handles the comments.' },
];

const plans = [
  { name: 'Starter', sub: 'Under 150 pupils', price: '150,000', usd: '$40', hl: false, badge: null, f: ['Report cards & mark sheets', 'Fees tracking', 'Up to 5 teacher accounts', 'Mobile access'] },
  { name: 'Growth', sub: '150 – 400 pupils', price: '300,000', usd: '$80', hl: false, badge: null, f: ['Everything in Starter', 'E-learning module', 'AI report comments', 'Analytics dashboard', 'Up to 20 teachers'] },
  { name: 'Pro', sub: '400 – 800 pupils', price: '500,000', usd: '$130', hl: false, badge: null, f: ['Everything in Growth', 'Parent SMS alerts', 'Advanced analytics', 'Unlimited teachers', 'Priority support'] },
  { name: 'Enterprise', sub: '800+ pupils', price: '800,000+', usd: '$210+', hl: true, badge: 'Most commonly bought', f: ['Everything in Pro', 'Custom school branding', 'Multi-campus support', 'Dedicated onboarding'] },
];

const whySkuli = [
  { Icon: Smartphone, title: 'Mobile first', desc: 'Runs on any Android or iPhone on mobile data. No WiFi, no computer lab required.' },
  { Icon: Brain, title: 'AI built in', desc: 'AI writes personalised comments per pupil. Teachers enter marks — the system does the rest.' },
  { Icon: Shield, title: 'Secure & private', desc: 'Role-based access. Each teacher sees only what they need. Your data stays yours.' },
];

const faqs = [
  { q: 'Do teachers need laptops or a computer lab?', a: 'No. Skuli runs on any Android phone or iPhone using mobile data. Teachers enter marks from the phone already in their pocket — no laptops, no lab required.' },
  { q: 'How much does it cost?', a: 'One flat termly fee based on your school size, starting at UGX 150,000 per term. No per-teacher fees and no hidden charges. You pay three times a year — that\u2019s it.' },
  { q: 'Will it work with MTN and Airtel?', a: 'Yes. Skuli is built to work on Uganda\u2019s mobile networks, and parent SMS alerts (coming soon) are designed for both MTN and Airtel.' },
  { q: 'How do we get started?', a: 'Book a free demo. Our team comes to your school, sets up your classes, pupils and teacher accounts, and shows everyone how it works — usually within a day.' },
  { q: 'Is our school data safe?', a: 'Yes. Access is role-based, so each teacher only sees their own class. Your school\u2019s data stays private and belongs to you.' },
];


/* ---------------- page ---------------- */
export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div style={{ background: INK, color: '#fff' }}>
      <Seo
        title="Skuli UG — School Management System for Uganda"
        description="Skuli UG is Uganda's all-in-one school management system. Report cards, fees, e-learning and AI — all on your teachers' phones. Termly pricing from UGX 150,000."
        path="/"
        jsonLd={faqJsonLd(faqs)}
      />

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative flex items-center overflow-hidden pt-28 sm:pt-32 pb-16" style={{ minHeight: '100svh' }}>
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="glow absolute -top-32 right-[-10%] w-[640px] h-[640px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle at 60% 40%, rgba(245,122,18,.34), transparent 65%)` }} />
        <div className="absolute -bottom-40 -left-32 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(245,122,18,.10), transparent 70%)', filter: 'blur(40px)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-8 items-center w-full">
          {/* copy */}
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold mb-6"
              style={{ border: '1px solid rgba(245,122,18,0.3)', background: 'rgba(245,122,18,0.1)', color: GOLD }}>
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: GOLD }} /><span className="relative inline-flex rounded-full h-2 w-2" style={{ background: GOLD }} /></span>
              AI-POWERED · BUILT FOR UGANDA
            </div>
            <h1 className="font-display font-extrabold tracking-tight leading-[1.02] text-balance mb-6" style={{ fontSize: 'clamp(2.5rem,7vw,4.6rem)' }}>
              Your school.<br />
              <span className="gold-text">Fully digital.</span><br />
              Finally.
            </h1>
            <p className="text-pretty text-white/65 mb-5 max-w-xl" style={{ fontSize: 'clamp(1rem,1.6vw,1.2rem)', lineHeight: 1.65 }}>
              The all-in-one school management system built for Uganda's primary schools.
              Report cards, fees, e-learning and AI — all on your teachers' phones.{' '}
              <span className="text-white/90 font-semibold">No laptops. No Excel. No stress.</span>
            </p>
            <p className="text-white/45 mb-8 text-[15px] sm:text-base">
              One platform to manage{' '}
              <span className="gold-text font-semibold">
                <TypeAnimation sequence={['students', 1500, 'fees', 1500, 'academics', 1500, 'e-learning', 1500, 'parents', 1500, 'report cards', 1500]} wrapper="span" speed={50} repeat={Infinity} />
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <a href={`${APP_URL}/login`} className="btn-gold flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-[15px]">
                Book a free demo <ArrowRight className="w-4 h-4" />
              </a>
              <a href={`tel:${PHONE1.replace(/\s/g, '')}`} className="btn-ghost flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-[15px] text-white" style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}>
                <Phone className="w-4 h-4" style={{ color: GOLD }} /> {PHONE1}
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-white/45">
              {['Works on any phone', 'MTN & Airtel ready', 'Set up in a day'].map(t => (
                <span key={t} className="flex items-center gap-1.5"><Check className="w-4 h-4" style={{ color: GOLD }} /> {t}</span>
              ))}
            </div>
          </FadeIn>

          {/* product visual */}
          <FadeIn delay={0.15} className="relative flex justify-center lg:justify-end">
            <div className="ring-spin absolute hidden sm:block w-[340px] h-[340px] rounded-full border border-dashed" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', borderColor: 'rgba(245,122,18,0.2)' }} />

            {/* phone — real app screenshot */}
            <div className="phone-shadow float relative w-[270px] sm:w-[300px] rounded-[2.4rem] p-2.5" style={{ background: `linear-gradient(180deg, ${INK3}, ${INK2})`, border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="rounded-[1.9rem] overflow-hidden" style={{ background: '#fff' }}>
                <img src="/app-dashboard.png" alt="The Skuli UG dashboard running on a phone" className="block w-full h-auto" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── STATS ───────────────────────────── */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: INK }}>
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: GOLD }}>The Skuli difference</div>
            <h2 className="font-display font-extrabold tracking-tight text-balance" style={{ fontSize: 'clamp(1.75rem,4vw,2.6rem)', lineHeight: 1.08 }}>Real results, from day one</h2>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.07}>
                <div className="card-hover group rounded-3xl p-5 sm:p-7 h-full" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl grid place-items-center mb-4 sm:mb-5" style={{ background: goldTile }}>
                    <s.Icon className="w-[22px] h-[22px]" style={{ color: GOLD }} strokeWidth={2} />
                  </div>
                  <div className="font-display font-extrabold gold-text leading-none" style={{ fontSize: 'clamp(2.1rem,4.5vw,3.1rem)' }}>
                    {'text' in s ? s.text : <CountUp to={s.to as number} suffix={s.suffix} />}
                  </div>
                  <p className="font-display font-bold text-white text-[15px] sm:text-base mt-2">{s.label}</p>
                  <p className="text-[13px] text-white/45 leading-snug mt-1">{s.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES (LIGHT) ────────────────── */}
      <section className="py-20 sm:py-28" style={{ background: CREAM, color: '#0C2C57' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl mb-12 sm:mb-16">
            <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: GOLD_DEEP }}>What you get</div>
            <h2 className="font-display font-extrabold tracking-tight text-balance" style={{ fontSize: 'clamp(2rem,4.5vw,3.2rem)', lineHeight: 1.05 }}>One phone. Your whole school.</h2>
            <p className="mt-4 text-lg text-pretty" style={{ color: 'rgba(12,44,87,0.55)' }}>Everything a Ugandan primary school needs to run — built to work on the phone already in your teachers' pockets.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={(i % 3) * 0.06}>
                <div className="card-hover group rounded-3xl p-6 h-full" style={{ background: '#fff', border: '1px solid rgba(12,44,87,0.06)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <div className="w-12 h-12 rounded-2xl grid place-items-center mb-5" style={{ background: goldTile }}>
                    <f.Icon className="w-[22px] h-[22px]" style={{ color: GOLD_DEEP }} strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2" style={{ color: '#0C2C57' }}>{f.title}</h3>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: 'rgba(12,44,87,0.55)' }}>{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────── */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ background: INK }}>
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(245,122,18,.07), transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: GOLD }}>Up and running fast</div>
            <h2 className="font-display font-extrabold tracking-tight text-balance" style={{ fontSize: 'clamp(2rem,4.5vw,3.2rem)', lineHeight: 1.05 }}>From paper to digital in a day</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.1}>
                <div className="card-hover rounded-3xl p-7 h-full" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-display font-extrabold text-5xl gold-text mb-4">{s.n}</div>
                  <h3 className="font-display font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-white/55 leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI HIGHLIGHT ────────────────────── */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${INK}, ${INK2})` }}>
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5 whitespace-nowrap" style={{ background: GOLD, color: INK }}>
              <Sparkles className="w-3.5 h-3.5" /> AI BUILT IN
            </div>
            <h2 className="font-display font-extrabold tracking-tight text-balance mb-5" style={{ fontSize: 'clamp(2rem,4.5vw,3.2rem)', lineHeight: 1.05 }}>
              Report card comments,<br /><span className="gold-text">written for you.</span>
            </h2>
            <p className="text-white/60 text-lg text-pretty mb-6 max-w-lg">
              Teachers enter marks. Skuli's AI drafts a personalised, professional comment for every single pupil — saving hours of writing every end of term. Edit, approve, print.
            </p>
            <ul className="space-y-3 mb-8">
              {['Personalised per pupil & per subject', 'Professional tone, always appropriate', 'Teachers stay in full control'].map(t => (
                <li key={t} className="flex items-start gap-3 text-white/75">
                  <span className="mt-0.5 w-5 h-5 rounded-full grid place-items-center flex-shrink-0" style={{ background: 'rgba(245,122,18,0.15)' }}><Check className="w-3 h-3" style={{ color: GOLD }} strokeWidth={3} /></span> {t}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-gold inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-[15px]">See it in your demo <ArrowRight className="w-4 h-4" /></Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-3xl p-5 sm:p-6 shadow-2xl" style={{ background: 'rgba(11,34,66,0.8)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="flex items-center justify-between mb-4 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full grid place-items-center font-bold text-sm" style={{ background: goldGrad, color: '#0C2C57' }}>AN</div>
                  <div><p className="font-bold text-sm">Aisha Namatovu</p><p className="text-[11px] text-white/40">Primary 5 · Term 1 Report</p></div>
                </div>
                <span className="text-[10px] font-bold px-2 py-1 rounded-full" style={{ background: 'rgba(16,185,129,0.15)', color: '#34d399' }}>Aggregate 8</span>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-[13px]"><span className="text-white/60">Mathematics</span><span className="font-semibold text-white">86 · D1</span></div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}><div className="h-full rounded-full" style={{ width: '86%', background: GOLD }} /></div>
                <div className="flex items-center justify-between text-[13px] pt-1"><span className="text-white/60">English</span><span className="font-semibold text-white">79 · D2</span></div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}><div className="h-full rounded-full" style={{ width: '79%', background: GOLD }} /></div>
              </div>
              <div className="rounded-2xl p-4" style={{ background: 'rgba(245,122,18,0.08)', border: '1px solid rgba(245,122,18,0.2)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-3.5 h-3.5" style={{ color: GOLD }} />
                  <span className="text-[11px] font-bold uppercase tracking-wide" style={{ color: GOLD }}>AI-generated comment</span>
                </div>
                <AiComment />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── PRICING (LIGHT) ─────────────────── */}
      <section id="pricing" className="py-20 sm:py-28" style={{ background: CREAM, color: '#0C2C57' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl mb-12 sm:mb-14">
            <div className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: GOLD_DEEP }}>Termly pricing · pay once per term</div>
            <h2 className="font-display font-extrabold tracking-tight text-balance" style={{ fontSize: 'clamp(2rem,4.5vw,3.2rem)', lineHeight: 1.05 }}>Priced for Uganda's schools</h2>
            <p className="mt-4 text-lg text-pretty" style={{ color: 'rgba(12,44,87,0.55)' }}>No per-teacher fees. No hidden charges. One flat termly rate based on your school size — three terms a year, that's all you pay.</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.07}>
                <div className="card-hover relative rounded-3xl p-7 flex flex-col h-full"
                  style={p.hl
                    ? { background: INK, color: '#fff', boxShadow: '0 30px 60px -20px rgba(218,106,12,0.5)', border: `2px solid ${GOLD}` }
                    : { background: '#fff', color: '#0C2C57', border: '1px solid rgba(12,44,87,0.07)' }}>
                  {p.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[11px] font-bold whitespace-nowrap" style={{ background: GOLD, color: INK }}>{p.badge}</div>}
                  <h3 className="font-display font-extrabold text-xl">{p.name}</h3>
                  <p className="text-xs mb-4" style={{ color: p.hl ? 'rgba(255,255,255,0.45)' : 'rgba(12,44,87,0.45)' }}>{p.sub}</p>
                  <div className="font-display font-extrabold text-3xl" style={{ color: p.hl ? GOLD : '#0C2C57' }}>UGX {p.price}</div>
                  <div className="text-xs mt-1 mb-6" style={{ color: p.hl ? 'rgba(255,255,255,0.4)' : 'rgba(12,44,87,0.45)' }}>per term · {p.usd}</div>
                  <ul className="space-y-3 flex-1 mb-6 text-sm">
                    {p.f.map(x => (
                      <li key={x} className="flex items-start gap-2.5" style={{ color: p.hl ? 'rgba(255,255,255,0.75)' : 'rgba(12,44,87,0.65)' }}>
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: p.hl ? GOLD : '#16a34a' }} strokeWidth={2.5} /> {x}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={p.hl ? 'btn-gold block text-center py-3.5 rounded-2xl text-sm font-bold' : 'block text-center py-3.5 rounded-2xl text-sm font-bold transition'} style={p.hl ? undefined : { background: INK, color: '#fff' }}>Get started</Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-7">
            <div className="rounded-3xl px-6 sm:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5" style={{ background: INK, color: '#fff' }}>
              <div>
                <span className="inline-block px-3 py-1 rounded-lg text-[11px] font-bold mb-2" style={{ background: 'rgba(245,122,18,0.15)', color: GOLD, border: '1px solid rgba(245,122,18,0.3)' }}>CUSTOM BUILD</span>
                <p className="text-white/80 text-[15px] max-w-2xl"><span className="font-bold text-white">Want a system built for your school specifically?</span> We build fully bespoke school systems — your branding, your workflow, your features.</p>
              </div>
              <Link to="/contact" className="btn-gold flex-shrink-0 px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap">Get a quote</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── WHY SKULI ───────────────────────── */}
      <section className="py-20 sm:py-24" style={{ background: INK2 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-5">
          {whySkuli.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div className="rounded-3xl p-7 h-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="w-12 h-12 rounded-2xl grid place-items-center mb-5" style={{ background: goldTile }}>
                  <item.Icon className="w-6 h-6" style={{ color: GOLD }} strokeWidth={2} />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/55 leading-relaxed text-[15px]">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────── */}
      <section className="py-20 sm:py-28" style={{ background: INK }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: GOLD }}>Questions?</div>
            <h2 className="font-display font-extrabold tracking-tight" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', lineHeight: 1.05 }}>Everything you need to know</h2>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <FadeIn key={f.q} delay={i * 0.05}>
                  <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <button onClick={() => setOpenFaq(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left">
                      <span className="font-display font-semibold text-[15px] sm:text-base text-white">{f.q}</span>
                      <Plus className="w-5 h-5 flex-shrink-0 transition-transform duration-300" style={{ color: GOLD, transform: isOpen ? 'rotate(45deg)' : 'none' }} />
                    </button>
                    <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: 'hidden' }}>
                      <div className="px-5 sm:px-6 pb-5 -mt-1 text-white/55 text-[14.5px] leading-relaxed">{f.a}</div>
                    </motion.div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────── */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${INK2}, ${INK})` }}>
        <div className="glow absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(245,122,18,.18), transparent 70%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-[2rem] p-8 sm:p-12 text-center" style={{ border: '1px solid rgba(245,122,18,0.2)', background: 'linear-gradient(180deg, rgba(255,255,255,0.05), transparent)' }}>
              <h2 className="font-display font-extrabold tracking-tight text-balance mb-4" style={{ fontSize: 'clamp(2rem,5vw,3.4rem)', lineHeight: 1.04 }}>Ready to digitalise your school?</h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-8 text-pretty">Book a free demo. We come to your school, show you everything, and get you set up — no obligation.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
                <a href="https://wa.me/256760730254" target="_blank" rel="noreferrer" className="btn-gold flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base">
                  <MessageCircle className="w-5 h-5" /> Call or WhatsApp us
                </a>
                <a href={`tel:${PHONE1.replace(/\s/g, '')}`} className="btn-ghost flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white" style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}>{PHONE1}</a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/50">
                <a href={`tel:${PHONE2.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white transition"><Phone className="w-4 h-4" style={{ color: GOLD }} /> {PHONE2}</a>
                <a href="mailto:sales@skuliug.com" className="flex items-center gap-2 hover:text-white transition"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></svg> sales@skuliug.com</a>
                <span className="flex items-center gap-2"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg> Kampala, Uganda</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
