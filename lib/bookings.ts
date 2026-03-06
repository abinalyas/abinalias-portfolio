import { promises as fs } from 'fs';
import path from 'path';
import type { BookingMode, QuoteBreakdown } from '@/lib/pricing';

export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export type BookingRecord = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  shootType: string;
  date: string;
  time: string;
  photographerSlug: string;
  bookingMode: BookingMode;
  hours: number;
  notes: string;
  status: BookingStatus;
  quote: QuoteBreakdown;
};

const dataDir = path.join(process.cwd(), 'data');
const bookingFile = path.join(dataDir, 'bookings.json');

export const BOOKING_STATUSES: BookingStatus[] = ['pending', 'confirmed', 'completed', 'cancelled'];

export async function readBookings(): Promise<BookingRecord[]> {
  try {
    const file = await fs.readFile(bookingFile, 'utf8');
    const parsed = JSON.parse(file);

    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.map((record) => ({
      ...record,
      status: BOOKING_STATUSES.includes(record.status) ? record.status : 'pending'
    }));
  } catch {
    return [];
  }
}

export async function writeBookings(records: BookingRecord[]) {
  await fs.mkdir(dataDir, { recursive: true });
  await fs.writeFile(bookingFile, JSON.stringify(records, null, 2), 'utf8');
}
