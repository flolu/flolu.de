import {FC} from 'react'

export const PortfolioCard: FC = ({children}) => {
  return (
    <div className="relative pt-full">
      <div className="absolute inset-0">{children}</div>
    </div>
  )
}
