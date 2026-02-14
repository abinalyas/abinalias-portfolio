'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { CaseStudy } from '@/lib/case-studies';

type Props = {
  studies: CaseStudy[];
  label?: string;
  title?: string;
  showHeading?: boolean;
  showMoreButton?: boolean;
  showLabel?: boolean;
};

export function WorkHoverList({
  studies,
  label = 'Work',
  title = 'Selected projects',
  showHeading = true,
  showMoreButton = false,
  showLabel = true
}: Props) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [preview, setPreview] = useState({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  const active = useMemo(() => studies.find((s) => s.slug === activeSlug) ?? null, [studies, activeSlug]);

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    target.current = { x: event.clientX, y: event.clientY };
  };

  useEffect(() => {
    let raf = 0;
    let cursorX = target.current.x;
    let cursorY = target.current.y;
    let previewX = target.current.x;
    let previewY = target.current.y;

    const tick = () => {
      const t = target.current;
      cursorX += (t.x - cursorX) * 0.28;
      cursorY += (t.y - cursorY) * 0.28;
      previewX += (t.x - previewX) * 0.14;
      previewY += (t.y - previewY) * 0.14;
      setCursor({ x: cursorX, y: cursorY });
      setPreview({ x: previewX, y: previewY });
      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="section work-hover-shell" onMouseMove={handleMove}>
      <div className="container">
        {showHeading ? (
          <>
            <span className="kicker" data-page-kicker>
              {label}
            </span>
            <h1 className="title-md mt-6" data-page-title>
              {title}
            </h1>
          </>
        ) : showLabel ? (
          <p className="work-label" data-page-kicker>
            {label}
          </p>
        ) : null}

        <div className={`work-hover-list ${showHeading ? 'mt-10' : 'mt-4'}`} onMouseLeave={() => setActiveSlug(null)}>
          {studies.map((study) => {
            const isActive = activeSlug === study.slug;
            return (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="work-row"
                data-active={isActive}
                data-dim={Boolean(activeSlug) && !isActive}
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
        {showMoreButton ? (
          <div className="work-more-wrap">
            <Link
              href="/work"
              className="work-more-btn"
              data-page-body
              data-magnetic
              data-strength="25"
              data-strength-text="15"
            >
              <span data-magnetic-text>More work</span>
            </Link>
          </div>
        ) : null}
      </div>

      <div
        className="hover-preview"
        aria-hidden="true"
        data-visible={Boolean(active)}
        style={{ transform: `translate3d(${preview.x + 24}px, ${preview.y - 120}px, 0)` }}
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
        style={{ transform: `translate3d(${cursor.x - 18}px, ${cursor.y - 18}px, 0)` }}
      >
        <span>{active ? 'View' : ''}</span>
      </div>
    </section>
  );
}
