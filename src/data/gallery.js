// These 6 are the "starter" categories, shown first when populated. Any
// OTHER folder you create under src/assets/gallery/ becomes its own
// category automatically as soon as it has a photo in it — no code changes
// needed either way. Categories with no photos simply don't appear.
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

const populated = Object.keys(localByCategory)
const orderedDefaults = DEFAULT_CATEGORIES.filter((c) => populated.includes(c))
const extras = populated.filter((c) => !DEFAULT_CATEGORIES.includes(c))

export const categories = ['all', ...orderedDefaults, ...extras]

// Turns a folder name into a display label when there's no translation for
// it, e.g. "street-food" / "street_food" -> "Street Food".
export function categoryLabel(category) {
  return category
    .split(/[-_]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const galleryItems = categories
  .filter((c) => c !== 'all')
  .flatMap((category) =>
    localByCategory[category].map((src, i) => ({
      id: `${category}-${i}`,
      category,
      src,
      // no fixed aspect — real photos render at their natural proportions
    })),
  )
