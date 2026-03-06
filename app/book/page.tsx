import { BookingForm } from '@/components/booking-form';
import { photographers } from '@/lib/photographers';
import type { BookingMode } from '@/lib/pricing';

type BookPageProps = {
  searchParams?: {
    photographer?: string;
    mode?: BookingMode;
  };
};

const allowedModes: BookingMode[] = ['hourly', 'day', 'full-event'];

export default function BookPage({ searchParams }: BookPageProps) {
  const mode = allowedModes.includes(searchParams?.mode as BookingMode) ? (searchParams?.mode as BookingMode) : 'hourly';

  return (
    <section className="section booking-section">
      <div className="container booking-grid">
        <div>
          <p className="eyebrow">Book Now</p>
          <h1 className="page-title">Request your photographer</h1>
          <p className="section-lead">
            Book by hour, day, or full event. Your payment includes platform support, secure checkout, and dispute
            assistance.
          </p>
        </div>
        <BookingForm
          photographers={photographers}
          defaultPhotographerSlug={searchParams?.photographer}
          defaultMode={mode}
        />
      </div>
    </section>
  );
}
