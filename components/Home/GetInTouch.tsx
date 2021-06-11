import {useTranslation} from 'next-i18next'

import {EmailIcon} from '@/icons/EmailIcon'
import {InstagramIcon} from '@/icons/InstagramIcon'
import {TelegramIcon} from '@/icons/TelegramIcon'

export function GetInTouch() {
  const {t} = useTranslation()

  return (
    <section id="get-in-touch">
      <div className="py-8 mx-auto mt-16 space-y-2 space-y-8 text-center lg:py-16 bg-primary-700 text-on-primary-700 xl:max-w-7xl xl:rounded-xl">
        <h2 className="text-4xl font-bold lg:text-6xl">{t('home:contact_me')}</h2>
        <div className="flex w-full px-8 mx-auto space-x-8 sm:max-w-md lg:max-w-lg">
          <a href="mailto:flo@drakery.com" className="flex flex-col items-center flex-1 space-y-2">
            <span className="w-8 fill-current sm:w-10 md:w-12">
              <EmailIcon />
            </span>
            <span className="text-xs font-bold sm:text-sm md:text-base">flo@drakery.com</span>
          </a>
          <a
            href="https://www.instagram.com/flo.ludewig"
            rel="noopener"
            className="flex flex-col items-center flex-1 space-y-2"
          >
            <span className="w-8 fill-current sm:w-10 md:w-12">
              <InstagramIcon />
            </span>
            <span className="text-xs font-bold sm:text-sm md:text-base">@flo.ludewig</span>
          </a>
          <a
            href="https://t.me/flolu"
            rel="noopener"
            className="flex flex-col items-center flex-1 space-y-2"
          >
            <span className="w-8 fill-current sm:w-10 md:w-12">
              <TelegramIcon />
            </span>
            <span className="text-xs font-bold sm:text-sm md:text-base">@flolu</span>
          </a>
        </div>
      </div>
    </section>
  )
}
