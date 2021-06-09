import {FC} from 'react'
import {useTranslation} from 'react-i18next'

import {
  IActivity,
  IActivityDay,
  IGitHubCommit,
  IInstagramPost,
  IOuraNight,
  IStravaActivity,
  IUnsplashPhoto,
  IYouTubeVideo,
} from '../../types/activity'
import {ActivityDate} from './ActivityDate'
import {DateWithTime} from './DateWithTime'
import {GitHubCommit} from './GitHubCommit'
import {InstagramPost} from './InstagramPost'
import {OuraNight} from './OuraNight'
import {StravaActivity} from './StravaActivity'
import {UnsplashPhoto} from './UnsplashPhoto'
import {YouTubeVideo} from './YouTubeVideo'

interface Props {
  activities: IActivityDay[]
  locale: string
  lastUpdated: string
}

export const Activity: FC<Props> = props => {
  const {t} = useTranslation()

  return (
    <section id="activity">
      <div className="max-w-xl mx-auto mb-8 space-y-2 text-center md:max-w-2xl">
        <h2 className="text-4xl font-bold lg:text-6xl">{t('home:activity')}</h2>

        <p className="text-sm text-300">
          <span>{t('home:last_7_days')}, </span>
          <span>{t('home:last_updated_at')}: </span>
          <span className="font-medium">
            <DateWithTime locale={props.locale} timestamp={props.lastUpdated} />
          </span>
        </p>

        {props.activities.map((day, idx) => {
          return (
            <div key={idx}>
              <div className="flex items-center">
                <div className="flex flex-col items-center w-5 h-24 mr-2 md:h-32">
                  <span className="flex-1 border-r-2 border-dashed border-background-900"></span>
                  <span className="w-3 h-3 border-2 rounded-full border-background-900 bg-500"></span>
                  <span className="flex-1 border-r-2 border-dashed border-background-900"></span>
                </div>
                <ActivityDate locale={props.locale} timestamp={day.date} />
              </div>
              <div className="text-xs sm:text-sm md:text-base">
                {day.activities.map((activity, index) => {
                  return (
                    <div key={index}>
                      {activity.type === 'github_commit' && (
                        <GitHubCommit activity={activity as IActivity<IGitHubCommit>} />
                      )}

                      {activity.type === 'strava_activity' && (
                        <StravaActivity activity={activity as IActivity<IStravaActivity>} />
                      )}

                      {activity.type === 'instagram_post' && (
                        <InstagramPost activity={activity as IActivity<IInstagramPost>} />
                      )}

                      {activity.type === 'oura_night' && (
                        <OuraNight activity={activity as IActivity<IOuraNight>} />
                      )}

                      {activity.type === 'unsplash-photo' && (
                        <UnsplashPhoto activity={activity as IActivity<IUnsplashPhoto>} />
                      )}

                      {activity.type === 'youtube-video' && (
                        <YouTubeVideo activity={activity as IActivity<IYouTubeVideo>} />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
