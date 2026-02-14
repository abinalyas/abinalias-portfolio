'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const gallery = [
  '/gallery/placeholder-1.svg',
  '/gallery/placeholder-2.svg',
  '/gallery/placeholder-3.svg',
  '/gallery/placeholder-4.svg',
  '/gallery/placeholder-5.svg',
  '/gallery/placeholder-6.svg'
];

export function GallerySection() {
  return (
    <section className="gallery-section" data-page-body>
      <div className="container gallery-grid">
        {gallery.map((src, index) => (
          <motion.div
            key={src}
            className="gallery-card"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="gallery-frame">
              <Image src={src} alt={`Gallery placeholder ${index + 1}`} width={1200} height={820} className="gallery-image" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
