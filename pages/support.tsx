import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'

import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'

// NOW images on google cloud!

export default function Legal() {
  const {t} = useTranslation()

  return (
    <div>
      <Header />

      <main className="max-w-4xl px-4 mx-auto mb-20 space-y-8 sm:space-y-12 sm:px-8">
        <div className="flex flex-col items-center w-full max-w-xs mx-auto space-y-16">
          <div className="flex flex-col items-center">
            <a href="https://www.getmonero.org/">
              <img
                src="https://www.getmonero.org/press-kit/symbols/monero-symbol-480.png"
                className="w-32"
                alt="Monero symbol"
              />
            </a>
            <p className="text-center">{t('support:monero')}</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <code className="overflow-hidden font-mono text-lg break-all">
              862mLrhM6jQJDXPJ5pQHm9cYQXLESg4zXTFnRcvQeKAdXBJZBkTkajSQW3MXmeacCR9GZ3iNXXsn9jiTz5XNRe8C3fi3RmZ
            </code>
            <img
              src="https://storage.googleapis.com/flolu-website/support/xmr.png"
              alt="Monero (XMR) address"
              className="w-40 rounded-lg"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const namespaces = ['header', 'footer', 'support']
  const translations = await serverSideTranslations(locale || 'en', namespaces)
  return {props: {...translations}}
}
