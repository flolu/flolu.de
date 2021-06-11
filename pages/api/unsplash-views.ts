import type {NextApiRequest, NextApiResponse} from 'next'

import * as queryString from 'query-string'

const api = 'https://api.unsplash.com'
const key = process.env.UNSPLASH_ACCESS_KEY
const username = 'flolu'
const cacheMaxAge = 1200

interface StatisticsData {
  username: string
  views: {
    total: number
  }
}

async function getViews() {
  const query = queryString.stringify({client_id: key})
  const res = await fetch(`${api}/users/${username}/statistics?${query}`)
  const stats: StatisticsData = await res.json()
  return stats.views.total
}

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const views = await getViews()

  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${cacheMaxAge}, stale-while-revalidate=${cacheMaxAge / 2}`,
  )

  res.status(200).json({views})
}
