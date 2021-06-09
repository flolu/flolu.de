import {FC} from 'react'

import {IActivity, IYouTubeVideo} from '../../types/activity'
import {YouTubeIcon} from '../Icons/YouTubeIcon'

interface Props {
  activity: IActivity<IYouTubeVideo>
}

export const YouTubeVideo: FC<Props> = ({activity}) => {
  return (
    <a
      href={(activity.payload as IYouTubeVideo).url}
      rel="noopener"
      className="flex items-stretch space-x-6 whitespace-nowrap"
    >
      <div className="flex flex-col items-center w-5">
        <span className="w-0.5 flex-1 bg-red-300"></span>
        <span className="w-8 p-1 text-red-500 border-4 border-red-300 rounded-full fill-current md:w-10 bg-red-50">
          <YouTubeIcon />
        </span>
        <span className="w-0.5 flex-1 bg-red-300"></span>
      </div>

      <div className="flex items-center space-x-2">
        <img
          src={activity.payload.thumbnail.url}
          className="my-2 rounded-md w-52"
          alt={activity.payload.title}
        ></img>
      </div>
    </a>
  )
}
