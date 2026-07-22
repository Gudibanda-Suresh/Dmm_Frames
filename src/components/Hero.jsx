import { motion } from 'framer-motion'
import { ArrowDown, Camera } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { pickFirstLocalImage } from '../utils/localImage'

// Drop any image file into src/assets/hero/ — the first one (alphabetically)
// is used here automatically, at its own natural size, uncropped.
const heroModules = import.meta.glob('../assets/hero/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
})
const heroMain = pickFirstLocalImage(heroModules, null)

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section id="home" className="relative isolate overflow-hidden pt-24 lg:pt-28">
      <div className="relative min-h-[460px] bg-ink-950 sm:min-h-[520px] lg:min-h-0">
        {heroMain && (
          <img src={heroMain} alt="dmm_frames — Silk City Photography" className="h-auto w-full" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/45 to-ink-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/65 via-ink-950/15 to-transparent" />

        <div className="absolute inset-0 flex items-end pb-8 sm:pb-12 lg:items-center lg:pb-0">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-silk-gold backdrop-blur-md"
              >
                <Camera size={14} />
                {t('hero.eyebrow')}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl font-semibold leading-[1.05] text-silk-cream sm:text-6xl md:text-7xl"
              >
                {t('hero.title1')}
                <br />
                <span className="text-gradient-silk">{t('hero.title2')}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-5 max-w-lg text-sm text-white/70 sm:mt-7 sm:text-base lg:text-lg"
              >
                {t('hero.subtitle')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4"
              >
                <a href="#gallery" className="btn-primary">
                  {t('hero.ctaPrimary')}
                </a>
                <a href="#contact" className="btn-ghost">
                  {t('hero.ctaSecondary')}
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 hidden items-center gap-2 text-xs font-medium text-white/50 sm:mt-8 sm:flex"
              >
                <Camera size={14} className="text-silk-gold" />
                {t('hero.shotOn')}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mx-auto hidden w-fit flex-col items-center gap-2 py-6 text-[11px] font-medium uppercase tracking-[0.25em] text-fg/40 lg:flex"
      >
        {t('hero.scroll')}
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  )
}
