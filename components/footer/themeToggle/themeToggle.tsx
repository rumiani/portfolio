'use client';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('Mode');

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // avoid hydration mismatch

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={`${theme === 'light' ? "bg-gray-200" : " dark:bg-gray-800"} px-4 py-2 rounded `}
    >
      {theme === 'light' ? `🌙 ${t("dark")}` : `☀️ ${t("light")}`}
    </Button>
  );
}
