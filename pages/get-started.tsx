import Head from 'next/head'
import { useEffect } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function GetStarted() {
  useEffect(() => {
    // Load ClickUp forms embed script
    const script = document.createElement('script')
    script.src = 'https://app-cdn.clickup.com/assets/js/forms-embed/v1.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Get Started - Leverage Lab | AI & Automation Consulting Dallas-Fort Worth</title>
        <meta
          name="description"
          content="Schedule a free discovery call to learn how Leverage Lab can help your Dallas-Fort Worth business save 10-15 hours weekly with AI automation and workflow optimization. Free consultation, no commitment required."
        />
        <meta name="keywords" content="get started automation Dallas, free consultation DFW, AI discovery call Dallas, automation consultation Fort Worth" />
        <meta property="og:title" content="Get Started - Leverage Lab | AI & Automation Consulting" />
        <meta
          property="og:description"
          content="Schedule a free discovery call to learn how we can help your business save time and money with AI automation."
        />
        <meta property="og:url" content="https://leveragelab.co/get-started" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-brand text-white section-padding">
          <div className="container-custom text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let&apos;s Build Your Automation Strategy
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-white/90 leading-relaxed">
              Tell us about your business and we&apos;ll create a custom plan to save you time and money with AI and automation.
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Fill out this quick form and we&apos;ll schedule a discovery call to discuss your specific needs and how we can help.
            </p>
          </div>
        </section>

        {/* 3-Step Process Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal text-white text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Fill Out This Form
                </h3>
                <p className="text-gray-600">
                  Takes just 2-3 minutes. Tell us about your business and what you&apos;re looking to automate.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal text-white text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  We&apos;ll Review & Reach Out
                </h3>
                <p className="text-gray-600">
                  We&apos;ll review your information and get back to you within 24 hours to schedule your call.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-teal text-white text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Get Your Custom Roadmap
                </h3>
                <p className="text-gray-600">
                  On our free discovery call, we&apos;ll create a tailored automation strategy for your business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Embed Section */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900">
                Tell Us About Your Business
              </h2>
              
              {/* ClickUp Form Container */}
              <div className="clickup-form-container bg-white rounded-lg p-4 md:p-6 shadow-inner">
                <iframe 
                  className="clickup-embed clickup-dynamic-height" 
                  src="https://forms.clickup.com/9017751574/f/8cqzy0p-717/Z0T5Z6EQCZ9150R0IZ" 
                  onWheel={() => {}} 
                  width="100%" 
                  height="100%" 
                  style={{ 
                    background: 'transparent', 
                    border: 'none',
                    minHeight: '600px'
                  }}
                  title="Discovery Form"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Trust Signal 1 */}
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl mb-3">✓</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  No Commitment Required
                </h3>
                <p className="text-sm text-gray-600">
                  Explore your options with zero obligation
                </p>
              </div>

              {/* Trust Signal 2 */}
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl mb-3">✓</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Free Discovery Call
                </h3>
                <p className="text-sm text-gray-600">
                  Get expert advice at no cost
                </p>
              </div>

              {/* Trust Signal 3 */}
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl mb-3">✓</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  24-Hour Response
                </h3>
                <p className="text-sm text-gray-600">
                  We respond quickly to every inquiry
                </p>
              </div>

              {/* Trust Signal 4 */}
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl mb-3">✓</div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  No Credit Card Needed
                </h3>
                <p className="text-sm text-gray-600">
                  Just information, no payment required
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Optional Testimonial Section */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              What Our Clients Say
            </h2>
            
            {/* Testimonial Card - Placeholder for now */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm text-center">
              <div className="mb-6">
                <svg 
                  className="w-12 h-12 text-brand-teal mx-auto" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                &quot;Working with Leverage Lab transformed how we operate. We&apos;re saving 15 hours a week and can finally focus on growing the business instead of drowning in admin work.&quot;
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xl font-semibold">
                  CC
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Business Owner</div>
                  <div className="text-sm text-gray-600">Creative Constructors LLC</div>
                </div>
              </div>
            </div>

            {/* Additional reassurance */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Serving businesses across the Dallas-Fort Worth metroplex
              </p>
              <p className="text-sm text-gray-500">
                Dallas • Fort Worth • Plano • Frisco • Arlington • Irving
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
