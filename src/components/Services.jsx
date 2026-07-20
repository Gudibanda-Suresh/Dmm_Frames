import { useTranslation } from 'react-i18next'
import { Aperture, Film, Palette, UserRound } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'

const ICONS = [Film, UserRound, Palette, Aperture]

export default function Services() {
  const { t } = useTranslation()
  const items = t('services.items', { returnObjects: true })

  return (
    <section id="services" className="relative scroll-mt-[72px] pt-6 pb-16 sm:pt-8 sm:pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-[400px] -translate-y-1/2 bg-radial-fade" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal key={item.title} delay={0.08 * i}>
                <GlassCard className="group h-full rounded-3xl p-7">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-silk-ribbon shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="text-ink-950" size={24} strokeWidth={2} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-silk-cream">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {item.desc}
                  </p>
                </GlassCard>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
