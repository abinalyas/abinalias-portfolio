import { NextResponse } from 'next/server';
import { BOOKING_STATUSES, readBookings, writeBookings } from '@/lib/bookings';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    const body = (await request.json()) as { status?: string };
    const status = body.status?.trim() ?? '';

    if (!BOOKING_STATUSES.includes(status as (typeof BOOKING_STATUSES)[number])) {
      return NextResponse.json({ error: 'Invalid status' }, { status: 400 });
    }

    const bookings = await readBookings();
    const booking = bookings.find((entry) => entry.id === params.id);

    if (!booking) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    booking.status = status as (typeof BOOKING_STATUSES)[number];
    await writeBookings(bookings);

    return NextResponse.json({ ok: true, booking });
  } catch {
    return NextResponse.json({ error: 'Could not update booking status' }, { status: 500 });
  }
}
