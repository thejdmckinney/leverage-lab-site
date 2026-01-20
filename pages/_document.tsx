import { Html, Head, Main, NextScript } from 'next/document'

// TODO: Replace placeholder values for address, phone, and other business details
export default function Document() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* JSON-LD Structured Data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Leverage Lab',
              description:
                'AI and workflow automation services for Dallas-Fort Worth businesses. Helping contractors, retailers, and service businesses save 10-15 hours weekly through practical automation solutions.',
              url: 'https://leveragelab.co',
              telephone: '[PHONE_NUMBER]',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '[ADDRESS_LINE1]',
                addressLocality: 'Dallas',
                addressRegion: 'TX',
                postalCode: '[ZIP]',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: '32.7767',
                longitude: '-96.7970',
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Dallas',
                  '@id': 'https://en.wikipedia.org/wiki/Dallas',
                },
                {
                  '@type': 'City',
                  name: 'Fort Worth',
                  '@id': 'https://en.wikipedia.org/wiki/Fort_Worth,_Texas',
                },
                {
                  '@type': 'City',
                  name: 'Plano',
                  '@id': 'https://en.wikipedia.org/wiki/Plano,_Texas',
                },
                {
                  '@type': 'City',
                  name: 'Frisco',
                  '@id': 'https://en.wikipedia.org/wiki/Frisco,_Texas',
                },
                {
                  '@type': 'City',
                  name: 'Arlington',
                  '@id': 'https://en.wikipedia.org/wiki/Arlington,_Texas',
                },
                {
                  '@type': 'City',
                  name: 'Irving',
                  '@id': 'https://en.wikipedia.org/wiki/Irving,_Texas',
                },
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                  ],
                  opens: '09:00',
                  closes: '17:00',
                },
              ],
              sameAs: [
                'https://www.linkedin.com/company/leverage-lab',
                'https://twitter.com/leveragelab',
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
