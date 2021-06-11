import Image from 'next/image'
import Link from 'next/link'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'

import {DDDesignerIcon} from '@/icons/3DDesignerIcon'
import {DrakeryLogo} from '@/icons/DrakeryLogo'
import {FavoritesIcon} from '@/icons/FavoritesIcon'
import {HistoryIcon} from '@/icons/HistoryIcon'
import {LaughIcon} from '@/icons/LaughIcon'
import {PortfolioIcon} from '@/icons/PortfolioIcon'
import {PrinciplesIcon} from '@/icons/PrinciplesIcon'
import {SchoolIcon} from '@/icons/SchoolIcon'
import {TimelineIcon} from '@/icons/TimelineIcon'

// TODO links to other pages on this website like https://headlessui.dev/

interface Props {
  githubStars: number
  unsplashViews: number
  youTubeViews: number
  locale: string
}

export const AboutMe: FC<Props> = props => {
  const {t} = useTranslation()
  const formatter = new Intl.NumberFormat(props.locale)

  return (
    <section id="about-me">
      <div className="mb-8 space-y-8 text-center sm:space-y-16">
        <h2 className="text-4xl font-bold lg:text-6xl">{t('home:about_me')}</h2>

        <div className="flex items-center justify-between max-w-xl mx-auto text-xs text-left sm:text-sm md:text-base">
          <a
            target="_blank"
            rel="noopener"
            href="https://www.youtube.com/c/flolu"
            className="flex flex-col space-y-2"
          >
            <p>{t('home:youtube_views')}</p>
            <span className="text-2xl font-bold sm:text-4xl">
              {formatter.format(props.youTubeViews)}
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://unsplash.com/@flolu"
            className="flex flex-col space-y-2"
          >
            <p>{t('home:unsplash_views')}</p>
            <span className="text-2xl font-bold sm:text-4xl">
              {formatter.format(props.unsplashViews)}
            </span>
          </a>
          <a
            target="_blank"
            rel="noopener"
            href="https://github.com/flolu"
            className="flex flex-col space-y-2"
          >
            <p>{t('home:github_stars')}</p>
            <span className="text-2xl font-bold sm:text-4xl">
              {formatter.format(props.githubStars)}
            </span>
          </a>
        </div>

        <div className="flex flex-col items-center space-y-16 md:space-y-0 md:space-x-8 lg:space-x-32 md:flex-row">
          <div className="w-64 md:w-1/3">
            <Image
              className="rounded-2xl"
              src="https://storage.googleapis.com/flolu-website/me/avatar2.jpg"
              alt="Avatar of Flo"
              layout="responsive"
              width={512}
              height={461}
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-col">
              <div className="flex items-center space-x-4">
                <div className="flex-none w-24 px-4"></div>
                <div className="flex-1 space-y-2 text-xs text-left uppercase text-100">
                  {t('home:project')}
                </div>
                <div className="flex flex-col w-12 space-y-1 text-xs uppercase sm:w-20 text-100">
                  {t('home:focus')}
                </div>
              </div>

              <div className="w-full h-px mt-2 mb-4 bg-300"></div>

              <div className="space-y-12">
                <div className="flex items-center space-x-4">
                  <div className="flex-none hidden w-24 h-24 p-4 rounded-full sm:block bg-primary-50">
                    <span className="w-full fill-current text-primary-500">
                      <DrakeryLogo />
                    </span>
                  </div>
                  <div className="flex-1 space-y-2 text-left">
                    <p className="space-x-2 text-lg font-medium">
                      <span>Drakery</span>
                      <span className="px-2 py-px text-sm rounded-lg bg-primary-50 text-primary-700">
                        {t('home:ceo')}
                      </span>
                    </p>
                    <p className="text-300">{t('home:drakery_description')}</p>
                  </div>
                  <div className="flex flex-col w-12 space-y-1 sm:w-20 xl:w-28">
                    <span className="text-xl font-medium text-primary-900">40%</span>
                    <span className="flex items-center h-4 rounded-full bg-primary-50">
                      <span className="w-1/2 h-3 ml-px rounded-full bg-primary-500"></span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-none hidden w-20 h-20 p-5 mx-2 rounded-full sm:block bg-500">
                    <span className="w-full fill-current text-100">
                      <LaughIcon />
                    </span>
                  </div>
                  <div className="flex-1 space-y-2 text-left">
                    <p className="space-x-2 text-lg font-medium">
                      <span>{t('home:personal_life')}</span>
                      <span className="px-2 py-px text-sm rounded-lg bg-500 text-500">
                        {t('home:human')}
                      </span>
                    </p>
                    <p className="text-300">{t('home:personal_life_description')}</p>
                  </div>
                  <div className="flex flex-col w-12 space-y-1 sm:w-20 xl:w-28">
                    <span className="text-xl font-medium text-900">30%</span>
                    <span className="flex items-center h-4 rounded-full bg-300">
                      <span className="w-1/3 h-3 ml-px rounded-full bg-900"></span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-none hidden w-20 h-20 p-5 mx-2 rounded-full sm:block bg-500">
                    <span className="w-full fill-current text-100">
                      <SchoolIcon />
                    </span>
                  </div>
                  <div className="flex-1 space-y-2 text-left">
                    <p className="space-x-2 text-lg font-medium">
                      <span>{t('home:computer_science')}</span>
                      <span className="px-2 py-px text-sm rounded-lg bg-500 text-500">
                        {t('home:student')}
                      </span>
                    </p>
                    <p className="text-300">{t('home:computer_science_description')}</p>
                  </div>
                  <div className="flex flex-col w-12 space-y-1 sm:w-20 xl:w-28">
                    <span className="text-xl font-medium text-900">20%</span>
                    <span className="flex items-center h-4 rounded-full bg-300">
                      <span className="w-1/5 h-3 ml-px rounded-full bg-900"></span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-none hidden w-20 h-20 p-5 mx-2 rounded-full sm:block bg-500">
                    <span className="w-full fill-current text-100">
                      <DDDesignerIcon />
                    </span>
                  </div>
                  <div className="flex-1 space-y-2 text-left">
                    <p className="space-x-2 text-lg font-medium">
                      <span>3D Designer</span>
                      <span className="px-2 py-px text-sm rounded-lg bg-500 text-500">
                        {t('home:cto')}
                      </span>
                    </p>
                    <p className="text-300">{t('home:3d_designer_description')}</p>
                  </div>
                  <div className="flex flex-col w-12 space-y-1 sm:w-20 xl:w-28">
                    <span className="text-xl font-medium text-900">10%</span>
                    <span className="flex items-center h-4 rounded-full bg-300">
                      <span className="w-2/12 h-3 ml-px rounded-full bg-900"></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold lg:text-4xl">{t('home:more_about_me')}</h3>
          <div className="flex justify-between max-w-xl mx-auto">
            <Link href="/#activity">
              <div className="flex-col items-center hidden space-y-1 cursor-pointer sm:flex">
                <span className="w-8 fill-current text-300">
                  <HistoryIcon />
                </span>
                <span>{t('header:activity')}</span>
              </div>
            </Link>
            <Link href="/#timeline">
              <div className="flex-col items-center hidden space-y-1 cursor-pointer sm:flex">
                <span className="w-8 fill-current text-300">
                  <TimelineIcon />
                </span>
                <span>{t('header:timeline')}</span>
              </div>
            </Link>
            <Link href="/favorites">
              <div className="flex flex-col items-center space-y-1 cursor-pointer sm:hidden">
                <span className="w-8 fill-current text-300">
                  <FavoritesIcon />
                </span>
                <span>{t('header:favorites')}</span>
              </div>
            </Link>
            <Link href="/portfolio">
              <div className="flex flex-col items-center space-y-1 cursor-pointer text-primary-500">
                <span className="w-8 fill-current sm:w-10">
                  <PortfolioIcon />
                </span>
                <span>{t('header:portfolio')}</span>
              </div>
            </Link>
            <Link href="/favorites">
              <div className="flex-col items-center hidden space-y-1 cursor-pointer sm:flex">
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
      </div>
    </section>
  )
}
