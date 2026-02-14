import Link from 'next/link';

export function HomeLightSections() {
  return (
    <section className="section container impact-section" data-page-body>
      <div>
        <h2 className="impact-title">Helping brands thrive in the digital world</h2>
        <p className="impact-copy">
          I design and build digital experiences that combine clarity, performance, and interaction craft.
        </p>
      </div>
      <Link href="/contact" className="impact-pill">
        Let&apos;s talk
      </Link>
    </section>
  );
}

export function HomeCapabilitiesSection() {
  return (
    <section className="section container capabilities-section" data-page-body>
      <p className="cap-intro">I can help you with:</p>
      <div className="cap-grid">
        <div>
          <h3>Design</h3>
          <p>Interface design systems, wireframing, and visual direction for modern products.</p>
        </div>
        <div>
          <h3>Development</h3>
          <p>High-performance frontend development with robust responsive behavior.</p>
        </div>
        <div>
          <h3>The full package</h3>
          <p>End-to-end delivery from concept to launch with cohesive quality control.</p>
        </div>
      </div>
    </section>
  );
}

export function HomeFooterSection() {
  return (
    <section className="contact-dark section" data-page-body>
      <div className="container contact-dark-grid">
        <div>
          <h2>Let&apos;s start a project together</h2>
          <Link href="mailto:hello@abinalias.com" className="contact-dark-mail">
            hello@abinalias.com
          </Link>
        </div>
        <div className="contact-dark-cols">
          <div>
            <h4>Navigation</h4>
            <Link href="/">Home</Link>
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
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
  );
}
