import Head from 'next/head'
import { useEffect } from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

// TODO: Replace [CALENDLY_EMBED_URL] with your actual Calendly URL
export default function Contact() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Contact Dallas-Fort Worth Automation Experts | Leverage Lab</title>
        <meta
          name="description"
          content="Contact Leverage Lab for AI and automation services in Dallas-Fort Worth. Schedule a free 30-minute discovery call to discuss workflow automation for your DFW business. Serving Dallas, Fort Worth, Plano, Frisco & surrounding areas."
        />
        <meta name="keywords" content="contact automation consultant Dallas, AI consultant DFW, automation services Dallas contact, workflow automation Fort Worth, business automation Dallas" />
        <meta property="og:title" content="Contact Dallas-Fort Worth Automation Experts | Leverage Lab" />
        <meta
          property="og:description"
          content="Schedule a free discovery call or contact us to discuss your automation needs."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://leveragelab.co/contact" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />

      <main>
        <Hero
          title="Let's Talk Automation"
          subtitle="Schedule a free 30-minute discovery call or send us a message. We'll discuss your specific needs and show you exactly how automation can save you time and grow your business."
          ctaText="Schedule Free Discovery Call"
          ctaLink="#calendly"
          showSecondary={false}
        />

        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calendly Widget */}
              <div>
                <h2
                  id="calendly"
                  className="text-3xl font-bold mb-6 text-gray-900"
                >
                  Schedule a Free 30-Minute Discovery Call
                </h2>
                <p className="text-gray-600 mb-6">
                  Choose a time that works for you. We'll discuss your current workflows, 
                  biggest challenges, and show you specific automation opportunities for your business. 
                  This is a completely free consultation with no obligation.
                </p>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/jeremy-leveragelab/discovery-call-leverage-lab"
                  style={{ minWidth: '320px', height: '630px' }}
                ></div>
              </div>

              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              What to Expect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl mb-3">📋</div>
                <h3 className="font-bold text-lg mb-2">Quick Assessment</h3>
                <p className="text-gray-600">
                  We'll ask about your current processes and biggest time
                  drains
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">💡</div>
                <h3 className="font-bold text-lg mb-2">Specific Examples</h3>
                <p className="text-gray-600">
                  See exactly how automation would work for your business
                </p>
              </div>
              <div>
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-bold text-lg mb-2">Clear Next Steps</h3>
                <p className="text-gray-600">
                  Get a recommendation on the best approach for your needs
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
