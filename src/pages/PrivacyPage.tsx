import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';

const YEAR = new Date().getFullYear();

const sections = [
  { title: '1. Information We Collect',
    body: 'We collect the following categories of information to operate the platform:',
    bullets: [
      'School name, address, registration details, and contact information.',
      'Staff names, email addresses, phone numbers, and role assignments.',
      'Login activity including IP addresses, device information, and session timestamps.',
      'Student names, admission numbers, date of birth, and gender.',
      'Parent/guardian names and contact details.',
      'Academic records including marks, grades, and report cards.',
      'Fee payment records and outstanding balances.',
    ] },
  { title: '2. How We Use Your Data',
    body: 'We use the data we collect strictly to provide the Service:',
    bullets: [
      'To provide and improve the Skuli UG platform and its features.',
      'To generate report cards, analytics, and school management reports.',
      'To send transactional emails such as OTP verification codes.',
      'To detect and prevent security threats or unauthorised access.',
      'We do NOT sell, rent, or share personal data with third parties for marketing.',
    ] },
  { title: '3. Data Storage & Security',
    body: 'All data is stored on secure cloud servers. We implement the following security measures:',
    bullets: [
      'HTTPS/TLS encryption for all data in transit.',
      'Password hashing using bcrypt (no plain-text passwords stored).',
      'Role-based access control — staff only access data relevant to their role.',
      'Single-device session enforcement to prevent unauthorised sharing.',
      'Regular backups and disaster recovery procedures.',
    ] },
  { title: '4. Data Retention',
    body: `We retain school data for the duration of the active subscription plus 30 days after termination to allow data export. After this period, data is permanently deleted from our systems unless legally required to retain it.` },
  { title: '5. Student Data & PDPO Compliance',
    body: `Student data is considered sensitive and is handled with the highest level of care. Schools are responsible for obtaining appropriate consent from parents or guardians for data processing as required by Uganda's Data Protection and Privacy Act 2019 (PDPO). Skuli UG acts as a data processor under the school's instructions.` },
  { title: '6. Cookies',
    body: `The Skuli UG application uses session and local storage to maintain authentication state. We do not use third-party tracking cookies. The marketing website may use minimal analytics to understand visitor behaviour (page views only — no personal identification).` },
  { title: '7. Your Rights',
    body: 'As a school administrator, you have the right to:',
    bullets: [
      'Access and export all your school\'s data at any time from the platform.',
      'Request correction of any incorrect data we hold.',
      'Request deletion of your school\'s data upon termination of service.',
      'Receive a data breach notification within 72 hours if your data is compromised.',
    ] },
  { title: '8. AI Features',
    body: `Skuli AI uses your school's contextual information (current term, class counts, school name) to provide relevant responses. Conversations with Skuli AI are not permanently stored and are not used to train AI models. No personally identifiable student data is sent to external AI providers.` },
  { title: '9. Third-Party Services',
    body: 'We use the following third-party services to operate the platform:',
    bullets: [
      'Email delivery — for OTP and notification emails.',
      'Cloud hosting — for platform infrastructure.',
      'AI API — for Skuli AI features (no personal student data shared).',
    ] },
  { title: '10. Changes to This Policy',
    body: `We may update this Privacy Policy periodically. We will notify schools of material changes by email. Continued use of the Service after changes constitutes acceptance of the updated policy.` },
  { title: '11. Contact Us',
    body: `For privacy concerns or data requests, contact our Data Protection Officer at: privacy@skuliug.com or write to Skuli UG, Kampala, Uganda.` },
];

export default function PrivacyPage() {
  return (
    <div className="bg-paper text-ink" style={{ paddingTop: 72 }}>

      {/* Hero */}
      <section className="relative py-20 paper-grain overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full opacity-40 pointer-events-none"
          style={{ background: 'radial-gradient(closest-side, rgba(200,147,46,0.22), transparent 70%)' }} />
        <div className="relative max-w-3xl mx-auto px-5 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-[13.5px] font-semibold mb-8 text-muted hover:text-ink transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-paper-2 border border-[color:var(--line)]">
              <Shield className="w-6 h-6 text-gold" />
            </div>
            <div>
              <div className="eyebrow mb-2">Legal</div>
              <h1 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-semibold tracking-tightest text-ink leading-tight">
                Privacy Policy
              </h1>
              <p className="text-[13px] text-muted mt-1">Last updated: {YEAR} · Skuli UG</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-5 lg:px-8 pb-20">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="text-[15px] text-ink leading-relaxed mb-10 p-5 rounded-2xl bg-paper-2 border border-[color:var(--line)]">
          Skuli UG is committed to protecting the privacy of all users. This Policy explains how we
          collect, use, store, and protect personal information in compliance with Uganda's Data
          Protection and Privacy Act 2019 (PDPO).
        </motion.p>

        <div className="space-y-6">
          {sections.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
              className="rounded-2xl p-6 bg-paper-2 border border-[color:var(--line)]">
              <h2 className="font-display text-[18px] font-semibold tracking-tight text-ink mb-3">{s.title}</h2>
              <p className="text-[14.5px] text-muted leading-relaxed">{s.body}</p>
              {s.bullets && (
                <ul className="mt-3 space-y-2 pl-1">
                  {s.bullets.map(b => (
                    <li key={b} className="text-[14px] text-muted leading-relaxed flex items-start gap-2.5">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-[12px] text-muted-2">
          © {YEAR} Skuli UG · Uganda School Management · All rights reserved
        </div>
      </div>
    </div>
  );
}
