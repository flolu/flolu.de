import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import {Footer} from '../components/Footer'
import {Header} from '../components/Header'

export default function Home() {
  const {t} = useTranslation()

  return (
    <div>
      <Head>
        <title>Flo</title>
        <meta name="description" content={t('footer:tagline')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-w-xs mx-auto space-y-4">
        <div style={{minHeight: '50vh'}}></div>
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const namespaces = ['header', 'footer']
  const translations = await serverSideTranslations(locale || 'en', namespaces)

  return {
    props: {
      ...translations,
    },
  }
}
