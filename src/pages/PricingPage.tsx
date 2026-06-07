import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Phone, Code2, ArrowUpRight } from 'lucide-react';

const PHONE1 = '+256 760 730 254';

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

const plans = [
  {
    name: 'Starter', tag: 'Under 150 pupils',
    ugx: '150,000', usd: '$40', popular: false,
    features: [
      'Unlimited students (up to 150)',
      'AI-powered report cards',
      'Fee tracking & invoicing',
      'Mark sheets & grade books',
      'Up to 5 teacher accounts',
      'Mobile app access',
      'Email support',
    ],
  },
  {
    name: 'Growth', tag: '150 – 400 pupils',
    ugx: '300,000', usd: '$80', popular: true,
    features: [
      'Everything in Starter',
      'Unlimited students (up to 400)',
      'E-learning module',
      'Advanced analytics dashboard',
      'Homework & assignment module',
      'Up to 20 teacher accounts',
      'Announcements & staff chat',
      'Priority support',
    ],
  },
  {
    name: 'Pro', tag: '400 – 800 pupils',
    ugx: '500,000', usd: '$130', popular: false,
    features: [
      'Everything in Growth',
      'Unlimited students (up to 800)',
      'Parent SMS alerts (MTN / Airtel)',
      'Timetable management',
      'Student promotion module',
      'Unlimited teacher accounts',
      'Data backup & export',
      'Dedicated account manager',
    ],
  },
  {
    name: 'Enterprise', tag: '800+ pupils or multi-campus',
    ugx: '800,000+', usd: '$210+', popular: false,
    features: [
      'Everything in Pro',
      'Unlimited students',
      'Multi-campus / branch support',
      'Custom school branding',
      'Custom report card templates',
      'API access',
      'On-site training & onboarding',
      '24/7 dedicated support',
    ],
  },
];

const faqs = [
  { q: 'How often do I pay?',          a: 'Once per school term — three times a year. No monthly subscriptions, no per-teacher fees.' },
  { q: 'Can I pay in USD?',            a: 'Yes. We accept both UGX and USD. USD pricing is listed alongside UGX for international partners or donor-funded schools.' },
  { q: 'What if my school grows?',     a: 'Simply upgrade to the next plan at the start of the following term. We pro-rate the difference if needed.' },
  { q: 'Is there a free trial?',       a: 'Yes — a 14-day free trial for all new schools. No credit card needed. Book a demo and we set you up.' },
  { q: 'Do teachers need a computer?', a: 'No. Skuli UG is fully mobile-first. It works on any Android or iPhone on mobile data.' },
  { q: 'What is the Custom Build option?', a: 'We build bespoke school management systems tailored to your workflow, branding and specific requirements. Contact us for a quote.' },
];

export default function PricingPage() {
  return (
    <div className="bg-paper text-ink" style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section className="relative py-24 paper-grain overflow-hidden">
        <div aria-hidden className="absolute -top-32 left-1/3 w-[520px] h-[520px] rounded-full opacity-40 pointer-events-none drift"
          style={{ background: 'radial-gradient(closest-side, rgba(200,147,46,0.20), transparent 70%)' }} />
        <div className="relative max-w-4xl mx-auto px-5 text-center">
          <Reveal>
            <div className="eyebrow mb-5 justify-center mx-auto inline-flex">Pay once per term</div>
            <h1 className="font-display text-[clamp(2.6rem,5.8vw,4.8rem)] leading-[1.0] tracking-tightest text-ink mb-6">
              Simple, fair pricing —<br />
              <span className="font-display-italic text-gold">just three payments a year.</span>
            </h1>
            <p className="text-[17px] text-muted leading-relaxed max-w-2xl mx-auto">
              No per-teacher fees. No hidden monthly charges. One flat payment per term based on your school size.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {plans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.07}>
                <motion.div whileHover={{ y: -5 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-2xl p-7 h-full flex flex-col"
                  style={{
                    background: plan.popular ? 'var(--ink)' : 'var(--paper-2)',
                    color:      plan.popular ? 'var(--paper-2)' : 'var(--ink)',
                    border:     plan.popular ? '1px solid var(--ink)' : '1px solid var(--line)',
                    boxShadow:  plan.popular ? 'var(--shadow-lg)' : 'none',
                  }}>
                  {plan.popular && (
                    <div className="absolute -top-2.5 left-7 px-2.5 py-1 rounded-full text-[10.5px] font-bold tracking-wider uppercase"
                      style={{ background: 'var(--gold)', color: '#1A1611' }}>
                      Most popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h2 className="font-display text-[22px] font-semibold tracking-tight">{plan.name}</h2>
                    <p className={`text-[12.5px] mt-0.5 ${plan.popular ? 'text-paper-3/65' : 'text-muted'}`}>{plan.tag}</p>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-[12.5px] font-medium ${plan.popular ? 'text-paper-3/65' : 'text-muted'}`}>UGX</span>
                      <span className="font-display text-[34px] font-semibold tracking-tight">{plan.ugx}</span>
                    </div>
                    <div className={`text-[12px] mt-0.5 ${plan.popular ? 'text-paper-3/55' : 'text-muted-2'}`}>
                      per term · {plan.usd}
                    </div>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-7">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-[13.5px] leading-snug">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-gold-soft' : 'text-gold'}`} />
                        <span className={plan.popular ? 'text-paper-3/85' : 'text-muted'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn w-full"
                    style={plan.popular
                      ? { background: 'var(--gold)', color: '#1A1611' }
                      : { background: 'var(--ink)', color: 'var(--paper-2)' }}>
                    Get started <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Build */}
      <section className="py-16 bg-paper-2 border-y border-[color:var(--line)]">
        <div className="max-w-5xl mx-auto px-5">
          <Reveal>
            <div className="rounded-3xl p-8 sm:p-10 bg-paper border border-[color:var(--line)]">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-paper-2 border border-[color:var(--line)]">
                  <Code2 className="w-6 h-6 text-gold" />
                </div>
                <div className="flex-1">
                  <span className="inline-block text-[10.5px] font-bold tracking-wider uppercase mb-3 px-2 py-0.5 rounded-md"
                    style={{ background: 'rgba(194,92,46,0.10)', color: 'var(--clay)' }}>
                    Custom build
                  </span>
                  <h2 className="font-display text-[26px] font-semibold tracking-tight text-ink mb-3">
                    Need something built for your school?
                  </h2>
                  <p className="text-[15px] text-muted leading-relaxed mb-6 max-w-2xl">
                    We build fully bespoke school management systems — your branding, workflows, integrations.
                    Designed and delivered by the Skuli UG team.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2.5 mb-7">
                    {[
                      'Your school branding & colours',
                      'Custom report card formats',
                      'Your fee structure logic',
                      'EMIS integration ready',
                      'Multi-school / network support',
                      'Full source code option',
                    ].map(f => (
                      <div key={f} className="flex items-center gap-2 text-[13.5px] text-muted">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-gold" /> {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact" className="btn btn-gold">
                      Get a custom quote <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <a href={`tel:${PHONE1.replace(/\s/g,'')}`} className="btn btn-ghost">
                      <Phone className="w-4 h-4 text-gold" /> {PHONE1}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-5">
          <Reveal className="mb-12 text-center">
            <div className="eyebrow mb-4 justify-center mx-auto inline-flex">FAQ</div>
            <h2 className="font-display text-[clamp(2rem,4.4vw,3rem)] leading-tight tracking-tightest text-ink">
              Frequently asked questions.
            </h2>
          </Reveal>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Reveal key={faq.q} delay={i * 0.04}>
                <details className="group rounded-2xl bg-paper-2 border border-[color:var(--line)] open:bg-paper-2 transition-colors">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5">
                    <h3 className="font-display text-[16.5px] font-semibold tracking-tight text-ink">{faq.q}</h3>
                    <span className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 bg-paper border border-[color:var(--line)] transition-transform group-open:rotate-45">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M6 1.5 V10.5 M1.5 6 H10.5" />
                      </svg>
                    </span>
                  </summary>
                  <p className="px-5 pb-5 -mt-1 text-[14px] text-muted leading-relaxed">{faq.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
