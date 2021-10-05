import Image from 'next/image'
import Link from 'next/link'
import {useTranslation} from 'react-i18next'

import {ArrowDownIcon} from '@/icons/ArrowDownIcon'
import {ArrowForwardIcon} from '@/icons/ArrowForwardIcon'
import {GithubIcon} from '@/icons/GithubIcon'
import {InstagramIcon} from '@/icons/InstagramIcon'
import {MouseIcon} from '@/icons/MouseIcon'
import {YouTubeIcon} from '@/icons/YouTubeIcon'

export function HomeHead() {
  const {t} = useTranslation()

  return (
    <div className="relative flex flex-col-reverse items-center justify-end space-x-4 md:justify-center md:flex-row md:min-h-screen md:px-28 lg:px-0">
      <div className="max-w-xs mt-12 md:max-w-sm md:mt-0 lg:max-w-lg">
        <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl text-900 whitespace-nowrap">
          {t('home:title')}
        </h1>
        <p className="mt-4 leading-relaxed lg:mt-6 md:text-base lg:text-xl text-500">
          {t('home:tagline')}
        </p>
        <a href="https://github.com/sponsors/flolu">
          <button className="flex items-center px-4 py-2 mt-8 space-x-2 text-lg font-medium rounded-lg lg:mt-12 lg:px-6 lg:py-3 lg:text-xl bg-primary-700 text-on-primary-300 focus:outline-none focus:ring-4 ring-offset-2 ring-primary-100">
            <span>{t('home:support_me')}</span>
            <span className="w-6 fill-current">
              <ArrowForwardIcon />
            </span>
          </button>
        </a>
      </div>

      <div className="w-56 md:w-full lg:max-w-sm xl:max-w-md">
        <Image
          className="rounded-full"
          alt="Florian Ludewig"
          src="https://storage.googleapis.com/flolu-website/me/avatar4.jpg"
          layout="responsive"
          width={512}
          height={512}
        />
      </div>

      <div className="absolute flex mx-auto -left-4 sm:pl-4 max-w-7xl">
        <div className="flex flex-col items-center justify-center w-5 h-56 space-y-10 cursor-pointer md:h-auto">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/flolu"
            className="w-5 fill-current sm:w-7 text-primary-500"
          >
            <GithubIcon />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/flo.ludewig"
            className="w-5 fill-current sm:w-7 text-primary-500"
          >
            <InstagramIcon />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/c/flolu"
            className="w-5 fill-current sm:w-7 text-primary-500"
          >
            <YouTubeIcon />
          </a>
        </div>
      </div>

      <div className="absolute justify-center hidden w-full bottom-8 md:flex">
        <Link href="#about-me">
          <div className="flex items-center space-x-2 cursor-pointer animate-bounce">
            <span className="w-6 fill-current">
              <MouseIcon />
            </span>
            <span>{t('home:scroll_down')}</span>
            <span className="w-5 fill-current">
              <ArrowDownIcon />
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
