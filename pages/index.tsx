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

export default function Home(props: any) {
  const {t} = useTranslation()

  return (
    <div>
      <Head>
        <title>Florian Ludewig</title>
        <meta name="description" content={t('footer:tagline')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header spacer={false} />
      <div className="h-24 md:hidden"></div>

      <main className="mb-8 space-y-16 sm:mb-16 sm:space-y-32">
        <section className="px-4 mx-auto max-w-7xl">
          <HomeHead />
        </section>

        <section className="px-4 mx-auto max-w-7xl">
          <AboutMe />
        </section>

        <section className="px-4 mx-auto max-w-7xl">
          <Activity activity={props.activity} />
        </section>

        <section>
          <GetInTouch />
        </section>

        <section className="px-4 mx-auto max-w-7xl">
          <Timeline />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const namespaces = ['header', 'footer', 'home', 'timeline']

  const [translations, activityResponse] = await Promise.all([
    serverSideTranslations(locale || 'en', namespaces),
    fetch(`${process.env.NEXT_PUBLIC_API}/activity`),
  ])

  const activity = await activityResponse.json()

  return {
    props: {
      ...translations,
      activity,
    },
    revalidate: 60 * 60 * 24,
  }
}
