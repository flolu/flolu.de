import {GetStaticProps} from 'next'
import {useTranslation} from 'next-i18next'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import Image from 'next/image'

import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'
import {PortfolioCard} from '@/components/Portfolio/Card'
import {SketchfabModel} from '@/components/Portfolio/SketchfabModel'
import {UnsplashPhoto} from '@/components/Portfolio/UnsplashPhoto'

export default function Portfolio() {
  const {t} = useTranslation()

  return (
    <div>
      <Header />
      <main className="max-w-6xl px-2 mx-auto space-y-8">
        <div>
          <span className="text-lg font-medium text-100 sm:text-xl">
            {t('portfolio:portfolio')}
          </span>
          <h1 className="text-2xl font-bold sm:text-5xl">
            {t('portfolio:selection_of_my_creations')}
          </h1>
        </div>

        <section className="space-y-2">
          <h2 className="text-4xl font-bold">2021</h2>
          <div className="grid grid-cols-3 gap-0 sm:gap-2 md:gap-4">
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
          <h2 className="text-4xl font-bold">2020</h2>
          <div className="grid grid-cols-3 gap-0 sm:gap-2 md:gap-4">
            <PortfolioCard>
              {/* 28.09.2020 */}
              <SketchfabModel
                id="6VtpT"
                image="3d-models/shells-pack_thumb.png"
                label="Shells 3d models pack"
              />
            </PortfolioCard>
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
          <h2 className="text-4xl font-bold">2019</h2>
          <div className="grid grid-cols-3 gap-0 sm:gap-2 md:gap-4"></div>
        </section>

        <section className="space-y-2">
          <h2 className="text-4xl font-bold">2018</h2>
          <div className="grid grid-cols-3 gap-0 sm:gap-2 md:gap-4">
            <PortfolioCard>
              {/* 17.02.2018 */}
              <SketchfabModel
                id="6Y6L9"
                image="3d-models/realistic-longboard_thumb.jpg"
                label="Realistic skateboard 3d model"
              />
            </PortfolioCard>
          </div>
        </section>

        <section className="space-y-2">
          <h2 className="text-4xl font-bold">2017</h2>
          <div className="grid grid-cols-3 gap-0 sm:gap-2 md:gap-4">
            <PortfolioCard>
              {/* 05.04.2017 */}
              <SketchfabModel
                id="6TXtv"
                image="3d-models/realistic-skateboard_thumb.png"
                label="Realistic skateboard 3d model"
              />
            </PortfolioCard>
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const namespaces = ['header', 'footer', 'portfolio']
  const translations = await serverSideTranslations(locale || 'en', namespaces)
  return {props: {...translations}}
}
