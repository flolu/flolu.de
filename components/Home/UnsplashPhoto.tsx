import {FC} from 'react'

import {IActivity, IUnsplashPhoto} from '../../types/activity'
import {CameraIcon} from '../Icons/CameraIcon'

interface Props {
  activity: IActivity<IUnsplashPhoto>
}

export const UnsplashPhoto: FC<Props> = ({activity}) => {
  return (
    <a href={activity.payload.url} className="flex items-stretch space-x-6 whitespace-nowrap">
      <div className="flex flex-col items-center w-5">
        <span className="w-0.5 flex-1 bg-gray-300"></span>
        <span className="p-1 text-gray-500 border-2 border-gray-300 rounded-full fill-current w-7 md:w-8 bg-gray-50">
          <CameraIcon />
        </span>
        <span className="w-0.5 flex-1 bg-gray-300"></span>
      </div>

      <img src={activity.payload.imageUrl} className="w-32 my-2 rounded-md"></img>
    </a>
  )
}