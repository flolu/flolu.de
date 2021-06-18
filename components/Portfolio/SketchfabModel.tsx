import Image from 'next/image'
import {FC} from 'react'

interface Props {
  id: string
  image: string
  label?: string
  width?: number
  height?: number
}

export const SketchfabModel: FC<Props> = ({id, image, width, height, label}) => {
  return (
    <a className="w-full h-full" target="_blank" rel="noreferrer" href={`https://skfb.ly/${id}`}>
      <Image
        width={width || 512}
        height={height || 512}
        src={`https://storage.googleapis.com/flolu-website/${image}`}
        alt={label || ''}
      />
    </a>
  )
}
