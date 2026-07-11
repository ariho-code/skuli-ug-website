import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import Seo from '../lib/seo';
import { breadcrumbJsonLd } from '../lib/jsonld';

const GOLD = '#F57A12';
const DARK = '#07182F';
const YEAR = new Date().getFullYear();

const sections = [
  {
    title: '1. Information We Collect',
    body: 'We collect the following categories of information to operate the platform:',
    bullets: [
      'School name, address, registration details, and contact information.',
      'Staff names, email addresses, phone numbers, and role assignments.',
      'Login activity including IP addresses, device information, and session timestamps.',
      'Student names, admission numbers, date of birth, and gender.',
      'Parent/guardian names and contact details.',
      'Academic records including marks, grades, and report cards.',
      'Fee payment records and outstanding balances.',
    ],
  },
  {
    title: '2. How We Use Your Data',
    body: 'We use the data we collect strictly to provide the Service:',
    bullets: [
      'To provide and improve the Skuli UG platform and its features.',
      'To generate report cards, analytics, and school management reports.',
      'To send transactional emails such as OTP verification codes.',
      'To detect and prevent security threats or unauthorised access.',
      'We do NOT sell, rent, or share personal data with third parties for marketing purposes.',
    ],
  },
  {
    title: '3. Data Storage & Security',
    body: 'All data is stored on secure cloud servers. We implement the following security measures:',
    bullets: [
      'HTTPS/TLS encryption for all data in transit.',
      'Password hashing using bcrypt (no plain-text passwords stored).',
      'Role-based access control — staff only access data relevant to their role.',
      'Single-device session enforcement to prevent unauthorised sharing.',
      'Regular backups and disaster recovery procedures.',
    ],
  },
  {
    title: '4. Data Retention',
    body: `We retain school data for the duration of the active subscription plus 30 days after termination to allow data export. After this period, data is permanently deleted from our systems unless legally required to retain it.`,
  },
  {
    title: '5. Student Data & PDPO Compliance',
    body: `Student data is considered sensitive and is handled with the highest level of care. Schools are responsible for obtaining appropriate consent from parents or guardians for data processing as required by Uganda's Data Protection and Privacy Act 2019 (PDPO). Skuli UG acts as a data processor under the school's instructions.`,
  },
  {
    title: '6. Cookies',
    body: `The Skuli UG application uses session storage and local storage to maintain authentication state. We do not use third-party tracking cookies. The marketing website may use minimal analytics to understand visitor behaviour (page views only — no personal identification).`,
  },
  {
    title: '7. Your Rights',
    body: 'As a school administrator, you have the right to:',
    bullets: [
      'Access and export all your school\'s data at any time from the platform.',
      'Request correction of any incorrect data we hold.',
      'Request deletion of your school\'s data upon termination of service.',
      'Receive a data breach notification within 72 hours if your data is compromised.',
    ],
  },
  {
    title: '8. AI Features',
    body: `Skuli AI uses your school's contextual information (current term, class counts, school name) to provide relevant responses. Conversations with Skuli AI are not permanently stored and are not used to train AI models. No personally identifiable student data is sent to external AI providers.`,
  },
  {
    title: '9. Third-Party Services',
    body: 'We use the following third-party services to operate the platform:',
    bullets: [
      'Email delivery — for OTP and notification emails.',
      'Cloud hosting — for platform infrastructure.',
      'AI API — for Skuli AI features (no personal student data shared).',
    ],
  },
  {
    title: '10. Changes to This Policy',
    body: `We may update this Privacy Policy periodically. We will notify schools of material changes by email. Continued use of the Service after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: '11. Contact Us',
    body: `For privacy concerns or data requests, contact our Data Protection Officer at: privacy@skuliug.com or write to Skuli UG, Kampala, Uganda.`,
  },
];

export default function PrivacyPage() {
  return (
    <div style={{ background: '#fafafa', minHeight: '100vh' }}>
      <Seo
        title="Privacy Policy | Skuli UG"
        description="Learn how Skuli UG collects, uses and protects your school's data, in compliance with Uganda's Data Protection and Privacy Act 2019."
        path="/privacy"
        jsonLd={breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: '/privacy' }])}
      />
      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: DARK, paddingTop: 128, paddingBottom: 64 }}>
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="glow absolute -top-32 right-[-10%] w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle at 60% 40%, rgba(245,122,18,.25), transparent 65%)' }} />
        <div className="relative max-w-3xl mx-auto px-5 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold mb-8 transition-colors hover:opacity-80"
            style={{ color: GOLD }}>
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(245,122,18,0.12)', border: '1px solid rgba(245,122,18,0.2)' }}>
              <Shield className="w-6 h-6" style={{ color: GOLD }} />
            </div>
            <div>
              <h1 className="font-display text-3xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Last updated: {YEAR} · Skuli UG</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 lg:px-8 py-14">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="text-base text-slate-600 leading-relaxed mb-10 p-5 rounded-2xl border border-blue-100"
          style={{ background: '#eff6ff' }}>
          Skuli UG is committed to protecting the privacy of all users. This Privacy Policy explains how we collect, use, store, and protect personal information in compliance with Uganda's Data Protection and Privacy Act 2019 (PDPO).
        </motion.p>

        <div className="space-y-8">
          {sections.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="card-hover bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <h2 className="font-display text-base font-bold mb-3" style={{ color: DARK }}>{s.title}</h2>
              <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
              {s.bullets && (
                <ul className="mt-3 space-y-1.5 pl-4">
                  {s.bullets.map(b => (
                    <li key={b} className="text-sm text-slate-600 leading-relaxed flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: GOLD }} />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-slate-400">
          © {YEAR} Skuli UG · Uganda School Management System · All rights reserved
        </div>
      </div>
    </div>
  );
}
