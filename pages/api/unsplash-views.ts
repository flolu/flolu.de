import type {NextApiRequest, NextApiResponse} from 'next'


import {fetcher} from '@/lib//fetcher'
import {setCacheControl} from '@/lib//set-cache-control'

const api = 'https://api.unsplash.com'
const key = process.env.UNSPLASH_ACCESS_KEY
const username = 'flolu'
const cacheMaxAge = 60 * 60

interface StatisticsData {
  username: string
  views: {
    total: number
  }
}

export async function getUnsplashViews() {
  const query = `client_id=${key}`
  const stats = await fetcher<StatisticsData>(`${api}/users/${username}/statistics?${query}`)
  return stats.views.total
}

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const views = await getUnsplashViews()

  setCacheControl(res, cacheMaxAge, cacheMaxAge / 2)
  res.status(200).json({views})
}
