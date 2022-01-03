import Image from 'next/image'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'

import {DrakeryLogo} from '@/icons/DrakeryLogo'
import {LaughIcon} from '@/icons/LaughIcon'
import {SchoolIcon} from '@/icons/SchoolIcon'

import {DDDesignerIcon} from '../Icons/3DDesignerIcon'

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
            rel="noreferrer"
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
            rel="noreferrer"
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
            rel="noreferrer"
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
              src="https://storage.googleapis.com/flolu-website/me/DSC_9184.jpg"
              alt="Avatar of Flo"
              layout="responsive"
              width={512}
              height={512}
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
                    </p>
                    <p className="text-300">{t('home:drakery_description')}</p>
                  </div>
                  <div className="flex flex-col w-12 space-y-1 sm:w-20 xl:w-28">
                    <span className="text-xl font-medium text-primary-900">30%</span>
                    <span className="flex items-center h-4 rounded-full bg-primary-50">
                      <span className="h-3 ml-px rounded-full w-3/10 bg-primary-500"></span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-none hidden w-20 h-20 p-5 mx-2 rounded-full sm:block bg-primary-50">
                    <span className="w-full fill-current text-primary-500">
                      <DDDesignerIcon />
                    </span>
                  </div>
                  <div className="flex-1 space-y-2 text-left">
                    <p className="space-x-2 text-lg font-medium">
                      <span>3D Designer</span>
                    </p>
                    <p className="text-300">{t('home:3d_designer_description')}</p>
                  </div>
                  <div className="flex flex-col w-12 space-y-1 sm:w-20 xl:w-28">
                    <span className="text-xl font-medium text-primary-900">20%</span>
                    <span className="flex items-center h-4 rounded-full bg-primary-50">
                      <span className="w-1/5 h-3 ml-px rounded-full bg-primary-500"></span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-none hidden w-24 h-24 p-5 rounded-full sm:block bg-500">
                    <span className="w-full fill-current text-100">
                      <LaughIcon />
                    </span>
                  </div>
                  <div className="flex-1 space-y-2 text-left">
                    <p className="space-x-2 text-lg font-medium">
                      <span>{t('home:personal_life')}</span>
                    </p>
                    <p className="text-300">{t('home:personal_life_description')}</p>
                  </div>
                  <div className="flex flex-col w-12 space-y-1 sm:w-20 xl:w-28">
                    <span className="text-xl font-medium text-900">30%</span>
                    <span className="flex items-center h-4 rounded-full bg-300">
                      <span className="h-3 ml-px rounded-full w-3/10 bg-900"></span>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
