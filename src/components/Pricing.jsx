import { useTranslation } from 'react-i18next'
import { Camera, Instagram, PartyPopper, Youtube } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'

const ICONS = [Instagram, Youtube, Camera]

export default function Pricing() {
  const { t } = useTranslation()
  const items = t('pricing.items', { returnObjects: true })

  return (
    <section id="pricing" className="relative scroll-mt-[72px] pt-4 pb-10 sm:pt-6 sm:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('pricing.eyebrow')}
          title={t('pricing.title')}
          subtitle={t('pricing.subtitle')}
        />

        <Reveal>
          <GlassCard
            hover={false}
            className="mb-10 flex flex-col items-center gap-3 rounded-3xl border-silk-gold/30 p-6 text-center sm:flex-row sm:gap-4 sm:p-7 sm:text-left"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-ribbon shadow-glow">
              <PartyPopper className="text-ink-950" size={22} />
            </span>
            <div>
              <span className="mb-1 inline-block rounded-full bg-silk-gold/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-silk-gold">
                {t('pricing.offerBadge')}
              </span>
              <p className="font-display text-lg font-semibold text-fg sm:text-xl">
                {t('pricing.offerText')}
              </p>
            </div>
          </GlassCard>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <Reveal key={item.name} delay={0.08 * i}>
                <GlassCard className="group flex items-center gap-4 rounded-3xl p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-ribbon shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="text-ink-950" size={20} strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate font-display text-base font-semibold text-fg">
                      {item.name}
                    </h3>
                    <span className="text-xs text-fg/50">{item.unit}</span>
                  </div>
                  <span className="shrink-0 font-display text-2xl font-bold text-silk-gold">
                    {item.price}
                  </span>
                </GlassCard>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-5 space-y-1 text-center">
            <p className="text-xs text-fg/45">{t('pricing.note')}</p>
            <p className="text-xs italic text-fg/35">{t('pricing.terms')}</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
