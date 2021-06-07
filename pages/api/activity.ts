import type {NextApiRequest, NextApiResponse} from 'next'
import {Octokit} from 'octokit'

function mapToCommit(event: any, commit: any) {
  return {
    authorName: commit.author.name,
    sha: commit.sha,
    ref: (event.payload as any).ref,
    message: commit.message,
    url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
    apiUrl: commit.url,
    repo: event.repo.name,
    createdAt: event.created_at,
  }
}

const octokit = new Octokit({auth: process.env.GITHUB_TOKEN})

// TODO strava/garmin, instagram, youtube, unsplash, oura

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.time()

  let floluCommits: any[] = []
  const floluEvents = await octokit.rest.activity.listEventsForAuthenticatedUser({
    username: 'flolu',
  })
  floluEvents.data.forEach(event => {
    if (event.type === 'PushEvent' && !!(event.payload as any).commits) {
      ;(event.payload as any).commits.forEach((commit: any) => {
        floluCommits.push(mapToCommit(event, commit))
      })
    }
  })

  let drakeryCommits: any[] = []
  const drakeryEvents = await octokit.rest.activity.listOrgEventsForAuthenticatedUser({
    org: 'drakery3d',
    username: 'flolu',
  })
  drakeryEvents.data.forEach(event => {
    if (event.type === 'PushEvent' && !!(event.payload as any).commits) {
      ;(event.payload as any).commits.forEach((commit: any) => {
        if (commit.author.name === 'flolu') {
          drakeryCommits.push(mapToCommit(event, commit))
        }
      })
    }
  })

  const allCommits = [...floluCommits, ...drakeryCommits].sort((a, b) => {
    return Number(new Date(b.createdAt)) - Number(new Date(a.createdAt))
  })

  const allCommitsWithStats = await Promise.all(
    allCommits.map(async commit => {
      const response = await octokit.request({url: commit.apiUrl})
      return {
        ...commit,
        stats: response.data.stats,
      }
    }),
  )
  console.timeEnd()

  res.status(200).json({activity: {commits: allCommitsWithStats}})
}
