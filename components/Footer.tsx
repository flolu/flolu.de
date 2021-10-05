import {useTranslation} from 'next-i18next'
import Link from 'next/link'

import {GithubIcon} from '@/components/Icons/GithubIcon'
import {InstagramIcon} from '@/components/Icons/InstagramIcon'

import {YouTubeIcon} from './Icons/YouTubeIcon'
import {LanguageSelect} from './LanguageSelect'

export function Footer() {
  const {t} = useTranslation()

  return (
    <footer className="text-sm text-300 body-font">
      <div className="container flex flex-col flex-wrap px-4 py-8 mx-auto sm:px-8 md:py-12 max-w-7xl md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 max-w-sm space-y-6 md:w-1/3 md:mx-0">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer text-900">
              <span className="text-lg font-medium">Florian Ludewig</span>
            </div>
          </Link>
          <p className="text-xs text-100">© {new Date().getFullYear()} Florian Ludewig</p>
          <LanguageSelect position="above" />
          <div className="flex space-x-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/flo.ludewig"
              className="w-4 cursor-pointer fill-current"
            >
              <InstagramIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/c/flolu"
              className="w-4 cursor-pointer fill-current"
            >
              <YouTubeIcon />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/flolu"
              className="w-4 cursor-pointer fill-current"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 md:pl-20 md:mt-0">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="mb-4 font-medium tracking-wide text-900">{t('footer:home')}</h2>
            <ul className="mb-10 space-y-2">
              <li className="hover:underline">
                <Link href="/">{t('footer:home')}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/#about-me">{t('footer:about_me')}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/#timeline">{t('footer:timeline')}</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="mb-4 font-medium tracking-wide text-900">{t('footer:random')}</h2>
            <ul className="mb-10 space-y-2">
              <li className="hover:underline">
                <Link href="/portfolio">{t('footer:portfolio')}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/legal">{t('footer:legal')}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/sitemap.xml">Sitemap</Link>
              </li>
              <li>
                <a
                  className="hover:underline"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/flolu/flolu.de"
                >
                  Source Code
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="mb-4 font-medium tracking-wide text-900">{t('footer:online')}</h2>
            <ul className="flex flex-col mb-10 space-y-2">
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/flo.ludewig"
              >
                Instagram
              </a>
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
                href="https://www.youtube.com/c/flolu"
              >
                YouTube
              </a>
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/flolu"
              >
                GitHub
              </a>
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
                href="https://www.strava.com/athletes/flolu"
              >
                Strava
              </a>
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/florian-ludewig"
              >
                LinkedIn
              </a>
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
                href="https://stackoverflow.com/users/8586803"
              >
                StackOverflow
              </a>
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
                href="https://unsplash.com/@flolu"
              >
                Unsplash
              </a>
              <a
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
                href="https://t.me/flolu"
              >
                Telegram
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
