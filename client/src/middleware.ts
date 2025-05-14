// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('tokenkeysecret')?.value
  const { pathname } = request.nextUrl

  const isPublic = pathname.startsWith('/login')

  if (!token && !isPublic) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (token && pathname.startsWith('/login')) {
    // Si ya tiene token, redirige fuera de /login
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard', '/dashboard/orders'],
}