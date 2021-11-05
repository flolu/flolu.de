import '@/styles/globals.sass'

import {appWithTranslation} from 'next-i18next'
import Script from 'next/script'
import React from 'react'

import {AppearanceProvider} from '@/contexts/AppearanceContext'

import type {AppProps} from 'next/app'

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

      <AppearanceProvider>
        <Component {...pageProps} />
      </AppearanceProvider>
    </>
  )
}
export default appWithTranslation(MyApp)
