'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' }
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showQuickMenu, setShowQuickMenu] = useState(false);
  const trimmed = pathname.replace(/\/+$/, '');
  const segments = trimmed.split('/').filter(Boolean);
  const last = segments[segments.length - 1] ?? '';
  const pageSlug = ['work', 'about', 'contact'].includes(last) ? last : 'home';
  const isHome = pageSlug === 'home';
  const isContact = pageSlug === 'contact';

  useEffect(() => {
    const onScroll = () => {
      setShowQuickMenu(window.scrollY > window.innerHeight * 0.35);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
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
                data-active={pageSlug === link.href.replace('/', '')}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <button
        type="button"
        className={`quick-menu-toggle ${showQuickMenu || menuOpen ? 'is-visible' : ''} ${menuOpen ? 'is-open' : ''}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <span />
        <span />
      </button>

      <div
        className={`quick-menu-backdrop ${menuOpen ? 'is-open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside className={`quick-menu-panel ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="quick-menu-inner">
          <p className="quick-menu-label">Navigation</p>
          <div className="quick-menu-line" />
          <nav className="quick-menu-links">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/work" onClick={() => setMenuOpen(false)}>
              Work
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </nav>

          <div className="quick-menu-socials">
            <p className="quick-menu-label">Socials</p>
            <div className="quick-menu-social-links">
              <a href="https://www.awwwards.com/" target="_blank" rel="noreferrer">
                Awwwards
              </a>
              <a href="https://www.instagram.com/abin_lissy_alias/" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="https://x.com/" target="_blank" rel="noreferrer">
                Twitter
              </a>
              <a href="https://www.linkedin.com/in/abinalias/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
