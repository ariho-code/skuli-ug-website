import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, ExternalLink, ArrowUpRight } from 'lucide-react';

const PHONE1 = '+256 760 730 254';
const PHONE2 = '+256 709 234 352';
const SALES_EMAIL = 'sales@skuliug.com';
const APP_URL = 'https://primary.skuliug.com';

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
      setStatus('sent');
    }
  };

  const fieldClass =
    "w-full rounded-xl px-4 py-3 text-[14px] bg-paper border border-[color:var(--line)] text-ink placeholder:text-muted-2 outline-none transition-colors focus:border-[color:var(--ink)]";

  return (
    <div className="bg-paper text-ink" style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section className="relative py-20 paper-grain overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-24 w-[520px] h-[520px] rounded-full opacity-40 pointer-events-none drift"
          style={{ background: 'radial-gradient(closest-side, rgba(200,147,46,0.22), transparent 70%)' }} />
        <div className="relative max-w-4xl mx-auto px-5">
          <Reveal>
            <div className="eyebrow mb-5">Contact us</div>
            <h1 className="font-display text-[clamp(2.6rem,5.6vw,4.6rem)] leading-[1.0] tracking-tightest text-ink mb-5">
              Let's talk about<br />
              <span className="font-display-italic text-gold">your school.</span>
            </h1>
            <p className="text-[17px] text-muted leading-relaxed max-w-xl">
              Book a free demo, ask a question or discuss a custom build. We're based in Uganda and respond fast.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-6">

          {/* Left — contact info */}
          <Reveal>
            <div className="space-y-3">
              {[
                { icon: Phone, title: 'Call or WhatsApp', lines: [PHONE1, PHONE2], href: `tel:${PHONE1.replace(/\s/g,'')}`, hint: 'Mon – Sat, 8am – 8pm' },
                { icon: Mail,  title: 'Email',            lines: [SALES_EMAIL],     href: `mailto:${SALES_EMAIL}`,         hint: 'We respond within 2 hours during business hours' },
                { icon: MapPin,title: 'Location',         lines: ['Kampala, Uganda'],href: null,                            hint: 'We do on-site demos anywhere in Uganda' },
              ].map(c => (
                <div key={c.title} className="card bg-paper-2 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-paper border border-[color:var(--line)]">
                    <c.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-display text-[17px] font-semibold tracking-tight text-ink mb-1">{c.title}</div>
                    {c.lines.map(l => (
                      c.href
                        ? <a key={l} href={c.href} className="block text-[14.5px] text-muted hover:text-ink transition-colors">{l}</a>
                        : <p key={l} className="text-[14.5px] text-muted">{l}</p>
                    ))}
                    <p className="text-[12.5px] text-muted-2 mt-1.5">{c.hint}</p>
                  </div>
                </div>
              ))}

              <a href="https://wa.me/256760730254" target="_blank" rel="noreferrer"
                className="card bg-paper-2 flex items-center gap-4 hover:bg-paper transition-colors">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: '#25d366' }}>
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-display text-[17px] font-semibold tracking-tight text-ink">WhatsApp us directly</div>
                  <div className="text-[13.5px] text-muted">Fastest way to reach us — tap to chat</div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-2" />
              </a>

              <a href={`${APP_URL}/login`}
                className="card flex items-center justify-between hover:bg-paper-2 transition-colors"
                style={{ background: 'rgba(200,147,46,0.08)', borderColor: 'rgba(200,147,46,0.25)' }}>
                <div>
                  <div className="font-display text-[17px] font-semibold tracking-tight text-ink">Access the demo</div>
                  <div className="text-[13.5px] text-muted">Try the live platform right now</div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gold" />
              </a>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl p-7 sm:p-8 bg-paper-2 border border-[color:var(--line)]">
              <h2 className="font-display text-[24px] font-semibold tracking-tight text-ink mb-1">Send us a message</h2>
              <p className="text-[13.5px] text-muted mb-6">We read every message and reply within 2 hours.</p>

              {status === 'sent' ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-gold" />
                  <h3 className="font-display text-[22px] font-semibold tracking-tight text-ink mb-2">Message received.</h3>
                  <p className="text-muted">We'll get back to you very soon at your email address.</p>
                  <button className="mt-6 text-[14px] font-semibold text-ink link-reveal"
                    onClick={() => setStatus('idle')}>Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-2 mb-1.5">Your name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required className={fieldClass} placeholder="John Ssekitto" />
                    </div>
                    <div>
                      <label className="block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-2 mb-1.5">School name</label>
                      <input name="school" value={form.school} onChange={handleChange} className={fieldClass} placeholder="Kampala Primary School" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-2 mb-1.5">Email address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} required className={fieldClass} placeholder="you@school.ug" />
                    </div>
                    <div>
                      <label className="block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-2 mb-1.5">Phone / WhatsApp</label>
                      <input name="phone" value={form.phone} onChange={handleChange} className={fieldClass} placeholder="+256 7xx xxx xxx" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-2 mb-1.5">Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange} className={`${fieldClass} cursor-pointer`}>
                      <option value="">Select a subject…</option>
                      <option value="Free Demo Request">Free demo request</option>
                      <option value="Pricing Enquiry">Pricing enquiry</option>
                      <option value="Custom Build">Custom build</option>
                      <option value="Technical Support">Technical support</option>
                      <option value="General Enquiry">General enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10.5px] font-semibold uppercase tracking-[0.18em] text-muted-2 mb-1.5">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                      className={`${fieldClass} resize-y`}
                      placeholder="Tell us about your school, how many pupils, and what you're looking for…" />
                  </div>
                  {status === 'error' && (
                    <p className="text-red-600 text-[13px]">Something went wrong. Please email us directly at {SALES_EMAIL}.</p>
                  )}
                  <button type="submit" disabled={status === 'sending'}
                    className="btn btn-primary w-full"
                    style={{ opacity: status === 'sending' ? 0.7 : 1 }}>
                    {status === 'sending' ? 'Sending…' : <>Send message <Send className="w-4 h-4" /></>}
                  </button>
                  <p className="text-center text-[12px] text-muted-2">
                    Or email us directly: <a href={`mailto:${SALES_EMAIL}`} className="inline-link">{SALES_EMAIL}</a>
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
