import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <section className="section container about-hero">
        <span className="kicker" data-page-kicker>
          About
        </span>
        <h1 className="about-hero-title" data-page-title>
          Helping brands thrive in the digital world through design, code, and interaction.
        </h1>
      </section>

      <section className="section container about-profile" data-page-body>
        <Image src="/hero/abin-portrait.png" alt="Abin Alias" width={760} height={980} className="about-profile-image" />
        <div className="about-profile-meta">
          <h2>Awwwards Jury 19-25</h2>
          <p>
            I’m a designer-developer focused on digital products that feel clear, intentional, and strong in motion.
          </p>
        </div>
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
