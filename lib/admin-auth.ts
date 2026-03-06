import { createHmac, timingSafeEqual } from 'crypto';
import { ADMIN_COOKIE_NAME } from '@/lib/admin-auth-constants';
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;

function getSecret() {
  return process.env.ADMIN_SESSION_SECRET || 'local-dev-secret-change-me';
}

export function hasAdminPasswordConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function verifyAdminPassword(password: string) {
  const expected = process.env.ADMIN_PASSWORD ?? '';
  if (!expected) {
    return false;
  }

  return password === expected;
}

function signTimestamp(timestamp: string) {
  return createHmac('sha256', getSecret()).update(timestamp).digest('hex');
}

export function createAdminSessionToken(now = Date.now()) {
  const timestamp = String(Math.floor(now / 1000));
  const signature = signTimestamp(timestamp);
  return `${timestamp}.${signature}`;
}

export function verifyAdminSessionToken(token?: string | null) {
  if (!token) {
    return false;
  }

  const [timestamp, signature] = token.split('.');
  if (!timestamp || !signature) {
    return false;
  }

  const expected = signTimestamp(timestamp);

  if (expected.length !== signature.length) {
    return false;
  }

  const isValidSignature = timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  if (!isValidSignature) {
    return false;
  }

  const issuedAt = Number(timestamp);
  if (!Number.isFinite(issuedAt)) {
    return false;
  }

  const age = Math.floor(Date.now() / 1000) - issuedAt;
  return age >= 0 && age <= SESSION_MAX_AGE_SECONDS;
}

export function getAdminSessionCookie() {
  return {
    name: ADMIN_COOKIE_NAME,
    options: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax' as const,
      path: '/',
      maxAge: SESSION_MAX_AGE_SECONDS
    }
  };
}
