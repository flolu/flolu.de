import Image from 'next/image'

import {ArrowDownIcon} from '../Icons/ArrowDownIcon'
import {ArrowForwardIcon} from '../Icons/ArrowForwardIcon'
import {GithubIcon} from '../Icons/GithubIcon'
import {InstagramIcon} from '../Icons/InstagramIcon'
import {MouseIcon} from '../Icons/MouseIcon'
import {YoutubeIcon} from '../Icons/YoutubeIcon'

export function HomeHead() {
  return (
    <section className="relative flex flex-col-reverse items-center justify-end space-x-4 md:justify-center md:flex-row md:min-h-screen md:px-28 lg:px-0">
      <div className="max-w-xs mt-12 md:max-w-sm md:mt-0">
        <h1 className="text-5xl font-bold md:text-7xl lg:text-8xl text-900">I'm Flo</h1>
        <p className="mt-4 leading-relaxed lg:mt-6 md:text-base lg:text-xl text-500">
          Computer science student, programmer, startupper and fitness addict.
        </p>
        <button className="flex items-center px-4 py-2 mt-8 space-x-2 text-lg font-medium rounded-lg lg:mt-12 lg:px-6 lg:py-3 lg:text-xl bg-primary-500 text-on-primary-300 focus:outline-none focus:ring-4 ring-offset-2 ring-primary-100">
          <span>Stalk me</span>
          <span className="w-6 fill-current">
            <ArrowForwardIcon />
          </span>
        </button>
      </div>

      <div className="w-56 md:w-full md:max-w-xs lg:max-w-sm xl:max-w-md">
        <Image
          className="rounded-full"
          src="/avatar.jpg"
          alt="Avatar of Flo"
          layout="responsive"
          width={512}
          height={512}
        />
      </div>

      <div className="absolute flex mx-auto -left-4 sm:pl-4 max-w-7xl">
        <div className="flex flex-col items-center justify-center w-5 h-56 space-y-10 cursor-pointer md:h-auto">
          <a
            target="_blank"
            href="https://github.com/flolu"
            className="w-5 fill-current text-primary-300"
          >
            <GithubIcon />
          </a>
          <a
            target="_blank"
            href="https://instagram.com/flo.ludewig"
            className="w-5 fill-current text-primary-300"
          >
            <InstagramIcon />
          </a>
          <a
            target="_blank"
            href="https://www.youtube.com/c/flolu"
            className="w-5 fill-current text-primary-300"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>

      <div className="absolute justify-center hidden w-full bottom-8 md:flex">
        <div className="flex items-center space-x-2 cursor-pointer animate-bounce">
          <span className="w-6 fill-current">
            <MouseIcon />
          </span>
          <span>Scroll down</span>
          <span className="w-5 fill-current">
            <ArrowDownIcon />
          </span>
        </div>
      </div>
    </section>
  )
}
