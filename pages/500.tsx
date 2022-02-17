import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {NextSeo} from 'next-seo'
import {FC} from 'react'

import {Footer} from '@/components/Footer'
import {Navigation} from '@/components/Navigation'

interface Props {
  locale: string
}

const InternalError: FC<Props> = () => {
  const {t} = useTranslation()

  return (
    <div>
      <NextSeo title="500" />
      <Navigation />

      <main className="max-w-4xl px-4 mx-auto mt-4 space-y-8 sm:space-y-12 sm:px-8 sm:mt-8">
        <div className="space-y-2" style={{minHeight: '50vh'}}>
          <span className="text-lg font-medium text-100 sm:text-xl">500</span>
          <h1 className="text-2xl font-bold sm:text-5xl">{t('500:internal_error')}</h1>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const namespaces = ['header', 'footer', '500']
  const locale = context.locale || 'en'
  const translations = await serverSideTranslations(locale, namespaces)
  return {props: {...translations, locale}}
}

export default InternalError
