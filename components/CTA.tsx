import Link from 'next/link'

interface CTAProps {
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  variant?: 'gradient' | 'white'
}

export default function CTA({
  title,
  description,
  buttonText = 'Get Started',
  buttonLink = '/get-started',
  variant = 'gradient',
}: CTAProps) {
  const bgClass =
    variant === 'gradient' ? 'bg-gradient-brand text-white' : 'bg-gray-50'
  const buttonClass =
    variant === 'gradient'
      ? 'inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-white/20 backdrop-blur-sm border-2 border-white rounded-lg hover:bg-white hover:text-brand-teal transition-all duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
      : 'bg-gradient-brand text-white hover:shadow-xl'

  return (
    <section className={`${bgClass} section-padding`}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${variant === 'white' ? 'text-gray-900' : ''}`}
          >
            {title}
          </h2>
          <p
            className={`text-lg md:text-xl mb-8 ${variant === 'gradient' ? 'text-white/90' : 'text-gray-600'}`}
          >
            {description}
          </p>
          <Link
            href={buttonLink}
            className={`btn-primary ${buttonClass}`}
            onClick={() => {
              if (window.gtag) {
                window.gtag('event', 'book_demo_click', {
                  event_category: 'engagement',
                  event_label: 'cta_section',
                })
              }
            }}
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </section>
  )
}
