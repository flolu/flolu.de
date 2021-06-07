import {useTranslation} from 'react-i18next'

export function Activity() {
  const {t} = useTranslation()

  return (
    <section id="activity">
      <div className="mb-8 space-y-2 text-center">
        <h1 className="text-4xl font-bold lg:text-6xl">{t('home:activity')}</h1>
        <pre>TODO</pre>
      </div>
    </section>
  )
}
