import {Menu, Transition} from '@headlessui/react'
import {useTranslation} from 'next-i18next'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {Fragment} from 'react'

import {ExpandMoreIcon} from '../components/Icons/ExpandMoreIcon'
import {GermanIcon} from '../components/Icons/GermanIcon'
import {GithubIcon} from '../components/Icons/GithubIcon'
import {InstagramIcon} from '../components/Icons/InstagramIcon'
import {UnitedKingdomIcon} from '../components/Icons/UnitedKingdomIcon'
import {YouTubeIcon} from './Icons/YouTubeIcon'

export function Footer() {
  const router = useRouter()
  const {t} = useTranslation()

  return (
    <footer className="text-sm text-300 body-font">
      <div className="container flex flex-col flex-wrap px-4 py-8 mx-auto border-t border-background-500 sm:px-8 md:py-12 max-w-7xl md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex-shrink-0 max-w-sm space-y-6 md:w-1/3 md:mx-0">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer text-900">
              <span className="text-lg font-medium">Florian Ludewig</span>
            </div>
          </Link>
          <p className="text-xs text-100">© 2021 Florian Ludewig</p>
          <div>
            <Menu as="div" className="relative inline-block">
              <div>
                <Menu.Button className="inline-flex items-center px-3 py-1 space-x-1 border-0 rounded-lg bg-300 focus:outline-none hover:bg-500">
                  <span>{t(`footer:locale_${router.locale}`)}</span>
                  <span className="w-6 fill-current">
                    <ExpandMoreIcon />
                  </span>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 w-40 mt-2 text-sm divide-y rounded-lg shadow-md divide-background-300 bottom-10 ring-1 ring-background-500 focus:outline-none backdrop-filter bg-50-backdrop backdrop-blur-sm">
                  <Menu.Item>
                    <Link href={router.pathname} locale="en">
                      <div className="block w-full px-4 py-2 cursor-pointer text-start hover:bg-darken focus:outline-none">
                        <span className="flex items-center space-x-2 font-medium">
                          <span className="w-6">
                            <UnitedKingdomIcon />
                          </span>
                          <span className="leading-tight">{t('footer:locale_en')}</span>
                        </span>
                        <span className="text-xs text-100">English</span>
                      </div>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href={router.pathname} locale="de">
                      <div className="block w-full px-4 py-2 cursor-pointer text-start hover:bg-darken focus:outline-none">
                        <span className="flex items-center space-x-2 font-medium">
                          <span className="w-6">
                            <GermanIcon />
                          </span>
                          <span className="leading-tight">{t('footer:locale_de')}</span>
                        </span>
                        <span className="text-xs text-100">German</span>
                      </div>
                    </Link>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="flex space-x-4">
            <a
              target="_blank"
              rel="noopener"
              href="https://www.instagram.com/flo.ludewig"
              className="w-4 cursor-pointer fill-current"
            >
              <InstagramIcon />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/c/flolu"
              className="w-4 cursor-pointer fill-current"
            >
              <YouTubeIcon />
            </a>
            <a
              target="_blank"
              rel="noopener"
              href="https://github.com/flolu"
              className="w-4 cursor-pointer fill-current"
            >
              <GithubIcon />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 md:pl-20 md:mt-0">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="mb-4 font-medium tracking-widest text-900">{t('footer:home')}</h2>
            <ul className="mb-10 space-y-2">
              <li className="hover:underline">
                <Link href="/">{t('footer:home')}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/#about-me">{t('footer:about_me')}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/#activity">{t('footer:activity')}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/#timeline">{t('footer:timeline')}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/#get-in-touch">{t('footer:contact_me')}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/blog">{t('footer:blog')}</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="mb-4 font-medium tracking-widest text-900">{t('footer:random')}</h2>
            <ul className="mb-10 space-y-2">
              <li className="hover:underline">
                <Link href="/skills">{t('footer:skills')}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/portfolio">{t('footer:portfolio')}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/biohacking">{t('footer:biohacking')}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/facts">{t('footer:facts')}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/recommendations">{t('footer:recommendations')}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/favorites">{t('footer:favorites')}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/principles">{t('footer:principles')}</Link>
              </li>
              <li className="hover:underline">
                <Link href="/sitemap.xml">Sitemap</Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <h2 className="mb-4 font-medium tracking-widest text-900">{t('footer:online')}</h2>
            <ul className="flex flex-col mb-10 space-y-2">
              <a
                className="hover:underline"
                target="_blank"
                rel="noopener"
                href="https://www.instagram.com/flo.ludewig"
              >
                Instagram
              </a>
              <a
                className="hover:underline"
                target="_blank"
                rel="noopener"
                href="https://www.youtube.com/c/flolu"
              >
                YouTube
              </a>
              <a
                className="hover:underline"
                target="_blank"
                rel="noopener"
                href="https://github.com/flolu"
              >
                GitHub
              </a>
              <a
                className="hover:underline"
                target="_blank"
                rel="noopener"
                href="https://www.strava.com/athletes/flolu"
              >
                Strava
              </a>
              <a
                className="hover:underline"
                target="_blank"
                rel="noopener"
                href="https://www.linkedin.com/in/florian-ludewig"
              >
                LinkedIn
              </a>
              <a
                className="hover:underline"
                target="_blank"
                rel="noopener"
                href="https://stackoverflow.com/users/8586803"
              >
                StackOverflow
              </a>
              <a
                className="hover:underline"
                target="_blank"
                rel="noopener"
                href="https://unsplash.com/@flolu"
              >
                Unsplash
              </a>
              <a
                className="hover:underline"
                target="_blank"
                rel="noopener"
                href="https://t.me/flolu"
              >
                Telegram
              </a>
              <a
                className="hover:underline"
                target="_blank"
                rel="noopener"
                href="https://twitter.com/floludewig"
              >
                Twitter
              </a>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
