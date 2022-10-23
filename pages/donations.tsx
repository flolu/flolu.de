import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {NextSeo} from 'next-seo'
import {FC, ReactNode} from 'react'

import {CopyAddress} from '@/components/CopyAddress'
import {Footer} from '@/components/Footer'
import {DeroIcon} from '@/components/Icons/DeroIcon'
import {MoneroLogo} from '@/components/Icons/MoneroLogo'
import {PirateChainIcon} from '@/components/Icons/PirateChainIcon'
import {WowneroIcon} from '@/components/Icons/WowneroIcon'
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

const Donations: FC<Props> = props => {
  const {t} = useTranslation()

  const title = `${t('donations:title')} | Florian Ludewig`
  const url = `https://flolu.de/${props.locale}/donations`

  const xmrAddress =
    '862mLrhM6jQJDXPJ5pQHm9cYQXLESg4zXTFnRcvQeKAdXBJZBkTkajSQW3MXmeacCR9GZ3iNXXsn9jiTz5XNRe8C3fi3RmZ'
  const arrrAddress =
    'zs13txsrhyve44dxxl5zr488p4rhu9n3cj4e2s3ke2cpxzlu799z08zm99q4h7lsfgc9lawkrkxpkl'
  const deroAddress = 'dero1qyyza9es6qaty33xvemr4pwl6dk25ae6sdaw2uhnx7dlprlzc20azqq3waf9x'
  const wowAddress =
    'WW3xuWkjJ41FNY3GVohfyd5rmG4sx69ukcqYMZgWPj3w4RQcddJ7JBpWCzc4kbPrdidfFA1wFSXs7iqJkfpnWHgC15waQtdTY'

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
            id="xmr"
            link="https://www.getmonero.org"
            address={xmrAddress}
            name="Monero"
            ticker="XMR"
            icon={<MoneroLogo />}
          />

          <Currency
            id="arrr"
            link="https://pirate.black"
            address={arrrAddress}
            name="Pirate Chain"
            ticker="ARRR"
            icon={<PirateChainIcon />}
          />

          <Currency
            id="dero"
            link="https://dero.io"
            address={deroAddress}
            name="Dero"
            ticker="DERO"
            icon={<DeroIcon />}
          />

          <Currency
            id="wow"
            link="https://wownero.org"
            address={wowAddress}
            name="Wownero"
            ticker="WOW"
            icon={<WowneroIcon />}
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
