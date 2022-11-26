import '@/styles/globals.sass'

import {Inter, Noto_Serif, Roboto_Mono} from '@next/font/google'
import {appWithTranslation} from 'next-i18next'
import Script from 'next/script'
import React from 'react'

import {AppearanceProvider} from '@/contexts/AppearanceContext'

import type {AppProps} from 'next/app'

const inter = Inter({subsets: ['latin'], weight: ['400', '500'], variable: '--font-inter'})
const mono = Roboto_Mono({subsets: ['latin'], variable: '--font-roboto-mono'})
const noto = Noto_Serif({subsets: ['latin'], weight: ['400', '700'], variable: '--font-noto'})

function MyApp({Component, pageProps}: AppProps) {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
  const gaSource = `https://www.googletagmanager.com/gtag/js?id=${gaId}`

  return (
    <>
      <Script strategy="lazyOnload" src={gaSource} />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gaId}');
        `}
      </Script>

      <main className={`${inter.variable} ${mono.variable} ${noto.variable} font-sans`}>
        <AppearanceProvider>
          <Component {...pageProps} />
        </AppearanceProvider>
      </main>
    </>
  )
}
export default appWithTranslation(MyApp)
