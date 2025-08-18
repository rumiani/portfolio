'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // avoid hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={`${theme === 'light' ? "bg-gray-200" : " dark:bg-gray-800"} px-4 py-2 rounded `}
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
