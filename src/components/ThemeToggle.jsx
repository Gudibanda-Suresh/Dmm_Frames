import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle({ compact = false }) {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'
  const size = compact ? 'h-8 w-8' : 'h-11 w-11'
  const iconSize = compact ? 14 : 17

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
      className={`flex ${size} shrink-0 items-center justify-center rounded-full border border-fg/10 bg-fg/5 text-fg/70 transition-colors hover:text-silk-gold`}
    >
      {isLight ? <Moon size={iconSize} /> : <Sun size={iconSize} />}
    </button>
  )
}
