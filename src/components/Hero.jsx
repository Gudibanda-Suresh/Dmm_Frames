import { motion } from 'framer-motion'
import { ArrowDown, Camera } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { pickLocalImage } from '../utils/localImage'

// Drop a file named main.jpg (or .png/.jpeg/.webp) into src/assets/hero/
// to replace this full-bleed background — picked up automatically.
const heroModules = import.meta.glob('../assets/hero/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
})
const heroMain = pickLocalImage(heroModules, 'main', 'https://picsum.photos/seed/dmm-hero-main/1600/1000')

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 lg:items-center lg:pb-20"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroMain}
          alt="Golden hour landscape near Dharmavaram, Silk City of Andhra Pradesh"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/50 to-ink-950/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/65 via-ink-950/20 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
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
            className="font-display text-5xl font-semibold leading-[1.05] text-silk-cream sm:text-6xl md:text-7xl"
          >
            {t('hero.title1')}
            <br />
            <span className="text-gradient-silk">{t('hero.title2')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 max-w-lg text-base text-white/70 sm:text-lg"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
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
            className="mt-8 inline-flex items-center gap-2 text-xs font-medium text-white/50"
          >
            <Camera size={14} className="text-silk-gold" />
            {t('hero.shotOn')}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[11px] font-medium uppercase tracking-[0.25em] text-white/50 lg:flex"
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
