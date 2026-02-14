import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies';
import { LandingHero } from '@/components/landing-hero';
import { ProjectCard } from '@/components/project-card';

export default function HomePage() {
  return (
    <>
      <LandingHero />

      <section className="manifesto-section section">
        <div className="container manifesto-grid">
          <div>
            <h2 className="manifesto-title" data-page-title>
              Helping brands to stand out in the digital era. Together we set a bold new standard with no
              over-complication, always focused on craft and clarity.
            </h2>
            <p className="manifesto-kicker" data-page-body>
              Recent work
            </p>
          </div>

          <aside className="manifesto-aside" data-page-body>
            <p>
              The combination of design, code, and interaction thinking positions your work in a unique place in the
              digital world.
            </p>
            <Link href="/about" className="manifesto-about">
              About me
            </Link>
          </aside>
        </div>
      </section>

      <section className="section container">
        <div className="flex items-end justify-between gap-4" data-page-body>
          <h2 className="title-md">Selected Work</h2>
          <Link href="/work" className="nav-link text-sm uppercase tracking-[0.1em]">
            See all
          </Link>
        </div>
        <div className="mt-8">
          {caseStudies.map((study) => (
            <ProjectCard key={study.slug} study={study} layout="home" />
          ))}
        </div>
      </section>
    </>
  );
}
