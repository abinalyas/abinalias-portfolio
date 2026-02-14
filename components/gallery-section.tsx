'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const rowOne = [
  { src: '/gallery/placeholder-1.svg', tone: 'a' },
  { src: '/gallery/placeholder-2.svg', tone: 'b' },
  { src: '/gallery/placeholder-3.svg', tone: 'c' }
];

const rowTwo = [
  { src: '/gallery/placeholder-4.svg', tone: 'd' },
  { src: '/gallery/placeholder-5.svg', tone: 'e' },
  { src: '/gallery/placeholder-6.svg', tone: 'f' }
];

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowOneRef = useRef<HTMLDivElement>(null);
  const rowTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const top = rowOneRef.current;
    const bottom = rowTwoRef.current;
    if (!section || !top || !bottom) {
      return;
    }

    const topTween = gsap.fromTo(
      top,
      { xPercent: -6 },
      {
        xPercent: 6,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.1
        }
      }
    );

    const bottomTween = gsap.fromTo(
      bottom,
      { xPercent: 6 },
      {
        xPercent: -6,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.1
        }
      }
    );

    return () => {
      topTween.scrollTrigger?.kill();
      bottomTween.scrollTrigger?.kill();
      topTween.kill();
      bottomTween.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="gallery-section" data-page-body>
      <div className="gallery-row-wrap">
        <div ref={rowOneRef} className="gallery-row gallery-row-top">
          {rowOne.map((item, index) => (
            <div key={item.src} className="gallery-card" data-tone={item.tone} data-card-reveal>
              <div className="gallery-frame">
                <Image
                  src={item.src}
                  alt={`Gallery placeholder ${index + 1}`}
                  width={1200}
                  height={820}
                  className="gallery-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery-row-wrap">
        <div ref={rowTwoRef} className="gallery-row gallery-row-bottom">
          {rowTwo.map((item, index) => (
            <div key={item.src} className="gallery-card" data-tone={item.tone} data-card-reveal>
              <div className="gallery-frame">
                <Image
                  src={item.src}
                  alt={`Gallery placeholder ${index + 4}`}
                  width={1200}
                  height={820}
                  className="gallery-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
