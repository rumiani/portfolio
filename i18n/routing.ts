import { useLanguageStore } from '@/stores/useLanguageStore';
import { defineRouting } from 'next-intl/routing';

const defaultLocale = useLanguageStore.getState().language

export const routing = defineRouting({
  locales: ['en', 'fa'],
  defaultLocale
});