export default function ContactPage() {
  return (
    <section className="section container">
      <span className="kicker" data-page-kicker>
        Contact
      </span>
      <h1 className="title-md mt-6" data-page-title>
        Let’s build something focused and effective.
      </h1>
      <p className="body-md mt-6" data-page-body>
        For project inquiries, email me and include scope, timeline, and goals.
      </p>
      <a href="mailto:hello@abinalias.com" className="nav-link mt-8 inline-block text-xl font-medium" data-page-body>
        hello@abinalias.com
      </a>
    </section>
  );
}
