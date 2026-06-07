import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';

const YEAR = new Date().getFullYear();

const sections = [
  { title: '1. Acceptance of Terms',
    body: `By creating an account or using Skuli UG, you confirm that you are at least 18 years old, have the authority to bind your school or organisation to these Terms, and agree to comply with all applicable laws in Uganda and internationally.` },
  { title: '2. Description of Service',
    body: `Skuli UG is a cloud-based school management platform providing tools for student records, marks entry, fee management, report card generation, timetabling, staff management, and AI-powered analytics. The Service is provided on a subscription basis.` },
  { title: '3. Account Registration',
    body: `Each school is issued a unique School Code upon registration. Users are responsible for maintaining the confidentiality of their login credentials. You must notify us immediately of any unauthorised access to your account.`,
    bullets: [
      'Each user account is for a single individual only.',
      'Sharing credentials between multiple users is prohibited.',
      'Only one active session per user is permitted at a time.',
    ] },
  { title: '4. Acceptable Use',
    body: `You agree not to use the Service to:`,
    bullets: [
      'Upload false, misleading, or fraudulent student or financial data.',
      'Attempt to gain unauthorised access to other schools\' data.',
      'Reverse engineer, decompile, or extract source code from the platform.',
      'Use the platform for any illegal purpose under Ugandan law.',
      'Circumvent role-based access controls or audit mechanisms.',
    ] },
  { title: '5. Data Ownership',
    body: `All student data, marks, fees, and records uploaded to Skuli UG remain the property of your school. Skuli UG acts as a data processor on your behalf. You retain full ownership of your data and may export or request deletion at any time.` },
  { title: '6. Privacy & Data Security',
    body: `We implement industry-standard security measures including encrypted data transmission (HTTPS/TLS), hashed passwords, role-based access control, and regular security audits. See our Privacy Policy for full details.` },
  { title: '7. Subscription & Payment',
    body: `Skuli UG is offered on a per-term subscription basis. Schools on a Trial plan have access to all features for 30 days at no cost. After the trial, a paid subscription is required to continue accessing the Service. Pricing is as published on our website and may change with 30 days' notice.` },
  { title: '8. Service Availability',
    body: `We aim for 99.9% uptime but do not guarantee uninterrupted access. Scheduled maintenance will be communicated in advance. We are not liable for downtime caused by factors outside our control, including internet outages or force majeure events.` },
  { title: '9. Limitation of Liability',
    body: `To the maximum extent permitted by law, Skuli UG shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability in any calendar year shall not exceed the total fees paid by your school in that year.` },
  { title: '10. Termination',
    body: `Either party may terminate the subscription with 30 days' written notice. Upon termination, schools have 30 days to export their data. After this period, data may be permanently deleted. We reserve the right to suspend accounts that violate these Terms immediately.` },
  { title: '11. Changes to Terms',
    body: `We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the new Terms. Material changes will be notified by email to the school's registered address.` },
  { title: '12. Governing Law',
    body: `These Terms are governed by the laws of the Republic of Uganda. Any disputes shall be resolved through the courts of Uganda, or by arbitration as mutually agreed.` },
  { title: '13. Contact',
    body: `For questions about these Terms, contact us at legal@skuliug.com or write to Skuli UG, Kampala, Uganda.` },
];

export default function TermsPage() {
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
              <FileText className="w-6 h-6 text-gold" />
            </div>
            <div>
              <div className="eyebrow mb-2">Legal</div>
              <h1 className="font-display text-[clamp(2rem,4.4vw,3rem)] font-semibold tracking-tightest text-ink leading-tight">
                Terms of Service
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
          Welcome to Skuli UG. By accessing or using the Skuli UG platform ("Service"), you agree to
          be bound by these Terms of Service. Please read them carefully.
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
