import {FC} from 'react'
import {useTranslation} from 'react-i18next'

import {DrakeryLogoNoColor} from '../Icons/DrakeryLogoNoColor'
import {GithubIcon} from '../Icons/GithubIcon'
import {InstagramIcon} from '../Icons/InstagramIcon'
import {TelegramIcon} from '../Icons/TelegramIcon'
import {YouTubeIcon} from '../Icons/YouTubeIcon'

export const Header: FC = () => {
  const {t} = useTranslation()

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
          <div className="px-4 mx-auto w-80 sm:w-auto sm:max-w-sm">
            <img
              className="shadow-[#EA0B0B]/50 shadow-2xl rounded-full"
              src="https://storage.googleapis.com/flolu-website/me/DSC_0769.jpg"
              alt="Avatar of Florian Ludewig"
              width={512}
              height={512}
            ></img>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-center sm:text-6xl lg:text-8xl text-900">
            Florian Ludewig
          </h1>
          <p className="max-w-3xl px-2 mx-auto font-serif text-xl text-center sm:text-xl text-700 lg:text-3xl">
            {t('home:tagline')}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center -mb-3 space-x-8 lg:-mb-6 sm:-mb-4 text-700">
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
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drakery.com"
          className="flex flex-col space-y-2"
        >
          <span className="w-6 duration-100 ease-in-out fill-current sm:w-8 lg:w-10 hover:text-primary-500">
            <DrakeryLogoNoColor />
          </span>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://t.me/flolu"
          className="flex flex-col space-y-2"
        >
          <span className="w-6 duration-100 ease-in-out fill-current sm:w-8 lg:w-10 hover:text-primary-500">
            <TelegramIcon />
          </span>
        </a>
      </div>
    </header>
  )
}
