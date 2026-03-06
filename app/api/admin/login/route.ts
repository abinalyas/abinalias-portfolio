import { NextResponse } from 'next/server';
import {
  createAdminSessionToken,
  getAdminSessionCookie,
  hasAdminPasswordConfigured,
  verifyAdminPassword
} from '@/lib/admin-auth';

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { password?: string };
    const password = body.password?.trim() ?? '';

    if (!hasAdminPasswordConfigured()) {
      return NextResponse.json({ error: 'Admin password is not configured on server.' }, { status: 500 });
    }

    if (!verifyAdminPassword(password)) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });
    const cookie = getAdminSessionCookie();
    response.cookies.set(cookie.name, createAdminSessionToken(), cookie.options);
    return response;
  } catch {
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
