import Image from 'next/image'
import {FC} from 'react'

import {PortfolioCard} from '@/components/Portfolio/Card'

interface Props {
  id: string
  image: string
  label?: string
  width?: number
  height?: number
}

export const YouTubeVideo: FC<Props> = ({id, image, width, height, label}) => {
  return (
    <PortfolioCard>
      <a className="w-full h-full" target="_blank" rel="noopener" href={`https://youtu.be/${id}`}>
        <Image
          width={width || 512}
          height={height || 512}
          src={`https://storage.googleapis.com/flolu-website/${image}`}
          alt={label || ''}
        />
      </a>
    </PortfolioCard>
  )
}
