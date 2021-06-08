export interface IGitHubBaseCommit {
  sha: string
  message: string
  url: string
  repo: string
  apiUrl: string
}

export interface IGitHubCommit {
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

export interface IStravaActivity {
  url: string
  name: string
  distance: number
  time: number
  type: string
  map: any
}

export interface IOuraNight {
  duration: number
  total: number
  rem: number
  deep: number
  score: number
  lowestHr: number
  averageHr: number
}

export interface IInstagramPost {
  url: string
  imageUrl: string
}

export interface IYouTubeVideo {
  url: string
  title: string
  thumbnail: {
    url: string
    width: number
    height: number
  }
}

export interface IUnsplashPhoto {
  url: string
  imageUrl: string
  width: number
  height: number
}

export type ActivityPayload =
  | IGitHubCommit
  | IStravaActivity
  | IOuraNight
  | IInstagramPost
  | IYouTubeVideo
  | IUnsplashPhoto

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

export interface IActivityDay {
  date: string
  activities: IActivity[]
}
