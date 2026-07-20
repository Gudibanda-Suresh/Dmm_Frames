// Given a Vite import.meta.glob() result (path -> url), finds the entry
// whose filename (without extension) matches `name`, e.g. name="main"
// matches ".../main.jpg", ".../main.png", etc. Falls back if not found.
export function pickLocalImage(modules, name, fallback) {
  const key = Object.keys(modules).find((path) => {
    const filename = path.split('/').pop() ?? ''
    return filename.replace(/\.[^.]+$/, '').toLowerCase() === name.toLowerCase()
  })
  return key ? modules[key] : fallback
}
