import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import {Footer} from '../components/Footer'
import {Header} from '../components/Header'

export default function NotFound() {
  const {t} = useTranslation()

  return (
    <div>
      <Head>
        <title>{t('404:not_found')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="max-w-4xl px-4 mx-auto space-y-8 sm:space-y-12 sm:px-8">
        <div className="space-y-2" style={{minHeight: '50vh'}}>
          <span className="text-lg font-medium text-100 sm:text-xl">404</span>
          <h1 className="text-2xl font-bold sm:text-5xl">{t('404:not_found')}</h1>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const namespaces = ['header', 'footer', '404']
  const translations = await serverSideTranslations(locale || 'en', namespaces)

  return {
    props: {
      ...translations,
    },
  }
}
