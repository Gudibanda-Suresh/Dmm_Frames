import { useTranslation } from 'react-i18next'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import logo from '../assets/logo.jpeg'

const NAV_LINKS = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'gallery', href: '#gallery' },
  { key: 'reels', href: '#reels' },
  { key: 'contact', href: '#contact' },
]

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-ink-900/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center gap-3">
              <img
                src={logo}
                alt="dmm_frames logo"
                className="h-11 w-11 rounded-lg border border-white/10 object-cover"
              />
              <span className="font-display text-lg font-semibold text-silk-cream">
                dmm_frames
              </span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-white/50">{t('footer.tagline')}</p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61591771426900"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:text-silk-gold lg:h-12 lg:w-12"
              >
                <Facebook className="h-4 w-4 lg:h-5 lg:w-5" />
              </a>
              <a
                href="https://www.instagram.com/dmm_frames?utm_source=qr&igsh=a3FzN3doejFrM3g5"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:text-silk-gold lg:h-12 lg:w-12"
              >
                <Instagram className="h-4 w-4 lg:h-5 lg:w-5" />
              </a>
              <a
                href="https://www.youtube.com/@dmm_frames"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:text-silk-gold lg:h-12 lg:w-12"
              >
                <Youtube className="h-4 w-4 lg:h-5 lg:w-5" />
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm text-white/55 transition-colors hover:text-silk-gold"
              >
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 md:flex-row">
          <span>
            © {year} dmm_frames. {t('footer.rights')}
          </span>
          <span>{t('footer.madeWith')}</span>
        </div>
      </div>
    </footer>
  )
}
