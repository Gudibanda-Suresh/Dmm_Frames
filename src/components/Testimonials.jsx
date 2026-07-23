import { useTranslation } from 'react-i18next'
import { Quote, Star } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import { testimonials } from '../data/testimonials'

// Doubled so the track can loop seamlessly: translating exactly -50% lands
// back on an identical copy of the first set, so the wrap is invisible.
const loop = [...testimonials, ...testimonials]

function TestimonialCard({ item }) {
  return (
    <GlassCard className="flex h-full w-[300px] shrink-0 flex-col rounded-3xl p-5 sm:w-[340px] sm:p-6">
      <div className="flex items-start justify-between">
        <Quote className="text-silk-gold/40" size={26} strokeWidth={1.5} />
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, s) => (
            <Star
              key={s}
              size={13}
              className={s < item.rating ? 'fill-silk-gold text-silk-gold' : 'text-fg/15'}
            />
          ))}
        </div>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-fg/70">"{item.quote}"</p>

      <div className="mt-4 flex items-center gap-3 border-t border-fg/10 pt-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-ribbon font-display text-sm font-semibold text-ink-950">
          {item.name.charAt(0)}
        </span>
        <div className="min-w-0">
          <div className="truncate font-display text-sm font-semibold text-fg">{item.name}</div>
          <div className="truncate text-xs text-fg/50">{item.role}</div>
        </div>
      </div>
    </GlassCard>
  )
}

export default function Testimonials() {
  const { t } = useTranslation()

  return (
    <section id="testimonials" className="relative scroll-mt-[72px] pt-4 pb-10 sm:pt-6 sm:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('testimonials.eyebrow')}
          title={t('testimonials.title')}
          subtitle={t('testimonials.subtitle')}
        />
      </div>

      <Reveal>
        <div
          className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        >
          <div className="flex w-max animate-marqueeltr gap-5 hover:[animation-play-state:paused]">
            {loop.map((item, i) => (
              <TestimonialCard key={`${item.name}-${i}`} item={item} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
