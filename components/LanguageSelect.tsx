import {Menu, Transition} from '@headlessui/react'
import {useTranslation} from 'next-i18next'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {FC, Fragment} from 'react'

import {GermanIcon} from '@/components/Icons/GermanIcon'
import {UnitedKingdomIcon} from '@/components/Icons/UnitedKingdomIcon'
import {classNames} from '@/lib/class-names'

interface Props {
  position: 'above' | 'below'
}

export const LanguageSelect: FC<Props> = ({position}) => {
  const router = useRouter()
  const {t} = useTranslation()

  return (
    <Menu as="div" className="relative inline-block">
      <Menu.Button className="inline-flex px-2 py-1 font-medium hover:bg-primary-500">
        <span>{t(`footer:locale_${router.locale}`)}</span>
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
        <Menu.Items
          className={classNames(
            'absolute left-0 bg-100 rounded border shadow-md divide-y divide-background-300',
            position === 'above' && 'bottom-10',
            position === 'below' && 'top-8',
          )}
        >
          <Menu.Item>
            <Link href={router.pathname} locale="en">
              <div className="block w-full px-4 py-2 cursor-pointer text-start focus:outline-none text-900 hover:bg-900">
                <span className="flex items-center space-x-2 font-medium">
                  <span className="w-6">
                    <UnitedKingdomIcon />
                  </span>
                  <span className="leading-tight">{t('footer:locale_en')}</span>
                </span>
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link href={router.pathname} locale="de">
              <div className="block w-full px-4 py-2 cursor-pointer text-start focus:outline-none text-900 hover:bg-900">
                <span className="flex items-center space-x-2 font-medium">
                  <span className="w-6">
                    <GermanIcon />
                  </span>
                  <span className="leading-tight">{t('footer:locale_de')}</span>
                </span>
              </div>
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
