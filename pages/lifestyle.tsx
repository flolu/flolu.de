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

const Lifestyle: FC<Props> = ({locale}) => {
  const {t} = useTranslation()
  const title = t('footer:lifestyle')
  const url = `https://flolu.de/${locale}/blog`

  return (
    <div>
      <NextSeo title={title} canonical={url} openGraph={{url, title}} />
      <Header />

      <main className="max-w-4xl px-4 mx-auto space-y-8 sm:space-y-12 sm:px-8">
        <div className="space-y-2" style={{minHeight: '50vh'}}>
          <span className="text-lg font-medium text-100 sm:text-xl">
            {t('lifestyle:lifestyle')}
          </span>
          <h1 className="text-2xl font-bold sm:text-5xl">Work in progress</h1>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const namespaces = ['header', 'footer', 'lifestyle']
  const locale = context.locale || 'en'
  const translations = await serverSideTranslations(locale, namespaces)
  return {props: {...translations, locale}}
}

export default Lifestyle
