import {useTranslation} from 'next-i18next'

import {CheckRoundIcon} from '@/icons/CheckRoundIcon'

import {DrakeryLogo} from '../Icons/DrakeryLogo'
import {MoneroLogo} from '../Icons/MoneroLogo'

export function SmallDot() {
  return (
    <div className="relative">
      <span className="absolute w-2 h-2 -ml-1 rounded-full -top-1 ring-1 bg-100 ring-background-900"></span>
    </div>
  )
}

export function BigDot() {
  return <div className="w-4 h-4 -ml-2 rounded-full ring-1 bg-100 ring-background-900"></div>
}

export function Timeline() {
  const {t} = useTranslation()
  return (
    <section id="timeline" className="max-w-xl mx-auto">
      <div className="h-32 border-l sm:h-40 border-background-900"></div>
      <div className="space-y-8 border-l border-background-900">
        <div className="pb-4">
          <BigDot />
          <div className="relative w-full ml-2 -mt-2 border-t border-background-900">
            <h2 className="absolute font-serif text-6xl font-bold right-2 bottom-2">2022</h2>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <p>{t('timeline:cs_5th_semester')}</p>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div>
            <p className="flex items-center">
              <a
                href="https://meganero.com"
                className="underline decoration-2 font-bold decoration-[#F60] inline-flex items-center mr-1"
              >
                <span className="inline-block w-8 h-8 mr-2">
                  <MoneroLogo />
                </span>
                <span>Meganero</span>
              </a>
            </p>
          </div>
        </div>

        <div className="pt-16 pb-4">
          <BigDot />
          <div className="relative w-full ml-2 -mt-2 border-t border-background-900">
            <h2 className="absolute font-serif text-6xl font-bold right-2 bottom-2">2021</h2>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:learnt_about_monero_description')}</p>
            <p className="flex items-center">
              <a
                href="https://www.getmonero.org"
                className="underline decoration-2 font-bold decoration-[#F60] inline-flex items-center mr-1"
              >
                <span className="inline-block w-8 h-8 mr-2">
                  <MoneroLogo />
                </span>
                <span>Monero</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <img
              src="/indian_vase_breakdown.webp"
              className="float-left w-full rounded sm:w-1/2 sm:mr-4"
            ></img>
            <p>{t('timeline:photorealistic_3d_scanning_description')}</p>
            <p className="flex items-center">
              <a
                href="https://drakery.com/3d-scanning"
                className="underline decoration-2 font-bold decoration-[#63e46e] inline-flex items-center mr-1"
              >
                <span className="inline-block w-8 h-8 mr-2">
                  <DrakeryLogo />
                </span>
                <span>Drakery 3D Scanning</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:bullet_journal_description')}</p>
            <p className="flex items-center">
              <a
                href="https://bulletjournal.com/"
                className="inline-flex items-center mr-1 font-bold underline decoration-2"
              >
                <span>Bullet Journal</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:youtube_videos_description')}</p>
            <p className="flex items-center">
              <a
                href="https://www.youtube.com/c/flolu"
                className="inline-flex items-center mr-1 font-bold underline decoration-2 decoration-[#f00]"
              >
                YouTube,
              </a>
              <a
                href="https://odysee.com/$/invite/@flolu"
                className="inline-flex items-center mr-1 font-bold underline decoration-2 decoration-[#f24158]"
              >
                Odysee
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <p>{t('timeline:learnt_freestyle_swimming_description')}</p>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <p>{t('timeline:cs_3rd_4th_semester')}</p>
        </div>

        <div className="pt-16 pb-4">
          <BigDot />
          <div className="relative w-full ml-2 -mt-2 border-t border-background-900">
            <h2 className="absolute font-serif text-6xl font-bold right-2 bottom-2">2020</h2>
          </div>
        </div>

        <ul className="space-y-8">
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">
                {t('timeline:founded_first_company')}
              </p>
              <p className="text-sm md:text-base text-300">
                {t('timeline:founded_first_company_description')}
              </p>
              <div>
                <a
                  href="https://drakery.com"
                  rel="noreferrer"
                  className="text-sm text-primary-700 hover:underline"
                >
                  Drakery
                </a>
              </div>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">
                {t('timeline:started_3d_designer')}
              </p>
              <p className="text-sm md:text-base text-300">
                {t('timeline:started_3d_designer_desc')}
              </p>
              <div>
                <a
                  href="https://github.com/3ddesigner"
                  rel="noreferrer"
                  className="text-sm text-primary-700 hover:underline"
                >
                  3D Designer
                </a>
              </div>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">
                {t('timeline:started_drakery_platform')}
              </p>
              <p className="text-sm md:text-base text-300">
                {t('timeline:started_drakery_platform_desc')}
              </p>
              <div>
                <a
                  href="https://drakery.com"
                  rel="noreferrer"
                  className="text-sm text-primary-700 hover:underline"
                >
                  Drakery
                </a>
              </div>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">{t('timeline:spleenlab_engineer')}</p>
              <div>
                <a
                  href="http://spleenlab.com"
                  rel="noreferrer"
                  className="text-sm text-primary-700 hover:underline"
                >
                  Spleenlab
                </a>
              </div>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">
                {t('timeline:first_handstand_push_up')}
              </p>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">
                {t('timeline:started_3d_scanning')}
              </p>
              <p className="text-sm md:text-base text-300">
                {t('timeline:started_3d_scanning_desc')}
              </p>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">
                {t('timeline:cs_1st_2nd_semester')}
              </p>
            </div>
          </li>
        </ul>

        <div className="pt-16 pb-4">
          <BigDot />
          <div className="relative w-full ml-2 -mt-2 border-t border-background-900">
            <h2 className="absolute font-serif text-6xl font-bold right-2 bottom-2">2019</h2>
          </div>
        </div>

        <ul className="space-y-8">
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">{t('timeline:cs_start')}</p>
              <div>
                <a
                  href="https://www.uni-jena.de"
                  rel="noreferrer"
                  className="text-sm text-primary-700 hover:underline"
                >
                  FSU Jena
                </a>
              </div>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">{t('timeline:startup_teens')}</p>
              <p className="text-sm md:text-base text-300">{t('timeline:startup_teens_desc')}</p>
              <div>
                <a
                  href="https://www.startupteens.de/site/2019"
                  rel="noreferrer"
                  className="text-sm text-primary-700 hover:underline"
                >
                  Startup Teens
                </a>
              </div>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">
                {t('timeline:started_calisthenics')}
              </p>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">{t('timeline:lacos')}</p>
              <div>
                <a
                  href="https://www.lacos.eu"
                  rel="noreferrer"
                  className="text-sm text-primary-700 hover:underline"
                >
                  LACOS
                </a>
              </div>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">{t('timeline:high_school')}</p>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">{t('timeline:linux_os')}</p>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">{t('timeline:ice_bathing')}</p>
            </div>
          </li>
        </ul>

        <div className="pt-16 pb-4">
          <BigDot />
          <div className="relative w-full ml-2 -mt-2 border-t border-background-900">
            <h2 className="absolute font-serif text-6xl font-bold right-2 bottom-2">2018</h2>
          </div>
        </div>

        <ul className="space-y-8">
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">{t('timeline:tackle_it')}</p>
              <p className="text-sm md:text-base text-300">{t('timeline:tackle_it_description')}</p>
              <div>
                <a
                  href="https://apkpure.com/in/tackleit-distance-tracker/net.tackleit.tackleit"
                  rel="noreferrer"
                  className="text-sm text-primary-700 hover:underline"
                >
                  TackleIt
                </a>
              </div>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">{t('timeline:entrepreneurship')}</p>
              <p className="text-sm md:text-base text-300">
                {t('timeline:entrepreneurship_description')}
              </p>
              <div>
                <a
                  href="http://getunscripted.com"
                  rel="noreferrer"
                  className="text-sm text-primary-700 hover:underline"
                >
                  UNSCRIPTED
                </a>
              </div>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">
                {t('timeline:started_full_stack_dev')}
              </p>
            </div>
          </li>
        </ul>

        <div className="pt-16 pb-4">
          <BigDot />
          <div className="relative w-full ml-2 -mt-2 border-t border-background-900">
            <h2 className="absolute font-serif text-6xl font-bold right-2 bottom-2">
              {t('timeline:before')}
            </h2>
          </div>
        </div>

        <ul className="space-y-8">
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">{t('timeline:first_line_of_code')}</p>
              <p className="text-sm md:text-base text-300">
                {t('timeline:first_line_of_code_description')}
              </p>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">{t('timeline:de_junts')}</p>
              <p className="text-sm md:text-base text-300">{t('timeline:de_junts_description')}</p>
              <div className="space-x-2">
                <a
                  href="https://www.youtube.com/channel/UC3D3fk_hVob8nhT7-3WaQ9g"
                  rel="noreferrer"
                  className="text-sm text-primary-700 hover:underline"
                >
                  deJunts
                </a>
                <a
                  href="https://www.youtube.com/channel/UC3D3fk_hVob8nhT7-3WaQ9g"
                  rel="noreferrer"
                  className="text-sm text-primary-700 hover:underline"
                >
                  deJuntsGaming
                </a>
              </div>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">{t('timeline:skatestyle')}</p>
              <p className="text-sm md:text-base text-300">
                {t('timeline:skatestyle_description')}
              </p>
              <div className="space-x-4">
                <div className="space-x-2">
                  <a
                    href="https://www.youtube.com/channel/UCa_UyaAlrWAgjZM0GB6zvpw"
                    rel="noreferrer"
                    className="text-sm text-primary-700 hover:underline"
                  >
                    SkateStyle
                  </a>
                  <a
                    href="https://www.youtube.com/user/SkateStyleLP"
                    rel="noreferrer"
                    className="text-sm text-primary-700 hover:underline"
                  >
                    SkateStyleOld
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:paluten_description')}</p>
            <p className="flex items-center">
              <a
                href="https://youtu.be/y6QRGQhEYJI"
                className="inline-flex items-center mr-1 font-bold underline decoration-2 decoration-[#f00]"
              >
                Paluten
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <p>{t('timeline:skateboarding_description')}</p>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <p>{t('timeline:childhood_description')}</p>
        </div>

        <div className="pt-16 pb-4">
          <BigDot />
          <div className="relative w-full ml-2 -mt-2 border-t border-background-900">
            <h2 className="absolute font-serif text-6xl font-bold right-2 bottom-2">2001</h2>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <p>{t('timeline:born')}</p>
        </div>
      </div>

      <div className="h-32 border-l sm:h-40 border-background-900"></div>
    </section>
  )
}
