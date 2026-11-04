import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // If path starts with /en
  if (pathname === '/en' || pathname === '/en/') {
    const url = request.nextUrl.clone();
    url.pathname = '/';
    const response = NextResponse.rewrite(url);
    response.headers.set('x-locale', 'en');
    return response;
  }

  if (pathname.startsWith('/en/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/en/, '') || '/';
    const response = NextResponse.rewrite(url);
    response.headers.set('x-locale', 'en');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/en', '/en/:path*']
};
