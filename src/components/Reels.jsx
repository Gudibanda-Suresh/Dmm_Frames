import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import LazyImage from './ui/LazyImage'
import { reels } from '../data/reels'

export default function Reels() {
  const { t } = useTranslation()
  const [active, setActive] = useState(null)

  return (
    <section id="reels" className="relative scroll-mt-[72px] pt-6 pb-16 sm:pt-8 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('reels.eyebrow')}
          title={t('reels.title')}
          subtitle={t('reels.subtitle')}
        />

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {reels.map((reel, i) => (
            <Reveal key={reel.id} delay={0.08 * i}>
              <button
                type="button"
                onClick={() => setActive(reel)}
                className="group relative block w-full overflow-hidden rounded-3xl border border-fg/10"
              >
                <LazyImage
                  src={reel.poster}
                  alt={reel.title}
                  aspect="aspect-[9/16]"
                  imgClassName="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                    <Play className="ml-0.5 text-white" size={22} fill="currentColor" />
                  </span>
                </div>
                <span className="absolute inset-x-3 bottom-3 text-left text-sm font-medium text-white sm:text-base">
                  {reel.title}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/15 sm:right-8 sm:top-8"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 shadow-glass"
            >
              <video
                src={active.video}
                poster={active.poster}
                controls
                autoPlay
                className="aspect-[9/16] w-full bg-black object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
