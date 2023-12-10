import type {NextApiRequest, NextApiResponse} from 'next'

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
  const query = `per_page=${user.public_repos}`
  const repos = await fetcher<RepoData[]>(`${api}/users/${username}/repos?${query}`, {headers})
  const sourceRepos = repos.filter(repo => !repo.fork)
  return sourceRepos.reduce((accumulator, repo) => {
    return accumulator + repo.stargazers_count
  }, 0)
}

export async function getStars() {
  const [personalStars, drakeryStars] = await Promise.all([
    getStarsOf(username),
    getStarsOf(drakery),
  ])
  return personalStars + drakeryStars
}

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const stars = await getStars()

  setCacheControl(res, cacheMaxAge, cacheMaxAge / 2)
  res.status(200).json({stars})
}
