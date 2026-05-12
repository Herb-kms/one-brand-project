'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      className="flex-1 overflow-y-auto h-screen"
    >
      {children}
    </motion.div>
  );
}
