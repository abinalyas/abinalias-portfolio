'use client';

import { useMemo, useState } from 'react';
import type { BookingRecord, BookingStatus } from '@/lib/bookings';

type BookingsTableProps = {
  initialBookings: BookingRecord[];
  providerNames: Record<string, string>;
};

const statuses: BookingStatus[] = ['pending', 'confirmed', 'completed', 'cancelled'];

export function BookingsTable({ initialBookings, providerNames }: BookingsTableProps) {
  const [bookings, setBookings] = useState(initialBookings);
  const [message, setMessage] = useState('');

  const totals = useMemo(() => {
    return bookings.reduce(
      (acc, booking) => {
        acc.gross += booking.quote.clientTotal;
        acc.platform += booking.quote.clientFee + booking.quote.providerCommission;
        acc.payout += booking.quote.providerPayout;
        return acc;
      },
      { gross: 0, platform: 0, payout: 0 }
    );
  }, [bookings]);

  async function updateStatus(id: string, status: BookingStatus) {
    setMessage('Updating status...');
    const previous = bookings;
    setBookings((current) => current.map((entry) => (entry.id === id ? { ...entry, status } : entry)));

    try {
      const response = await fetch(`/api/bookings/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      });

      const payload = await response.json();
      if (!response.ok) {
        setBookings(previous);
        setMessage(payload.error ?? 'Failed to update status');
        return;
      }

      setMessage('Status updated');
    } catch {
      setBookings(previous);
      setMessage('Network error while updating status');
    }
  }

  return (
    <div className="admin-wrap">
      <div className="admin-kpis">
        <article className="kpi-card">
          <p>Total Bookings</p>
          <strong>{bookings.length}</strong>
        </article>
        <article className="kpi-card">
          <p>Gross Volume</p>
          <strong>${totals.gross.toFixed(2)}</strong>
        </article>
        <article className="kpi-card">
          <p>Platform Revenue</p>
          <strong>${totals.platform.toFixed(2)}</strong>
        </article>
        <article className="kpi-card">
          <p>Provider Payouts</p>
          <strong>${totals.payout.toFixed(2)}</strong>
        </article>
      </div>

      <div className="table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Client</th>
              <th>Provider</th>
              <th>Type</th>
              <th>Total</th>
              <th>Platform</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.date}</td>
                <td>
                  {booking.name}
                  <br />
                  <span className="muted-small">{booking.email}</span>
                </td>
                <td>{providerNames[booking.photographerSlug] ?? booking.photographerSlug}</td>
                <td>
                  {booking.bookingMode}
                  <br />
                  <span className="muted-small">{booking.hours}h</span>
                </td>
                <td>${booking.quote.clientTotal.toFixed(2)}</td>
                <td>${(booking.quote.clientFee + booking.quote.providerCommission).toFixed(2)}</td>
                <td>
                  <select
                    value={booking.status}
                    onChange={(event) => updateStatus(booking.id, event.target.value as BookingStatus)}
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {message ? <p className="muted-small">{message}</p> : null}
    </div>
  );
}
