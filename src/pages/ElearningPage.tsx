import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Upload, FileText, MessageSquare, CheckCircle2, Smartphone, Users, Award, ArrowUpRight } from 'lucide-react';

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

const features = [
  { icon: Upload,        title: 'Share lesson notes',     desc: 'Upload PDFs, Word docs, images and videos. Pupils access everything from their phones.' },
  { icon: FileText,      title: 'Digital assignments',    desc: 'Set homework digitally. Pupils submit online. Teachers mark and return feedback — no paper.' },
  { icon: MessageSquare, title: 'Discussion boards',      desc: 'Class-level discussions where teachers guide learning and pupils ask questions.' },
  { icon: BookOpen,      title: 'Lesson library',         desc: 'All lessons organised by subject and topic. Pupils catch up any time, even during holidays.' },
  { icon: Award,         title: 'Progress tracking',      desc: 'Teachers see which pupils have viewed materials and submitted assignments.' },
  { icon: Users,         title: 'Class groups',           desc: 'Each class has its own e-learning space. Teachers only manage their assigned classes.' },
];

const steps = [
  { num: '01', title: 'Teacher uploads materials',    desc: 'Notes, PDFs or videos uploaded from any smartphone in seconds.' },
  { num: '02', title: 'Pupils access on their phones',desc: 'Pupils open the Skuli UG app and see new lessons immediately.' },
  { num: '03', title: 'Assignments set and submitted',desc: 'Teachers post assignments. Pupils submit online. No printing, no lost exercise books.' },
  { num: '04', title: 'Marked & feedback returned',   desc: 'Feedback returned digitally. Marks recorded in the grade book automatically.' },
];

export default function ElearningPage() {
  return (
    <div className="bg-paper text-ink" style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section className="relative py-24 paper-grain overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full opacity-40 pointer-events-none drift"
          style={{ background: 'radial-gradient(closest-side, rgba(200,147,46,0.22), transparent 70%)' }} />
        <div className="relative max-w-6xl mx-auto px-5 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <Reveal>
            <div className="eyebrow mb-5">E-learning module</div>
            <h1 className="font-display text-[clamp(2.6rem,5.8vw,4.6rem)] leading-[1.0] tracking-tightest text-ink mb-6">
              Learning that doesn't stop<br />
              <span className="font-display-italic text-gold">when school closes.</span>
            </h1>
            <p className="text-[17px] text-muted leading-relaxed mb-8 max-w-xl">
              Skuli UG's built-in e-learning module lets teachers share notes, set assignments and
              give feedback — all from their smartphones. Pupils access everything without a computer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn btn-primary">
                Book a demo <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/pricing" className="btn btn-ghost">
                View pricing
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Mobile access',     sub: 'Any Android or iPhone',     icon: Smartphone },
                { label: 'No computer needed', sub: 'Works on 3G/4G data',       icon: CheckCircle2 },
                { label: 'All subjects',       sub: 'Organised by class & topic', icon: BookOpen },
                { label: 'Holiday learning',   sub: 'Pupils study from home',    icon: Users },
              ].map(stat => (
                <div key={stat.label} className="card bg-paper-2">
                  <stat.icon className="w-5 h-5 mb-3 text-gold" />
                  <div className="font-display text-[16px] font-semibold tracking-tight text-ink">{stat.label}</div>
                  <div className="text-[12.5px] text-muted mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-paper-2 border-y border-[color:var(--line)]">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <Reveal className="mb-12 max-w-2xl">
            <div className="eyebrow mb-4">Features</div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-tight tracking-tightest text-ink">
              Everything the e-learning module includes.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }} className="card h-full bg-paper">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-paper-2 border border-[color:var(--line)]">
                    <f.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-[18px] font-semibold tracking-tight text-ink mb-2">{f.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed">{f.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5">
          <Reveal className="mb-12 max-w-2xl">
            <div className="eyebrow mb-4">How it works</div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-tight tracking-tightest text-ink">
              From teacher to pupil, in four steps.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.06}>
                <div className="flex items-start gap-6 rounded-2xl p-6 bg-paper-2 border border-[color:var(--line)]">
                  <div className="font-display text-[44px] font-semibold leading-none flex-shrink-0 text-gold/40">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-display text-[19px] font-semibold tracking-tight text-ink mb-1">{step.title}</h3>
                    <p className="text-[14px] text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ink text-paper-2">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <Reveal>
            <div className="inline-block px-3 py-1.5 rounded-full text-[11.5px] font-semibold tracking-wider uppercase mb-5"
              style={{ background: 'rgba(232,195,107,0.12)', color: 'var(--gold-soft)', border: '1px solid rgba(232,195,107,0.25)' }}>
              Available on Growth, Pro and Enterprise
            </div>
            <h2 className="font-display text-[clamp(2rem,4.6vw,3rem)] leading-tight tracking-tightest mb-5">
              Ready to go digital?
            </h2>
            <p className="text-[16px] text-paper-3/75 mb-9">
              E-learning is included from the Growth plan — from UGX 300,000 per term.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/pricing" className="btn" style={{ background: 'var(--gold)', color: '#1A1611' }}>
                See pricing <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="btn btn-dark-on-dark">
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
