import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Image from 'next/image'
import {FC} from 'react'

import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'
import {PortfolioCard} from '@/components/Portfolio/Card'
import {GitHubRepository} from '@/components/Portfolio/GitHubRepository'
import {SketchfabModel} from '@/components/Portfolio/SketchfabModel'
import {UnsplashPhoto} from '@/components/Portfolio/UnsplashPhoto'
import {YouTubeVideo} from '@/components/Portfolio/YouTubeVideo'

interface Props {
  locale: string
}

const Portfolio: FC<Props> = ({locale}) => {
  const {t} = useTranslation()
  const formatter = new Intl.NumberFormat(locale)

  return (
    <div>
      <Header />
      <main className="max-w-6xl px-2 mx-auto space-y-8 sm:space-y-32">
        <section>
          <span className="text-lg font-medium text-100 sm:text-xl">
            {t('portfolio:portfolio')}
          </span>
          <h1 className="text-2xl font-bold sm:text-5xl">
            {t('portfolio:selection_of_my_creations')}
          </h1>
        </section>

        <section className="space-y-2">
          <h2 className="text-4xl font-bold sm:text-6xl">2021</h2>
          <div className="grid grid-cols-3 gap-0 sm:gap-2 md:gap-4">
            {/* 21.04.2020 */}
            <GitHubRepository
              repo="flolu/maizzle-node-example"
              name="Maizzle Node Example"
              commits={3}
              additions={5716}
              deletions={45}
              description="Example for rendering beautiful emails with dynamic content"
              tags={['nodejs', 'maizzle', 'email', 'tailwindcss', 'typescript']}
              locale={locale}
            ></GitHubRepository>

            {/* 06.04.2020 */}
            <GitHubRepository
              repo="drakery3d/fullbazel"
              name="Fullstack Bazel"
              commits={163}
              additions={28750}
              deletions={14182}
              description="Fullstack example monorepo for building modern web apps with Bazel"
              tags={[
                'terraform',
                'kubernetes',
                'kafka',
                'mysql',
                'nodejs',
                'typescript',
                'next.js',
                'angular',
                'websockets',
                'bazel',
                'monorepo',
                'tailwindcss',
              ]}
              locale={locale}
            ></GitHubRepository>

            {/* 29.01.2020 */}
            <GitHubRepository
              repo="flolu/chatroom-ws2020"
              name="Websocket Chat App"
              commits={69}
              additions={13115}
              deletions={4889}
              description="Web socket realtime chat room web application"
              tags={['typescript', 'bazel', 'angular', 'ngrx', 'websockets', 'realtime', 'mongodb']}
              locale={locale}
            ></GitHubRepository>

            <PortfolioCard>
              {/* 10.01.2021 */}
              <SketchfabModel
                id="6XVTH"
                image="3d-models/birds-figure_thumb.png"
                label="Birds stone figure 3d model"
              />
            </PortfolioCard>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-4xl font-bold sm:text-6xl">2020</h2>
          <div className="grid grid-cols-3 gap-0 sm:gap-2 md:gap-4">
            <PortfolioCard>
              {/* 28.09.2020 */}
              <SketchfabModel
                id="6VtpT"
                image="3d-models/shells-pack_thumb.png"
                label="Shells 3d models pack"
              />
            </PortfolioCard>

            {/* 30.08.2020 */}
            <GitHubRepository
              repo="flolu/centsideas"
              name="CentsIdeas"
              commits={636}
              additions={221951}
              deletions={194413}
              description="Modern fullstack web application for sharing fastlane business ideas"
              tags={[
                'event-sourcing',
                'kubernetes',
                'monorepo',
                'bazel',
                'typescript',
                'microservices',
                'angular',
                'kafka',
                'elasticsearch',
                'docker',
                'nodejs',
              ]}
              locale={locale}
            ></GitHubRepository>

            <PortfolioCard>
              {/* 16.08.2020 */}
              <UnsplashPhoto
                id="r8rAjMYYD9s"
                image="photography/DSC_3190_thumb.jpg"
                label="Bee on a flower with polls"
              />
            </PortfolioCard>

            <PortfolioCard>
              {/* 16.08.2020 */}
              <UnsplashPhoto
                id="1zfra1nNXkM"
                image="photography/DSC_3283_thumb.jpg"
                label="Bug on a leaf"
              />
            </PortfolioCard>

            <PortfolioCard>
              {/* 16.08.2020 */}
              <UnsplashPhoto
                id="jWVu8xqXdVk"
                image="photography/DSC_3294_thumb.jpg"
                label="Wasp on a flower"
              />
            </PortfolioCard>

            <PortfolioCard>
              {/* 16.08.2020 */}
              <UnsplashPhoto
                id="5fCgnSt3kxY"
                image="photography/DSC_3099_thumb.jpg"
                label="Fly on a leaf"
              />
            </PortfolioCard>

            <PortfolioCard>
              {/* 16.08.2020 */}
              <UnsplashPhoto
                id="83unbSTcyl8"
                image="photography/DSC_3358_thumb.jpg"
                label="Spider on a leaf"
              />
            </PortfolioCard>

            <PortfolioCard>
              {/* 15.07.2020 */}
              <SketchfabModel
                id="6TOEE"
                image="3d-models/woodden-giraffe_thumb.png"
                label="Wooden giraffe 3d model"
              />
            </PortfolioCard>

            {/* August 2020 */}
            <GitHubRepository
              repo="drakery3d/postgrammetry"
              name="3D-Scan-Cleanup Blender Addon"
              commits={73}
              additions={4463}
              deletions={2562}
              description="Blender addon to automate cleanup of photo-scanned 3d models"
              tags={[
                'python',
                'blender',
                'textures',
                '3d-scanning',
                'photogrammetry',
                '3d-rendering',
                'texture-baking',
              ]}
              locale={locale}
            ></GitHubRepository>

            <PortfolioCard>
              {/* 12.07.2020 */}
              <SketchfabModel
                id="6TMon"
                image="3d-models/red-cactus_thumb.png"
                label="Red cactus 3d model"
              />
            </PortfolioCard>

            <PortfolioCard>
              {/* 11.07.2020 */}
              <SketchfabModel
                id="6TLJK"
                image="3d-models/african-drum_thumb.png"
                label="African drum 3d model"
              />
            </PortfolioCard>

            <PortfolioCard>
              {/* 09.07.2020 */}
              <SketchfabModel
                id="6TJXV"
                image="3d-models/ski-shoe_thumb.png"
                label="Ski shoe 3d model"
              />
            </PortfolioCard>

            <PortfolioCard>
              {/* 01.07.2020 */}
              <SketchfabModel
                id="6TDsX"
                image="3d-models/steinerne-rose_thumb.jpg"
                label="Stone rose 3d model"
              />
            </PortfolioCard>

            {/* July 2020 */}
            <GitHubRepository
              repo="drakery3d/angular-3dviewer"
              name="Angular 3D Viewer"
              commits={93}
              additions={128844}
              deletions={117339}
              description="Web 3D viewer for Angular with inspection capabilities"
              tags={['webgl', 'threejs', '3d-viewer', 'angular', 'typescript']}
              locale={locale}
            ></GitHubRepository>

            <PortfolioCard>
              {/* 29.06.2020 */}
              <SketchfabModel
                id="o6SxY"
                image="3d-models/pine-tree-trunk_thumb.jpg"
                label="Pine tree trunk 3d model"
              />
            </PortfolioCard>

            <PortfolioCard>
              {/* 16.03.2020 */}
              <SketchfabModel
                id="o6SxZ"
                image="3d-models/spruce-tree-trunk_thumb.png"
                label="Spruce tree trunk 3d model"
              />
            </PortfolioCard>

            <PortfolioCard>
              {/* 06.03.2020 */}
              <SketchfabModel
                id="o6SxZ"
                image="3d-models/boar-skull_thumb.png"
                label="Boar skull 3d model"
              />
            </PortfolioCard>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-4xl font-bold sm:text-6xl">2019</h2>
          <div className="grid grid-cols-3 gap-0 sm:gap-2 md:gap-4">
            {/* 01.09.2019 */}
            <GitHubRepository
              repo="flolu/simple-event-sourcing-example"
              name="Simple Event Sourcing Example"
              commits={15}
              additions={3697}
              deletions={655}
              description="Small Node.js application to learn the concepts of event sourcing"
              tags={['event-sourcing', 'nodejs', 'typescript', 'cqrs', 'event-store']}
              locale={locale}
            ></GitHubRepository>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-4xl font-bold sm:text-6xl">2018</h2>
          <div className="grid grid-cols-3 gap-0 sm:gap-2 md:gap-4">
            <PortfolioCard>
              {/* 17.02.2018 */}
              <SketchfabModel
                id="6Y6L9"
                image="3d-models/realistic-longboard_thumb.jpg"
                label="Realistic skateboard 3d model"
              />
            </PortfolioCard>

            {/* January 2018 */}
            <div className="relative col-span-3 pt-1/3">
              <div className="absolute flex overflow-hidden md:items-center inset-2">
                <a
                  className="space-y-1 text-left sm:space-y-2"
                  target="_blank"
                  rel="noopener"
                  href="https://apkpure.com/in/tackleit-distance-tracker/net.tackleit.tackleit"
                >
                  <Image
                    width={3 * 512}
                    height={512}
                    src="https://storage.googleapis.com/flolu-website/apps/tackle-it_thumb.png"
                    alt="TackleIt distance tracker android app"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-4xl font-bold sm:text-6xl">2017</h2>
          <div className="grid grid-cols-3 gap-0 sm:gap-2 md:gap-4">
            <PortfolioCard>
              {/* 05.04.2017 */}
              <SketchfabModel
                id="6TXtv"
                image="3d-models/realistic-skateboard_thumb.png"
                label="Realistic skateboard 3d model"
              />
            </PortfolioCard>

            {/* 30.04.2017 */}
            <YouTubeVideo
              id="MokPDn7D9sI"
              image="vfx/city-loop-animation_thumb.png"
              label="City loop animation thumbnail"
            ></YouTubeVideo>

            <PortfolioCard>
              {/* 09.04.2017 */}
              <a
                className="w-full h-full"
                target="_blank"
                rel="noopener"
                href="https://www.cgtrader.com/3d-models/various/various-models/etnies-skate-shoes"
              >
                <Image
                  width={512}
                  height={512}
                  src="https://storage.googleapis.com/flolu-website/3d-models/etnies-skate-shoes_thumb.jpg"
                />
              </a>
            </PortfolioCard>

            {/* 18.03.2017 */}
            <YouTubeVideo
              id="VEw0jVt4ivc"
              image="vfx/lost-room-animation_thumb.png"
              label="Lost room animation thumbnail"
            ></YouTubeVideo>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-4xl font-bold sm:text-6xl">2016</h2>
          <div className="grid grid-cols-3 gap-0 sm:gap-2 md:gap-4">
            {/* 26.05.2016 */}
            <YouTubeVideo
              id="FTErQciXgBo"
              image="intros/reazz_thumb.png"
              label="Reazz intro thumbnail"
            ></YouTubeVideo>

            {/* 22.05.2016 */}
            <YouTubeVideo
              id="BVLgVxS8Geg"
              image="intros/lyke_thumb.png"
              label="Lyke intro thumbnail"
            ></YouTubeVideo>

            {/* 27.04.2016 */}
            <YouTubeVideo
              id="x-LIrip4vP0"
              image="vfx/skateboard-render_thumb.png"
              label="Realistic skateboard animation thumbnail"
            ></YouTubeVideo>

            {/* 16.04.2016 */}
            <YouTubeVideo
              id="qdm63x0obGw"
              image="vfx/knives_thumb.png"
              label="Knives animation thumbnail"
            ></YouTubeVideo>

            {/* 20.03.2016 */}
            <YouTubeVideo
              id="7qjBRy4nRuk"
              image="intros/hegeas_thumb.png"
              label="Hegeas intro thumbnail"
            ></YouTubeVideo>

            {/* 14.03.2016 */}
            <YouTubeVideo
              id="o8SU_hDVCpQ"
              image="intros/omega_thumb.png"
              label="Omega intro thumbnail"
            ></YouTubeVideo>

            {/* 14.03.2016 */}
            <YouTubeVideo
              id="O8h74qskcII"
              image="intros/louis_thumb.png"
              label="Louis intro thumbnail"
            ></YouTubeVideo>

            {/* 04.03.2016 */}
            <YouTubeVideo
              id="0wPvaxTE4eU"
              image="intros/jace_thumb.png"
              label="Jace intro thumbnail"
            ></YouTubeVideo>

            {/* 01.02.2016 */}
            <YouTubeVideo
              id="J2OvKK-NKPA"
              image="intros/dahjonas_thumb.png"
              label="Dahjonas intro thumbnail"
            ></YouTubeVideo>

            {/* 24.01.2016 */}
            <YouTubeVideo
              id="xWXS7XItSS4"
              image="intros/agrodunkel-10k_thumb.png"
              label="Agrodunkel 10k giveaway intro thumbnail"
            ></YouTubeVideo>

            {/* 23.01.2016 */}
            <YouTubeVideo
              id="1IbTyT0q1Gc"
              image="intros/flakez_thumb.png"
              label="Flakez intro thumbnail"
            ></YouTubeVideo>

            {/* 22.01.2016 */}
            <YouTubeVideo
              id="5N37RYhlbf8"
              image="intros/vexu_thumb.png"
              label="Vexu intro thumbnail"
            ></YouTubeVideo>

            {/* 18.01.2016 */}
            <YouTubeVideo
              id="SFeeFUjtW_I"
              image="intros/reqen_thumb.png"
              label="Reqen intro thumbnail"
            ></YouTubeVideo>

            {/* 17.01.2016 */}
            <YouTubeVideo
              id="L9Ujye2owGA"
              image="intros/kimo_thumb.png"
              label="Kimo intro thumbnail"
            ></YouTubeVideo>

            {/* 2.01.2016 */}
            <YouTubeVideo
              id="p52sofpC4_I"
              image="intros/imrame_thumb.png"
              label="Imrame intro thumbnail"
            ></YouTubeVideo>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-4xl font-bold sm:text-6xl">2015</h2>
          <div className="grid grid-cols-3 gap-0 sm:gap-2 md:gap-4">
            {/* 31.12.2015 */}
            <YouTubeVideo
              id="LGxMiI0YZWs"
              image="intros/bosnian-turns_thumb.png"
              label="Bosnian turns intro thumbnail"
            ></YouTubeVideo>

            {/* 29.12.2015 */}
            <YouTubeVideo
              id="YLdivX3u3ag"
              image="intros/omri_thumb.png"
              label="Omri intro thumbnail"
            ></YouTubeVideo>

            {/* 26.12.2015 */}
            <YouTubeVideo
              id="Fbccinc99f0"
              image="intros/nico-plays_thumb.png"
              label="Nicoplays intro thumbnail"
            ></YouTubeVideo>

            {/* 23.12.2015 */}
            <YouTubeVideo
              id="ZLFOKLwbFZU"
              image="intros/domix_thumb.png"
              label="Domix intro thumbnail"
            ></YouTubeVideo>

            {/* 12.12.2015 */}
            <YouTubeVideo
              id="Ydms10EglXI"
              image="intros/ozelord_thumb.png"
              label="Ozelord intro thumbnail"
            ></YouTubeVideo>

            {/* 05.12.2015 */}
            <YouTubeVideo
              id="KLV0PF9Kaak"
              image="intros/exa_thumb.png"
              label="Exa intro thumbnail"
            ></YouTubeVideo>

            {/* 21.11.2015 */}
            <YouTubeVideo
              id="x59Inph4quU"
              image="intros/z33rka_thumb.png"
              label="Z33rka intro thumbnail"
            ></YouTubeVideo>

            {/* 08.11.2015 */}
            <YouTubeVideo
              id="Ot7bMNZceL0"
              image="intros/two4you_thumb.png"
              label="Two4You intro thumbnail"
            ></YouTubeVideo>

            {/* 30.10.2015 */}
            <YouTubeVideo
              id="BfHaSZnCdN0"
              image="intros/spectrus_thumb.png"
              label="Spectrus intro thumbnail"
            ></YouTubeVideo>

            {/* 27.10.2015 */}
            <YouTubeVideo
              id="AhyRbOqk-hs"
              image="intros/headpvp_thumb.png"
              label="Headpvp intro thumbnail"
            ></YouTubeVideo>

            {/* 06.09.2015 */}
            <YouTubeVideo
              id="ghAjDC1jX4g"
              image="intros/lizureax_thumb.png"
              label="Lizureax intro thumbnail"
            ></YouTubeVideo>

            {/* 29.07.2015 */}
            <YouTubeVideo
              id="7oVPVnPbeVU"
              image="intros/nur-luis_thumb.png"
              label="Nur Luis intro thumbnail"
            ></YouTubeVideo>

            {/* 29.05.2015 */}
            <YouTubeVideo
              id="S79LoUbRBeA"
              image="intros/paluten_thumb.png"
              label="Paluten intro thumbnail"
            ></YouTubeVideo>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async props => {
  const namespaces = ['header', 'footer', 'portfolio']
  const locale = props.locale || 'en'
  const translations = await serverSideTranslations(locale, namespaces)
  return {props: {...translations, locale}}
}

export default Portfolio
