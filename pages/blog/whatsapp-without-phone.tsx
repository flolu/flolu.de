import {GetStaticProps} from 'next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {NextSeo} from 'next-seo'
import Image from 'next/image'
import {FC} from 'react'

import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'

interface Props {
  locale: string
}

// TODO disable i18n for blog posts as they are only available in english

const Post: FC<Props> = () => {
  const title = 'Use WhatsApp Without Active Phone Connection on Linux'
  const description =
    'An easy way to use WhatsApp on a Linux machine without an active phone connection.'
  const url = `https://flolu.de/blog/whatsapp-without-phone`

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
              url: 'https://storage.googleapis.com/flolu-website/blog/whatsapp-without-phone/thumbnail.png',
              width: 1920,
              height: 1080,
            },
          ],
        }}
      />

      <Header />

      <main className="max-w-6xl px-4 mx-auto space-y-8 font-serif sm:space-y-12 sm:px-8">
        <a href="https://youtu.be/72WyCIWO3MQ">
          <Image
            src="https://storage.googleapis.com/flolu-website/blog/whatsapp-without-phone/thumbnail.png"
            width={1920}
            height={1080}
          />
        </a>
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold sm:text-5xl">{title}</h1>
          <div className="flex items-center my-8 space-x-4">
            <div className="w-16 rounded-full">
              <Image
                className="rounded-full"
                alt="Florian Ludewig"
                src="https://storage.googleapis.com/flolu-website/me/avatar4.jpg"
                layout="responsive"
                width={512}
                height={512}
              />
            </div>
            <div className="space-y-1 font-sans">
              <p className="font-medium">Florian Ludewig</p>
              <p className="text-300">Jun 3, 2021</p>
            </div>
          </div>

          <div className="mb-16 space-y-16 text-lg leading-loose text-900">
            <section>
              <p>
                Ever tried to use WhatsApp without your phone? Currently that&apos;s not possible.
                But there is a way to make it work. This blog post showcases how to run WhatsApp on
                Linux without an active phone connection.
              </p>
              <p className="italic">
                Check out the{' '}
                <a href="https://youtu.be/72WyCIWO3MQ" className="underline">
                  video tutorial
                </a>{' '}
                if you don&apos;t feel like reading.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">1. Android Emulator</h2>
              <p>
                To do this we will be running a full Android system on our Linux machine.
                That&apos;s possible using an open source software called{' '}
                <a href="https://github.com/anbox/anbox" className="underline">
                  Anbox
                </a>
                .
              </p>
              <pre className="px-4 py-2 my-2 rounded-sm bg-300">
                sudo snap install --devmode --beta anbox
              </pre>
              <p>
                Now you can simply open Anbox. No worries, starting it for the first time will take
                a while.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">2. Android Debug Bridge</h2>
              <p>
                To install apps on our emulated Android system we need the{' '}
                <a
                  href="https://developer.android.com/studio/command-line/adb"
                  className="underline"
                >
                  Android Debug Bridge
                </a>
                .
              </p>
              <pre className="px-4 py-2 my-2 rounded-sm bg-300">sudo apt install adb</pre>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">3. Install WhatsApp</h2>
              <p>
                Almost done! Download the latest APK of WhatsApp{' '}
                <a href="https://www.whatsapp.com/android" className="underline">
                  here
                </a>
                .
              </p>
              <p>And install it by running the following command.</p>
              <pre className="px-4 py-2 my-2 rounded-sm bg-300">
                adb install ~/Downloads/WhatsApp.apk
              </pre>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">4. Setup WhatsApp</h2>
              <p>
                Simply go through the setup wizard. You will need to verify your phone number by
                entering a code that&apos;s sent to you via SMS.
              </p>
              <p>That&apos;s it 🎉</p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-bold">Limitations</h2>
              <ul>
                <li>
                  You can only use WhatsApp on one device. Either computer or phone. At least until
                  WhatsApp releases multi-device support.
                </li>
                <li>You have to import your contacts into the Android emulator manually.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async props => {
  const namespaces = ['header', 'footer']
  const locale = props.locale || 'en'
  const translations = await serverSideTranslations(locale, namespaces)
  return {props: {...translations, locale}}
}

export default Post
