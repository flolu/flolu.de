import Image from 'next/image'
import Link from 'next/link'
import {FC} from 'react'

interface Props {
  date: string
}

export const BlogAuthor: FC<Props> = ({date}) => {
  return (
    <Link href="/" className="flex items-center space-x-4">
      <div className="w-16 rounded-full">
        <Image
          className="rounded-full"
          alt=""
          src="/avatar.webp"
          layout="responsive"
          width={512}
          height={512}
        />
      </div>
      <div className="space-y-1 font-sans">
        <p className="font-medium">Florian Ludewig</p>
        <p className="text-300">{date}</p>
      </div>
    </Link>
  )
}
