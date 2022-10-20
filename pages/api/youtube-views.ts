import type {NextApiRequest, NextApiResponse} from 'next'
import {google} from 'googleapis'

import {setCacheControl} from '@/lib//set-cache-control'

const youtube = google.youtube({
  auth: process.env.YOUTUBE_API_KEY,
  version: 'v3',
})

const channelIds = [
  'UCpeRl3f3jAMKGoomvddzBoQ',
  'UCa_UyaAlrWAgjZM0GB6zvpw',
  'UCxJ0yiNnIeF7YwGfUHKmqzA',
]
const cacheMaxAge = 60 * 60

export async function getYouTubeViews() {
  try {
    const response = await youtube.channels.list({
      id: channelIds,
      part: ['statistics', 'statistics', 'statistics'],
    })
    if (!response.data.items) throw new Error()

    return response.data.items.reduce((accumulator, channel) => {
      const views = channel.statistics ? Number(channel.statistics.viewCount) : 0
      return accumulator + views
    }, 0)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
    // Fallback, manually calculated (Oct 20, 2022)
    return 193729 + 242849 + 366568
  }
}

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const views = await getYouTubeViews()

  setCacheControl(res, cacheMaxAge, cacheMaxAge / 2)
  res.status(200).json({views})
}
