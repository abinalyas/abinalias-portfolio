import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ADMIN_COOKIE_NAME } from '@/lib/admin-auth-constants';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isLoginPage = pathname === '/admin/login' || pathname.startsWith('/admin/login/');
  const isAdminLoginApi = pathname.startsWith('/api/admin/login') || pathname.startsWith('/api/admin/logout');
  const isProtectedAdminPage = pathname.startsWith('/admin') && !isLoginPage;
  const isProtectedAdminApi =
    (pathname.startsWith('/api/admin') && !isAdminLoginApi) || pathname.startsWith('/api/bookings/');

  if (!isProtectedAdminPage && !isProtectedAdminApi) {
    return NextResponse.next();
  }

  const hasAdminSession = Boolean(request.cookies.get(ADMIN_COOKIE_NAME)?.value);

  if (hasAdminSession) {
    return NextResponse.next();
  }

  if (isProtectedAdminApi) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const loginUrl = new URL('/admin/login', request.url);
  loginUrl.searchParams.set('next', pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*', '/api/bookings/:path*']
};
