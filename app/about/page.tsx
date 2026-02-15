import Image from 'next/image';
import { HomeFooterSection } from '@/components/home-sections';

export default function AboutPage() {
  return (
    <>
      <section className="section default-header about-header" data-page-title>
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <h1>
                <span>Helping brands thrive</span>
                <span>in the digital world</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section no-padding line-globe" data-page-body>
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <div className="stripe" />
              <div className="digital-ball" aria-hidden="true">
                <div className="globe-wrap">
                  <span className="circle" />
                  <span className="circle" />
                  <span className="circle" />
                  <span className="circle-hor" />
                  <span className="circle-hor-middle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-image" data-page-body>
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <div className="arrow">↘</div>
              <p>
                I help companies from all over the world with tailor-made solutions. With each project, I push my
                work to new horizons, always putting quality first.
              </p>
              <p>
                <span className="about-fade">Always exploring...</span>
              </p>
            </div>
            <div className="flex-col">
              <div className="single-about-image">
                <Image
                  src="/reference/img/DSC07033-Cut-Color-1080.jpg"
                  alt="Abin Alias portrait"
                  width={860}
                  height={1080}
                  className="about-main-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-services" data-page-body>
        <div className="container">
          <div className="row">
            <div className="flex-col">
              <h2>I can help you with ...</h2>
            </div>
          </div>
          <div className="row">
            <div className="flex-col">
              <h5>01</h5>
              <div className="stripe" />
              <h4>Design</h4>
              <p>
                Product and interface design systems focused on user behavior, clarity, and visual consistency across
                the full journey.
              </p>
            </div>
            <div className="flex-col">
              <h5>02</h5>
              <div className="stripe" />
              <h4>Development</h4>
              <p>
                Performance-first frontend development with clean architecture, smooth interactions, and robust
                responsive behavior.
              </p>
            </div>
            <div className="flex-col">
              <h5>03</h5>
              <div className="stripe" />
              <h4>The full package</h4>
              <p>
                End-to-end collaboration from concept to launch, combining strategy, design, and implementation in one
                cohesive workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section about-awwwards" data-page-body>
        <div className="container medium">
          <div className="row">
            <div className="flex-col">
              <div className="single-image">
                <Image
                  src="/reference/img/DSC07033-Cut-Color-1080.jpg"
                  alt="Abin Alias profile"
                  width={560}
                  height={720}
                  className="about-awards-image"
                />
              </div>
            </div>
            <div className="flex-col">
              <h2>Awwwards judge &apos;19-25</h2>
              <p>
                I am a proud member of the Awwwards International Jury, where I evaluate outstanding websites with a
                strong focus on interaction quality and frontend craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomeFooterSection />
    </>
  );
}
