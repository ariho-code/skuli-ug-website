import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Heart, Zap, Globe, ArrowUpRight, Phone, MapPin, Mail } from 'lucide-react';

const PHONE1 = '+256 760 730 254';
const PHONE2 = '+256 709 234 352';
const SALES_EMAIL = 'sales@skuliug.com';

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

const values = [
  { icon: Target, title: 'Built for Uganda',  desc: 'Designed from the ground up for Uganda\'s curriculum, school calendar and three-term structure.' },
  { icon: Zap,    title: 'Mobile first',      desc: 'Teachers use their own phones. No computer labs, no reliable WiFi required. Works on 4G and 3G.' },
  { icon: Heart,  title: 'Accessible pricing',desc: 'Termly pricing every school can afford. From UGX 150,000 / term — less than printing report cards.' },
  { icon: Globe,  title: 'Always evolving',   desc: 'We ship new features every term based on direct feedback from headteachers and teachers on the ground.' },
];

export default function AboutPage() {
  return (
    <div className="bg-paper text-ink" style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section className="relative py-24 paper-grain overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full opacity-40 pointer-events-none drift"
          style={{ background: 'radial-gradient(closest-side, rgba(200,147,46,0.22), transparent 70%)' }} />
        <div className="relative max-w-4xl mx-auto px-5">
          <Reveal>
            <div className="eyebrow mb-5">About Skuli UG</div>
            <h1 className="font-display text-[clamp(2.6rem,5.6vw,4.6rem)] leading-[1.0] tracking-tightest text-ink mb-6">
              Built in Uganda.<br />
              <span className="font-display-italic text-gold">For Uganda's schools.</span>
            </h1>
            <p className="text-[17px] text-muted leading-relaxed max-w-2xl">
              Skuli UG is a Ugandan company building software that helps primary schools manage
              students, fees, academics and communication — all from a smartphone. We were founded
              because we saw how much time teachers waste on paperwork that should take seconds.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-paper-2 border-y border-[color:var(--line)]">
        <div className="max-w-3xl mx-auto px-5">
          <Reveal>
            <div className="eyebrow mb-5">The story</div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.4rem)] leading-tight tracking-tightest text-ink mb-6">
              Why we started Skuli.
            </h2>
            <div className="space-y-5 text-[16px] text-muted leading-relaxed">
              <p>
                Every end-of-term in Uganda, teachers spend entire weekends writing report cards by
                hand or formatting Excel files. Headteachers chase parents for fees using notebooks.
                Academic records live in filing cabinets that can flood, burn or get lost.
              </p>
              <p>
                We built Skuli UG to change that. Our platform gives every school — regardless of
                size or budget — access to professional school management tools that actually work
                on Uganda's network conditions, on the devices teachers already own.
              </p>
              <p>
                Our AI drafts personalised report comments per pupil. Our fee tracker tells you
                exactly who owes what in seconds. Our e-learning module means learning doesn't stop
                when schools close.
              </p>
              <p className="font-display text-[19px] italic text-ink">
                We are a Ugandan company. Our support speaks your language, understands your
                curriculum, and is reachable by phone or WhatsApp.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Reveal>
              <div className="card h-full bg-paper-2">
                <div className="eyebrow mb-4">Mission</div>
                <p className="font-display text-[22px] leading-snug tracking-tight text-ink">
                  To make professional school management accessible to every school in Uganda — regardless
                  of size, location or technical expertise.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="card h-full bg-paper-2">
                <div className="eyebrow mb-4" style={{ color: 'var(--clay)' }}>Vision</div>
                <p className="font-display text-[22px] leading-snug tracking-tight text-ink">
                  A Uganda where every child's academic journey is tracked digitally, every teacher
                  can focus on teaching — and every parent can see progress from their phone.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-paper-2 border-y border-[color:var(--line)]">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal className="mb-12 max-w-2xl">
            <div className="eyebrow mb-4">Our values</div>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-tight tracking-tightest text-ink">
              What we stand for.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                <motion.div whileHover={{ y: -3 }} transition={{ duration: 0.2 }} className="card h-full bg-paper">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-paper-2 border border-[color:var(--line)]">
                    <v.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-display text-[18px] font-semibold tracking-tight text-ink mb-2">{v.title}</h3>
                  <p className="text-[13.5px] text-muted leading-relaxed">{v.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-ink text-paper-2">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <Reveal>
            <h2 className="font-display text-[clamp(2rem,4.6vw,3rem)] leading-tight tracking-tightest mb-5">
              Get in touch.
            </h2>
            <p className="text-[16px] text-paper-3/75 mb-9">
              We're based in Uganda and respond fast — by phone, WhatsApp or email.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-[14px] text-paper-3/85">
              <a href={`tel:${PHONE1.replace(/\s/g,'')}`} className="flex items-center gap-2 link-reveal">
                <Phone className="w-4 h-4 text-gold-soft" /> {PHONE1}
              </a>
              <a href={`tel:${PHONE2.replace(/\s/g,'')}`} className="flex items-center gap-2 link-reveal">
                <Phone className="w-4 h-4 text-gold-soft" /> {PHONE2}
              </a>
              <a href={`mailto:${SALES_EMAIL}`} className="flex items-center gap-2 link-reveal">
                <Mail className="w-4 h-4 text-gold-soft" /> {SALES_EMAIL}
              </a>
            </div>
            <div className="flex items-center justify-center gap-2 text-[13px] text-paper-3/55 mb-9">
              <MapPin className="w-4 h-4 text-gold-soft" /> Kampala, Uganda
            </div>
            <Link to="/contact" className="btn" style={{ background: 'var(--gold)', color: '#1A1611' }}>
              Contact us <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
