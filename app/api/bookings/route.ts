import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';
import { readBookings, writeBookings, type BookingRecord } from '@/lib/bookings';
import { getPhotographerBySlug } from '@/lib/photographers';
import { calculateQuote, type BookingMode } from '@/lib/pricing';

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isFutureOrToday(dateString: string) {
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date >= today;
}

function isBookingMode(value: string): value is BookingMode {
  return value === 'hourly' || value === 'day' || value === 'full-event';
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<BookingRecord>;

    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const shootType = body.shootType?.trim() ?? '';
    const date = body.date?.trim() ?? '';
    const time = body.time?.trim() ?? '';
    const photographerSlug = body.photographerSlug?.trim() ?? '';
    const bookingMode = body.bookingMode?.trim() ?? '';
    const notes = body.notes?.trim() ?? '';
    const hours = Number(body.hours ?? 1);

    if (!name || !email || !shootType || !date || !time || !photographerSlug || !bookingMode) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
    }

    if (!isFutureOrToday(date)) {
      return NextResponse.json({ error: 'Date must be today or later.' }, { status: 400 });
    }

    if (!isBookingMode(bookingMode)) {
      return NextResponse.json({ error: 'Invalid booking type selected.' }, { status: 400 });
    }

    const photographer = getPhotographerBySlug(photographerSlug);
    if (!photographer) {
      return NextResponse.json({ error: 'Selected photographer is not available.' }, { status: 400 });
    }

    if (!photographer.bookingModes.includes(bookingMode)) {
      return NextResponse.json({ error: 'This photographer does not support the selected booking type.' }, { status: 400 });
    }

    const quote = calculateQuote(photographer.hourlyRate, bookingMode, Number.isFinite(hours) ? hours : 1);

    const booking: BookingRecord = {
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      name,
      email,
      shootType,
      date,
      time,
      photographerSlug,
      bookingMode,
      hours,
      notes,
      status: 'pending',
      quote
    };

    const bookings = await readBookings();
    bookings.push(booking);
    await writeBookings(bookings);

    return NextResponse.json({ ok: true, bookingId: booking.id, quote }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Unable to process booking.' }, { status: 500 });
  }
}

export async function GET() {
  const bookings = await readBookings();
  return NextResponse.json({ count: bookings.length, bookings });
}
