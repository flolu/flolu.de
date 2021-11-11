import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {NextSeo} from 'next-seo'
import {FC} from 'react'

import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'

interface Props {
  locale: string
}

const NotFound: FC<Props> = () => {
  const {t} = useTranslation()

  return (
    <div>
      <NextSeo title="404" />
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

export const getStaticProps: GetStaticProps<Props> = async context => {
  const namespaces = ['header', 'footer', '404']
  const locale = context.locale || 'en'
  const translations = await serverSideTranslations(locale || 'en', namespaces)
  return {props: {...translations, locale}}
}

export default NotFound
