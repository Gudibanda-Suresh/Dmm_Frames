// Given a Vite import.meta.glob() result (path -> url), returns the Nth
// image found in that folder (alphabetically), regardless of filename.
// Falls back if there aren't enough images.
export function pickNthLocalImage(modules, index, fallback) {
  const keys = Object.keys(modules).sort()
  return keys[index] ? modules[keys[index]] : fallback
}

export function pickFirstLocalImage(modules, fallback) {
  return pickNthLocalImage(modules, 0, fallback)
}
