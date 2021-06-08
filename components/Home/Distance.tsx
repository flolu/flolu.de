import {FC} from 'react'

interface Props {
  meters: number
}

export const Distance: FC<Props> = ({meters}) => {
  if (meters < 1000) return <span>{Math.round(meters)} m</span>
  return <span>{Math.round((meters / 1000) * 10) / 10} km</span>
}
