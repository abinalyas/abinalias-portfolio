import Image from 'next/image';

export default function ContactPage() {
  return (
    <section className="contact-page" data-page-body>
      <div className="container contact-page-grid">
        <div className="contact-form-side">
          <div className="contact-hero" data-page-title>
            <h1>
              <span>Let&apos;s start a</span>
              <span>project together</span>
            </h1>
          </div>

          <form className="contact-form" action="#" method="post">
            <label className="contact-row">
              <span className="contact-index">01</span>
              <span className="contact-content">
                <span className="contact-question">What&apos;s your name?</span>
                <input type="text" name="name" placeholder="John Doe *" />
              </span>
            </label>

            <label className="contact-row">
              <span className="contact-index">02</span>
              <span className="contact-content">
                <span className="contact-question">What&apos;s your email?</span>
                <input type="email" name="email" placeholder="john@doe.com *" />
              </span>
            </label>

            <label className="contact-row">
              <span className="contact-index">03</span>
              <span className="contact-content">
                <span className="contact-question">What&apos;s the name of your organization?</span>
                <input type="text" name="org" placeholder="John & Doe ®" />
              </span>
            </label>

            <label className="contact-row">
              <span className="contact-index">04</span>
              <span className="contact-content">
                <span className="contact-question">What services are you looking for?</span>
                <input type="text" name="services" placeholder="Web Design, Web Development ..." />
              </span>
            </label>

            <label className="contact-row contact-row-message">
              <span className="contact-index">05</span>
              <span className="contact-content">
                <span className="contact-question">Your message</span>
                <textarea name="message" placeholder="Hello Abin, can you help me with ... *" />
              </span>
            </label>
          </form>

          <div className="contact-submit-wrap">
            <button type="button" className="contact-submit-orb" data-magnetic data-strength="100" data-strength-text="50">
              <span data-magnetic-text>Send it!</span>
            </button>
          </div>
        </div>

        <div className="contact-page-cols">
          <div className="contact-side-avatar" aria-hidden="true">
            <Image src="/reference/img/DSC07033-Cut-Color-1080.jpg" alt="" width={400} height={400} />
          </div>
          <span className="contact-arrow" aria-hidden="true">
            ↘
          </span>
          <div>
            <h4>Contact Details</h4>
            <p>hello@abinalias.com</p>
            <p>+91 00000 00000</p>
          </div>
          <div>
            <h4>Business</h4>
            <p>Abin Alias Studio</p>
            <p>Location: Kerala, India</p>
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

      <div className="container contact-bottom-meta">
        <div>
          <p>Version</p>
          <p>2026 © Edition</p>
        </div>
        <div>
          <p>Local Time</p>
          <p>05:43 PM IST</p>
        </div>
        <div>
          <p>Socials</p>
          <p>Awwwards · Instagram · Twitter · LinkedIn</p>
        </div>
      </div>
    </section>
  );
}
