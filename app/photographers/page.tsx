import Link from 'next/link';
import { getAvailabilityForPhotographer, getCities, getServices, photographers } from '@/lib/photographers';

type PhotographerDirectoryPageProps = {
  searchParams?: {
    q?: string;
    city?: string;
    service?: string;
  };
};

function normalize(value?: string) {
  return value?.trim().toLowerCase() ?? '';
}

export default function PhotographersPage({ searchParams }: PhotographerDirectoryPageProps) {
  const query = normalize(searchParams?.q);
  const city = searchParams?.city?.trim() ?? '';
  const service = searchParams?.service?.trim() ?? '';

  const filtered = photographers.filter((photographer) => {
    const matchesQuery =
      !query ||
      photographer.name.toLowerCase().includes(query) ||
      photographer.companyName.toLowerCase().includes(query) ||
      photographer.specialty.toLowerCase().includes(query);

    const matchesCity = !city || photographer.city === city;
    const matchesService = !service || photographer.services.includes(service);

    return matchesQuery && matchesCity && matchesService;
  });

  const cities = getCities();
  const services = getServices();

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Photographer Directory</p>
        <h1 className="page-title">Search photographers by city and service</h1>
        <p className="section-lead">Compare Google reviews, booking formats, and portfolio style before you book.</p>

        <form className="filter-bar" method="get">
          <input name="q" defaultValue={searchParams?.q ?? ''} placeholder="Name, company, specialty" />

          <select name="city" defaultValue={city}>
            <option value="">All cities</option>
            {cities.map((entry) => (
              <option key={entry} value={entry}>
                {entry}
              </option>
            ))}
          </select>

          <select name="service" defaultValue={service}>
            <option value="">All services</option>
            {services.map((entry) => (
              <option key={entry} value={entry}>
                {entry}
              </option>
            ))}
          </select>

          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>

        <div className="card-grid">
          {filtered.map((photographer) => {
            const firstOpenDay = getAvailabilityForPhotographer(photographer.slug, 14).find((day) => day.slots.length > 0);

            return (
              <article className="info-card" key={photographer.slug}>
                <p className="tag">
                  Google ★ {photographer.rating.toFixed(1)} ({photographer.reviewCount})
                </p>
                <h2>{photographer.name}</h2>
                <p>{photographer.companyName}</p>
                <p>{photographer.specialty}</p>
                <p>{photographer.location}</p>
                <strong>From ${photographer.hourlyRate}/hr</strong>
                <p className="muted-small">
                  Supports: {photographer.bookingModes.join(', ')} | Next opening:{' '}
                  {firstOpenDay ? `${firstOpenDay.date} (${firstOpenDay.slots[0]})` : 'Unavailable'}
                </p>
                <div className="row-actions">
                  <Link className="inline-btn" href={`/photographers/${photographer.slug}`}>
                    View Profile
                  </Link>
                  <Link className="inline-btn" href={`/book?photographer=${photographer.slug}`}>
                    Book
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {filtered.length === 0 ? <p className="muted-small">No photographers found for this filter combination.</p> : null}
      </div>
    </section>
  );
}
