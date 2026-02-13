import { caseStudies } from '@/lib/case-studies';
import { ProjectCard } from '@/components/project-card';

export default function WorkPage() {
  return (
    <section className="section container">
      <span className="kicker" data-page-kicker>
        Work
      </span>
      <h1 className="title-md mt-6" data-page-title>
        Three case studies with measurable outcomes.
      </h1>
      <p className="body-md mt-5" data-page-body>
        These are the launch-ready examples for your version one portfolio.
      </p>

      <div className="mt-12">
        {caseStudies.map((study) => (
          <ProjectCard key={study.slug} study={study} layout="work" />
        ))}
      </div>
    </section>
  );
}
