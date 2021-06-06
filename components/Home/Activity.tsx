import {useTranslation} from 'react-i18next'

export function Activity() {
  const {t} = useTranslation()

  return (
    <section id="activity">
      <div className="mb-8 space-y-2 text-center">
        <h1 className="text-6xl font-bold">{t('home:activity')}</h1>
        <p className="mt-4 leading-relaxed lg:mt-6 md:text-base lg:text-xl text-500">
          My past month
        </p>
      </div>
    </section>
  )
}
