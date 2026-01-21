import Head from 'next/head'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function WebsiteBuilds() {
  return (
    <>
      <Head>
        <title>Custom Website Development Dallas-Fort Worth | Leverage Lab</title>
        <meta
          name="description"
          content="Professional website development for Dallas-Fort Worth businesses. Modern, fast, SEO-optimized websites built with Next.js and deployed on Vercel. Perfect for DFW contractors, service businesses & retailers."
        />
        <meta name="keywords" content="website development Dallas, web design DFW, Next.js developer Fort Worth, Vercel hosting Dallas, custom website builder DFW" />
        <link rel="canonical" href="https://leveragelab.co/services/website" />
      </Head>

      <Nav />

      <Hero
        title="Modern Website Development"
        subtitle="Lightning-fast, SEO-optimized websites built with Next.js and deployed on Vercel"
        ctaText="Get Your Website"
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
                  Starting at $2,500
                </div>
                <p className="text-gray-600">Complete website + hosting included</p>
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Lightning-fast loading speeds</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                <span>SEO optimized for Google rankings</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span>Mobile-responsive design</span>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Who This Is For
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                <strong>Perfect for businesses</strong> that need a professional, modern website that loads fast, ranks well on Google, and converts visitors into customers.
              </p>
              <ul className="space-y-3">
                {[
                  'Service businesses launching or redesigning their website',
                  'Contractors wanting to showcase their work and get more leads',
                  'Retailers needing an online presence that drives foot traffic',
                  'Startups building their first professional website',
                  'Any business tired of slow, outdated websites',
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
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Custom Website Design
                    </h3>
                    <p className="text-gray-600">
                      Professionally designed website tailored to your brand. Clean, modern design that reflects your business and appeals to your target customers. No templates - every site is custom-built.
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
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Mobile-First Responsive Design
                    </h3>
                    <p className="text-gray-600">
                      Your website will look perfect on phones, tablets, and desktops. With 60%+ of traffic coming from mobile, we ensure your site provides an excellent experience on all devices.
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
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      SEO Optimization
                    </h3>
                    <p className="text-gray-600">
                      Built-in SEO best practices including meta tags, structured data, sitemap, fast loading speeds, and mobile optimization. Help Google understand and rank your website higher.
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
                      Lightning-Fast Performance
                    </h3>
                    <p className="text-gray-600">
                      Built with Next.js and deployed on Vercel's global CDN. Pages load in under 1 second. Fast websites rank better on Google and convert more visitors into customers.
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
                      Contact Forms & Lead Capture
                    </h3>
                    <p className="text-gray-600">
                      Custom contact forms that send submissions directly to your email or CRM. Track leads, capture important information, and never miss an inquiry.
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      SSL Certificate & Security
                    </h3>
                    <p className="text-gray-600">
                      Free SSL certificate (https) included. Your website is secure, which builds trust with visitors and is required by Google for good rankings.
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
                      Analytics & Tracking
                    </h3>
                    <p className="text-gray-600">
                      Google Analytics integration to track visitors, page views, traffic sources, and conversions. Understand how people find and use your website.
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
                      Complete training on updating content, adding pages, and managing your website. Written documentation and video tutorials so you can make simple changes yourself.
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
                  'Custom Design',
                  'Mobile Responsive',
                  'SEO Optimized',
                  'Fast Loading',
                  'Contact Forms',
                  'Google Analytics',
                  'SSL Certificate',
                  'Global CDN',
                  'Custom Domain',
                  'Email Integration',
                  'Social Media Links',
                  'Photo Gallery',
                  'Service Pages',
                  'About Page',
                  'Privacy Policy',
                  'Easy to Update',
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
                    <h3 className="font-semibold text-gray-900 mb-1">Small Business Website (5-7 pages)</h3>
                    <p className="text-sm text-gray-600">Perfect for service businesses, contractors, and local retailers</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-brand-teal">$2,500</p>
                    <p className="text-xs text-gray-500">One-time</p>
                  </div>
                </div>
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Marketing Website (8-12 pages)</h3>
                    <p className="text-sm text-gray-600">For businesses needing more pages, features, and custom functionality</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-brand-teal">$4,500</p>
                    <p className="text-xs text-gray-500">One-time</p>
                  </div>
                </div>
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Vercel Hosting</h3>
                    <p className="text-sm text-gray-600">Lightning-fast global hosting with unlimited bandwidth</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-brand-teal">$20</p>
                    <p className="text-xs text-gray-500">per month</p>
                  </div>
                </div>
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Updates & Support (Optional)</h3>
                    <p className="text-sm text-gray-600">Monthly content updates, technical support, and optimizations</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-brand-teal">$200</p>
                    <p className="text-xs text-gray-500">per month</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Next.js & Vercel */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Why We Use Next.js & Vercel
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Blazing Fast Performance
                  </h3>
                  <p className="text-gray-600 ml-8">
                    Next.js and Vercel deliver lightning-fast page loads. Your website will load in under 1 second from anywhere in the world, keeping visitors engaged and improving Google rankings.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Built for SEO
                  </h3>
                  <p className="text-gray-600 ml-8">
                    Next.js is designed for search engine optimization. Your website will have perfect SEO scores, fast loading times, and all the technical elements Google looks for.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Enterprise-Grade Hosting
                  </h3>
                  <p className="text-gray-600 ml-8">
                    Vercel provides the same hosting infrastructure used by companies like Nike, Airbnb, and Notion. Your website will be reliable, secure, and scalable as your business grows.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                    <svg className="w-6 h-6 text-brand-teal mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Cost-Effective
                  </h3>
                  <p className="text-gray-600 ml-8">
                    At $20/month, Vercel hosting is more affordable than traditional hosting while providing better performance, security, and reliability. No WordPress security updates or plugin conflicts to worry about.
                  </p>
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
                      Kick-off call to understand your business, goals, target audience, branding, content needs, and features. We'll create a sitemap and design direction.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Design & Development (Weeks 2-3)</h3>
                    <p className="text-gray-600">
                      Custom design and development of your website. We'll send you preview links to review progress and provide feedback as we build.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Review & Revisions (Week 4)</h3>
                    <p className="text-gray-600">
                      You review the completed website and request any changes. We'll refine until you're 100% satisfied.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-brand-teal text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Launch & Training (Week 5)</h3>
                    <p className="text-gray-600">
                      Final testing, domain setup, launch to production, training on managing your website, and handoff of all access.
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
                    How long does it take to build a website?
                  </h3>
                  <p className="text-gray-600">
                    Most websites are completed in 4-5 weeks. Smaller websites (5-7 pages) can be done in 3-4 weeks. Timeline depends on content readiness and revision rounds.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can I update the website myself after it's built?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We provide training and documentation so you can make simple content updates yourself. For more complex changes or if you prefer hands-off management, our monthly support plan is available.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Will my website work on mobile phones?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely! Every website we build is mobile-responsive and looks great on phones, tablets, and desktops. We design mobile-first since most visitors come from mobile devices.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    What if I need help after the website launches?
                  </h3>
                  <p className="text-gray-600">
                    We offer optional monthly support ($200/month) that includes content updates, technical support, performance monitoring, and optimizations. You're never locked in - cancel anytime.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Do you provide hosting or do I need to get that separately?
                  </h3>
                  <p className="text-gray-600">
                    We include Vercel hosting for $20/month. This covers hosting on a global CDN, SSL certificate, unlimited bandwidth, and automatic backups. It's the best hosting solution for Next.js websites.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Can you help with content writing and photography?
                  </h3>
                  <p className="text-gray-600">
                    Yes! We can help with copywriting and content strategy. For photography, we typically use your existing photos or help you source professional stock images. Professional photography can be arranged separately.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center bg-gradient-brand text-white rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Launch Your Modern Website?
              </h2>
              <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Get a lightning-fast, SEO-optimized website that converts visitors into customers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-brand-teal bg-white rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                >
                  Get Your Custom Website
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
                Custom-designed • Lightning-fast • SEO-optimized • Mobile-responsive
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
