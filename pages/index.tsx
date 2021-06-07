import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import {Octokit} from 'octokit'
import * as queryString from 'query-string'

import {Footer} from '../components/Footer'
import {Header} from '../components/Header'
import {AboutMe} from '../components/Home/AboutMe'
import {Activity} from '../components/Home/Activity'
import {GetInTouch} from '../components/Home/GetInTouch'
import {HomeHead} from '../components/Home/Head'
import {Timeline} from '../components/Home/Timeline'

export default function Home(props: any) {
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
          <Activity activities={props.activities} commits={props.commits} />
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

async function gitHubCommits() {
  console.time('github')
  const octokit = new Octokit({auth: process.env.GITHUB_TOKEN})
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
  console.timeEnd('github')

  return allCommitsWithStats
}

async function stravaActivities() {
  console.time('strava')

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

  console.timeEnd('strava')

  return activities.map((activity: any) => {
    return {
      id: activity.id,
      name: activity.name,
      distance: activity.distance,
      time: activity.moving_time,
      type: activity.type,
      start_date: activity.start_date,
      map: activity.map,
    }
  })
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const namespaces = ['header', 'footer', 'home', 'timeline']

  const translations = await serverSideTranslations(locale || 'en', namespaces)
  const allCommitsWithStats = await gitHubCommits()
  const activities = await stravaActivities()

  return {
    props: {
      ...translations,
      commits: allCommitsWithStats,
      activities,
    },
    revalidate: 60 * 60 * 24,
  }
}
