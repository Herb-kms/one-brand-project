'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  ['/', 'Home'],
  ['/philosophy', 'Brand Philosophy'],
  ['/about', 'About One'],
  ['/system', 'Product System'],
  ['/routine', 'Daily Routine'],
  ['/film', 'Brand Film'],
  ['/experience', 'Experience'],
  ['/contact', 'Contact'],
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#f7f5f1]/90 backdrop-blur-xl border-b border-black/5 px-6 py-5 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">ONE</h1>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-11 h-11 rounded-full border border-black/10 bg-white flex items-center justify-center"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed inset-0 z-40 bg-[#f7f5f1] pt-24 px-8"
          >
            <nav className="space-y-8 mt-10">
              {menuItems.map(([href, title]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-2xl font-medium ${
                    pathname === href ? 'text-black' : 'text-gray-400'
                  }`}
                >
                  {title}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
