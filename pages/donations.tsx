import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {NextSeo} from 'next-seo'
import {FC, ReactNode} from 'react'

import {CopyAddress} from '@/components/CopyAddress'
import {Footer} from '@/components/Footer'
import {BitcoinLogo} from '@/components/Icons/BitcoinLogo'
import {DeroIcon} from '@/components/Icons/DeroIcon'
import {MoneroLogo} from '@/components/Icons/MoneroLogo'
import {Navigation} from '@/components/Navigation'

interface CurrencyProps {
  id: string
  link: string
  address: string
  name: string
  ticker: string
  icon: ReactNode
}

const Currency: FC<CurrencyProps> = ({id, link, address, name, ticker, icon}) => {
  return (
    <div id={id} className="flex items-center space-x-4">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={name}
        role="link"
        className="w-16"
      >
        {icon}
      </a>
      <div>
        <p className="flex items-center space-x-2">
          <span className="text-2xl font-bold">{name}</span>
          <span className="px-2 py-0.5 font-mono text-sm font-semibold rounded bg-900 text-500 opacity-80">
            {ticker}
          </span>
        </p>
        <CopyAddress address={address} />
      </div>
    </div>
  )
}

interface Props {
  locale: string
}

const MONERO_ADDRESS =
  '84ta1nYgbTH2tuM7SnsPzLcL6raw2hJFZQ9WeAGMX6HMT9KS8QKK3JxgNr5hrzq3tbC9WuT6qgvan8Hymi9TNmtz9TjdUCx'
const DERO_ADDRESS = 'dero1qyyza9es6qaty33xvemr4pwl6dk25ae6sdaw2uhnx7dlprlzc20azqq3waf9x'
const BITCOIN_ADDRESS = '1Fni165CCq4Vs2ZHRXSD1wGrXSfHyZeu8N'

const headerMask = 'linear-gradient(to bottom, transparent 0%, black 20%, transparent 60%)'

const Donations: FC<Props> = props => {
  const {t} = useTranslation()

  const title = `${t('donations:title')} | Florian Ludewig`
  const url = `https://flolu.de/${props.locale}/donations`

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

      {/* LATER gradient disappears when toggling language in dev mode */}
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
              {t('donations:title')}
            </h1>

            <p className="max-w-3xl px-2 pb-4 mx-auto font-serif text-xl text-center sm:text-xl text-700">
              {t('donations:subtitle')}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <Currency
            id="bitcoin"
            link="https://www.bitcoinsv.com"
            address={BITCOIN_ADDRESS}
            name="Bitcoin SV"
            ticker="BSV"
            icon={<BitcoinLogo />}
          />

          <Currency
            id="monero"
            link="https://www.getmonero.org"
            address={MONERO_ADDRESS}
            name="Monero"
            ticker="XMR"
            icon={<MoneroLogo />}
          />

          <Currency
            id="dero"
            link="https://dero.io"
            address={DERO_ADDRESS}
            name="Dero"
            ticker="DERO"
            icon={<DeroIcon />}
          />
        </div>
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const namespaces = ['footer', 'donations', 'common']
  const locale = context.locale || 'en'

  const translations = await serverSideTranslations(locale, namespaces)

  return {
    props: {
      ...translations,
      locale,
    },
  }
}

export default Donations
