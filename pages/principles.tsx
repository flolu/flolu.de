import {GetStaticProps} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {NextSeo} from 'next-seo'
import {useRouter} from 'next/router'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'

import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'
import {LanguageSelect} from '@/components/LanguageSelect'

interface Props {
  locale: string
}

const Principles: FC<Props> = ({locale}) => {
  const {t} = useTranslation()
  const title = `${t('principles:principles')}`
  const description = t('principles:principles')
  const url = `https://flolu.de/${locale}/portfolio`
  const router = useRouter()

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{url, title, description, locale}}
        twitter={{handle: '@floludewig', site: '@floludewig', cardType: 'summary'}}
        languageAlternates={[
          {hrefLang: 'en', href: 'https://flolu.de/en/principles'},
          {hrefLang: 'de', href: 'https://flolu.de/de/principles'},
        ]}
      />

      <Header />

      <main className="max-w-xl px-4 mx-auto sm:px-8 mb-16">
        <h1 className="text-2xl font-bold sm:text-5xl mb-2 sm:mb-4">
          {t('principles:principles')}
        </h1>
        {router.locale !== 'en' && (
          <div className="flex items-center space-x-2 bg-primary-50 rounded-md p-2 mb-4 sm:mb-8">
            <LanguageSelect position="below" />
            <p>{t('principles:english_better')}</p>
          </div>
        )}
        <ol className="!list-decimal space-y-6 sm:space-y-10">
          <li className="space-y-2">
            <span className="font-serif text-2xl sm:text-3xl space-y-2">
              1. {t('principles:finisher')}
            </span>
            <p className="text-base text-300">{t('principles:finisher_desc')}</p>
            <p className="text-xs text-100 text-right">
              <a target="_blank" rel="noopener" href="https://youtu.be/2hRN3RnDogA">
                ~John Sonmez
              </a>
            </p>
          </li>

          <li className="space-y-2">
            {/* https://www.instagram.com/p/CLifgVgH-4d/ */}
            <span className="font-serif text-2xl sm:text-3xl space-y-2">
              2. {t('principles:do_things_that_suck')}
            </span>
            <p className="font-sans text-base text-300">
              {t('principles:do_things_that_suck_desc')}
            </p>
            <p className="text-xs text-100 text-right">
              <a target="_blank" rel="noopener" href="https://youtu.be/thEUgaWKGkY?t=182">
                ~John Sonmez
              </a>
            </p>
          </li>

          <li className="space-y-2">
            <span className="font-serif text-2xl sm:text-3xl space-y-2">
              3. {t('principles:anything_is_everything')}
            </span>
            <p className="font-sans text-base text-300">
              {t('principles:anything_is_everything_desc')}
            </p>
            <p className="text-xs text-100 text-right">~Cheri Huber</p>
          </li>

          <li className="space-y-2">
            <span className="font-serif text-2xl sm:text-3xl space-y-2">
              4. {t('principles:motivation')}
            </span>
            <p className="font-sans text-base text-300">{t('principles:motivation_desc')}</p>
            <p className="text-xs text-100 text-right">
              <a target="_blank" rel="noopener" href="https://youtu.be/GBIh6fcS0pc">
                ~John Sonmez
              </a>
            </p>
          </li>

          <li className="space-y-2">
            <span className="font-serif text-2xl sm:text-3xl space-y-2">
              5. {t('principles:responsibility')}
            </span>
            <p className="font-sans text-base text-300">{t('principles:responsibility_desc')}</p>
            <p className="text-xs text-100 text-right">
              <a target="_blank" rel="noopener" href="https://youtu.be/bUoCU0NX7lc">
                ~John Sonmez
              </a>
            </p>
          </li>

          <li className="space-y-2">
            <span className="font-serif text-2xl sm:text-3xl space-y-2">
              6. {t('principles:freedom')}
            </span>
            <p className="font-sans text-base text-300">{t('principles:freedom_desc')}</p>
            <p className="text-xs text-100 text-right">
              <a target="_blank" rel="noopener" href="https://youtu.be/thEUgaWKGkY?t=235">
                ~John Sonmez
              </a>
            </p>
          </li>

          <li className="space-y-2">
            <span className="font-serif text-2xl sm:text-3xl space-y-2">
              7. {t('principles:others_opinion')}
            </span>
            <p className="font-sans text-base text-300">{t('principles:others_opinion_desc')}</p>
            <p className="text-xs text-100 text-right">
              <a target="_blank" rel="noopener" href="https://youtu.be/thEUgaWKGkY?t=251">
                ~John Sonmez
              </a>
            </p>
          </li>

          <li className="space-y-2">
            <span className="font-serif text-2xl sm:text-3xl space-y-2">
              8. {t('principles:control')}
            </span>
            <p className="font-sans text-base text-300">{t('principles:control_desc')}</p>
            <p className="text-xs text-100 text-right">
              <a target="_blank" rel="noopener" href="https://youtu.be/EgYe1OajaBU">
                ~John Sonmez
              </a>
            </p>
          </li>

          <li className="space-y-2">
            <span className="font-serif text-2xl sm:text-3xl space-y-2">
              9. {t('principles:go_one_more')}
            </span>
            <p className="font-sans text-base text-300">{t('principles:go_one_more_desc')}</p>
            <p className="text-xs text-100 text-right">
              <a target="_blank" rel="noopener" href="https://youtu.be/URXDqeSxuEQ">
                ~Nick Bare
              </a>
            </p>
          </li>

          <li className="space-y-2">
            <span className="font-serif text-2xl sm:text-3xl space-y-2">
              10. {t('principles:win_or_learn')}
            </span>
            <p className="font-sans text-base text-300">{t('principles:win_or_learn_desc')}</p>
            <p className="text-xs text-100 text-right">
              <a target="_blank" rel="noopener" href="https://youtu.be/URXDqeSxuEQ">
                ~Nelson Mandela
              </a>
            </p>
          </li>
        </ol>
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async props => {
  const namespaces = ['header', 'footer', 'principles']
  const locale = props.locale || 'en'
  const translations = await serverSideTranslations(locale, namespaces)
  return {props: {...translations, locale}}
}

export default Principles
