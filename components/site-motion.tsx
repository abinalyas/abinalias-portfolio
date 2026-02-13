'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export function SiteMotion() {
  const pathname = usePathname();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const preloader = document.querySelector('.preloader');
      preloader?.classList.add('is-hidden');
      return;
    }

    if (isInitialLoad.current) {
      const intro = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          document.querySelector('.preloader')?.classList.add('is-hidden');
        }
      });

      intro
        .to('.preloader-copy span', { y: 0, duration: 0.8, stagger: 0.06 })
        .to('.preloader-panel', { yPercent: -100, duration: 1.05, stagger: 0.08 }, '-=0.2')
        .fromTo(
          '[data-page-kicker], [data-page-title], [data-page-body], [data-card-reveal]',
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.72, stagger: 0.08 },
          '-=0.65'
        );

      isInitialLoad.current = false;
      return;
    }

    const routeTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    routeTl
      .fromTo('.route-wipe', { scaleY: 0, transformOrigin: 'top' }, { scaleY: 1, duration: 0.38 })
      .set('[data-page-kicker], [data-page-title], [data-page-body], [data-card-reveal]', {
        y: 26,
        opacity: 0
      })
      .to('.route-wipe', { scaleY: 0, transformOrigin: 'bottom', duration: 0.44 })
      .to(
        '[data-page-kicker], [data-page-title], [data-page-body], [data-card-reveal]',
        {
          y: 0,
          opacity: 1,
          duration: 0.68,
          stagger: 0.06
        },
        '-=0.24'
      );
  }, [pathname]);

  return (
    <>
      <div className="preloader" aria-hidden="true">
        <div className="preloader-panel" />
        <div className="preloader-panel" />
        <div className="preloader-copy">
          <span>A</span>
          <span>B</span>
          <span>I</span>
          <span>N</span>
        </div>
      </div>
      <div className="route-wipe" aria-hidden="true" />
    </>
  );
}
