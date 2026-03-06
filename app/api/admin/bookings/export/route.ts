import { NextResponse } from 'next/server';
import { readBookings } from '@/lib/bookings';

function escapeCsv(value: string | number) {
  const text = String(value ?? '');
  if (/[",\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

export async function GET() {
  const bookings = await readBookings();

  const header = [
    'booking_id',
    'created_at',
    'status',
    'date',
    'time',
    'client_name',
    'client_email',
    'shoot_type',
    'photographer_slug',
    'booking_mode',
    'hours',
    'base_amount',
    'client_fee',
    'client_total',
    'provider_commission',
    'provider_payout',
    'notes'
  ];

  const rows = bookings.map((booking) => [
    booking.id,
    booking.createdAt,
    booking.status,
    booking.date,
    booking.time,
    booking.name,
    booking.email,
    booking.shootType,
    booking.photographerSlug,
    booking.bookingMode,
    booking.hours,
    booking.quote.baseAmount,
    booking.quote.clientFee,
    booking.quote.clientTotal,
    booking.quote.providerCommission,
    booking.quote.providerPayout,
    booking.notes
  ]);

  const csv = [header, ...rows]
    .map((row) => row.map((cell) => escapeCsv(cell)).join(','))
    .join('\n');

  return new NextResponse(csv, {
    status: 200,
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="bookings-export-${new Date().toISOString().slice(0, 10)}.csv"`
    }
  });
}
