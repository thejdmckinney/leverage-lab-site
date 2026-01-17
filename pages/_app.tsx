import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '@/styles/globals.css'

// TODO: Replace [NEXT_PUBLIC_GA_MEASUREMENT_ID] with your actual GA4 Measurement ID
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    const handleRouteChange = (url: string) => {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
      })
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events, GA_MEASUREMENT_ID])

  return <Component {...pageProps} />
}
