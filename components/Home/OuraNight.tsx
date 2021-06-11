import {FC} from 'react'

import {HeartIcon} from '@/icons/HeartIcon'
import {HeartIconOutline} from '@/icons/HeartIconOutline'
import {SleepIcon} from '@/icons/SleepIcon'
import {IActivity, IOuraNight} from '@/types//activity'

import {Duration} from './Duration'

interface Props {
  activity: IActivity<IOuraNight>
}

export const OuraNight: FC<Props> = ({activity}) => {
  const deepPercentage = (100 * activity.payload.deep) / activity.payload.total
  const remPercentage = (100 * activity.payload.rem) / activity.payload.total
  const lightPercentage = (100 * activity.payload.light) / activity.payload.total

  return (
    <div className="flex items-center space-x-2 sm:space-x-4 text-500 whitespace-nowrap">
      <div className="flex flex-col items-center w-5 mr-2 h-14 md:h-20">
        <span className="w-0.5 h-full bg-purple-300"></span>
        <span className="w-8 p-1 text-purple-500 border-4 border-purple-300 rounded-full fill-current md:w-10 bg-purple-50">
          <SleepIcon />
        </span>
        <span className="w-0.5 h-full bg-purple-300"></span>
      </div>

      <Duration time={activity.payload.total} />

      <span className="items-center hidden space-x-2 text-sm text-300 sm:flex">
        <span className="w-4 fill-current">
          <HeartIcon />
        </span>
        <span>{Math.round(activity.payload.averageHr)}</span>
      </span>

      <span className="flex items-center space-x-2 text-sm text-300">
        <span className="w-4 fill-current">
          <HeartIconOutline />
        </span>
        <span>{Math.round(activity.payload.lowestHr)}</span>
      </span>

      <div className="flex-1"></div>

      <div className="flex flex-col items-center space-y-1">
        <div className="space-x-1 text-xs font-medium">
          <span className="text-purple-900">
            <Duration time={activity.payload.deep} />
          </span>
          <span className="text-purple-500">
            <Duration time={activity.payload.rem} />
          </span>
          <span className="text-purple-300">
            <Duration time={activity.payload.light} />
          </span>
        </div>

        <div className="flex items-center space-x-2 text-xs">
          <span className="flex items-center w-32 h-2 bg-purple-300 rounded-md sm:w-64">
            <span
              className="w-2/12 h-full bg-purple-900 rounded-l-md"
              style={{width: `${deepPercentage}%`}}
            ></span>
            <span
              className="w-2/12 h-full bg-purple-500"
              style={{width: `${remPercentage}%`}}
            ></span>
            <span
              className="w-9/12 h-full bg-purple-300 rounded-r-md"
              style={{width: `${lightPercentage}%`}}
            ></span>
          </span>
        </div>
      </div>
    </div>
  )
}
