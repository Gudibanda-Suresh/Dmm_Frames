import { useTranslation } from 'react-i18next'

const LANGS = [
  { code: 'en', label: 'EN' },
  { code: 'te', label: 'తె' },
]

export default function LanguageSwitcher({ className = '', compact = false }) {
  const { i18n } = useTranslation()
  const current = i18n.resolvedLanguage || i18n.language

  return (
    <div
      className={`flex shrink-0 items-center gap-1 rounded-full border border-fg/10 bg-fg/5 p-1 ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => i18n.changeLanguage(code)}
          aria-pressed={current === code}
          className={`rounded-full font-semibold transition-all duration-300 ${
            compact ? 'px-2 py-1 text-[11px]' : 'px-3 py-1.5 text-xs'
          } ${
            current === code
              ? 'bg-silk-ribbon text-ink-950 shadow-glow'
              : 'text-fg/60 hover:text-fg'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
