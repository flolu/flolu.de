import type {NextApiRequest, NextApiResponse} from 'next'
import * as queryString from 'query-string'

import {fetcher} from '@/lib//fetcher'
import {setCacheControl} from '@/lib//set-cache-control'

const api = 'https://api.github.com'
const username = 'flolu'
const drakery = 'drakery3d'
const cacheMaxAge = 60 * 60
const token = process.env.GITHUB_TOKEN
const headers = {Authorization: `token ${token}`}

interface UserData {
  public_repos: number
}

interface RepoData {
  fork: boolean
  stargazers_count: number
}

async function getStarsOf(username: string) {
  const user = await fetcher<UserData>(`${api}/users/${username}`, {headers})
  const query = queryString.stringify({per_page: user.public_repos})
  const repos = await fetcher<RepoData[]>(`${api}/users/${username}/repos?${query}`, {headers})
  const sourceRepos = repos.filter(repo => !repo.fork)
  return sourceRepos.reduce((accumulator, repo) => {
    return accumulator + repo.stargazers_count
  }, 0)
}

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const [personalStars, drakeryStars] = await Promise.all([
    getStarsOf(username),
    getStarsOf(drakery),
  ])
  const stars = personalStars + drakeryStars

  setCacheControl(res, cacheMaxAge, cacheMaxAge / 2)
  res.status(200).json({stars})
}
