import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  id,
}) {
  const alignClass =
    align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <div id={id} className={`flex flex-col ${alignClass} mb-10 md:mb-14`}>
      <Reveal>
        <span className="mb-4 inline-block rounded-full border border-fg/10 bg-fg/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-silk-gold">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-3xl font-semibold leading-tight text-fg sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className="mt-5 max-w-xl text-base text-fg/60 sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
