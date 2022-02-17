import {useTranslation} from 'next-i18next'
import Link from 'next/link'

export function Footer() {
  const {t} = useTranslation()

  return (
    <footer className="text-sm text-300 body-font">
      <div className="flex flex-col items-center max-w-xl mx-auto space-y-4 text-center sm:space-y-0 sm:text-left sm:items-start sm:flex-row whitespace-nowrap">
        <div className="w-full lg:w-1/3">
          <h2 className="mb-4 font-bold tracking-wide text-900">{t('footer:home')}</h2>
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
            <li className="hover:underline">
              <Link href="/blog">{t('footer:blog')}</Link>
            </li>
            <li className="hover:underline">
              <Link href="/portfolio">{t('footer:portfolio')}</Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3">
          <h2 className="mb-4 font-bold tracking-wide text-900">{t('footer:random')}</h2>
          <ul className="mb-10 space-y-2">
            <li className="hover:underline">
              <Link href="/support">{t('footer:support_me')}</Link>
            </li>
            <li className="hover:underline">
              <Link href="/lifestyle">{t('footer:lifestyle')}</Link>
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
        <div className="w-full lg:w-1/3">
          <h2 className="mb-4 font-bold tracking-wide text-900">{t('footer:online')}</h2>
          <ul className="flex flex-col mb-10 space-y-2">
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
              href="https://www.instagram.com/flo.ludewig"
            >
              Instagram
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
            <a
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/users/8586803"
            >
              StackOverflow
            </a>
          </ul>
        </div>
      </div>
    </footer>
  )
}
