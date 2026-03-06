'use client';

import { useMemo, useState } from 'react';
import type { AvailabilityDay } from '@/lib/photographers';

type AvailabilityCalendarProps = {
  days: AvailabilityDay[];
};

function formatDateLabel(dateString: string) {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
}

function formatWeekday(dateString: string) {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString('en-US', { weekday: 'short' });
}

export function AvailabilityCalendar({ days }: AvailabilityCalendarProps) {
  const [selectedDate, setSelectedDate] = useState(days[0]?.date ?? '');

  const selectedDay = useMemo(
    () => days.find((day) => day.date === selectedDate) ?? days[0],
    [days, selectedDate]
  );

  if (days.length === 0) {
    return <p>No upcoming dates available.</p>;
  }

  return (
    <div className="availability-wrap">
      <div className="calendar-grid" role="list" aria-label="Availability dates">
        {days.map((day) => {
          const isSelected = day.date === selectedDay?.date;
          return (
            <button
              type="button"
              key={day.date}
              className={`calendar-day${isSelected ? ' selected' : ''}${day.slots.length === 0 ? ' disabled' : ''}`}
              onClick={() => setSelectedDate(day.date)}
              disabled={day.slots.length === 0}
            >
              <span>{formatWeekday(day.date)}</span>
              <strong>{formatDateLabel(day.date)}</strong>
            </button>
          );
        })}
      </div>

      <div className="slot-panel">
        <p>Available slots for {formatDateLabel(selectedDay.date)}</p>
        {selectedDay.slots.length > 0 ? (
          <ul>
            {selectedDay.slots.map((slot) => (
              <li key={slot}>{slot}</li>
            ))}
          </ul>
        ) : (
          <p>No slots on this day.</p>
        )}
      </div>
    </div>
  );
}
