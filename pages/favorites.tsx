import {GetStaticProps} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {NextSeo} from 'next-seo'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'

import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'

interface Props {
  locale: string
}

const Favorites: FC<Props> = ({locale}) => {
  const {t} = useTranslation()
  const title = `${t('favorites:favorites')}`
  const description = t('favorites:favorites')
  const url = `https://flolu.de/${locale}/favorites`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{url, title, description, locale}}
        twitter={{handle: '@floludewig', site: '@floludewig', cardType: 'summary'}}
        languageAlternates={[
          {hrefLang: 'en', href: 'https://flolu.de/en/favorites'},
          {hrefLang: 'de', href: 'https://flolu.de/de/favorites'},
        ]}
      />

      <Header />

      <main className="max-w-4xl px-4 mx-auto space-y-8 sm:space-y-12 sm:px-8">
        <div className="space-y-2" style={{minHeight: '50vh'}}>
          <span className="text-lg font-medium text-100 sm:text-xl">
            {t('favorites:favorites')}
          </span>
          <h1 className="text-2xl font-bold sm:text-5xl">{t('favorites:work_in_progress')}</h1>
        </div>
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async props => {
  const namespaces = ['header', 'footer', 'favorites']
  const locale = props.locale || 'en'
  const translations = await serverSideTranslations(locale, namespaces)
  return {props: {...translations, locale}}
}

export default Favorites
