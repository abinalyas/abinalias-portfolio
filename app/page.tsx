import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies';
import { LandingHero } from '@/components/landing-hero';
import { WorkHoverList } from '@/components/work-hover-list';
import { HomeFooterSection } from '@/components/home-sections';
import { GallerySection } from '@/components/gallery-section';

export default function HomePage() {
  return (
    <>
      <LandingHero />

      <div className="home-light-surface">
        <section className="manifesto-section section">
          <div className="container manifesto-grid">
            <div>
              <h2 className="manifesto-title" data-page-title>
                Helping brands to stand out in the digital era. Together we set a bold new standard with no
                over-complication, always focused on craft and clarity.
              </h2>
            </div>

            <aside className="manifesto-aside" data-page-body>
              <p>
                The combination of design, code, and interaction thinking positions your work in a unique place in
                the digital world.
              </p>
              <Link href="/about" className="manifesto-about" data-magnetic data-strength="50" data-strength-text="25">
                <span data-magnetic-text>About me</span>
              </Link>
            </aside>
          </div>
        </section>

        <WorkHoverList studies={caseStudies} label="Recent work" showHeading={false} showMoreButton />
        <GallerySection />
      </div>

      <HomeFooterSection />
    </>
  );
}
