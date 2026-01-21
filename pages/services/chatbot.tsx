import Head from 'next/head'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function ChatbotBuilds() {
  return (
    <>
      <Head>
        <title>Custom Chatbot Development Dallas-Fort Worth | Leverage Lab</title>
        <meta
          name="description"
          content="Professional AI-powered chatbot development for Dallas-Fort Worth businesses. Custom chatbots built with Tawk.to for 24/7 customer support, lead generation, and sales automation. Serving DFW contractors, retailers & service businesses."
        />
        <meta name="keywords" content="chatbot development Dallas, AI chatbot DFW, customer service automation Fort Worth, chatbot builder Dallas, tawk.to integration DFW" />
        <link rel="canonical" href="https://leveragelab.co/services/chatbot" />
      </Head>

      <Nav />

      <Hero
        title="AI-Powered Chatbot Builds"
        subtitle="24/7 automated customer support and lead generation with custom chatbots powered by Tawk.to"
        ctaText="Get Your Chatbot"
        ctaLink="/contact"
        showSecondary={false}
      />

      <main>
        {/* Overview Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div>
                <div className="text-5xl font-bold text-brand-teal mb-2">
                  Starting at $1,500
                </div>
                <p className="text-gray-600">One-time setup + optional monthly support</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="btn-primary inline-block px-8 py-4 text-center"
                >
                  Get Started
                </Link>
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
                <span>100% custom-built for your business</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Live in 2-3 weeks</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 automated support</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Who This Is For
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                <strong>Perfect for businesses</strong> that want to provide instant customer support, capture leads 24/7, and reduce support workload.
              </p>
              <ul className="space-y-3">
                {[
                  'Service businesses that get repetitive customer questions',
                  'E-commerce stores needing 24/7 customer support',
                  'Contractors wanting to qualify leads automatically',
                  'Retailers looking to boost online engagement and sales',
                  'Any business wanting to reduce email and phone volume',
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
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Custom Chatbot Development
                    </h3>
                    <p className="text-gray-600">
                      Fully customized chatbot built on Tawk.to platform with your branding, conversation flows, and business logic. Handles FAQs, lead qualification, appointment booking, and more.
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      AI Training & Knowledge Base
                    </h3>
                    <p className="text-gray-600">
                      We train your chatbot on your business information, products, services, and FAQs. It learns your brand voice and provides accurate, helpful responses to customer inquiries.
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Website Integration
                    </h3>
                    <p className="text-gray-600">
                      Seamless integration with your existing website. Widget appears on all pages (or specific pages you choose), mobile-responsive, and matches your brand design.
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
                      Analytics & Reporting Dashboard
                    </h3>
                    <p className="text-gray-600">
                      Track conversations, leads captured, most asked questions, and customer satisfaction. See exactly how your chatbot is performing and continuously improve it.
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
                      CRM & Tool Integrations
                    </h3>
                    <p className="text-gray-600">
                      Connect your chatbot to your CRM, email marketing, calendar, or other business tools. Automatically sync leads, schedule appointments, and trigger workflows.
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
                      Training & Documentation
                    </h3>
                    <p className="text-gray-600">
                      Complete training on managing your chatbot, updating responses, viewing reports, and handling handoffs to human support when needed. Includes written documentation and video tutorials.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  '24/7 Availability',
                  'Lead Capture Forms',
                  'Appointment Booking',
                  'Multi-language Support',
                  'Mobile Responsive',
                  'Custom Branding',
                  'Visitor Tracking',
                  'Chat Transcripts',
                  'Email Notifications',
                  'Canned Responses',
                  'File Sharing',
                  'Typing Indicators',
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <svg
                      className="w-5 h-5 text-brand-teal mr-2 flex-shrink-0"
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
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Details */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Investment & Pricing
              </h2>
              <div className="space-y-4">
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">One-Time Setup</h3>
                    <p className="text-sm text-gray-600">Custom chatbot development, training, integration, and launch</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-brand-teal">$1,500</p>
                    <p className="text-xs text-gray-500">Starting price</p>
                  </div>
                </div>
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Tawk.to Platform (Optional)</h3>
                    <p className="text-sm text-gray-600">Free forever or upgrade to paid plans for advanced features</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-brand-teal">Free</p>
                    <p className="text-xs text-gray-500">or $29-$79/mo</p>
                  </div>
                </div>
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ongoing Support (Optional)</h3>
                    <p className="text-sm text-gray-600">Monthly updates, optimization, and technical support</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-brand-teal">$200</p>
                    <p className="text-xs text-gray-500">per month</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Project Timeline
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-brand-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Discovery & Planning (Week 1)</h3>
                    <p className="text-gray-600">
                      Kick-off call to understand your business, gather content, define conversation flows, and plan integrations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Build & Training (Week 2)</h3>
                    <p className="text-gray-600">
                      Chatbot development, AI training on your business knowledge, custom branding, and integration setup.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Testing & Launch (Week 3)</h3>
                    <p className="text-gray-600">
                      Internal testing, your team review and feedback, final adjustments, training session, and go-live.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can the chatbot handle complex questions?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We train the AI on your specific business information so it can handle most customer questions accurately. For questions it can't answer, it seamlessly hands off to your team with full conversation context.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What if I need to update the chatbot responses?
                  </h3>
                  <p className="text-gray-600">
                    You'll have full access to update responses, add new information, and modify conversation flows. We provide training and documentation. Optional monthly support is available if you prefer hands-off management.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I see conversations and capture leads?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely! You'll get access to a dashboard showing all conversations, captured leads with contact info, and analytics. Leads can be exported or automatically sent to your CRM.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Will this work with my existing website?
                  </h3>
                  <p className="text-gray-600">
                    Yes! Tawk.to works with any website platform - WordPress, Shopify, Wix, custom sites, etc. We handle all the technical integration. It's mobile-responsive and won't slow down your site.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What's included in the $1,500 setup fee?
                  </h3>
                  <p className="text-gray-600">
                    Everything needed to launch: custom chatbot development, AI training, branding, website integration, CRM connections, testing, training for your team, and documentation. No hidden costs.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center bg-gradient-brand text-white rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Provide 24/7 Customer Support?
              </h2>
              <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Start capturing more leads and reducing support workload with a custom AI chatbot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-brand-teal bg-white rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                >
                  Get Your Custom Chatbot
                </Link>
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
                Custom-built for your business • Live in 2-3 weeks
              </p>
              <p className="text-white/80 mt-4">
                Or view our{' '}
                <Link href="/services" className="underline hover:text-white">
                  other services
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
