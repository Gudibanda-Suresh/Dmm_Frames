// Placeholder reel sources (public domain sample clips) — replace `video`
// with real dmm_frames cinematic reels when available.
const poster = (seed) => `https://picsum.photos/seed/dmm-reel-${seed}/700/1000`

export const reels = [
  {
    id: 1,
    title: 'Silk Looms of Dharmavaram',
    poster: poster('01'),
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  },
  {
    id: 2,
    title: 'Golden Hour Portraits',
    poster: poster('02'),
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  },
  {
    id: 3,
    title: 'Streets of the Silk City',
    poster: poster('03'),
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  },
  {
    id: 4,
    title: 'A Wedding, Cinematically',
    poster: poster('04'),
    video:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  },
]
