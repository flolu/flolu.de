import '../styles/globals.sass'

import {appWithTranslation} from 'next-i18next'

import {AppearanceProvider} from '../contexts/AppearanceContext'

import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <AppearanceProvider>
      <Component {...pageProps} />
    </AppearanceProvider>
  )
}
export default appWithTranslation(MyApp)
