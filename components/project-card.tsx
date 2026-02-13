'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import type { CaseStudy } from '@/lib/case-studies';

type ProjectCardProps = {
  study: CaseStudy;
  layout: 'home' | 'work';
};

export function ProjectCard({ study, layout }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia('(hover: none)').matches) {
      return;
    }

    const card = cardRef.current;
    const image = imageRef.current;
    if (!card || !image) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const relX = x / rect.width - 0.5;
    const relY = y / rect.height - 0.5;

    gsap.to(card, {
      rotationY: relX * 5,
      rotationX: relY * -5,
      y: -4,
      duration: 0.35,
      ease: 'power2.out',
      transformPerspective: 900,
      transformOrigin: 'center'
    });

    gsap.to(image, {
      x: relX * 10,
      y: relY * 10,
      scale: 1.06,
      duration: 0.45,
      ease: 'power2.out'
    });
  };

  const handleLeave = () => {
    const card = cardRef.current;
    const image = imageRef.current;

    if (!card || !image) {
      return;
    }

    gsap.to(card, {
      rotationY: 0,
      rotationX: 0,
      y: 0,
      duration: 0.5,
      ease: 'power3.out'
    });

    gsap.to(image, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.55,
      ease: 'power3.out'
    });
  };

  return (
    <Link
      ref={cardRef}
      href={`/work/${study.slug}`}
      className="card interactive-card"
      data-card-reveal
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {layout === 'home' ? (
        <div className="grid gap-4 sm:grid-cols-[180px_1fr_auto] sm:items-start">
          <div className="card-image-wrap h-28 w-full sm:h-[130px] sm:w-[180px]">
            <Image
              ref={imageRef}
              src={study.image}
              alt={study.title}
              width={180}
              height={130}
              className="card-image h-full w-full rounded-md border border-line object-cover"
            />
          </div>
          <div className="min-w-0">
            <h3>{study.title}</h3>
            <p>{study.summary}</p>
          </div>
          <span className="text-sm text-muted">{study.year}</span>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-[200px_1fr_auto] sm:items-start">
          <div className="card-image-wrap h-32 w-full sm:h-[148px] sm:w-[200px]">
            <Image
              ref={imageRef}
              src={study.image}
              alt={study.title}
              width={200}
              height={148}
              className="card-image h-full w-full rounded-md border border-line object-cover"
            />
          </div>
          <div className="min-w-0">
            <h2 className="text-2xl font-medium tracking-tight">{study.title}</h2>
            <p>
              {study.role} · {study.category}
            </p>
          </div>
          <p className="text-sm text-muted">{study.year}</p>
        </div>
      )}
    </Link>
  );
}
