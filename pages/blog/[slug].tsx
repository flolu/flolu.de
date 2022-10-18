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

import {Footer} from '@/components/Footer'
import {LeftArrowIcon} from '@/components/Icons/LeftArrowIcon'
import {Navigation} from '@/components/Navigation'

interface Props {
  data: any
  content: string
}

const Post: FC<Props> = ({data, content}) => {
  const {title, url, description, date, minutesToRead} = data
  const {imageUrl, imageWidth, imageHeight} = data
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
          images: [
            {
              url: imageUrl,
              width: imageWidth,
              height: imageHeight,
            },
          ],
        }}
      />
      <Navigation />

      <main className="px-4 mx-auto mt-4 space-y-8 sm:mt-8 sm:space-y-12 sm:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold sm:text-4xl">{title}</h1>
          <div className="flex items-center my-8 space-x-4">
            <Link href="/">
              <a className="flex items-center space-x-4">
                <div className="w-16 rounded-full">
                  <Image
                    className="rounded-full"
                    alt=""
                    src="/avatar.webp"
                    layout="responsive"
                    width={512}
                    height={512}
                  />
                </div>
                <div className="space-y-1 font-sans">
                  <p className="font-medium">Flo</p>
                  <p className="text-300">{date}</p>
                </div>
              </a>
            </Link>
            <div className="flex-1"></div>
            <div className="">{minutesToRead} min read</div>
          </div>

          <Image src={imageUrl} className="rounded-lg" width={imageWidth} height={imageHeight} />

          <div className="mt-8 mb-16 text-lg leading-loose text-900">
            <ReactMarkdown
              components={{
                code: ({children, ...props}) => {
                  if (!props?.inline) {
                    return (
                      <pre className="w-full px-4 py-2 mt-4 mb-8 break-words whitespace-pre-wrap rounded-md bg-300">
                        <code {...props}>{children}</code>
                      </pre>
                    )
                  }

                  return (
                    <pre className="inline-block px-2 mx-1 text-sm whitespace-pre-wrap text-primary-700 bg-100">
                      <code {...props}>{children}</code>
                    </pre>
                  )
                },
                a: ({href, children}) => {
                  return (
                    <a href={href} className="text-primary-700">
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
                    <h2 className="mt-12 mb-4 text-2xl font-bold" {...props}>
                      {children}
                    </h2>
                  )
                },
                ul: ({children, ...props}) => {
                  return (
                    <ul className="ml-4 list-disc list-inside" {...props}>
                      {children}
                    </ul>
                  )
                },
                ol: ({children, ...props}) => {
                  return (
                    <ul className="list-decimal list-inside" {...props}>
                      {children}
                    </ul>
                  )
                },
              }}
            >
              {content}
            </ReactMarkdown>

            <div className="flex items-center my-8 mt-16 space-x-4">
              <Link href="/">
                <a className="flex items-center space-x-4">
                  <div className="w-16 rounded-full">
                    <Image
                      className="rounded-full"
                      alt=""
                      src="/avatar.webp"
                      layout="responsive"
                      width={512}
                      height={512}
                    />
                  </div>
                  <div className="space-y-1 font-sans">
                    <p className="font-medium">Flo</p>
                    <p className="text-300">{date}</p>
                  </div>
                </a>
              </Link>
              <div className="flex-1"></div>
            </div>

            <div className="flex items-center space-x-2 text-primary-500">
              <span className="w-6 fill-current">
                <LeftArrowIcon />
              </span>
              <Link href="/blog">
                <a className="text-xl font-bold">{t('blog:all_posts')}</a>
              </Link>
            </div>
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
