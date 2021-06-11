import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'

export default function Portfolio({lastUpdated}: any) {
  const {t} = useTranslation()

  return (
    <div>
      <Header />

      <main className="max-w-4xl px-4 mx-auto space-y-8 sm:space-y-12 sm:px-8">
        <div className="space-y-2" style={{minHeight: '50vh'}}>
          <span className="text-lg font-medium text-100 sm:text-xl">
            {t('portfolio:portfolio')}
          </span>
          <h1 className="text-2xl font-bold sm:text-5xl">{t('portfolio:work_in_progress')}</h1>
          <span>{lastUpdated}</span>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const namespaces = ['header', 'footer', 'portfolio']
  const translations = await serverSideTranslations(locale || 'en', namespaces)
  return {props: {...translations}}
}
