import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

import {Footer} from '../components/Footer'
import {Header} from '../components/Header'
import {AboutMe} from '../components/Home/AboutMe'
import {Activity} from '../components/Home/Activity'
import {GetInTouch} from '../components/Home/GetInTouch'
import {HomeHead} from '../components/Home/Head'
import {Timeline} from '../components/Home/Timeline'

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

      <main className="px-4 mx-auto space-y-32 max-w-7xl">
        <HomeHead />
        <AboutMe />
        <Activity />
        <Timeline />
        <GetInTouch />
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
