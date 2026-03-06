'use client';

import { FormEvent, useMemo, useState } from 'react';
import { calculateQuote, type BookingMode } from '@/lib/pricing';
import type { Photographer } from '@/lib/photographers';

type BookingFormProps = {
  photographers: Photographer[];
  defaultPhotographerSlug?: string;
  defaultMode?: BookingMode;
};

type FormState = {
  name: string;
  email: string;
  shootType: string;
  date: string;
  time: string;
  photographerSlug: string;
  bookingMode: BookingMode;
  hours: string;
  notes: string;
};

const initialState: Omit<FormState, 'photographerSlug' | 'bookingMode'> = {
  name: '',
  email: '',
  shootType: '',
  date: '',
  time: '',
  hours: '2',
  notes: ''
};

const MODE_LABELS: Record<BookingMode, string> = {
  hourly: 'Hourly',
  day: 'Day (8 hrs)',
  'full-event': 'Full Event (12 hrs)'
};

export function BookingForm({ photographers, defaultPhotographerSlug, defaultMode = 'hourly' }: BookingFormProps) {
  const defaultSlug = useMemo(() => {
    if (!defaultPhotographerSlug) {
      return '';
    }

    return photographers.some((photographer) => photographer.slug === defaultPhotographerSlug)
      ? defaultPhotographerSlug
      : '';
  }, [defaultPhotographerSlug, photographers]);

  const [form, setForm] = useState<FormState>({
    ...initialState,
    photographerSlug: defaultSlug,
    bookingMode: defaultMode
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const selectedPhotographer = photographers.find((photographer) => photographer.slug === form.photographerSlug);
  const supportedModes = selectedPhotographer?.bookingModes ?? ['hourly', 'day', 'full-event'];

  const activeMode = supportedModes.includes(form.bookingMode) ? form.bookingMode : supportedModes[0];
  const requestedHours = Number(form.hours) || 1;
  const quote = selectedPhotographer ? calculateQuote(selectedPhotographer.hourlyRate, activeMode, requestedHours) : null;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage('Submitting your request...');

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...form,
          bookingMode: activeMode,
          hours: requestedHours
        })
      });

      const payload = await response.json();

      if (!response.ok) {
        setMessage(payload.error ?? 'Could not submit request.');
        return;
      }

      setMessage(
        `Booking submitted. Platform quote: $${payload.quote.clientTotal}. Ref ${payload.bookingId.slice(0, 8).toUpperCase()}.`
      );
      setForm({
        ...initialState,
        photographerSlug: defaultSlug,
        bookingMode: defaultMode
      });
    } catch {
      setMessage('Network error. Please try again in a moment.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        placeholder="Your full name"
        value={form.name}
        onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="you@example.com"
        value={form.email}
        onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
        required
      />

      <label htmlFor="shootType">Shoot Type</label>
      <select
        id="shootType"
        name="shootType"
        value={form.shootType}
        onChange={(event) => setForm((prev) => ({ ...prev, shootType: event.target.value }))}
        required
      >
        <option value="" disabled>
          Select shoot type
        </option>
        <option>Wedding</option>
        <option>Portrait</option>
        <option>Product</option>
        <option>Event</option>
      </select>

      <label htmlFor="date">Preferred Date</label>
      <input
        id="date"
        name="date"
        type="date"
        value={form.date}
        onChange={(event) => setForm((prev) => ({ ...prev, date: event.target.value }))}
        required
      />

      <label htmlFor="time">Preferred Time</label>
      <input
        id="time"
        name="time"
        type="time"
        value={form.time}
        onChange={(event) => setForm((prev) => ({ ...prev, time: event.target.value }))}
        required
      />

      <label htmlFor="photographerSlug">Photographer / Company</label>
      <select
        id="photographerSlug"
        name="photographerSlug"
        value={form.photographerSlug}
        onChange={(event) => setForm((prev) => ({ ...prev, photographerSlug: event.target.value }))}
        required
      >
        <option value="" disabled>
          Select photographer
        </option>
        {photographers.map((photographer) => (
          <option key={photographer.slug} value={photographer.slug}>
            {photographer.name} ({photographer.city})
          </option>
        ))}
      </select>

      <label htmlFor="bookingMode">Booking Type</label>
      <select
        id="bookingMode"
        name="bookingMode"
        value={activeMode}
        onChange={(event) => setForm((prev) => ({ ...prev, bookingMode: event.target.value as BookingMode }))}
        required
      >
        {supportedModes.map((mode) => (
          <option key={mode} value={mode}>
            {MODE_LABELS[mode]}
          </option>
        ))}
      </select>

      <label htmlFor="hours">Hours (for hourly bookings)</label>
      <input
        id="hours"
        name="hours"
        type="number"
        min={1}
        max={12}
        value={form.hours}
        disabled={activeMode !== 'hourly'}
        onChange={(event) => setForm((prev) => ({ ...prev, hours: event.target.value }))}
      />

      <label htmlFor="notes">Project Notes</label>
      <textarea
        id="notes"
        name="notes"
        rows={4}
        placeholder="Venue, references, deliverables..."
        value={form.notes}
        onChange={(event) => setForm((prev) => ({ ...prev, notes: event.target.value }))}
      />

      {quote ? (
        <div className="quote-box">
          <p>Estimated Quote</p>
          <ul>
            <li>Base: ${quote.baseAmount.toFixed(2)}</li>
            <li>Client platform fee: ${quote.clientFee.toFixed(2)}</li>
            <li>You pay: ${quote.clientTotal.toFixed(2)}</li>
          </ul>
        </div>
      ) : null}

      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Request'}
      </button>

      <p className="muted-small">Bookings and payments inside FrameRent include support, refund handling, and dispute cover.</p>
      {message ? <p className="form-message">{message}</p> : null}
    </form>
  );
}
