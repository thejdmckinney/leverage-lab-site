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
        <title>Contact Us | Leverage Lab</title>
        <meta
          name="description"
          content="Book a free 20-minute demo or get in touch to discuss your automation needs. We're here to help streamline your business operations."
        />
        <meta property="og:title" content="Contact Us | Leverage Lab" />
        <meta
          property="og:description"
          content="Book a demo or contact us to discuss your automation needs."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://leveragelab.co/contact" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />

      <main>
        <Hero
          title="Let's Talk Automation"
          subtitle="Book a 20-minute demo or send us a message. We'll show you exactly how automation can save you time and grow your business."
          ctaText="Scroll to Book Demo"
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
                  Book a 20-Minute Demo
                </h2>
                <p className="text-gray-600 mb-6">
                  Choose a time that works for you. We'll walk through your
                  current workflows and show you specific automation
                  opportunities for your business.
                </p>
                <div
                  className="calendly-inline-widget"
                  data-url={
                    process.env.CALENDLY_EMBED_URL ||
                    'https://calendly.com/your-calendly-username/20min'
                  }
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
