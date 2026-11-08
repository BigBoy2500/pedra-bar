'use client'

import { useState } from 'react'
import { isItemNew, type MenuCategory, type MenuItem } from '@/lib/types'
import { SaveBar, useSave } from './useSave'

const today = () => new Date().toISOString().slice(0, 10)

const slugify = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'categoria'

function move<T>(list: T[], from: number, to: number): T[] {
  if (to < 0 || to >= list.length) return list
  const copy = [...list]
  const [x] = copy.splice(from, 1)
  copy.splice(to, 0, x)
  return copy
}

const parsePrice = (s: string): number => {
  const n = parseFloat(s.replace(',', '.'))
  return Number.isFinite(n) && n >= 0 ? n : 0
}

export default function MenuEditor({ initial }: { initial: MenuCategory[] }) {
  const [cats, setCats] = useState<MenuCategory[]>(initial)
  const [sel, setSel] = useState(0)
  const { dirty, state, save, markDirty } = useSave('/api/admin/menu')

  const update = (next: MenuCategory[]) => {
    setCats(next)
    markDirty()
  }
  const cat = cats[sel] as MenuCategory | undefined

  const patchCat = (patch: Partial<MenuCategory>) => update(cats.map((c, i) => (i === sel ? { ...c, ...patch } : c)))

  function addCategory() {
    const label = window.prompt('Nome da nova categoria (ex.: Sobremesas):')?.trim()
    if (!label) return
    const withSubs = window.confirm(
      'Esta categoria tem subgrupos (como os Long Drinks: Gins, Vodkas…)?\n\nOK = sim, com subgrupos\nCancelar = não, é uma lista simples'
    )
    let key = slugify(label)
    while (cats.some((c) => c.key === key)) key += '-2'
    const nova: MenuCategory = withSubs
      ? { key, label, type: 'subcategories', subcategories: [] }
      : { key, label, type: 'items', items: [] }
    update([...cats, nova])
    setSel(cats.length)
  }

  function deleteCategory() {
    if (!cat) return
    if (!window.confirm(`Apagar a categoria "${cat.label}" e todos os seus produtos?`)) return
    update(cats.filter((_, i) => i !== sel))
    setSel(Math.max(0, sel - 1))
  }

  function moveCategory(dir: -1 | 1) {
    update(move(cats, sel, sel + dir))
    setSel(sel + dir)
  }

  function addSubgroup() {
    if (!cat) return
    const label = window.prompt('Nome do subgrupo (ex.: Gins):')?.trim()
    if (!label) return
    let key = slugify(label)
    const subs = cat.subcategories ?? []
    while (subs.some((s) => s.key === key)) key += '-2'
    patchCat({ subcategories: [...subs, { key, label, items: [] }] })
  }

  return (
    <div>
      {/* Categorias */}
      <div className="flex flex-wrap gap-2 mb-6">
        {cats.map((c, i) => (
          <button
            key={c.key}
            onClick={() => setSel(i)}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold border ${
              i === sel ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-primary/30 hover:bg-primary/5'
            }`}
          >
            {c.label}
          </button>
        ))}
        <button onClick={addCategory} className="px-3 py-1.5 rounded-lg text-sm font-semibold border border-dashed border-secondary text-secondary hover:bg-secondary/10">
          + Nova categoria
        </button>
      </div>

      {!cat ? (
        <p className="text-gray-500">Sem categorias. Cria uma com “+ Nova categoria”.</p>
      ) : (
        <div className="bg-white rounded-lg shadow p-5 sm:p-6">
          <div className="flex flex-wrap items-end gap-3 mb-6">
            <div className="flex-1 min-w-[12rem]">
              <label className="block text-xs font-semibold text-gray-600 mb-1">Nome da categoria</label>
              <input
                value={cat.label}
                onChange={(e) => patchCat({ label: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 font-semibold"
              />
            </div>
            <button onClick={() => moveCategory(-1)} disabled={sel === 0} className="btn-mini" title="Mover para a esquerda">
              ←
            </button>
            <button onClick={() => moveCategory(1)} disabled={sel === cats.length - 1} className="btn-mini" title="Mover para a direita">
              →
            </button>
            <button onClick={deleteCategory} className="btn-mini text-red-600 border-red-300">
              Apagar categoria
            </button>
          </div>

          {cat.type === 'subcategories' ? (
            <div className="space-y-8">
              {(cat.subcategories ?? []).map((sub, si) => (
                <div key={sub.key} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-end gap-3 mb-3">
                    <div className="flex-1">
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Subgrupo</label>
                      <input
                        value={sub.label}
                        onChange={(e) =>
                          patchCat({
                            subcategories: cat.subcategories!.map((s, k) => (k === si ? { ...s, label: e.target.value } : s)),
                          })
                        }
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 font-semibold"
                      />
                    </div>
                    <button
                      className="btn-mini text-red-600 border-red-300"
                      onClick={() => {
                        if (!window.confirm(`Apagar o subgrupo "${sub.label}" e os seus produtos?`)) return
                        patchCat({ subcategories: cat.subcategories!.filter((_, k) => k !== si) })
                      }}
                    >
                      Apagar subgrupo
                    </button>
                  </div>
                  <ItemList
                    items={sub.items}
                    onChange={(items) =>
                      patchCat({ subcategories: cat.subcategories!.map((s, k) => (k === si ? { ...s, items } : s)) })
                    }
                  />
                </div>
              ))}
              <button onClick={addSubgroup} className="btn-add">
                + Novo subgrupo
              </button>
            </div>
          ) : (
            <ItemList items={cat.items ?? []} onChange={(items) => patchCat({ items })} />
          )}
        </div>
      )}

      <SaveBar dirty={dirty} state={state} onSave={() => save(cats)} />
      <style jsx global>{`
        .btn-mini {
          padding: 0.4rem 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          background: #fff;
        }
        .btn-mini:disabled {
          opacity: 0.35;
        }
        .btn-add {
          padding: 0.5rem 1rem;
          border: 1px dashed #e67e22;
          color: #e67e22;
          border-radius: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .btn-add:hover {
          background: rgba(230, 126, 34, 0.1);
        }
      `}</style>
    </div>
  )
}

function ItemList({ items, onChange }: { items: MenuItem[]; onChange: (items: MenuItem[]) => void }) {
  const set = (i: number, patch: Partial<MenuItem>) => onChange(items.map((it, k) => (k === i ? { ...it, ...patch } : it)))

  return (
    <div>
      {items.length === 0 && <p className="text-sm text-gray-400 mb-3">Sem produtos ainda.</p>}
      <div className="space-y-2">
        {items.map((it, i) => (
          <ItemRow
            key={i}
            item={it}
            isFirst={i === 0}
            isLast={i === items.length - 1}
            onName={(name) => set(i, { name })}
            onPrice={(price) => set(i, { price })}
            onNew={(isNew) => {
              const copy = { ...it }
              if (isNew) copy.addedDate = today()
              else delete copy.addedDate
              onChange(items.map((x, k) => (k === i ? copy : x)))
            }}
            onUp={() => onChange(move(items, i, i - 1))}
            onDown={() => onChange(move(items, i, i + 1))}
            onDelete={() => {
              if (window.confirm(`Apagar "${it.name || 'este produto'}"?`)) onChange(items.filter((_, k) => k !== i))
            }}
          />
        ))}
      </div>
      <button className="btn-add mt-4" onClick={() => onChange([...items, { name: '', price: 0 }])}>
        + Novo produto
      </button>
    </div>
  )
}

function ItemRow({
  item,
  isFirst,
  isLast,
  onName,
  onPrice,
  onNew,
  onUp,
  onDown,
  onDelete,
}: {
  item: MenuItem
  isFirst: boolean
  isLast: boolean
  onName: (v: string) => void
  onPrice: (v: number) => void
  onNew: (v: boolean) => void
  onUp: () => void
  onDown: () => void
  onDelete: () => void
}) {
  // Texto do preço em estado local para permitir escrever "2,5" sem saltos de cursor.
  const [priceText, setPriceText] = useState(item.price === 0 ? '' : item.price.toFixed(2).replace('.', ','))

  return (
    <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 bg-gray-50 rounded-lg p-2">
      <input
        value={item.name}
        placeholder="Nome do produto"
        onChange={(e) => onName(e.target.value)}
        className="flex-1 min-w-[10rem] border border-gray-300 rounded-lg px-3 py-2 bg-white"
      />
      <div className="flex items-center">
        <input
          value={priceText}
          inputMode="decimal"
          placeholder="0,00"
          onChange={(e) => {
            setPriceText(e.target.value)
            onPrice(parsePrice(e.target.value))
          }}
          className="w-20 border border-gray-300 rounded-lg px-2 py-2 text-right bg-white"
        />
        <span className="ml-1 text-gray-600">€</span>
      </div>
      <label className="flex items-center gap-1 text-xs font-semibold text-gray-700 whitespace-nowrap cursor-pointer">
        <input type="checkbox" checked={isItemNew(item.addedDate)} onChange={(e) => onNew(e.target.checked)} />
        Novidade
      </label>
      <button onClick={onUp} disabled={isFirst} className="btn-mini" title="Subir">
        ↑
      </button>
      <button onClick={onDown} disabled={isLast} className="btn-mini" title="Descer">
        ↓
      </button>
      <button onClick={onDelete} className="btn-mini text-red-600 border-red-300" title="Apagar">
        ✕
      </button>
    </div>
  )
}
