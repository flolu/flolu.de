import {useTranslation} from 'next-i18next'

import {CheckRoundIcon} from '@/icons/CheckRoundIcon'
import {LinkIcon} from '@/icons/LinkIcon'

export function Timeline() {
  const {t} = useTranslation()
  return (
    <section id="timeline">
      <div className="mb-8 space-y-2 text-center">
        <h2 className="text-4xl font-bold lg:text-6xl">{t('home:timeline')}</h2>
      </div>
      <div className="max-w-xl mx-auto space-y-8 md:max-w-2xl">
        <h2 className="flex items-center space-x-4 text-2xl font-bold lg:text-4xl">
          <span>2021</span>
        </h2>
        <ul className="space-y-8">
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">
                {t('timeline:learnt_freestyle_swimming')}
              </p>
              <p className="text-sm md:text-base text-300">
                {t('timeline:learnt_freestyle_swimming_description')}
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
                {t('timeline:cs_3rd_4th_semester')}
              </p>
            </div>
          </li>
        </ul>

        <h2 className="flex items-center space-x-4 text-2xl font-bold lg:text-4xl">
          <span>2020</span>
        </h2>
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
                  href="https://github.com/drakery3d"
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
                  href="https://github.com/3ddesigner"
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

        <h2 className="flex items-center space-x-4 text-2xl font-bold lg:text-4xl">
          <span>2019</span>
        </h2>
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
        </ul>

        <div className="space-y-8">
          <h2 className="flex items-center space-x-4 text-2xl font-bold lg:text-4xl">
            <span>2018</span>
          </h2>
          <ul className="space-y-8">
            <li className="flex space-x-2">
              <div className="flex-none w-6">
                <span className="fill-current text-primary-300">
                  <CheckRoundIcon />
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium sm:text-base">{t('timeline:tackle_it')}</p>
                <p className="text-sm md:text-base text-300">
                  {t('timeline:tackle_it_description')}
                </p>
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

          <h2 className="flex items-center space-x-4 text-2xl font-bold lg:text-4xl">
            <span>{t('timeline:before')}</span>
          </h2>
          <ul className="space-y-8">
            <li className="flex space-x-2">
              <div className="flex-none w-6">
                <span className="fill-current text-primary-300">
                  <CheckRoundIcon />
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium sm:text-base">
                  {t('timeline:first_line_of_code')}
                </p>
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
                <p className="text-sm md:text-base text-300">
                  {t('timeline:de_junts_description')}
                </p>
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
            <li className="flex space-x-2">
              <div className="flex-none w-6">
                <span className="fill-current text-primary-300">
                  <CheckRoundIcon />
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium sm:text-base">{t('timeline:paluten')}</p>
                <p className="text-sm md:text-base text-300">{t('timeline:paluten_description')}</p>
                <div className="space-x-4">
                  <a
                    href="https://youtu.be/y6QRGQhEYJI"
                    rel="noreferrer"
                    className="inline-flex items-center px-1 space-x-2 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
                  >
                    <span className="w-5 fill-current">
                      <LinkIcon />
                    </span>
                    <span>Paluten</span>
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
                <p className="text-sm font-medium sm:text-base">{t('timeline:skateboarding')}</p>
                <p className="text-sm md:text-base text-300">
                  {t('timeline:skateboarding_description')}
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
                <p className="text-sm font-medium sm:text-base">{t('timeline:childhood')}</p>{' '}
                <p className="text-sm md:text-base text-300">
                  {t('timeline:childhood_description')}
                </p>
              </div>
            </li>
          </ul>

          <h2 className="flex items-center space-x-4 text-2xl font-bold lg:text-4xl">
            <span className="whitespace-nowrap">2001</span>
          </h2>
          <ul className="space-y-8">
            <li className="flex space-x-2">
              <div className="flex-none w-6">
                <span className="fill-current text-primary-300">
                  <CheckRoundIcon />
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium sm:text-base">{t('timeline:born')}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
