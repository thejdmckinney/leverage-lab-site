import Head from 'next/head'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Leverage Lab</title>
        <meta
          name="description"
          content="Privacy Policy for Leverage Lab. Learn how we collect, use, and protect your personal information."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <Nav />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-brand text-white py-12">
          <div className="container-custom text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/90">
              Last Updated: January 19, 2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 bg-white">
          <div className="container-custom max-w-4xl mx-auto">
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700 leading-relaxed mb-0">
                At Leverage Lab, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Fill out contact forms or discovery forms</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Schedule consultations or discovery calls</li>
              <li>Engage our services</li>
              <li>Communicate with us via email or phone</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              This information may include: name, email address, phone number, business name, business address, payment information, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our website, we automatically collect certain information about your device and browsing activity, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Provide Services:</strong> To deliver automation consulting, AI implementation, and workflow optimization services</li>
              <li><strong>Communication:</strong> To respond to inquiries, schedule consultations, and provide customer support</li>
              <li><strong>Payment Processing:</strong> To process payments securely through Stripe and other payment processors</li>
              <li><strong>Marketing:</strong> To send newsletters, promotional materials, and service updates (with your consent)</li>
              <li><strong>Analytics:</strong> To understand how visitors use our website and improve user experience</li>
              <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              <li><strong>Business Operations:</strong> To maintain and improve our services, prevent fraud, and ensure security</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How We Share Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business (e.g., Stripe for payment processing, Google Analytics for website analytics, ClickUp for form management, SendGrid for email communications)</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale of company assets, or acquisition</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website and services integrate with third-party platforms:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Stripe:</strong> For secure payment processing (subject to <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-teal hover:underline">Stripe's Privacy Policy</a>)</li>
              <li><strong>Google Analytics:</strong> For website analytics and tracking</li>
              <li><strong>ClickUp:</strong> For form submissions and project management</li>
              <li><strong>Calendly:</strong> For scheduling consultations</li>
              <li><strong>SendGrid:</strong> For email communications</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              These third parties have their own privacy policies, and we encourage you to review them.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Understand how you interact with our website</li>
              <li>Improve website performance and functionality</li>
              <li>Deliver targeted marketing (with your consent)</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, or disclosure. However, no internet transmission or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Your Rights and Choices</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Object:</strong> Object to certain processing of your information</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              To exercise these rights, please contact us at <a href="mailto:hello@leveragelab.co" className="text-brand-teal hover:underline">hello@leveragelab.co</a>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it promptly.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. California Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your information, and the right to opt-out of the sale of your information. We do not sell personal information. To exercise your CCPA rights, contact us at <a href="mailto:hello@leveragelab.co" className="text-brand-teal hover:underline">hello@leveragelab.co</a>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you are accessing our services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located. By using our services, you consent to this transfer.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of material changes by posting the updated policy on our website with a new "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-gray-900 font-semibold mb-2">Leverage Lab</p>
              <p className="text-gray-700 mb-1">Email: <a href="mailto:hello@leveragelab.co" className="text-brand-teal hover:underline">hello@leveragelab.co</a></p>
              <p className="text-gray-700 mb-1">Location: Dallas-Fort Worth, Texas</p>
              <p className="text-gray-700">Website: <a href="https://leveragelab.co" className="text-brand-teal hover:underline">leveragelab.co</a></p>
            </div>

            <div className="bg-brand-teal/10 rounded-lg p-6 mt-8">
              <p className="text-gray-700 mb-4">
                <strong>Your Privacy Matters:</strong> We are committed to transparency and protecting your personal information. If you have any questions about how we handle your data, please don't hesitate to reach out.
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
