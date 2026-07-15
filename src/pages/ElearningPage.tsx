import { Link } from 'react-router-dom';
import { BookOpen, Upload, FileText, MessageSquare, CheckCircle2, Smartphone, Users, Award, ArrowRight } from 'lucide-react';
import { FadeIn, Rise, GOLD, INK, INK2, CREAM, goldTile } from '../lib/theme';
import Seo from '../lib/seo';
import { breadcrumbJsonLd } from '../lib/jsonld';

const features = [
  { icon: Upload, title: 'Share lesson notes', desc: 'Upload PDFs, Word documents, images and videos. Pupils access everything from their phones.' },
  { icon: FileText, title: 'Digital assignments', desc: 'Set homework digitally. Pupils submit online. Teachers mark and return feedback without paper.' },
  { icon: MessageSquare, title: 'Discussion boards', desc: 'Class-level discussions where teachers guide learning and pupils ask questions.' },
  { icon: BookOpen, title: 'Lesson library', desc: 'All lessons organised by subject and topic. Pupils catch up at any time, even during holidays.' },
  { icon: Award, title: 'Progress tracking', desc: 'Teachers see which pupils have viewed materials and submitted assignments.' },
  { icon: Users, title: 'Class groups', desc: 'Each class has its own e-learning space. Teachers only manage their assigned classes.' },
];

const steps = [
  { n: '01', title: 'Teacher uploads materials', desc: 'Notes, PDFs or videos uploaded from any smartphone in seconds.' },
  { n: '02', title: 'Pupils access on their phones', desc: 'Students open the Skuli UG app on their phone and see new lessons immediately.' },
  { n: '03', title: 'Assignments set and submitted', desc: 'Teachers post assignments. Pupils submit online. No printing, no lost exercise books.' },
  { n: '04', title: 'Teachers mark and give feedback', desc: 'Feedback returned digitally. Marks recorded in the grade book automatically.' },
];

const stats = [
  { label: 'Mobile access', sub: 'Any Android or iPhone', Icon: Smartphone },
  { label: 'No computer needed', sub: 'Works on 3G/4G data', Icon: CheckCircle2 },
  { label: 'All subjects', sub: 'Organised by class & topic', Icon: BookOpen },
  { label: 'Holiday learning', sub: 'Pupils study from home', Icon: Users },
];

export default function ElearningPage() {
  return (
    <div style={{ background: INK, color: '#fff' }}>
      <Seo
        title="E-Learning Module | Notes, Assignments & Feedback | Skuli UG"
        description="Skuli UG's e-learning module lets teachers share notes, set assignments and give feedback from their phones, so learning never stops when school closes."
        path="/e-learning"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'E-Learning', path: '/e-learning' }])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="grain" />
        <div className="aurora absolute -top-32 right-[-10%] w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 60% 40%, rgba(245,122,18,.3), transparent 65%)' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-8 items-center">
          <div>
            <Rise>
              <h1 className="font-display font-extrabold tracking-tight leading-[1.05] text-balance mb-6" style={{ fontSize: 'clamp(2.3rem,5.5vw,3.6rem)' }}>
                Learning that doesn't stop<br /><span className="gold-text">when school closes</span>
              </h1>
            </Rise>
            <FadeIn delay={0.15}>
            <p className="text-pretty text-white/60 mb-8 max-w-xl" style={{ fontSize: 'clamp(1rem,1.6vw,1.15rem)', lineHeight: 1.65 }}>
              Skuli UG's built-in e-learning module lets teachers share notes, set assignments and give feedback, all from their smartphones. Pupils access everything without a computer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-gold flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-[15px]">
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/pricing" className="btn-ghost flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-semibold text-[15px] text-white" style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}>
                View Pricing
              </Link>
            </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 gap-3.5">
              {stats.map(s => (
                <div key={s.label} className="card-hover rounded-3xl p-5" style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-10 h-10 rounded-2xl grid place-items-center mb-4" style={{ background: goldTile }}>
                    <s.Icon className="w-5 h-5" style={{ color: GOLD }} />
                  </div>
                  <div className="font-display font-bold text-white text-[15px]">{s.label}</div>
                  <div className="text-xs text-white/40 mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features (Light) */}
      <section className="py-16 sm:py-24" style={{ background: CREAM, color: '#0C2C57' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Rise className="max-w-2xl mb-12">
            <h2 className="font-display font-extrabold tracking-tight text-balance" style={{ fontSize: 'clamp(1.9rem,4vw,2.8rem)', lineHeight: 1.08 }}>Everything the e-learning module includes</h2>
          </Rise>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={(i % 3) * 0.06}>
                <div className="card-hover rounded-3xl p-6 h-full" style={{ background: '#fff', border: '1px solid rgba(12,44,87,0.06)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <div className="w-12 h-12 rounded-2xl grid place-items-center mb-5" style={{ background: goldTile }}>
                    <f.icon className="w-[22px] h-[22px]" style={{ color: '#DA6A0C' }} strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2" style={{ color: '#0C2C57' }}>{f.title}</h3>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: 'rgba(12,44,87,0.55)' }}>{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ background: INK }}>
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(245,122,18,.07), transparent 70%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Rise className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-display font-extrabold tracking-tight text-balance" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', lineHeight: 1.05 }}>From teacher to pupil in 4 steps</h2>
          </Rise>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <FadeIn key={s.n} delay={i * 0.08}>
                <div className="card-hover flex items-start gap-6 rounded-3xl p-6 sm:p-7" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="font-display font-extrabold text-4xl gold-text flex-shrink-0">{s.n}</div>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">{s.title}</h3>
                    <p className="text-white/55 leading-relaxed text-[15px]">{s.desc}</p>
                  </div>
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
              <h2 className="font-display font-extrabold tracking-tight text-balance mb-4" style={{ fontSize: 'clamp(2rem,5vw,3rem)', lineHeight: 1.04 }}>Ready to go digital?</h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-8 text-pretty">E-learning is included on the Growth, Pro and Enterprise plans, starting at UGX 300,000 per term.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/pricing" className="btn-gold flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base">
                  See Pricing <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="btn-ghost flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white" style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}>
                  Contact Us
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
