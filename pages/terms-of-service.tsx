import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | Leverage Lab</title>
        <meta
          name="description"
          content="Terms of Service for Leverage Lab. Read about our service terms, agreements, and legal policies."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <Nav />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-brand text-white section-padding">
          <div className="container-custom text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-white/90">
              Last Updated: January 19, 2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl mx-auto prose prose-lg">
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700 leading-relaxed mb-0">
                Welcome to Leverage Lab. By accessing our website or engaging our services, you agree to be bound by these Terms of Service. Please read these terms carefully before using our services.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              By accessing or using Leverage Lab's website, services, or platforms (collectively, the "Services"), you agree to comply with and be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use our Services. We reserve the right to modify these Terms at any time, and your continued use of the Services constitutes acceptance of any changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Description of Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Leverage Lab provides AI and automation consulting services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>One-time Automation Audits ($750)</li>
              <li>Monthly retainer services (Starter, Growth, and Enterprise tiers)</li>
              <li>Workflow automation implementation</li>
              <li>AI integration and implementation</li>
              <li>Custom automation solutions</li>
              <li>Business process optimization consulting</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              Specific service details, deliverables, and timelines will be outlined in individual service agreements or statements of work.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Service Agreements</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you engage our services, you will enter into a separate service agreement that includes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Scope of work and deliverables</li>
              <li>Project timelines and milestones</li>
              <li>Payment terms and pricing</li>
              <li>Cancellation and refund policies</li>
              <li>Confidentiality provisions</li>
              <li>Intellectual property rights</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              In the event of a conflict between these Terms and a signed service agreement, the service agreement will prevail.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Payment Terms</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pricing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our current pricing is as follows:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Automation Audit:</strong> $750 (one-time)</li>
              <li><strong>Starter Tier:</strong> $500/month</li>
              <li><strong>Growth Tier:</strong> $1,500/month</li>
              <li><strong>Enterprise Tier:</strong> $3,000/month</li>
              <li><strong>Custom Projects:</strong> Quoted based on scope</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              All prices are in USD and subject to change with 30 days' notice for existing clients.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Payment Processing</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Payments are processed securely through Stripe. By providing payment information, you authorize us to charge your payment method for all fees incurred. You are responsible for maintaining accurate and up-to-date payment information.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Billing and Subscriptions</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Monthly Retainers:</strong> Billed monthly in advance on the same day each month</li>
              <li><strong>One-Time Services:</strong> Payment due upon booking or as specified in service agreement</li>
              <li><strong>Late Payments:</strong> Services may be suspended for accounts more than 7 days past due</li>
              <li><strong>Failed Payments:</strong> You will be notified of failed payments and given 5 business days to update payment information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Refund Policy</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Automation Audit:</strong> Full refund if canceled at least 48 hours before scheduled discovery call</li>
              <li><strong>Monthly Retainers:</strong> No refunds for partial months; cancellation takes effect at the end of the current billing cycle</li>
              <li><strong>Custom Projects:</strong> Refund terms specified in individual service agreements</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cancellation and Termination</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Client Cancellation</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Monthly Retainers:</strong> You may cancel at any time with 30 days' written notice. Services will continue through the end of the current billing cycle.</li>
              <li><strong>Scheduled Consultations:</strong> Cancel at least 48 hours in advance for a full refund</li>
              <li><strong>No-Shows:</strong> No refunds for missed appointments without 48-hour notice</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Leverage Lab Termination Rights</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to terminate or suspend services immediately, without prior notice or liability, for any reason, including but not limited to: breach of Terms, non-payment, abusive behavior, or illegal activity.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Client Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To ensure successful service delivery, clients are responsible for:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Providing accurate and complete information about business operations, workflows, and systems</li>
              <li>Providing timely access to necessary tools, platforms, and credentials (with appropriate security measures)</li>
              <li>Responding to requests for information within reasonable timeframes</li>
              <li>Reviewing and providing feedback on deliverables in a timely manner</li>
              <li>Maintaining backup copies of all data and systems</li>
              <li>Testing and validating implemented automations before relying on them for critical business operations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Client Ownership</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Upon full payment, you own all custom automations, workflows, and deliverables created specifically for your business. This includes automation configurations, custom scripts, and process documentation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Leverage Lab Ownership</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We retain ownership of all pre-existing intellectual property, methodologies, frameworks, templates, and general-purpose tools used in providing services. We also retain the right to use anonymized insights and learnings from client engagements to improve our services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Third-Party Tools</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Many of our implementations use third-party platforms (e.g., Zapier, Make, n8n, ChatGPT API). These tools are subject to their respective terms of service and licensing agreements. You are responsible for obtaining and maintaining necessary licenses for any third-party software or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Confidentiality</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We respect the confidentiality of your business information. All proprietary information, business processes, data, and strategic plans shared with us during our engagement will be kept confidential and not disclosed to third parties without your written consent, except as required by law or as necessary to provide services (e.g., sharing information with subcontractors under NDA).
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              For sensitive projects, we are happy to sign a separate Non-Disclosure Agreement (NDA) upon request.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Warranties and Disclaimers</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Service Warranty</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We warrant that services will be performed in a professional and workmanlike manner consistent with industry standards. If services do not meet this standard, we will re-perform the work at no additional charge.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Disclaimers</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.</strong> We specifically disclaim:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Specific Results:</strong> While we aim to save you time and money, we do not guarantee specific time savings, cost reductions, or ROI</li>
              <li><strong>Third-Party Services:</strong> We are not responsible for the performance, availability, or changes to third-party platforms and services</li>
              <li><strong>Data Loss:</strong> While we take precautions, we are not responsible for data loss. You are responsible for maintaining backups</li>
              <li><strong>System Compatibility:</strong> We cannot guarantee that automations will work with all future versions of third-party software</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, LEVERAGE LAB'S TOTAL LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THESE TERMS OR OUR SERVICES SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR SERVICES IN THE 12 MONTHS PRECEDING THE CLAIM.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              IN NO EVENT SHALL LEVERAGE LAB BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOST PROFITS, LOST REVENUE, LOST DATA, OR BUSINESS INTERRUPTION, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              You agree to indemnify, defend, and hold harmless Leverage Lab and its owners, employees, and contractors from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from: (a) your use of our Services; (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) any misuse of deliverables or automations we provide.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Website Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When using our website, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Provide accurate and complete information in all forms and communications</li>
              <li>Not use the website for any unlawful purpose or to violate any laws</li>
              <li>Not attempt to gain unauthorized access to any systems or networks</li>
              <li>Not transmit any viruses, malware, or malicious code</li>
              <li>Not scrape, spider, or harvest content from the website</li>
              <li>Not impersonate any person or entity or misrepresent your affiliation</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Your use of our Services is also governed by our <Link href="/privacy-policy" className="text-brand-teal hover:underline">Privacy Policy</Link>, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand how we collect, use, and protect your information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">14. Dispute Resolution</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Informal Resolution</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have a dispute with Leverage Lab, please contact us at <a href="mailto:hello@leveragelab.co" className="text-brand-teal hover:underline">hello@leveragelab.co</a> to attempt to resolve the issue informally before pursuing formal legal action.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Governing Law</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              These Terms shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Arbitration</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Any dispute arising from these Terms or our Services shall be resolved through binding arbitration in Dallas County, Texas, in accordance with the rules of the American Arbitration Association. You agree to waive your right to a jury trial and to participate in class-action lawsuits.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">15. General Provisions</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Entire Agreement</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              These Terms, together with any signed service agreements and our Privacy Policy, constitute the entire agreement between you and Leverage Lab regarding the Services.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Severability</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Waiver</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our failure to enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Assignment</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You may not assign or transfer these Terms or your rights without our prior written consent. We may assign these Terms without restriction.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Force Majeure</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, labor disputes, or internet service failures.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">16. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-gray-900 font-semibold mb-2">Leverage Lab</p>
              <p className="text-gray-700 mb-1">Email: <a href="mailto:hello@leveragelab.co" className="text-brand-teal hover:underline">hello@leveragelab.co</a></p>
              <p className="text-gray-700 mb-1">Location: Dallas-Fort Worth, Texas</p>
              <p className="text-gray-700">Website: <a href="https://leveragelab.co" className="text-brand-teal hover:underline">leveragelab.co</a></p>
            </div>

            <div className="bg-brand-teal/10 rounded-lg p-6 mt-8">
              <p className="text-gray-700 mb-4">
                <strong>Questions About Our Terms?</strong> We're here to help clarify any questions you may have about these terms or our services. Don't hesitate to reach out.
              </p>
              <Link href="/contact" className="text-brand-teal hover:underline font-semibold">
                Contact Us →
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
