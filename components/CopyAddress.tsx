import {useTranslation} from 'next-i18next'
import {FC, useState} from 'react'

interface Props {
  address: string
}

export const CopyAddress: FC<Props> = ({address}) => {
  const [selected, setSelected] = useState(false)
  const {t} = useTranslation()

  return (
    <div className="relative flex items-center space-x-2">
      <button
        className="w-64 overflow-hidden font-mono select-all sm:w-96 overflow-ellipsis"
        onFocus={() => {
          setSelected(true)
          navigator.clipboard.writeText(address)
        }}
        onBlur={() => {
          setSelected(false)
        }}
      >
        <span>{address}</span>
      </button>

      {selected && (
        <div
          role="tooltip"
          className="absolute z-10 inline-block px-2 py-1 text-sm font-medium rounded shadow -left-2 -top-9 bg-900-backdrop backdrop-filter backdrop-blur-sm"
        >
          {t('common:copied')}
        </div>
      )}
    </div>
  )
}
