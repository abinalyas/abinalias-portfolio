import Link from 'next/link';
import Image from 'next/image';
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
                <div className="grid gap-4 sm:grid-cols-[180px_1fr_auto] sm:items-start">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={180}
                    height={130}
                    className="h-28 w-full rounded-md border border-line object-cover sm:h-[130px] sm:w-[180px]"
                  />
                  <div className="min-w-0">
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
