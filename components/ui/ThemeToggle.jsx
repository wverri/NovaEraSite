'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md bg-uo-parchment/10 hover:bg-uo-parchment/20 dark:bg-uo-midnight/10 dark:hover:bg-uo-midnight/20 transition-colors"
      aria-label="Alternar tema"
    >
      {theme === 'dark' ? (
        <FaSun className="h-5 w-5 text-uo-gold" />
      ) : (
        <FaMoon className="h-5 w-5 text-uo-darkwood" />
      )}
    </button>
  );
} 