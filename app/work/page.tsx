import Link from 'next/link';
import { caseStudies } from '@/lib/case-studies';
import { HomeFooterSection } from '@/components/home-sections';

export default function WorkPage() {
  return (
    <>
      <section className="section default-header work-header" data-page-title>
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <h1>
                <span>Creating next level</span>
                <span>digital products</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section work-filters" data-page-body>
        <div className="container">
          <div className="filter-row">
            <div className="toggle-row">
              <button type="button" className="btn btn-normal active">
                <span className="btn-text-inner change">All</span>
              </button>
              <button type="button" className="btn btn-normal">
                <span className="btn-text-inner change">Design</span>
              </button>
              <button type="button" className="btn btn-normal">
                <span className="btn-text-inner change">Development</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap-work" data-page-body>
        <section className="section work-grid small-work-grid">
          <div className="container">
            <div className="grid-sub-title">
              <div className="flex-col">
                <h5>Client</h5>
              </div>
              <div className="flex-col">
                <h5>Location</h5>
              </div>
              <div className="flex-col">
                <h5>Services</h5>
              </div>
              <div className="flex-col">
                <h5>Year</h5>
              </div>
            </div>

            <ul className="work-items">
              {caseStudies.map((study) => (
                <li key={study.slug}>
                  <div className="stripe" />
                  <Link href={`/work/${study.slug}`} className="row">
                    <div className="flex-col">
                      <h4>
                        <span>{study.title}</span>
                      </h4>
                    </div>
                    <div className="flex-col">
                      <p>{study.location}</p>
                    </div>
                    <div className="flex-col">
                      <p>{study.role}</p>
                    </div>
                    <div className="flex-col">
                      <p>{study.year}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>

      <HomeFooterSection />
    </>
  );
}
