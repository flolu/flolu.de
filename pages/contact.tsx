import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {NextSeo} from 'next-seo'
import {FC} from 'react'

import {CopyAddress} from '@/components/CopyAddress'
import {Footer} from '@/components/Footer'
import {SessionIcon} from '@/components/Icons/SessionIcon'
import {Navigation} from '@/components/Navigation'

interface Props {
  locale: string
}

const Contact: FC<Props> = props => {
  const {t} = useTranslation()

  const title = `${t('contact:title')} | Florian Ludewig`
  const url = `https://flolu.de/${props.locale}/contact`

  const sessionId = '056ce2b57aa4835cec536d8d745c563c0acdec7a25e6c3649fb4dbb01a47349c57'

  const headerMask = 'linear-gradient(to bottom, transparent 0%, black 20%, transparent 60%)'

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
          locale: props.locale,
        }}
      />

      <Navigation />

      <header>
        <div
          className="absolute inset-0 opacity-20 lg:bg-size-3 sm:bg-size-2 bg-[length:3rem_3rem] -bottom-64 z-0 pointer-events-none"
          style={{
            maskImage: headerMask,
            WebkitMaskImage: headerMask,
            backgroundImage:
              'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)',
          }}
        />

        <div
          className="absolute inset-0 z-0 bg-top opacity-75 pointer-events-none -bottom-64 filter"
          style={{
            backgroundImage: 'url(beams1.png)',
            transform: 'scaleX(-1)',
            maskImage: headerMask,
            WebkitMaskImage: headerMask,
          }}
        ></div>
      </header>

      <main className="relative">
        <div className="z-10 max-w-sm pb-10 mx-auto space-y-4 sm:pb-16 lg:pb-20 sm:space-y-8 sm:max-w-5xl xl:max-w-8xl">
          <div className="space-y-2 sm:space-y-4">
            <div className="px-4 mx-auto w-72 sm:w-auto sm:max-w-[12rem]">
              <img
                className="shadow-[#EA0B0B]/50 shadow-2xl rounded-full"
                src="/avatar.webp"
                alt="Avatar of Florian Ludewig"
                width={512}
                height={512}
              ></img>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-center sm:text-6xl text-900">
              {t('contact:title')}
            </h1>

            <p className="max-w-3xl px-2 pb-4 mx-auto font-serif text-xl text-center sm:text-xl text-700">
              {t('contact:subtitle')}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <div id="session" className="flex items-center space-x-4">
            <a
              href="https://getsession.org"
              target="_blank"
              rel="noreferrer"
              aria-label="Session"
              role="link"
              className="w-16 shadow-[#00F782]/50 shadow-2xl"
            >
              <SessionIcon />
            </a>
            <div>
              <p className="flex items-center space-x-2">
                <span className="text-2xl font-bold">Session</span>
              </p>
              <CopyAddress address={sessionId} />
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-20">
          <iframe
            className="max-w-sm mx-auto sm:hidden"
            width="336"
            height="189"
            src={`https://www.youtube.com/embed/6664mpKmccA`}
            allowFullScreen
          />

          <iframe
            className="hidden mx-auto sm:block"
            width="464"
            height="261"
            src={`https://www.youtube.com/embed/6664mpKmccA`}
            allowFullScreen
          />
        </div>
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const namespaces = ['footer', 'contact', 'common']
  const locale = context.locale || 'en'

  const translations = await serverSideTranslations(locale, namespaces)

  return {
    props: {
      ...translations,
      locale,
    },
  }
}

export default Contact
