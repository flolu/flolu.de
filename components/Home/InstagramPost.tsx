import {FC} from 'react'

import {IActivity, IInstagramPost} from '../../types/activity'

interface Props {
  activity: IActivity<IInstagramPost>
}

export const InstagramPost: FC<Props> = ({activity}) => {
  return (
    <a
      href={(activity.payload as IInstagramPost).url}
      className="flex items-center space-x-2 font-mono text-sm whitespace-nowrap"
    >
      <span>📷</span>
      <img src={(activity.payload as IInstagramPost).imageUrl} className="w-20"></img>
    </a>
  )
}
