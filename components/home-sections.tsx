import Link from 'next/link';
import Image from 'next/image';

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
    <section className="contact-dark home-footer section" data-page-body>
      <div className="container home-footer-wrap">
        <div className="home-footer-head">
          <h2>
            <span className="home-footer-line">
              <span className="home-footer-avatar" aria-hidden="true">
                <Image src="/reference/img/DSC07033-Cut-Color-1080.jpg" alt="" width={152} height={152} />
              </span>
              Let&apos;s work
            </span>
            <span>together</span>
          </h2>
          <div className="home-footer-action">
            <span className="home-footer-arrow" aria-hidden="true">
              ↙
            </span>
            <Link href="/contact" className="home-footer-orb" data-magnetic data-strength="100" data-strength-text="50">
              <span data-magnetic-text>Get in touch</span>
            </Link>
          </div>
        </div>
        <div className="home-footer-divider" />
        <div className="home-footer-chips">
          <a href="mailto:hello@abinalias.com" className="home-footer-chip" data-magnetic data-strength="25" data-strength-text="15">
            <span data-magnetic-text>hello@abinalias.com</span>
          </a>
          <a href="tel:+919999900000" className="home-footer-chip" data-magnetic data-strength="25" data-strength-text="15">
            <span data-magnetic-text>+91 99999 00000</span>
          </a>
        </div>
      </div>
    </section>
  );
}
