import {Menu, Transition} from '@headlessui/react'
import {useTranslation} from 'next-i18next'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {FC, Fragment} from 'react'

import {GermanIcon} from './Icons/GermanIcon'
import {TranslateIcon} from './Icons/TranslateIcon'
import {UnitedKingdomIcon} from './Icons/UnitedKingdomIcon'

export const LanguageSelector: FC = () => {
  const {t} = useTranslation()
  const router = useRouter()

  return (
    <Menu as="div" className="relative h-5">
      <Menu.Button className="inline-flex">
        <span
          className="w-6 cursor-pointer fill-current hover:text-primary-500"
          aria-label="language"
          role="button"
        >
          <TranslateIcon />
        </span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-20 mt-4 text-sm font-bold border rounded-lg shadow-lg w-36 border-background-900 top-6 bg-50">
          <Menu.Item>
            <Link href={router.pathname} locale="en" legacyBehavior>
              <div className="block w-full px-2 py-2 cursor-pointer text-start hover:bg-300">
                <span className="flex items-center space-x-2">
                  <span className="w-6">
                    <UnitedKingdomIcon />
                  </span>
                  <span className={router.locale === 'en' ? 'text-primary-700' : ''}>
                    {t('common:locale_en')}
                  </span>
                </span>
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href={router.pathname} locale="de" legacyBehavior>
              <div className="block w-full px-2 py-2 cursor-pointer text-start hover:bg-300">
                <span className="flex items-center space-x-2">
                  <span className="w-6">
                    <GermanIcon />
                  </span>
                  <span className={router.locale === 'de' ? 'text-primary-700' : ''}>
                    {t('common:locale_de')}
                  </span>
                </span>
              </div>
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
