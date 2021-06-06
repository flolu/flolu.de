import {useTranslation} from 'react-i18next'

export function Sitemap() {
  const {t} = useTranslation()

  return (
    <section id="sitemap">
      <div className="mb-8 space-y-2 text-center">
        <h1 className="text-4xl font-bold lg:text-6xl">{t('home:sitemap')}</h1>
      </div>
    </section>
  )
}
