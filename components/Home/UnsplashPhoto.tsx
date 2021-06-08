import {FC} from 'react'

import {IActivity, IUnsplashPhoto} from '../../types/activity'

interface Props {
  activity: IActivity<IUnsplashPhoto>
}

export const UnsplashPhoto: FC<Props> = ({activity}) => {
  return (
    <a
      href={(activity.payload as IUnsplashPhoto).url}
      className="flex items-center space-x-2 font-mono text-sm whitespace-nowrap"
    >
      <span>📷</span>
      <img src={(activity.payload as IUnsplashPhoto).imageUrl} className="w-20"></img>
    </a>
  )
}
