import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { caseStudies, findCaseStudy } from '@/lib/case-studies';

type PageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default function CaseStudyPage({ params }: PageProps) {
  const study = findCaseStudy(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="section container">
      <Link href="/work" className="kicker">
        Back to work
      </Link>
      <h1 className="title-md mt-6">{study.title}</h1>
      <p className="mt-4 text-sm uppercase tracking-[0.08em] text-muted">
        {study.role} · {study.year}
      </p>
      <div className="mt-8">
        <Image
          src={study.image}
          alt={study.title}
          width={1200}
          height={800}
          className="h-auto w-full rounded-lg border border-line object-cover"
        />
      </div>

      <div className="mt-10 grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold">Summary</h2>
            <p className="body-md mt-3">{study.summary}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Challenge</h2>
            <p className="body-md mt-3">{study.challenge}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Solution</h2>
            <p className="body-md mt-3">{study.solution}</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Outcome</h2>
            <p className="body-md mt-3">{study.outcome}</p>
          </section>
        </div>

        <aside className="space-y-6 border-t border-line pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <div>
            <h3 className="text-sm uppercase tracking-[0.08em] text-muted">Stack</h3>
            <ul className="mt-3 space-y-1">
              {study.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <a href={study.archiveUrl} target="_blank" rel="noreferrer" className="nav-link inline-block">
            View archived case study
          </a>
          {study.link ? (
            <a href={study.link} target="_blank" rel="noreferrer" className="nav-link inline-block">
              Visit live project
            </a>
          ) : null}
        </aside>
      </div>
    </article>
  );
}
