import { useState, useEffect } from 'react'
import './App.css'

const YEAR = new Date().getFullYear()
const APP_URL = 'https://app.skuli.ug'

type Page = 'home' | 'terms' | 'privacy'

/* ─── Nav ─────────────────────────────────────────────────────── */
function Navbar({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(17,24,39,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s',
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <button onClick={() => setPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 18, color: '#111827' }}>S</div>
          <span style={{ fontWeight: 800, fontSize: 18, color: 'white', letterSpacing: '-0.3px' }}>Skuli <span style={{ color: 'var(--gold)' }}>UG</span></span>
        </button>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          {[['Features', '#features'], ['Pricing', '#pricing'], ['About', '#about']].map(([l, h]) => (
            <a key={l} href={h} style={{ color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 500, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}>{l}</a>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <a href={APP_URL} className="btn-outline" style={{ fontSize: 13, padding: '8px 18px' }}>Sign In</a>
          <a href={`${APP_URL}/login`} className="btn-primary" style={{ fontSize: 13, padding: '8px 18px' }}>Get Started</a>
        </div>
      </div>
    </nav>
  )
}

/* ─── Hero ────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #0f0c29 0%, #111827 50%, #1a1040 100%)',
      minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden',
    }}>
      {/* Orbs */}
      {[['60%','15%','500px','rgba(232,184,75,0.08)'],['10%','70%','400px','rgba(99,102,241,0.1)'],['80%','80%','350px','rgba(168,85,247,0.07)']].map(([l,t,s,c],i) => (
        <div key={i} style={{ position: 'absolute', left: l, top: t, width: s, height: s, borderRadius: '50%', background: c, filter: 'blur(80px)', pointerEvents: 'none' }} />
      ))}

      <div className="container" style={{ position: 'relative', paddingTop: 120, paddingBottom: 100 }}>
        <div style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto' }}>
          <div className="badge" style={{ background: 'rgba(232,184,75,0.12)', color: 'var(--gold)', border: '1px solid rgba(232,184,75,0.25)', marginBottom: 24 }}>
            🇺🇬 Built for Uganda Schools
          </div>
          <h1 style={{ fontSize: 'clamp(36px,6vw,72px)', fontWeight: 900, color: 'white', lineHeight: 1.08, letterSpacing: '-2px', marginBottom: 24 }}>
            Your school.<br />
            <span style={{ color: 'var(--gold)' }}>Fully digital.</span> Finally.
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 40, maxWidth: 560, margin: '0 auto 40px' }}>
            Skuli UG is Uganda's most complete school management platform — marks, fees, report cards, timetables, and AI-powered insights, all in one place.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`${APP_URL}/login`} className="btn-primary" style={{ fontSize: 16, padding: '14px 32px' }}>
              Start Free Trial →
            </a>
            <a href="#features" className="btn-outline" style={{ fontSize: 16, padding: '14px 32px' }}>
              See Features
            </a>
          </div>

          {/* Social proof */}
          <div style={{ marginTop: 64, display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap' }}>
            {[['500+','Pupils Managed'],['12+','Schools'],['99.9%','Uptime']].map(([v,l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <p style={{ fontSize: 28, fontWeight: 900, color: 'var(--gold)' }}>{v}</p>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Features ────────────────────────────────────────────────── */
function Features() {
  const features = [
    { icon: '📊', title: 'Smart Mark Entry', desc: 'Role-based mark entry — teachers only see their assigned classes and subjects. Bulk upload via Excel supported.' },
    { icon: '💰', title: 'Fees & Analytics', desc: 'Track payments, defaulters, per-class collection rates, and gender breakdowns on a beautiful fees dashboard.' },
    { icon: '📄', title: 'Professional Report Cards', desc: 'Auto-generate BOT, MOT, and EOT report cards with grades, positions, class analysis, and head teacher comments.' },
    { icon: '📅', title: 'Timetable Management', desc: 'Create and manage school timetables. Teachers see their daily schedule on the dashboard.' },
    { icon: '🤖', title: 'Skuli AI Assistant', desc: 'AI-powered assistant for lesson plans, class analysis, parent messages, PLE preparation tips, and more.' },
    { icon: '👨‍👩‍👧', title: 'Parent Communication', desc: 'Send mass messages to parents by class, stream, or the whole school. Keep parents informed and engaged.' },
    { icon: '🏫', title: 'Multi-School Platform', desc: 'Each school gets an isolated environment with their own settings, data, and custom grading systems.' },
    { icon: '🔒', title: 'Secure & Transparent', desc: 'Single-device login, activity logs, role-based access, and full audit trail. No corruption, no shortcuts.' },
  ]
  return (
    <section id="features" style={{ padding: '100px 0', background: 'var(--light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p className="section-label">Features</p>
          <h2 className="section-title">Everything your school needs</h2>
          <p className="section-sub" style={{ margin: '16px auto 0' }}>One platform for marks, fees, reports, communication, and administration. No spreadsheets. No paper.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {features.map(f => (
            <div key={f.title} style={{ background: 'white', borderRadius: 20, padding: '28px 24px', border: '1px solid var(--border)', transition: 'box-shadow 0.2s, transform 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px -8px rgba(0,0,0,0.12)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.transform = 'none' }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
              <h3 style={{ fontWeight: 700, color: 'var(--charcoal)', fontSize: 17, marginBottom: 10 }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: 'var(--slate)', lineHeight: 1.65 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Roles ───────────────────────────────────────────────────── */
function Roles() {
  const roles = [
    { role: 'Headteacher', color: '#e8b84b', desc: 'Full oversight — pupils, staff, fees, marks, reports, settings. See everything, control everything.' },
    { role: 'Class Teacher', color: '#6366f1', desc: 'Enter marks for your class, view your schedule, communicate with parents, and generate class reports.' },
    { role: 'Subject Teacher', color: '#10b981', desc: 'Access only your assigned subjects and classes. Clean, focused mark entry with no distractions.' },
    { role: 'Bursar', color: '#f59e0b', desc: 'Manage fee structures, record payments, track defaulters, and generate financial reports.' },
    { role: 'DOS', color: '#8b5cf6', desc: 'Academic oversight — manage marks, promotions, class allocations, and academic reporting.' },
    { role: 'Admin Staff', color: '#0ea5e9', desc: 'Handle student records, staff management, school profile, and communication without financial access.' },
  ]
  return (
    <section id="about" style={{ padding: '100px 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p className="section-label">Role-Based Access</p>
          <h2 className="section-title">Right access. Right person. Always.</h2>
          <p className="section-sub" style={{ margin: '16px auto 0' }}>Every user sees only what they need. Teachers can't touch fees. Bursars can't change marks. The headteacher sees everything.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {roles.map(r => (
            <div key={r.role} style={{ padding: '24px', borderRadius: 16, border: `2px solid ${r.color}20`, background: `${r.color}08` }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: r.color }} />
                <span style={{ fontWeight: 700, fontSize: 14, color: r.color, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{r.role}</span>
              </div>
              <p style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.65 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Pricing ─────────────────────────────────────────────────── */
function Pricing() {
  return (
    <section id="pricing" style={{ padding: '100px 0', background: 'var(--light)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p className="section-label">Pricing</p>
          <h2 className="section-title">Simple, transparent pricing</h2>
          <p className="section-sub" style={{ margin: '16px auto 0' }}>No hidden charges. Pay for what you use.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, maxWidth: 900, margin: '0 auto' }}>
          {[
            { name: 'Trial', price: 'Free', period: '30 days', color: '#6366f1', features: ['Up to 100 pupils', 'All core features', 'Email support', 'No credit card needed'] },
            { name: 'School', price: 'UGX 150K', period: '/term', color: 'var(--gold)', featured: true, features: ['Unlimited pupils', 'All features + AI', 'Priority support', 'Custom grading & reports', 'Data export & backup'] },
            { name: 'District', price: 'Custom', period: 'contact us', color: '#10b981', features: ['Multiple schools', 'Centralised dashboard', 'Dedicated support', 'SLA guarantee', 'Custom integrations'] },
          ].map(plan => (
            <div key={plan.name} style={{
              background: plan.featured ? 'var(--charcoal)' : 'white',
              color: plan.featured ? 'white' : 'inherit',
              borderRadius: 24, padding: '36px 28px', border: `2px solid ${plan.featured ? plan.color : 'var(--border)'}`,
              position: 'relative', transform: plan.featured ? 'scale(1.04)' : 'none',
              boxShadow: plan.featured ? '0 24px 60px -12px rgba(0,0,0,0.35)' : 'none',
            }}>
              {plan.featured && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: 'var(--gold)', color: '#111827', fontSize: 11, fontWeight: 700, padding: '4px 16px', borderRadius: 999, letterSpacing: '0.5px' }}>MOST POPULAR</div>}
              <p style={{ fontWeight: 700, fontSize: 14, color: plan.color, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 12 }}>{plan.name}</p>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 36, fontWeight: 900 }}>{plan.price}</span>
                <span style={{ fontSize: 14, opacity: 0.6, marginLeft: 6 }}>{plan.period}</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: 28, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14 }}>
                    <span style={{ color: plan.color, fontSize: 16 }}>✓</span>
                    <span style={{ opacity: plan.featured ? 0.85 : 0.75 }}>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={plan.price === 'Custom' ? 'mailto:info@skuli.ug' : `${APP_URL}/login`}
                style={{
                  display: 'block', textAlign: 'center', padding: '12px', borderRadius: 12,
                  fontWeight: 700, fontSize: 14, transition: 'all 0.2s',
                  background: plan.featured ? 'var(--gold)' : 'var(--charcoal)',
                  color: plan.featured ? '#111827' : 'white',
                }}>
                {plan.price === 'Custom' ? 'Contact Us' : 'Get Started'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─────────────────────────────────────────────────────── */
function CTA() {
  return (
    <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, var(--charcoal) 0%, #1a1040 100%)', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: 'white', marginBottom: 20, letterSpacing: '-1px' }}>
          Ready to digitise your school?
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.6)', marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
          Join schools across Uganda already using Skuli UG. Start your free 30-day trial today.
        </p>
        <a href={`${APP_URL}/login`} className="btn-primary" style={{ fontSize: 16, padding: '16px 40px' }}>
          Start Free Trial — No credit card needed
        </a>
      </div>
    </section>
  )
}

/* ─── Footer ──────────────────────────────────────────────────── */
function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer style={{ background: '#0a0a0f', color: 'rgba(255,255,255,0.5)', padding: '60px 0 32px' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 16, color: '#111827' }}>S</div>
              <span style={{ fontWeight: 800, color: 'white', fontSize: 17 }}>Skuli <span style={{ color: 'var(--gold)' }}>UG</span></span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>Uganda's complete school management platform. Marks, fees, reports, and AI — all in one place.</p>
          </div>
          <div>
            <p style={{ fontWeight: 700, color: 'white', fontSize: 13, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Product</p>
            {[['Features', '#features'], ['Pricing', '#pricing'], ['Login', APP_URL]].map(([l, h]) => (
              <a key={l} href={h} style={{ display: 'block', fontSize: 13, marginBottom: 10, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>{l}</a>
            ))}
          </div>
          <div>
            <p style={{ fontWeight: 700, color: 'white', fontSize: 13, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Legal</p>
            <button onClick={() => setPage('terms')} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 10, padding: 0, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>Terms of Service</button>
            <button onClick={() => setPage('privacy')} style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 10, padding: 0, transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>Privacy Policy</button>
          </div>
          <div>
            <p style={{ fontWeight: 700, color: 'white', fontSize: 13, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Contact</p>
            <p style={{ fontSize: 13, marginBottom: 8 }}>📧 <a href="mailto:info@skuli.ug" style={{ color: 'rgba(255,255,255,0.5)' }}>info@skuli.ug</a></p>
            <p style={{ fontSize: 13, marginBottom: 8 }}>📍 Kampala, Uganda</p>
            <p style={{ fontSize: 13 }}>🕐 Mon–Fri, 8am–6pm EAT</p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13 }}>© {YEAR} Skuli UG · Uganda School Management System. All rights reserved.</p>
          <p style={{ fontSize: 12 }}>Designed & built in Uganda 🇺🇬</p>
        </div>
      </div>
    </footer>
  )
}

/* ─── Terms of Service ────────────────────────────────────────── */
function TermsPage({ setPage }: { setPage: (p: Page) => void }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div>
      <div style={{ background: 'var(--charcoal)', padding: '100px 0 60px', textAlign: 'center' }}>
        <div className="container">
          <button onClick={() => setPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold)', fontSize: 14, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 6, margin: '0 auto 24px' }}>← Back to Home</button>
          <h1 style={{ fontSize: 40, fontWeight: 900, color: 'white', marginBottom: 12 }}>Terms of Service</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15 }}>Last updated: {YEAR}</p>
        </div>
      </div>
      <div className="container" style={{ padding: '60px 24px', maxWidth: 800, margin: '0 auto' }}>
        <div className="legal-content">
          <p>Welcome to Skuli UG. By accessing or using the Skuli UG platform ("Service"), you agree to be bound by these Terms of Service ("Terms"). Please read them carefully.</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By creating an account or using Skuli UG, you confirm that you are at least 18 years old, have the authority to bind your school or organisation to these Terms, and agree to comply with all applicable laws in Uganda and internationally.</p>

          <h2>2. Description of Service</h2>
          <p>Skuli UG is a cloud-based school management platform providing tools for student records, marks entry, fee management, report card generation, timetabling, staff management, and AI-powered analytics. The Service is provided on a subscription basis.</p>

          <h2>3. Account Registration</h2>
          <p>Each school is issued a unique School Code upon registration. Users are responsible for maintaining the confidentiality of their login credentials. You must notify us immediately of any unauthorised access to your account.</p>
          <ul>
            <li>Each user account is for a single individual only.</li>
            <li>Sharing credentials between multiple users is prohibited.</li>
            <li>Only one active session per user is permitted at a time.</li>
          </ul>

          <h2>4. Acceptable Use</h2>
          <p>You agree not to use the Service to:</p>
          <ul>
            <li>Upload false, misleading, or fraudulent student or financial data.</li>
            <li>Attempt to gain unauthorised access to other schools' data.</li>
            <li>Reverse engineer, decompile, or extract source code from the platform.</li>
            <li>Use the platform for any illegal purpose under Ugandan law.</li>
            <li>Circumvent role-based access controls or audit mechanisms.</li>
          </ul>

          <h2>5. Data Ownership</h2>
          <p>All student data, marks, fees, and records uploaded to Skuli UG remain the property of your school. Skuli UG acts as a data processor on your behalf. You retain full ownership of your data and may export or request deletion at any time.</p>

          <h2>6. Privacy & Data Security</h2>
          <p>We implement industry-standard security measures including encrypted data transmission (HTTPS/TLS), hashed passwords, role-based access control, and regular security audits. See our Privacy Policy for full details.</p>

          <h2>7. Subscription & Payment</h2>
          <p>Skuli UG is offered on a per-term subscription basis. Schools on a Trial plan have access to all features for 30 days at no cost. After the trial, a paid subscription is required to continue accessing the Service. Pricing is as published on our website and may change with 30 days' notice.</p>

          <h2>8. Service Availability</h2>
          <p>We aim for 99.9% uptime but do not guarantee uninterrupted access. Scheduled maintenance will be communicated in advance. We are not liable for downtime caused by factors outside our control, including internet outages or force majeure events.</p>

          <h2>9. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Skuli UG shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability in any calendar year shall not exceed the total fees paid by your school in that year.</p>

          <h2>10. Termination</h2>
          <p>Either party may terminate the subscription with 30 days' written notice. Upon termination, schools have 30 days to export their data. After this period, data may be permanently deleted. We reserve the right to suspend accounts that violate these Terms immediately.</p>

          <h2>11. Changes to Terms</h2>
          <p>We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the new Terms. Material changes will be notified by email to the school's registered address.</p>

          <h2>12. Governing Law</h2>
          <p>These Terms are governed by the laws of the Republic of Uganda. Any disputes shall be resolved through the courts of Uganda, or by arbitration as mutually agreed.</p>

          <h2>13. Contact</h2>
          <p>For questions about these Terms, contact us at: <a href="mailto:legal@skuli.ug">legal@skuli.ug</a> or write to Skuli UG, Kampala, Uganda.</p>
        </div>
      </div>
    </div>
  )
}

/* ─── Privacy Policy ──────────────────────────────────────────── */
function PrivacyPage({ setPage }: { setPage: (p: Page) => void }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div>
      <div style={{ background: 'var(--charcoal)', padding: '100px 0 60px', textAlign: 'center' }}>
        <div className="container">
          <button onClick={() => setPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--gold)', fontSize: 14, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 6, margin: '0 auto 24px' }}>← Back to Home</button>
          <h1 style={{ fontSize: 40, fontWeight: 900, color: 'white', marginBottom: 12 }}>Privacy Policy</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15 }}>Last updated: {YEAR}</p>
        </div>
      </div>
      <div className="container" style={{ padding: '60px 24px', maxWidth: 800, margin: '0 auto' }}>
        <div className="legal-content">
          <p>Skuli UG ("we", "us", "our") is committed to protecting the privacy of all users of our platform. This Privacy Policy explains how we collect, use, store, and protect personal information.</p>

          <h2>1. Information We Collect</h2>
          <h3>School & Staff Data</h3>
          <ul>
            <li>School name, address, registration details, and contact information.</li>
            <li>Staff names, email addresses, phone numbers, and role assignments.</li>
            <li>Login activity including IP addresses, device information, and session timestamps.</li>
          </ul>
          <h3>Student Data</h3>
          <ul>
            <li>Student names, admission numbers, date of birth, and gender.</li>
            <li>Parent/guardian names and contact details.</li>
            <li>Academic records including marks, grades, and report cards.</li>
            <li>Fee payment records and outstanding balances.</li>
          </ul>

          <h2>2. How We Use Your Data</h2>
          <ul>
            <li>To provide and improve the Skuli UG platform and its features.</li>
            <li>To generate report cards, analytics, and school management reports.</li>
            <li>To send transactional emails such as OTP verification codes.</li>
            <li>To detect and prevent security threats or unauthorised access.</li>
            <li>We do NOT sell, rent, or share personal data with third parties for marketing purposes.</li>
          </ul>

          <h2>3. Data Storage & Security</h2>
          <p>All data is stored on secure cloud servers. We implement the following security measures:</p>
          <ul>
            <li>HTTPS/TLS encryption for all data in transit.</li>
            <li>Password hashing using bcrypt (no plain-text passwords stored).</li>
            <li>Role-based access control — staff only access data relevant to their role.</li>
            <li>Single-device session enforcement to prevent unauthorised sharing.</li>
            <li>Regular backups and disaster recovery procedures.</li>
          </ul>

          <h2>4. Data Retention</h2>
          <p>We retain school data for the duration of the active subscription plus 30 days after termination to allow data export. After this period, data is permanently deleted from our systems unless legally required to retain it.</p>

          <h2>5. Student Data & FERPA/PDPO Compliance</h2>
          <p>Student data is considered sensitive and is handled with the highest level of care. Schools are responsible for obtaining appropriate consent from parents or guardians for data processing as required by Uganda's Data Protection and Privacy Act 2019 (PDPO). Skuli UG acts as a data processor under the school's instructions.</p>

          <h2>6. Cookies</h2>
          <p>The Skuli UG application uses session storage and local storage to maintain authentication state. We do not use third-party tracking cookies. The marketing website may use minimal analytics to understand visitor behaviour (e.g., page views only, no personal identification).</p>

          <h2>7. Your Rights</h2>
          <p>As a school administrator, you have the right to:</p>
          <ul>
            <li>Access and export all your school's data at any time from the platform.</li>
            <li>Request correction of any incorrect data we hold.</li>
            <li>Request deletion of your school's data upon termination of service.</li>
            <li>Receive a data breach notification within 72 hours if your data is compromised.</li>
          </ul>

          <h2>8. AI Features</h2>
          <p>Skuli AI uses your school's contextual information (current term, class counts, school name) to provide relevant responses. Conversations with Skuli AI are not permanently stored and are not used to train AI models. No personally identifiable student data is sent to external AI providers.</p>

          <h2>9. Third-Party Services</h2>
          <p>We use the following third-party services to operate the platform:</p>
          <ul>
            <li><strong>Email delivery</strong> — for OTP and notification emails.</li>
            <li><strong>Cloud hosting</strong> — for platform infrastructure.</li>
            <li><strong>AI API</strong> — for Skuli AI features (no personal student data shared).</li>
          </ul>

          <h2>10. Changes to This Policy</h2>
          <p>We may update this Privacy Policy periodically. We will notify schools of material changes by email. Continued use of the Service after changes constitutes acceptance of the updated policy.</p>

          <h2>11. Contact Us</h2>
          <p>For privacy concerns or data requests, contact our Data Protection Officer at: <a href="mailto:privacy@skuli.ug">privacy@skuli.ug</a> or write to Skuli UG, Kampala, Uganda.</p>
        </div>
      </div>
    </div>
  )
}

/* ─── App ─────────────────────────────────────────────────────── */
export default function App() {
  const [page, setPage] = useState<Page>('home')

  const handleSetPage = (p: Page) => {
    setPage(p)
    window.scrollTo(0, 0)
  }

  return (
    <div>
      <Navbar page={page} setPage={handleSetPage} />
      {page === 'home' && (
        <>
          <Hero />
          <Features />
          <Roles />
          <Pricing />
          <CTA />
        </>
      )}
      {page === 'terms' && <TermsPage setPage={handleSetPage} />}
      {page === 'privacy' && <PrivacyPage setPage={handleSetPage} />}
      <Footer setPage={handleSetPage} />
    </div>
  )
}
