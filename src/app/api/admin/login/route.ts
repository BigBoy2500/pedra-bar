import { NextResponse } from 'next/server'
import { COOKIE_NAME, SESSION_SECONDS, checkPassword, createSessionToken } from '@/lib/auth'

export async function POST(req: Request) {
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'ADMIN_PASSWORD não está definida no servidor.' }, { status: 500 })
  }
  let password = ''
  try {
    const body = await req.json()
    password = typeof body?.password === 'string' ? body.password : ''
  } catch {
    // corpo inválido
  }
  if (!(await checkPassword(password))) {
    await new Promise((r) => setTimeout(r, 800)) // abranda tentativas em força bruta
    return NextResponse.json({ error: 'Password errada.' }, { status: 401 })
  }
  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE_NAME, await createSessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_SECONDS,
  })
  return res
}
