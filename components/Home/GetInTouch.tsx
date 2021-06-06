import {useTranslation} from 'next-i18next'

export function GetInTouch() {
  const {t} = useTranslation()

  return (
    <section>
      <div className="mb-8 space-y-2 text-center">
        <h1 className="text-6xl font-bold">{t('home:get_in_touch')}</h1>
      </div>
    </section>
  )
}
