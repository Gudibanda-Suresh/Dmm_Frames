// Placeholder imagery (Lorem Picsum) — swap `src` with real dmm_frames shoots
// once the client photo library is available. Seeds are kept stable so the
// same placeholder always maps to the same gallery slot.
const img = (seed, w = 800, h = 1000) =>
  `https://picsum.photos/seed/dmm-${seed}/${w}/${h}`

export const categories = ['all', 'portraits', 'nature', 'travel', 'street', 'culture', 'lifestyle']

export const galleryItems = [
  { id: 1, category: 'portraits', src: img('portrait-01', 800, 1000), h: 'tall' },
  { id: 2, category: 'nature', src: img('nature-01', 800, 900), h: 'short' },
  { id: 3, category: 'culture', src: img('culture-01', 800, 1100), h: 'tall' },
  { id: 4, category: 'street', src: img('street-01', 800, 950), h: 'med' },
  { id: 5, category: 'travel', src: img('travel-01', 800, 1000), h: 'tall' },
  { id: 6, category: 'lifestyle', src: img('lifestyle-01', 800, 900), h: 'short' },
  { id: 7, category: 'portraits', src: img('portrait-02', 800, 1050), h: 'med' },
  { id: 8, category: 'culture', src: img('culture-02', 800, 950), h: 'short' },
  { id: 9, category: 'nature', src: img('nature-02', 800, 1100), h: 'tall' },
  { id: 10, category: 'street', src: img('street-02', 800, 1000), h: 'med' },
  { id: 11, category: 'travel', src: img('travel-02', 800, 900), h: 'short' },
  { id: 12, category: 'lifestyle', src: img('lifestyle-02', 800, 1050), h: 'med' },
  { id: 13, category: 'portraits', src: img('portrait-03', 800, 950), h: 'short' },
  { id: 14, category: 'culture', src: img('culture-03', 800, 1100), h: 'tall' },
  { id: 15, category: 'nature', src: img('nature-03', 800, 1000), h: 'med' },
  { id: 16, category: 'street', src: img('street-03', 800, 900), h: 'short' },
  { id: 17, category: 'travel', src: img('travel-03', 800, 1050), h: 'med' },
  { id: 18, category: 'lifestyle', src: img('lifestyle-03', 800, 1100), h: 'tall' },
]
