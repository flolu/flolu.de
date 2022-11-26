import {useTranslation} from 'next-i18next'
import Link from 'next/link'

import {GithubIcon} from '../components/Icons/GithubIcon'
import {InstagramIcon} from '../components/Icons/InstagramIcon'
import {YouTubeIcon} from './Icons/YouTubeIcon'
import {Signature} from './Signature'

export function Footer() {
  const {t} = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-12 text-sm text-300 body-font">
      <div className="container flex flex-col flex-wrap px-4 py-8 mx-auto sm:px-8 md:py-12 max-w-7xl md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 max-w-sm space-y-6 md:w-1/3 md:mx-0">
          <Signature />
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
              href="https://www.youtube.com/@flolu"
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
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 md:pl-20 md:mt-0">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="mb-4 font-medium text-900">{t('footer:home')}</h2>
            <ul className="mb-10 space-y-2 text-xs text-300">
              <li className="hover:text-700">
                <Link href="/" legacyBehavior>{t('footer:home')}</Link>
              </li>
              <li className="hover:text-700">
                <Link href="/blog" legacyBehavior>{t('footer:blog')}</Link>
              </li>
              <li className="hover:text-700">
                <Link href="/donations" legacyBehavior>{t('footer:donations')}</Link>
              </li>
              <li className="hover:text-700">
                <Link href="/contact" legacyBehavior>{t('footer:contact')}</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="mb-4 font-medium text-900">{t('footer:random')}</h2>
            <ul className="mb-10 space-y-2 text-xs text-300">
              <li className="hover:text-700">
                <Link href="/sitemap.xml">Sitemap</Link>
              </li>
              <li className="hover:text-700">
                <a target="_blank" rel="noreferrer" href="https://github.com/flolu/flolu.de">
                  Source Code
                </a>
              </li>
              <li className="hover:text-700">
                <a target="_blank" rel="noreferrer" href="https://drakery.com">
                  {t('footer:drakery')}
                </a>
              </li>
              <li className="hover:text-700">
                <a target="_blank" rel="noreferrer" href="https://meganero.com">
                  Meganero
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="mb-4 font-medium text-900">{t('footer:online')}</h2>
            <ul className="mb-10 space-y-2 text-xs text-300">
              <li className="hover:text-700">
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/@flolu">
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
              <li className="hover:text-700">
                <a target="_blank" rel="noreferrer" href="https://rumble.com/user/flolu">
                  Rumble
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
