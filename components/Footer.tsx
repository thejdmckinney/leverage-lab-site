import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img
              src="/Leverage-lab-logo-x3.png"
              alt="Leverage Lab"
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4 max-w-md">
              Streamline. Automate. Elevate. Practical AI and workflow
              automation built for contractors, retailers and local service
              businesses.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/leverage-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-aqua transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/leveragelab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-aqua transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/audit"
                  className="text-gray-400 hover:text-brand-aqua transition-colors"
                >
                  Automation Audit
                </Link>
              </li>
              <li>
                <Link
                  href="/services/starter"
                  className="text-gray-400 hover:text-brand-aqua transition-colors"
                >
                  Automation Starter
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-brand-aqua transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-brand-aqua transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-brand-aqua transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-brand-aqua transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>
            &copy; {currentYear} Leverage Lab. All rights reserved. |{' '}
            <a
              href="mailto:hello@leveragelab.co"
              className="hover:text-brand-aqua transition-colors"
            >
              hello@leveragelab.co
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
