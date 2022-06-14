import {useTranslation} from 'next-i18next'
import Link from 'next/link'

import {GithubIcon} from '../components/Icons/GithubIcon'
import {InstagramIcon} from '../components/Icons/InstagramIcon'
import {TelegramIcon} from './Icons/TelegramIcon'
import {YouTubeIcon} from './Icons/YouTubeIcon'

export function Footer() {
  const {t} = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-12 text-sm text-300 body-font">
      <div className="container flex flex-col flex-wrap px-4 py-8 mx-auto sm:px-8 md:py-12 max-w-7xl md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 max-w-sm space-y-6 md:w-1/3 md:mx-0">
          <Link href="/">
            <a className="flex items-center space-x-4 hover:cursor-pointer text-900">
              <div className="flex items-center">
                <span className="font-serif text-4xl font-bold text-primary-500">F</span>
                <span className="font-serif text-4xl text-primary-300">L</span>
              </div>
              <span className="mt-1 text-lg font-bold sm:text-xl">flolu.de</span>
            </a>
          </Link>
          <p className="text-xs">© {year} Florian Ludewig</p>
          <div className="flex space-x-4 text-300">
            <a
              target="_blank"
              href="https://www.instagram.com/flo.ludewig"
              rel="noreferrer"
              className="w-4 cursor-pointer fill-current hover:text-primary-500"
              aria-label="Instagram"
              role="link"
            >
              <InstagramIcon />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/c/flolu"
              rel="noreferrer"
              className="w-4 cursor-pointer fill-current hover:text-primary-500"
              aria-label="YouTube"
              role="link"
            >
              <YouTubeIcon />
            </a>
            <a
              target="_blank"
              href="https://github.com/flolu"
              rel="noreferrer"
              className="w-4 cursor-pointer fill-current hover:text-primary-500"
              aria-label="GitHub"
              role="link"
            >
              <GithubIcon />
            </a>
            <a
              target="_blank"
              href="https://t.me/flolu"
              rel="noreferrer"
              className="w-4 cursor-pointer fill-current hover:text-primary-500"
              aria-label="GitHub"
              role="link"
            >
              <TelegramIcon />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 md:pl-20 md:mt-0">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="mb-4 font-medium text-900">{t('footer:home')}</h2>
            <ul className="mb-10 space-y-2 text-xs text-300">
              <li className="hover:text-700">
                <Link href="/">{t('footer:home')}</Link>
              </li>
              <li className="hover:text-700">
                <Link href="/blog">{t('footer:blog')}</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="mb-4 font-medium text-900">{t('footer:random')}</h2>
            <ul className="mb-10 space-y-2 text-xs text-300">
              <li className="hover:text-700">
                <Link href="/support">{t('footer:support_me')}</Link>
              </li>
              <li className="hover:text-700">
                <Link href="/sitemap.xml">Sitemap</Link>
              </li>
              <li className="hover:text-700">
                <a target="_blank" rel="noreferrer" href="https://github.com/flolu/flolu.de">
                  Source Code
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="mb-4 font-medium text-900">{t('footer:online')}</h2>
            <ul className="mb-10 space-y-2 text-xs text-300">
              <li className="hover:text-700">
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/c/flolu">
                  YouTube
                </a>
              </li>
              <li className="hover:text-700">
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/flo.ludewig">
                  Instagram
                </a>
              </li>
              <li className="hover:text-700">
                <a target="_blank" rel="noreferrer" href="https://github.com/flolu">
                  GitHub
                </a>
              </li>
              <li className="hover:text-700">
                <a target="_blank" rel="noreferrer" href="https://unsplash.com/@flolu">
                  Unsplash
                </a>
              </li>
              <li className="hover:text-700">
                <a target="_blank" rel="noreferrer" href="https://t.me/flolu">
                  Telegram
                </a>
              </li>
              <li className="hover:text-700">
                <a target="_blank" rel="noreferrer" href="https://stackoverflow.com/users/8586803">
                  StackOverflow
                </a>
              </li>
              <li className="hover:text-700">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/florian-ludewig"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
