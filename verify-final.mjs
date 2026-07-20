import { chromium } from 'playwright'

const URL = 'http://localhost:5174/'
const OUT = 'C:\\Users\\SURESH~1\\AppData\\Local\\Temp\\claude\\f--m-Dmm\\c975e873-ee27-4789-9e0b-cbd419d79007\\scratchpad'
const errors = []

const browser = await chromium.launch()

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
page.on('console', (m) => { if (m.type() === 'error') errors.push(`[desktop] ${m.text()}`) })
page.on('pageerror', (e) => errors.push(`[desktop] pageerror: ${e.message}`))
await page.goto(URL, { waitUntil: 'networkidle' })
await page.waitForSelector('text=dmm_frames', { timeout: 15000 })
await page.waitForTimeout(800)
await page.screenshot({ path: `${OUT}\\final-desktop-hero.png`, fullPage: false })
await page.locator('#about').scrollIntoViewIfNeeded()
await page.waitForTimeout(600)
await page.screenshot({ path: `${OUT}\\final-desktop-about.png` })
await page.close()

const mpage = await browser.newPage({ viewport: { width: 390, height: 844 } })
mpage.on('console', (m) => { if (m.type() === 'error') errors.push(`[mobile] ${m.text()}`) })
mpage.on('pageerror', (e) => errors.push(`[mobile] pageerror: ${e.message}`))
await mpage.goto(URL, { waitUntil: 'networkidle' })
await mpage.waitForSelector('text=dmm_frames', { timeout: 15000 })
await mpage.waitForTimeout(800)
await mpage.screenshot({ path: `${OUT}\\final-mobile-hero.png` })
await mpage.close()

await browser.close()
console.log(JSON.stringify({ consoleErrors: errors }, null, 2))
