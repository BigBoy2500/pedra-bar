import type { Evento, MenuCategory, MenuItem, Subcategory } from './types'

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/

const str = (v: unknown, max: number, field: string): string => {
  if (typeof v !== 'string') throw new Error(`Campo inválido: ${field}`)
  return v.trim().slice(0, max)
}

const price = (v: unknown, field: string): number => {
  const n = typeof v === 'number' ? v : Number.NaN
  if (!Number.isFinite(n) || n < 0 || n > 10000) throw new Error(`Preço inválido: ${field}`)
  return Math.round(n * 100) / 100
}

const item = (raw: unknown): MenuItem => {
  const o = raw as Record<string, unknown>
  const name = str(o?.name, 120, 'nome')
  if (!name) throw new Error('Há um produto sem nome.')
  const out: MenuItem = { name, price: price(o.price, name) }
  if (typeof o.description === 'string' && o.description.trim()) out.description = o.description.trim().slice(0, 300)
  if (typeof o.addedDate === 'string' && DATE_RE.test(o.addedDate)) out.addedDate = o.addedDate
  return out
}

const arr = (v: unknown, field: string): unknown[] => {
  if (!Array.isArray(v)) throw new Error(`Campo inválido: ${field}`)
  return v
}

export function sanitizeMenu(input: unknown): MenuCategory[] {
  const cats = arr(input, 'menu')
  if (cats.length > 60) throw new Error('Demasiadas categorias.')
  const keys = new Set<string>()
  return cats.map((c) => {
    const o = c as Record<string, unknown>
    const label = str(o?.label, 60, 'categoria')
    if (!label) throw new Error('Há uma categoria sem nome.')
    const key = str(o.key, 60, 'chave') || label
    if (keys.has(key)) throw new Error(`Categoria repetida: ${label}`)
    keys.add(key)
    if (o.type === 'subcategories') {
      const subs = arr(o.subcategories ?? [], 'subgrupos').map((s): Subcategory => {
        const so = s as Record<string, unknown>
        const slabel = str(so?.label, 60, 'subgrupo')
        if (!slabel) throw new Error(`Subgrupo sem nome em ${label}.`)
        return { key: str(so.key, 60, 'chave') || slabel, label: slabel, items: arr(so.items ?? [], 'itens').map(item) }
      })
      return { key, label, type: 'subcategories', subcategories: subs }
    }
    return { key, label, type: 'items', items: arr(o.items ?? [], 'itens').map(item) }
  })
}

export function sanitizeEventos(input: unknown): Evento[] {
  const list = arr(input, 'eventos')
  if (list.length > 300) throw new Error('Demasiados eventos.')
  const ids = new Set<string>()
  return list.map((e) => {
    const o = e as Record<string, unknown>
    const title = str(o?.title, 120, 'título')
    if (!title) throw new Error('Há um evento sem título.')
    const date = str(o.date, 10, 'data')
    if (!DATE_RE.test(date)) throw new Error(`Data inválida no evento "${title}".`)
    const id = str(o.id, 80, 'id')
    if (!id || ids.has(id)) throw new Error('Evento com identificador inválido.')
    ids.add(id)
    let image: string | null = null
    if (typeof o.image === 'string' && o.image) {
      if (!/^(https:\/\/|\/)/.test(o.image) || o.image.length > 500) throw new Error('Imagem inválida.')
      image = o.image
    }
    return {
      id,
      title,
      date,
      time: str(o.time ?? '', 60, 'hora'),
      description: str(o.description ?? '', 1500, 'descrição'),
      image,
    }
  })
}
