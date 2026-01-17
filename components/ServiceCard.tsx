import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon?: string
  link: string
  linkText?: string
}

export default function ServiceCard({
  title,
  description,
  icon,
  link,
  linkText = 'Learn More',
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
      {icon && (
        <div className="mb-4 text-4xl" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <Link
        href={link}
        className="inline-flex items-center text-brand-teal font-semibold hover:text-brand-purple transition-colors"
      >
        {linkText}
        <svg
          className="ml-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  )
}
