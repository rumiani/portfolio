'use client';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { FaSun } from "react-icons/fa6";

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
      title={theme === 'light' ? t('dark') : t("light")}
      className={`${theme === 'light' ? "bg-gray-900 text-white" : " bg-blue-500 text-gray-900"} text-2xl rounded`}
    >
      {theme === 'light' ?
        <FaMoon className='text-white' /> :
        <FaSun className='text-yellow-500' />
      }
    </Button>
  );
}
