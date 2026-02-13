import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies';

export default function WorkPage() {
  return (
    <section className="section container">
      <span className="kicker">Work</span>
      <h1 className="title-md mt-6">Three case studies with measurable outcomes.</h1>
      <p className="body-md mt-5">These are the launch-ready examples for your version one portfolio.</p>

      <div className="mt-12">
        {caseStudies.map((study) => (
          <Link href={`/work/${study.slug}`} key={study.slug} className="card">
            <div className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <h2 className="text-2xl font-medium tracking-tight">{study.title}</h2>
                <p>{study.role}</p>
              </div>
              <p className="text-sm text-muted">{study.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
