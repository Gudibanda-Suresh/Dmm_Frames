import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  AlertCircle,
  CheckCircle2,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Send,
  Youtube,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import GlassCard from './ui/GlassCard'

// WhatsApp number is still a placeholder — swap when available.
const SOCIALS = {
  facebook: 'https://www.facebook.com/profile.php?id=61591771426900',
  instagram: 'https://www.instagram.com/dmm_frames?utm_source=qr&igsh=a3FzN3doejFrM3g5',
  youtube: 'https://www.youtube.com/@dmm_frames',
  whatsapp: 'https://wa.me/919000000000',
  email: 'dmmframes@gmail.com',
}

const WEB3FORMS_ACCESS_KEY = '37559591-ed93-4cd0-9ae5-0f4b3a6723ed'

const MAP_EMBED_SRC =
  'https://www.google.com/maps?q=Dharmavaram,Andhra+Pradesh,India&output=embed'

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.51 3.63 1.4 5.14L2 22l5.09-1.5a9.85 9.85 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.92C21.95 6.45 17.5 2 12.04 2zm0 18.05c-1.65 0-3.19-.46-4.5-1.26l-.32-.19-3.02.89.9-2.95-.21-.31a8.05 8.05 0 0 1-1.26-4.32c0-4.46 3.63-8.09 8.11-8.09 4.47 0 8.1 3.63 8.1 8.09 0 4.47-3.63 8.14-8.1 8.14z" />
    </svg>
  )
}

export default function Contact() {
  const { t } = useTranslation()
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
    'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-silk-gold/60 focus:bg-white/[0.06]'

  return (
    <section id="contact" className="relative scroll-mt-[72px] pt-6 pb-16 sm:pt-8 sm:pb-20">
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
                  <p className="max-w-xs text-white/70">{t('contact.form.success')}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/50">
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
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/50">
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
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-white/50">
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
                    <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
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
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-silk-ribbon">
                      <MapPin size={18} className="text-ink-950" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-white/45">
                        {t('contact.info.location')}
                      </div>
                      <div className="text-sm text-white/80">
                        {t('contact.info.locationValue')}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-silk-ribbon">
                      <Mail size={18} className="text-ink-950" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-wide text-white/45">
                        {t('contact.info.reach')}
                      </div>
                      <a
                        href={`mailto:${SOCIALS.email}`}
                        className="text-sm text-white/80 hover:text-silk-gold"
                      >
                        {SOCIALS.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3 border-t border-white/10 pt-6">
                  <a
                    href={SOCIALS.facebook}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-silk-gold/50 hover:text-silk-gold"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href={SOCIALS.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-silk-gold/50 hover:text-silk-gold"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={SOCIALS.youtube}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-silk-gold/50 hover:text-silk-gold"
                  >
                    <Youtube size={18} />
                  </a>
                  <a
                    href={SOCIALS.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-colors hover:border-silk-gold/50 hover:text-silk-gold"
                  >
                    <WhatsAppIcon className="h-[18px] w-[18px]" />
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
                  className="h-full min-h-[200px] w-full rounded-2xl border-0 grayscale invert-[0.92] contrast-[1.1]"
                />
              </GlassCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
