import { NextResponse, type NextRequest } from 'next/server'
import { COOKIE_NAME, verifySessionToken } from '@/lib/auth'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname === '/admin/login' || pathname === '/api/admin/login') return NextResponse.next()

  if (await verifySessionToken(req.cookies.get(COOKIE_NAME)?.value)) return NextResponse.next()

  if (pathname.startsWith('/api/')) {
    return NextResponse.json({ error: 'Sessão expirada. Faz login outra vez.' }, { status: 401 })
  }
  const url = req.nextUrl.clone()
  url.pathname = '/admin/login'
  url.search = ''
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
