'use client';

import Image from 'next/image';

export function LandingHero() {
  return (
    <section className="landing-hero" aria-label="Intro">
      <div className="landing-top container">
        <p className="landing-kicker">Interaction & Development</p>
      </div>

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
        <span>Abin Alias</span>
      </div>
    </section>
  );
}
