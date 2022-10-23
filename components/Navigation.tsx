import {useTranslation} from 'next-i18next'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {LanguageSelector} from './LanguageSelector'
import {Signature} from './Signature'
import {SmallScreenMenu} from './SmallScreenMenu'
import {ThemeSwitcher} from './ThemeSwitcher'

export function Navigation() {
  const {t} = useTranslation()
  const router = useRouter()

  return (
    <>
      <nav className="flex items-center p-6 select-none">
        <Signature />
        <div className="flex-1"></div>
        <div className="hidden sm:flex">
          <div className="space-x-6 text-base font-medium text-300">
            <Link href="/blog">
              <a className="hover:text-primary-500">{t('common:blog')}</a>
            </Link>
            <Link href="/donations">
              <a className="hover:text-primary-500">{t('common:donations')}</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-primary-500">{t('common:contact')}</a>
            </Link>
          </div>
          <span className="w-px h-6 mx-6 bg-900"></span>
        </div>
        <div className="flex items-center space-x-6 text-300">
          <ThemeSwitcher />
          {!router.pathname.startsWith('/blog') && <LanguageSelector />}
          <SmallScreenMenu />
        </div>
      </nav>
    </>
  )
}
