import { Link } from 'react-router-dom';
import { Target, Heart, Zap, Globe, ArrowRight, Phone, MapPin, Mail } from 'lucide-react';
import { FadeIn, Eyebrow, GOLD, INK, INK2, CREAM, PHONE1, PHONE2, SALES_EMAIL, goldTile } from '../lib/theme';
import Seo from '../lib/seo';
import { breadcrumbJsonLd } from '../lib/jsonld';

const values = [
  { icon: Target, title: 'Built for Uganda', desc: 'Designed from the ground up for Uganda\'s curriculum, school calendar and three-term structure. Not an import — a local solution.' },
  { icon: Zap, title: 'Mobile first', desc: 'Teachers use their own phones. No computer labs, no reliable WiFi required. Runs on 4G and 3G data.' },
  { icon: Heart, title: 'Accessible pricing', desc: 'Termly pricing that every school can afford. From UGX 150,000 per term — less than the cost of printing report cards.' },
  { icon: Globe, title: 'Always evolving', desc: 'We ship new features every term based on direct feedback from headteachers and teachers on the ground.' },
];

const storyParagraphs = [
  'Every end-of-term in Uganda, teachers spend entire weekends writing report cards by hand or formatting Excel files. Headteachers chase parents for fees using notebooks. Academic records live in filing cabinets that can flood, burn or get lost.',
  'We built Skuli UG to change that. Our platform gives every school — regardless of size or budget — access to professional school management tools that actually work on Uganda\'s network conditions and on the devices teachers already own.',
  'Our AI automatically writes personalised report comments per pupil. Our fee tracker tells you exactly who owes what in seconds. Our e-learning module means learning doesn\'t stop when schools close.',
];

export default function AboutPage() {
  return (
    <div style={{ background: INK, color: '#fff' }}>
      <Seo
        title="About Us — Built in Uganda, for Uganda's Schools | Skuli UG"
        description="Skuli UG is a Ugandan company building mobile-first school management software for primary schools across Uganda. Learn our story, mission and values."
        path="/about"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])}
      />

      {/* ── HERO ─────────────────────────────── */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="glow absolute -top-32 right-[-10%] w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 60% 40%, rgba(245,122,18,.3), transparent 65%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Eyebrow>ABOUT SKULI UG</Eyebrow>
            <h1 className="font-display font-extrabold tracking-tight leading-[1.05] text-balance mb-6" style={{ fontSize: 'clamp(2.3rem,6vw,3.8rem)' }}>
              Built in Uganda.<br /><span className="gold-text">For Uganda's schools.</span>
            </h1>
            <p className="text-pretty text-white/60 max-w-2xl" style={{ fontSize: 'clamp(1rem,1.6vw,1.15rem)', lineHeight: 1.65 }}>
              Skuli UG is a Ugandan company building software that helps primary schools manage students, fees, academics and communication — all from a smartphone. We were founded because we saw how much time teachers waste on paperwork that should take seconds.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── STORY (LIGHT) ────────────────────── */}
      <section className="py-16 sm:py-24" style={{ background: CREAM, color: '#0C2C57' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: '#DA6A0C' }}>Our story</div>
            <h2 className="font-display font-extrabold tracking-tight text-balance mb-6" style={{ fontSize: 'clamp(1.9rem,4vw,2.8rem)', lineHeight: 1.08 }}>The story behind Skuli UG</h2>
            <div className="space-y-4 max-w-3xl" style={{ color: 'rgba(12,44,87,0.6)' }}>
              {storyParagraphs.map(p => <p key={p} className="text-[15.5px] leading-relaxed">{p}</p>)}
              <p className="text-[15.5px] leading-relaxed font-semibold" style={{ color: '#0C2C57' }}>
                We are a Ugandan company. Our support team speaks your language, understands your curriculum and is reachable by phone or WhatsApp.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── MISSION / VISION ─────────────────── */}
      <section className="py-16 sm:py-20" style={{ background: INK }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-5">
          <FadeIn>
            <div className="card-hover rounded-3xl p-7 h-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: GOLD }}>Our mission</div>
              <p className="font-display text-white text-xl font-semibold leading-relaxed text-balance">
                To make professional school management accessible to every school in Uganda — regardless of size, location or technical expertise.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="card-hover rounded-3xl p-7 h-full" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: GOLD }}>Our vision</div>
              <p className="font-display text-white text-xl font-semibold leading-relaxed text-balance">
                A Uganda where every child's academic journey is tracked digitally, every teacher can focus on teaching — and every parent can see their child's progress from their phone.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── VALUES (LIGHT) ───────────────────── */}
      <section className="py-16 sm:py-24" style={{ background: CREAM, color: '#0C2C57' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <div className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#DA6A0C' }}>Our values</div>
            <h2 className="font-display font-extrabold tracking-tight text-balance" style={{ fontSize: 'clamp(1.9rem,4vw,2.8rem)', lineHeight: 1.08 }}>What we stand for</h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="card-hover rounded-3xl p-6 h-full" style={{ background: '#fff', border: '1px solid rgba(12,44,87,0.06)', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                  <div className="w-12 h-12 rounded-2xl grid place-items-center mb-5" style={{ background: goldTile }}>
                    <v.icon className="w-[22px] h-[22px]" style={{ color: '#DA6A0C' }} strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2" style={{ color: '#0C2C57' }}>{v.title}</h3>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: 'rgba(12,44,87,0.55)' }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────── */}
      <section className="py-20 sm:py-28 relative overflow-hidden" style={{ background: `linear-gradient(180deg, ${INK2}, ${INK})` }}>
        <div className="glow absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(245,122,18,.18), transparent 70%)' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="rounded-[2rem] p-8 sm:p-12 text-center" style={{ border: '1px solid rgba(245,122,18,0.2)', background: 'linear-gradient(180deg, rgba(255,255,255,0.05), transparent)' }}>
              <h2 className="font-display font-extrabold tracking-tight text-balance mb-4" style={{ fontSize: 'clamp(2rem,5vw,3rem)', lineHeight: 1.04 }}>Get in touch</h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-8 text-pretty">We're based in Uganda and respond fast — by phone, WhatsApp or email.</p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60 mb-8">
                <a href={`tel:${PHONE1.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors"><Phone className="w-4 h-4" style={{ color: GOLD }} /> {PHONE1}</a>
                <a href={`tel:${PHONE2.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors"><Phone className="w-4 h-4" style={{ color: GOLD }} /> {PHONE2}</a>
                <a href={`mailto:${SALES_EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="w-4 h-4" style={{ color: GOLD }} /> {SALES_EMAIL}</a>
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4" style={{ color: GOLD }} /> Kampala, Uganda</span>
              </div>
              <Link to="/contact" className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
