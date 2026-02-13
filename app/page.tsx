import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies';
import { ProjectCard } from '@/components/project-card';

export default function HomePage() {
  return (
    <>
      <section className="section container">
        <span className="kicker" data-page-kicker>
          Portfolio 2026
        </span>
        <h1 className="title-lg mt-6 max-w-[12ch]" data-page-title>
          I build websites that feel sharp, calm, and intentional.
        </h1>
        <p className="body-md mt-8" data-page-body>
          I am Abin Alias, a frontend-focused developer creating conversion-driven websites with thoughtful
          interaction design.
        </p>
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
