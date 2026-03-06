import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SiteMotion } from '@/components/site-motion';

export const metadata: Metadata = {
  title: 'Abin Alias | Portfolio',
  description: 'Designer-developer portfolio focused on clean systems and motion-led experiences.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteMotion />
        <div className="grain" aria-hidden="true" />
        <div className="site-shell">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
