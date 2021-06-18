import {FC} from 'react'

import {DistanceIcon} from '@/icons/DistanceIcon'
import {HeartIcon} from '@/icons/HeartIcon'
import {MountainIcon} from '@/icons/MountainIcon'
import {RunIcon} from '@/icons/RunIcon'
import {SwimIcon} from '@/icons/SwimIcon'
import {TemperatureIcon} from '@/icons/TemperatureIcon'
import {WalkIcon} from '@/icons/WalkIcon'
import {WorkoutIcon} from '@/icons/WorkoutIcon'
import {IActivity, IStravaActivity} from '@/types//activity'

import {Distance} from './Distance'
import {Duration} from './Duration'

interface Props {
  activity: IActivity<IStravaActivity>
}

export const StravaActivity: FC<Props> = ({activity}) => {
  return (
    <>
      <div className="whitespace-nowrap text-500">
        {activity.payload.type === 'Swim' && (
          <a href={activity.payload.url} rel="noreferrer" className="flex items-center space-x-4">
            <div className="flex flex-col items-center w-5 h-14 md:h-20">
              <span className="w-0.5 h-full bg-blue-300"></span>
              <span className="w-8 p-1 text-blue-500 border-4 border-blue-300 rounded-full fill-current md:w-10 bg-blue-50">
                <SwimIcon />
              </span>
              <span className="w-0.5 h-full bg-blue-300"></span>
            </div>

            <Duration time={activity.payload.time} />
            <span className="overflow-hidden overflow-ellipsis">{activity.payload.name}</span>
            <div className="flex-1"></div>

            <div className="flex items-center space-x-2">
              <span className="w-4 fill-current">
                <DistanceIcon />
              </span>
              <Distance meters={activity.payload.distance} />
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-4 fill-current">
                <TemperatureIcon />
              </span>
              <span>{Math.round(activity.payload.avgTemperature)} °C</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-4 fill-current">
                <HeartIcon />
              </span>
              <span>{Math.round(activity.payload.avgHr)}</span>
            </div>
          </a>
        )}

        {activity.payload.type === 'WeightTraining' && (
          <a href={activity.payload.url} rel="noreferrer" className="flex items-center space-x-4">
            <div className="flex flex-col items-center w-5 h-14 md:h-20">
              <span className="w-0.5 h-full bg-yellow-300"></span>
              <span className="w-8 p-1 text-yellow-500 border-4 border-yellow-300 rounded-full fill-current md:w-10 bg-yellow-50">
                <WorkoutIcon />
              </span>
              <span className="w-0.5 h-full bg-yellow-300"></span>
            </div>

            <Duration time={activity.payload.time} />
            <span className="overflow-hidden overflow-ellipsis">{activity.payload.name}</span>
            <div className="flex-1"></div>

            <div className="flex items-center space-x-2">
              <span className="w-4 fill-current">
                <HeartIcon />
              </span>
              <span>{Math.round(activity.payload.avgHr)}</span>
            </div>
          </a>
        )}

        {activity.payload.type === 'Walk' && (
          <a href={activity.payload.url} rel="noreferrer" className="flex items-center space-x-4">
            <div className="flex flex-col items-center w-5 h-14 md:h-20">
              <span className="w-0.5 h-full bg-green-300"></span>
              <span className="w-8 p-1 text-green-500 border-4 border-green-300 rounded-full fill-current md:w-10 bg-green-50">
                <WalkIcon />
              </span>
              <span className="w-0.5 h-full bg-green-300"></span>
            </div>

            <Duration time={activity.payload.time} />
            <span className="overflow-hidden overflow-ellipsis">{activity.payload.name}</span>
            <div className="flex-1"></div>

            <div className="flex items-center space-x-2">
              <span className="w-4 fill-current">
                <DistanceIcon />
              </span>
              <Distance meters={activity.payload.distance} />
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-4 fill-current">
                <MountainIcon />
              </span>
              <Distance meters={activity.payload.elevGain} />
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-4 fill-current">
                <HeartIcon />
              </span>
              <span>{Math.round(activity.payload.avgHr)}</span>
            </div>
          </a>
        )}

        {activity.payload.type === 'Run' && (
          <a href={activity.payload.url} rel="noreferrer" className="flex items-center space-x-4">
            <div className="flex flex-col items-center w-5 h-14 md:h-20">
              <span className="w-0.5 h-full bg-red-300"></span>
              <span className="w-8 p-1 text-red-500 border-4 border-red-300 rounded-full fill-current md:w-10 bg-red-50">
                <RunIcon />
              </span>
              <span className="w-0.5 h-full bg-red-300"></span>
            </div>

            <Duration time={activity.payload.time} />
            <span className="overflow-hidden overflow-ellipsis">{activity.payload.name}</span>
            <div className="flex-1"></div>

            <div className="flex items-center space-x-2">
              <span className="w-4 fill-current">
                <DistanceIcon />
              </span>
              <Distance meters={activity.payload.distance} />
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-4 fill-current">
                <MountainIcon />
              </span>
              <Distance meters={activity.payload.elevGain} />
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-4 fill-current">
                <HeartIcon />
              </span>
              <span>{Math.round(activity.payload.avgHr)}</span>
            </div>
          </a>
        )}
      </div>
    </>
  )
}
