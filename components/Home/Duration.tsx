import {FC} from 'react'

interface Props {
  time: number
}

export const Duration: FC<Props> = ({time}) => {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time - hours * 3600) / 60)
  const seconds = time - hours * 3600 - minutes * 60

  return (
    <span>
      {hours > 0 && <span>{hours}h </span>}
      {minutes > 0 && <span>{minutes}m </span>}
      {hours <= 0 && seconds > 0 && <span>{minutes}s </span>}
    </span>
  )
}
