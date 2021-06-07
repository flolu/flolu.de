import {useTranslation} from 'react-i18next'

import {
  GitHubCommit,
  IActivity,
  InstagramPost,
  OuraNight,
  StravaActivity,
  UnsplashPhoto,
  YouTubeVideo,
} from '../../types/activity'

export function Activity(props: any) {
  const {t} = useTranslation()

  const activities = props.activities as IActivity[]

  return (
    <section id="activity">
      <div className="max-w-xl mx-auto mb-8 space-y-2 text-center">
        <h1 className="text-4xl font-bold lg:text-6xl">{t('home:activity')}</h1>

        <div className="flex flex-col content-center p-2 space-y-4">
          {/* TODO probably better to group by day and summarize commits */}
          {activities.map((activity, index) => {
            return (
              <div key={index} className="flex flex-col content-center">
                {activity.type === 'github_commit' && (
                  <a href={(activity.payload as GitHubCommit).url}>
                    Edited {(activity.payload as GitHubCommit).stats.total} lines of code in{' '}
                    {(activity.payload as GitHubCommit).repo}
                  </a>
                )}

                {activity.type === 'instagram_post' && (
                  <a href={(activity.payload as InstagramPost).url}>
                    <img src={(activity.payload as InstagramPost).imageUrl}></img>
                  </a>
                )}

                {activity.type === 'oura_night' && (
                  <div>
                    Slept {Math.round((activity.payload as OuraNight).total / 60 / 60)} hours with a
                    score of {(activity.payload as OuraNight).score}
                  </div>
                )}

                {activity.type === 'strava_activity' && (
                  <a href={(activity.payload as StravaActivity).url}>
                    {Math.round((activity.payload as StravaActivity).time / 60)} minute long{' '}
                    {(activity.payload as StravaActivity).type} workout
                  </a>
                )}

                {activity.type === 'unsplash-photo' && (
                  <a href={(activity.payload as UnsplashPhoto).url}>
                    <img src={(activity.payload as UnsplashPhoto).imageUrl}></img>
                  </a>
                )}

                {activity.type === 'youtube-video' && (
                  <a href={(activity.payload as YouTubeVideo).url}>
                    <img src={(activity.payload as YouTubeVideo).thumbnail.url}></img>
                  </a>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
