'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="container py-8 sm:py-10">
      <div className="flex items-center justify-between gap-8">
        <Link href="/" className="font-display text-lg tracking-tight">
          ABIN ALIAS
        </Link>
        <nav className="flex items-center gap-5 sm:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-sm sm:text-base"
              data-active={pathname === link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
