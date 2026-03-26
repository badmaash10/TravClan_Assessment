import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full glass border border-border-subtle hover:bg-surface-highest transition-colors cursor-pointer flex items-center justify-center shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun size={18} className="text-yellow-500" />
      ) : (
        <Moon size={18} className="text-ocean-blue" />
      )}
    </button>
  );
}
