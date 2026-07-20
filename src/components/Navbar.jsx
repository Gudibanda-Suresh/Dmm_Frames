import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import logo from '../assets/logo.jpeg'

const NAV_LINKS = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'gallery', href: '#gallery' },
  { key: 'reels', href: '#reels' },
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`glass-panel flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-6 ${
            scrolled ? 'shadow-glass' : 'border-white/5 bg-white/[0.02] shadow-none'
          }`}
        >
          <a href="#home" className="flex min-w-0 items-center gap-2 sm:gap-3">
            <img
              src={logo}
              alt="dmm_frames logo"
              className="h-9 w-9 shrink-0 rounded-full border border-white/10 object-cover sm:h-11 sm:w-11"
            />
            <span className="truncate font-display text-base font-semibold tracking-wide text-silk-cream sm:text-lg lg:text-xl">
              dmm_frames
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors duration-300 hover:text-silk-gold"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitcher />
            <a href="#contact" className="btn-primary !px-5 !py-2.5 text-xs">
              {t('nav.cta')}
            </a>
          </div>

          <div className="shrink-0 lg:hidden">
            <LanguageSwitcher compact />
          </div>
        </div>
      </div>
    </header>
  )
}
