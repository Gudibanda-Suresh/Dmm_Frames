import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Volume2, VolumeX, X } from 'lucide-react'

// Drop a video file into src/assets/intro/ — the first one found plays
// automatically as a one-time splash when the site loads.
const introModules = import.meta.glob('../assets/intro/*.{mp4,webm,mov,MP4,WEBM,MOV}', {
  eager: true,
  import: 'default',
})
const introVideo = Object.values(introModules)[0]

const SESSION_KEY = 'dmm_frames_intro_seen'

export default function IntroSplash() {
  const videoRef = useRef(null)
  const [visible, setVisible] = useState(
    () => Boolean(introVideo) && !sessionStorage.getItem(SESSION_KEY),
  )
  const [muted, setMuted] = useState(true)

  const dismiss = () => {
    sessionStorage.setItem(SESSION_KEY, '1')
    setVisible(false)
  }

  useEffect(() => {
    if (!visible) return undefined
    document.body.style.overflow = 'hidden'
    // Safety net in case the video fails to load/play — never trap the user.
    const fallback = setTimeout(dismiss, 8000)
    return () => {
      document.body.style.overflow = ''
      clearTimeout(fallback)
    }
  }, [visible])

  if (!introVideo) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink-950"
        >
          <video
            ref={videoRef}
            src={introVideo}
            autoPlay
            muted={muted}
            playsInline
            onEnded={dismiss}
            onError={dismiss}
            className="h-full w-full object-contain sm:h-auto sm:max-h-[80vh] sm:w-auto sm:max-w-[90vw]"
          />

          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? 'Unmute' : 'Mute'}
            className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/15"
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          <button
            type="button"
            onClick={dismiss}
            aria-label="Skip intro"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/15"
          >
            <X size={18} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
