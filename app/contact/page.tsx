export default function ContactPage() {
  return (
    <section className="contact-page" data-page-body>
      <div className="container contact-page-grid">
        <div>
          <p className="contact-page-kicker" data-page-kicker>
            Contact
          </p>
          <h1 className="contact-page-title" data-page-title>
            Let&apos;s start a project together
          </h1>
          <a href="mailto:hello@abinalias.com" className="contact-page-mail">
            hello@abinalias.com
          </a>
        </div>

        <div className="contact-page-cols">
          <div>
            <h4>Contact Details</h4>
            <p>Kerala, India</p>
            <p>Available for freelance and contract work.</p>
          </div>
          <div>
            <h4>Business</h4>
            <p>Project scope and timeline</p>
            <p>Brand, website, product interface</p>
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
      <div className="contact-page-orb" aria-hidden="true">
        Start
      </div>
    </section>
  );
}
