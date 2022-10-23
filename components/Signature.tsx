import Link from 'next/link'
import {FC} from 'react'

export const Signature: FC = () => {
  return (
    <Link href="/">
      <a className="flex items-center space-x-2 hover:cursor-pointer text-900">
        <div className="flex items-center">
          <span className="z-10 font-serif text-4xl font-bold text-primary-700">F</span>
          <span className="-ml-[0.2rem] mt-[0.45rem] font-serif text-[1.75rem] font-bold text-primary-500 z-0">
            L
          </span>
        </div>
        <span className="mt-1 text-xl font-medium">flolu.de</span>
      </a>
    </Link>
  )
}
