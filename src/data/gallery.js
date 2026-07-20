export const categories = ['all', 'portraits', 'nature', 'travel', 'street', 'culture', 'lifestyle']

// Drop your own photos into src/assets/gallery/<category>/ (category folder
// name must match one of the categories above, e.g. src/assets/gallery/portraits/anything.jpg)
// — they're picked up automatically, no code changes needed. Any category
// left empty falls back to a placeholder image so the layout stays intact.
const localModules = import.meta.glob(
  '../assets/gallery/*/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' },
)

const localByCategory = {}
for (const [path, src] of Object.entries(localModules)) {
  const match = path.match(/\/gallery\/([^/]+)\/[^/]+$/)
  const category = match?.[1]?.toLowerCase()
  if (!category || !categories.includes(category)) continue
  ;(localByCategory[category] ??= []).push(src)
}

// Placeholder imagery (Lorem Picsum) used only for categories with no local
// photos yet. Seeds are kept stable so the same placeholder always maps to
// the same gallery slot.
const placeholderImg = (seed, w = 800, h = 1000) =>
  `https://picsum.photos/seed/dmm-${seed}/${w}/${h}`

const PLACEHOLDERS_BY_CATEGORY = {
  portraits: [
    { src: placeholderImg('portrait-01', 800, 1000), h: 'tall' },
    { src: placeholderImg('portrait-02', 800, 1050), h: 'med' },
    { src: placeholderImg('portrait-03', 800, 950), h: 'short' },
  ],
  nature: [
    { src: placeholderImg('nature-01', 800, 900), h: 'short' },
    { src: placeholderImg('nature-02', 800, 1100), h: 'tall' },
    { src: placeholderImg('nature-03', 800, 1000), h: 'med' },
  ],
  culture: [
    { src: placeholderImg('culture-01', 800, 1100), h: 'tall' },
    { src: placeholderImg('culture-02', 800, 950), h: 'short' },
    { src: placeholderImg('culture-03', 800, 1100), h: 'tall' },
  ],
  street: [
    { src: placeholderImg('street-01', 800, 950), h: 'med' },
    { src: placeholderImg('street-02', 800, 1000), h: 'med' },
    { src: placeholderImg('street-03', 800, 900), h: 'short' },
  ],
  travel: [
    { src: placeholderImg('travel-01', 800, 1000), h: 'tall' },
    { src: placeholderImg('travel-02', 800, 900), h: 'short' },
    { src: placeholderImg('travel-03', 800, 1050), h: 'med' },
  ],
  lifestyle: [
    { src: placeholderImg('lifestyle-01', 800, 900), h: 'short' },
    { src: placeholderImg('lifestyle-02', 800, 1050), h: 'med' },
    { src: placeholderImg('lifestyle-03', 800, 1100), h: 'tall' },
  ],
}

export const galleryItems = categories
  .filter((c) => c !== 'all')
  .flatMap((category) => {
    const localSrcs = localByCategory[category]
    if (localSrcs?.length) {
      return localSrcs.map((src, i) => ({
        id: `${category}-local-${i}`,
        category,
        src,
        // no fixed aspect — real photos render at their natural proportions
      }))
    }
    return PLACEHOLDERS_BY_CATEGORY[category].map((item, i) => ({
      id: `${category}-placeholder-${i}`,
      category,
      ...item,
    }))
  })
