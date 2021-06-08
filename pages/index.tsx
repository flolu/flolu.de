import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import {Octokit} from 'octokit'
import * as queryString from 'query-string'
import {FC} from 'react'

import {Footer} from '../components/Footer'
import {Header} from '../components/Header'
import {AboutMe} from '../components/Home/AboutMe'
import {Activity} from '../components/Home/Activity'
import {GetInTouch} from '../components/Home/GetInTouch'
import {HomeHead} from '../components/Home/Head'
import {Timeline} from '../components/Home/Timeline'
import {isSameDay} from '../lib/is-same-day'
import {
  IActivity,
  IActivityDay,
  IGitHubBaseCommit,
  IGitHubCommit,
  IInstagramPost,
  IOuraNight,
  IStravaActivity,
  IUnsplashPhoto,
  IYouTubeVideo,
} from '../types/activity'

interface Props {
  activities: IActivityDay[]
  locale: string
}

const Home: FC<Props> = props => {
  const {t} = useTranslation()

  return (
    <div>
      <Head>
        <title>Florian Ludewig</title>
        <meta name="description" content={t('footer:tagline')} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header spacer={false} />
      <div className="h-24 md:hidden"></div>

      <main className="mb-8 space-y-16 sm:mb-16 sm:space-y-32">
        <section className="px-4 mx-auto max-w-7xl">
          <HomeHead />
        </section>

        <section className="px-4 mx-auto max-w-7xl">
          <AboutMe />
        </section>

        <section className="px-4 mx-auto max-w-7xl">
          <Activity activities={props.activities} locale={props.locale} />
        </section>

        <section>
          <GetInTouch />
        </section>

        <section className="px-4 mx-auto max-w-7xl">
          <Timeline />
        </section>
      </main>

      <Footer />
    </div>
  )
}

async function getInstagramPosts() {
  const userId = '17841402069339334'
  const token = process.env.INSTAGRAM_TOKEN
  const userResponse = await fetch(
    `https://graph.instagram.com/${userId}?fields=media&access_token=${token}`,
  )
  const user = await userResponse.json()

  const activities: IActivity<IInstagramPost>[] = await Promise.all(
    user.media.data.map(async ({id}: any) => {
      const mediaResponse = await fetch(
        `https://graph.instagram.com/${id}?fields=media_url,permalink,timestamp&access_token=${token}`,
      )
      const media = await mediaResponse.json()

      const activity: IActivity<IInstagramPost> = {
        type: 'instagram_post',
        payload: {
          imageUrl: media.media_url,
          url: media.permalink,
        },
        timestamp: media.timestamp,
      }

      return activity
    }),
  )

  return activities
}

async function getYouTubeVideos() {
  const channelId = 'UCpeRl3f3jAMKGoomvddzBoQ'
  const key = process.env.YOUTUBE_API_KEY

  const videosResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`,
  )
  const videos = await videosResponse.json()

  return videos.items.map((video: any) => {
    const activity: IActivity<IYouTubeVideo> = {
      type: 'youtube-video',
      payload: {
        thumbnail: {
          url: video.snippet.thumbnails.high.url,
          width: video.snippet.thumbnails.high.width,
          height: video.snippet.thumbnails.high.height,
        },
        title: video.snippet.title,
        url: `https://www.youtube.com/watch?v=${video.id.videoId}`,
      },
      timestamp: video.snippet.publishTime,
    }
    return activity
  }) as IActivity<IYouTubeVideo>[]
}

async function getUnsplashPhotos() {
  const username = 'flolu'
  const photosResponse = await fetch(
    `https://api.unsplash.com/users/${username}/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
  )
  const photos = await photosResponse.json()

  return photos.map((photo: any) => {
    const activity: IActivity<IUnsplashPhoto> = {
      type: 'unsplash-photo',
      payload: {
        url: `https://unsplash.com/photos/${photo.id}`,
        width: photo.width,
        height: photo.height,
        imageUrl: photo.urls.small,
      },
      timestamp: photo.created_at,
    }
    return activity
  }) as IActivity<IUnsplashPhoto>[]
}

async function getGitHubCommits() {
  const username = 'flolu'
  const org = 'drakery3d'
  const octokit = new Octokit({auth: process.env.GITHUB_TOKEN})

  const [personalEvents, orgEvents] = await Promise.all([
    octokit.rest.activity.listEventsForAuthenticatedUser({username}),
    octokit.rest.activity.listOrgEventsForAuthenticatedUser({org, username}),
  ])

  const mapToCommit = (event: any, commit: any): IActivity<IGitHubBaseCommit> => {
    return {
      type: 'github_commit',
      payload: {
        sha: commit.sha,
        message: commit.message,
        url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
        apiUrl: commit.url,
        repo: event.repo.name,
      },
      timestamp: event.created_at || '',
    }
  }

  let baseCommits: IActivity<IGitHubBaseCommit>[] = []
  personalEvents.data.forEach(event => {
    if (event.type === 'PushEvent') {
      const commits = (event.payload as any).commits
      commits.forEach((commit: any) => {
        baseCommits.push(mapToCommit(event, commit))
      })
    }
  })
  orgEvents.data.forEach(event => {
    if (event.type === 'PushEvent') {
      const commits = (event.payload as any).commits
      commits.forEach((commit: any) => {
        if (commit.author.name === username) {
          baseCommits.push(mapToCommit(event, commit))
        }
      })
    }
  })

  return Promise.all(
    baseCommits.map(async commit => {
      const {data} = await octokit.request({url: commit.payload.apiUrl})
      const activity: IActivity<IGitHubCommit> = {
        ...commit,
        payload: {
          ...commit.payload,
          stats: data.stats,
        },
      }
      return activity
    }),
  )
}

async function getStravaActivities() {
  const query = queryString.stringify({
    client_id: process.env.STRAVA_CLIENT_ID,
    client_secret: process.env.STRAVA_CLIENT_SECRET,
    refresh_token: process.env.STRAVA_REFRESH_TOKEN,
    grant_type: 'refresh_token',
  })
  const tokenResponse = await fetch(`https://www.strava.com/oauth/token?${query}`, {method: 'POST'})
  const token = await tokenResponse.json()

  const {access_token} = token
  const activitiesResponse = await fetch('https://www.strava.com/api/v3/athlete/activities', {
    headers: {Authorization: `Bearer ${access_token}`},
  })
  const activities = await activitiesResponse.json()

  return activities.map((data: any) => {
    const activity: IActivity<IStravaActivity> = {
      type: 'strava_activity',
      payload: {
        distance: data.distance,
        map: data.map,
        name: data.name,
        time: data.moving_time,
        type: data.type,
        url: `https://www.strava.com/activities/${data.id}`,
        avgHr: data.average_heartrate,
        avgSpeed: data.average_speed,
        avgTemperature: data.average_temp,
        elevGain: data.total_elevation_gain,
      },
      timestamp: data.start_date,
    }
    return activity
  }) as IActivity<IStravaActivity>[]
}

async function getOuraNights() {
  // TODO dynamically set start date
  const query = queryString.stringify({start: '2021-05-27'})
  const ouraResponse = await fetch(`https://api.ouraring.com/v1/sleep?${query}`, {
    headers: {Authorization: `Bearer ${process.env.OURA_ACCESS_TOKEN}`},
  })
  const {sleep} = await ouraResponse.json()
  return sleep.map((night: any) => {
    const activity: IActivity<IOuraNight> = {
      type: 'oura_night',
      payload: {
        averageHr: night.hr_average,
        deep: night.deep,
        duration: night.duration,
        lowestHr: night.hr_lowest,
        rem: night.rem,
        score: night.score,
        total: night.total,
      },
      timestamp: night.summary_date,
    }
    return activity
  }) as IActivity<IOuraNight>[]
}

// TODO only fetch data from last 10 days or so
async function assembleActivities() {
  const [
    gitHubCommits,
    stravaActivities,
    ouraNights,
    instagramPosts,
    youTubeVideos,
    unsplashPhotos,
  ] = await Promise.all([
    getGitHubCommits(),
    getStravaActivities(),
    getOuraNights(),
    getInstagramPosts(),
    getYouTubeVideos(),
    getUnsplashPhotos(),
  ])

  const activities: IActivity[] = [
    ...gitHubCommits,
    ...stravaActivities,
    ...ouraNights,
    ...instagramPosts,
    ...youTubeVideos,
    ...unsplashPhotos,
  ]

  const sorted = activities.sort((a, b) => {
    return Number(new Date(b.timestamp)) - Number(new Date(a.timestamp))
  })

  let groupedByDay: IActivityDay[] = []
  let previousDate: string | undefined
  for (const activity of sorted) {
    if (previousDate && isSameDay(new Date(activity.timestamp), new Date(previousDate))) {
      groupedByDay[groupedByDay.length - 1].activities.push(activity)
    } else {
      groupedByDay.push({date: activity.timestamp, activities: [activity]})
    }
    previousDate = activity.timestamp
  }

  return groupedByDay
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const namespaces = ['header', 'footer', 'home', 'timeline']

  const [translations, activities] = await Promise.all([
    serverSideTranslations(locale || 'en', namespaces),
    assembleActivities(),
  ])

  return {
    props: {
      ...translations,
      activities,
      locale: locale || 'en',
      // TODO utilize last updated
      lastUpdated: Date.now().toString(),
    },
    revalidate: 60 * 60 * 1,
  }
}

export default Home
