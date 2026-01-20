import Head from 'next/head'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function EnterpriseTier() {
  return (
    <>
      <Head>
        <title>$3,000/Month Enterprise Automation & AI Dallas-Fort Worth | Leverage Lab</title>
        <meta
          name="description"
          content="Enterprise automation & AI for Dallas-Fort Worth businesses. $3,000/month includes 30 hours support, unlimited automations, custom AI training, weekly calls, same-day support. For 50+ employee DFW companies. Save 20-30 hours weekly."
        />
        <meta name="keywords" content="enterprise automation Dallas, digital transformation DFW, custom AI Dallas, enterprise AI consulting Fort Worth, business transformation DFW" />
      </Head>

      <Nav />

      <Hero
        title="Enterprise Tier"
        subtitle="Comprehensive digital transformation for established businesses"
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
                  $3,000<span className="text-2xl text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Up to 30 hours of support monthly</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://buy.stripe.com/fZufZa0JR14yajR3xz0Jq03"
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
                <span>Dedicated support team</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Who This Is For
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                <strong>Ideal for: Established businesses with 50+ employees</strong> or companies undergoing major digital transformation initiatives.
              </p>
              <p className="text-gray-600 mb-4">
                Perfect if you:
              </p>
              <ul className="space-y-3">
                {[
                  'Need a dedicated automation and AI partner embedded in your operations',
                  'Have complex, multi-department processes requiring coordination',
                  'Want custom AI models trained on your specific data and use cases',
                  'Require enterprise-grade integrations and advanced technical solutions',
                  'Need strategic guidance on leveraging AI for competitive advantage',
                  'Want team training and change management support included',
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
                      Unlimited Automations and AI Implementations
                    </h3>
                    <p className="text-gray-600">
                      No limits on the number or complexity of automations. We work across your entire 
                      organization to automate and optimize every department and process.
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
                      Custom AI Model Training & Fine-Tuning
                    </h3>
                    <p className="text-gray-600">
                      Train custom AI models on your proprietary data, fine-tune for your specific 
                      use cases, and deploy specialized AI agents for your unique business needs.
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Full Business Process Analysis & Optimization
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive analysis of your entire operation, identification of inefficiencies, 
                      and strategic recommendations for process improvements beyond just automation.
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
                      Weekly 60-Minute Strategy Calls
                    </h3>
                    <p className="text-gray-600">
                      Regular strategic sessions with your leadership team to review progress, plan 
                      initiatives, discuss challenges, and align on priorities.
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
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Dedicated Slack Channel (Same-Day Response)
                    </h3>
                    <p className="text-gray-600">
                      Direct access to our team via dedicated Slack channel with same-day response 
                      guarantee. For urgent issues, we're available for immediate support.
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
                      Monthly Performance Reports with ROI Analysis
                    </h3>
                    <p className="text-gray-600">
                      Detailed monthly reports showing automation performance, time/cost savings, 
                      error reduction, and quantified ROI of all implementations.
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
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Team Training & Documentation
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive training for your team, detailed documentation, video tutorials, 
                      and ongoing support to ensure everyone can use and maintain the automations.
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
                      Integration Across Unlimited Tools
                    </h3>
                    <p className="text-gray-600">
                      Connect as many systems as needed - CRM, ERP, marketing automation, project 
                      management, accounting, HR systems, databases, and custom applications.
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
                      Enterprise Discovery & Planning
                    </h3>
                    <p className="text-gray-600">
                      Multi-day engagement with leadership and key stakeholders across departments. 
                      We map current state, identify transformation opportunities, and create a 
                      comprehensive 12-month automation roadmap.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-teal text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Phased Implementation
                    </h3>
                    <p className="text-gray-600">
                      We work in quarterly phases, prioritizing high-impact initiatives first. Each 
                      phase includes implementation, testing, team training, and performance measurement 
                      before moving to the next.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-teal text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Continuous Improvement & Support
                    </h3>
                    <p className="text-gray-600">
                      Weekly check-ins, monthly performance reviews, and quarterly strategic planning 
                      sessions keep us aligned. We continuously identify new opportunities and optimize 
                      existing systems for maximum impact.
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
                Enterprise tier leverages the full spectrum of automation and AI technologies:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'n8n (self-hosted)',
                  'Custom AI Agents',
                  'ChatGPT Enterprise',
                  'Claude (fine-tuned)',
                  'Advanced BI Dashboards',
                  'Database Automation',
                  'Enterprise CRM/ERP',
                  'Salesforce',
                  'HubSpot Enterprise',
                  'SAP Integration',
                  'Custom APIs',
                  'Webhook Management',
                  'Python/JavaScript',
                  'Cloud Functions',
                  'Docker Containers',
                  '...and any tool you need',
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
                Enterprise Use Cases
              </h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    🏢 Complete ERP-CRM Integration
                  </h3>
                  <p className="text-gray-600">
                    Full bidirectional sync between Salesforce and SAP, automated order processing, 
                    inventory management, invoicing, and financial reporting. Eliminated manual data 
                    entry across 50+ employees.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    🤖 Custom AI Support Agent
                  </h3>
                  <p className="text-gray-600">
                    Fine-tuned Claude model trained on 10 years of support tickets and documentation. 
                    Handles tier-1 support 24/7, reduces ticket volume by 60%, and escalates complex 
                    issues with full context to human agents.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📊 Executive AI Dashboard
                  </h3>
                  <p className="text-gray-600">
                    Real-time dashboard pulling data from 15+ systems, AI-powered insights and 
                    anomaly detection, automated weekly executive reports, predictive analytics for 
                    sales and cash flow.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    🔄 Multi-Department Process Automation
                  </h3>
                  <p className="text-gray-600">
                    End-to-end automation from lead capture through customer onboarding, project 
                    delivery, invoicing, and support. Coordinated workflows across sales, operations, 
                    finance, and customer success teams.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    📝 Intelligent Document Workflows
                  </h3>
                  <p className="text-gray-600">
                    AI-powered contract analysis, automated approval routing, electronic signatures, 
                    archive management. Processes 1000+ documents monthly with 99.5% accuracy.
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
                    How is Enterprise different from Growth tier?
                  </h3>
                  <p className="text-gray-600">
                    Enterprise includes 2x the hours (30 vs 15), unlimited automations, custom AI 
                    training, weekly strategic calls, same-day support, team training, monthly ROI 
                    reports, and integration across unlimited systems. It's designed for organizations 
                    ready for comprehensive transformation.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you work with legacy systems?
                  </h3>
                  <p className="text-gray-600">
                    Yes. We have experience integrating with older systems, mainframes, and custom 
                    applications. If it has an API, database access, or even just exports, we can 
                    usually integrate it.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What if we need more than 30 hours?
                  </h3>
                  <p className="text-gray-600">
                    For large transformation projects, we can scale our team to meet your needs. 
                    Additional hours are available at $150/hour, or we can create a custom enterprise 
                    plan with dedicated resources.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    How do you handle data security and compliance?
                  </h3>
                  <p className="text-gray-600">
                    We follow enterprise security best practices including data encryption, SOC 2 
                    compliant tools where required, proper access controls, and can sign BAAs for 
                    HIPAA compliance. We can work within your security policies and requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What's the minimum commitment?
                  </h3>
                  <p className="text-gray-600">
                    12-month minimum for Enterprise tier given the strategic nature and scope of work. 
                    Most enterprise clients engage for multi-year partnerships as we become deeply 
                    embedded in their operations and continue finding new opportunities.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can you help with change management?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. We include team training, comprehensive documentation, and support 
                    throughout the transition. We can work with your change management team or provide 
                    guidance on rollout strategy to ensure adoption.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-brand text-white rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4">
                Ready for Enterprise Transformation?
              </h2>
              <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Book a discovery call to discuss your transformation goals. We'll create a custom 
                roadmap and ROI projection for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                <a
                  href="https://buy.stripe.com/fZufZa0JR14yajR3xz0Jq03"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-brand-teal bg-white rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                >
                  Start Subscription - $3,000/mo
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
                Secure checkout via Stripe • Cancel anytime after 12-month minimum
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
