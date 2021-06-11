import {FC} from 'react'

import {CameraIcon} from '@/icons/CameraIcon'
import {IActivity, IInstagramPost} from '@/types//activity'

interface Props {
  activity: IActivity<IInstagramPost>
}

export const InstagramPost: FC<Props> = ({activity}) => {
  return (
    <a
      href={activity.payload.url}
      rel="noopener"
      className="flex items-stretch space-x-6 whitespace-nowrap"
    >
      <div className="flex flex-col items-center w-5">
        <span className="w-0.5 flex-1 bg-gray-300"></span>
        <span className="p-1 text-gray-500 border-2 border-gray-300 rounded-full fill-current w-7 md:w-9 bg-gray-50">
          <CameraIcon />
        </span>
        <span className="w-0.5 flex-1 bg-gray-300"></span>
      </div>

      <img
        src={activity.payload.imageUrl}
        alt="Instagram post from @flo.ludewig"
        className="my-2 rounded-md w-52"
      ></img>
    </a>
  )
}
