import fs from 'fs/promises'
import matter from 'gray-matter'
import {GetStaticPaths, GetStaticProps} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {NextSeo} from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import path from 'path'
import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import ReactMarkdown from 'react-markdown'

import {BlogAuthor} from '@/components/BlogAuthor'
import {Footer} from '@/components/Footer'
import {LeftArrowIcon} from '@/components/Icons/LeftArrowIcon'
import {Navigation} from '@/components/Navigation'

interface Props {
  data: any
  content: string
}

// TODO make images and preview images optional?!
// TODO ability to add tags to markdown front matter (+add to meta tag for SEO)
// TODO anchors for headlines
// TODO outline for blog posts
// TODO colorful code snippets

const Post: FC<Props> = ({data, content}) => {
  const {title, url, description, date, minutesToRead} = data
  const imageUrl = data.imageUrl
  const imageWidth = data.imageWidth
  const imageHeight = data.imageHeight

  const {t} = useTranslation()

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          locale: 'en',
          images: imageUrl
            ? [
                {
                  url: imageUrl,
                  width: imageWidth,
                  height: imageHeight,
                },
              ]
            : [],
        }}
      />
      <Navigation />

      <main className="px-4 mx-auto mt-4 space-y-8 sm:mt-8 sm:space-y-12 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold sm:text-4xl">{title}</h1>
          <div className="flex items-center my-8 space-x-4">
            <BlogAuthor date={date} />
            <div className="flex-1"></div>
            <div className="">{minutesToRead} min read</div>
          </div>

          {imageUrl && (
            <Image
              alt="Thumbnail"
              src={imageUrl}
              className="rounded-lg"
              width={imageWidth}
              height={imageHeight}
            />
          )}

          <div className="mt-8 mb-16 text-base leading-loose sm:leading-loose sm:text-xl text-900">
            <ReactMarkdown
              components={{
                code: ({children, ...props}) => {
                  if (props?.inline) {
                    return (
                      <code className="inline-block px-2 mx-1 text-sm whitespace-pre-wrap sm:text-base text-700 bg-300">
                        {children}
                      </code>
                    )
                  }

                  return (
                    <code className="w-full block px-3 py-4 sm:px-4 sm:py-6 mt-4 mb-8 text-[0.9rem] [lineHeight:1.4rem] sm:text-[1rem] sm:[lineHeight:1.5rem] rounded-md bg-500 overflow-x-auto">
                      {children}
                    </code>
                  )
                },
                a: ({href, children}) => {
                  return (
                    <a href={href} className="font-medium underline">
                      {children}
                    </a>
                  )
                },
                p: ({children, ...props}) => {
                  return (
                    <p className="my-4" {...props}>
                      {children}
                    </p>
                  )
                },
                h2: ({children, ...props}) => {
                  return (
                    <h2 className="mt-12 mb-4 text-3xl font-bold" {...props}>
                      {children}
                    </h2>
                  )
                },
                h3: ({children, ...props}) => {
                  return (
                    <h2 className="mt-12 mb-4 text-2xl font-bold" {...props}>
                      {children}
                    </h2>
                  )
                },
                ul: ({children}) => {
                  return <ul className="ml-4 list-disc list-inside">{children}</ul>
                },
                ol: ({children}) => {
                  return <ul className="list-decimal list-inside">{children}</ul>
                },
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

          <div className="flex items-center my-8 space-x-4">
            <BlogAuthor date={date} />
            <div className="flex-1"></div>
            <div className="hidden text-right sm:block">
              <span>{t('blog:did_this_help')}</span>
              <pre></pre>
              <div>
                <Link href="/donations" className="font-medium underline">
                  {t('blog:consider_donating')}
                </Link>
              </div>
            </div>
            <div className="text-right sm:hidden">
              <Link href="/donations" className="font-medium underline">
                {t('blog:donate')}
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-primary-500">
            <span className="w-6 fill-current">
              <LeftArrowIcon />
            </span>
            <Link href="/blog" className="text-xl font-bold">
              {t('blog:all_posts')}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = await fs.readdir(path.join('posts'))
  const paths = files.map(filename => ({params: {slug: filename.replace('.md', '')}}))
  return {paths, fallback: false}
}

export const getStaticProps: GetStaticProps<Props> = async context => {
  const namespaces = ['header', 'footer', 'blog', 'common']
  const locale = context.locale || 'en'
  const translations = await serverSideTranslations(locale, namespaces)

  const slug = context.params?.slug as string

  const markdown = await fs.readFile(path.join('posts', `${slug}.md`))
  const {data, content} = matter(markdown)

  return {props: {...translations, data, content}}
}

export default Post
