import {useTranslation} from 'next-i18next'
import Link from 'next/link'
import {FC, useEffect, useRef, useState} from 'react'

import {Themes, useAppearance} from '@/contexts//AppearanceContext'
import {DarkModeIcon} from '@/icons/DarkModeIcon'
import {LightModeIcon} from '@/icons/LightModeIcon'
import {classNames} from '@/lib/class-names'

interface Props {
  spaceBelow?: boolean
  showLinks?: boolean
}

export const Header: FC<Props> = ({spaceBelow, showLinks}) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const topAnchorRef = useRef<HTMLDivElement>(null)
  const {t} = useTranslation()
  const appearance = useAppearance()

  useEffect(() => {
    let isMounted = true

    const observer = new IntersectionObserver(entries => {
      const [topAnchor] = entries
      if (isMounted) setIsScrolled(topAnchor.boundingClientRect.bottom < 0)
    })

    if (topAnchorRef.current) observer.observe(topAnchorRef.current)

    return () => {
      isMounted = false
      if (topAnchorRef.current) observer.unobserve(topAnchorRef.current)
    }
  }, [topAnchorRef])

  const onSwitchTheme = () => {
    if (appearance.theme === Themes.Light) appearance.setTheme(Themes.Dark)
    if (appearance.theme === Themes.Dark) appearance.setTheme(Themes.Light)
  }

  return (
    <>
      {(spaceBelow === undefined || !!spaceBelow) && <div className="h-24"></div>}
      <div className="absolute top-8" ref={topAnchorRef}></div>
      <nav className="fixed top-0 z-10 w-full bg-50-backdrop backdrop-filter backdrop-blur-lg">
        <div
          className={classNames(
            'container flex items-center space-x-4 sm:space-x-6 px-4 sm:px-8 mx-auto max-w-7xl duration-200 border-background-500',
            isScrolled ? 'border-b py-2 sm:py-4' : 'border-b sm:border-0 py-4 sm:py-6',
          )}
        >
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <span className="text-lg font-medium">Flo</span>
            </div>
          </Link>

          <div className="flex-1"></div>

          {(showLinks === undefined || !!showLinks) && (
            <>
              <div className="hidden md:block">
                <Link href="/#timeline">
                  <a className="hover:text-900">{t('header:timeline')}</a>
                </Link>
              </div>
              <div className="hidden md:block">
                <Link href="/blog">
                  <a className="hover:text-900">{t('header:blog')}</a>
                </Link>
              </div>
            </>
          )}

          <span className="w-6 cursor-pointer fill-current" onClick={onSwitchTheme}>
            {appearance.theme === Themes.Light && <DarkModeIcon />}
            {appearance.theme === Themes.Dark && <LightModeIcon />}
          </span>
        </div>
      </nav>
    </>
  )
}
