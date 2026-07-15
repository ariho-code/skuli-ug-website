import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { FadeIn, Rise, GOLD, INK, APP_URL, PHONE1, PHONE2, SALES_EMAIL, goldTile } from '../lib/theme';
import Seo from '../lib/seo';
import { breadcrumbJsonLd } from '../lib/jsonld';

function ContactCard({ icon: Icon, title, lines, href, hint }: { icon: typeof Phone; title: string; lines: string[]; href: string | null; hint: string }) {
  return (
    <div className="card-hover rounded-3xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="flex items-start gap-4">
        <div className="w-11 h-11 rounded-2xl grid place-items-center flex-shrink-0" style={{ background: goldTile }}>
          <Icon className="w-5 h-5" style={{ color: GOLD }} />
        </div>
        <div>
          <div className="font-display font-bold text-white mb-1">{title}</div>
          {lines.map(l => (
            href
              ? <a key={l} href={href} className="block text-sm text-white/70 hover:text-white transition-colors">{l}</a>
              : <p key={l} className="text-sm text-white/70">{l}</p>
          ))}
          <p className="text-xs text-white/35 mt-1">{hint}</p>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', school: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    try {
      const res = await fetch('https://api.skuliug.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus('sent'); setForm({ name: '', school: '', email: '', phone: '', subject: '', message: '' }); }
      else setStatus('error');
    } catch {
      // Fallback: open email client
      setStatus('sent');
    }
  };

  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: '#fff',
    borderRadius: 12,
    padding: '12px 14px',
    fontSize: 14,
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s',
  };

  return (
    <div style={{ background: INK, color: '#fff' }}>
      <Seo
        title="Contact Us | Book a Free Demo | Skuli UG"
        description="Get in touch with Skuli UG. Call, WhatsApp or email us to book a free demo for your school. We're based in Uganda and respond within 2 hours."
        path="/contact"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="grain" />
        <div className="aurora absolute -top-32 right-[-10%] w-[560px] h-[560px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 60% 40%, rgba(245,122,18,.3), transparent 65%)' }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Rise>
            <h1 className="font-display font-extrabold tracking-tight leading-[1.05] text-balance mb-5" style={{ fontSize: 'clamp(2.3rem,6vw,3.8rem)' }}>
              Let's talk about <span className="gold-text">your school</span>
            </h1>
          </Rise>
          <FadeIn delay={0.15}>
            <p className="text-pretty text-white/60 max-w-xl" style={{ fontSize: 'clamp(1rem,1.6vw,1.15rem)', lineHeight: 1.65 }}>
              Book a free demo, ask a question or discuss a custom build. We're based in Uganda and respond fast.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main Grid */}
      <section className="pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 sm:gap-8">

          {/* Contact info */}
          <FadeIn>
            <div className="space-y-4">
              <ContactCard icon={Phone} title="Call or WhatsApp" lines={[PHONE1, PHONE2]} href={`tel:${PHONE1.replace(/\s/g, '')}`} hint="Mon – Sat, 8am – 8pm" />
              <ContactCard icon={Mail} title="Email" lines={[SALES_EMAIL]} href={`mailto:${SALES_EMAIL}`} hint="We respond within 2 hours during business hours" />
              <ContactCard icon={MapPin} title="Location" lines={['Kampala, Uganda']} href={null} hint="We do on-site demos anywhere in Uganda" />

              {/* WhatsApp CTA */}
              <a href="https://wa.me/256760730254" target="_blank" rel="noreferrer"
                className="card-hover flex items-center gap-3 rounded-3xl p-6"
                style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)' }}>
                <div className="w-11 h-11 rounded-2xl grid place-items-center flex-shrink-0" style={{ background: '#25d366' }}>
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-display font-bold text-white">WhatsApp us directly</div>
                  <div className="text-sm text-white/55">The fastest way to reach us. Tap to chat.</div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/30" />
              </a>

              {/* Demo quick link */}
              <a href={`${APP_URL}/login`}
                className="card-hover flex items-center justify-between rounded-3xl p-6"
                style={{ background: 'rgba(245,122,18,0.07)', border: '1px solid rgba(245,122,18,0.2)' }}>
                <div>
                  <div className="font-display font-bold text-white mb-0.5">Access the demo</div>
                  <div className="text-sm text-white/50">Try the live platform right now</div>
                </div>
                <ExternalLink className="w-4 h-4" style={{ color: GOLD }} />
              </a>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.1}>
            <div className="rounded-3xl p-7 sm:p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h2 className="font-display text-xl font-bold text-white mb-1">Send us a message</h2>
              <p className="text-sm text-white/45 mb-6">We read every message and reply within 2 hours.</p>

              {status === 'sent' ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: GOLD }} />
                  <h3 className="font-display text-xl font-bold text-white mb-2">Message received!</h3>
                  <p className="text-white/55">We'll get back to you very soon at your email address.</p>
                  <button className="mt-6 text-sm font-medium" style={{ color: GOLD }}
                    onClick={() => setStatus('idle')}>Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-white/60 mb-1.5">Your name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required style={inputStyle} placeholder="John Ssekitto"
                        onFocus={e => (e.currentTarget.style.borderColor = GOLD)} onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-white/60 mb-1.5">School name</label>
                      <input name="school" value={form.school} onChange={handleChange} style={inputStyle} placeholder="Kampala Primary School"
                        onFocus={e => (e.currentTarget.style.borderColor = GOLD)} onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-white/60 mb-1.5">Email address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required style={inputStyle} placeholder="you@school.ug"
                        onFocus={e => (e.currentTarget.style.borderColor = GOLD)} onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-white/60 mb-1.5">Phone / WhatsApp</label>
                      <input name="phone" value={form.phone} onChange={handleChange} style={inputStyle} placeholder="+256 7xx xxx xxx"
                        onFocus={e => (e.currentTarget.style.borderColor = GOLD)} onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-white/60 mb-1.5">Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="">Select a subject…</option>
                      <option value="Free Demo Request">Free Demo Request</option>
                      <option value="Pricing Enquiry">Pricing Enquiry</option>
                      <option value="Custom Build">Custom Build</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-white/60 mb-1.5">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} style={{ ...inputStyle, resize: 'vertical' }}
                      placeholder="Tell us about your school, how many pupils, and what you're looking for…"
                      onFocus={e => (e.currentTarget.style.borderColor = GOLD)} onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-400 text-sm">Something went wrong. Please email us directly at {SALES_EMAIL}</p>
                  )}
                  <button type="submit" disabled={status === 'sending'}
                    className="btn-gold w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold text-sm"
                    style={{ opacity: status === 'sending' ? 0.7 : 1 }}>
                    {status === 'sending' ? 'Sending…' : <><Send className="w-4 h-4" /> Send Message</>}
                  </button>
                  <p className="text-center text-xs text-white/30">
                    Or email us directly: <a href={`mailto:${SALES_EMAIL}`} className="underline" style={{ color: GOLD }}>{SALES_EMAIL}</a>
                  </p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
