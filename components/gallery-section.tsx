'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const gallery = [
  { src: '/gallery/placeholder-1.svg', tone: 'a' },
  { src: '/gallery/placeholder-2.svg', tone: 'b' },
  { src: '/gallery/placeholder-3.svg', tone: 'c' },
  { src: '/gallery/placeholder-4.svg', tone: 'd' },
  { src: '/gallery/placeholder-5.svg', tone: 'e' },
  { src: '/gallery/placeholder-6.svg', tone: 'f' }
];

export function GallerySection() {
  return (
    <section className="gallery-section" data-page-body>
      <div className="container gallery-grid">
        {gallery.map((item, index) => (
          <motion.div
            key={item.src}
            className="gallery-card"
            data-tone={item.tone}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -10, transition: { duration: 0.28, ease: 'easeOut' } }}
          >
            <div className="gallery-frame">
              <Image
                src={item.src}
                alt={`Gallery placeholder ${index + 1}`}
                width={1200}
                height={820}
                className="gallery-image"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
