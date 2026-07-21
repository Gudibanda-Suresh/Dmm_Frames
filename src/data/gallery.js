// These 6 are the "starter" categories — they show placeholder photos until
// you add real ones. Any OTHER folder you create under src/assets/gallery/
// becomes its own category automatically as soon as it has a photo in it —
// no code changes needed either way.
const DEFAULT_CATEGORIES = ['portraits', 'nature', 'travel', 'street', 'culture', 'lifestyle']

const localModules = import.meta.glob(
  '../assets/gallery/*/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP}',
  { eager: true, import: 'default' },
)

const localByCategory = {}
for (const [path, src] of Object.entries(localModules)) {
  const match = path.match(/\/gallery\/([^/]+)\/[^/]+$/)
  const category = match?.[1]?.toLowerCase()
  if (!category) continue
  ;(localByCategory[category] ??= []).push(src)
}

const discovered = Object.keys(localByCategory).filter(
  (c) => !DEFAULT_CATEGORIES.includes(c),
)

export const categories = ['all', ...DEFAULT_CATEGORIES, ...discovered]

// Turns a folder name into a display label when there's no translation for
// it, e.g. "street-food" / "street_food" -> "Street Food".
export function categoryLabel(category) {
  return category
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// Placeholder imagery (Lorem Picsum) used only for the starter categories
// above when they have no local photos yet. Seeds are kept stable so the
// same placeholder always maps to the same gallery slot.
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
    if (PLACEHOLDERS_BY_CATEGORY[category]) {
      return PLACEHOLDERS_BY_CATEGORY[category].map((item, i) => ({
        id: `${category}-placeholder-${i}`,
        category,
        ...item,
      }))
    }
    return []
  })
