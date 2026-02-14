'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  const pathname = usePathname();
  const normalizedPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname;
  const isHome = normalizedPath === '/';
  const isContact = normalizedPath === '/contact';

  return (
    <header className={`site-header ${isHome ? 'header-home' : ''} ${isContact ? 'header-dark' : ''}`}>
      <div className="site-header-inner">
        <Link href="/" className="font-display text-sm tracking-tight sm:text-base">
          © Code by Abin
        </Link>
        <nav className="flex items-center gap-5 sm:gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-sm sm:text-base"
              data-active={normalizedPath === link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
