import {Transition} from '@headlessui/react'
import {useTranslation} from 'next-i18next'
import Link from 'next/link'
import {Fragment, useEffect, useRef, useState} from 'react'

import {Themes, useAppearance} from '@/contexts//AppearanceContext'
import {CloseIcon} from '@/icons/CloseIcon'
import {DarkModeIcon} from '@/icons/DarkModeIcon'
import {FavoritesIcon} from '@/icons/FavoritesIcon'
import {HistoryIcon} from '@/icons/HistoryIcon'
import {LaughIcon} from '@/icons/LaughIcon'
import {LightModeIcon} from '@/icons/LightModeIcon'
import {PortfolioIcon} from '@/icons/PortfolioIcon'
import {PrinciplesIcon} from '@/icons/PrinciplesIcon'
import {TimelineIcon} from '@/icons/TimelineIcon'
import {WidgetsIcon} from '@/icons/WidgetsIcon'
import {classNames} from '@/lib/class-names'

interface Props {
  spacer?: boolean
}

export const Header = (props: Props) => {
  const spacer = props.spacer === undefined ? true : props.spacer
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const topAnchorRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const closeMenuRef = useRef<HTMLDivElement>(null)
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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        if (closeMenuRef.current && closeMenuRef.current.contains(event.target as Node)) return
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [menuRef])

  const onSwitchTheme = () => {
    if (appearance.theme === Themes.Light) appearance.setTheme(Themes.Dark)
    if (appearance.theme === Themes.Dark) appearance.setTheme(Themes.Light)
  }

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {spacer && <div className="h-24"></div>}
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

          <div className="hidden ml-auto sm:block">
            <Link href="/#about-me">
              <a className="hover:text-900">{t('header:about_me')}</a>
            </Link>
          </div>
          <div className="hidden md:block">
            <Link href="/#activity">
              <a className="hover:text-900">{t('header:activity')}</a>
            </Link>
          </div>
          <div className="hidden md:block">
            <Link href="/#timeline">
              <a className="hover:text-900">{t('header:timeline')}</a>
            </Link>
          </div>
          <div className="hidden md:block">
            <Link href="/#get-in-touch">
              <a className="hover:text-900">{t('header:contact_me')}</a>
            </Link>
          </div>
          <span className="w-6 cursor-pointer fill-current" onClick={onSwitchTheme}>
            {appearance.theme === Themes.Light && <DarkModeIcon />}
            {appearance.theme === Themes.Dark && <LightModeIcon />}
          </span>
          <span className="w-6 cursor-pointer fill-current" onClick={onToggleMenu}>
            {isMenuOpen ? (
              <span ref={closeMenuRef}>
                <CloseIcon />
              </span>
            ) : (
              <WidgetsIcon />
            )}
          </span>
        </div>
      </nav>

      <div className="fixed bottom-0 z-10 flex flex-col items-center left-2 right-2">
        <div className="w-full max-w-sm" ref={menuRef}>
          <Transition
            show={isMenuOpen}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95 translate-y-32"
            enterTo="transform opacity-100 scale-100 translate-y-0"
            leave="transition ease-in duration-100"
            leaveFrom="transform opacity-100 scale-100 translate-y-0"
            leaveTo="transform opacity-0 scale-95 translate-y-32"
          >
            <div className="flex flex-col items-center p-4 space-y-8 border-2 border-b-0 shadow-2xl rounded-t-2xl bg-500-backdrop backdrop-filter backdrop-blur-lg border-background-300">
              <div className="flex space-x-8" onClick={() => setIsMenuOpen(false)}>
                <Link href="/#about-me">
                  <div className="flex flex-col items-center space-y-1 cursor-pointer">
                    <span className="w-8 fill-current text-300">
                      <LaughIcon />
                    </span>
                    <span>{t('header:about_me')}</span>
                  </div>
                </Link>
                <Link href="/#activity">
                  <div className="flex flex-col items-center space-y-1 cursor-pointer">
                    <span className="w-8 fill-current text-300">
                      <HistoryIcon />
                    </span>
                    <span>{t('header:activity')}</span>
                  </div>
                </Link>
                <Link href="/#timeline">
                  <div className="flex flex-col items-center space-y-1 cursor-pointer">
                    <span className="w-8 fill-current text-300">
                      <TimelineIcon />
                    </span>
                    <span>{t('header:timeline')}</span>
                  </div>
                </Link>
              </div>
              <div className="flex space-x-8" onClick={() => setIsMenuOpen(false)}>
                <Link href="/portfolio">
                  <div className="flex flex-col items-center space-y-1 cursor-pointer">
                    <span className="w-8 fill-current text-300">
                      <PortfolioIcon />
                    </span>
                    <span>{t('header:portfolio')}</span>
                  </div>
                </Link>
                <Link href="/favorites">
                  <div className="flex flex-col items-center space-y-1 cursor-pointer">
                    <span className="w-8 fill-current text-300">
                      <FavoritesIcon />
                    </span>
                    <span>{t('header:favorites')}</span>
                  </div>
                </Link>
                <Link href="/principles">
                  <div className="flex flex-col items-center space-y-1 cursor-pointer">
                    <span className="w-8 fill-current text-300">
                      <PrinciplesIcon />
                    </span>
                    <span>{t('header:principles')}</span>
                  </div>
                </Link>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}
