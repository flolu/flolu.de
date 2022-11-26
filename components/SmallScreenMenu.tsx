import {Menu, Transition} from '@headlessui/react'
import {useTranslation} from 'next-i18next'
import Link from 'next/link'
import {FC, Fragment} from 'react'

import {MenuIcon} from './Icons/MenuIcon'

export const SmallScreenMenu: FC = () => {
  const {t} = useTranslation()

  return (
    <Menu as="div" className="relative h-5 sm:hidden">
      <Menu.Button className="inline-flex">
        <span
          className="w-6 cursor-pointer fill-current hover:text-primary-500"
          aria-label="navigation menu"
          role="button"
        >
          <MenuIcon />
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
            <Link href="/blog" legacyBehavior>
              <div className="block w-full px-2 py-2 cursor-pointer text-start hover:bg-300">
                <span className="flex items-center space-x-2">
                  <span>{t('common:blog')}</span>
                </span>
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/donations" legacyBehavior>
              <div className="block w-full px-2 py-2 cursor-pointer text-start hover:bg-300">
                <span className="flex items-center space-x-2">
                  <span>{t('common:donations')}</span>
                </span>
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href="/contact" legacyBehavior>
              <div className="block w-full px-2 py-2 cursor-pointer text-start hover:bg-300">
                <span className="flex items-center space-x-2">
                  <span>{t('common:contact')}</span>
                </span>
              </div>
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
