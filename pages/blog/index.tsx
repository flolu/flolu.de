import fs from 'fs/promises'
import matter from 'gray-matter'
import {GetStaticProps, NextPage} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {NextSeo} from 'next-seo'
import Link from 'next/link'
import path from 'path'

import {Footer} from '@/components/Footer'
import {Navigation} from '@/components/Navigation'

interface Props {
  posts: any[]
}

const defaultPreviewImageUrl = '/blog/default.webp'

const Blog: NextPage<Props> = ({posts}) => {
  const {t} = useTranslation()
  const title = `${t('footer:blog')} | Florian Ludewig`
  const url = `https://flolu.de/blog`

  return (
    <>
      <NextSeo title={title} canonical={url} openGraph={{url, title}} />
      <Navigation />

      <main
        className="max-w-4xl px-4 mx-auto mt-4 mb-16 space-y-8 sm:space-y-12 sm:px-8 sm:mt-8"
        style={{minHeight: '60vh'}}
      >
        <div className="space-y-2">
          <span className="text-lg font-medium text-100 sm:text-xl">{t('blog:blog')}</span>
          <h1 className="text-2xl font-bold sm:text-5xl">{t('blog:posts')}</h1>
        </div>
        <div className="grid gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => {
            return (
              <Link key={index} href={`/blog/${post.slug}`} locale="en">
                <a className="flex w-full h-40 space-y-2 sm:h-auto sm:flex-col">
                  <img
                    src={post.previewImageUrl || defaultPreviewImageUrl}
                    className="hidden h-24 rounded-lg sm:block sm:h-auto"
                  ></img>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{post.title}</h3>
                    <div className="flex space-x-4 sm:space-x-0">
                      <img
                        src={post.previewImageUrl || defaultPreviewImageUrl}
                        className="h-20 rounded sm:hidden"
                      ></img>
                      <div className="space-y-2">
                        <p className="overflow-hidden overflow-ellipsis">{post.excerpt}</p>
                        <p className="text-sm text-100">
                          {post.date} • {post.minutesToRead} min read
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async context => {
  const namespaces = ['header', 'footer', 'blog', 'common']
  const locale = context.locale || 'en'
  const translations = await serverSideTranslations(locale, namespaces)

  const files = await fs.readdir(path.join('posts'))
  // TODO sort posts by date
  const posts = await Promise.all(
    files.map(async filename => {
      const markdown = await fs.readFile(path.join('posts', filename))
      const {data} = matter(markdown)
      return {...data, slug: filename.replace('.md', '')}
    }),
  )

  return {props: {...translations, posts}}
}

export default Blog
