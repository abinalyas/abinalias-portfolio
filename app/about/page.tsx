import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <section className="section container about-hero">
        <span className="kicker" data-page-kicker>
          About
        </span>
        <h1 className="about-hero-title" data-page-title>
          Abin Alias
        </h1>
        <p className="about-hero-sub" data-page-body>
          Entrepreneur, Designer and Builder
        </p>
      </section>

      <section className="section container about-profile" data-page-body>
        <Image src="/reference/img/DSC07033-Cut-Color-1080.jpg" alt="Abin Alias" width={760} height={980} className="about-profile-image" />
        <div className="about-profile-meta">
          <h2>Entrepreneur, Designer and Builder</h2>
          <p>
            A product person who always derive projects with the team. Collaborating with designers, managers and
            developers to ensure we all thrive for the same goal with quality.
          </p>
          <p>
            Always a human-centric approach. Building products around users needs is what I do. Mostly you will find
            me being around the users, observing them, learning from them and crafting solutions.
          </p>
          <p>
            I always love to learn. Let it be from a book, blog, videos or the people around me. As a designer, I
            always tend to observe and learn. I believe growth comes with the urge of learning continuously.
          </p>
        </div>
      </section>

      <section className="section container about-quote" data-page-body>
        <h2>Life is more fun with friends</h2>
        <p>
          “I am going to keep having fun every day I have left, because there is no other way of life. You just have
          to decide whether you are a Tigger or an Eeyore.” — Randy Pausch
        </p>
      </section>

      <section className="section container capabilities-section" data-page-body>
        <p className="cap-intro">I can help you with:</p>
        <div className="cap-grid">
          <div>
            <h3>Design</h3>
            <p>Product UX, interfaces, and design systems with clean visual hierarchy.</p>
          </div>
          <div>
            <h3>Development</h3>
            <p>Frontend architecture and implementation with performance-first standards.</p>
          </div>
          <div>
            <h3>The full package</h3>
            <p>From strategy to launch, delivering one cohesive experience end to end.</p>
          </div>
        </div>
      </section>

      <section className="contact-dark section" data-page-body>
        <div className="container contact-dark-grid">
          <div>
            <h2>Let&apos;s start a project together</h2>
            <a href="mailto:hello@abinalias.com" className="contact-dark-mail">
              hello@abinalias.com
            </a>
          </div>
          <div className="contact-dark-cols">
            <div>
              <h4>Navigation</h4>
              <a href="/">Home</a>
              <a href="/work">Work</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>
            </div>
            <div>
              <h4>Socials</h4>
              <a href="https://www.linkedin.com/in/abinalias/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/abin_lissy_alias/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
