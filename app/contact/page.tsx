import Image from 'next/image';

export default function ContactPage() {
  return (
    <section className="section default-header contact-header theme-dark" data-page-body>
      <div className="container medium">
        <div className="row contact-head-row" data-page-title>
          <div className="flex-col">
            <h1>
              <span>
                <span className="profile-picture">
                  <Image src="/reference/img/DSC07033-Cut-Color-1080.jpg" alt="" width={128} height={128} />
                </span>
                Let&apos;s start a
              </span>
              <span>project together</span>
            </h1>
          </div>
          <div className="flex-col contact-side-col">
            <div className="profile-picture">
              <Image src="/reference/img/DSC07033-Cut-Color-1080.jpg" alt="Abin Alias portrait" width={128} height={128} />
            </div>
            <div className="arrow">↘</div>
          </div>
        </div>

        <div className="row contact-body-row">
          <div className="flex-col">
            <form className="form" action="#" method="post">
              <div className="website-field">
                <label className="label" htmlFor="form-tel">
                  Phone Number
                </label>
                <input className="field" type="text" id="form-tel" name="tel" tabIndex={-1} />
              </div>

              <div className="form-col">
                <h5>01</h5>
                <label className="label" htmlFor="form-name">
                  What&apos;s your name?
                </label>
                <input className="field" type="text" id="form-name" name="name" required placeholder="John Doe *" />
              </div>

              <div className="form-col">
                <h5>02</h5>
                <label className="label" htmlFor="form-email">
                  What&apos;s your email?
                </label>
                <input className="field" type="email" id="form-email" name="email" required placeholder="john@doe.com *" />
              </div>

              <div className="form-col">
                <h5>03</h5>
                <label className="label" htmlFor="form-company">
                  What&apos;s the name of your organization?
                </label>
                <input className="field" type="text" id="form-company" name="company" required placeholder="John & Doe ®" />
              </div>

              <div className="form-col">
                <h5>04</h5>
                <label className="label" htmlFor="form-service">
                  What services are you looking for?
                </label>
                <input
                  className="field"
                  type="text"
                  id="form-service"
                  name="service"
                  required
                  placeholder="Web Design, Web Development ..."
                />
              </div>

              <div className="form-col">
                <h5>05</h5>
                <label className="label" htmlFor="form-message">
                  Your message
                </label>
                <textarea
                  className="field"
                  id="form-message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Hello Abin, can you help me with ... *"
                />
              </div>

              <div className="btn-contact-send">
                <button type="submit" className="btn btn-round" data-magnetic data-strength="100" data-strength-text="50">
                  <span className="btn-text">
                    <span className="form-btn" data-magnetic-text>
                      Send it!
                    </span>
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="flex-col contact-details-col">
            <h5>Contact Details</h5>
            <ul className="links-wrap">
              <li>
                <a href="mailto:hello@abinalias.com">hello@abinalias.com</a>
              </li>
              <li>
                <a href="tel:+919999900000">+91 99999 00000</a>
              </li>
            </ul>

            <h5>Business Details</h5>
            <ul className="links-wrap">
              <li>
                <p>Abin Alias Studio</p>
              </li>
              <li>
                <p>Location: Kerala, India</p>
              </li>
            </ul>

            <h5>Socials</h5>
            <ul className="links-wrap">
              <li>
                <a href="https://www.awwwards.com/" target="_blank" rel="noreferrer">
                  Awwwards
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/abin_lissy_alias/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com/" target="_blank" rel="noreferrer">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/abinalias/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="section footer footer-contact theme-dark">
        <div className="container no-padding">
          <div className="row bottom-footer">
            <div className="flex-col">
              <div className="credits">
                <h5>Version</h5>
                <p>2026 © Edition</p>
              </div>
              <div className="time">
                <h5>Local Time</h5>
                <p>05:43 PM IST</p>
              </div>
            </div>
            <div className="flex-col">
              <div className="socials">
                <h5>Socials</h5>
                <ul>
                  <li>
                    <a href="https://www.awwwards.com/" target="_blank" rel="noreferrer">
                      Awwwards
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/abin_lissy_alias/" target="_blank" rel="noreferrer">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/" target="_blank" rel="noreferrer">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/abinalias/" target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                  </li>
                </ul>
                <div className="stripe" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
