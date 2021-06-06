import {useState} from 'react'

import {classNames} from '../../lib/class-names'
import {CheckRoundIcon} from '../Icons/CheckRoundIcon'
import {ChevronDownIcon} from '../Icons/ChevronDownIcon'
import {LinkIcon} from '../Icons/LinkIcon'

export function Timeline() {
  const [showFullTimeline, setShowFullTimeline] = useState(false)

  return (
    <section>
      <div className="mb-8 space-y-2 text-center">
        <h1 className="text-6xl font-bold">Timeline</h1>
      </div>
      <div className="max-w-xl mx-auto space-y-8">
        <h2 className="flex items-center space-x-4 text-4xl font-bold">
          <span>2021</span>
          <span className="w-full h-px bg-500"></span>
        </h2>
        <ul className="space-y-8">
          <li className="flex space-x-2">
            <div className="flex items-center justify-center flex-none w-6">
              <span className="relative flex w-4 h-4">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-primary-300 animate-ping"></span>
                <span className="relative inline-flex w-4 h-4 rounded-full bg-primary-300"></span>
              </span>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium sm:text-base">
                Building{' '}
                <a
                  href="https://drakery.com"
                  className="px-1 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
                >
                  Drakery
                </a>
              </span>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex items-center justify-center flex-none w-6">
              <span className="relative flex w-4 h-4">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-primary-300 animate-ping"></span>
                <span className="relative inline-flex w-4 h-4 rounded-full bg-primary-300"></span>
              </span>
            </div>
            <div className="space-y-2">
              <span className="text-sm font-medium sm:text-base">
                Building{' '}
                <a
                  href="https://next.3d-designer.drakery.com"
                  className="px-1 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
                >
                  3D Designer
                </a>
              </span>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex items-center justify-center flex-none w-6">
              <span className="relative flex w-4 h-4">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-primary-300 animate-ping"></span>
                <span className="relative inline-flex w-4 h-4 rounded-full bg-primary-300"></span>
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">
                Studying computer science in my 4th semester
              </p>
            </div>
          </li>
          <div className="h-2"></div>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">Learnt freestyle swimming</p>
              <p className="text-xs sm:text-sm md:text-base text-300">
                I was never a 'water-person', but this year I've pushed myself to get comfortable.
              </p>
              <a
                href="https://www.strava.com/athletes/69079803"
                className="inline-flex items-center px-1 space-x-2 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
              >
                <span className="w-5 fill-current">
                  <LinkIcon />
                </span>
                <span>Strava</span>
              </a>
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
                3rd semester of computer science degree
              </p>
            </div>
          </li>
        </ul>

        <h2 className="flex items-center space-x-4 text-4xl font-bold">
          <span>2020</span>
          <span className="w-full h-px bg-500"></span>
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
                Founded{' '}
                <a
                  href="https://drakery.com"
                  className="px-1 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
                >
                  Drakery
                </a>
              </p>
              <p className="text-xs sm:text-sm md:text-base text-300">
                My team partner and I finally committed to becoming entrepreneurs.
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
                Started building a 3D Product Designer with{' '}
                <a
                  href="https://www.iesgmbh.com"
                  className="px-1 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
                >
                  IES GmbH
                </a>
              </p>
              <p className="text-xs sm:text-sm md:text-base text-300">
                Together we wan to build a platform where products are designed, can be configured
                in 3d and are produced.
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
                Started building{' '}
                <a
                  href="https://www.iesgmbh.com"
                  className="px-1 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
                >
                  Drakery
                </a>{' '}
                platform
              </p>
              <p className="text-xs sm:text-sm md:text-base text-300">
                After years of extensively learning full stack development, I've started coding my
                biggest project yet.
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
                Software engineer at{' '}
                <a
                  href="http://spleenlab.com"
                  className="px-1 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
                >
                  Spleenlab
                </a>{' '}
                for a few weeks
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
              <p className="text-sm font-medium sm:text-base">My first handstand push up</p>
            </div>
          </li>
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">3D Scanning is awesome</p>
              <p className="text-xs sm:text-sm md:text-base text-300">
                The idea of turning real objects into photorealistic 3D models fascinated me. I've
                scanned hundreds of objects and learnt a lot in the process.
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
                1st and 2nd semester of computer science degree
              </p>
            </div>
          </li>
        </ul>

        <h2 className="flex items-center space-x-4 text-4xl font-bold">
          <span>2019</span>
          <span className="w-full h-px bg-500"></span>
        </h2>
        <ul className="space-y-8">
          <li className="flex space-x-2">
            <div className="flex-none w-6">
              <span className="fill-current text-primary-300">
                <CheckRoundIcon />
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium sm:text-base">Started studying computer science</p>
              <a
                href="https://www.uni-jena.de/"
                className="inline-flex items-center px-1 space-x-2 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
              >
                <span className="w-5 fill-current">
                  <LinkIcon />
                </span>
                <span>FSU Jena</span>
              </a>
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
                First price in a startup competition in Berlin
              </p>
              <p className="text-xs sm:text-sm md:text-base text-300">
                Our idea for a 3D platform was well received and we've won the first price in the
                "Platforms & Services" category.
              </p>
              <a
                href="https://www.startupteens.de/site/2019"
                className="inline-flex items-center px-1 space-x-2 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
              >
                <span className="w-5 fill-current">
                  <LinkIcon />
                </span>
                <span>Startup Teens</span>
              </a>
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
                Started training calisthenics regularly
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
                Software engineer at{' '}
                <a
                  href="https://www.lacos.eu/"
                  className="px-1 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
                >
                  LACOS
                </a>{' '}
                for a few months
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
              <p className="text-sm font-medium sm:text-base">Graduated high school</p>
            </div>
          </li>
        </ul>

        {!showFullTimeline && (
          <div onClick={() => setShowFullTimeline(true)} className="flex justify-center w-full">
            <div className="flex items-center p-4 cursor-pointer">
              <span>Show more</span>
              <span className="w-6 fill-current">
                <ChevronDownIcon />
              </span>
            </div>
          </div>
        )}

        <div className={classNames('space-y-8', showFullTimeline ? 'block' : 'hidden')}>
          <h2 className="flex items-center space-x-4 text-4xl font-bold">
            <span>2018</span>
            <span className="w-full h-px bg-500"></span>
          </h2>
          <ul className="space-y-8">
            <li className="flex space-x-2">
              <div className="flex-none w-6">
                <span className="fill-current text-primary-300">
                  <CheckRoundIcon />
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium sm:text-base">Built a GPS tracking app</p>
                <p className="text-xs sm:text-sm md:text-base text-300">
                  It's not available anymore, but I've built a GPS-based distance tracker as my
                  first programming project.
                </p>
                <a
                  href="https://apkpure.com/in/tackleit-distance-tracker/net.tackleit.tackleit"
                  className="inline-flex items-center px-1 space-x-2 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
                >
                  <span className="w-5 fill-current">
                    <LinkIcon />
                  </span>
                  <span>TackleIt</span>
                </a>
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
                  Entrepreneurship caught my attention
                </p>
                <p className="text-xs sm:text-sm md:text-base text-300">
                  Reading Mj Demarco's books literally changed my life.
                </p>
                <div className="space-x-4">
                  <a
                    href="http://www.themillionairefastlane.com"
                    className="inline-flex items-center px-1 space-x-2 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
                  >
                    <span className="w-5 fill-current">
                      <LinkIcon />
                    </span>
                    <span>The Millionaire Fastlane</span>
                  </a>
                  <a
                    href="https://www.mjdemarco.com/"
                    className="inline-flex items-center px-1 space-x-2 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
                  >
                    <span className="w-5 fill-current">
                      <LinkIcon />
                    </span>
                    <span>Mj Demarco</span>
                  </a>
                  <a
                    href="http://getunscripted.com"
                    className="inline-flex items-center px-1 space-x-2 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
                  >
                    <span className="w-5 fill-current">
                      <LinkIcon />
                    </span>
                    <span>UNSCRIPTED</span>
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
                  Started learning full stack development
                </p>
              </div>
            </li>
          </ul>

          <h2 className="flex items-center space-x-4 text-4xl font-bold">
            <span>before</span>
            <span className="w-full h-px bg-500"></span>
          </h2>
          <ul className="space-y-8">
            <li className="flex space-x-2">
              <div className="flex-none w-6">
                <span className="fill-current text-primary-300">
                  <CheckRoundIcon />
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium sm:text-base">My first line of code</p>
              </div>
            </li>
            <li className="flex space-x-2">
              <div className="flex-none w-6">
                <span className="fill-current text-primary-300">
                  <CheckRoundIcon />
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium sm:text-base">Filmmaking and YouTubing</p>
                <p className="text-xs sm:text-sm md:text-base text-300">
                  A friend of mine and I put all our energy into creative short films and gaming
                  videos. We've removed the short films for privacy reasons.
                </p>
                <div className="space-x-4">
                  <a
                    href="https://www.youtube.com/channel/UC3D3fk_hVob8nhT7-3WaQ9g"
                    className="inline-flex items-center px-1 space-x-2 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
                  >
                    <span className="w-5 fill-current">
                      <LinkIcon />
                    </span>
                    <span>deJunts</span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCptNzP2zQnvL1WXHCyPfPFw"
                    className="inline-flex items-center px-1 space-x-2 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
                  >
                    <span className="w-5 fill-current">
                      <LinkIcon />
                    </span>
                    <span>deJuntsGaming</span>
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
                  3D motion design and 3D modeling freelancing
                </p>
                <p className="text-xs sm:text-sm md:text-base text-300">
                  I've created hundreds of 3D animations for people from all around the world.
                </p>
                <div className="space-x-4">
                  <a
                    href="https://www.youtube.com/channel/UCa_UyaAlrWAgjZM0GB6zvpw"
                    className="inline-flex items-center px-1 space-x-2 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
                  >
                    <span className="w-5 fill-current">
                      <LinkIcon />
                    </span>
                    <span>SkateStyle</span>
                  </a>
                  <a
                    href="https://www.youtube.com/user/SkateStyleLP"
                    className="inline-flex items-center px-1 space-x-2 rounded-sm hover:bg-primary-100 hover:text-primary-900 bg-100 text-700"
                  >
                    <span className="w-5 fill-current">
                      <LinkIcon />
                    </span>
                    <span>SkateStyleOld</span>
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
                <p className="text-sm font-medium sm:text-base">Paluten used my intro</p>
                <p className="text-xs sm:text-sm md:text-base text-300">
                  Back then, that was a big deal. You can't imagine how happy I was.
                </p>
                <div className="space-x-4">
                  <a
                    href="https://youtu.be/y6QRGQhEYJI"
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
                <p className="text-sm font-medium sm:text-base">Skateboarding</p>
                <p className="text-xs sm:text-sm md:text-base text-300">
                  For a few years I've spent all day long on my skateboard doing all sorts of
                  tricks. Surprisingly only had a plaster because of it once.
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
                <p className="text-sm font-medium sm:text-base">Enjoyed childhood</p>
              </div>
            </li>
          </ul>

          <h2 className="flex items-center space-x-4 text-4xl font-bold">
            <span className="whitespace-nowrap">2001</span>
            <span className="w-full h-px bg-500"></span>
          </h2>
          <ul className="space-y-8">
            <li className="flex space-x-2">
              <div className="flex-none w-6">
                <span className="fill-current text-primary-300">
                  <CheckRoundIcon />
                </span>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium sm:text-base">Born</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
