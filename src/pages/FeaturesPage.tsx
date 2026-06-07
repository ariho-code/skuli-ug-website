import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FileText, TrendingUp, DollarSign, BookOpen, Users, MessageSquare,
  Brain, BarChart3, Shield, Bell, Smartphone, Calendar, UserCheck,
  Layers, Clock, Award, ArrowUpRight, Sparkles,
} from 'lucide-react';

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

const modules = [
  {
    category: 'Academics',
    items: [
      { icon: FileText,   title: 'AI-powered report cards', desc: 'Personalised pupil report comments written automatically. Teachers enter marks — Skuli writes.', badge: 'AI' },
      { icon: TrendingUp, title: 'Mark sheets & grade books', desc: 'Digital mark entry per subject. Automatic aggregates, positions and grade labels.' },
      { icon: Calendar,   title: 'Timetable management', desc: 'Build and publish class timetables. Teachers see their schedule on their phone every day.' },
      { icon: UserCheck,  title: 'Student promotion', desc: 'Review academic performance and promote pupils to the next class at end of term.' },
    ],
  },
  {
    category: 'Students & classes',
    items: [
      { icon: Users,  title: 'Student management', desc: 'Complete digital register per pupil: admission, photos, medical notes and contacts.' },
      { icon: Layers, title: 'Class & stream setup', desc: 'Manage class levels, streams and teacher assignments. Works for Nursery, Primary and O-Level.' },
      { icon: Clock,  title: 'Academic year & terms', desc: 'Configure academic years and terms. The system tracks current term automatically.' },
    ],
  },
  {
    category: 'Fees & finance',
    items: [
      { icon: DollarSign, title: 'Fee structures & invoicing', desc: 'Per-term fee items. Auto-generate invoices. Track paid and outstanding amounts instantly.' },
      { icon: BarChart3,  title: 'Financial reports', desc: 'Total collected, outstanding balances and defaulters per class or school-wide. PDF exports.' },
    ],
  },
  {
    category: 'Learning',
    items: [
      { icon: BookOpen, title: 'E-learning module', desc: 'Share notes, videos, PDFs and lessons. Assignments submitted and marked digitally.' },
      { icon: Award,    title: 'Homework & assignments', desc: 'Teachers set homework; pupils submit. Feedback returned online.' },
    ],
  },
  {
    category: 'Communication',
    items: [
      { icon: MessageSquare, title: 'Staff chat', desc: 'Real-time group messaging between staff. Class, subject and whole-school threads.' },
      { icon: Bell,          title: 'Announcements', desc: 'School-wide notices pushed to staff and parents. Pin the important ones.' },
    ],
  },
  {
    category: 'Platform',
    items: [
      { icon: Brain,      title: 'Skuli AI', desc: 'Built-in AI assistant for comments, questions and quick insights.' },
      { icon: Smartphone, title: 'Mobile first', desc: 'Works on any Android or iPhone — teachers use phones they already own.' },
      { icon: Shield,     title: 'Role-based security', desc: 'Each staff member sees only what they need. Secure by default.' },
    ],
  },
];

const upcoming = [
  { icon: Bell,       title: 'Parent SMS alerts',  desc: 'MTN & Airtel SMS to parents for fees and results.' },
  { icon: Users,      title: 'Parent portal app',  desc: 'Parents log in to track fees, marks and messages.' },
  { icon: Layers,     title: 'District dashboard', desc: 'Multi-school oversight for education officers.' },
  { icon: TrendingUp, title: 'Learning analytics', desc: 'Pupil progress trends term-on-term, with AI insights.' },
];

export default function FeaturesPage() {
  return (
    <div className="bg-paper text-ink" style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section className="relative pt-20 pb-16 lg:pb-20 paper-grain overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full opacity-40 pointer-events-none drift"
          style={{ background: 'radial-gradient(closest-side, rgba(200,147,46,0.22), transparent 70%)' }} />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-8">
          <Reveal>
            <div className="eyebrow mb-5">Full feature set</div>
            <h1 className="font-display text-[clamp(2.4rem,5.6vw,4.8rem)] leading-[1.0] tracking-tightest text-ink mb-6">
              Everything your school needs,<br />
              <span className="font-display-italic text-gold">on one platform.</span>
            </h1>
            <p className="text-[17px] text-muted leading-relaxed max-w-2xl">
              From student admissions to AI-powered report cards — every module a modern Ugandan
              primary school actually uses. Designed for our curriculum, our calendar, our network conditions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Modules */}
      {modules.map((section, si) => (
        <section key={section.category} className={`py-14 ${si % 2 === 1 ? 'bg-paper-2 border-y border-[color:var(--line)]' : ''}`}>
          <div className="max-w-6xl mx-auto px-5 lg:px-8">
            <Reveal className="mb-8 flex items-end justify-between gap-6">
              <div>
                <div className="eyebrow mb-3">{section.category}</div>
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.2rem)] leading-tight tracking-tight text-ink">
                  {section.category}
                </h2>
              </div>
              <div className="hidden sm:block text-[12px] font-mono text-muted-2 mb-2">
                {String(si + 1).padStart(2, '0')} / {String(modules.length).padStart(2, '0')}
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <motion.div whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="card h-full bg-paper">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-paper-2 border border-[color:var(--line)]">
                        <item.icon className="w-5 h-5 text-gold" />
                      </div>
                      {item.badge && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10.5px] font-bold tracking-wider uppercase"
                          style={{ background: 'var(--ink)', color: 'var(--gold-soft)' }}>
                          <Sparkles className="w-3 h-3" /> {item.badge}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-[18px] font-semibold tracking-tight text-ink mb-2">{item.title}</h3>
                    <p className="text-[14px] text-muted leading-relaxed">{item.desc}</p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Upcoming */}
      <section className="py-20 bg-paper">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal className="mb-10 max-w-2xl">
            <div className="eyebrow mb-4" style={{ color: 'var(--clay)' }}>On the roadmap</div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-tight tracking-tightest text-ink">
              What we're building next.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcoming.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="rounded-2xl p-5 h-full bg-paper-2 border border-dashed border-[color:var(--line-strong)]">
                  <span className="inline-block text-[10px] font-bold tracking-wider uppercase mb-3 px-2 py-0.5 rounded-md"
                    style={{ background: 'rgba(194,92,46,0.10)', color: 'var(--clay)' }}>
                    soon
                  </span>
                  <f.icon className="w-5 h-5 mb-2 text-muted" />
                  <h3 className="font-display text-[16px] font-semibold tracking-tight text-ink mb-1">{f.title}</h3>
                  <p className="text-[12.5px] text-muted">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ink text-paper-2">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4.6vw,3rem)] leading-tight tracking-tightest mb-5">
              Ready to see it live?
            </h2>
            <p className="text-[16px] text-paper-3/75 mb-9">
              Book a free demo. We come to your school and walk you through everything.
            </p>
            <Link to="/contact" className="btn" style={{ background: 'var(--gold)', color: '#1A1611' }}>
              Book a free demo <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
