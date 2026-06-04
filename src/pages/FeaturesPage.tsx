import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FileText, TrendingUp, DollarSign, BookOpen, Users, MessageSquare,
  Brain, BarChart3, Shield, Bell, Smartphone, Calendar, UserCheck,
  Layers, Clock, Award, ArrowRight,
} from 'lucide-react';

const GOLD = '#E8B84B';
const DARK = '#1a1a1a';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

const modules = [
  {
    category: 'Academics',
    items: [
      { icon: FileText, title: 'AI-Powered Report Cards', desc: 'Automatically generate personalised pupil report cards with AI-written comments. Enter marks — the system does the writing.', badge: 'AI' },
      { icon: TrendingUp, title: 'Mark Sheets & Grade Books', desc: 'Digital mark entry per subject per class. Automatic aggregates, positions and grade labels calculated instantly.' },
      { icon: Calendar, title: 'Timetable Management', desc: 'Build and publish class timetables. Teachers see their schedule on their phone every day.' },
      { icon: UserCheck, title: 'Student Promotion', desc: 'Review academic performance and promote students to the next class at end of term automatically.' },
    ],
  },
  {
    category: 'Students & Classes',
    items: [
      { icon: Users, title: 'Student Management', desc: 'Complete digital register for every pupil. Admission details, photos, medical notes and contacts all in one place.' },
      { icon: Layers, title: 'Class & Stream Setup', desc: 'Manage class levels, streams and teacher assignments. Works for Nursery, Primary and O-Level schools.' },
      { icon: Clock, title: 'Academic Year & Terms', desc: 'Configure academic years and terms. The system tracks current term automatically.' },
    ],
  },
  {
    category: 'Fees & Finance',
    items: [
      { icon: DollarSign, title: 'Fee Structures & Invoicing', desc: 'Set up fee items per term. Auto-generate invoices per pupil. Track paid and outstanding amounts instantly.' },
      { icon: BarChart3, title: 'Financial Reports', desc: 'See total collected, outstanding balances and defaulters per class or school-wide. Export to PDF.' },
    ],
  },
  {
    category: 'Learning',
    items: [
      { icon: BookOpen, title: 'E-Learning Module', desc: 'Share notes, videos, PDFs and lessons directly with students. Assignments submitted digitally.' },
      { icon: Award, title: 'Homework & Assignments', desc: 'Teachers set homework, students submit responses. Teachers mark and return feedback online.' },
    ],
  },
  {
    category: 'Communication',
    items: [
      { icon: MessageSquare, title: 'Staff Chat', desc: 'Real-time group messaging between staff. Class groups, subject groups and whole-school announcements.' },
      { icon: Bell, title: 'Announcements', desc: 'School-wide notices pushed to all staff and parents simultaneously. Pin important notices.' },
    ],
  },
  {
    category: 'Platform',
    items: [
      { icon: Brain, title: 'Skuli AI', desc: 'Built-in AI assistant that helps teachers write comments, answers questions about the system and provides insights.' },
      { icon: Smartphone, title: 'Mobile First', desc: 'Works on any Android or iPhone. No computer lab needed. Teachers use their own phones.' },
      { icon: Shield, title: 'Role-Based Security', desc: 'Each staff member sees only what they need. Headteachers, teachers, bursars — all have the right access.' },
    ],
  },
];

const upcoming = [
  { icon: Bell, title: 'Parent SMS Alerts', desc: 'MTN & Airtel SMS to parents for fees and results.' },
  { icon: Users, title: 'Parent Portal App', desc: 'Parents log in to track fees, marks and messages.' },
  { icon: Layers, title: 'District Dashboard', desc: 'Multi-school oversight for education officers.' },
  { icon: TrendingUp, title: 'Learning Analytics', desc: 'Pupil progress trends term-on-term with AI insights.' },
];

export default function FeaturesPage() {
  return (
    <div style={{ background: DARK, color: '#fff', paddingTop: 68 }}>

      {/* Hero */}
      <section className="py-20 text-center" style={{ background: DARK }}>
        <div className="max-w-4xl mx-auto px-5">
          <FadeIn>
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Full Feature Set</div>
            <h1 className="text-5xl font-extrabold text-white mb-4">Everything your school needs</h1>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">
              From student admissions to AI-powered report cards — every module you need to run a modern Ugandan primary school, on one platform.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Modules */}
      {modules.map((section, si) => (
        <section key={section.category} className="py-10" style={{ background: si % 2 === 0 ? '#111' : DARK }}>
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <FadeIn>
              <div className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: GOLD }}>{section.category}</div>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.07}>
                  <motion.div whileHover={{ y: -4 }}
                    className="rounded-2xl p-6 h-full transition-all"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(232,184,75,0.3)')}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(232,184,75,0.1)' }}>
                        <item.icon className="w-5 h-5" style={{ color: GOLD }} />
                      </div>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-md text-xs font-bold" style={{ background: GOLD, color: DARK }}>{item.badge}</span>
                      )}
                    </div>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Upcoming */}
      <section className="py-20" style={{ background: '#111' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <FadeIn className="mb-10">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>Coming Soon</div>
            <h2 className="text-3xl font-extrabold text-white">What we're building next</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {upcoming.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.07}>
                <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="inline-block px-2 py-0.5 rounded-md text-xs font-bold mb-3" style={{ background: 'rgba(232,184,75,0.12)', color: GOLD }}>
                    COMING SOON
                  </span>
                  <f.icon className="w-5 h-5 mb-2" style={{ color: 'rgba(255,255,255,0.35)' }} />
                  <h3 className="font-bold text-white text-sm mb-1">{f.title}</h3>
                  <p className="text-xs text-white/40">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ background: DARK }}>
        <div className="max-w-xl mx-auto px-5">
          <FadeIn>
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to see it live?</h2>
            <p className="text-white/50 mb-8">Book a free demo. We come to your school and walk you through everything.</p>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all"
              style={{ background: GOLD, color: DARK }}
              onMouseEnter={e => (e.currentTarget.style.background = '#d4a017')}
              onMouseLeave={e => (e.currentTarget.style.background = GOLD)}>
              Book a Free Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
