import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Quote, Star } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const { t } = useTranslation()
  const scrollerRef = useRef(null)
  const resumeTimerRef = useRef(null)
  const [paused, setPaused] = useState(false)

  // Auto-advance the mobile carousel; pauses while the user is dragging it
  // and resumes a few seconds after they let go. No-op on desktop, where
  // this same container renders as a static grid (nothing to scroll).
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return undefined

    const id = setInterval(() => {
      if (paused) return
      const card = el.children[0]
      if (!card) return
      const step = card.getBoundingClientRect().width + 16
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: 'smooth' })
    }, 4000)

    return () => clearInterval(id)
  }, [paused])

  useEffect(() => () => window.clearTimeout(resumeTimerRef.current), [])

  const pauseThenResume = () => {
    setPaused(true)
    window.clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = window.setTimeout(() => setPaused(false), 5000)
  }

  return (
    <section id="testimonials" className="relative scroll-mt-[72px] pt-4 pb-10 sm:pt-6 sm:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('testimonials.eyebrow')}
          title={t('testimonials.title')}
          subtitle={t('testimonials.subtitle')}
        />

        <div
          ref={scrollerRef}
          onPointerDown={pauseThenResume}
          onWheel={pauseThenResume}
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((item, i) => (
            <Reveal
              key={item.name}
              delay={0.08 * i}
              className="w-[80%] shrink-0 snap-center sm:w-auto"
            >
              <GlassCard className="flex h-full flex-col rounded-3xl p-5 sm:p-6">
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

                <p className="mt-3 flex-1 text-sm leading-relaxed text-fg/70">
                  "{item.quote}"
                </p>

                <div className="mt-4 flex items-center gap-3 border-t border-fg/10 pt-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-ribbon font-display text-sm font-semibold text-ink-950">
                    {item.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate font-display text-sm font-semibold text-fg">
                      {item.name}
                    </div>
                    <div className="truncate text-xs text-fg/50">{item.role}</div>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-fg/40 sm:hidden">← swipe →</p>
      </div>
    </section>
  )
}
