import {FC} from 'react'

export const RepositoryTag: FC = ({children}) => {
  return (
    <span className="px-1 py-px m-1 text-xs rounded-full bg-primary-50 text-primary-900 sm:px-2 sm:py-1 lg:px-4 lg:py-2 lg:text-sm lg:m-2">
      {children}
    </span>
  )
}
