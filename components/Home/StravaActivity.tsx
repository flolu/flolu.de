import {FC} from 'react'
import {useTranslation} from 'react-i18next'

import {IActivity, IStravaActivity} from '../../types/activity'
import {Duration} from './Duration'

interface Props {
  activity: IActivity<IStravaActivity>
}

export const StravaActivity: FC<Props> = ({activity}) => {
  const {t} = useTranslation()

  return (
    <>
      <div className="font-mono text-sm whitespace-nowrap text-500">
        {activity.payload.type === 'Swim' && (
          <a href={activity.payload.url} className="flex items-center space-x-2">
            <span>🏊</span>
            <Duration time={activity.payload.time} />
            <span>{t('activities:swim')}</span>
            <span className="overflow-hidden overflow-ellipsis hover:underline">
              {activity.payload.name}
            </span>
            <div className="flex-1"></div>
            <span className="">{Math.round(activity.payload.distance)}m</span>
            <span className="">{Math.round(activity.payload.avgTemperature)}°C</span>
          </a>
        )}

        {activity.payload.type === 'WeightTraining' && (
          <a href={activity.payload.url} className="flex items-center space-x-2">
            <span>💪</span>
            <Duration time={activity.payload.time} />
            <span>{t('activities:workout')}</span>
            <span className="overflow-hidden overflow-ellipsis hover:underline">
              {activity.payload.name}
            </span>
            <div className="flex-1"></div>
            <span className="">{Math.round(activity.payload.avgHr)}bpm</span>
          </a>
        )}

        {activity.payload.type === 'Walk' && (
          <a href={activity.payload.url} className="flex items-center space-x-2">
            <span>🚶</span>
            <Duration time={activity.payload.time} />
            <span>{t('activities:walk')}</span>
            <span className="overflow-hidden overflow-ellipsis hover:underline">
              {activity.payload.name}
            </span>
            <div className="flex-1"></div>
            <span className="">{Math.round(activity.payload.distance)}m</span>
            <span className="">{Math.round(activity.payload.elevGain)}m up</span>
          </a>
        )}

        {activity.payload.type === 'Run' && (
          <a href={activity.payload.url} className="flex items-center space-x-2">
            <span>🏃</span>
            <Duration time={activity.payload.time} />
            <span>{t('activities:run')}</span>
            <span className="overflow-hidden overflow-ellipsis hover:underline">
              {activity.payload.name}
            </span>
            <div className="flex-1"></div>
            <span className="">{Math.round(activity.payload.distance)}m</span>
            <span className="">{Math.round(activity.payload.elevGain)}m up</span>
          </a>
        )}
      </div>
    </>
  )
}
