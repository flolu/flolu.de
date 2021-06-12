import {GetStaticProps} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {NextSeo} from 'next-seo'
import Link from 'next/link'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'

import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'

interface Props {
  locale: string
}

const Blog: FC<Props> = ({locale}) => {
  const {t} = useTranslation()
  const title = `${t('blog:blog')}`
  const description = t('blog:blog')
  const url = `https://flolu.de/${locale}/blog`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{url, title, description, locale}}
        twitter={{handle: '@floludewig', site: '@floludewig', cardType: 'summary'}}
        languageAlternates={[
          {hrefLang: 'en', href: 'https://flolu.de/en/blog'},
          {hrefLang: 'de', href: 'https://flolu.de/de/blog'},
        ]}
      />

      <Header />

      <main className="max-w-4xl px-4 mx-auto space-y-8 sm:space-y-12 sm:px-8">
        <div className="space-y-2" style={{minHeight: '50vh'}}>
          <span className="text-lg font-medium text-100 sm:text-xl">{t('blog:blog')}</span>
          <h1 className="text-2xl font-bold sm:text-5xl">{t('blog:work_in_progress')}</h1>
          <Link href="/blog/whatsapp-without-phone">
            <a>WhatsApp without phone</a>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async props => {
  const namespaces = ['header', 'footer', 'blog']
  const locale = props.locale || 'en'
  const translations = await serverSideTranslations(locale, namespaces)
  return {props: {...translations, locale}}
}

export default Blog
