import {FC} from 'react'

import {IActivity, IGitHubCommit} from '../../types/activity'
import {DiffStat} from './DiffStat'

interface Props {
  activity: IActivity<IGitHubCommit>
}

export const GitHubCommit: FC<Props> = ({activity}) => {
  const repo = activity.payload.repo.split('/')[1]
  const repoUrl = `https://github.com/${activity.payload.repo}`

  return (
    <div className="flex items-center space-x-2 text-xs sm:text-sm">
      <span>👨‍💻️</span>
      <a
        className="overflow-hidden font-mono text-500 hover:underline overflow-ellipsis whitespace-nowrap"
        href={activity.payload.url}
      >
        {activity.payload.message}
      </a>
      <div className="flex-1"></div>
      <a href={repoUrl} className="hidden font-medium text-50 sm:block">
        {repo}
      </a>
      <div className="flex items-center space-x-1 font-mono text-xs font-medium">
        <span className="text-green-600">+{activity.payload.stats.additions}</span>
        <span className="text-red-600">-{activity.payload.stats.deletions}</span>
        <DiffStat
          additions={activity.payload.stats.additions}
          deletions={activity.payload.stats.deletions}
        />
      </div>
    </div>
  )
}
