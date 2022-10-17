import {FC, ReactNode, useState} from 'react'
import {useTranslation} from 'react-i18next'

import {classNames} from '@/lib/class-names'

import {DeroIcon} from '../Icons/DeroIcon'
import {GithubIcon} from '../Icons/GithubIcon'
import {InstagramIcon} from '../Icons/InstagramIcon'
import {MoneroLogo} from '../Icons/MoneroLogo'
import {PirateChainIcon} from '../Icons/PirateChainIcon'
import {SessionIcon} from '../Icons/SessionIcon'
import {YouTubeIcon} from '../Icons/YouTubeIcon'

interface CopyAddressProps {
  href: string
  address: string
  children?: ReactNode
}

const CopyAddress: FC<CopyAddressProps> = ({href, children, address}) => {
  const [selected, setSelected] = useState(false)
  const {t} = useTranslation()

  return (
    <div className="relative flex items-center space-x-2">
      <a className="w-6" href={href} target="_blank" rel="noreferrer">
        {children}
      </a>

      <button
        className={classNames('overflow-hidden sm:w-72 w-48 overflow-ellipsis select-all')}
        onFocus={() => {
          setSelected(true)
          navigator.clipboard.writeText(address)
        }}
        onBlur={() => {
          setSelected(false)
        }}
      >
        <span>{address}</span>
      </button>

      {selected && (
        <div
          role="tooltip"
          className="absolute z-10 inline-block px-2 py-1 text-xs font-medium rounded-sm shadow -right-20 bg-900-backdrop backdrop-filter backdrop-blur-sm"
        >
          {t('home:copied')}
        </div>
      )}
    </div>
  )
}

export const Header: FC = () => {
  const {t} = useTranslation()

  const xmrAddress =
    '862mLrhM6jQJDXPJ5pQHm9cYQXLESg4zXTFnRcvQeKAdXBJZBkTkajSQW3MXmeacCR9GZ3iNXXsn9jiTz5XNRe8C3fi3RmZ'
  const arrrAddress =
    'zs13txsrhyve44dxxl5zr488p4rhu9n3cj4e2s3ke2cpxzlu799z08zm99q4h7lsfgc9lawkrkxpkl'
  const deroAddress = 'dero1qyyza9es6qaty33xvemr4pwl6dk25ae6sdaw2uhnx7dlprlzc20azqq3waf9x'
  const sessionId = '056ce2b57aa4835cec536d8d745c563c0acdec7a25e6c3649fb4dbb01a47349c57'

  return (
    <header className="relative border-b border-background-300">
      <div
        className="absolute inset-0 z-0 bg-top opacity-75 pointer-events-none filter"
        style={{backgroundImage: 'url(beams1.png)'}}
      >
        <div
          className="absolute inset-0 z-0 opacity-25 lg:bg-size-3 sm:bg-size-2 bg-[length:3rem_3rem]"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, black)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
            backgroundImage:
              'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)',
          }}
        />
      </div>

      <div className="max-w-sm pb-10 mx-auto space-y-4 sm:pb-16 lg:pb-20 sm:space-y-8 sm:max-w-5xl xl:max-w-8xl">
        <div className="space-y-2 sm:space-y-4">
          <div className="px-4 mx-auto w-72 sm:w-auto sm:max-w-sm">
            <img
              className="shadow-[#EA0B0B]/50 shadow-2xl rounded-full"
              src="/avatar.webp"
              alt="Avatar of Florian Ludewig"
              width={512}
              height={512}
            ></img>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-center sm:text-6xl lg:text-8xl text-900">
            Florian Ludewig
          </h1>

          <p className="max-w-3xl px-2 pb-4 mx-auto font-serif text-xl text-center sm:text-xl text-700 lg:text-3xl">
            {t('home:tagline')}
          </p>

          <div className="w-48 mx-auto space-y-2 font-mono text-sm sm:w-72">
            <CopyAddress href="https://www.getmonero.org" address={xmrAddress}>
              <MoneroLogo />
            </CopyAddress>

            <CopyAddress href="https://pirate.black" address={arrrAddress}>
              <PirateChainIcon />
            </CopyAddress>

            <CopyAddress href="https://dero.io" address={deroAddress}>
              <DeroIcon />
            </CopyAddress>

            <CopyAddress href="https://getsession.org" address={sessionId}>
              <SessionIcon />
            </CopyAddress>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center -mb-3 space-x-8 lg:-mb-5 sm:-mb-4 text-700">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/c/flolu"
          className="flex flex-col space-y-2"
        >
          <span className="w-6 duration-100 ease-in-out fill-current sm:w-8 lg:w-10 hover:text-primary-500">
            <YouTubeIcon />
          </span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/flo.ludewig"
          className="flex flex-col space-y-2"
        >
          <span className="w-6 duration-100 ease-in-out fill-current sm:w-8 lg:w-10 hover:text-primary-500">
            <InstagramIcon />
          </span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/flolu"
          className="flex flex-col space-y-2"
        >
          <span className="w-6 duration-100 ease-in-out fill-current sm:w-8 lg:w-10 hover:text-primary-500">
            <GithubIcon />
          </span>
        </a>
      </div>
    </header>
  )
}
