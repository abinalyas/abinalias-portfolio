import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies';
import { LandingHero } from '@/components/landing-hero';
import { ProjectCard } from '@/components/project-card';

export default function HomePage() {
  return (
    <>
      <LandingHero />

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
