import { useState, useEffect } from 'react';
import type { ComponentType, ReactNode, SVGProps } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Phone, MessageCircle } from 'lucide-react';

const APP_URL = 'https://school.skuliug.com';
const PHONE1 = '+256 760 730 254';
const PHONE2 = '+256 709 234 352';
const TERM = 'Term 2 · 2026';
const PLACE = 'Kampala, Uganda';

/* ──────────────────────────────────────────────────────────
   Animation primitives
   ────────────────────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  y = 14,
  className = '',
}: {
  children: ReactNode;
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
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function useAnimatedCounter(target: number, duration = 1600) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.35 });
  useEffect(() => {
    if (!inView) return;
    let frame: number;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      frame = requestAnimationFrame(() => setCount(target));
      return () => cancelAnimationFrame(frame);
    }
    const start = performance.now();
    const animate = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - p, 4)) * target));
      if (p < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);
  return [ref, count] as const;
}

/* ──────────────────────────────────────────────────────────
   Inline SVG glyphs — drawn for this project, gold accent
   ────────────────────────────────────────────────────────── */
type GlyphProps = SVGProps<SVGSVGElement>;

function GlyphReport(props: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M7 4h13l4 4v20H7z" />
      <path d="M20 4v4h4" />
      <path d="M10.5 13.5h11M10.5 17.5h11M10.5 21.5h7" />
      <circle cx="22" cy="22.5" r="2.5" fill="currentColor" opacity="0.18" stroke="none" />
    </svg>
  );
}
function GlyphPhone(props: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="9" y="3" width="14" height="26" rx="2.5" />
      <path d="M12 8h8M12 12h8M12 16h5" />
      <rect x="12" y="20" width="8" height="5" rx="1" fill="currentColor" opacity="0.15" stroke="none" />
      <circle cx="16" cy="27.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function GlyphCoins(props: GlyphProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="16" cy="9" rx="9" ry="3" />
      <path d="M7 9v3c0 1.66 4.03 3 9 3s9-1.34 9-3V9" />
      <path d="M7 15v3c0 1.66 4.03 3 9 3s9-1.34 9-3v-3" />
      <path d="M7 21v3c0 1.66 4.03 3 9 3s9-1.34 9-3v-3" />
    </svg>
  );
}
function GlyphStar(props: GlyphProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.6 6.7L12 16.9 5.8 20.2l1.6-6.7L2.2 8.9l6.9-.6L12 2z" />
    </svg>
  );
}
function GlyphSeal(props: GlyphProps) {
  return (
    <svg viewBox="0 0 96 96" fill="none" stroke="currentColor" strokeWidth="1.4" {...props}>
      <circle cx="48" cy="48" r="38" />
      <circle cx="48" cy="48" r="31" strokeDasharray="2 3" opacity="0.55" />
      <circle cx="48" cy="48" r="17" />
      <text x="48" y="52" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="700" letterSpacing="0.16em" fill="currentColor" stroke="none">SKULI</text>
      <path d="M48 4v8M48 84v8M4 48h8M84 48h8M14 14l6 6M76 14l-6 6M14 82l6-6M76 82l-6-6" />
    </svg>
  );
}

/* ──────────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────────── */
type Glyph = ComponentType<GlyphProps>;

const featureSpreads: Array<{ n: string; title: string; glyph: Glyph; body: string; chip: string }> = [
  {
    n: 'No. 01',
    title: 'Report cards, drafted by Skuli AI',
    glyph: GlyphReport,
    body:
      "Teachers enter the marks. Skuli reads each pupil — their subjects, attendance, term-on-term trajectory — and drafts a personalised comment in your school's own voice. Always editable; teachers always have the last word.",
    chip: 'Avg. 412 cards per school, per term',
  },
  {
    n: 'No. 02',
    title: 'Marks & grade books on every phone',
    glyph: GlyphPhone,
    body:
      'Subject-level mark entry from any Android or iPhone, on 3G or 4G data. Aggregates, positions and grade bands calculated as you tap. No more shared computer in the head\'s office; no more nights at the staff-room desk.',
    chip: '24,000+ marks entered last term',
  },
  {
    n: 'No. 03',
    title: 'Fees, receipted in real time',
    glyph: GlyphCoins,
    body:
      'Every payment logged with date, term and receipt. Bursars see who has paid and who owes, to the shilling. Parents see updates the moment a teacher records them — no waiting, no phone calls, no surprises.',
    chip: 'Live since Term 1, 2025',
  },
];

const dateline = [
  { school: 'St. Catherine PS',  pupils: 412, district: 'Wakiso' },
  { school: 'Bright Future PS',  pupils: 268, district: 'Kampala' },
  { school: 'Hilltop Junior',    pupils: 593, district: 'Mukono' },
  { school: 'New Generation PS', pupils: 187, district: 'Jinja' },
  { school: 'Pearl Academy',     pupils: 740, district: 'Mbarara' },
  { school: 'Cradle View PS',    pupils: 322, district: 'Gulu' },
];

const numbers = [
  { v: 47,     suffix: '',  cap: 'Schools registered this term' },
  { v: 35000,  suffix: '+', cap: 'Pupils on the roll' },
  { v: 200000, suffix: '+', cap: 'AI report comments drafted' },
  { v: 3,      suffix: '×', cap: 'Faster end of term, on average' },
];

const letters = [
  {
    body: 'End of term used to take weeks of paperwork. Now it takes one evening — and the AI comments sound like our teachers.',
    signed: 'Mrs. Nakato',
    role: 'Headteacher · St. Catherine PS, Wakiso',
    initial: 'N',
    color: '#C8932E',
  },
  {
    body: 'Parents can see fees and marks the moment we update them. The phone calls have gone down by half. The complaints, even more.',
    signed: 'Mr. Ssebunya',
    role: 'Director of Studies · Bright Future PS, Kampala',
    initial: 'S',
    color: '#1C1A17',
  },
  {
    body: "We finally know exactly who owes what — no more digging through notebooks at the end of every month. The bursar's table is clear for the first time in years.",
    signed: 'Ms. Achieng',
    role: 'School Bursar · Hilltop Junior, Mukono',
    initial: 'A',
    color: '#C25C2E',
  },
];

const setupSteps = [
  { roman: 'I',   title: 'Register your school', body: 'Sign up online or over WhatsApp. We set up your school profile, term calendar and class structure in minutes — at no cost.' },
  { roman: 'II',  title: 'Onboard the teachers', body: 'Each teacher signs in on their own phone — Android or iPhone, on 3G or 4G data. No laptops needed, no IT department required.' },
  { roman: 'III', title: 'Enter marks once',     body: 'Teachers enter marks per subject. Skuli auto-calculates aggregates, positions and grade bands — and saves a draft until you sign off.' },
  { roman: 'IV',  title: 'Skuli does the rest',  body: 'Skuli AI drafts the comments. You review, edit if needed, and print professional report cards — in one evening, not three weekends.' },
];

const feePlans = [
  { roman: 'I',   name: 'Starter',    sub: 'under 150 pupils',  price: '150,000', usd: '$40',   popular: false, includes: 'Report cards, fees tracking, mark sheets, mobile access, up to 5 teacher accounts.' },
  { roman: 'II',  name: 'Growth',     sub: '150 – 400 pupils',  price: '300,000', usd: '$80',   popular: true,  includes: 'Everything in Starter, plus e-learning, AI report comments, analytics dashboard, up to 20 teachers.' },
  { roman: 'III', name: 'Pro',        sub: '400 – 800 pupils',  price: '500,000', usd: '$130',  popular: false, includes: 'Everything in Growth, plus parent SMS alerts, advanced analytics, unlimited teachers, priority support.' },
  { roman: 'IV',  name: 'Enterprise', sub: '800+ pupils',       price: '800,000', usd: '$210+', popular: false, includes: 'Everything in Pro, plus custom school branding, multi-campus support, dedicated onboarding, custom reports.' },
];

/* ──────────────────────────────────────────────────────────
   Page
   ────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="bg-paper text-ink">
      {/* ════════════════ I. HERO / MASTHEAD ════════════════ */}
      <section className="relative pt-32 lg:pt-36 pb-20 lg:pb-24 paper-grain overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full opacity-40 pointer-events-none drift"
          style={{ background: 'radial-gradient(closest-side, rgba(200,147,46,0.18), transparent 70%)' }}
        />

        <div className="relative max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="masthead mb-10 lg:mb-14">
              <span>Skuli · A Prospectus</span>
              <span className="hair" />
              <span>Volume I · {TERM}</span>
              <span className="hair" />
              <span>{PLACE}</span>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            <Reveal delay={0.05}>
              <h1
                className="font-display leading-[0.96] tracking-tightest text-ink mb-7"
                style={{ fontSize: 'clamp(2.8rem, 6.4vw, 5.6rem)' }}
              >
                A whole school,<br />
                on a single<br />
                <span className="font-display-italic text-gold">phone.</span>
              </h1>

              <p className="text-[17px] lg:text-[18px] text-muted max-w-[34rem] leading-[1.65] mb-9 dropcap">
                Skuli is a school management system built for Uganda's primary schools — report cards, fees, marks
                and e-learning, designed for the phones teachers already carry and the curriculum they already teach.
                No laptops. No Excel. No imported templates.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-9">
                <a href={`${APP_URL}/login`} className="btn btn-primary group cursor-pointer">
                  Book a free demo
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a href={`tel:${PHONE1.replace(/\s/g, '')}`} className="btn btn-ghost cursor-pointer">
                  <Phone className="w-4 h-4 text-gold" />
                  {PHONE1}
                </a>
              </div>

              <div className="flex items-center gap-4 text-[13px] text-muted">
                <div className="flex gap-0.5 text-gold">
                  {[0, 1, 2, 3, 4].map(i => <GlyphStar key={i} className="w-3.5 h-3.5" />)}
                </div>
                <span className="leading-snug">4.9 / 5 from 48 headteachers across Uganda</span>
              </div>
            </Reveal>

            {/* Report card mockup */}
            <Reveal delay={0.12} y={20}>
              <div className="relative">
                <div className="absolute inset-0 rounded-sm bg-paper-3 -rotate-2 shadow-paper-lg" />
                <motion.div
                  initial={{ rotate: 1.2 }}
                  whileHover={{ rotate: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="report-paper relative"
                >
                  <div className="report-paper-edge" />
                  <div className="relative z-10 px-7 py-7">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted mb-1">
                          School Report
                        </div>
                        <div className="font-display text-[22px] leading-none text-ink">St. Catherine PS</div>
                        <div className="text-[12px] text-muted mt-1">P5 Blue — {TERM}</div>
                      </div>
                      <div className="text-gold opacity-60">
                        <GlyphSeal className="w-14 h-14" />
                      </div>
                    </div>

                    <div className="mb-5">
                      <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-2 mb-1">
                        Pupil
                      </div>
                      <div className="font-display text-[26px] leading-tight text-ink">Nakato Sarah</div>
                    </div>

                    <div className="rounded-sm border border-[color:var(--line)] overflow-hidden mb-5">
                      {[
                        { s: 'Mathematics', m: 84, g: 'A' },
                        { s: 'English',     m: 78, g: 'B' },
                        { s: 'Science',     m: 81, g: 'A' },
                        { s: 'Social',      m: 72, g: 'B' },
                      ].map((row, i, arr) => (
                        <div
                          key={row.s}
                          className={`flex items-baseline justify-between px-3.5 py-2.5 ${
                            i < arr.length - 1 ? 'border-b border-[color:var(--line)]' : ''
                          }`}
                        >
                          <span className="text-[13px] text-ink">{row.s}</span>
                          <div className="flex items-baseline gap-3">
                            <span className="font-mono text-[12.5px] text-muted tabular-nums">{row.m}</span>
                            <span
                              className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded-sm"
                              style={{ background: 'rgba(200,147,46,0.18)', color: '#8F6817' }}
                            >
                              {row.g}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-gold mb-1.5">
                        Class Teacher's Comment
                      </div>
                      <p className="text-[13px] text-ink leading-[1.55]">
                        Sarah has shown remarkable improvement in mathematics this term — her perseverance
                        with long division stands out.{' '}
                        <span className="font-medium">Encourage more reading at home.</span>
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[color:var(--line)] flex items-center justify-between">
                      <span className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-muted-2">
                        Drafted by Skuli AI · 0.34s
                      </span>
                      <span className="stamp">Term 2 · Approved</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════ II. DATELINE / SCHOOLS ROLL ════════════════ */}
      <section className="border-y border-[color:var(--line)] bg-paper-2">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 py-10 lg:py-12">
          <div className="grid lg:grid-cols-[14rem_1fr] gap-6 lg:gap-12 items-start">
            <div>
              <div className="kicker mb-3"><span className="num">II</span>Dateline</div>
              <h3 className="font-display text-[22px] leading-tight tracking-tight text-ink">
                Live this term, in classrooms across Uganda.
              </h3>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
              {dateline.map(s => (
                <li
                  key={s.school}
                  className="flex items-baseline justify-between gap-3 border-b border-[color:var(--line)] pb-2.5"
                >
                  <span className="text-[14.5px] font-medium text-ink truncate">{s.school}</span>
                  <span className="font-mono text-[11px] tracking-wider uppercase text-muted whitespace-nowrap tabular-nums">
                    {s.pupils} · {s.district}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ════════════════ III. THE ARGUMENT ════════════════ */}
      <section className="py-24 lg:py-28">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <div className="kicker mb-6"><span className="num">III</span>The Argument</div>
          <Reveal>
            <h2
              className="font-display leading-[1.04] tracking-tightest text-ink mb-10"
              style={{ fontSize: 'clamp(2rem, 4.4vw, 3rem)' }}
            >
              For most Ugandan schools, end of term means three weekends of paperwork.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 text-[15.5px] text-muted leading-[1.75]">
            <Reveal delay={0.05}>
              <p className="mb-5">
                Teachers stay late to compute aggregates by hand. The bursar's notebooks come out. One slow computer
                in the head's office prints report cards one at a time. Parents wait weeks to learn whether their
                child has even sat the exam.
              </p>
              <p>
                The work gets done, of course. It always does. But by then most of the staff are tired, the books
                are out of date, and the next term is already on top of you.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="pullquote mb-6">
                This term, that ends. Skuli puts the whole school on the phones teachers already carry — quietly,
                and without a laptop in sight.
              </p>
              <p>
                We built Skuli for Uganda's three-term calendar, the PLE grading system, and the realities of
                Ugandan school administration. Not adapted from somewhere else. Designed here, from the start.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════ IV. WHAT'S INSIDE ════════════════ */}
      <section className="py-24 lg:py-28 bg-paper-2 border-y border-[color:var(--line)] paper-grain">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal className="mb-16 max-w-3xl">
            <div className="kicker mb-4"><span className="num">IV</span>What's inside the prospectus</div>
            <h2
              className="font-display leading-[1.02] tracking-tightest text-ink"
              style={{ fontSize: 'clamp(2rem, 4.6vw, 3.4rem)' }}
            >
              Three things <span className="font-display-italic text-gold">every</span> Ugandan school needs.
            </h2>
          </Reveal>

          <div className="space-y-20 lg:space-y-24">
            {featureSpreads.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div
                  className={`grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-center ${
                    i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div>
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-muted-2 mb-3">
                      {f.n}
                    </div>
                    <h3 className="font-display text-[30px] lg:text-[36px] leading-[1.08] tracking-tightest text-ink mb-5">
                      {f.title}
                    </h3>
                    <p className="text-[15.5px] leading-[1.7] text-muted max-w-[34rem] mb-5">{f.body}</p>
                    <div className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.14em] text-clay">
                      <span className="w-2 h-2 rounded-full bg-clay" />
                      {f.chip}
                    </div>
                  </div>
                  <div className="rounded-2xl p-10 lg:p-14 bg-paper border border-[color:var(--line)] flex items-center justify-center min-h-[280px] shadow-paper">
                    <f.glyph className="w-32 h-32 text-gold" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16 flex items-center justify-center gap-2 text-[14px] text-muted">
              <span>Read the full catalogue of features</span>
              <Link
                to="/features"
                className="inline-flex items-center gap-1 text-ink font-medium link-reveal cursor-pointer"
              >
                Open the index <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ V. SKULI AI ════════════════ */}
      <section className="relative py-24 lg:py-28 bg-ink text-paper-2 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 right-1/4 w-[520px] h-[520px] rounded-full pointer-events-none drift"
          style={{ background: 'radial-gradient(closest-side, rgba(200,147,46,0.16), transparent 70%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <Reveal>
            <div className="kicker mb-4" style={{ color: 'var(--gold-soft)' }}>
              <span className="num" style={{ color: 'rgba(235,229,218,0.4)' }}>V</span>Skuli AI
            </div>
            <h2
              className="font-display leading-[1.05] tracking-tightest mb-6"
              style={{ fontSize: 'clamp(2rem, 4.4vw, 3.2rem)' }}
            >
              The end-of-term comments,<br />
              <span className="font-display-italic text-gold-soft">written for every pupil.</span>
            </h2>
            <p className="text-[16px] leading-[1.7] mb-8 max-w-[34rem]" style={{ color: 'rgba(235,229,218,0.75)' }}>
              At end of term, teachers spend weekends crafting report comments. Skuli AI reads each pupil's marks,
              attendance and history, then drafts comments in your school's voice — saving hours and sounding human,
              not synthetic.
            </p>
            <ul className="space-y-3 text-[14.5px]">
              {[
                'Grounded in the actual marks — no hallucinated grades.',
                "Tuned to your school's tone and house style.",
                'Editable before sign-off; teachers always have the last word.',
                'Submits even on a flaky 3G connection.',
              ].map(p => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span style={{ color: 'rgba(235,229,218,0.82)' }}>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="relative rounded-2xl p-6 lg:p-7"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 soft-pulse" />
                <span className="text-[11px] font-mono text-white/45 ml-1">
                  skuli.ai · drafting comments · 412 pupils ready
                </span>
              </div>
              <div className="space-y-5 text-[13.5px] leading-relaxed">
                <div>
                  <div className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-white/40 mb-2">Input</div>
                  <div
                    className="rounded-md px-3.5 py-2.5 font-mono text-[12.5px] text-paper-3/80"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  >
                    pupil: Sarah · class: P5 · maths: 84↑ · english: 78 · attendance: 96%
                  </div>
                </div>
                <div>
                  <div className="text-[10.5px] font-mono uppercase tracking-[0.18em] text-gold-soft mb-2">
                    Generated
                  </div>
                  <div
                    className="rounded-md px-4 py-3.5 text-paper-3 leading-[1.55]"
                    style={{ background: 'rgba(200,147,46,0.08)', border: '1px solid rgba(200,147,46,0.18)' }}
                  >
                    "Sarah has shown remarkable progress in mathematics this term, and her attendance is exemplary.
                    With more consistent reading at home, her English will follow."
                    <span className="cursor text-gold-soft" />
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1 text-[11px] font-mono uppercase tracking-[0.14em] text-white/35">
                  <span>0.34s · drafted</span>
                  <span>queued · 411 more</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ VI. BY THE NUMBERS ════════════════ */}
      <section className="py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal className="mb-12 max-w-3xl">
            <div className="kicker mb-4"><span className="num">VI</span>By the numbers</div>
            <h2
              className="font-display leading-[1.04] tracking-tightest text-ink"
              style={{ fontSize: 'clamp(2rem, 4.4vw, 3rem)' }}
            >
              What one term on Skuli adds up to.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-14 lg:border-y lg:border-[color:var(--line)] lg:py-14">
            {numbers.map((n, i) => (
              <BigNumber key={n.cap} v={n.v} suffix={n.suffix} cap={n.cap} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ VII. LETTERS ════════════════ */}
      <section className="py-24 lg:py-28 bg-paper-2 border-y border-[color:var(--line)]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal className="mb-14 max-w-2xl">
            <div className="kicker mb-4"><span className="num">VII</span>From the headteachers' room</div>
            <h2
              className="font-display leading-[1.02] tracking-tightest text-ink"
              style={{ fontSize: 'clamp(2rem, 4.4vw, 3rem)' }}
            >
              Three letters from{' '}
              <span className="font-display-italic text-gold">people who run schools.</span>
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-3 gap-6">
            {letters.map((l, i) => (
              <Reveal key={l.signed} delay={i * 0.07}>
                <figure className="letter h-full flex flex-col">
                  <blockquote className="font-display text-[19px] leading-[1.4] text-ink mb-6 flex-1">
                    "{l.body}"
                  </blockquote>
                  <figcaption className="flex items-center gap-3 pt-5 border-t border-[color:var(--line)]">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold flex-shrink-0"
                      style={{ background: l.color, color: '#FAF7F0' }}
                    >
                      {l.initial}
                    </div>
                    <div>
                      <div className="font-display text-[15px] text-ink leading-tight">{l.signed}</div>
                      <div className="text-[12px] text-muted leading-tight mt-0.5">{l.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ VIII. SETUP ════════════════ */}
      <section className="py-24 lg:py-28">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal className="mb-14 max-w-2xl">
            <div className="kicker mb-4"><span className="num">VIII</span>How a school comes on board</div>
            <h2
              className="font-display leading-[1.02] tracking-tightest text-ink"
              style={{ fontSize: 'clamp(2rem, 4.4vw, 3rem)' }}
            >
              Four steps. <span className="font-display-italic text-gold">One afternoon.</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-y-0 lg:divide-x lg:divide-[color:var(--line)]">
            {setupSteps.map((s, i) => (
              <Reveal key={s.roman} delay={i * 0.08} className="lg:px-7 first:lg:pl-0 last:lg:pr-0">
                <div className="roman-numeral text-[76px] lg:text-[88px] mb-4">{s.roman}</div>
                <h3 className="font-display text-[20px] leading-tight text-ink mb-3 tracking-tight">{s.title}</h3>
                <p className="text-[14.5px] text-muted leading-[1.65]">{s.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-14 flex justify-center">
            <a
              href="https://wa.me/256760730254?text=Hi+Skuli+UG%2C+I+want+to+get+my+school+set+up"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary group cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              Bring Skuli to my school
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ IX. SCHEDULE OF FEES ════════════════ */}
      <section id="pricing" className="py-24 lg:py-28 bg-paper-2 border-y border-[color:var(--line)]">
        <div className="max-w-5xl mx-auto px-5 lg:px-8">
          <Reveal className="mb-12 max-w-2xl">
            <div className="kicker mb-4"><span className="num">IX</span>Schedule of fees</div>
            <h2
              className="font-display leading-[1.02] tracking-tightest text-ink mb-5"
              style={{ fontSize: 'clamp(2rem, 4.4vw, 3rem)' }}
            >
              Termly, by school size.
            </h2>
            <p className="text-[15.5px] text-muted leading-[1.7] max-w-xl">
              No per-teacher fees. No hidden charges. One flat rate per term, three terms a year. Pay over MTN MoMo,
              Airtel Money, or by bank transfer.
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-2xl bg-paper border border-[color:var(--line)] px-6 lg:px-10 py-2 shadow-paper">
              {feePlans.map(p => (
                <div key={p.name} className="fee-row">
                  <span className="roman">{p.roman}</span>
                  <div>
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <span className="font-display text-[22px] leading-none text-ink tracking-tight">{p.name}</span>
                      {p.popular && (
                        <span
                          className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm"
                          style={{ background: 'var(--gold)', color: '#1A1611' }}
                        >
                          Most chosen
                        </span>
                      )}
                    </div>
                    <div className="text-[13px] text-muted mt-1">{p.sub}</div>
                    <div className="text-[13.5px] text-muted-2 mt-2 leading-[1.55] max-w-[44ch]">{p.includes}</div>
                  </div>
                  <div className="hidden md:block dots" />
                  <div className="text-right">
                    <div className="font-display text-[26px] leading-none text-ink tracking-tight tabular-nums">
                      <span className="text-[13px] text-muted font-sans mr-1">UGX</span>
                      {p.price}
                    </div>
                    <div className="text-[12px] text-muted-2 mt-1.5">per term · {p.usd}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 grid lg:grid-cols-[1.4fr_auto] gap-6 items-center rounded-2xl p-7 lg:p-8 bg-paper border border-dashed border-[color:var(--line-strong)]">
              <div>
                <div className="kicker mb-2" style={{ color: 'var(--clay)' }}>Bespoke build</div>
                <h3 className="font-display text-[22px] tracking-tight text-ink mb-1.5">
                  Need a system designed for your school specifically?
                </h3>
                <p className="text-[14px] text-muted leading-[1.65]">
                  Your branding, your workflow, your features. We build bespoke school management systems for
                  districts, MOEs and independent schools across East Africa.
                </p>
              </div>
              <Link to="/contact" className="btn btn-gold flex-shrink-0 cursor-pointer">
                Request a quote <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ════════════════ X. COLOPHON / CTA ════════════════ */}
      <section className="relative py-28 lg:py-32 bg-ink text-paper-2 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, var(--gold) 0, transparent 35%), radial-gradient(circle at 80% 80%, var(--clay) 0, transparent 40%)',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <Reveal>
            <div className="kicker justify-center inline-flex mb-6" style={{ color: 'var(--gold-soft)' }}>
              <span className="num" style={{ color: 'rgba(235,229,218,0.4)' }}>X</span>Colophon
            </div>
            <h2
              className="font-display leading-[1.02] tracking-tightest mb-7"
              style={{ fontSize: 'clamp(2.4rem, 5.4vw, 4.4rem)' }}
            >
              Open your school's account,<br />
              <span className="font-display-italic text-gold-soft">this term.</span>
            </h2>
            <p className="text-[16.5px] leading-[1.7] mb-10 max-w-xl mx-auto" style={{ color: 'rgba(235,229,218,0.72)' }}>
              We come to your school, set everything up in an afternoon, and your first term-end report cards
              write themselves. No obligation. No laptops required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
              <a
                href="https://wa.me/256760730254?text=Hi+Skuli+UG%2C+I%27m+interested+in+getting+started"
                target="_blank"
                rel="noreferrer"
                className="btn cursor-pointer"
                style={{ background: 'var(--gold)', color: '#1A1611' }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp the sales line
              </a>
              <a href={`tel:${PHONE1.replace(/\s/g, '')}`} className="btn btn-dark-on-dark cursor-pointer">
                <Phone className="w-4 h-4 text-gold-soft" />
                {PHONE1}
              </a>
            </div>

            <div className="rule mb-8 max-w-xs mx-auto" style={{ background: 'rgba(235,229,218,0.18)' }} />

            <div
              className="font-mono text-[10.5px] uppercase tracking-[0.22em] leading-[1.9]"
              style={{ color: 'rgba(235,229,218,0.5)' }}
            >
              Set in Fraunces &amp; Inter · Made in Kampala<br />
              Volume I · {TERM} · skuliug.com · Also reach us on {PHONE2}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────
   Editorial "by the numbers" — large display figure with caption
   ────────────────────────────────────────────────────────── */
function BigNumber({ v, suffix, cap, delay }: { v: number; suffix: string; cap: string; delay: number }) {
  const [countRef, count] = useAnimatedCounter(v);
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={countRef}
        className="font-display font-semibold leading-none tracking-tightest text-ink tabular-nums"
        style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.4rem)' }}
      >
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-3 text-[13px] text-muted leading-snug max-w-[18rem]">{cap}</div>
    </motion.div>
  );
}
