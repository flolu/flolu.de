import {FC} from 'react'

interface Props {
  additions: number
  deletions: number
}

export const DiffStat: FC<Props> = ({additions, deletions}) => {
  const total = additions + deletions
  const addBlocks = Math.round((5 * additions) / total)
  const delBlocks = Math.round((5 * deletions) / total)

  return (
    <div className="flex space-x-px">
      {Array.apply(null, Array(addBlocks)).map((_, index) => {
        return <span key={index} className="w-2 h-2 bg-green-500 rounded-sm"></span>
      })}
      {Array.apply(null, Array(delBlocks)).map((_, index) => {
        return <span key={index} className="w-2 h-2 bg-red-500 rounded-sm"></span>
      })}
    </div>
  )
}
