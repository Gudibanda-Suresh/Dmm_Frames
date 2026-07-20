import { useState } from 'react'

export default function LazyImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspect = 'aspect-[4/5]',
  ...props
}) {
  const [loaded, setLoaded] = useState(false)
  // 'auto' = don't crop to a fixed ratio; show a placeholder box while
  // loading, then let the image's own natural proportions take over.
  const isAuto = aspect === 'auto'

  return (
    <div
      className={`skeleton overflow-hidden ${
        isAuto ? (loaded ? '' : 'aspect-[4/5]') : aspect
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full transition-all duration-700 ease-out ${
          isAuto ? 'h-auto' : 'h-full object-cover'
        } ${loaded ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-md'} ${imgClassName}`}
        {...props}
      />
    </div>
  )
}
