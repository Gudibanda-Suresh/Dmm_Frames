import { chromium } from 'playwright'

const URL = 'http://localhost:5174/'
const OUT = 'C:\\Users\\SURESH~1\\AppData\\Local\\Temp\\claude\\f--m-Dmm\\c975e873-ee27-4789-9e0b-cbd419d79007\\scratchpad'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 375, height: 812 } })
await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForSelector('text=dmm_frames', { timeout: 15000 })

const sections = ['home', 'about', 'services', 'gallery', 'reels', 'contact']
for (const id of sections) {
  await page.locator(`#${id}`).scrollIntoViewIfNeeded()
  await page.waitForTimeout(500)
  await page.screenshot({ path: `${OUT}\\mobile-${id}.png`, fullPage: false })
}

// footer
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await page.waitForTimeout(400)
await page.screenshot({ path: `${OUT}\\mobile-footer.png` })

await browser.close()
console.log('done')
