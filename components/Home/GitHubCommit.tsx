import {FC} from 'react'

import {IActivity, IGitHubCommit} from '../../types/activity'
import {CodeIcon} from '../Icons/CodeIcon'
import {DiffStat} from './DiffStat'

interface Props {
  activity: IActivity<IGitHubCommit>
}

export const GitHubCommit: FC<Props> = ({activity}) => {
  const repo = activity.payload.repo.split('/')[1]
  const repoUrl = `https://github.com/${activity.payload.repo}`

  return (
    <a href={activity.payload.url} className="flex items-center space-x-2 whitespace-nowrap">
      <div className="flex flex-col items-center w-5 mr-2 h-11">
        <span className="w-0.5 h-full bg-900"></span>
        <span className="w-6 md:w-7 p-0.5 border-2 rounded-full fill-current border-bg-900 text-100">
          <CodeIcon />
        </span>
        <span className="w-0.5 h-full bg-900"></span>
      </div>

      <span className="overflow-hidden text-500 overflow-ellipsis">{activity.payload.message}</span>

      <span className="hidden font-medium whitespace-nowrap text-50 sm:block">
        <span>in </span>
        <a href={repoUrl}>{repo}</a>
      </span>
      <div className="flex-1"></div>

      <div className="flex items-center space-x-1 text-xs font-medium">
        <span className="text-green-600">+{activity.payload.stats.additions}</span>
        <span className="text-red-600">-{activity.payload.stats.deletions}</span>
        <DiffStat
          additions={activity.payload.stats.additions}
          deletions={activity.payload.stats.deletions}
        />
      </div>
    </a>
  )
}
