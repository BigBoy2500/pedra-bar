'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import MenuEditor from './MenuEditor'
import EventosEditor from './EventosEditor'
import type { Evento, MenuCategory } from '@/lib/types'

export default function AdminDashboard({
  initialMenu,
  initialEventos,
  canWrite,
}: {
  initialMenu: MenuCategory[]
  initialEventos: Evento[]
  canWrite: boolean
}) {
  const router = useRouter()
  const [tab, setTab] = useState<'menu' | 'eventos'>('menu')

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.replace('/admin/login')
    router.refresh()
  }

  const tabClass = (t: string) =>
    `px-5 py-2 rounded-lg font-semibold transition-colors ${
      tab === t ? 'bg-primary text-white' : 'bg-white text-primary border border-primary/30 hover:bg-primary/5'
    }`

  return (
    <div className="container pt-32 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-primary">Painel</h1>
          <div className="flex gap-4 items-center">
            <a href={tab === 'menu' ? '/menu' : '/eventos'} target="_blank" rel="noreferrer" className="text-sm text-secondary underline">
              Ver no site
            </a>
            <button onClick={logout} className="text-sm text-gray-500 underline">
              Sair
            </button>
          </div>
        </div>

        {!canWrite && (
          <div className="mb-6 bg-red-50 border border-red-300 text-red-800 rounded-lg p-4 text-sm">
            O armazenamento ainda não está ligado (Upstash Redis na Vercel). Podes ver os dados mas não consegues guardar.
          </div>
        )}

        <div className="flex gap-3 mb-6">
          <button className={tabClass('menu')} onClick={() => setTab('menu')}>
            Menu
          </button>
          <button className={tabClass('eventos')} onClick={() => setTab('eventos')}>
            Eventos
          </button>
        </div>

        <div className={tab === 'menu' ? '' : 'hidden'}>
          <MenuEditor initial={initialMenu} />
        </div>
        <div className={tab === 'eventos' ? '' : 'hidden'}>
          <EventosEditor initial={initialEventos} />
        </div>
      </div>
    </div>
  )
}
