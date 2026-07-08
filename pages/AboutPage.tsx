import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Heart, Zap, Globe, ArrowRight, Phone, MapPin, Mail } from 'lucide-react';

const GOLD = '#F57A12';
const DARK = '#0C2C57';
const PHONE1 = '+256 760 730 254';
const PHONE2 = '+256 709 234 352';
const SALES_EMAIL = 'sales@skuliug.com';

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

const values = [
  { icon: Target, title: 'Built for Uganda', desc: 'Designed from the ground up for Uganda\'s curriculum, school calendar and three-term structure. Not an import — a local solution.' },
  { icon: Zap, title: 'Mobile first', desc: 'Teachers use their own phones. No computer labs, no reliable WiFi required. Runs on 4G and 3G data.' },
  { icon: Heart, title: 'Accessible pricing', desc: 'Termly pricing that every school can afford. From UGX 150,000 per term — less than the cost of printing report cards.' },
  { icon: Globe, title: 'Always evolving', desc: 'We ship new features every term based on direct feedback from headteachers and teachers on the ground.' },
];

export default function AboutPage() {
  return (
    <div style={{ background: DARK, color: '#fff', paddingTop: 68 }}>

      {/* Hero */}
      <section className="py-24" style={{ background: DARK }}>
        <div className="max-w-4xl mx-auto px-5">
          <FadeIn>
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>About Skuli UG</div>
            <h1 className="text-5xl font-extrabold text-white mb-6 leading-tight">
              Built in Uganda.<br />
              <span style={{ color: GOLD }}>For Uganda's schools.</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Skuli UG is a Ugandan company building software that helps primary schools manage students, fees, academics and communication — all from a smartphone. We were founded because we saw how much time teachers waste on paperwork that should take seconds.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-16" style={{ background: '#061530' }}>
        <div className="max-w-4xl mx-auto px-5">
          <FadeIn>
            <div className="rounded-2xl p-8 sm:p-12" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h2 className="text-3xl font-extrabold text-white mb-6">The story behind Skuli UG</h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Every end-of-term in Uganda, teachers spend entire weekends writing report cards by hand or formatting Excel files. Headteachers chase parents for fees using notebooks. Academic records live in filing cabinets that can flood, burn or get lost.
                </p>
                <p>
                  We built Skuli UG to change that. Our platform gives every school — regardless of size or budget — access to professional school management tools that actually work on Uganda's network conditions and on the devices teachers already own.
                </p>
                <p>
                  Our AI automatically writes personalised report comments per pupil. Our fee tracker tells you exactly who owes what in seconds. Our e-learning module means learning doesn't stop when schools close.
                </p>
                <p style={{ color: GOLD }} className="font-semibold">
                  We are a Ugandan company. Our support team speaks your language, understands your curriculum and is reachable by phone or WhatsApp.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16" style={{ background: DARK }}>
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <FadeIn>
              <div className="rounded-2xl p-7 h-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Our Mission</div>
                <p className="text-white text-lg font-semibold leading-relaxed">
                  To make professional school management accessible to every school in Uganda — regardless of size, location or technical expertise.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl p-7 h-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Our Vision</div>
                <p className="text-white text-lg font-semibold leading-relaxed">
                  A Uganda where every child's academic journey is tracked digitally, every teacher can focus on teaching — and every parent can see their child's progress from their phone.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ background: '#061530' }}>
        <div className="max-w-5xl mx-auto px-5">
          <FadeIn className="mb-12">
            <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>Our Values</div>
            <h2 className="text-3xl font-extrabold text-white">What we stand for</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(245,122,18,0.1)' }}>
                    <v.icon className="w-5 h-5" style={{ color: GOLD }} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16" style={{ background: DARK }}>
        <div className="max-w-3xl mx-auto px-5 text-center">
          <FadeIn>
            <h2 className="text-3xl font-extrabold text-white mb-4">Get in touch</h2>
            <p className="text-white/50 mb-8">We're based in Uganda and respond fast — by phone, WhatsApp or email.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-white/70 text-sm">
              <a href={`tel:${PHONE1.replace(/\s/g,'')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" style={{ color: GOLD }} /> {PHONE1}
              </a>
              <a href={`tel:${PHONE2.replace(/\s/g,'')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" style={{ color: GOLD }} /> {PHONE2}
              </a>
              <a href={`mailto:${SALES_EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" style={{ color: GOLD }} /> {SALES_EMAIL}
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-white/40 mb-8">
              <MapPin className="w-4 h-4" style={{ color: GOLD }} /> Kampala, Uganda
            </div>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all"
              style={{ background: GOLD, color: DARK }}
              onMouseEnter={e => (e.currentTarget.style.background = '#DA6A0C')}
              onMouseLeave={e => (e.currentTarget.style.background = GOLD)}>
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
