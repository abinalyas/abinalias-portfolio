import Link from 'next/link';
import { BookingForm } from '@/components/booking-form';
import { photographers } from '@/lib/photographers';

const packages = [
  {
    title: 'Quick Session',
    detail: 'Hourly booking for portraits, products, and quick campaigns',
    price: 'From $90',
    mode: 'hourly'
  },
  {
    title: 'Day Booking',
    detail: '8-hour booking with discounted pricing and structured delivery',
    price: 'From $720',
    mode: 'day'
  },
  {
    title: 'Full Event Coverage',
    detail: 'End-to-end event timeline coverage with premium turnaround',
    price: 'From $1,050',
    mode: 'full-event'
  }
] as const;

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-orb hero-orb-a" aria-hidden="true" />
        <div className="hero-orb hero-orb-b" aria-hidden="true" />
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Photographer Rental Service</p>
            <h1>Search by city, compare reviews, and book by hour, day, or full event.</h1>
            <p className="hero-copy">
              Kerala-first photography marketplace with trusted profiles, Google review insights, and platform-backed
              booking support.
            </p>
            <div className="hero-actions">
              <Link href="/photographers" className="btn btn-primary">
                Browse Talent
              </Link>
              <a href="#packages" className="btn btn-secondary">
                View Packages
              </a>
            </div>
          </div>
          <aside className="hero-card">
            <p>Marketplace Benefits</p>
            <h2>Secure booking beats direct off-platform deals</h2>
            <ul>
              <li>Refund/dispute support by FrameRent</li>
              <li>Replacement coverage for cancellation risk</li>
              <li>Higher visibility for active providers</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="photographers" className="section">
        <div className="container">
          <p className="eyebrow">Top Rated</p>
          <h2 className="section-title">Featured Photographers</h2>
          <div className="card-grid">
            {photographers.slice(0, 3).map((photographer) => (
              <article className="info-card" key={photographer.slug}>
                <p className="tag">
                  Google ★ {photographer.rating.toFixed(1)} ({photographer.reviewCount})
                </p>
                <h3>{photographer.name}</h3>
                <p>{photographer.companyName}</p>
                <p>{photographer.location}</p>
                <strong>From ${photographer.hourlyRate}/hr</strong>
                <Link className="inline-btn" href={`/photographers/${photographer.slug}`}>
                  Open Profile
                </Link>
              </article>
            ))}
          </div>
          <div className="hero-actions">
            <Link href="/photographers" className="btn btn-secondary">
              Search by City and Service
            </Link>
          </div>
        </div>
      </section>

      <section id="packages" className="section section-alt">
        <div className="container">
          <p className="eyebrow">Pricing</p>
          <h2 className="section-title">Booking Formats</h2>
          <div className="card-grid">
            {packages.map((item) => (
              <article className="info-card package" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <strong>{item.price}</strong>
                <Link href={`/book?mode=${item.mode}`} className="inline-btn">
                  Choose {item.title}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-grid">
          <div>
            <p className="eyebrow">How It Works</p>
            <h2 className="section-title">From search to shoot in four steps.</h2>
          </div>
          <ol>
            <li>Search photographers by city, service, and review score.</li>
            <li>Check portfolio, booking modes, and next open calendar slots.</li>
            <li>Pay through the platform with protected pricing and commission split.</li>
            <li>Receive final media and submit your verified platform review.</li>
          </ol>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <p className="eyebrow">Commission Model</p>
          <blockquote className="quote">
            “Client service fee + provider commission powers support, dispute handling, and visibility tools that keep
            bookings reliable.”
          </blockquote>
          <p className="quote-author">Displayed clearly in every booking quote before payment.</p>
        </div>
      </section>

      <section id="book" className="section booking-section">
        <div className="container booking-grid">
          <div>
            <p className="eyebrow">Book Now</p>
            <h2 className="section-title">Request your photographer</h2>
            <p>Get an instant estimate with platform fee and provider payout transparency.</p>
          </div>
          <BookingForm photographers={photographers} />
        </div>
      </section>
    </>
  );
}
