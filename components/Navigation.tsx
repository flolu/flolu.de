import {useTranslation} from 'next-i18next'
import Link from 'next/link'

import {LanguageSelector} from './LanguageSelector'
import {SmallScreenMenu} from './SmallScreenMenu'
import {ThemeSwitcher} from './ThemeSwitcher'

export function Navigation() {
  const {t} = useTranslation()

  return (
    <>
      <nav className="flex items-center p-6">
        <Link href="/">
          <a className="flex items-center space-x-2 hover:cursor-pointer text-900">
            {/* <span className="w-6 sm:w-8">
              <DrakeryLogo />
            </span> */}
            <span className="text-lg font-bold sm:text-xl">Florian Ludewig</span>
          </a>
        </Link>
        <div className="flex-1"></div>
        <div className="hidden sm:flex">
          <div className="space-x-6 text-sm font-bold text-300">
            <Link href="/#timeline">
              <a className="hover:text-primary-500">{t('header:timeline')}</a>
            </Link>
            <Link href="/blog">
              <a className="hover:text-primary-500">{t('header:blog')}</a>
            </Link>
          </div>
          <span className="w-px h-6 mx-6 bg-900"></span>
        </div>
        <div className="flex items-center space-x-6 text-300">
          <ThemeSwitcher />
          <LanguageSelector />
          <SmallScreenMenu />
        </div>
      </nav>
    </>
  )
}
