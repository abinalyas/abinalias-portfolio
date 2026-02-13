import Link from 'next/link';
import Image from 'next/image';
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
            <div className="grid gap-4 sm:grid-cols-[200px_1fr_auto] sm:items-start">
              <Image
                src={study.image}
                alt={study.title}
                width={200}
                height={148}
                className="h-32 w-full rounded-md border border-line object-cover sm:h-[148px] sm:w-[200px]"
              />
              <div className="min-w-0">
                <h2 className="text-2xl font-medium tracking-tight">{study.title}</h2>
                <p>{study.role} · {study.category}</p>
              </div>
              <p className="text-sm text-muted">{study.year}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
