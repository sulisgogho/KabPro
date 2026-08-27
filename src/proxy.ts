import { NextRequest, NextResponse } from 'next/server';
import { decrypt } from '@/lib/jwt';

const protectedRoutes = ['/admin'];
const publicRoutes = ['/login'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Cek apakah ini adalah rute protected (rute yang diawali dengan /admin)
  const isProtectedRoute = path.startsWith('/admin');
  const isPublicRoute = publicRoutes.includes(path);

  // Dekripsi session dari cookie
  const cookie = req.cookies.get('session')?.value;
  const session = await decrypt(cookie);

  console.log(`[MIDDLEWARE] Path: ${path} | Cookie present: ${!!cookie} | Session valid: ${!!session?.userId}`);

  // Redirect ke /login jika mencoba akses rute protected tapi tidak ada session
  if (isProtectedRoute && !session?.userId) {
    console.log(`[MIDDLEWARE] Redirecting unauthenticated user to /login`);
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  // Redirect ke /admin jika sudah login tapi mencoba akses halaman login
  if (isPublicRoute && session?.userId) {
    console.log(`[MIDDLEWARE] Redirecting authenticated user to /admin`);
    return NextResponse.redirect(new URL('/admin', req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin', '/admin/:path*', '/login'],
};
