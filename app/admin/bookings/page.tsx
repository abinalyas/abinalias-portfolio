import Link from 'next/link';
import { BookingsTable } from '@/components/admin/bookings-table';
import { LogoutButton } from '@/components/admin/logout-button';
import { readBookings } from '@/lib/bookings';
import { photographers } from '@/lib/photographers';

export default async function AdminBookingsPage() {
  const bookings = await readBookings();
  const providerNames = Object.fromEntries(photographers.map((entry) => [entry.slug, entry.companyName]));

  return (
    <section className="section">
      <div className="container">
        <div className="row-actions admin-head">
          <div>
            <p className="eyebrow">Admin</p>
            <h1 className="page-title">Bookings Dashboard</h1>
            <p className="section-lead">Track status updates and commission flow across marketplace bookings.</p>
          </div>
          <div className="row-actions">
            <Link href="/api/admin/bookings/export" className="inline-btn">
              Export CSV
            </Link>
            <LogoutButton />
          </div>
        </div>
        <BookingsTable initialBookings={bookings} providerNames={providerNames} />
      </div>
    </section>
  );
}
