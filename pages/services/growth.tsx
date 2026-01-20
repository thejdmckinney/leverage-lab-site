import Head from 'next/head'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function GrowthTier() {
  return (
    <>
      <Head>
        <title>$1,500/Month Growth Automation & AI Package Dallas-Fort Worth | Leverage Lab</title>
        <meta
          name="description"
          content="Comprehensive automation & AI for Dallas-Fort Worth growing businesses. $1,500/month includes 15 hours support, 5-8 complex automations, AI implementation, bi-weekly calls. For 10-50 employee DFW businesses. Save 10-20 hours weekly."
        />
        <meta name="keywords" content="AI implementation Dallas, automation services DFW, business automation Fort Worth, AI consulting Dallas, workflow automation growing business DFW" />
      </Head>

      <Nav />

      <Hero
        title="Growth Tier"
        subtitle="Comprehensive automation and AI solutions for businesses ready to scale"
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
                <div className="inline-block bg-brand-teal text-white px-4 py-1 rounded-full text-sm font-semibold mb-2">
                  MOST POPULAR
                </div>
                <div className="text-5xl font-bold text-brand-teal mb-2">
                  $1,500<span className="text-2xl text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Up to 15 hours of support monthly</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://buy.stripe.com/bJe5kw8cjeVo2Rpd890Jq02"
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
                <strong>Ideal for: Growing businesses with 10-50 employees</strong> ready for serious operational improvements and AI integration.
              </p>
              <p className="text-gray-600 mb-4">
                Perfect if you:
              </p>
              <ul className="space-y-3">
                {[
                  'Have multiple teams or departments that need integration',
                  'Want to implement AI for chatbots, content generation, or data analysis',
                  'Need more than basic automation - complex workflows and logic',
                  'Are serious about digital transformation and operational efficiency',
                  'Want strategic guidance on leveraging AI and automation for competitive advantage',
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
                      5-8 Moderate to Complex Automations Per Month
                    </h3>
                    <p className="text-gray-600">
                      Multi-step workflows, conditional logic, data transformations, API integrations, 
                      and custom business process automation.
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
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      AI Implementation
                    </h3>
                    <p className="text-gray-600">
                      Custom AI chatbots, content generation, data analysis, document processing, 
                      and intelligent automation using ChatGPT, Claude, and other AI tools.
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
                      Bi-Weekly 30-Minute Strategy Calls
                    </h3>
                    <p className="text-gray-600">
                      Regular touchpoints to review progress, plan upcoming work, discuss new 
                      opportunities, and ensure alignment with business goals.
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Priority Support (24-Hour Response)
                    </h3>
                    <p className="text-gray-600">
                      Questions, issues, or adjustments needed? Get priority email/Slack support 
                      with guaranteed 24-hour response time (weekdays).
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Quarterly Optimization Review
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive quarterly review of all automations, performance metrics, 
                      ROI analysis, and recommendations for continuous improvement.
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
                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Integration Between 3-5 Core Business Tools
                    </h3>
                    <p className="text-gray-600">
                      Connect your CRM, marketing automation, project management, accounting, 
                      and other core tools for seamless data flow.
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
                      Strategic Onboarding
                    </h3>
                    <p className="text-gray-600">
                      90-minute deep-dive session to understand your business model, tech stack, 
                      team structure, and strategic goals. We'll create a 90-day automation roadmap.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-teal text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Implementation & Integration
                    </h3>
                    <p className="text-gray-600">
                      We build your automations and AI solutions using advanced tools, test thoroughly, 
                      document everything, and train your team on how to use and manage them.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-teal text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Ongoing Optimization
                    </h3>
                    <p className="text-gray-600">
                      Bi-weekly strategy calls keep us aligned. We continuously optimize, add new 
                      automations, and adapt to your evolving needs. Quarterly reviews ensure maximum ROI.
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
                Growth tier leverages advanced automation and AI platforms:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  'n8n',
                  'Make (advanced)',
                  'ChatGPT API',
                  'Claude API',
                  'HubSpot',
                  'Salesforce',
                  'Airtable',
                  'Notion API',
                  'Slack API',
                  'Google Workspace',
                  'Microsoft 365',
                  'Custom APIs',
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
                    🤖 AI-Powered Customer Support Chatbot
                  </h3>
                  <p className="text-gray-600">
                    Custom ChatGPT chatbot trained on your knowledge base, integrated with your 
                    website and Slack. Answers common questions 24/7 and escalates complex issues 
                    to your team with context.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📊 Automated Marketing Analytics Dashboard
                  </h3>
                  <p className="text-gray-600">
                    Pull data from Google Analytics, Facebook Ads, email marketing, and CRM. 
                    Automatically generate weekly performance reports with AI-powered insights 
                    and recommendations.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    🔄 End-to-End Sales Pipeline Automation
                  </h3>
                  <p className="text-gray-600">
                    Automate lead capture from multiple sources, intelligent lead scoring, 
                    automated nurture sequences, meeting scheduling, proposal generation, and 
                    contract management. Full CRM integration.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📝 AI Content Generation & Distribution
                  </h3>
                  <p className="text-gray-600">
                    Generate blog posts, social media content, and email newsletters using AI. 
                    Automatically schedule and publish across multiple platforms with brand-consistent 
                    formatting.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    💼 Intelligent Document Processing
                  </h3>
                  <p className="text-gray-600">
                    Extract data from invoices, receipts, contracts using AI. Automatically 
                    categorize, route for approval, update accounting systems, and file in 
                    appropriate folders.
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
                    How is this different from the Starter tier?
                  </h3>
                  <p className="text-gray-600">
                    Growth tier includes 3x the hours (15 vs 5), AI implementation, more complex 
                    integrations, faster support (24hr vs 48hr), bi-weekly strategy calls, and 
                    quarterly optimization reviews. It's for businesses ready for comprehensive 
                    digital transformation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do I need technical knowledge to benefit from AI features?
                  </h3>
                  <p className="text-gray-600">
                    Not at all. We handle all technical implementation and provide training for your 
                    team. You just need to understand your business goals - we translate those into 
                    technical solutions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What if 15 hours isn't enough some months?
                  </h3>
                  <p className="text-gray-600">
                    You can purchase additional hours at $150/hour, or upgrade to{' '}
                    <Link href="/services/enterprise" className="text-brand-teal hover:underline">
                      Enterprise Tier
                    </Link>{' '}
                    for 30 hours/month. We'll let you know if we're trending over your monthly allocation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How do you measure ROI?
                  </h3>
                  <p className="text-gray-600">
                    We track time saved, error reduction, revenue impact, and cost savings. Quarterly 
                    reviews include detailed ROI analysis showing the business impact of each automation 
                    and AI implementation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What's the minimum commitment?
                  </h3>
                  <p className="text-gray-600">
                    6-month minimum for Growth tier to ensure we can deliver meaningful transformation. 
                    After that, cancel with 60 days notice. Most clients stay long-term because we 
                    continuously find new opportunities to improve operations.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-brand text-white rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Book a discovery call to discuss your growth goals and create a custom automation 
                and AI roadmap for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                <a
                  href="https://buy.stripe.com/bJe5kw8cjeVo2Rpd890Jq02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-brand-teal bg-white rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                >
                  Start Subscription - $1,500/mo
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
                Secure checkout via Stripe • Cancel anytime after 6-month minimum
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
