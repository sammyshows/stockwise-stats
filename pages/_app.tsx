import '@/styles/globals.css'
import "@/styles/user.css"
import "@/styles/utility.css"
import type { AppProps } from 'next/app'
import StockwiseLayout from '@/components/Stockwise/Layout'
import LetterlockLayout from '@/components/Letterlock/Layout'

export default function App({ Component, pageProps, router }: AppProps) {
  if (router.pathname.startsWith('/stockwise')) {
    return (
      <StockwiseLayout>
        <Component {...pageProps} />
      </StockwiseLayout>
    )
  } else if (router.pathname.startsWith('/letterlock')) {
    return (
      <LetterlockLayout>
        <Component {...pageProps} />
      </LetterlockLayout>
    )
  }

  return <Component {...pageProps} />
}
