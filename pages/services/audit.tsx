import Head from 'next/head'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function AutomationAudit() {
  return (
    <>
      <Head>
        <title>Automation Audit | Leverage Lab</title>
        <meta
          name="description"
          content="7-14 day audit to identify automation opportunities in your business. Get a custom roadmap with quick wins and long-term strategies."
        />
        <meta property="og:title" content="Automation Audit | Leverage Lab" />
        <meta
          property="og:description"
          content="Discover where automation can save you hours every week with our comprehensive business audit."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta
          property="og:url"
          content="https://leveragelab.co/services/audit"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />

      <main>
        <Hero
          title="Automation Audit"
          subtitle="Discover exactly where automation can save you time and money — with a clear roadmap to get there."
          ctaText="Request an Audit"
          showSecondary={false}
        />

        {/* Overview */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                What You Get
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our Automation Audit is a comprehensive analysis of your
                business operations. We identify repetitive tasks that are
                draining your time, document your current workflows, and
                deliver a custom automation roadmap tailored to your business.
              </p>

              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Timeline: 7–14 Days
                </h3>
                <p className="text-gray-600">
                  From kickoff to final report delivery.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Deliverables
              </h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand-teal mr-3 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Workflow Analysis Report:</strong> Detailed
                    documentation of your current processes and pain points
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand-teal mr-3 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Quick Wins:</strong> 2-3 high-impact automations
                    you can implement immediately
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand-teal mr-3 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Custom Automation Roadmap:</strong> Prioritized
                    plan with estimated time savings and ROI for each
                    automation
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand-teal mr-3 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>Tool Recommendations:</strong> Software and
                    platforms best suited for your business needs
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-brand-teal mr-3 flex-shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">
                    <strong>60-Minute Strategy Call:</strong> Review findings
                    and answer all your questions
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Acceptance Criteria
              </h3>
              <p className="text-gray-600 mb-4">
                Each recommended automation must demonstrate:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span className="text-gray-700">
                    5 successful test runs with your actual business data
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span className="text-gray-700">
                    Clear documentation for implementation or handoff
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span className="text-gray-700">
                    Measurable time savings or efficiency gains
                  </span>
                </li>
              </ul>

              <div className="bg-gradient-brand text-white rounded-xl p-8 mb-8">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-2xl font-bold">Investment</h3>
                  <div className="text-4xl font-bold">$1,500</div>
                </div>
                <p className="text-white/90">
                  One-time fee. Payment due at project kickoff.
                </p>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">
                    Do we need a CRM or specific platform?
                  </h4>
                  <p className="text-gray-600">
                    No — we work with whatever platform or system you're
                    currently using. Part of the audit is recommending the best
                    tools for your specific needs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">
                    What if we don't have documented processes?
                  </h4>
                  <p className="text-gray-600">
                    That's perfectly fine! We'll help you document your current
                    workflows as part of the audit process.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">
                    What happens after the audit?
                  </h4>
                  <p className="text-gray-600">
                    You'll have a clear roadmap to implement automations
                    yourself, or you can work with us through our Automation
                    Starter package to build and deploy the solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA
          title="Ready to Discover Your Automation Opportunities?"
          description="Let's analyze your workflows and build a roadmap to save you hours every week."
          buttonText="Request an Audit"
          variant="white"
        />
      </main>

      <Footer />
    </>
  )
}
