import React from "react";
import {
  FiFileText,
  FiShield,
  FiUser,
  FiBriefcase,
  FiCode,
  FiExternalLink,
  FiMail,
  FiChevronRight,
  FiAlertCircle,
  FiCheckCircle,
  FiLock,
} from "react-icons/fi";

const TermsOfService = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/10 via-gray-900 to-gray-900" />
        <div className="absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
              <FiFileText className="text-base" />
              Terms &amp; Conditions
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Terms of{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Service
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              These terms explain the rules for accessing and using this
              portfolio website, its content, project demonstrations, and
              contact features.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400">
              <span className="inline-flex items-center gap-2">
                <FiFileText className="text-blue-500" />
                Last updated: November 1, 2026
              </span>

              <span className="inline-flex items-center gap-2">
                <FiShield className="text-blue-500" />
                Clear and fair usage terms
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-6xl px-5 pt-12 sm:px-8 lg:pt-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* For Visitors */}
          <div className="group rounded-2xl border border-gray-800 bg-gray-800/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-gray-800/70">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400 transition group-hover:bg-blue-500/20">
              <FiUser />
            </div>

            <h2 className="text-lg font-semibold text-white">
              For Visitors
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Guidelines for browsing and interacting with the portfolio.
            </p>
          </div>

          {/* Project Content */}
          <div className="group rounded-2xl border border-gray-800 bg-gray-800/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-gray-800/70">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400 transition group-hover:bg-blue-500/20">
              <FiCode />
            </div>

            <h2 className="text-lg font-semibold text-white">
              Project Content
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Clarifies ownership and permitted use of showcased work.
            </p>
          </div>

          {/* Respectful Use */}
          <div className="group rounded-2xl border border-gray-800 bg-gray-800/40 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-gray-800/70">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400 transition group-hover:bg-blue-500/20">
              <FiLock />
            </div>

            <h2 className="text-lg font-semibold text-white">
              Respectful Use
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Promotes secure, lawful, and responsible website use.
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

            <nav aria-label="Terms of service sections" className="space-y-1">
              <a
                href="#acceptance"
                className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400"
              >
                <span>1. Acceptance of Terms</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a
                href="#website-purpose"
                className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400"
              >
                <span>2. Website Purpose</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a
                href="#intellectual-property"
                className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400"
              >
                <span>3. Intellectual Property</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a
                href="#project-information"
                className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400"
              >
                <span>4. Project Demonstrations and Information</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a
                href="#acceptable-use"
                className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400"
              >
                <span>5. Acceptable Use</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a
                href="#contact-and-inquiries"
                className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400"
              >
                <span>6. Contact Forms and Inquiries</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a
                href="#third-party-links"
                className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400"
              >
                <span>7. Third-Party Links and Services</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a
                href="#privacy"
                className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400"
              >
                <span>8. Privacy</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a
                href="#disclaimer"
                className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400"
              >
                <span>9. Disclaimer of Warranties</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a
                href="#limitation"
                className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400"
              >
                <span>10. Limitation of Liability</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a
                href="#changes"
                className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400"
              >
                <span>11. Changes to These Terms</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a
                href="#governing-law"
                className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400"
              >
                <span>12. Governing Law</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>

              <a
                href="#contact"
                className="group flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-400 transition hover:bg-blue-500/10 hover:text-blue-400"
              >
                <span>13. Contact Us</span>
                <FiChevronRight className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
            </nav>
          </div>

          <div className="mt-5 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-5">
            <FiAlertCircle className="mb-3 text-2xl text-blue-400" />

            <h3 className="font-semibold text-white">
              Need clarification?
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Contact us if you have questions about these terms or how they
              apply to your use of the website.
            </p>

            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
            >
              Contact us <FiChevronRight />
            </a>
          </div>
        </aside>

        {/* Terms Sections */}
        <div className="min-w-0">
          <div className="mb-10 rounded-2xl border border-gray-800 bg-gray-800/30 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-400">
                <FiCheckCircle />
              </div>

              <div>
                <h2 className="font-semibold text-white">
                  Please read these terms carefully
                </h2>

                <p className="mt-2 text-sm leading-7 text-gray-400">
                  These terms are intended for a personal portfolio website.
                  Separate written agreements may apply to freelance services,
                  commissioned projects, or other professional engagements.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {/* 1. Acceptance of Terms */}
            <article
              id="acceptance"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                1. Acceptance of Terms
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  Welcome to <strong className="text-white">[Your Portfolio Website Name]</strong>.
                  By accessing or using this website, you agree to these Terms of
                  Service and any applicable laws and regulations. If you do not
                  agree to these terms, please do not use this website.
                </p>

                <p>
                  These terms apply to all visitors, prospective clients, and other
                  individuals who access or use the website.
                </p>
              </div>
            </article>

            {/* 2. Website Purpose */}
            <article
              id="website-purpose"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                2. Website Purpose
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  This website is a personal portfolio intended to showcase
                  professional experience, skills, projects, and services. It may
                  include project descriptions, demonstrations, source-code links,
                  articles, and contact information.
                </p>

                <p>
                  Website content is provided for general informational and
                  promotional purposes. Displaying a project does not guarantee that
                  its features, availability, or performance will remain unchanged.
                </p>
              </div>
            </article>

            {/* 3. Intellectual Property */}
            <article
              id="intellectual-property"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                3. Intellectual Property
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  Unless otherwise stated, the original text, design, branding,
                  graphics, and other materials on this website are owned by
                  [Your Name] or used with permission and are protected by
                  applicable intellectual property laws.
                </p>

                <p>
                  You may view and share links to publicly available portfolio
                  content for personal, non-commercial purposes. You may not copy,
                  reproduce, modify, distribute, publish, or commercially exploit
                  website materials without prior written permission, except where
                  permitted by law or by a separate license.
                </p>

                <p>
                  Projects that use third-party libraries, assets, or open-source
                  software remain subject to their respective licenses.
                </p>
              </div>
            </article>

            {/* 4. Project Demonstrations and Information */}
            <article
              id="project-information"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                4. Project Demonstrations and Information
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  Project descriptions, screenshots, demonstrations, and technical
                  details are provided to illustrate work and capabilities. Some
                  projects may be prototypes, educational examples, or modified
                  demonstrations rather than production services.
                </p>

                <p>
                  We make reasonable efforts to keep information accurate, but do
                  not guarantee that every project description, link, feature, or
                  demonstration is complete, current, or error-free.
                </p>
              </div>
            </article>

            {/* 5. Acceptable Use */}
            <article
              id="acceptable-use"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                5. Acceptable Use
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>You agree not to:</p>

                <ul className="list-disc space-y-2 pl-6 marker:text-blue-500">
                  <li>Use the website for unlawful, fraudulent, or harmful purposes.</li>
                  <li>Attempt to gain unauthorized access to the website or its systems.</li>
                  <li>Interfere with website functionality, availability, or security.</li>
                  <li>Upload or transmit malicious code, spam, or harmful content.</li>
                  <li>Misrepresent your identity when contacting us.</li>
                  <li>Use website content in a way that infringes another party's rights.</li>
                </ul>

                <p>
                  We may restrict access to the website if we reasonably believe
                  these terms have been violated.
                </p>
              </div>
            </article>

            {/* 6. Contact Forms and Inquiries */}
            <article
              id="contact-and-inquiries"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                6. Contact Forms and Inquiries
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  If you contact us about a project, collaboration, or service, you
                  agree to provide accurate information and to communicate
                  respectfully.
                </p>

                <p>
                  Submitting an inquiry does not create a client relationship,
                  guarantee a response, or constitute acceptance of a project.
                  Any professional engagement will be subject to separate written
                  terms agreed upon by the relevant parties.
                </p>

                <p>
                  Please do not submit confidential, sensitive, or proprietary
                  information through public forms unless appropriate safeguards
                  and arrangements have been agreed upon.
                </p>
              </div>
            </article>

            {/* 7. Third-Party Links and Services */}
            <article
              id="third-party-links"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                7. Third-Party Links and Services
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  This website may link to external websites, repositories, social
                  networks, project demos, or third-party services. These links are
                  provided for convenience and informational purposes.
                </p>

                <p>
                  We do not control or endorse all third-party content and are not
                  responsible for the availability, accuracy, security, or practices
                  of external websites. Your use of third-party services is subject
                  to their own terms and policies.
                </p>
              </div>
            </article>

            {/* 8. Privacy */}
            <article
              id="privacy"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                8. Privacy
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  Your use of this website may involve the collection or processing
                  of information as described in our Privacy Policy.
                </p>

                <p>
                  Please review the{" "}
                  <a
                    href="/privacy-policy"
                    className="font-medium text-blue-400 transition hover:text-blue-300"
                  >
                    Privacy Policy
                  </a>{" "}
                  to understand how information may be collected, used, and protected.
                </p>
              </div>
            </article>

            {/* 9. Disclaimer of Warranties */}
            <article
              id="disclaimer"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                9. Disclaimer of Warranties
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  This website and its content are provided on an “as is” and
                  “as available” basis, to the extent permitted by law. We make no
                  warranties, express or implied, regarding the website's
                  availability, accuracy, reliability, suitability, or
                  non-infringement.
                </p>

                <p>
                  We do not guarantee uninterrupted access, error-free operation,
                  or that the website will be free from harmful components.
                </p>
              </div>
            </article>

            {/* 10. Limitation of Liability */}
            <article
              id="limitation"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                10. Limitation of Liability
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  To the maximum extent permitted by applicable law, [Your Name]
                  will not be liable for indirect, incidental, special,
                  consequential, or punitive damages, or for loss of data, profits,
                  business opportunities, or goodwill arising from or related to
                  your use of, or inability to use, this website.
                </p>

                <p>
                  Nothing in these terms excludes or limits liability that cannot
                  legally be excluded or limited under applicable law.
                </p>
              </div>
            </article>

            {/* 11. Changes to These Terms */}
            <article
              id="changes"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                11. Changes to These Terms
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  We may revise these Terms of Service from time to time. Updated
                  terms will be published on this page with a revised “Last Updated”
                  date. Your continued use of the website after changes are published
                  constitutes acceptance of the revised terms, to the extent
                  permitted by applicable law.
                </p>
              </div>
            </article>

            {/* 12. Governing Law */}
            <article
              id="governing-law"
              className="scroll-mt-8 rounded-2xl border border-gray-800 bg-gray-800/20 p-6 sm:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                12. Governing Law
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                <p>
                  These terms are governed by the laws applicable in [Your
                  Jurisdiction], without regard to conflict-of-law principles, except
                  where mandatory consumer protection laws provide otherwise.
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
                  If you have questions about these Terms of Service, please contact
                  us using the details below:
                </p>

                <div className="mt-5 space-y-3 rounded-xl border border-gray-700 bg-gray-900/70 p-5">
                  <p className="flex items-start gap-3">
                    <FiMail className="mt-1 shrink-0 text-blue-500" />

                    <span>
                      <span className="text-gray-500">Email:</span>{" "}
                      <a
                        href="mailto:support@example.com"
                        className="text-blue-400 transition hover:text-blue-300"
                      >
                        support@example.com
                      </a>
                    </span>
                  </p>

                  <p className="flex items-start gap-3">
                    <FiBriefcase className="mt-1 shrink-0 text-blue-500" />

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
                  We appreciate your interest in our work. By using this
                  website, you help maintain a respectful and professional
                  online environment.
                </p>

                <a
                  href="mailto:support@example.com"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                >
                  Contact us <FiExternalLink />
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

export default TermsOfService;