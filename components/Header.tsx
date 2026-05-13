'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Make header text white on home page when at top (over the dark image), otherwise black
  const isHome = pathname === '/';
  const isDarkText = !isHome || scrolled;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      } ${isDarkText ? 'text-black' : 'text-white'}`}
    >
      <Link href="/" className="flex items-center">
        <img src="/brand-logo.png" alt="ONE Brand Logo" className="h-8 md:h-10 w-auto object-contain transition-transform hover:scale-105" />
      </Link>

      <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-[0.1em] uppercase">
        <Link href="/philosophy" className={`hover:opacity-70 transition-opacity ${pathname === '/philosophy' ? 'underline underline-offset-4' : ''}`}>Philosophy</Link>
        <Link href="/system" className={`hover:opacity-70 transition-opacity ${pathname === '/system' ? 'underline underline-offset-4' : ''}`}>System</Link>
        <Link href="/magazine" className={`hover:opacity-70 transition-opacity ${pathname === '/magazine' ? 'underline underline-offset-4' : ''}`}>Magazine</Link>
        <Link href="/shop" className={`hover:opacity-70 transition-opacity ${pathname === '/shop' ? 'underline underline-offset-4' : ''}`}>Shop</Link>
      </nav>
      
      {/* Mobile Menu Button Placeholder */}
      <button className="md:hidden">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>
      </button>
    </header>
  );
}
