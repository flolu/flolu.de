import {useTranslation} from 'react-i18next'

export function Activity(props: any) {
  const {t} = useTranslation()

  const {activities, commits, oura, instagramPosts, youTubeVideos,unsplashPhotos} = props

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
                  <span className="ml-1 text-sm bg-500">+-{commit.stats.total}</span>
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
                  <span className="ml-1 text-sm bg-500">{activity.distance}m</span>
                  <span className="ml-1 text-sm bg-500">{activity.time}s</span>
                  <p className="text-xs">{activity.type}</p>
                  <p className="text-xs">{activity.start_date}</p>
                </div>
              )
            })}
          </div>
        </div>

        <h2 className="mb-2 text-2xl font-medium">Oura</h2>
        <div className="p-2 overflow-y-auto h-96 bg-100">
          <div className="space-y-4">
            {oura.map((sleep: any, index: number) => {
              return (
                <div className="text-left" key={index}>
                  <p>Sleep score: {sleep.score}</p>
                  <span className="ml-1 text-sm bg-500">{sleep.duration}s</span>
                  <span className="ml-1 text-sm bg-500">{sleep.hr_lowest} LRHR</span>
                  <span className="ml-1 text-sm bg-500">{sleep.deep} deep</span>
                  <p className="text-xs">{sleep.date}</p>
                </div>
              )
            })}
          </div>
        </div>

        <h2 className="mb-2 text-2xl font-medium">Instagram</h2>
        <div className="p-2 overflow-y-auto h-96 bg-100">
          <div className="space-y-4">
            {instagramPosts.map((post: any, index: number) => {
              return (
                <div className="text-left" key={index}>
                  <a href={post.permalink}>
                    <img src={post.media_url}></img>
                  </a>
                  <span className="ml-1 text-sm bg-500">{post.timestamp}</span>
                </div>
              )
            })}
          </div>
        </div>

        <h2 className="mb-2 text-2xl font-medium">YouTube</h2>
        <div className="p-2 overflow-y-auto h-96 bg-100">
          <div className="space-y-4">
            {youTubeVideos.map((video: any, index: number) => {
              return (
                <div className="text-left" key={index}>
                  <a href={video.url}>
                    <img src={video.thumbnail.url}></img>
                  </a>
                  <p className="ml-1 text-sm bg-500">{video.title}</p>
                  <p className="ml-1 text-sm bg-500">{video.publishTime}</p>
                </div>
              )
            })}
          </div>
        </div>

        <h2 className="mb-2 text-2xl font-medium">Unsplash</h2>
        <div className="p-2 overflow-y-auto h-96 bg-100">
          <div className="space-y-4">
            {unsplashPhotos.map((photo: any, index: number) => {
              return (
                <div className="text-left" key={index}>
                  <a href={photo.url}>
                    <img src={photo.imageUrl}></img>
                  </a>
                  <span className="ml-1 text-sm bg-500">{photo.createdAt}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
