import Head from 'next/head'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function StarterTier() {
  return (
    <>
      <Head>
        <title>$500/Month Starter Automation Package Dallas-Fort Worth | Leverage Lab</title>
        <meta
          name="description"
          content="Affordable automation for Dallas-Fort Worth small businesses. $500/month retainer includes 5 hours support, 2-3 simple automations, monthly strategy calls. Perfect for 1-10 employee businesses in DFW. Save 5-10 hours weekly."
        />
        <meta name="keywords" content="small business automation Dallas, affordable automation DFW, starter automation package Fort Worth, small business AI Dallas, workflow automation small business DFW" />
      </Head>

      <Nav />

      <Hero
        title="Starter Tier"
        subtitle="Perfect for small businesses taking their first steps into automation"
        ctaText="Get Started"
        ctaLink="/get-started"
        showSecondary={false}
      />

      <main>
        {/* Overview Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div>
                <div className="text-5xl font-bold text-brand-teal mb-2">
                  $500<span className="text-2xl text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Up to 5 hours of support monthly</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://buy.stripe.com/00w6oA8cjeVobnV8RT0Jq01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block px-8 py-4 text-center"
                >
                  Start Subscription
                </a>
                <a
                  href="https://calendly.com/jeremy-leveragelab/discovery-call-leverage-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-block px-8 py-4 text-center"
                >
                  Schedule Free Discovery Call
                </a>
              </div>
            </div>
            
            {/* Trust Signals */}
            <div className="bg-white rounded-lg p-4 mb-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Secure checkout via Stripe</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>No long-term commitment</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Who This Is For
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                <strong>Ideal for: Small businesses with 1-10 employees</strong> who are ready to start automating but don't need extensive custom development yet.
              </p>
              <p className="text-gray-600 mb-4">
                Perfect if you:
              </p>
              <ul className="space-y-3">
                {[
                  'Have a few specific repetitive tasks draining your time',
                  'Use common business tools like Gmail, Google Sheets, or basic CRM',
                  'Want simple, reliable automations without complex integrations',
                  'Need ongoing support but not full-time technical resources',
                  'Are just getting started with automation and want to test the waters',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-brand-teal mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                What's Included
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-teal/10 rounded-lg p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-brand-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      2-3 Simple Automations Per Month
                    </h3>
                    <p className="text-gray-600">
                      Email workflows, form submissions, data transfers between apps, 
                      appointment reminders, simple notifications, and basic task automation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-teal/10 rounded-lg p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-brand-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Monthly 30-Minute Check-In Call
                    </h3>
                    <p className="text-gray-600">
                      Review what's working, discuss new automation needs, optimize existing 
                      workflows, and plan the next month's priorities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-teal/10 rounded-lg p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-brand-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Email/Slack Support (48-Hour Response)
                    </h3>
                    <p className="text-gray-600">
                      Got questions or need adjustments? Reach out via email or Slack and 
                      we'll respond within 2 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-teal/10 rounded-lg p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-brand-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Access to Template Library
                    </h3>
                    <p className="text-gray-600">
                      Pre-built automation templates for common business tasks that you can 
                      implement on your own or request we set up for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                How It Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-teal text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Kickoff Call
                    </h3>
                    <p className="text-gray-600">
                      We'll start with a 60-minute onboarding call to understand your business, 
                      tools, and biggest pain points. We'll identify the first 2-3 automations 
                      to build.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-teal text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Implementation
                    </h3>
                    <p className="text-gray-600">
                      We build and test your automations, then walk you through how they work. 
                      We provide documentation so you can understand and maintain them.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-teal text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Ongoing Support
                    </h3>
                    <p className="text-gray-600">
                      Monthly check-ins keep automations running smoothly. We add new automations, 
                      optimize existing ones, and adjust as your business evolves.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Tools We Use
              </h2>
              <p className="text-gray-600 mb-4">
                Starter tier focuses on user-friendly, no-code tools that are affordable 
                and easy to maintain:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'Zapier',
                  'Make (Integromat)',
                  'Google Workspace',
                  'Gmail',
                  'Google Sheets',
                  'Google Forms',
                  'ChatGPT API',
                  'Claude API',
                  'Calendly',
                  'Notion',
                  'Slack',
                  'Basic CRMs',
                ].map((tool, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-3 text-center text-sm font-medium text-gray-700"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-teal/10 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Example Use Cases
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📧 Automated Lead Follow-Up
                  </h3>
                  <p className="text-gray-600">
                    When someone fills out your contact form, automatically send a welcome 
                    email, add them to your CRM, and notify your sales team in Slack.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📊 Daily Sales Report
                  </h3>
                  <p className="text-gray-600">
                    Pull yesterday's sales data from your system, format it nicely, and 
                    automatically email a summary to your team every morning.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📅 Appointment Reminders
                  </h3>
                  <p className="text-gray-600">
                    Send automatic SMS or email reminders to clients 24 hours before their 
                    scheduled appointment to reduce no-shows.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📝 Client Onboarding Workflow
                  </h3>
                  <p className="text-gray-600">
                    When a new client signs up, automatically create their folder, send 
                    welcome materials, schedule kickoff call, and add them to your project 
                    management tool.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What happens if I don't use all 5 hours in a month?
                  </h3>
                  <p className="text-gray-600">
                    Unused hours don't roll over, but we'll use monthly check-ins to optimize 
                    existing automations and identify new opportunities to make sure you're 
                    getting value from the retainer.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What if I need more than 5 hours or more complex automations?
                  </h3>
                  <p className="text-gray-600">
                    You can upgrade to our{' '}
                    <Link href="/services/growth" className="text-brand-teal hover:underline">
                      Growth Tier
                    </Link>{' '}
                    anytime, which includes 15 hours/month, AI implementation, and more complex 
                    integrations. We'll recommend upgrading if we see your needs growing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Is there a contract or can I cancel anytime?
                  </h3>
                  <p className="text-gray-600">
                    We require a 3-month minimum commitment to ensure we have time to understand 
                    your business and deliver value. After that, you can cancel with 30 days notice.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do I need technical skills to work with you?
                  </h3>
                  <p className="text-gray-600">
                    Not at all! We handle all the technical setup and provide simple documentation. 
                    If you can use email and a web browser, you can work with us.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What tools do I need to pay for separately?
                  </h3>
                  <p className="text-gray-600">
                    You'll need subscriptions to the tools we integrate (like Zapier, which starts 
                    around $20/month). We'll help you choose cost-effective options and can include 
                    tool cost estimates in your onboarding.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-brand text-white rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Automating?
              </h2>
              <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Book a discovery call to discuss your needs and get started with your first 
                automations this month.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                <a
                  href="https://buy.stripe.com/00w6oA8cjeVobnV8RT0Jq01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-brand-teal bg-white rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                >
                  Start Subscription - $500/mo
                </a>
                <a
                  href="https://calendly.com/jeremy-leveragelab/discovery-call-leverage-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg hover:bg-white hover:text-brand-teal transition-all duration-200 shadow-lg"
                >
                  Schedule Free Discovery Call First
                </a>
              </div>
              <p className="text-white/80 text-sm">
                Secure checkout via Stripe • Cancel anytime after 3-month minimum
              </p>
              <p className="text-white/80 mt-4">
                Or view{' '}
                <Link href="/services" className="underline hover:text-white">
                  all service tiers
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
