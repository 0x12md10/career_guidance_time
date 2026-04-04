export default function LegalPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      {/* Header */}
      <header className="bg-dark-800/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-xs">
              T
            </div>
            <span className="text-white font-semibold text-sm">SIGARAM THODU</span>
          </a>
          <a href="/" className="text-white/50 hover:text-brand-400 text-sm transition-colors">
            ← Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="mb-10">
          <p className="text-brand-400 text-xs font-medium uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-white/40 text-sm">
            Last updated: April 2026 &nbsp;·&nbsp; T.I.M.E Tirunelveli
          </p>
        </div>

        <div className="space-y-10 text-white/70 text-sm leading-relaxed">

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">1. Introduction</h2>
            <p>
              This Privacy Policy explains how <strong className="text-white">T.I.M.E Tirunelveli</strong> ("we",
              "us", "our") collects, uses, and protects the personal information you provide when you
              register for the <strong className="text-white">SIGARAM THODU</strong> — Free Education
              Guidance Program via our website.
            </p>
            <p className="mt-3">
              By submitting the registration form you agree to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect only the information necessary to process your event registration:</p>
            <div className="card-glass rounded-xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-3 text-left text-white/50 font-medium">Field</th>
                    <th className="px-4 py-3 text-left text-white/50 font-medium">Purpose</th>
                    <th className="px-4 py-3 text-left text-white/50 font-medium">Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ['Full Name', 'Identify the registrant', 'Yes'],
                    ['Phone Number', 'WhatsApp confirmation & event updates', 'Yes'],
                    ['Email Address', 'Email confirmation of registration', 'Yes'],
                    ['Grade / Standard', 'Tailor event content appropriately', 'Yes'],
                    ['School / College Name', 'Event organisation & analytics', 'Yes'],
                    ['City', 'Event logistics & analytics', 'Yes'],
                    ["Parent's Name", 'Family registration coordination', 'No'],
                    ["Parent's Phone", 'Parent notification (if provided)', 'No'],
                    ['How You Heard About Us', 'Event promotion analytics', 'No'],
                  ].map(([field, purpose, req]) => (
                    <tr key={field}>
                      <td className="px-4 py-3 text-white font-medium">{field}</td>
                      <td className="px-4 py-3 text-white/60">{purpose}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          req === 'Yes' ? 'bg-brand-500/20 text-brand-300' : 'bg-white/5 text-white/40'
                        }`}>{req}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">
              By registering, you explicitly consent to T.I.M.E Tirunelveli contacting you through
              the channels you have provided for the following purposes:
            </p>
            <ul className="space-y-2.5">
              {[
                'To confirm your registration for the SIGARAM THODU event via email and WhatsApp.',
                'To send event-related updates (date, venue, or schedule changes) via email and WhatsApp.',
                'To share information about T.I.M.E Tirunelveli courses, programs, and upcoming admission cycles.',
                'To invite you to free counselling sessions, career guidance workshops, and educational seminars.',
                'To assist you with course enquiries, admission procedures, and enrolment processes.',
                'To follow up on your academic goals and suggest relevant T.I.M.E programs suited to your grade and stream.',
                'To manage event attendance, seating, and logistics.',
                'To generate anonymised attendance statistics for internal reporting.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 p-4 bg-brand-500/5 border border-brand-500/20 rounded-xl space-y-2 text-white/60">
              <p>
                <strong className="text-white">WhatsApp communications</strong> — By providing your
                phone number, you consent to receiving WhatsApp messages from T.I.M.E Tirunelveli
                regarding event confirmations, course information, counselling session invitations,
                and admission-related updates. You may opt out at any time by replying{' '}
                <span className="text-white font-medium">STOP</span> to any message or by contacting
                us directly (see Section 9).
              </p>
              <p>
                <strong className="text-white">Email communications</strong> — By providing your
                email address, you consent to receiving emails from T.I.M.E Tirunelveli for the
                same purposes listed above. You may unsubscribe at any time.
              </p>
            </div>

            <p className="mt-4 p-4 bg-white/3 border border-white/8 rounded-xl text-white/50 text-xs">
              All communications are strictly from T.I.M.E Tirunelveli and relate only to
              educational programs, career guidance, and admission services. We do{' '}
              <strong className="text-white/80">not</strong> use your data for third-party
              advertising or commercial profiling.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">4. Third-Party Services</h2>
            <p className="mb-4">
              We use the following trusted third-party services to operate the registration system.
              Each service has its own privacy policy.
            </p>
            <div className="space-y-3">
              {[
                {
                  name: 'MongoDB Atlas (MongoDB, Inc.)',
                  use: 'Secure cloud database to store registration records.',
                  link: 'https://www.mongodb.com/legal/privacy-policy',
                },
                {
                  name: 'AWS Simple Email Service (Amazon Web Services)',
                  use: 'Sends registration confirmation emails.',
                  link: 'https://aws.amazon.com/privacy/',
                },
                {
                  name: 'Meta WhatsApp Business Cloud API (Meta Platforms, Inc.)',
                  use: 'Sends WhatsApp confirmation messages to the phone number you provide.',
                  link: 'https://www.whatsapp.com/legal/privacy-policy',
                },
              ].map((s) => (
                <div key={s.name} className="card-glass rounded-xl p-4">
                  <p className="text-white font-medium text-sm">{s.name}</p>
                  <p className="text-white/50 text-xs mt-1">{s.use}</p>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-400 hover:text-brand-300 text-xs mt-1 inline-block transition-colors"
                  >
                    View their Privacy Policy →
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">5. Data Retention</h2>
            <p>
              Your registration data is retained for a period of <strong className="text-white">12 months</strong> after
              the event date, after which it is permanently deleted from our systems. You may request
              earlier deletion at any time by contacting us (see Section 8).
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">6. Data Sharing</h2>
            <p>
              We do <strong className="text-white">not</strong> sell, rent, or share your personal
              information with any third parties for commercial purposes. Information is shared only
              with the service providers listed in Section 4, strictly to deliver the registration
              confirmation service.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">7. Data Security</h2>
            <p>We implement appropriate technical safeguards to protect your information, including:</p>
            <ul className="space-y-2 mt-3">
              {[
                'HTTPS encryption for all data in transit.',
                'MongoDB Atlas encryption at rest.',
                'Rate limiting and input validation to prevent abuse.',
                'Access to the admin dashboard is password-protected.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">8. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="space-y-2">
              {[
                'Request a copy of the personal data we hold about you.',
                'Request correction of inaccurate data.',
                'Request deletion of your data at any time.',
                'Opt out of WhatsApp or email communications.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">To exercise any of these rights, contact us using the details in Section 9.</p>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">9. Contact Us</h2>
            <p className="mb-4">For any privacy-related queries or requests, reach us at:</p>
            <div className="card-glass rounded-xl p-5 space-y-2">
              <p className="text-white font-medium">T.I.M.E Tirunelveli</p>
              <p>T.I.M.E Institute, Tirunelveli, Tamil Nadu, India</p>
              <p>
                Email:{' '}
                <a href="mailto:timetirunelveli@gmail.com" className="text-brand-400 hover:text-brand-300 transition-colors">
                  timetirunelveli@gmail.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+917603912341" className="text-brand-400 hover:text-brand-300 transition-colors">
                  +91 76039 12341
                </a>
                {' / '}
                <a href="tel:+917603912342" className="text-brand-400 hover:text-brand-300 transition-colors">
                  +91 76039 12342
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-white text-lg font-semibold mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this
              page with an updated date. Continued use of the registration form after changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-xs">© 2026 T.I.M.E Tirunelveli. All rights reserved.</p>
          <a href="/" className="text-brand-400 hover:text-brand-300 text-xs mt-2 inline-block transition-colors">
            ← Return to SIGARAM THODU
          </a>
        </div>
      </main>
    </div>
  );
}
