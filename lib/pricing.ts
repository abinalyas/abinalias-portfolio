export type BookingMode = 'hourly' | 'day' | 'full-event';

export type QuoteBreakdown = {
  baseAmount: number;
  clientFee: number;
  clientTotal: number;
  providerCommission: number;
  providerPayout: number;
};

const CLIENT_FEE_RATE = 0.1;
const PROVIDER_COMMISSION_RATE = 0.12;

export function getBillableHours(mode: BookingMode, hours: number) {
  if (mode === 'hourly') {
    return Math.min(Math.max(hours, 1), 12);
  }

  if (mode === 'day') {
    return 8;
  }

  return 12;
}

export function calculateQuote(hourlyRate: number, mode: BookingMode, hours: number): QuoteBreakdown {
  const billableHours = getBillableHours(mode, hours);
  const base = hourlyRate * billableHours;

  // Incentivize longer bookings booked through the platform.
  const discountedBase = mode === 'day' ? base * 0.92 : mode === 'full-event' ? base * 0.88 : base;

  const clientFee = discountedBase * CLIENT_FEE_RATE;
  const clientTotal = discountedBase + clientFee;
  const providerCommission = discountedBase * PROVIDER_COMMISSION_RATE;
  const providerPayout = discountedBase - providerCommission;

  return {
    baseAmount: round(discountedBase),
    clientFee: round(clientFee),
    clientTotal: round(clientTotal),
    providerCommission: round(providerCommission),
    providerPayout: round(providerPayout)
  };
}

function round(value: number) {
  return Math.round(value * 100) / 100;
}
