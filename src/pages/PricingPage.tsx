import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Phone, Code2, ArrowRight, Plus, MessageCircle } from 'lucide-react';
import { FadeIn, Eyebrow, GOLD, INK, INK2, CREAM, PHONE1, goldTile } from '../lib/theme';
import { motion } from 'framer-motion';
import Seo, { SITE_URL } from '../lib/seo';
import { breadcrumbJsonLd, faqJsonLd } from '../lib/jsonld';

const plans = [
  { name: 'Starter', sub: 'Under 150 pupils', price: '150,000', usd: '$40', hl: false, badge: null, f: ['Report cards & mark sheets', 'Fees tracking & invoicing', 'Up to 5 teacher accounts', 'Mobile app access', 'Email support'] },
  { name: 'Growth', sub: '150 – 400 pupils', price: '300,000', usd: '$80', hl: false, badge: null, f: ['Everything in Starter', 'E-learning module', 'AI report comments', 'Analytics dashboard', 'Up to 20 teachers', 'Priority support'] },
  { name: 'Pro', sub: '400 – 800 pupils', price: '500,000', usd: '$130', hl: false, badge: null, f: ['Everything in Growth', 'Parent SMS alerts', 'Timetable management', 'Advanced analytics', 'Unlimited teachers', 'Dedicated account manager'] },
  { name: 'Enterprise', sub: '800+ pupils / multi-campus', price: '800,000+', usd: '$210+', hl: true, badge: 'Most commonly bought', f: ['Everything in Pro', 'Custom school branding', 'Multi-campus support', 'API access', 'On-site onboarding', '24/7 support'] },
];

const customFeatures = ['Your school branding & colors', 'Custom report card formats', 'Your fee structure logic', 'EMIS integration ready', 'Multi-school / network support', 'Full source code option'];

const faqs = [
  { q: 'How often do I pay?', a: 'You pay once per school term — three times per year. No monthly subscriptions, no per-teacher fees.' },
  { q: 'Can I pay in USD?', a: 'Yes. We accept both UGX and USD. USD pricing is listed alongside UGX for international partners or donor-funded schools.' },
  { q: 'What happens if my school grows?', a: 'Simply upgrade to the next plan at the start of the following term. We pro-rate the difference if needed.' },
  { q: 'Is there a free trial?', a: 'Yes — we offer a 14-day free trial for all new schools. No credit card needed. Book a demo and we set you up.' },
  { q: 'Do teachers need a computer?', a: 'No. Skuli UG is fully mobile-first. It works on any Android or iPhone on mobile data.' },
  { q: 'What is the Custom Build option?', a: 'We build bespoke school management systems tailored to your workflow, branding and specific requirements. Contact us for a quote.' },
];

const plansJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Skuli UG School Management System',
  description: 'Termly subscription plans for Ugandan primary schools — no per-teacher fees, no hidden charges.',
  brand: { '@type': 'Brand', name: 'Skuli UG' },
  offers: plans.map(p => ({
    '@type': 'Offer',
    name: `${p.name} plan`,
    price: p.price.replace(/[^0-9]/g, ''),
    priceCurrency: 'UGX',
    description: p.sub,
    url: `${SITE_URL}/pricing`,
    availability: 'https://schema.org/InStock',
  })),
};

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div style={{ background: INK, color: '#fff' }}>
      <Seo
        title="Pricing — Termly Plans from UGX 150,000 | Skuli UG"
        description="Simple, transparent termly pricing for Ugandan schools. No per-teacher fees, no hidden charges — plans from UGX 150,000 per term. Compare Starter, Growth, Pro and Enterprise."
        path="/pricing"
        jsonLd={[
          breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Pricing', path: '/pricing' }]),
          faqJsonLd(faqs),
          plansJsonLd,
        ]}
      />

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="glow absolute -top-32 left-[-10%] w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 40% 40%, rgba(245,122,18,.3), transparent 65%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <Eyebrow>TERMLY PRICING · PAY ONCE PER TERM</Eyebrow>
            <h1 className="font-display font-extrabold tracking-tight leading-[1.05] text-balance mb-5" style={{ fontSize: 'clamp(2.3rem,6vw,3.8rem)' }}>
              Simple, <span className="gold-text">fair</span> pricing
            </h1>
            <p className="text-pretty text-white/60 mx-auto max-w-2xl" style={{ fontSize: 'clamp(1rem,1.6vw,1.15rem)', lineHeight: 1.65 }}>
              No per-teacher fees. No hidden monthly charges. One flat payment per term based on your school size — three terms a year, that's all you pay.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── PLANS (LIGHT) ────────────────────── */}
      <section className="py-16 sm:py-20" style={{ background: CREAM, color: '#0C2C57' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.07}>
                <div className="card-hover relative rounded-3xl p-7 flex flex-col h-full"
                  style={p.hl
                    ? { background: INK, color: '#fff', boxShadow: '0 30px 60px -20px rgba(218,106,12,0.5)', border: `2px solid ${GOLD}` }
                    : { background: '#fff', color: '#0C2C57', border: '1px solid rgba(12,44,87,0.07)' }}>
                  {p.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full text-[11px] font-bold whitespace-nowrap" style={{ background: GOLD, color: INK }}>{p.badge}</div>}
                  <h3 className="font-display font-extrabold text-xl">{p.name}</h3>
                  <p className="text-xs mb-4" style={{ color: p.hl ? 'rgba(255,255,255,0.45)' : 'rgba(12,44,87,0.45)' }}>{p.sub}</p>
                  <div className="font-display font-extrabold text-3xl" style={{ color: p.hl ? GOLD : '#0C2C57' }}>UGX {p.price}</div>
                  <div className="text-xs mt-1 mb-6" style={{ color: p.hl ? 'rgba(255,255,255,0.4)' : 'rgba(12,44,87,0.45)' }}>per term · {p.usd}</div>
                  <ul className="space-y-3 flex-1 mb-6 text-sm">
                    {p.f.map(x => (
                      <li key={x} className="flex items-start gap-2.5" style={{ color: p.hl ? 'rgba(255,255,255,0.75)' : 'rgba(12,44,87,0.65)' }}>
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: p.hl ? GOLD : '#16a34a' }} strokeWidth={2.5} /> {x}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={p.hl ? 'btn-gold block text-center py-3.5 rounded-2xl text-sm font-bold' : 'block text-center py-3.5 rounded-2xl text-sm font-bold transition'} style={p.hl ? undefined : { background: INK, color: '#fff' }}>Get started</Link>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Custom build */}
          <FadeIn className="mt-7">
            <div className="card-hover rounded-3xl p-8 sm:p-10" style={{ background: INK, color: '#fff' }}>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl grid place-items-center flex-shrink-0" style={{ background: goldTile }}>
                  <Code2 className="w-6 h-6" style={{ color: GOLD }} />
                </div>
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-lg text-[11px] font-bold mb-3" style={{ background: 'rgba(245,122,18,0.15)', color: GOLD, border: '1px solid rgba(245,122,18,0.3)' }}>
                    CUSTOM BUILD
                  </span>
                  <h2 className="font-display font-extrabold text-2xl mb-2">Need something built for your school?</h2>
                  <p className="text-white/55 mb-6 max-w-2xl">
                    We build fully bespoke school management systems. Your branding, your workflow, your specific features — designed and delivered by the Skuli UG team.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {customFeatures.map(f => (
                      <div key={f} className="flex items-center gap-2.5 text-sm text-white/65">
                        <Check className="w-4 h-4 flex-shrink-0" style={{ color: GOLD }} strokeWidth={2.5} /> {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link to="/contact" className="btn-gold flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-sm">
                      Get a Custom Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a href={`tel:${PHONE1.replace(/\s/g, '')}`} className="btn-ghost flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm text-white" style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}>
                      <Phone className="w-4 h-4" style={{ color: GOLD }} /> {PHONE1}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────── */}
      <section className="py-20 sm:py-28" style={{ background: INK }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <div className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: GOLD }}>Questions?</div>
            <h2 className="font-display font-extrabold tracking-tight" style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', lineHeight: 1.05 }}>Frequently asked questions</h2>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <FadeIn key={f.q} delay={i * 0.05}>
                  <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <button onClick={() => setOpenFaq(isOpen ? -1 : i)} className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-5 text-left">
                      <span className="font-display font-semibold text-[15px] sm:text-base text-white">{f.q}</span>
                      <Plus className="w-5 h-5 flex-shrink-0 transition-transform duration-300" style={{ color: GOLD, transform: isOpen ? 'rotate(45deg)' : 'none' }} />
                    </button>
                    <motion.div initial={false} animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} style={{ overflow: 'hidden' }}>
                      <div className="px-5 sm:px-6 pb-5 -mt-1 text-white/55 text-[14.5px] leading-relaxed">{f.a}</div>
                    </motion.div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────── */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${INK2}, ${INK})` }}>
        <div className="glow absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(245,122,18,.18), transparent 70%)' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-[2rem] p-8 sm:p-12 text-center" style={{ border: '1px solid rgba(245,122,18,0.2)', background: 'linear-gradient(180deg, rgba(255,255,255,0.05), transparent)' }}>
              <h2 className="font-display font-extrabold tracking-tight text-balance mb-4" style={{ fontSize: 'clamp(2rem,5vw,3rem)', lineHeight: 1.04 }}>Ready to get started?</h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-8 text-pretty">Book a free demo. No obligation, no credit card — just a real look at your future school system.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://wa.me/256760730254" target="_blank" rel="noreferrer" className="btn-gold flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-base">
                  <MessageCircle className="w-5 h-5" /> Call or WhatsApp us
                </a>
                <a href={`tel:${PHONE1.replace(/\s/g, '')}`} className="btn-ghost flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-base text-white" style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}>{PHONE1}</a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
