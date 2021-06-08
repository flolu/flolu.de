import {FC} from 'react'
import {useTranslation} from 'react-i18next'

import {IActivity, IStravaActivity} from '../../types/activity'
import {DistanceIcon} from '../Icons/DistanceIcon'
import {HeartIcon} from '../Icons/HeartIcon'
import {MountainIcon} from '../Icons/MountainIcon'
import {RunIcon} from '../Icons/RunIcon'
import {SwimIcon} from '../Icons/SwimIcon'
import {TemperatureIcon} from '../Icons/TemperatureIcon'
import {WalkIcon} from '../Icons/WalkIcon'
import {WorkoutIcon} from '../Icons/WorkoutIcon'
import {Distance} from './Distance'
import {Duration} from './Duration'

interface Props {
  activity: IActivity<IStravaActivity>
}

export const StravaActivity: FC<Props> = ({activity}) => {
  const {t} = useTranslation()

  return (
    <>
      <div className="whitespace-nowrap text-500">
        {activity.payload.type === 'Swim' && (
          <a href={activity.payload.url} className="flex items-center space-x-4">
            <div className="flex flex-col items-center w-5 h-14 md:h-20">
              <span className="w-0.5 h-full bg-blue-300"></span>
              <span className="w-8 p-1 text-blue-500 border-4 border-blue-300 rounded-full fill-current md:w-10 bg-blue-50">
                <SwimIcon />
              </span>
              <span className="w-0.5 h-full bg-blue-300"></span>
            </div>

            <Duration time={activity.payload.time} />
            <span className="overflow-hidden overflow-ellipsis hover:underline">
              {activity.payload.name}
            </span>
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
          <a href={activity.payload.url} className="flex items-center space-x-4">
            <div className="flex flex-col items-center w-5 h-14 md:h-20">
              <span className="w-0.5 h-full bg-yellow-300"></span>
              <span className="w-8 p-1 text-yellow-500 border-4 border-yellow-300 rounded-full fill-current md:w-10 bg-yellow-50">
                <WorkoutIcon />
              </span>
              <span className="w-0.5 h-full bg-yellow-300"></span>
            </div>

            <Duration time={activity.payload.time} />
            <span className="overflow-hidden overflow-ellipsis hover:underline">
              {activity.payload.name}
            </span>
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
          <a href={activity.payload.url} className="flex items-center space-x-4">
            <div className="flex flex-col items-center w-5 h-14 md:h-20">
              <span className="w-0.5 h-full bg-green-300"></span>
              <span className="w-8 p-1 text-green-500 border-4 border-green-300 rounded-full fill-current md:w-10 bg-green-50">
                <WalkIcon />
              </span>
              <span className="w-0.5 h-full bg-green-300"></span>
            </div>

            <Duration time={activity.payload.time} />
            <span className="overflow-hidden overflow-ellipsis hover:underline">
              {activity.payload.name}
            </span>
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
          <a href={activity.payload.url} className="flex items-center space-x-4">
            <div className="flex flex-col items-center w-5 h-14 md:h-20">
              <span className="w-0.5 h-full bg-red-300"></span>
              <span className="w-8 p-1 text-red-500 border-4 border-red-300 rounded-full fill-current md:w-10 bg-red-50">
                <RunIcon />
              </span>
              <span className="w-0.5 h-full bg-red-300"></span>
            </div>

            <Duration time={activity.payload.time} />
            <span className="overflow-hidden overflow-ellipsis hover:underline">
              {activity.payload.name}
            </span>
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
