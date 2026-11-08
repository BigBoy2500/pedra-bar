'use client'

import { useCallback, useEffect, useState } from 'react'

export type SaveState = { status: 'idle' | 'saving' | 'saved' | 'error'; message?: string }

/** Guarda `data` com PUT em `url`; avisa se sair com alterações por guardar. */
export function useSave(url: string) {
  const [dirty, setDirty] = useState(false)
  const [state, setState] = useState<SaveState>({ status: 'idle' })

  useEffect(() => {
    if (!dirty) return
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = ''
    }
    window.addEventListener('beforeunload', handler)
    return () => window.removeEventListener('beforeunload', handler)
  }, [dirty])

  const save = useCallback(
    async (data: unknown) => {
      setState({ status: 'saving' })
      try {
        const res = await fetch(url, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        const body = await res.json().catch(() => ({}))
        if (!res.ok) {
          setState({ status: 'error', message: body.error ?? 'Erro ao guardar.' })
          return false
        }
        setDirty(false)
        setState({ status: 'saved' })
        return true
      } catch {
        setState({ status: 'error', message: 'Sem ligação ao servidor.' })
        return false
      }
    },
    [url]
  )

  const markDirty = useCallback(() => {
    setDirty(true)
    setState((s) => (s.status === 'saved' || s.status === 'error' ? { status: 'idle' } : s))
  }, [])

  return { dirty, state, save, markDirty }
}

export function SaveBar({
  dirty,
  state,
  onSave,
}: {
  dirty: boolean
  state: SaveState
  onSave: () => void
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-[0_-2px_10px_rgba(0,0,0,0.08)] z-40">
      <div className="container py-3 flex items-center justify-between gap-4">
        <p className={`text-sm ${state.status === 'error' ? 'text-red-600' : state.status === 'saved' ? 'text-accent' : 'text-gray-500'}`}>
          {state.status === 'saving' && 'A guardar…'}
          {state.status === 'saved' && 'Guardado. O site já está atualizado.'}
          {state.status === 'error' && state.message}
          {state.status === 'idle' && (dirty ? 'Tens alterações por guardar.' : 'Sem alterações.')}
        </p>
        <button
          onClick={onSave}
          disabled={!dirty || state.status === 'saving'}
          className="bg-secondary text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary/90 disabled:opacity-40"
        >
          Guardar alterações
        </button>
      </div>
    </div>
  )
}
