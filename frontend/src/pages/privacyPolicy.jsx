import {
  FiShield,
  FiLock,
  FiEye,
  FiDatabase,
  FiMail,
  FiGlobe,
  FiFileText,
  FiChevronRight,
  FiCheckCircle,
  FiExternalLink,
} from "react-icons/fi";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-gray-900 to-gray-900" />
        <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              <FiShield className="text-base" />
              Privacy &amp; Transparency
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Privacy{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Your privacy matters. Learn how information is collected, used,
              and protected when you visit our portfolio, explore projects, or
              get in touch.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <FiFileText className="text-blue-500" />
                Last updated: October 27, 2026
              </span>

              <span className="inline-flex items-center gap-2">
                <FiLock className="text-blue-500" />
                Privacy-focused practices
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Highlights */}
      <section className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 lg:pt-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Transparency */}
          <div className="group rounded-2xl border border-gray-800 bg-gray-800/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-gray-800/70">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400 transition group-hover:bg-blue-500/20">
              <FiEye />
            </div>

            <h2 className="text-lg font-semibold text-white">
              Transparency
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Understand what information may be collected and why.
            </p>
          </div>

          {/* Data Protection */}
          <div className="group rounded-2xl border border-gray-800 bg-gray-800/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-gray-800/70">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400 transition group-hover:bg-blue-500/20">
              <FiLock />
            </div>

            <h2 className="text-lg font-semibold text-white">
              Data Protection
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Reasonable measures help safeguard information we handle.
            </p>
          </div>

          {/* Limited Collection */}
          <div className="group rounded-2xl border border-gray-800 bg-gray-800/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-gray-800/70">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400 transition group-hover:bg-blue-500/20">
              <FiDatabase />
            </div>

            <h2 className="text-lg font-semibold text-white">
              Limited Collection
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Information is used for relevant website and communication purposes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14 lg:py-20">
        {/* Table of Contents */}
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-2xl border border-gray-800 bg-gray-800/40 p-5">
            <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-200">
              <FiFileText className="text-blue-500" />
              On This Page
            </h2>

            <nav aria-label="Privacy policy sections" className="space-y-1">
              <a href="#introduction" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400">
                <span>1. Introduction</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#information-collected" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400">
                <span>2. Information We Collect</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#how-we-use" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400">
                <span>3. How We Use Your Information</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#contact-form" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400">
                <span>4. Contact Forms and Communications</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#cookies" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400">
                <span>5. Cookies and Analytics</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#third-party" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400">
                <span>6. Third-Party Services and External Links</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#data-sharing" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400">
                <span>7. How We Share Information</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#data-security" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400">
                <span>8. Data Security</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#data-retention" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400">
                <span>9. Data Retention</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#your-rights" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400">
                <span>10. Your Privacy Rights</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#children" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400">
                <span>11. Children's Privacy</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#policy-changes" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400">
                <span>12. Changes to This Privacy Policy</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a href="#contact" className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400">
                <span>13. Contact Us</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            </nav>
          </div>

          <div className="mt-5 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-5">
            <FiShield className="mb-3 text-2xl text-blue-400" />

            <h3 className="font-semibold text-white">
              Questions about privacy?
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Contact us if you need clarification about how your information
              is handled.
            </p>

            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
            >
              Contact us <FiChevronRight />
            </a>
          </div>
        </aside>

        {/* Policy Sections */}
        <div className="min-w-0">
          <div className="mb-10 rounded-2xl border border-gray-800 bg-gray-800/30 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                <FiCheckCircle />
              </div>

              <div>
                <h2 className="font-semibold text-white">
                  Your privacy, explained clearly
                </h2>

                <p className="mt-2 text-sm leading-7 text-gray-400">
                  This policy describes general privacy practices for a
                  portfolio website. Actual data collection depends on the
                  features, hosting configuration, and third-party services
                  enabled on your website.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {/* 1. Introduction */}
            <article
              id="introduction"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                1. Introduction
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  Welcome to <span className="text-white font-medium">[Your Portfolio Website Name]</span>.
                  Your privacy is important to us. This Privacy Policy explains how
                  we collect, use, store, and protect information when you visit our
                  portfolio website or contact us through its available features.
                </p>

                <p>
                  By using this website, you acknowledge the practices described in
                  this policy. If you do not agree with this policy, please
                  discontinue using the website.
                </p>
              </div>
            </article>

            {/* 2. Information We Collect */}
            <article
              id="information-collected"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                2. Information We Collect
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>Depending on how you interact with the website, we may collect:</p>

                <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                  <li>
                    <strong className="text-gray-200">Contact information:</strong>{" "}
                    Your name, email address, and any information you include when
                    submitting a contact form.
                  </li>

                  <li>
                    <strong className="text-gray-200">Messages:</strong> Project
                    inquiries, feedback, collaboration requests, and other
                    communications you send to us.
                  </li>

                  <li>
                    <strong className="text-gray-200">Technical information:</strong>{" "}
                    Your browser type, device information, IP address, and basic
                    website usage data, where collected by hosting providers or
                    enabled analytics tools.
                  </li>

                  <li>
                    <strong className="text-gray-200">Cookies and similar data:</strong>{" "}
                    Information stored by cookies or similar technologies, if used
                    by this website or its integrated services.
                  </li>
                </ul>

                <p>
                  We do not intentionally request sensitive personal information
                  through the portfolio website.
                </p>
              </div>
            </article>

            {/* 3. How We Use Your Information */}
            <article
              id="how-we-use"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                3. How We Use Your Information
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>Information collected may be used to:</p>

                <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                  <li>Respond to messages, questions, and project inquiries.</li>
                  <li>Discuss potential freelance work or business collaborations.</li>
                  <li>Maintain, secure, and improve the website.</li>
                  <li>Understand website performance when analytics are enabled.</li>
                  <li>Prevent spam, abuse, fraud, and unauthorized activity.</li>
                  <li>Meet applicable legal obligations.</li>
                </ul>

                <p>
                  We use personal information only for purposes that are relevant to
                  the way it was collected, subject to applicable law.
                </p>
              </div>
            </article>

            {/* 4. Contact Forms and Communications */}
            <article
              id="contact-form"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                4. Contact Forms and Communications
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  If you contact us through a form or email, we may retain the
                  information you provide so that we can respond to your inquiry and
                  maintain relevant business correspondence.
                </p>

                <p>
                  Please do not submit passwords, payment card details, confidential
                  credentials, or other sensitive information through the contact
                  form.
                </p>

                <p>
                  If the website uses a third-party email delivery service, your
                  message may be processed by that provider to deliver your inquiry.
                  The provider's own privacy policy may also apply.
                </p>
              </div>
            </article>

            {/* 5. Cookies and Analytics */}
            <article
              id="cookies"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                5. Cookies and Analytics
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  This website may use cookies or similar technologies to support
                  essential functionality, understand visitor activity, and improve
                  performance.
                </p>

                <p>
                  If analytics services such as Google Analytics are enabled, those
                  services may collect usage information according to their
                  configurations and privacy policies. Where required, we will
                  request consent before using non-essential cookies or tracking
                  technologies.
                </p>

                <p>
                  You can manage cookies through your browser settings. Disabling
                  certain cookies may affect some website features.
                </p>
              </div>
            </article>

            {/* 6. Third-Party Services and External Links */}
            <article
              id="third-party"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                6. Third-Party Services and External Links
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  Our portfolio may link to external websites or services, including
                  GitHub, LinkedIn, social media platforms, project demos, and
                  third-party tools.
                </p>

                <p>
                  These external websites operate independently and have their own
                  privacy practices. We are not responsible for their content,
                  security, or privacy policies. We encourage you to review their
                  policies before sharing personal information with them.
                </p>

                <p>
                  If embedded content, analytics, hosting, or email services are
                  integrated into this website, those providers may process certain
                  information as necessary to deliver their services.
                </p>
              </div>
            </article>

            {/* 7. How We Share Information */}
            <article
              id="data-sharing"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                7. How We Share Information
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  We do not sell your personal information. We may share limited
                  information in the following circumstances:
                </p>

                <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                  <li>
                    <strong className="text-gray-200">Service providers:</strong>{" "}
                    With trusted hosting, email, security, or analytics providers
                    when needed to operate the website.
                  </li>

                  <li>
                    <strong className="text-gray-200">Legal requirements:</strong>{" "}
                    When disclosure is required by applicable law or a valid legal
                    process.
                  </li>

                  <li>
                    <strong className="text-gray-200">Protection:</strong> When
                    reasonably necessary to protect our rights, website, users, or
                    security.
                  </li>
                </ul>

                <p>
                  Any sharing should be limited to what is reasonably necessary for
                  the relevant purpose.
                </p>
              </div>
            </article>

            {/* 8. Data Security */}
            <article
              id="data-security"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                8. Data Security
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  We take reasonable technical and organizational measures to protect
                  information against unauthorized access, alteration, disclosure,
                  or destruction.
                </p>

                <p>
                  However, no website, online transmission, or electronic storage
                  method can be guaranteed to be completely secure. We therefore
                  cannot promise absolute security of information transmitted
                  through the internet.
                </p>
              </div>
            </article>

            {/* 9. Data Retention */}
            <article
              id="data-retention"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                9. Data Retention
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  We retain personal information only for as long as reasonably
                  necessary to respond to inquiries, maintain relevant records,
                  operate the website, resolve disputes, and meet legal obligations.
                </p>

                <p>
                  Retention periods may vary depending on the nature of the
                  information and the reason it was collected. When information is
                  no longer needed, we will take reasonable steps to delete it or
                  securely dispose of it, subject to applicable requirements.
                </p>
              </div>
            </article>

            {/* 10. Your Privacy Rights */}
            <article
              id="your-rights"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                10. Your Privacy Rights
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  Depending on your location and applicable privacy laws, you may
                  have the right to:
                </p>

                <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
                  <li>Request access to personal information we hold about you.</li>
                  <li>Request correction of inaccurate information.</li>
                  <li>Request deletion of your personal information.</li>
                  <li>Object to or restrict certain processing activities.</li>
                  <li>Withdraw consent where processing relies on your consent.</li>
                </ul>

                <p>
                  To submit a privacy-related request, contact us using the email
                  address provided below. We may need to verify your identity before
                  processing certain requests.
                </p>
              </div>
            </article>

            {/* 11. Children's Privacy */}
            <article
              id="children"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                11. Children's Privacy
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  This portfolio website is intended for a general audience and is
                  not designed to knowingly collect personal information from children
                  in violation of applicable law. If you believe a child has provided
                  us with personal information inappropriately, please contact us so
                  that we can review the matter and take appropriate action.
                </p>
              </div>
            </article>

            {/* 12. Changes to This Privacy Policy */}
            <article
              id="policy-changes"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                12. Changes to This Privacy Policy
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our website, services, technology, or legal obligations.
                  Any revised version will be published on this page with an updated
                  “Last Updated” date. We encourage you to review this page
                  periodically.
                </p>
              </div>
            </article>

            {/* 13. Contact Us */}
            <article
              id="contact"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                13. Contact Us
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  If you have questions about this Privacy Policy, want to make a
                  privacy request, or need clarification about how your information
                  is handled, contact us:
                </p>

                <div className="mt-5 rounded-xl border border-gray-700 bg-gray-900/80 p-5 space-y-3">
                  <p className="flex items-start gap-3">
                    <FiMail className="mt-1 shrink-0 text-blue-500" />

                    <span>
                      <span className="text-gray-500">Email:</span>{" "}
                      <a
                        href="mailto:support@example.com"
                        className="text-blue-400 transition-colors hover:text-blue-300"
                      >
                        support@example.com
                      </a>
                    </span>
                  </p>

                  <p className="flex items-start gap-3">
                    <FiGlobe className="mt-1 shrink-0 text-blue-500" />

                    <span>
                      <span className="text-gray-500">Website:</span>{" "}
                      <span className="text-gray-200">
                        [Your Portfolio Website URL]
                      </span>
                    </span>
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* Closing Note */}
          <div className="mt-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-gray-800/30 to-transparent p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                <FiShield />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">
                  Thank you for visiting
                </h2>

                <p className="mt-2 text-sm leading-7 text-gray-400">
                  We appreciate your trust and are committed to handling
                  information responsibly. Please contact us if you have any
                  questions about this policy.
                </p>

                <a
                  href="mailto:support@example.com"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  Email us <FiExternalLink />
                </a>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs leading-6 text-gray-500">
            © 2026 [Your Portfolio Website Name]. All rights reserved.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;