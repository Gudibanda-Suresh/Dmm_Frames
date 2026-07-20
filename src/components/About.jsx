import { useTranslation } from 'react-i18next'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import LazyImage from './ui/LazyImage'
import { pickNthLocalImage } from '../utils/localImage'

// Drop image files into src/assets/about/ — the first one (alphabetically)
// becomes the large photo, the second becomes the small floating one.
const aboutModules = import.meta.glob('../assets/about/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
})
const aboutMain = pickNthLocalImage(aboutModules, 0, 'https://picsum.photos/seed/dmm-about-main/900/1000')
const aboutAccent = pickNthLocalImage(aboutModules, 1, 'https://picsum.photos/seed/dmm-about-accent/500/500')

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="about" className="relative scroll-mt-20 pt-10 pb-16 sm:pt-14 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative">
              <LazyImage
                src={aboutMain}
                alt="Behind the scenes with dmm_frames"
                aspect="auto"
                className="rounded-[2rem] border border-white/10 shadow-glass"
              />
              <GlassCard
                hover={false}
                className="absolute -bottom-8 -right-4 w-44 rounded-2xl p-3 sm:-right-8 sm:w-56"
              >
                <LazyImage
                  src={aboutAccent}
                  alt="Silk weaving detail, Dharmavaram"
                  aspect="auto"
                  className="rounded-xl"
                />
              </GlassCard>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              align="left"
              eyebrow={t('about.eyebrow')}
              title={t('about.title')}
            />
            <div className="-mt-8 space-y-5">
              <Reveal>
                <p className="text-white/65">{t('about.body1')}</p>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="text-white/65">{t('about.body2')}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
