import { useEffect, useState } from 'react'
import { Briefcase, Film, Home, Images, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const TABS = [
  { key: 'home', href: '#home', icon: Home },
  { key: 'services', href: '#services', icon: Briefcase },
  { key: 'gallery', href: '#gallery', icon: Images },
  { key: 'reels', href: '#reels', icon: Film },
  { key: 'contact', href: '#contact', icon: Mail },
]

export default function MobileTabBar() {
  const { t } = useTranslation()
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = TABS.map((tab) => document.getElementById(tab.key)).filter(Boolean)
    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-fg/10 bg-canvas/85 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-label="Primary"
    >
      <div className="mx-auto flex max-w-md items-stretch justify-around">
        {TABS.map(({ key, href, icon: Icon }) => {
          const isActive = active === key
          return (
            <a
              key={key}
              href={href}
              className="flex flex-1 flex-col items-center gap-1 py-2.5 text-[11px] font-medium transition-colors duration-300"
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                  isActive ? 'bg-gold-ribbon shadow-glow' : ''
                }`}
              >
                <Icon
                  size={18}
                  className={isActive ? 'text-ink-950' : 'text-fg/55'}
                  strokeWidth={isActive ? 2.25 : 2}
                />
              </span>
              <span className={isActive ? 'text-silk-gold' : 'text-fg/45'}>
                {t(`nav.${key}`)}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
