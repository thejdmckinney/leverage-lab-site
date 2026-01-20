import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ServiceCard from '@/components/ServiceCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>AI & Automation Services Dallas-Fort Worth | Leverage Lab</title>
        <meta
          name="description"
          content="Professional AI and workflow automation services in Dallas-Fort Worth (DFW). Save 10-15 hours weekly with proven automation solutions for contractors, retailers, and service businesses. Serving Dallas, Fort Worth, Plano, Frisco & DFW metroplex."
        />
        <meta name="keywords" content="automation services Dallas, AI consulting DFW, workflow automation Fort Worth, business automation Dallas, AI services Dallas-Fort Worth, process automation DFW" />
        <meta
          property="og:title"
          content="AI & Automation Services Dallas-Fort Worth | Leverage Lab"
        />
        <meta
          property="og:description"
          content="Professional AI and workflow automation services in Dallas-Fort Worth. Save 10-15 hours weekly with proven automation solutions. Serving the entire DFW metroplex."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://leveragelab.co" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Leverage Lab | Streamline. Automate. Elevate."
        />
        <meta
          name="twitter:description"
          content="Practical AI and workflow automation for local businesses."
        />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      <Nav />

      <main>
        <Hero
          title="Streamline. Automate. Elevate."
          subtitle="Practical AI and workflow automation that saves hours of admin every week — built for contractors, retailers and local service businesses."
        />

        {/* Problem Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Your Time is Too Valuable for Manual Processes
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Running a business shouldn't mean spending hours on repetitive
                tasks. Quote follow-ups, data entry, scheduling, inventory
                updates — these drain your energy and keep you from growing
                your business.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              How We Help You Automate
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-brand-teal text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Discover
                </h3>
                <p className="text-gray-600">
                  We analyze your current workflows and identify opportunities
                  where automation can save you time and reduce errors.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-aqua text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Build</h3>
                <p className="text-gray-600">
                  We create custom automation solutions tailored to your
                  business — no complicated software or technical knowledge
                  required.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-brand-purple text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  Elevate
                </h3>
                <p className="text-gray-600">
                  Watch your business run smoother while you focus on what
                  matters: serving customers and growing revenue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Snapshot */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              From one-time audits to comprehensive monthly retainers, we have a solution for every business size and automation need.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
              <ServiceCard
                title="Automation Audit"
                description="Start with a comprehensive analysis. Identify 5-10 automation opportunities ranked by ROI. One-time engagement."
                icon="🔍"
                link="/services/audit"
                linkText="Learn More →"
              />
              <ServiceCard
                title="Monthly Retainers"
                description="Ongoing automation and AI support from $500-$3,000/month. Starter, Growth, and Enterprise tiers available."
                icon="�"
                link="/services"
                linkText="View All Tiers →"
              />
              <ServiceCard
                title="Custom Solutions"
                description="Need something specific? We offer custom AI implementations, integrations, and enterprise transformation projects."
                icon="⚙️"
                link="/get-started"
                linkText="Let's Talk →"
              />
            </div>
            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center text-brand-teal hover:text-brand-aqua font-semibold text-lg transition-colors"
              >
                View All Services & Pricing
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Real Results from Real Businesses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CaseStudyCard
                company="Local HVAC Company"
                industry="Home Services"
                problem="Manual quote follow-ups taking 10+ hours per week"
                solution="Automated email sequences and SMS reminders based on customer behavior"
                result="90% reduction in follow-up time, 35% increase in quote conversion"
                timeSaved="9 hrs/week"
              />
              <CaseStudyCard
                company="Retail Boutique"
                industry="Retail"
                problem="Inventory updates and vendor orders done manually across multiple systems"
                solution="Automated inventory sync and low-stock alerts with vendor ordering"
                result="Zero stockouts, 70% faster reordering process"
                timeSaved="6 hrs/week"
              />
              <CaseStudyCard
                company="General Contractor"
                industry="Construction"
                problem="Project updates and client communications scattered across email, text, and phone"
                solution="Centralized client portal with automated project updates and milestone notifications"
                result="50% fewer status update calls, higher client satisfaction scores"
                timeSaved="8 hrs/week"
              />
            </div>
          </div>
        </section>

        <CTA
          title="Ready to Reclaim Your Time?"
          description="Book a 20-minute demo to see how automation can transform your business operations."
          buttonText="Book a Free Demo"
        />
      </main>

      <Footer />
    </>
  )
}
