import { useEffect, useState } from 'react'
import { Film, Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import logo from '../assets/logo.jpeg'

const NAV_LINKS = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'pricing', href: '#pricing' },
  { key: 'gallery', href: '#gallery' },
  { key: 'reels', href: '#reels' },
  { key: 'testimonials', href: '#testimonials' },
  { key: 'contact', href: '#contact' },
]

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-8">
        <div
          className={`glass-panel flex items-center justify-between rounded-none px-4 py-2.5 transition-all duration-500 sm:rounded-2xl sm:px-6 ${
            scrolled ? 'shadow-glass' : 'border-fg/5 bg-fg/[0.02] shadow-none'
          }`}
        >
          <a href="#home" className="flex min-w-0 items-center gap-1.5 sm:gap-3">
            <img
              src={logo}
              alt="dmm_frames logo"
              className="h-12 w-12 shrink-0 rounded-lg border border-fg/10 object-cover sm:h-14 sm:w-14"
            />
            <span className="truncate font-display text-sm font-semibold tracking-wide text-fg sm:text-lg lg:text-xl">
              dmm_frames
            </span>
          </a>

          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-fg/70 transition-colors duration-300 hover:text-silk-gold"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <LanguageSwitcher />
            <a href="#contact" className="btn-primary !px-5 !py-2.5 text-xs whitespace-nowrap">
              {t('nav.cta')}
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-1 lg:hidden">
            <a
              href="#reels"
              aria-label="Reels"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-fg/10 bg-fg/5 text-fg/70 transition-colors hover:text-silk-gold"
            >
              <Film size={14} />
            </a>
            <a
              href="#testimonials"
              aria-label="Reviews"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-fg/10 bg-fg/5 text-fg/70 transition-colors hover:text-silk-gold"
            >
              <Heart size={14} />
            </a>
            <ThemeToggle compact />
            <LanguageSwitcher compact />
          </div>
        </div>
      </div>
    </header>
  )
}
