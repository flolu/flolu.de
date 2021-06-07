import {useTranslation} from 'react-i18next'

export function Activity(props: any) {
  const {t} = useTranslation()

  const activities = props.activities
  const commits = props.commits

  return (
    <section id="activity">
      <div className="max-w-xl mx-auto mb-8 space-y-2 text-center">
        <h1 className="text-4xl font-bold lg:text-6xl">{t('home:activity')}</h1>

        <h2 className="mb-2 text-2xl font-medium">GitHub</h2>
        <div className="p-2 overflow-y-auto h-96 bg-100">
          <div className="space-y-4">
            {commits.map((commit: any, index: number) => {
              return (
                <div className="text-left" key={index}>
                  <a href={commit.url}>
                    {commit.message.length > 50
                      ? `${commit.message.slice(0, 50)}...`
                      : commit.message}
                  </a>
                  <span className="ml-1 text-sm bg-100">+-{commit.stats.total}</span>
                  <p className="text-xs">{commit.repo}</p>
                  <p className="text-xs">{commit.createdAt}</p>
                </div>
              )
            })}
          </div>
        </div>

        <h2 className="mb-2 text-2xl font-medium">Strava</h2>
        <div className="p-2 overflow-y-auto h-96 bg-100">
          <div className="space-y-4">
            {activities.map((activity: any, index: number) => {
              return (
                <div className="text-left" key={index}>
                  <a href={`https://www.strava.com/activities/${activity.id}`}>{activity.name}</a>
                  <span className="ml-1 text-sm bg-100">{activity.distance}m</span>
                  <span className="ml-1 text-sm bg-100">{activity.time}s</span>
                  <p className="text-xs">{activity.type}</p>
                  <p className="text-xs">{activity.start_date}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
