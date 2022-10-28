import {useTranslation} from 'next-i18next'

import {DDDesignerIcon} from '../Icons/3DDesignerIcon'
import {DrakeryLogo} from '../Icons/DrakeryLogo'
import {LacosIcon} from '../Icons/LacosIcon'
import {MoneroLogo} from '../Icons/MoneroLogo'

export function BigProgressDot() {
  return (
    <div className="relative">
      <span className="absolute w-4 h-4 -ml-2 rounded-full -top-2 ring-1 ring-background-900 bg-300">
        <span className="absolute inline-flex w-full h-full rounded-full animate-ping bg-900"></span>
      </span>
    </div>
  )
}

export function ProgressDot() {
  return (
    <div className="relative">
      <span className="absolute w-3 h-3 -ml-[0.35rem] rounded-full -top-[0.35rem] ring-1 ring-background-900 bg-300">
        <span className="absolute inline-flex w-full h-full rounded-full animate-ping bg-900"></span>
      </span>
    </div>
  )
}

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
    <section id="timeline" className="max-w-2xl mx-auto">
      <div className="h-32 border-l sm:h-40 border-background-900"></div>
      <div className="space-y-12 border-l border-background-900">
        <div className="pb-4">
          <BigProgressDot />
          <div className="relative w-full ml-2 -mt-2 border-t border-background-900">
            <h2 className="absolute font-serif text-6xl font-bold right-2 bottom-2">2022</h2>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ProgressDot />
          <div className="space-y-2">
            {/* <img src="/3d_scanner.webp" className="rounded"></img> */}
            <p>{t('timeline:automated_3d_scanner')}</p>
            <p className="flex items-center">
              <a
                href="https://drakery.com/3d-scanning"
                className="underline decoration-2 font-medium decoration-[#63e46e] inline-flex items-center mr-1"
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
            <p>{t('timeline:cs_6th_semester')}</p>
            <p className="flex items-center">
              <a
                href="https://flolu.de/thesis.pdf"
                className="underline decoration-2 font-medium decoration-[#F74F4F] inline-flex items-center mr-1"
              >
                <span>{t('timeline:bachelor_thesis')}</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:kletterwald_website')}</p>
            <p className="flex items-center">
              <a
                href="https://www.kletterwald-saalburg.de/"
                className="underline decoration-2 font-medium decoration-[#2c633d] inline-flex items-center mr-1"
              >
                <span>Kletterwald Saalburg</span>
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
                className="underline decoration-2 font-medium decoration-[#F60] inline-flex items-center mr-1"
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
            {/* <img src="/indian_vase_breakdown.webp" className="rounded"></img> */}
            <p>{t('timeline:photorealistic_3d_scanning_description')}</p>
            <p className="flex items-center">
              <a
                href="https://sketchfab.com/flolu"
                className="underline decoration-2 font-medium decoration-[#1caad9] inline-flex items-center mr-1"
              >
                <span>Sketchfab</span>
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
                className="inline-flex items-center mr-1 font-medium underline decoration-2"
              >
                <span>Bullet Journal</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            {/* <img src="/fullstack_auth.webp" className="rounded"></img> */}
            <p>{t('timeline:youtube_videos_description')}</p>
            <p className="flex items-center">
              <a
                href="https://www.youtube.com/@flolu"
                className="inline-flex items-center mr-1 font-medium underline decoration-2 decoration-[#f00]"
              >
                YouTube,
              </a>
              <a
                href="https://rumble.com/user/flolu"
                className="inline-flex items-center mr-1 font-medium underline decoration-2 decoration-[#85C742]"
              >
                Rumble,
              </a>
              <a
                href="https://odysee.com/$/invite/@flolu"
                className="inline-flex items-center mr-1 font-medium underline decoration-2 decoration-[#f24158]"
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

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:founded_first_company_description')}</p>
            <p className="flex items-center">
              <a
                href="https://drakery.com"
                className="underline decoration-2 font-medium decoration-[#63e46e] inline-flex items-center mr-1"
              >
                <span className="inline-block w-8 h-8 mr-2">
                  <DrakeryLogo />
                </span>
                <span>Drakery</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:started_3d_designer_desc')}</p>
            <p className="flex items-center">
              <a
                href="https://github.com/3ddesigner"
                className="underline decoration-2 font-medium decoration-[#0084cc] inline-flex items-center mr-1"
              >
                <span className="inline-block w-8 h-8 mr-2 text-[#0084cc] fill-current">
                  <DDDesignerIcon />
                </span>
                <span>3D Designer</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:started_drakery_platform_desc')}</p>
            <p className="flex items-center">
              <a
                href="https://drakery.com"
                className="underline decoration-2 font-medium decoration-[#63e46e] inline-flex items-center mr-1"
              >
                <span className="inline-block w-8 h-8 mr-2">
                  <DrakeryLogo />
                </span>
                <span>Drakery</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:spleenlab_engineer')}</p>
            <p className="flex items-center">
              <a
                href="https://spleenlab.com"
                className="underline decoration-2 font-medium decoration-[#FF6633] inline-flex items-center mr-1"
              >
                <span>Spleenlab</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:first_handstand_push_up')}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:started_3d_scanning_desc')}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:cs_1st_2nd_semester')}</p>
          </div>
        </div>

        <div className="pt-16 pb-4">
          <BigDot />
          <div className="relative w-full ml-2 -mt-2 border-t border-background-900">
            <h2 className="absolute font-serif text-6xl font-bold right-2 bottom-2">2019</h2>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:cs_start')}</p>
            <p className="flex items-center">
              <a
                href="https://www.uni-jena.de"
                className="underline decoration-2 font-medium decoration-[#002350] inline-flex items-center mr-1"
              >
                FSU Jena
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            {/* <a href="https://www.instagram.com/p/CLUro1RnAVM/">
              <img src="/ice_bath.webp" className="rounded"></img>
            </a> */}
            <p>{t('timeline:ice_bathing')}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:startup_teens_desc')}</p>
            <p className="flex items-center">
              <a
                href="https://www.startupteens.de/site/2019"
                className="underline decoration-2 font-medium decoration-[#028eb6] inline-flex items-center mr-1"
              >
                Startup Teens
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:started_calisthenics')}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:lacos')}</p>
            <p className="flex items-center">
              <a
                href="https://www.lacos.eu"
                className="underline decoration-2 font-medium decoration-[#197d5f] inline-flex items-center mr-1"
              >
                <span className="inline-block w-8 h-8 mr-2">
                  <LacosIcon />
                </span>
                <span>LACOS</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:linux_os')}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:high_school')}</p>
          </div>
        </div>

        <div className="pt-16 pb-4">
          <BigDot />
          <div className="relative w-full ml-2 -mt-2 border-t border-background-900">
            <h2 className="absolute font-serif text-6xl font-bold right-2 bottom-2">2018</h2>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            {/* <img src="/tackleit_thumb.webp"></img> */}
            <p>{t('timeline:tackle_it_description')}</p>
            <p className="flex items-center">
              <a
                href="https://apkpure.com/in/tackleit-distance-tracker/net.tackleit.tackleit"
                className="underline decoration-2 font-medium decoration-[#e5353f] inline-flex items-center mr-1"
              >
                <img className="inline-block w-8 h-8 mr-2" src="/tackleit.webp"></img>
                <span>TackleIt</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:entrepreneurship_description')}</p>
            <p className="flex items-center">
              <a
                href="http://getunscripted.com"
                className="underline decoration-2 font-medium decoration-[#d90000] inline-flex items-center mr-1"
              >
                <span>UNSCRIPTED</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:started_full_stack_dev')}</p>
            <p className="flex items-center">
              <a
                href="https://github.com/flolu"
                className="inline-flex items-center mr-1 font-medium underline decoration-2"
              >
                <span>GitHub</span>
              </a>
            </p>
          </div>
        </div>

        <div className="pt-16 pb-4">
          <BigDot />
          <div className="relative w-full ml-2 -mt-2 border-t border-background-900">
            <h2 className="absolute font-serif text-6xl font-bold right-2 bottom-2">
              {t('timeline:before')}
            </h2>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:first_line_of_code_description')}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:de_junts_description')}</p>
            <p className="flex items-center">
              <a
                href="https://www.youtube.com/c/deJunts"
                className="inline-flex items-center mr-1 font-medium underline decoration-2 decoration-[#f85151]"
              >
                <span>deJunts,</span>
              </a>
              <a
                href="https://www.youtube.com/c/deJuntsGaming"
                className="inline-flex items-center mr-1 font-medium underline decoration-2 decoration-[#ace052]"
              >
                <span>deJuntsGaming</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:skatestyle_description')}</p>
            <p className="flex items-center">
              <a
                href="https://www.youtube.com/channel/UCa_UyaAlrWAgjZM0GB6zvpw"
                className="inline-flex items-center mr-1 font-medium underline decoration-2 decoration-[#fe1132]"
              >
                <span>SkateStyle,</span>
              </a>
              <a
                href="https://www.youtube.com/user/SkateStyleLP"
                className="inline-flex items-center mr-1 font-medium underline decoration-2 decoration-[#fef52a]"
              >
                <span>SkateStyleOld</span>
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <SmallDot />
          <div className="space-y-2">
            <p>{t('timeline:paluten_description')}</p>
            <p className="flex items-center">
              <a
                href="https://youtu.be/y6QRGQhEYJI"
                className="inline-flex items-center mr-1 font-medium underline decoration-2 decoration-[#f00]"
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
      </div>

      <div className="h-16 border-l sm:h-20 border-background-900"></div>
    </section>
  )
}
