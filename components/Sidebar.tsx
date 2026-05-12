'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[260px] hidden lg:flex h-screen sticky top-0 bg-[#f7f5f1]/90 backdrop-blur-xl border-r border-black/5 px-8 py-10 flex-col justify-between z-50">
      <div>
        <div>
          <h1 className="text-3xl font-semibold">ONE</h1>
          <p className="text-sm text-gray-500 mt-2">
            3 Moments.
            <br />
            1 Completion.
          </p>
        </div>

        <nav className="mt-20 space-y-6">
          {menuItems.map(([href, title]) => (
            <Link
              key={href}
              href={href}
              className={`block text-left text-[15px] transition duration-300 ${
                pathname === href
                  ? 'text-black font-medium'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {title}
            </Link>
          ))}
        </nav>
      </div>

      <div className="text-xs text-gray-400 leading-relaxed">
        A future nutritional
        <br />
        meal system for modern lifestyles.
      </div>
    </aside>
  );
}
