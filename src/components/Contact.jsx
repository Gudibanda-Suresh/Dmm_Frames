import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  AlertCircle,
  CheckCircle2,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Play,
  Send,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'
import WhatsAppIcon from './icons/WhatsAppIcon'
import TelegramIcon from './icons/TelegramIcon'
import { useTheme } from '../hooks/useTheme'
import { SOCIALS } from '../config'

const WEB3FORMS_ACCESS_KEY = '37559591-ed93-4cd0-9ae5-0f4b3a6723ed'

const MAP_EMBED_SRC =
  'https://www.google.com/maps?q=Dharmavaram,Andhra+Pradesh,India&output=embed'

export default function Contact() {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const formData = new FormData(e.target)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', `New inquiry from ${form.name} — dmm_frames`)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full rounded-xl border border-fg/10 bg-fg/[0.04] px-4 py-3 text-sm text-fg placeholder:text-fg/35 outline-none transition-colors focus:border-silk-gold/60 focus:bg-fg/[0.06]'

  return (
    <section id="contact" className="relative scroll-mt-[72px] pt-4 pb-10 sm:pt-6 sm:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t('contact.eyebrow')}
          title={t('contact.title')}
          subtitle={t('contact.subtitle')}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          <Reveal>
            <GlassCard hover={false} className="rounded-3xl p-6 sm:p-8">
              {submitted ? (
                <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-4 text-center">
                  <CheckCircle2 className="text-silk-gold" size={44} />
                  <p className="max-w-xs text-fg/70">{t('contact.form.success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-fg/50">
                      {t('contact.form.name')}
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder={t('contact.form.name')}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-fg/50">
                      {t('contact.form.email')}
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder={t('contact.form.email')}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-fg/50">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      required
                      rows={4}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder={t('contact.form.message')}
                    />
                  </div>
                  {error && (
                    <div
                      className={`flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm ${
                        theme === 'dark' ? 'text-red-300' : 'text-red-600'
                      }`}
                    >
                      <AlertCircle size={16} className="shrink-0" />
                      {t('contact.form.error')}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    <Send size={16} />
                    {submitting ? t('contact.form.sending') : t('contact.form.send')}
                  </button>
                </form>
              )}
            </GlassCard>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <GlassCard hover={false} className="rounded-3xl p-6 sm:p-8">
                <div className="flex flex-wrap gap-4 sm:gap-6">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-ribbon">
                      <MapPin size={18} className="text-ink-950" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-fg/45">
                        {t('contact.info.location')}
                      </div>
                      <div className="text-sm text-fg/80">
                        {t('contact.info.locationValue')}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-ribbon">
                      <Mail size={18} className="text-ink-950" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-fg/45">
                        {t('contact.info.reach')}
                      </div>
                      <a
                        href={`mailto:${SOCIALS.email}`}
                        className="text-sm text-fg/80 hover:text-silk-gold"
                      >
                        {SOCIALS.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-2.5 border-t border-fg/10 pt-6">
                  <a
                    href={`mailto:${SOCIALS.email}`}
                    aria-label="Email"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EA4335] text-white shadow-sm transition-transform duration-300 hover:scale-110"
                  >
                    <Mail size={15} />
                  </a>
                  <a
                    href={SOCIALS.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm transition-transform duration-300 hover:scale-110"
                  >
                    <Facebook size={15} fill="currentColor" strokeWidth={0} />
                  </a>
                  <a
                    href={SOCIALS.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white shadow-sm transition-transform duration-300 hover:scale-110"
                  >
                    <Instagram size={15} />
                  </a>
                  <a
                    href={SOCIALS.youtube}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-sm transition-transform duration-300 hover:scale-110"
                  >
                    <Play size={14} fill="currentColor" strokeWidth={0} className="ml-0.5" />
                  </a>
                  <a
                    href={SOCIALS.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-transform duration-300 hover:scale-110"
                  >
                    <WhatsAppIcon className="h-[15px] w-[15px]" />
                  </a>
                  <a
                    href={SOCIALS.telegram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Telegram"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#26A5E4] text-white shadow-sm transition-transform duration-300 hover:scale-110"
                  >
                    <TelegramIcon className="h-[15px] w-[15px]" />
                  </a>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.18} className="flex-1">
              <GlassCard hover={false} className="h-full min-h-[220px] overflow-hidden rounded-3xl p-2">
                <iframe
                  title="dmm_frames location — Dharmavaram, Andhra Pradesh"
                  src={MAP_EMBED_SRC}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={`h-full min-h-[200px] w-full rounded-2xl border-0 ${
                    theme === 'dark' ? 'grayscale invert-[0.92] contrast-[1.1]' : ''
                  }`}
                />
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
