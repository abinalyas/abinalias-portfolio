import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { AvailabilityCalendar } from '@/components/availability-calendar';
import { getAvailabilityForPhotographer, getPhotographerBySlug } from '@/lib/photographers';

type PhotographerProfilePageProps = {
  params: {
    slug: string;
  };
};

export default function PhotographerProfilePage({ params }: PhotographerProfilePageProps) {
  const photographer = getPhotographerBySlug(params.slug);

  if (!photographer) {
    notFound();
  }

  const availability = getAvailabilityForPhotographer(photographer.slug, 28);

  return (
    <section className="section">
      <div className="container profile-grid">
        <div className="profile-panel">
          <p className="eyebrow">Photographer Profile</p>
          <h1 className="page-title">{photographer.name}</h1>
          <p className="muted-small">{photographer.companyName}</p>
          <p>{photographer.bio}</p>
          <p className="muted-small">{photographer.location}</p>
          <p className="muted-small">Specialty: {photographer.specialty}</p>
          <p className="muted-small">From ${photographer.hourlyRate}/hr</p>
          <p className="muted-small">
            Google reviews: {photographer.rating.toFixed(1)} ({photographer.reviewCount})
          </p>
          <p className="muted-small">Supports: {photographer.bookingModes.join(', ')}</p>

          <div className="tag-list">
            {photographer.services.map((service) => (
              <span key={service} className="service-tag">
                {service}
              </span>
            ))}
          </div>

          <div className="row-actions">
            <Link className="btn btn-primary" href={`/book?photographer=${photographer.slug}`}>
              Book on FrameRent
            </Link>
            <Link className="inline-btn" href={photographer.googleMapsUrl} target="_blank" rel="noreferrer">
              Google Maps
            </Link>
          </div>

          <div className="social-row">
            <Link href={photographer.socials.instagram} target="_blank" rel="noreferrer">
              Instagram
            </Link>
            <Link href={photographer.socials.website} target="_blank" rel="noreferrer">
              Website
            </Link>
          </div>

          <div className="policy-card">
            <h3>Why book on platform?</h3>
            <ul>
              <li>Refund and dispute support</li>
              <li>Faster response ranking for active providers</li>
              <li>Priority replacement if photographer cancels</li>
            </ul>
          </div>
        </div>

        <div className="profile-panel">
          <h2>Availability Calendar</h2>
          <AvailabilityCalendar days={availability} />

          <h2 className="portfolio-title">Best Work</h2>
          <div className="portfolio-grid">
            {photographer.portfolio.map((item) => (
              <article key={item.title} className="portfolio-card">
                <Image src={item.image} alt={item.title} width={320} height={180} />
                <p>{item.title}</p>
                <span>{item.category}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
