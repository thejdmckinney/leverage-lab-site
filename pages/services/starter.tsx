import Head from 'next/head'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function AutomationStarter() {
  return (
    <>
      <Head>
        <title>Automation Starter | Leverage Lab</title>
        <meta
          name="description"
          content="2-4 week implementation of custom automations for your business. Get proven, reliable automation solutions that save hours every week."
        />
        <meta
          property="og:title"
          content="Automation Starter | Leverage Lab"
        />
        <meta
          property="og:description"
          content="Build and deploy custom automations that run reliably and save you hours every week."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta
          property="og:url"
          content="https://leveragelab.co/services/starter"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />

      <main>
        <Hero
          title="Automation Starter"
          subtitle="Get custom automations built and deployed — saving you hours every week with proven, reliable solutions."
          ctaText="Get Started"
          showSecondary={false}
        />

        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                What You Get
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our Automation Starter package is perfect for businesses ready
                to implement. We build, test, and deploy custom automation
                solutions tailored to your specific workflows — with hands-on
                training so you can manage them confidently.
              </p>

              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  Timeline: 2–4 Weeks
                </h3>
                <p className="text-gray-600">
                  From kickoff to fully deployed automations.
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
                    <strong>3-5 Custom Automations:</strong> Built specifically
                    for your business workflows and tested extensively
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
                    <strong>Full Documentation:</strong> Step-by-step guides
                    for each automation including troubleshooting tips
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
                    <strong>Training Session:</strong> 90-minute walkthrough so
                    you and your team can manage and modify automations
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
                    <strong>30-Day Support:</strong> Email and chat support to
                    ensure everything runs smoothly
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Acceptance Criteria
              </h3>
              <p className="text-gray-600 mb-4">
                Each automation must demonstrate:
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span className="text-gray-700">
                    10 successful production runs with real business data
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span className="text-gray-700">
                    Error handling and notifications in place
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span className="text-gray-700">
                    Team member can modify basic settings independently
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-teal mr-2">•</span>
                  <span className="text-gray-700">
                    Documented time savings validated with real use cases
                  </span>
                </li>
              </ul>

              <div className="bg-gradient-brand text-white rounded-xl p-8 mb-8">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-2xl font-bold">Investment</h3>
                  <div className="text-4xl font-bold">$5,000</div>
                </div>
                <div className="space-y-2">
                  <p className="text-white/90">Payment Schedule:</p>
                  <ul className="space-y-1 text-white/90">
                    <li>• 40% at project kickoff</li>
                    <li>• 40% at midpoint review</li>
                    <li>• 20% upon final delivery</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Frequently Asked Questions
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">
                    Can we add more automations later?
                  </h4>
                  <p className="text-gray-600">
                    Absolutely! Many clients start with the Starter package and
                    add additional automations as they see results.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">
                    What if an automation breaks?
                  </h4>
                  <p className="text-gray-600">
                    You get 30 days of support included. After that, we offer
                    ongoing maintenance packages or can train your team to
                    handle updates.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">
                    Do we need to buy additional software?
                  </h4>
                  <p className="text-gray-600">
                    We work with what you have. If we recommend new tools,
                    we'll factor in cost and ensure it delivers clear ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA
          title="Ready to Build Your Automation System?"
          description="Let's implement custom automations that save you hours every week."
          buttonText="Get Started"
          variant="white"
        />
      </main>

      <Footer />
    </>
  )
}
