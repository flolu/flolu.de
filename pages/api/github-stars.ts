import type {NextApiRequest, NextApiResponse} from 'next'

import * as queryString from 'query-string'

const api = 'https://api.github.com'
const username = 'flolu'
const cacheMaxAge = 1200

interface RepoData {
  fork: boolean
  stargazers_count: number
}

async function getStars() {
  const userRes = await fetch(`${api}/users/${username}`)
  const {public_repos} = await userRes.json()
  const query = queryString.stringify({per_page: public_repos})
  const res = await fetch(`${api}/users/${username}/repos?${query}`)

  const repos: RepoData[] = await res.json()
  const mine = repos.filter(repo => !repo.fork)
  return mine.reduce((accumulator, repo) => {
    return accumulator + repo.stargazers_count
  }, 0)
}

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const stars = await getStars()

  res.setHeader(
    'Cache-Control',
    `public, s-maxage=${cacheMaxAge}, stale-while-revalidate=${cacheMaxAge / 2}`,
  )

  res.status(200).json({stars})
}
