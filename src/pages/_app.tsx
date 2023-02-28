import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import RootLayout from '../components/layouts/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  )
}
