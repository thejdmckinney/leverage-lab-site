import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  ctaText?: string
  ctaLink?: string
  showSecondary?: boolean
  secondaryText?: string
  secondaryLink?: string
}

export default function Hero({
  title,
  subtitle,
  ctaText = 'Book a Demo',
  ctaLink = '/get-started',
  showSecondary = true,
  secondaryText = 'Learn More',
  secondaryLink = '/services/audit',
}: HeroProps) {
  return (
    <section className="relative bg-gradient-brand text-white section-padding overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center"></div>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-white/90 leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={ctaLink}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg hover:bg-white hover:text-brand-teal transition-all duration-200 w-full sm:w-auto shadow-lg"
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'book_demo_click', {
                    event_category: 'engagement',
                    event_label: 'hero_cta',
                  })
                }
              }}
            >
              {ctaText}
            </Link>
            {showSecondary && (
              <Link
                href={secondaryLink}
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white border-2 border-white rounded-lg hover:bg-white hover:text-brand-teal transition-all duration-200 w-full sm:w-auto"
              >
                {secondaryText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
