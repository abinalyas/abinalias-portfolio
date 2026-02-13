'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import type { CaseStudy } from '@/lib/case-studies';

type Props = {
  studies: CaseStudy[];
};

export function WorkHoverList({ studies }: Props) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const active = useMemo(() => studies.find((s) => s.slug === activeSlug) ?? null, [studies, activeSlug]);

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    setMouse({ x: event.clientX, y: event.clientY });
  };

  return (
    <section className="section container work-hover-shell" onMouseMove={handleMove}>
      <span className="kicker" data-page-kicker>
        Work
      </span>
      <h1 className="title-md mt-6" data-page-title>
        Selected projects
      </h1>

      <div className="work-hover-list mt-10" onMouseLeave={() => setActiveSlug(null)}>
        {studies.map((study) => {
          const isActive = activeSlug === study.slug;
          return (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="work-row"
              data-active={isActive}
              onMouseEnter={() => setActiveSlug(study.slug)}
            >
              <h2>{study.title}</h2>
              <p>
                {study.role} · {study.category}
              </p>
            </Link>
          );
        })}
      </div>

      <div
        className="hover-preview"
        aria-hidden="true"
        data-visible={Boolean(active)}
        style={{ transform: `translate3d(${mouse.x + 24}px, ${mouse.y - 120}px, 0)` }}
      >
        {active ? (
          <>
            <Image src={active.image} alt={active.title} width={360} height={260} className="hover-preview-img" />
            <span className="hover-preview-pill">View</span>
          </>
        ) : null}
      </div>

      <div
        className="custom-cursor"
        aria-hidden="true"
        data-active={Boolean(active)}
        style={{ transform: `translate3d(${mouse.x - 18}px, ${mouse.y - 18}px, 0)` }}
      />
    </section>
  );
}
