import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'

function pngSize(path) {
  const buf = readFileSync(path)
  const width = buf.readUInt32BE(16)
  const height = buf.readUInt32BE(20)
  return { width, height }
}

for (const dir of ['src/assets/hero', 'src/assets/about']) {
  for (const f of readdirSync(dir)) {
    if (!f.toLowerCase().endsWith('.png')) continue
    const p = join(dir, f)
    const { width, height } = pngSize(p)
    console.log(`${p}: ${width}x${height} (ratio ${(width/height).toFixed(2)})`)
  }
}
