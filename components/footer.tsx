'use client';

import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  if (pathname === '/') {
    return null;
  }

  return (
    <footer className="container border-t border-line py-8 text-sm text-muted">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Abin Alias</p>
        <p>Built with Next.js and deployed on GitHub Pages.</p>
      </div>
    </footer>
  );
}
