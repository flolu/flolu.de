import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {NextSeo, SocialProfileJsonLd} from 'next-seo'
import {FC} from 'react'

import {getStars} from '@/api/github-stars'
import {getUnsplashViews} from '@/api/unsplash-views'
import {getYouTubeViews} from '@/api/youtube-views'
import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'
import {AboutMe} from '@/components/Home/AboutMe'
import {HomeHead} from '@/components/Home/Head'
import {Timeline} from '@/components/Home/Timeline'

interface Props {
  locale: string
  githubStars: number
  unsplashViews: number
  youTubeViews: number
  lastUpdated: string
}

const Home: FC<Props> = props => {
  const {t} = useTranslation()

  const title = 'Florian Ludewig'
  const description = t('home:tagline')
  const url = `https://flolu.de/${props.locale}`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          locale: props.locale,
          type: 'profile',
          profile: {firstName: 'Florian', lastName: 'Ludewig', username: 'flolu', gender: 'Male'},
          images: [
            {
              url: 'https://storage.googleapis.com/flolu-website/me/avatar4.jpg',
              width: 512,
              height: 512,
              alt: 'Profile Photo',
            },
          ],
        }}
        languageAlternates={[
          {hrefLang: 'en', href: 'https://flolu.de/en'},
          {hrefLang: 'de', href: 'https://flolu.de/de'},
        ]}
      />

      <SocialProfileJsonLd
        type="Person"
        name="Florian Ludewig"
        url={url}
        sameAs={[
          'https://www.instagram.com/flo.ludewig',
          'https://www.youtube.com/c/flolu',
          'https://github.com/flolu',
          'https://stackoverflow.com/users/8586803',
          'https://unsplash.com/@flolu',
          'https://t.me/flolu',
        ]}
      />

      <Header spaceBelow={false} />
      <div className="h-24 md:hidden"></div>

      <main className="mb-8 space-y-24 sm:mb-16 sm:space-y-32">
        <section className="px-4 mx-auto max-w-7xl">
          <HomeHead />
        </section>

        <section className="px-4 mx-auto max-w-7xl">
          <AboutMe
            githubStars={props.githubStars}
            unsplashViews={props.unsplashViews}
            youTubeViews={props.youTubeViews}
            locale={props.locale}
          />
        </section>

        <section className="px-4 mx-auto max-w-7xl">
          <Timeline />
        </section>
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const namespaces = ['header', 'footer', 'home', 'timeline']
  const locale = context.locale || 'en'

  const [translations, githubStars, unsplashViews, youTubeViews] = await Promise.all([
    serverSideTranslations(locale, namespaces),
    getStars(),
    getUnsplashViews(),
    getYouTubeViews(),
  ])

  return {
    props: {
      ...translations,
      githubStars,
      unsplashViews,
      youTubeViews,
      lastUpdated: new Date().toISOString(),
      locale,
    },
    revalidate: 60 * 5,
  }
}

export default Home
