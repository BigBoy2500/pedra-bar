// Funciona em Edge (middleware) e Node: usa só Web Crypto.
export const COOKIE_NAME = 'pb_admin'
export const SESSION_SECONDS = 60 * 60 * 24 * 7 // 7 dias

const enc = new TextEncoder()

function secret(): string | null {
  return process.env.SESSION_SECRET || process.env.ADMIN_PASSWORD || null
}

const toHex = (buf: ArrayBuffer) =>
  Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')

async function sign(payload: string, key: string): Promise<string> {
  const k = await crypto.subtle.importKey('raw', enc.encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  return toHex(await crypto.subtle.sign('HMAC', k, enc.encode(payload)))
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}

export async function createSessionToken(): Promise<string> {
  const key = secret()
  if (!key) throw new Error('ADMIN_PASSWORD não definida')
  const exp = Math.floor(Date.now() / 1000) + SESSION_SECONDS
  return `${exp}.${await sign(String(exp), key)}`
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  const key = secret()
  if (!key || !token) return false
  const [exp, sig] = token.split('.')
  if (!exp || !sig || Number(exp) < Date.now() / 1000) return false
  return safeEqual(sig, await sign(exp, key))
}

/** Compara a password enviada com ADMIN_PASSWORD sem fugas de tempo. */
export async function checkPassword(input: string): Promise<boolean> {
  const real = process.env.ADMIN_PASSWORD
  if (!real) return false
  const hash = async (s: string) => toHex(await crypto.subtle.digest('SHA-256', enc.encode(s)))
  return safeEqual(await hash(input), await hash(real))
}
