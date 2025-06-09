import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const userType = request.cookies.get('userType')?.value;

  if (request.nextUrl.pathname === '/login' && userType) {
    if (userType === 'admin') {
      return NextResponse.redirect(new URL('/admin', request.url));
    } else {
      return NextResponse.redirect(new URL('/userReview', request.url));
    }
  }

  return NextResponse.next();
}
