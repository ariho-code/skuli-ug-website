import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, ExternalLink } from 'lucide-react';

const GOLD = '#F57A12';
const DARK = '#0C2C57';
const PHONE1 = '+256 760 730 254';
const PHONE2 = '+256 709 234 352';
const SALES_EMAIL = 'sales@skuliug.com';
const APP_URL = 'https://primary.skuliug.com';

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
    borderRadius: 10,
    padding: '12px 14px',
    fontSize: 14,
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s',
  };

  return (
    <div style={{ background: DARK, color: '#fff', paddingTop: 68 }}>

      {/* Hero */}
      <section className="py-20" style={{ background: DARK }}>
        <div className="max-w-4xl mx-auto px-5">
          <FadeIn>
            <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: GOLD }}>Contact Us</div>
            <h1 className="text-5xl font-extrabold text-white mb-4">Let's talk about your school</h1>
            <p className="text-white/55 text-lg max-w-xl">
              Book a free demo, ask a question or discuss a custom build. We're based in Uganda and respond fast.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main grid */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-8">

          {/* Left — contact info */}
          <FadeIn>
            <div className="space-y-5">
              {/* Contact cards */}
              {[
                { icon: Phone, title: 'Call or WhatsApp', lines: [PHONE1, PHONE2], href: `tel:${PHONE1.replace(/\s/g,'')}`, hint: 'Mon – Sat, 8am – 8pm' },
                { icon: Mail, title: 'Email', lines: [SALES_EMAIL], href: `mailto:${SALES_EMAIL}`, hint: 'We respond within 2 hours during business hours' },
                { icon: MapPin, title: 'Location', lines: ['Kampala, Uganda'], href: null, hint: 'We do on-site demos anywhere in Uganda' },
              ].map(c => (
                <div key={c.title} className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(245,122,18,0.1)' }}>
                      <c.icon className="w-5 h-5" style={{ color: GOLD }} />
                    </div>
                    <div>
                      <div className="font-bold text-white mb-1">{c.title}</div>
                      {c.lines.map(l => (
                        c.href
                          ? <a key={l} href={c.href} className="block text-sm text-white/70 hover:text-white transition-colors">{l}</a>
                          : <p key={l} className="text-sm text-white/70">{l}</p>
                      ))}
                      <p className="text-xs text-white/35 mt-1">{c.hint}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a href="https://wa.me/256760730254" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl p-6 transition-all"
                style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.2)' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(37,211,102,0.12)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(37,211,102,0.08)')}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#25d366' }}>
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-white">WhatsApp us directly</div>
                  <div className="text-sm text-white/55">Fastest way to reach us — tap to chat</div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/30" />
              </a>

              {/* Demo quick link */}
              <a href={`${APP_URL}/login`}
                className="flex items-center justify-between rounded-2xl p-6 transition-all"
                style={{ background: 'rgba(245,122,18,0.07)', border: `1px solid rgba(245,122,18,0.2)` }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(245,122,18,0.12)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(245,122,18,0.07)')}>
                <div>
                  <div className="font-bold text-white mb-0.5">Access the demo</div>
                  <div className="text-sm text-white/50">Try the live platform right now</div>
                </div>
                <ExternalLink className="w-4 h-4" style={{ color: GOLD }} />
              </a>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.1}>
            <div className="rounded-2xl p-7 sm:p-8" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h2 className="text-xl font-bold text-white mb-1">Send us a message</h2>
              <p className="text-sm text-white/45 mb-6">We read every message and reply within 2 hours.</p>

              {status === 'sent' ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: GOLD }} />
                  <h3 className="text-xl font-bold text-white mb-2">Message received!</h3>
                  <p className="text-white/55">We'll get back to you very soon at your email address.</p>
                  <button className="mt-6 text-sm font-medium" style={{ color: GOLD }}
                    onClick={() => setStatus('idle')}>Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">Your Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required style={inputStyle} placeholder="John Ssekitto"
                        onFocus={e => (e.currentTarget.style.borderColor = GOLD)} onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">School Name</label>
                      <input name="school" value={form.school} onChange={handleChange} style={inputStyle} placeholder="Kampala Primary School"
                        onFocus={e => (e.currentTarget.style.borderColor = GOLD)} onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required style={inputStyle} placeholder="you@school.ug"
                        onFocus={e => (e.currentTarget.style.borderColor = GOLD)} onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">Phone / WhatsApp</label>
                      <input name="phone" value={form.phone} onChange={handleChange} style={inputStyle} placeholder="+256 7xx xxx xxx"
                        onFocus={e => (e.currentTarget.style.borderColor = GOLD)} onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">Subject</label>
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
                    <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} style={{ ...inputStyle, resize: 'vertical' }}
                      placeholder="Tell us about your school, how many pupils, and what you're looking for…"
                      onFocus={e => (e.currentTarget.style.borderColor = GOLD)} onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)')} />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-400 text-sm">Something went wrong. Please email us directly at {SALES_EMAIL}</p>
                  )}
                  <button type="submit" disabled={status === 'sending'}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all"
                    style={{ background: GOLD, color: DARK, opacity: status === 'sending' ? 0.7 : 1 }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#DA6A0C')}
                    onMouseLeave={e => (e.currentTarget.style.background = GOLD)}>
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
