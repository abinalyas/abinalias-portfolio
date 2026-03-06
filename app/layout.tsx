import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'FrameRent | Photographer Rental Service',
  description: 'Book vetted photographers for events, portraits, products, and brand shoots in minutes.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <header className="topbar">
            <div className="container topbar-inner">
              <Link href="/" className="brand">
                FrameRent
              </Link>
              <nav className="top-nav" aria-label="Primary">
                <Link href="/">Home</Link>
                <Link href="/photographers">Photographers</Link>
                <Link href="/book">Book</Link>
                <Link href="/admin/bookings">Admin</Link>
              </nav>
              <Link className="top-cta" href="/book">
                Get a Quote
              </Link>
            </div>
          </header>
          <main>{children}</main>
          <footer className="site-footer">
            <div className="container footer-inner">
              <p>FrameRent</p>
              <p>Fast booking. Trusted photographers. Crisp delivery.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
