import WhatsAppIcon from './icons/WhatsAppIcon'
import { SOCIALS } from '../config'

export default function FloatingWhatsApp() {
  return (
    <a
      href={SOCIALS.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-20 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glass transition-transform duration-300 hover:scale-110 sm:right-6 lg:bottom-6"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-75" />
      <WhatsAppIcon className="relative h-5 w-5" />
    </a>
  )
}
