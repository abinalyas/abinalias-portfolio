'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

type AdminLoginFormProps = {
  disabled?: boolean;
  nextPath?: string;
};

export function AdminLoginForm({ disabled = false, nextPath = '/admin/bookings' }: AdminLoginFormProps) {
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (disabled) {
      return;
    }

    setLoading(true);
    setMessage('Signing in...');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });

      const payload = await response.json();
      if (!response.ok) {
        setMessage(payload.error || 'Login failed');
        return;
      }

      setMessage('Login successful. Redirecting...');
      router.push(nextPath);
      router.refresh();
    } catch {
      setMessage('Network error while logging in');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="admin-password">Admin Password</label>
      <input
        id="admin-password"
        name="admin-password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Enter admin password"
        required
        disabled={disabled || loading}
      />
      <button className="btn btn-primary" type="submit" disabled={disabled || loading}>
        {loading ? 'Signing in...' : 'Sign In'}
      </button>
      {message ? <p className="form-message">{message}</p> : null}
    </form>
  );
}
