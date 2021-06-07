export interface GitHubBaseCommit {
  sha: string
  message: string
  url: string
  repo: string
  apiUrl: string
}

export interface GitHubCommit {
  sha: string
  message: string
  url: string
  repo: string
  stats: {
    total: number
    additions: number
    deletions: number
  }
}

export interface StravaActivity {
  url: string
  name: string
  distance: number
  time: number
  type: string
  map: any
}

export interface OuraNight {
  duration: number
  total: number
  rem: number
  deep: number
  score: number
  lowestHr: number
  averageHr: number
}

export interface InstagramPost {
  url: string
  imageUrl: string
}

export interface YouTubeVideo {
  url: string
  title: string
  thumbnail: {
    url: string
    width: number
    height: number
  }
}

export interface UnsplashPhoto {
  url: string
  imageUrl: string
  width: number
  height: number
}

export type ActivityPayload =
  | GitHubCommit
  | StravaActivity
  | OuraNight
  | InstagramPost
  | YouTubeVideo
  | UnsplashPhoto

export interface IActivity<T = ActivityPayload> {
  type:
    | 'github_commit'
    | 'strava_activity'
    | 'oura_night'
    | 'instagram_post'
    | 'youtube-video'
    | 'unsplash-photo'
  payload: T
  timestamp: string
}
