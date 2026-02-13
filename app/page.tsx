import Link from 'next/link';
import { Reveal } from '@/components/reveal';
import { caseStudies } from '@/lib/case-studies';

export default function HomePage() {
  return (
    <>
      <section className="section container">
        <Reveal>
          <span className="kicker">Portfolio 2026</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="title-lg mt-6 max-w-[12ch]">I build websites that feel sharp, calm, and intentional.</h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="body-md mt-8">
            I am Abin Alias, a frontend-focused developer creating conversion-driven websites with thoughtful
            interaction design.
          </p>
        </Reveal>
      </section>

      <section className="section container">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <h2 className="title-md">Selected Work</h2>
            <Link href="/work" className="nav-link text-sm uppercase tracking-[0.1em]">
              See all
            </Link>
          </div>
        </Reveal>
        <div className="mt-8">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={0.06 * index}>
              <Link href={`/work/${study.slug}`} className="card">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3>{study.title}</h3>
                    <p>{study.summary}</p>
                  </div>
                  <span className="text-sm text-muted">{study.year}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
