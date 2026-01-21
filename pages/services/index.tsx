import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Services() {
  return (
    <>
      <Head>
        <title>Automation Services & Pricing Dallas-Fort Worth | Leverage Lab</title>
        <meta
          name="description"
          content="Transparent automation services pricing for Dallas-Fort Worth businesses. One-time $750 audit or monthly retainer ($500-$3,000). AI implementation, workflow automation, and process optimization for DFW small businesses and enterprises."
        />
        <meta name="keywords" content="automation services pricing Dallas, AI consulting rates DFW, automation packages Fort Worth, business automation cost Dallas, workflow automation pricing DFW" />
        <link rel="canonical" href="https://leveragelab.co/services" />
        <meta property="og:title" content="Automation Services & Pricing Dallas-Fort Worth | Leverage Lab" />
        <meta
          property="og:description"
          content="Clear pricing for Dallas-Fort Worth automation services. $750 audit or monthly retainer packages starting at $500. Serving the entire DFW metroplex."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://leveragelab.co/og-image.svg" />
        <meta property="og:url" content="https://leveragelab.co/services" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-brand text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Services Built for Your Growth Stage
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Whether you're just starting with automation or ready for
              enterprise transformation, we have a solution that fits.
            </p>
          </div>
        </section>

        {/* One-Time Service */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Start with an Audit
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Not sure where to begin? Our Automation Audit identifies your
                highest-impact opportunities.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-brand-teal">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Automation Audit
                    </h3>
                    <p className="text-gray-600">One-time engagement</p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-brand-teal">
                      $750
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    What's Included:
                  </h4>
                  <ul className="space-y-2">
                    {[
                      '60-90 minute discovery call/walkthrough',
                      'Documentation of your tech stack and workflows',
                      '5-10 automation opportunities ranked by ROI',
                      'Written report with recommendations',
                      '30-minute follow-up call',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-brand-teal mr-3 flex-shrink-0 mt-0.5"
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
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <Link
                    href="/services/audit"
                    className="btn-secondary flex-1 text-center text-sm py-2"
                  >
                    Learn More
                  </Link>
                  <a
                    href="https://buy.stripe.com/00w3co3W39B40Jh2tv0Jq00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 text-center text-sm py-2"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly Retainer Services */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Monthly Retainer Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ongoing support and implementation tailored to your business
                size and automation needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Starter Tier */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Starter
                  </h3>
                  <div className="text-4xl font-bold text-brand-teal mb-2">
                    $500
                  </div>
                  <p className="text-gray-600">per month</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Up to 5 hours/month
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    BEST FOR:
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    Small businesses (1-10 employees) just starting with
                    automation
                  </p>

                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    KEY FEATURES:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      '2-3 simple automations',
                      'Monthly check-in call',
                      '48hr email/Slack support',
                      'Template library access',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg
                          className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0 mt-0.5"
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
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <Link
                    href="/services/starter"
                    className="btn-secondary flex-1 text-center text-sm py-2"
                  >
                    Learn More
                  </Link>
                  <a
                    href="https://buy.stripe.com/00w6oA8cjeVobnV8RT0Jq01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 text-center text-sm py-2"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* Growth Tier - Most Popular */}
              <div className="bg-white rounded-xl shadow-xl p-8 border-2 border-brand-teal relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand-teal text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>

                <div className="text-center mb-6 mt-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Growth
                  </h3>
                  <div className="text-4xl font-bold text-brand-teal mb-2">
                    $1,500
                  </div>
                  <p className="text-gray-600">per month</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Up to 15 hours/month
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    BEST FOR:
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    Growing businesses (10-50 employees) ready for serious
                    operational improvements
                  </p>

                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    KEY FEATURES:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      '5-8 complex automations',
                      'AI implementation included',
                      'Bi-weekly strategy calls',
                      '24hr priority support',
                      'Quarterly optimization review',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg
                          className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0 mt-0.5"
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
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <Link
                    href="/services/growth"
                    className="btn-secondary flex-1 text-center text-sm py-2"
                  >
                    Learn More
                  </Link>
                  <a
                    href="https://buy.stripe.com/bJe5kw8cjeVo2Rpd890Jq02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 text-center text-sm py-2"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* Enterprise Tier */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Enterprise
                  </h3>
                  <div className="text-4xl font-bold text-brand-teal mb-2">
                    $3,000
                  </div>
                  <p className="text-gray-600">per month</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Up to 30 hours/month
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    BEST FOR:
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    Established businesses (50+ employees) or companies
                    undergoing digital transformation
                  </p>

                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    KEY FEATURES:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      'Unlimited automations',
                      'Custom AI model training',
                      'Weekly strategy calls',
                      'Same-day Slack support',
                      'Team training included',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg
                          className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0 mt-0.5"
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
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <Link
                    href="/services/enterprise"
                    className="btn-secondary flex-1 text-center text-sm py-2"
                  >
                    Learn More
                  </Link>
                  <a
                    href="https://buy.stripe.com/fZufZa0JR14yajR3xz0Jq03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1 text-center text-sm py-2"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Specialized Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Custom-built solutions for specific business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Chatbot Builds */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="mb-6">
                  <div className="bg-brand-teal/10 rounded-lg p-3 w-fit mb-4">
                    <svg
                      className="w-8 h-8 text-brand-teal"
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Chatbot Builds
                  </h3>
                  <p className="text-gray-600 mb-4">
                    AI-powered chatbots for 24/7 customer support and lead generation, powered by Tawk.to
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">Starting at</span>
                    <div className="text-3xl font-bold text-brand-teal">
                      $1,500
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    One-time setup + optional monthly support
                  </p>

                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    KEY FEATURES:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      'Custom chatbot development',
                      'AI training on your business',
                      'Website integration',
                      'Lead capture & analytics',
                      '24/7 automated support',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg
                          className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0 mt-0.5"
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
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <Link
                    href="/services/chatbot"
                    className="btn-secondary flex-1 text-center text-sm py-2"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-primary flex-1 text-center text-sm py-2"
                  >
                    Get Started
                  </Link>
                </div>
              </div>

              {/* Website Builds */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="mb-6">
                  <div className="bg-brand-teal/10 rounded-lg p-3 w-fit mb-4">
                    <svg
                      className="w-8 h-8 text-brand-teal"
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
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Website Builds
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Modern, lightning-fast websites built with Next.js and deployed on Vercel
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">Starting at</span>
                    <div className="text-3xl font-bold text-brand-teal">
                      $2,500
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">
                    Complete website + hosting included
                  </p>

                  <p className="text-sm font-semibold text-gray-900 mb-3">
                    KEY FEATURES:
                  </p>
                  <ul className="space-y-2 mb-6">
                    {[
                      'Custom website design',
                      'Mobile-responsive',
                      'SEO optimized',
                      'Lightning-fast loading',
                      'Contact forms & analytics',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg
                          className="w-4 h-4 text-brand-teal mr-2 flex-shrink-0 mt-0.5"
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
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-2">
                  <Link
                    href="/services/website"
                    className="btn-secondary flex-1 text-center text-sm py-2"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-primary flex-1 text-center text-sm py-2"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Monthly Retainer Comparison */}
        <section className="section-padding">
          <div className="container-custom">
            {/* Comparison Table */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Compare Monthly Retainer Tiers
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-4 px-4 font-semibold text-gray-900">
                        Feature
                      </th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">
                        Starter
                      </th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900 bg-brand-teal/5">
                        Growth
                      </th>
                      <th className="text-center py-4 px-4 font-semibold text-gray-900">
                        Enterprise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: 'Monthly Hours',
                        starter: '5',
                        growth: '15',
                        enterprise: '30',
                      },
                      {
                        feature: 'Automations/Month',
                        starter: '2-3',
                        growth: '5-8',
                        enterprise: 'Unlimited',
                      },
                      {
                        feature: 'AI Implementation',
                        starter: false,
                        growth: true,
                        enterprise: true,
                      },
                      {
                        feature: 'Strategy Calls',
                        starter: 'Monthly',
                        growth: 'Bi-weekly',
                        enterprise: 'Weekly',
                      },
                      {
                        feature: 'Support Response',
                        starter: '48 hours',
                        growth: '24 hours',
                        enterprise: 'Same day',
                      },
                      {
                        feature: 'Custom AI Training',
                        starter: false,
                        growth: false,
                        enterprise: true,
                      },
                      {
                        feature: 'Team Training',
                        starter: false,
                        growth: false,
                        enterprise: true,
                      },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-4 text-gray-700">
                          {row.feature}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof row.starter === 'boolean' ? (
                            row.starter ? (
                              <svg
                                className="w-5 h-5 text-brand-teal mx-auto"
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
                            ) : (
                              <span className="text-gray-400">—</span>
                            )
                          ) : (
                            <span className="text-gray-700">{row.starter}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center bg-brand-teal/5">
                          {typeof row.growth === 'boolean' ? (
                            row.growth ? (
                              <svg
                                className="w-5 h-5 text-brand-teal mx-auto"
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
                            ) : (
                              <span className="text-gray-400">—</span>
                            )
                          ) : (
                            <span className="text-gray-700">{row.growth}</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          {typeof row.enterprise === 'boolean' ? (
                            row.enterprise ? (
                              <svg
                                className="w-5 h-5 text-brand-teal mx-auto"
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
                            ) : (
                              <span className="text-gray-400">—</span>
                            )
                          ) : (
                            <span className="text-gray-700">
                              {row.enterprise}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  💎 <strong>No hidden fees.</strong> All pricing includes
                  tools, support, and monthly check-ins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-brand text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not Sure Which Tier is Right for You?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book a free 20-minute discovery call and we'll help you find the
              perfect fit for your business.
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg hover:bg-white hover:text-brand-teal transition-all duration-200 shadow-lg"
            >
              Schedule Discovery Call
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
