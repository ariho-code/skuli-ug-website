import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, Backpack, BarChart3, BookOpen, Brain, Check,
  DollarSign, GraduationCap, LockKeyhole, MessageSquare, Network, Phone,
  Plus, Shield, Smartphone, Sparkles,
} from 'lucide-react';
import { FadeIn, Rise, GOLD, GOLD_DEEP, INK, INK2, CREAM, PHONE1, goldGrad, goldTile } from '../lib/theme';
import { PRIMARY, SECONDARY, isLive, loginUrl } from '../lib/portals';
import type { Portal } from '../lib/portals';
import { usePortalPicker } from '../lib/portalPickerContext';
import TrustedBy from '../components/TrustedBy';
import Seo from '../lib/seo';
import { breadcrumbJsonLd, faqJsonLd } from '../lib/jsonld';

const EASE = [0.22, 1, 0.36, 1] as const;

/* ------------------------------------------------------------------ data */

const shared = [
  { Icon: DollarSign, title: 'Fees & invoicing', desc: 'One fee engine, two fee realities: termly primary fees, or boarding, requirements and combination levies at secondary.' },
  { Icon: Brain, title: 'Skuli AI comments', desc: 'The same AI, tuned twice. It writes to a P4 pupil at primary and to an S5 candidate at secondary.' },
  { Icon: BookOpen, title: 'E-learning', desc: 'Notes, assignments and feedback in both systems, organised by class at primary and by subject at secondary.' },
  { Icon: BarChart3, title: 'Analytics', desc: 'Class averages, top performers and term-on-term trends, computed against the right grading scale.' },
  { Icon: MessageSquare, title: 'Staff chat & notices', desc: 'Whole-school announcements and staffroom groups, identical in both systems.' },
  { Icon: Shield, title: 'Role-based access', desc: 'Headteacher, director of studies, bursar, class teacher and subject teacher roles in both.' },
];

const differences = [
  { area: 'Classes', primary: 'Nursery, P1 – P7 with streams', secondary: 'S1 – S6, O-Level and A-Level' },
  { area: 'Grading', primary: 'Marks to D1 – F9 per subject', secondary: 'UCE grading and UACE principal passes' },
  { area: 'Summary score', primary: 'Aggregate of four core subjects', secondary: 'Points, principal passes and subsidiaries' },
  { area: 'Subjects', primary: 'Fixed subject set per class', secondary: 'Subject combinations and electives per learner' },
  { area: 'Teachers', primary: 'One class teacher owns the class', secondary: 'Subject teachers across many streams' },
  { area: 'Report card', primary: 'PLE-style, aggregate and division', secondary: 'UCE / UACE-style transcript layout' },
  { area: 'Promotion', primary: 'P1 → P7 at end of year', secondary: 'S1 → S4, then S5 → S6 by combination' },
];

const faqs = [
  { q: 'Why two systems instead of one?', a: 'Because a primary report card and an S6 transcript are not the same document. Primary works on aggregates and divisions across four core subjects. Secondary works on subject combinations, principal passes and points. Forcing both into one template is exactly what makes most school software feel wrong in Uganda. We built each one properly.' },
  { q: 'We run a primary and a secondary section. Do we need two accounts?', a: 'No. Schools with both sections get both systems under one agreement and one bill. Your directors see both sides, while each headteacher and their teachers only see their own section.' },
  { q: 'Is the data shared between the two?', a: 'Only where it helps. A P7 leaver joining your S1 can be carried across with their record intact, so you are not re-typing admission details. Beyond that, each system keeps its own classes, marks and fees.' },
  { q: 'Do teachers have to learn two different systems?', a: 'No. Both look and behave the same. The differences are in the grading, the subjects and the report card, which is exactly where they should be.' },
  { q: 'Which one do we log in to?', a: 'Whichever section you teach. There is a portal chooser on every page of this site, and we set the right link on your teachers’ phones during onboarding.' },
];

/* --------------------------------------------------------------- mockups */

function PrimaryReportMock() {
  return (
    <div className="rounded-2xl p-5" style={{ background: 'rgba(7,24,47,0.75)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="flex items-center justify-between mb-4 pb-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-full grid place-items-center font-bold text-[11px] flex-shrink-0" style={{ background: goldGrad, color: '#0C2C57' }}>AN</div>
          <div className="min-w-0">
            <p className="font-bold text-[13px] text-white truncate">Aisha Namatovu</p>
            <p className="text-[10.5px] text-white/40">Primary 5 · Term 1</p>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap" style={{ background: 'rgba(16,185,129,0.15)', color: '#34d399' }}>Div 1</span>
      </div>
      <div className="space-y-2">
        {[['Mathematics', 86, 'D1'], ['English', 79, 'D2'], ['Science', 81, 'D1'], ['Social Studies', 74, 'C3']].map(([s, m, g]) => (
          <div key={s as string} className="flex items-center justify-between text-[12.5px]">
            <span className="text-white/55">{s}</span>
            <span className="font-semibold text-white tabular-nums">{m} · {g}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3.5 flex items-center justify-between text-[12.5px]" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <span className="text-white/45">Aggregate</span>
        <span className="font-display font-extrabold text-lg" style={{ color: GOLD }}>7</span>
      </div>
    </div>
  );
}

function SecondaryReportMock() {
  return (
    <div className="rounded-2xl p-5" style={{ background: 'rgba(7,24,47,0.75)', border: '1px solid rgba(255,255,255,0.1)' }}>
      <div className="flex items-center justify-between mb-4 pb-3.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-full grid place-items-center font-bold text-[11px] flex-shrink-0" style={{ background: goldGrad, color: '#0C2C57' }}>MO</div>
          <div className="min-w-0">
            <p className="font-bold text-[13px] text-white truncate">Moses Okello</p>
            <p className="text-[10.5px] text-white/40">Senior 5 · PCM/ICT · Term 1</p>
          </div>
        </div>
        <span className="text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap" style={{ background: 'rgba(16,185,129,0.15)', color: '#34d399' }}>15 pts</span>
      </div>
      <div className="space-y-2">
        {[['Physics', 'A', 'Principal'], ['Chemistry', 'B', 'Principal'], ['Mathematics', 'B', 'Principal'], ['Sub. ICT', '1', 'Subsidiary']].map(([s, g, k]) => (
          <div key={s as string} className="flex items-center justify-between text-[12.5px]">
            <span className="text-white/55">{s}</span>
            <span className="flex items-center gap-2">
              <span className="text-[10px] text-white/35">{k}</span>
              <span className="font-semibold text-white tabular-nums">{g}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3.5 flex items-center justify-between text-[12.5px]" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <span className="text-white/45">Principal passes</span>
        <span className="font-display font-extrabold text-lg" style={{ color: GOLD }}>3</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ system col */

function SystemColumn({ portal, mock, index }: { portal: Portal; mock: React.ReactNode; index: number }) {
  const live = isLive(portal);
  const Icon = portal.key === 'primary' ? Backpack : GraduationCap;
  const href = loginUrl(portal);

  return (
    <FadeIn delay={index * 0.1}>
      <div className="card-hover rounded-[1.75rem] p-6 sm:p-8 h-full flex flex-col"
        style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.09)' }}>

        <div className="flex items-start justify-between gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl grid place-items-center" style={{ background: goldTile }}>
            <Icon className="w-6 h-6" style={{ color: GOLD }} strokeWidth={2} />
          </div>
          <span className="px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-wide whitespace-nowrap"
            style={live
              ? { background: 'rgba(16,185,129,0.15)', color: '#34d399' }
              : { background: 'rgba(245,122,18,0.14)', color: GOLD }}>
            {live ? 'LIVE NOW' : 'ROLLING OUT'}
          </span>
        </div>

        <h3 className="font-display font-extrabold text-2xl sm:text-[1.75rem] tracking-tight text-white">{portal.name}</h3>
        <p className="text-[13px] font-semibold mt-1.5" style={{ color: GOLD }}>{portal.levels}</p>
        <p className="text-[15px] text-white/55 leading-relaxed mt-4 mb-6">{portal.audience}</p>

        <div className="mb-6">{mock}</div>

        <ul className="space-y-2.5 mb-7 flex-1">
          {portal.highlights.map(h => (
            <li key={h} className="flex items-start gap-2.5 text-[14px] text-white/65 leading-snug">
              <span className="mt-[3px] w-4 h-4 rounded-full grid place-items-center flex-shrink-0" style={{ background: 'rgba(245,122,18,0.15)' }}>
                <Check className="w-2.5 h-2.5" style={{ color: GOLD }} strokeWidth={3.5} />
              </span>
              {h}
            </li>
          ))}
        </ul>

        {live ? (
          <a href={href} target="_blank" rel="noreferrer"
            className="btn-gold flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm">
            Open {portal.short} portal <ArrowUpRight className="w-4 h-4" />
          </a>
        ) : (
          <Link to={href}
            className="btn-ghost flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm text-white"
            style={{ border: '1px solid rgba(255,255,255,0.16)', background: 'rgba(255,255,255,0.06)' }}>
            <LockKeyhole className="w-4 h-4" style={{ color: GOLD }} /> Request early access
          </Link>
        )}
      </div>
    </FadeIn>
  );
}

/* ------------------------------------------------------------------ page */

export default function SystemsPage() {
  const [openFaq, setOpenFaq] = useState<number>(0);
  const picker = usePortalPicker();

  return (
    <div style={{ background: INK, color: '#fff' }}>
      <Seo
        title="Our Systems | Skuli Primary & Skuli Secondary | Skuli UG"
        description="Skuli UG runs two school systems on one platform: Skuli Primary for Nursery to P7, and Skuli Secondary for S1 to S6. Each with its own grading, subjects and report cards."
        path="/systems"
        jsonLd={[
          breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Our Systems', path: '/systems' }]),
          faqJsonLd(faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-14 sm:pb-20">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="grain" />
        <div className="aurora absolute -top-32 right-[-10%] w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 60% 40%, rgba(245,122,18,.3), transparent 65%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11.5px] font-bold tracking-wide mb-6"
              style={{ background: 'rgba(245,122,18,0.1)', border: '1px solid rgba(245,122,18,0.25)', color: GOLD }}>
              <Sparkles className="w-3.5 h-3.5" /> PRIMARY &amp; SECONDARY
            </span>
          </FadeIn>
          <Rise>
            <h1 className="font-display font-extrabold tracking-tight leading-[1.05] text-balance mb-5" style={{ fontSize: 'clamp(2.3rem,6vw,3.8rem)' }}>
              Two school systems.<br /><span className="gold-text">One Skuli.</span>
            </h1>
          </Rise>
          <FadeIn delay={0.15}>
            <p className="text-pretty text-white/60 mx-auto mb-8 max-w-2xl" style={{ fontSize: 'clamp(1rem,1.6vw,1.15rem)', lineHeight: 1.65 }}>
              A P5 report card and an S6 transcript are different documents, so we did not force them into one template.
              Skuli runs a purpose-built system for each level, sharing the same fees, e-learning, AI and analytics underneath.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button onClick={picker.open} className="btn-gold flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-[15px]">
                Open your school portal <ArrowRight className="w-4 h-4" />
              </button>
              <Link to="/contact" className="btn-ghost flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-[15px] text-white"
                style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}>
                Book a free demo
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The two systems */}
      <section className="pb-20 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-5">
          <SystemColumn portal={PRIMARY} mock={<PrimaryReportMock />} index={0} />
          <SystemColumn portal={SECONDARY} mock={<SecondaryReportMock />} index={1} />
        </div>
      </section>

      {/* What changes between them (light) */}
      <section className="py-20 sm:py-28" style={{ background: CREAM, color: '#0C2C57' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 sm:mb-12">
            <Rise>
              <h2 className="font-display font-extrabold tracking-tight text-balance" style={{ fontSize: 'clamp(1.9rem,4.2vw,2.9rem)', lineHeight: 1.06 }}>
                Exactly what changes between them
              </h2>
            </Rise>
            <FadeIn delay={0.15}>
              <p className="mt-4 text-[16.5px] text-pretty" style={{ color: 'rgba(12,44,87,0.55)' }}>
                Everything else, the fees, the chat, the e-learning, the AI, is identical. These seven rows are the whole difference.
              </p>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="rounded-3xl overflow-hidden" style={{ background: '#fff', border: '1px solid rgba(12,44,87,0.08)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[560px]">
                  <thead>
                    <tr style={{ background: 'rgba(12,44,87,0.03)' }}>
                      <th scope="col" className="px-5 sm:px-6 py-4 text-[11px] font-bold uppercase tracking-widest" style={{ color: 'rgba(12,44,87,0.45)' }}>Area</th>
                      <th scope="col" className="px-5 sm:px-6 py-4 text-[11px] font-bold uppercase tracking-widest" style={{ color: GOLD_DEEP }}>{PRIMARY.name}</th>
                      <th scope="col" className="px-5 sm:px-6 py-4 text-[11px] font-bold uppercase tracking-widest" style={{ color: GOLD_DEEP }}>{SECONDARY.name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {differences.map(d => (
                      <tr key={d.area} style={{ borderTop: '1px solid rgba(12,44,87,0.06)' }}>
                        <th scope="row" className="px-5 sm:px-6 py-4 font-display font-bold text-[14px] align-top whitespace-nowrap" style={{ color: '#0C2C57' }}>{d.area}</th>
                        <td className="px-5 sm:px-6 py-4 text-[14px] align-top" style={{ color: 'rgba(12,44,87,0.62)' }}>{d.primary}</td>
                        <td className="px-5 sm:px-6 py-4 text-[14px] align-top" style={{ color: 'rgba(12,44,87,0.62)' }}>{d.secondary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Shared foundation */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ background: INK }}>
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(245,122,18,.07), transparent 70%)' }} />
        <div className="grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Rise>
              <h2 className="font-display font-extrabold tracking-tight text-balance" style={{ fontSize: 'clamp(1.9rem,4.2vw,2.9rem)', lineHeight: 1.06 }}>
                One engine underneath both
              </h2>
            </Rise>
            <FadeIn delay={0.15}>
              <p className="mt-4 text-[16.5px] text-white/55 text-pretty">
                Two systems, but not two products. Every module below is the same code, the same support team and the same phone in your teacher's pocket.
              </p>
            </FadeIn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {shared.map((s, i) => (
              <FadeIn key={s.title} delay={(i % 3) * 0.06}>
                <div className="card-hover rounded-3xl p-6 h-full" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-12 h-12 rounded-2xl grid place-items-center mb-5" style={{ background: goldTile }}>
                    <s.Icon className="w-[22px] h-[22px]" style={{ color: GOLD }} strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-white/55">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Schools running both */}
      <section className="py-20 sm:py-24" style={{ background: INK2 }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-[2rem] p-8 sm:p-11" style={{ background: 'rgba(245,122,18,0.06)', border: '1px solid rgba(245,122,18,0.22)' }}>
              <div className="flex flex-col sm:flex-row gap-7">
                <div className="w-14 h-14 rounded-2xl grid place-items-center flex-shrink-0" style={{ background: goldTile }}>
                  <Network className="w-7 h-7" style={{ color: GOLD }} strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h2 className="font-display font-extrabold tracking-tight text-balance mb-3" style={{ fontSize: 'clamp(1.6rem,3.4vw,2.2rem)', lineHeight: 1.1 }}>
                    Running a primary <span className="gold-text">and</span> a secondary?
                  </h2>
                  <p className="text-white/60 text-[16px] leading-relaxed mb-6 max-w-2xl text-pretty">
                    Many Ugandan schools run both sections under one foundation body. You get both systems on one agreement and one termly bill.
                    Directors see the whole group; each headteacher and their teachers see only their own section. When your P7 class finishes,
                    their records carry straight over into S1 instead of being typed again.
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 mb-7">
                    {[
                      { Icon: Network, t: 'One group account' },
                      { Icon: Shield, t: 'Separate staff access' },
                      { Icon: Smartphone, t: 'Same app on every phone' },
                    ].map(x => (
                      <div key={x.t} className="flex items-center gap-2.5 rounded-2xl px-4 py-3.5 text-[13.5px] font-semibold text-white/75"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                        <x.Icon className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} /> {x.t}
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="btn-gold inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm">
                    Talk to us about your group <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 sm:py-28" style={{ background: CREAM, color: '#0C2C57' }}>
        <TrustedBy tone="light" />
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28" style={{ background: INK }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Rise className="text-center mb-12">
            <h2 className="font-display font-extrabold tracking-tight" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', lineHeight: 1.05 }}>
              Questions about the two systems
            </h2>
          </Rise>
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
                    <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.3, ease: EASE }} style={{ overflow: 'hidden' }}>
                      <div className="px-5 sm:px-6 pb-5 -mt-1 text-white/55 text-[14.5px] leading-relaxed">{f.a}</div>
                    </motion.div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${INK2}, ${INK})` }}>
        <div className="glow absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, rgba(245,122,18,.18), transparent 70%)' }} />
        <div className="grain" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-[2rem] p-8 sm:p-12 text-center" style={{ border: '1px solid rgba(245,122,18,0.2)', background: 'linear-gradient(180deg, rgba(255,255,255,0.05), transparent)' }}>
              <h2 className="font-display font-extrabold tracking-tight text-balance mb-4" style={{ fontSize: 'clamp(2rem,5vw,3rem)', lineHeight: 1.04 }}>
                Primary, secondary, or both
              </h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-8 text-pretty">
                Tell us which sections you run and we will show you the exact system your teachers would be using, on your own class lists.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="btn-gold flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base">
                  Book a free demo <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={`tel:${PHONE1.replace(/\s/g, '')}`} className="btn-ghost flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white"
                  style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}>
                  <Phone className="w-4 h-4" style={{ color: GOLD }} /> {PHONE1}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
