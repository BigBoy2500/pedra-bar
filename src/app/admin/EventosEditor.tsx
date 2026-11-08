'use client'

import { useState } from 'react'
import type { Evento } from '@/lib/types'
import { SaveBar, useSave } from './useSave'

const MAX_SIDE = 1600

/** Reduz a imagem no browser (máx. 1600px, JPEG) para ficar abaixo do limite de upload. */
async function shrink(file: File): Promise<File> {
  if (!file.type.startsWith('image/')) throw new Error('Escolhe uma imagem (JPG, PNG ou WEBP).')
  const bitmap = await createImageBitmap(file)
  const scale = Math.min(1, MAX_SIDE / Math.max(bitmap.width, bitmap.height))
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(bitmap.width * scale)
  canvas.height = Math.round(bitmap.height * scale)
  canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
  const blob: Blob | null = await new Promise((r) => canvas.toBlob(r, 'image/jpeg', 0.85))
  if (!blob) throw new Error('Não foi possível processar a imagem.')
  return new File([blob], 'cartaz.jpg', { type: 'image/jpeg' })
}

const newId = () => `evento-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`

export default function EventosEditor({ initial }: { initial: Evento[] }) {
  const [list, setList] = useState<Evento[]>(initial)
  const { dirty, state, save, markDirty } = useSave('/api/admin/eventos')

  const update = (next: Evento[]) => {
    setList(next)
    markDirty()
  }
  const patch = (id: string, p: Partial<Evento>) => update(list.map((e) => (e.id === id ? { ...e, ...p } : e)))

  function add() {
    const d = new Date().toISOString().slice(0, 10)
    update([{ id: newId(), title: '', date: d, time: 'A partir das 21:00', description: '', image: null }, ...list])
  }

  return (
    <div>
      <button onClick={add} className="btn-add mb-6" style={{ padding: '0.5rem 1rem', border: '1px dashed #e67e22', color: '#e67e22', borderRadius: '0.5rem', fontWeight: 600 }}>
        + Novo evento
      </button>

      {list.length === 0 && <p className="text-gray-500">Sem eventos.</p>}

      <div className="space-y-6">
        {list.map((ev) => (
          <EventoCard
            key={ev.id}
            ev={ev}
            onChange={(p) => patch(ev.id, p)}
            onDelete={() => {
              if (window.confirm(`Apagar o evento "${ev.title || 'sem título'}"?`)) update(list.filter((e) => e.id !== ev.id))
            }}
          />
        ))}
      </div>

      <SaveBar dirty={dirty} state={state} onSave={() => save(list)} />
    </div>
  )
}

function EventoCard({
  ev,
  onChange,
  onDelete,
}: {
  ev: Evento
  onChange: (p: Partial<Evento>) => void
  onDelete: () => void
}) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  async function upload(file: File | undefined) {
    if (!file) return
    setUploading(true)
    setError('')
    try {
      const small = await shrink(file)
      const fd = new FormData()
      fd.append('file', small)
      const res = await fetch('/api/admin/upload', { method: 'POST', body: fd })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.error ?? 'Erro no upload.')
      onChange({ image: data.url })
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Erro no upload.')
    } finally {
      setUploading(false)
    }
  }

  const input = 'w-full border border-gray-300 rounded-lg px-3 py-2'
  const label = 'block text-xs font-semibold text-gray-600 mb-1'

  return (
    <div className="bg-white rounded-lg shadow p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-5">
      <div>
        <p className={label}>Cartaz</p>
        <div className="bg-gray-200 rounded-lg overflow-hidden h-48 flex items-center justify-center">
          {ev.image ? (
            <img src={ev.image} alt="Cartaz" className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-500 text-sm">Sem cartaz</span>
          )}
        </div>
        <label className="mt-2 block text-center text-sm font-semibold text-secondary border border-secondary rounded-lg py-1.5 cursor-pointer hover:bg-secondary/10">
          {uploading ? 'A enviar…' : ev.image ? 'Trocar imagem' : 'Escolher imagem'}
          <input type="file" accept="image/*" className="hidden" disabled={uploading} onChange={(e) => upload(e.target.files?.[0])} />
        </label>
        {ev.image && (
          <button onClick={() => onChange({ image: null })} className="mt-1 w-full text-xs text-gray-500 underline">
            Remover imagem
          </button>
        )}
        {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
      </div>

      <div className="space-y-3">
        <div>
          <label className={label}>Título</label>
          <input value={ev.title} onChange={(e) => onChange({ title: e.target.value })} className={`${input} font-semibold`} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={label}>Data</label>
            <input type="date" value={ev.date} onChange={(e) => onChange({ date: e.target.value })} className={input} />
          </div>
          <div>
            <label className={label}>Hora</label>
            <input value={ev.time} onChange={(e) => onChange({ time: e.target.value })} className={input} placeholder="A partir das 21:00" />
          </div>
        </div>
        <div>
          <label className={label}>Descrição</label>
          <textarea value={ev.description} onChange={(e) => onChange({ description: e.target.value })} rows={4} className={input} />
        </div>
        <div className="text-right">
          <button onClick={onDelete} className="text-sm text-red-600 border border-red-300 rounded-lg px-3 py-1.5 font-semibold">
            Apagar evento
          </button>
        </div>
      </div>
    </div>
  )
}
