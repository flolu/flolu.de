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
import {StravaActivity} from './StravaActivity'

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
                          <a href={(activity.payload as IInstagramPost).url}>
                            <img src={(activity.payload as IInstagramPost).imageUrl}></img>
                          </a>
                        )}

                        {activity.type === 'oura_night' && (
                          <div>
                            Slept {Math.round((activity.payload as IOuraNight).total / 60 / 60)}{' '}
                            hours with a score of {(activity.payload as IOuraNight).score}
                          </div>
                        )}

                        {activity.type === 'unsplash-photo' && (
                          <a href={(activity.payload as IUnsplashPhoto).url}>
                            <img src={(activity.payload as IUnsplashPhoto).imageUrl}></img>
                          </a>
                        )}

                        {activity.type === 'youtube-video' && (
                          <a href={(activity.payload as IYouTubeVideo).url}>
                            <img src={(activity.payload as IYouTubeVideo).thumbnail.url}></img>
                          </a>
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
