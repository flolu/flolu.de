import {FC} from 'react'

import {IActivity, IYouTubeVideo} from '../../types/activity'

interface Props {
  activity: IActivity<IYouTubeVideo>
}

export const YouTubeVideo: FC<Props> = ({activity}) => {
  return (
    <a
      href={(activity.payload as IYouTubeVideo).url}
      className="flex items-center space-x-2 font-mono text-sm whitespace-nowrap"
    >
      <span className="overflow-hidden overflow-ellipsis">🎥</span>
      <span>{activity.payload.title}</span>
      <img src={(activity.payload as IYouTubeVideo).thumbnail.url} className="w-20"></img>
    </a>
  )
}
