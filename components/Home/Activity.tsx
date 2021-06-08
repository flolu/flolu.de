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
import {GitHubCommit} from './GitHubCommit'
import {InstagramPost} from './InstagramPost'
import {OuraNight} from './OuraNight'
import {StravaActivity} from './StravaActivity'
import {UnsplashPhoto} from './UnsplashPhoto'
import {YouTubeVideo} from './YouTubeVideo'

interface Props {
  activities: IActivityDay[]
  locale: string
}

export const Activity: FC<Props> = props => {
  const {t} = useTranslation()

  return (
    <section id="activity">
      <div className="max-w-xl mx-auto mb-8 space-y-2 text-center">
        <h1 className="text-4xl font-bold lg:text-6xl">{t('home:activity')}</h1>

        <div className="space-y-16">
          {props.activities.map((day, idx) => {
            return (
              <div key={idx}>
                <ActivityDate locale={props.locale} timestamp={day.date} />
                <div className="flex flex-col content-center p-2 space-y-4">
                  {/* TODO probably better to group by day and summarize commits */}
                  {/* TODO space in between days (group by day in backend) */}
                  {/* TODO group similar commits (commits into same repo) */}
                  {day.activities.map((activity, index) => {
                    return (
                      <div key={index} className="flex flex-col content-center w-full">
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
      </div>
    </section>
  )
}
