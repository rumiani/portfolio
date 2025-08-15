'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3}}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
