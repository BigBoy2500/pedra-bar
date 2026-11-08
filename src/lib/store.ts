import 'server-only'
import { Redis } from '@upstash/redis'
import { promises as fs } from 'fs'
import path from 'path'
import { defaultEventos, defaultMenu } from './defaults'
import type { Evento, MenuCategory } from './types'

type Key = 'menu' | 'eventos'

const isDev = process.env.NODE_ENV !== 'production'
const DATA_DIR = path.join(process.cwd(), '.data')

function redis(): Redis | null {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN
  return url && token ? new Redis({ url, token }) : null
}

/** Pode gravar? Redis configurado, ou modo dev (ficheiro local). */
export function canWrite(): boolean {
  return redis() !== null || isDev
}

async function read<T>(key: Key): Promise<T | null> {
  const r = redis()
  if (r) return (await r.get<T>(key)) ?? null
  if (isDev) {
    try {
      return JSON.parse(await fs.readFile(path.join(DATA_DIR, `${key}.json`), 'utf8')) as T
    } catch {
      return null
    }
  }
  return null
}

async function write(key: Key, value: unknown): Promise<void> {
  const r = redis()
  if (r) {
    await r.set(key, value)
    return
  }
  if (isDev) {
    await fs.mkdir(DATA_DIR, { recursive: true })
    await fs.writeFile(path.join(DATA_DIR, `${key}.json`), JSON.stringify(value, null, 2), 'utf8')
    return
  }
  throw new Error('Armazenamento não configurado (falta ligar o Upstash Redis na Vercel).')
}

export async function getMenu(): Promise<MenuCategory[]> {
  try {
    const data = await read<MenuCategory[]>('menu')
    return Array.isArray(data) && data.length > 0 ? data : defaultMenu
  } catch (e) {
    console.error('getMenu falhou, a usar fallback', e)
    return defaultMenu
  }
}

export async function setMenu(menu: MenuCategory[]): Promise<void> {
  await write('menu', menu)
}

export async function getEventos(): Promise<Evento[]> {
  let list: Evento[]
  try {
    const data = await read<Evento[]>('eventos')
    list = Array.isArray(data) ? data : defaultEventos
  } catch (e) {
    console.error('getEventos falhou, a usar fallback', e)
    list = defaultEventos
  }
  return [...list].sort((a, b) => b.date.localeCompare(a.date))
}

export async function setEventos(eventos: Evento[]): Promise<void> {
  await write('eventos', eventos)
}

/** Guarda uma imagem e devolve o URL público. */
export async function saveImage(file: File): Promise<string> {
  const ext = file.type === 'image/png' ? 'png' : file.type === 'image/webp' ? 'webp' : 'jpg'
  const name = `evento-${Date.now()}.${ext}`

  // Em dev guarda sempre em local, para nunca escrever no Blob de produção por engano.
  if (isDev) {
    const dir = path.join(process.cwd(), 'public', 'uploads')
    await fs.mkdir(dir, { recursive: true })
    await fs.writeFile(path.join(dir, name), Buffer.from(await file.arrayBuffer()))
    return `/uploads/${name}`
  }
  // Token clássico, ou OIDC (BLOB_STORE_ID) nas stores novas da Vercel.
  if (process.env.BLOB_READ_WRITE_TOKEN || process.env.BLOB_STORE_ID) {
    const { put } = await import('@vercel/blob')
    const blob = await put(`eventos/${name}`, file, { access: 'public', addRandomSuffix: true })
    return blob.url
  }
  throw new Error('Upload de imagens não configurado (falta ligar o Vercel Blob).')
}
