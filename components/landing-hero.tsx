'use client';

import Image from 'next/image';

export function LandingHero() {
  return (
    <section className="landing-hero" aria-label="Intro">
      <aside className="landing-location" data-page-body>
        <p>
          Located
          <br />
          in the
          <br />
          United States
        </p>
        <span className="landing-location-icon" aria-hidden="true">
          ◎
        </span>
      </aside>

      <div className="landing-photo-wrap" data-card-reveal>
        <Image
          src="/hero/abin-portrait.png"
          alt="Abin Alias portrait"
          width={1200}
          height={1505}
          className="landing-photo"
          priority
        />
      </div>

      <div className="landing-meta" data-page-body>
        <span className="landing-arrow">↘</span>
        <p>
          Freelance
          <br />
          Designer & Developer
        </p>
      </div>

      <div className="landing-name" data-page-title>
        <div className="landing-name-track">
          <span>Abin Alias — Abin Alias — </span>
          <span aria-hidden="true">Abin Alias — Abin Alias — </span>
        </div>
      </div>
    </section>
  );
}
