import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-32 md:h-40 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/Leverage-lab-logo-x3.png"
              alt="Leverage Lab"
              className="h-24 w-auto md:h-32"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-brand-teal font-medium transition-colors"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-brand-teal font-medium transition-colors">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/services"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-teal transition-colors border-b border-gray-100 font-semibold"
                >
                  All Services
                </Link>
                <Link
                  href="/services/audit"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-teal transition-colors"
                >
                  Automation Audit
                </Link>
                <Link
                  href="/services/starter"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-teal transition-colors"
                >
                  Starter Tier
                </Link>
                <Link
                  href="/services/growth"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-teal transition-colors"
                >
                  Growth Tier
                </Link>
                <Link
                  href="/services/enterprise"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-teal transition-colors"
                >
                  Enterprise Tier
                </Link>
              </div>
            </div>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-brand-teal font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/get-started"
              className="btn-primary"
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'get_started_click', {
                    event_category: 'engagement',
                    event_label: 'nav_cta',
                  })
                }
              }}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-brand-teal font-medium transition-colors px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <div className="text-gray-500 text-xs font-semibold uppercase px-3 py-2">
                Services
              </div>
              <Link
                href="/services"
                className="text-gray-700 hover:text-brand-teal font-medium transition-colors px-3 py-2 pl-6"
                onClick={() => setIsOpen(false)}
              >
                All Services
              </Link>
              <Link
                href="/services/audit"
                className="text-gray-700 hover:text-brand-teal font-medium transition-colors px-3 py-2 pl-6"
                onClick={() => setIsOpen(false)}
              >
                Automation Audit
              </Link>
              <Link
                href="/services/starter"
                className="text-gray-700 hover:text-brand-teal font-medium transition-colors px-3 py-2 pl-6"
                onClick={() => setIsOpen(false)}
              >
                Starter Tier
              </Link>
              <Link
                href="/services/growth"
                className="text-gray-700 hover:text-brand-teal font-medium transition-colors px-3 py-2 pl-6"
                onClick={() => setIsOpen(false)}
              >
                Growth Tier
              </Link>
              <Link
                href="/services/enterprise"
                className="text-gray-700 hover:text-brand-teal font-medium transition-colors px-3 py-2 pl-6"
                onClick={() => setIsOpen(false)}
              >
                Enterprise Tier
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-brand-teal font-medium transition-colors px-3 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/get-started"
                className="btn-primary mx-3"
                onClick={() => {
                  setIsOpen(false)
                  if (window.gtag) {
                    window.gtag('event', 'get_started_click', {
                      event_category: 'engagement',
                      event_label: 'mobile_nav_cta',
                    })
                  }
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
