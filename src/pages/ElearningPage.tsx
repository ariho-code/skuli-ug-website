import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Upload, FileText, MessageSquare, CheckCircle2, Smartphone, Users, Award, ArrowRight } from 'lucide-react';

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

const features = [
  { icon: Upload, title: 'Share lesson notes', desc: 'Upload PDFs, Word documents, images and videos. Pupils access everything from their phones.' },
  { icon: FileText, title: 'Digital assignments', desc: 'Set homework digitally. Pupils submit online. Teachers mark and return feedback without paper.' },
  { icon: MessageSquare, title: 'Discussion boards', desc: 'Class-level discussions where teachers guide learning and pupils ask questions.' },
  { icon: BookOpen, title: 'Lesson library', desc: 'All lessons organised by subject and topic. Pupils catch up at any time, even during holidays.' },
  { icon: Award, title: 'Progress tracking', desc: 'Teachers see which pupils have viewed materials and submitted assignments.' },
  { icon: Users, title: 'Class groups', desc: 'Each class has its own e-learning space. Teachers only manage their assigned classes.' },
];

const steps = [
  { num: '01', title: 'Teacher uploads materials', desc: 'Notes, PDFs or videos uploaded from any smartphone in seconds.' },
  { num: '02', title: 'Pupils access on their phones', desc: 'Students open the Skuli UG app on their phone and see new lessons immediately.' },
  { num: '03', title: 'Assignments set and submitted', desc: 'Teachers post assignments. Pupils submit online. No printing, no lost exercise books.' },
  { num: '04', title: 'Teachers mark and give feedback', desc: 'Feedback returned digitally. Marks recorded in the grade book automatically.' },
];

export default function ElearningPage() {
  return (
    <div style={{ background: DARK, color: '#fff', paddingTop: 68 }}>

      {/* Hero */}
      <section className="py-24" style={{ background: DARK }}>
        <div className="max-w-5xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>E-Learning Module</div>
            <h1 className="text-5xl font-extrabold text-white mb-5 leading-tight">
              Learning that doesn't stop<br />
              <span style={{ color: GOLD }}>when school closes</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Skuli UG's built-in e-learning module lets teachers share notes, set assignments and give feedback — all from their smartphones. Pupils access everything without a computer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold transition-all"
                style={{ background: GOLD, color: DARK }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d4a017')}
                onMouseLeave={e => (e.currentTarget.style.background = GOLD)}>
                Book a Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/pricing"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all"
                style={{ background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}>
                View Pricing
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Mobile access', sub: 'Any Android or iPhone', icon: Smartphone },
                { label: 'No computer needed', sub: 'Works on 3G/4G data', icon: CheckCircle2 },
                { label: 'All subjects', sub: 'Organised by class & topic', icon: BookOpen },
                { label: 'Holiday learning', sub: 'Pupils study from home', icon: Users },
              ].map(stat => (
                <div key={stat.label} className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <stat.icon className="w-5 h-5 mb-3" style={{ color: GOLD }} />
                  <div className="font-bold text-white text-sm">{stat.label}</div>
                  <div className="text-xs text-white/40 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="py-20" style={{ background: '#111' }}>
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <FadeIn className="mb-12">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>Features</div>
            <h2 className="text-3xl font-extrabold text-white">Everything the e-learning module includes</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.07}>
                <motion.div whileHover={{ y: -4 }}
                  className="rounded-2xl p-6 transition-all"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(232,184,75,0.3)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(232,184,75,0.1)' }}>
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

      {/* How it works */}
      <section className="py-20" style={{ background: DARK }}>
        <div className="max-w-4xl mx-auto px-5">
          <FadeIn className="mb-12">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>How It Works</div>
            <h2 className="text-3xl font-extrabold text-white">From teacher to pupil in 4 steps</h2>
          </FadeIn>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.08}>
                <div className="flex items-start gap-6 rounded-2xl p-6"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="text-4xl font-extrabold flex-shrink-0" style={{ color: 'rgba(232,184,75,0.25)' }}>{step.num}</div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-white/55">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Plan availability */}
      <section className="py-16" style={{ background: '#111' }}>
        <div className="max-w-3xl mx-auto px-5 text-center">
          <FadeIn>
            <div className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-5" style={{ background: 'rgba(232,184,75,0.1)', color: GOLD, border: '1px solid rgba(232,184,75,0.2)' }}>
              Available on Growth, Pro and Enterprise plans
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to go digital?</h2>
            <p className="text-white/55 mb-8">E-learning is included from the Growth plan — from UGX 300,000 per term.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/pricing"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold transition-all"
                style={{ background: GOLD, color: DARK }}
                onMouseEnter={e => (e.currentTarget.style.background = '#d4a017')}
                onMouseLeave={e => (e.currentTarget.style.background = GOLD)}>
                See Pricing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact"
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all"
                style={{ background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}>
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
