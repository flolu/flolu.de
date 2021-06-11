import type {NextApiRequest, NextApiResponse} from 'next'
import {google} from 'googleapis'

import {setCacheControl} from '@/lib//set-cache-control'

const googleAuth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  },
  scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
})

const youtube = google.youtube({
  auth: googleAuth,
  version: 'v3',
})

const channelIds = [
  'UCpeRl3f3jAMKGoomvddzBoQ',
  'UCa_UyaAlrWAgjZM0GB6zvpw',
  'UCxJ0yiNnIeF7YwGfUHKmqzA',
]
const cacheMaxAge = 60 * 60

async function getViews() {
  const response = await youtube.channels.list({
    id: channelIds,
    part: ['statistics', 'statistics', 'statistics'],
  })

  return response.data.items!.reduce((accumulator, channel) => {
    return accumulator + Number(channel.statistics!.viewCount)
  }, 0)
}

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const views = await getViews()

  setCacheControl(res, cacheMaxAge, cacheMaxAge / 2)
  res.status(200).json({views})
}
