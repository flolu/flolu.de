import {FC} from 'react'
import {useTranslation} from 'react-i18next'

interface Props {
  githubStars: number
  unsplashViews: number
  youTubeViews: number
  locale: string
}

export const Statistics: FC<Props> = props => {
  const {t} = useTranslation()
  const formatter = new Intl.NumberFormat(props.locale)

  return (
    <section id="about-me">
      <div className="mb-8 space-y-8 text-center sm:space-y-16">
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
      </div>
    </section>
  )
}
