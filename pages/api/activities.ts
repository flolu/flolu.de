import {Octokit} from 'octokit'
import * as queryString from 'query-string'

import {isSameDay} from '@/lib//is-same-day'
import {setCacheControl} from '@/lib//set-cache-control'
import {fetcher} from '@/lib/fetcher'
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
} from '@/types//activity'

import type {NextApiRequest, NextApiResponse} from 'next'
const cacheMaxAge = 5 * 60
const api = 'https://graph.instagram.com'

interface UserData {
  media: {
    data: {
      id: string
    }[]
  }
}

async function getInstagramPosts(after: Date) {
  try {
    const userId = '17841402069339334'
    const token = process.env.INSTAGRAM_TOKEN
    const user = await fetcher<UserData>(`${api}/${userId}?fields=media&access_token=${token}`)

    const activities: IActivity<IInstagramPost>[] = await Promise.all(
      user.media.data.map(async ({id}: any) => {
        const mediaResponse = await fetch(
          `${api}/${id}?fields=media_url,permalink,timestamp&access_token=${token}`,
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

    return activities.filter(activity => Number(new Date(activity.timestamp)) >= Number(after))
  } catch (e) {
    return []
  }
}

async function getYouTubeVideos(after: Date) {
  const channelId = 'UCpeRl3f3jAMKGoomvddzBoQ'
  const key = process.env.YOUTUBE_API_KEY

  const videosResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${channelId}&part=snippet,id&order=date&publishedAfter=${after.toISOString()}`,
  )
  const videos = await videosResponse.json()

  let activities: IActivity<IYouTubeVideo>[] = []
  if (videos.items) {
    activities = videos.items.map((video: any) => {
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

  return activities.filter(activity => Number(new Date(activity.timestamp)) >= Number(after))
}

async function getUnsplashPhotos(after: Date) {
  const username = 'flolu'
  const photosResponse = await fetch(
    `https://api.unsplash.com/users/${username}/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}`,
  )
  const photos = await photosResponse.json()

  const activities = photos.map((photo: any) => {
    const activity: IActivity<IUnsplashPhoto> = {
      type: 'unsplash-photo',
      payload: {
        url: `https://unsplash.com/photos/${photo.id}`,
        width: photo.width,
        height: photo.height,
        imageUrl: photo.urls.thumb,
        description: photo.description,
      },
      timestamp: photo.created_at,
    }
    return activity
  }) as IActivity<IUnsplashPhoto>[]

  return activities.filter(activity => Number(new Date(activity.timestamp)) >= Number(after))
}

async function getGitHubCommits(after: Date) {
  const username = 'flolu'
  const userId = 34191949
  const org = 'drakery3d'
  const octokit = new Octokit({auth: process.env.GITHUB_TOKEN})

  const [personalEvents, orgEvents] = await Promise.all([
    octokit.rest.activity.listEventsForAuthenticatedUser({username, per_page: 100}),
    octokit.rest.activity.listOrgEventsForAuthenticatedUser({org, username, per_page: 100}),
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
  for (const event of personalEvents.data) {
    if (!event.created_at || Number(new Date(event.created_at)) < Number(after)) break

    if (event.type === 'PushEvent' && event.actor.id === userId) {
      const commits = (event.payload as any).commits
      commits.forEach((commit: any) => {
        baseCommits.push(mapToCommit(event, commit))
      })
    }
  }
  for (const event of orgEvents.data) {
    if (!event.created_at || Number(new Date(event.created_at)) < Number(after)) break

    if (event.type === 'PushEvent' && event.actor.id === userId) {
      // console.log(event.payload)
      const commits = (event.payload as any).commits
      commits.forEach((commit: any) => {
        baseCommits.push(mapToCommit(event, commit))
      })
    }
  }

  let relevantCommits: IActivity<IGitHubCommit>[] = []

  await Promise.all(
    baseCommits.map(async commit => {
      const {data} = await octokit.request({url: commit.payload.apiUrl})
      const isInDateRange = Number(new Date(data.commit.author.date)) > Number(after)
      const isDuplicate = relevantCommits.find(commit => commit.payload.sha === data.sha)
      if (isInDateRange && !isDuplicate) {
        const activity: IActivity<IGitHubCommit> = {
          ...commit,
          payload: {
            ...commit.payload,
            stats: data.stats,
          },
        }
        relevantCommits.push(activity)
      }
    }),
  )

  return relevantCommits
}

async function getStravaActivities(after: Date) {
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
  const rawActivities = await activitiesResponse.json()

  let activities: IActivity<IStravaActivity>[] = []

  for (const data of rawActivities) {
    if (Number(new Date(data.start_date)) < Number(after)) break

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
    activities.push(activity)
  }

  return activities
}

async function getOuraNights(after: Date) {
  const year = after.getUTCFullYear()
  const month = ('0' + (after.getMonth() + 1)).slice(-2)
  const date = ('0' + after.getDate()).slice(-2)
  const startDay = `${year}-${month}-${date}`
  const query = queryString.stringify({start: startDay})
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
        light: night.light,
        score: night.score,
        total: night.total,
      },
      timestamp: night.bedtime_end,
    }
    return activity
  }) as IActivity<IOuraNight>[]
}

export async function getActivities() {
  const now = new Date()
  const oneWeekAgo = new Date()
  oneWeekAgo.setDate(now.getDate() - 7)

  const [
    gitHubCommits,
    stravaActivities,
    ouraNights,
    instagramPosts,
    youTubeVideos,
    unsplashPhotos,
  ] = await Promise.all([
    getGitHubCommits(oneWeekAgo),
    getStravaActivities(oneWeekAgo),
    getOuraNights(oneWeekAgo),
    getInstagramPosts(oneWeekAgo),
    getYouTubeVideos(oneWeekAgo),
    getUnsplashPhotos(oneWeekAgo),
  ])

  const activities = [
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

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const activities = await getActivities()

  setCacheControl(res, cacheMaxAge, cacheMaxAge / 2)
  res.status(200).json(activities)
}
