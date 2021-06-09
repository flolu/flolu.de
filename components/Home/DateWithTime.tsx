import {FC} from 'react'

interface Props {
  locale: string
  timestamp: string
}

export const DateWithTime: FC<Props> = ({timestamp, locale}) => {
  const formatter = new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
  })
  const date = formatter.format(new Date(timestamp))

  return <>{date}</>
}
