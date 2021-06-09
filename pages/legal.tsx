import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {Footer} from '../components/Footer'
import {Header} from '../components/Header'

export default function Legal() {
  const {t} = useTranslation()

  return (
    <div>
      <Header />

      <main className="max-w-4xl px-4 mx-auto space-y-8 sm:space-y-12 sm:px-8">
        <div className="space-y-2">
          <span className="text-lg font-medium text-100 sm:text-xl">{t('legal:legal_notice')}</span>
          <h1 className="text-2xl font-bold sm:text-5xl">Florian Ludewig</h1>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const namespaces = ['header', 'footer', 'legal']
  const translations = await serverSideTranslations(locale || 'en', namespaces)
  return {props: {...translations}}
}
