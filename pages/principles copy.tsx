import {GetStaticProps} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from 'react-i18next'

import {Footer} from '../components/Footer'
import {Header} from '../components/Header'

export default function Principles() {
  const {t} = useTranslation()

  return (
    <div>
      <Header />

      <main className="max-w-4xl px-4 mx-auto space-y-8 sm:space-y-12 sm:px-8">
        <div className="space-y-2" style={{minHeight: '50vh'}}>
          <span className="text-lg font-medium text-100 sm:text-xl">
            {t('principles:principles')}
          </span>
          <h1 className="text-2xl font-bold sm:text-5xl">{t('principles:work_in_progress')}</h1>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const namespaces = ['header', 'footer', 'principles']
  const translations = await serverSideTranslations(locale || 'en', namespaces)
  return {props: {...translations}}
}
