'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { href: '/', label: 'Home' },
  { href: '/section-a', label: 'Section A' },
  { href: '/section-b', label: 'Section B' },
  { href: '/section-c', label: 'Section C' },
  { href: '/section-d', label: 'Section D' },
];

export default function NavigationTabs() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1.5 text-sm list-none">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        return (
          <li key={tab.href}>
            <Link
              href={tab.href}
              className={
                `px-3 py-1.5 rounded-md transition-colors border border-transparent ${
                  isActive
                    ? 'bg-white text-black'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-white/20'
                }`
              }
            >
              {tab.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
