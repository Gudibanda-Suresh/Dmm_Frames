import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Expand } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import LazyImage from './ui/LazyImage'
import Lightbox from './Lightbox'
import { categories, galleryItems } from '../data/gallery'

const ASPECT_MAP = {
  tall: 'aspect-[3/4]',
  med: 'aspect-[4/5]',
  short: 'aspect-[1/1]',
}

export default function Gallery() {
  const { t } = useTranslation()
  const [active, setActive] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = useMemo(
    () =>
      active === 'all'
        ? galleryItems
        : galleryItems.filter((item) => item.category === active),
    [active],
  )

  return (
    <section id="gallery" className="relative scroll-mt-20 pt-10 pb-16 sm:pt-14 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('gallery.eyebrow')}
          title={t('gallery.title')}
          subtitle={t('gallery.subtitle')}
        />

        <Reveal className="mb-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'border-transparent bg-silk-ribbon text-ink-950 shadow-glow'
                  : 'border-white/10 bg-white/[0.03] text-white/60 hover:border-white/25 hover:text-white'
              }`}
            >
              {t(`gallery.categories.${cat}`)}
            </button>
          ))}
        </Reveal>

        <motion.div
          layout
          className="columns-2 gap-3 sm:gap-4 md:columns-3 [&>*]:mb-3 sm:[&>*]:mb-4"
        >
          {filtered.map((item, i) => (
            <motion.button
              type="button"
              key={item.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              onClick={() => setLightboxIndex(filtered.indexOf(item))}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 text-left"
            >
              <LazyImage
                src={item.src}
                alt={`${item.category} photography by dmm_frames`}
                aspect={item.h ? ASPECT_MAP[item.h] : 'auto'}
                className="rounded-2xl"
                imgClassName="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-ink-950/80 via-ink-950/0 to-ink-950/0 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium capitalize text-white backdrop-blur-md">
                  <Expand size={13} />
                  {t(`gallery.categories.${item.category}`)}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <Lightbox
        items={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  )
}
