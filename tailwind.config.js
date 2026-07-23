/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', '"Noto Sans Telugu"', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Static tones — do not flip with theme (used for text sitting on
        // photos/gradients where contrast must stay constant either way).
        ink: {
          950: '#07070a',
          900: '#0b0b0f',
          850: '#111116',
          800: '#17171d',
          700: '#212129',
        },
        silk: {
          blue: '#3E7CB1',
          gold: '#E0A93B',
          crimson: '#C22B45',
          cream: '#F4EFE6',
        },
        // Theme-aware tones — backed by CSS custom properties that flip
        // value in [data-theme="light"] (see src/index.css). Every one
        // supports Tailwind's opacity modifier, e.g. text-fg/60.
        canvas: 'rgb(var(--canvas) / <alpha-value>)',
        'canvas-raised': 'rgb(var(--canvas-raised) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
      },
      backgroundImage: {
        // Used only for the decorative Hero headline text now — buttons,
        // pills, and icon badges use gold-ribbon instead.
        'silk-ribbon':
          'linear-gradient(115deg, #3E7CB1 0%, #E0A93B 45%, #C22B45 100%)',
        'gold-ribbon':
          'linear-gradient(115deg, #F3CC7A 0%, #E0A93B 55%, #B8801F 100%)',
        'radial-fade':
          'radial-gradient(60% 60% at 50% 0%, rgba(62,124,177,0.18) 0%, rgba(7,7,10,0) 70%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'glass-inset': 'inset 0 1px 0 0 rgba(255,255,255,0.08)',
        glow: '0 0 40px -8px rgba(224,169,59,0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-400px 0' },
          '100%': { backgroundPosition: '400px 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marqueeltr: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.6s linear infinite',
        float: 'float 6s ease-in-out infinite',
        marqueeltr: 'marqueeltr 36s linear infinite',
      },
    },
  },
  plugins: [],
}
