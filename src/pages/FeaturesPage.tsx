import { Link } from 'react-router-dom';
import {
  FileText, TrendingUp, DollarSign, BookOpen, Users, MessageSquare,
  Brain, BarChart3, Shield, Bell, Smartphone, Calendar, UserCheck,
  Layers, Clock, Award, ArrowRight, Phone, Check,
} from 'lucide-react';
import { FadeIn, Rise, GOLD, GOLD_DEEP, INK, INK2, CREAM, PHONE1, goldTile } from '../lib/theme';
import Seo from '../lib/seo';
import { breadcrumbJsonLd } from '../lib/jsonld';

const modules = [
  {
    category: 'Academics',
    items: [
      { icon: FileText, title: 'AI Report Cards', desc: 'Generate personalised pupil report cards with comments written for you. Enter the marks and the system does the writing.', badge: 'AI' },
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
      { icon: Shield, title: 'Role-Based Security', desc: 'Each staff member sees only what they need. Headteachers, teachers and bursars all get the right level of access.' },
    ],
  },
];

const upcoming = [
  { icon: Layers, title: 'District Dashboard', desc: 'Multi-school oversight for education officers.' },
  { icon: TrendingUp, title: 'Learning Analytics', desc: 'Pupil progress trends term-on-term with AI insights.' },
];

export default function FeaturesPage() {
  return (
    <div style={{ background: INK, color: '#fff' }}>
      <Seo
        title="Features | Report Cards, Fees, E-Learning & AI | Skuli UG"
        description="Explore every Skuli UG module: AI report cards, mark sheets, fee tracking, e-learning, timetables and staff chat, built for Ugandan primary schools."
        path="/features"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Features', path: '/features' }])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="grain" />
        <div className="aurora absolute -top-32 right-[-10%] w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 60% 40%, rgba(245,122,18,.3), transparent 65%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rise>
            <h1 className="font-display font-extrabold tracking-tight leading-[1.05] text-balance mb-5" style={{ fontSize: 'clamp(2.3rem,6vw,3.8rem)' }}>
              Everything your <span className="gold-text">school</span> needs
            </h1>
          </Rise>
          <FadeIn delay={0.15}>
            <p className="text-pretty text-white/60 mx-auto mb-8 max-w-2xl" style={{ fontSize: 'clamp(1rem,1.6vw,1.15rem)', lineHeight: 1.65 }}>
              Every module a modern Ugandan primary school needs, from student admissions to report cards, on one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="btn-gold flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-[15px]">
                Book a free demo <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:${PHONE1.replace(/\s/g, '')}`} className="btn-ghost flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-[15px] text-white" style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}>
                <Phone className="w-4 h-4" style={{ color: GOLD }} /> {PHONE1}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Modules (Light) */}
      <section className="py-16 sm:py-24" style={{ background: CREAM, color: '#0C2C57' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
          {modules.map(section => (
            <div key={section.category}>
              <FadeIn className="mb-6 sm:mb-7">
                <h2 className="font-display font-extrabold text-2xl sm:text-[1.7rem] tracking-tight" style={{ color: '#0C2C57' }}>{section.category}</h2>
                <div className="mt-2.5 h-[3px] w-10 rounded-full" style={{ background: GOLD_DEEP }} />
              </FadeIn>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {section.items.map((item, i) => (
                  <FadeIn key={item.title} delay={(i % 3) * 0.06}>
                    <div className="card-hover group rounded-3xl p-6 h-full" style={{ background: '#fff', border: '1px solid rgba(12,44,87,0.06)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl grid place-items-center" style={{ background: goldTile }}>
                          <item.icon className="w-[22px] h-[22px]" style={{ color: GOLD_DEEP }} strokeWidth={2} />
                        </div>
                        {item.badge && (
                          <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold" style={{ background: GOLD, color: INK }}>{item.badge}</span>
                        )}
                      </div>
                      <h3 className="font-display font-bold text-lg mb-2" style={{ color: '#0C2C57' }}>{item.title}</h3>
                      <p className="text-[14.5px] leading-relaxed" style={{ color: 'rgba(12,44,87,0.55)' }}>{item.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ background: INK }}>
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(245,122,18,.07), transparent 70%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Rise className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display font-extrabold tracking-tight text-balance" style={{ fontSize: 'clamp(2rem,4.5vw,3.2rem)', lineHeight: 1.05 }}>What we're building next</h2>
          </Rise>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {upcoming.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.07}>
                <div className="card-hover rounded-3xl p-6 h-full" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <span className="inline-block text-[12px] font-semibold mb-4" style={{ color: GOLD }}>
                    In development
                  </span>
                  <div className="w-11 h-11 rounded-2xl grid place-items-center mb-4" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <f.icon className="w-5 h-5" style={{ color: 'rgba(255,255,255,0.45)' }} />
                  </div>
                  <h3 className="font-display font-bold text-white text-[15px] mb-1.5">{f.title}</h3>
                  <p className="text-[13px] text-white/40 leading-snug">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final Cta */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${INK2}, ${INK})` }}>
        <div className="glow absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(245,122,18,.18), transparent 70%)' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-[2rem] p-8 sm:p-12 text-center" style={{ border: '1px solid rgba(245,122,18,0.2)', background: 'linear-gradient(180deg, rgba(255,255,255,0.05), transparent)' }}>
              <h2 className="font-display font-extrabold tracking-tight text-balance mb-4" style={{ fontSize: 'clamp(2rem,5vw,3rem)', lineHeight: 1.04 }}>Ready to see it live?</h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-8 text-pretty">Book a free demo. We come to your school and walk you through every module.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact" className="btn-gold flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base">
                  Book a Free Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={`tel:${PHONE1.replace(/\s/g, '')}`} className="btn-ghost flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white" style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}>
                  <Check className="w-4 h-4" style={{ color: GOLD }} /> {PHONE1}
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
