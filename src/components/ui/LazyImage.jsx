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

  return (
    <div className={`skeleton overflow-hidden ${aspect} ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full object-cover transition-all duration-700 ease-out ${
          loaded ? 'scale-100 opacity-100 blur-0' : 'scale-105 opacity-0 blur-md'
        } ${imgClassName}`}
        {...props}
      />
    </div>
  )
}
