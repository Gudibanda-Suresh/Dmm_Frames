import { useTranslation } from 'react-i18next'
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

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-fg/10 bg-canvas-raised/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center gap-3">
              <img
                src={logo}
                alt="dmm_frames logo"
                className="h-11 w-11 rounded-lg border border-fg/10 object-cover"
              />
              <span className="font-display text-lg font-semibold text-fg">
                dmm_frames
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-fg/50">{t('footer.tagline')}</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm text-fg/55 transition-colors hover:text-silk-gold"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-fg/10 pt-6 text-xs text-fg/40 md:flex-row">
          <span>
            © {year} dmm_frames. {t('footer.rights')}
          </span>
          <span>{t('footer.madeWith')}</span>
        </div>
      </div>
    </footer>
  )
}
