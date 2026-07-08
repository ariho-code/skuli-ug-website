import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, Zap, Phone, Code2, ArrowRight } from 'lucide-react';

const GOLD = '#F57A12';
const DARK = '#0C2C57';
const PHONE1 = '+256 760 730 254';

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

const plans = [
  {
    name: 'Starter',
    tag: 'Under 150 pupils',
    ugx: '150,000',
    usd: '$40',
    popular: false,
    color: 'rgba(255,255,255,0.04)',
    borderColor: 'rgba(255,255,255,0.08)',
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
    name: 'Growth',
    tag: '150 – 400 pupils',
    ugx: '300,000',
    usd: '$80',
    popular: true,
    color: '#fff',
    borderColor: GOLD,
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
    name: 'Pro',
    tag: '400 – 800 pupils',
    ugx: '500,000',
    usd: '$130',
    popular: false,
    color: 'rgba(255,255,255,0.04)',
    borderColor: 'rgba(255,255,255,0.08)',
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
    name: 'Enterprise',
    tag: '800+ pupils or multi-campus',
    ugx: '800,000+',
    usd: '$210+',
    popular: false,
    color: 'rgba(255,255,255,0.04)',
    borderColor: 'rgba(255,255,255,0.08)',
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
  { q: 'How often do I pay?', a: 'You pay once per school term — three times per year. No monthly subscriptions, no per-teacher fees.' },
  { q: 'Can I pay in USD?', a: 'Yes. We accept both UGX and USD. USD pricing is listed alongside UGX for international partners or donor-funded schools.' },
  { q: 'What happens if my school grows?', a: 'Simply upgrade to the next plan at the start of the following term. We pro-rate the difference if needed.' },
  { q: 'Is there a free trial?', a: 'Yes — we offer a 14-day free trial for all new schools. No credit card needed. Book a demo and we set you up.' },
  { q: 'Do teachers need a computer?', a: 'No. Skuli UG is fully mobile-first. It works on any Android or iPhone on mobile data.' },
  { q: 'What is the Custom Build option?', a: 'We build bespoke school management systems tailored to your workflow, branding and specific requirements. Contact us for a quote.' },
];

export default function PricingPage() {
  return (
    <div style={{ background: DARK, color: '#fff', paddingTop: 68 }}>

      {/* Hero */}
      <section className="py-20" style={{ background: DARK }}>
        <div className="max-w-4xl mx-auto px-5 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{ background: 'rgba(245,122,18,0.15)', border: '1px solid rgba(245,122,18,0.3)', color: GOLD }}>
              <Zap className="w-3.5 h-3.5" /> Termly Pricing — Pay Once Per Term
            </div>
            <h1 className="text-5xl font-extrabold text-white mb-4">Simple, fair pricing</h1>
            <p className="text-white/55 text-lg max-w-2xl mx-auto">
              No per-teacher fees. No hidden monthly charges. One flat payment per term based on your school size.
              Three terms a year — that is all you pay.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Plans grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }}
                  className="rounded-2xl p-7 flex flex-col h-full relative transition-all"
                  style={{ background: plan.color, border: `${plan.popular ? '2' : '1'}px solid ${plan.borderColor}` }}>
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold"
                      style={{ background: GOLD, color: DARK }}>
                      Most Popular
                    </div>
                  )}
                  <div className="mb-6">
                    <h2 className="text-xl font-extrabold mb-0.5" style={{ color: plan.popular ? DARK : '#fff' }}>{plan.name}</h2>
                    <p className="text-xs mb-4" style={{ color: plan.popular ? '#777' : 'rgba(255,255,255,0.4)' }}>{plan.tag}</p>
                    <div className="text-3xl font-extrabold leading-none mb-1" style={{ color: plan.popular ? DARK : GOLD }}>
                      UGX {plan.ugx}
                    </div>
                    <div className="text-xs" style={{ color: plan.popular ? '#888' : 'rgba(255,255,255,0.35)' }}>
                      per term &nbsp;&bull;&nbsp; {plan.usd}
                    </div>
                  </div>
                  <ul className="space-y-2.5 flex-1 mb-6">
                    {plan.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm"
                        style={{ color: plan.popular ? '#333' : 'rgba(255,255,255,0.7)' }}>
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: plan.popular ? '#16a34a' : GOLD }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="block text-center py-3 rounded-xl text-sm font-bold transition-all"
                    style={{
                      background: plan.popular ? GOLD : 'rgba(245,122,18,0.1)',
                      color: plan.popular ? DARK : GOLD,
                      border: plan.popular ? 'none' : '1px solid rgba(245,122,18,0.25)',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = plan.popular ? '#DA6A0C' : 'rgba(245,122,18,0.2)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = plan.popular ? GOLD : 'rgba(245,122,18,0.1)'; }}>
                    Get Started
                  </Link>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Build */}
      <section className="py-16" style={{ background: '#061530' }}>
        <div className="max-w-4xl mx-auto px-5">
          <FadeIn>
            <div className="rounded-2xl p-8 sm:p-10" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(245,122,18,0.1)' }}>
                  <Code2 className="w-6 h-6" style={{ color: GOLD }} />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-lg text-xs font-bold mb-3" style={{ background: DARK, color: GOLD, border: `1px solid ${GOLD}` }}>
                    CUSTOM BUILD
                  </span>
                  <h2 className="text-2xl font-extrabold text-white mb-2">Need something built for your school?</h2>
                  <p className="text-white/55 mb-6">
                    We build fully bespoke school management systems. Your branding, your workflow, your specific features.
                    Integrations with your existing tools. Designed and delivered by the Skuli UG team.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {['Your school branding & colors', 'Custom report card formats', 'Your fee structure logic', 'EMIS integration ready', 'Multi-school / network support', 'Full source code option'].map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} /> {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all"
                      style={{ background: GOLD, color: DARK }}
                      onMouseEnter={e => (e.currentTarget.style.background = '#DA6A0C')}
                      onMouseLeave={e => (e.currentTarget.style.background = GOLD)}>
                      Get a Custom Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a href={`tel:${PHONE1.replace(/\s/g,'')}`}
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
                      style={{ background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)' }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}>
                      <Phone className="w-4 h-4" /> {PHONE1}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ background: DARK }}>
        <div className="max-w-3xl mx-auto px-5">
          <FadeIn className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-white">Frequently asked questions</h2>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.05}>
                <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-white/55 leading-relaxed">{faq.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
