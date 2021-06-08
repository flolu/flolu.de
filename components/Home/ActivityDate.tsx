import {FC} from 'react'

interface Props {
  locale: string
  timestamp: string
}

export const ActivityDate: FC<Props> = ({timestamp, locale}) => {
  const formatter = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })
  const date = formatter.format(new Date(timestamp))

  return <span className="text-lg text-100">{date}</span>
}
