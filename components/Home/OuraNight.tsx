import {FC} from 'react'

import {IActivity, IOuraNight} from '../../types/activity'
import {Duration} from './Duration'

interface Props {
  activity: IActivity<IOuraNight>
}

export const OuraNight: FC<Props> = ({activity}) => {
  return (
    <div className="flex items-center space-x-2 font-mono text-sm text-500">
      <span>😴</span>
      <span>
        <span>Got </span>
        <Duration time={activity.payload.total} />
        <span>of sleep</span>
      </span>
      <span>with a score of</span>
      <span>{activity.payload.score}</span>
      <div className="flex-1"></div>
      <span>
        <Duration time={activity.payload.deep} />
      </span>
      <span>deep,</span>
      <span>{activity.payload.lowestHr}</span>
      <span>LRHR</span>
    </div>
  )
}
